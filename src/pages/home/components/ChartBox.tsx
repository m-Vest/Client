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
import { useState } from 'react';
import type { ActiveElement, TooltipItem } from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

interface AssetData {
  date: string;
  value: number;
}

const mockAssetData: AssetData[] = [
  { date: '1/25', value: 980000 },
  { date: '1/26', value: 1010000 },
  { date: '1/27', value: 995000 },
  { date: '1/28', value: 1080000 },
  { date: '1/29', value: 1040000 },
  { date: '1/30', value: 1120000 },
  { date: '1/31', value: 1180000 },
];
const labels = mockAssetData.map((d) => d.date);

const ChartBox = () => {
  const [selected, setSelected] = useState<AssetData | null>(null);

  const chartData = {
    labels: mockAssetData.map((d) => d.date),
    datasets: [
      {
        data: mockAssetData.map((d) => d.value),
        borderColor: '#EF4444',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHitRadius: 14,     
        pointHoverRadius: 6,
      },
    ],
  };

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
      setSelected(mockAssetData[index]);
    },

    onClick: (
      _event: ChartEvent,
      elements: ActiveElement[]
    ) => {
      if (!elements.length) return;
      const index = elements[0].index;
      setSelected(mockAssetData[index]);
    },

    plugins: {
      legend: {
        display: true,
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
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                color: '#9CA3AF',
                maxTicksLimit: 5,
                callback: (_value:number, index:number) => {
                    return index % 2 === 0 ? labels[index] : '';
                },
                },
            },
            y: {
                display: false,
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
      {/* 📈 차트 영역 */}
      <div className="flex-1 h-[220px]">
        <Line data={chartData} options={chartOptions} />
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
