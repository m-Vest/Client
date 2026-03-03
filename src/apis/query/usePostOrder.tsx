import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/api";

type OrderType = "BUY" | "SELL";

interface PostOrderRequest {
  stockCode: string;
  orderType: OrderType;
  price: number;
  quantity: number;
}

interface PostOrderResponse {
  orderId: number;
  stockCode: string;
  orderType: OrderType;
  price: number;
  quantity: number;
  createdAt: string;
}

export const usePostOrder = () => {
  return useMutation({
    mutationFn: async (body: PostOrderRequest) => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("토큰 없음");
      }

      const { data } = await api.post<PostOrderResponse>(
        "/order/create",
        body,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return data;
    },
  });
};