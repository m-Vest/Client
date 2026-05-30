import { useEffect, useState } from "react";
import { api } from "../../lib/api";

interface StockDto {
  stockCode: string;
  stockName: string;
  price: number;
  change: number;
  changeRate: number;
  dataStatus: "NORMAL" | "ERROR";
  userBalance: number;
  userStockQuantity: number;
}



export const useStockInfo = (code: string) => {
  const [stock, setStock] = useState<StockDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  const getStockInfo = async () => {
    try {
      setIsLoading(true);

      const { data } = await api.get<StockDto>(
        `/stocks/${code}/tradeInfo`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    

      setStock(data);
      setIsError(false);
    } catch (error) {
      console.error("주식 조회 실패:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (code) getStockInfo();
  }, [code]);

  return {
    stock, isLoading, isError
  };
};