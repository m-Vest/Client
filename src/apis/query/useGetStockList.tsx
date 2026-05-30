import { useEffect, useState } from "react";
import { api } from "../../lib/api";

interface StockPriceDto {
  stockCode: string;
  stockName: string;
  price: number;
  change: number;
  changeRate: number;
  dataStatus: "NORMAL" | "ERROR";
}

interface StockListResponse {
  stockPriceDtoList: StockPriceDto[];
  dataStatus: "NORMAL" | "ERROR";
}

export const useGetStockList = () => {
  const [stockList, setStockList] = useState<StockPriceDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getStockList = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<StockListResponse>("/stocks");

      console.log("주식 응답:", data);

      if (data.dataStatus !== "NORMAL") {
        throw new Error("데이터 상태 비정상");
      }

      setStockList(data.stockPriceDtoList);
      setIsError(false);
    } catch (error) {
      console.error("주식 목록 조회 실패:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStockList();
  }, []);

  return {
    stockList,
    isLoading,
    isError,
    getStockList,
  };
};