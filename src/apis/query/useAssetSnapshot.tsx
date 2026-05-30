import { useEffect, useState } from 'react';
import { api } from '../../lib/api';

export interface AssetSnapshot {
  snapshotDate: string;
  totalAsset: number;
  cashAmount: number;
  stockEvaluationAmount: number;
}

interface AssetSnapshotResponse {
  code: number;
  message: string;
  data: {
    userId: number;
    snapshots: AssetSnapshot[];
  };
}

export const useAssetSnapshot = () => {
  const [snapshots, setSnapshots] = useState<AssetSnapshot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getAssetSnapshot = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      setSnapshots([]);
      setIsLoading(false);
      setIsError(true);
      return;
    }

    try {
      setIsLoading(true);

      const { data } = await api.get<AssetSnapshotResponse>(
        '/asset/snapshot',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setSnapshots(data.data.snapshots);
      setIsError(false);
    } catch (error) {
      console.error('자산 스냅샷 조회 실패:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAssetSnapshot();
  }, []);

  return {
    snapshots,
    isLoading,
    isError,
    getAssetSnapshot,
  };
};
