import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  type ChartEvent,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useMemo, useState } from 'react';
import type { ActiveElement, TooltipItem } from 'chart.js';
import { useAssetSnapshot } from '../../../apis/query/useAssetSnapshot';
import { useAssetInfo } from '../../../apis/query/useAssetInfo';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const formatSnapshotDate = (date: string) => {
  const [, month, day] = date.split('-');
  return `${Number(month)}/${Number(day)}`;
};

const formatLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const ChartBox = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { snapshots, isLoading, isError } = useAssetSnapshot();
  const {
    assetInfo,
    isLoading: isAssetInfoLoading,
    isError: isAssetInfoError,
  } = useAssetInfo();

  const assetData = useMemo(
    () => {
      const snapshotMap = new Map(
        snapshots.map((snapshot) => [snapshot.snapshotDate, snapshot])
      );

      if (assetInfo) {
        const today = formatLocalDate(new Date());

        snapshotMap.set(today, {
          snapshotDate: today,
          totalAsset: assetInfo.balance + assetInfo.totalStockEvaluation,
          cashAmount: assetInfo.balance,
          stockEvaluationAmount: assetInfo.totalStockEvaluation,
        });
      }

      return Array.from(snapshotMap.values())
        .sort((a, b) => a.snapshotDate.localeCompare(b.snapshotDate))
        .map((snapshot) => ({
        date: formatSnapshotDate(snapshot.snapshotDate),
        value: snapshot.totalAsset,
      }));
    },
    [snapshots, assetInfo]
  );

  const labels = assetData.map((d) => d.date);
  const isEmptyData = assetData.length === 0;
  const isChartLoading = isLoading || isAssetInfoLoading;
  const isChartError = isError && isAssetInfoError;
  const selected =
    selectedIndex !== null && assetData[selectedIndex]
      ? assetData[selectedIndex]
      : assetData.at(-1) ?? null;

  const chartData = {
    labels,
    datasets: [
      {
        data: assetData.map((d) => d.value),
        borderColor: '#EF4444',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: assetData.length <= 2 ? 5 : 2,
        pointBackgroundColor: '#EF4444',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointHitRadius: 14,     
        pointHoverRadius: 6,
      },
    ],
  };
 // TODO: 이거 이후에 속성들 확인 및 티스토리 블로그 정리!
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: 'nearest' as const,
      intersect: false,
    },

    onHover: (
      _event: ChartEvent,
      elements: ActiveElement[]
    ) => {
      if (!elements.length) return;
      const index = elements[0].index;
      setSelectedIndex(index);
    },

    onClick: (
      _event: ChartEvent,
      elements: ActiveElement[]
    ) => {
      if (!elements.length) return;
      const index = elements[0].index;
      setSelectedIndex(index);
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx: TooltipItem<'line'>) =>
            `${ctx.parsed?.y?.toLocaleString()}원`,
        },
      },
    },
   
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9CA3AF',
          maxTicksLimit: 5,
          callback: (_value: string | number, index: number) => {
            const isFirst = index === 0;
            const isLast = index === labels.length - 1;

            return isFirst || isLast || index % 2 === 0 ? labels[index] : '';
          },
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="flex gap-[24px] bg-white rounded-[24px] pt-[5rem] px-[1rem] pb-[2rem] shadow-sm relative">
      <div className="flex-1 h-[220px]">
        {!isEmptyData ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-[1.4rem] text-gray-300">
              {isChartLoading
                ? '자산 데이터를 불러오는 중'
                : isChartError
                  ? '자산 데이터를 불러오지 못했어요'
                  : '표시할 자산 데이터가 없어요'}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-row justify-center absolute top-[2rem] left-[2rem] items-center gap-3">
        {selected ? (
          <>
            <span className="text-[1rem] text-gray-400">
              {selected.date}
            </span>
            <strong className="text-[1.5rem] font-bold text-gray-900">
              {selected.value.toLocaleString()}원
            </strong>
          </>
        ) : (
          <span className="text-[14px] text-gray-300 leading-[1.6]">
            상세 금액을 확인하려면, 클릭해주세요
          </span>
        )}
      </div>
    </div>
  );
};

export default ChartBox;
