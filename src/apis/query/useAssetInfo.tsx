import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

export interface AssetStock {
  stockCode: string;
  currentTotalAmount: number;
  investedAmount: number;
  currentPrice: number;
  quantity: number;
  profitAmount: number;
  profitRate: number;
}

export interface AssetInfo {
  userId: number;
  balance: number;
  totalStockEvaluation: number;
  totalProfitAmount: number;
  totalProfitRate: number;
  totalStockQuantity: number;
  stocks: AssetStock[];
}

interface AssetInfoResponse {
  code: number;
  message: string;
  data: AssetInfo;
}

export const useAssetInfo = () => {
  const [assetInfo, setAssetInfo] = useState<AssetInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getAssetInfo = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      setAssetInfo(null);
      setIsLoading(false);
      setIsError(true);
      return;
    }

    try {
      setIsLoading(true);

      const { data } = await api.get<AssetInfoResponse>('/asset', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setAssetInfo(data.data);
      setIsError(false);
    } catch (error) {
      console.error('자산 조회 실패:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAssetInfo();
  }, []);

  return {
    assetInfo,
    isLoading,
    isError,
    getAssetInfo,
  };
};
