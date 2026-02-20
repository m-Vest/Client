import OrderHeader from "./components/OrderHeader";
import walletImg from '/icons/order/wallet.png'
import { useLocation } from "react-router-dom";
import SellModal from "./components/SellModal";
import BuyModal from "./components/BuyModal";
import { useState } from "react";
const Order = () =>{
    const location = useLocation();
    const { stockName } = location.state || {};
    const [isSellOpen, setIsSellOpen] = useState(false);
    const [isBuyOpen, setIsBuyOpen] = useState(false);
    return (
        <div className="relative w-full h-full flex flex-col gap-[2.4rem] justify-between bg-[#fafafa]">
            <OrderHeader stockName={stockName}/>
            {isSellOpen &&  <SellModal stockName={stockName} stockCode="000660" stockPrice={128000} myStockCount={3} onClose={() => setIsSellOpen(false)}/>}
            {isBuyOpen &&  <BuyModal stockName={stockName} stockCode="000660" stockPrice={128000} myAsset={1000000} onClose={() => setIsBuyOpen(false)}/>}
            <div className="relative pt-[8rem] px-[2rem] pb-[11rem] flex flex-col gap-[1.6rem] bg-[#fafafa]">
                <div className="rounded-3xl bg-white shadow-sm p-[2.4rem]">
                     <h1 className="text-[#6A7282] text-[1.4rem] font-normal">현재가</h1>
                     <p className=" mb-[1.2rem] text-[3.6rem] font-bold">123,456 <span className="text-[2.4rem]">원</span></p>
                     <span className="py-[0.65rem] text-[1.4rem] font-semibold bg-[#EFF6FF] text-[#155DFC] px-[1.2rem] rounded-full">-1,950원 (-1.5%)</span>
                </div>
                 <div className="rounded-3xl p-[2rem] flex flex-col border border-[#DBEAFE] bg-gradient-to-br from-[#EFF6FF] to-[#EEF2FF]">
                    <div className="flex flex-row gap-[0.8rem] items-center justify-start mb-[2rem]">
                        <img src={walletImg} className="w-auto h-[3rem]"/>
                        <p className="text-[1.6rem] font-bold">내 보유 정보</p>
                    </div>
                    <div className="flex flex-col gap-[1.2rem] border-b border-b-[#BEDBFF] pb-[1.4rem]">
                        <div className="flex flex-row justify-between w-full items-center">
                            <span className="text-[#4A5565] text-[1.4rem] font-normal">보유 수량</span>
                            <span className="text-black text-[1.6rem] font-bold">1주</span>
                        </div>
                        <div className="flex flex-row justify-between w-full items-center">
                            <span className="text-[#4A5565] text-[1.4rem] font-normal">평균 매수가</span>
                            <span className="text-black text-[1.6rem] font-bold">123,456원</span>
                        </div>
                        <div className="flex flex-row justify-between w-full items-center">
                            <span className="text-[#4A5565] text-[1.4rem] font-normal">평가 금액</span>
                            <span className="text-black text-[1.6rem] font-bold">123,456원</span>
                        </div>
                    </div>
                    <div className="py-[1rem] flex flex-row justify-between items-center">
                        <span className="text-[#4A5565] text-[1.4rem] font-normal">평가 금액</span>
                        <span className="text-[#E7000B] text-[1.8rem] font-bold">+0원(+0.00%)</span>
                    </div>
                </div>
                <div className="p-[2rem] rounded-3xl bg-white shadow-sm">
                    <h1 className="text-[1.8rem] font-bold">거래 정보</h1>
                    <div className="flex flex-col gap-[1.4rem] mt-[1.8rem] border-b border-b-[#d6d6d6] pb-[1.4rem]">
                        <div className="flex flex-row justify-between w-full items-center">
                            <span className="text-[#4A5565] text-[1.4rem] font-normal">매수 가능 수량</span>
                            <span className="text-black text-[1.6rem] font-bold">1주</span>
                        </div>
                        <div className="flex flex-row justify-between w-full items-center">
                            <span className="text-[#4A5565] text-[1.4rem] font-normal">매도 가능 수량</span>
                            <span className="text-black text-[1.6rem] font-bold">13,456원</span>
                        </div>
                    </div>
                    <div className="py-[0.85rem] flex flex-row justify-between w-full items-center">
                        <span className="text-[#4A5565] text-[1.4rem] font-normal">예수금</span>
                        <span className="text-black text-[1.6rem] font-bold">1,223,456원</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-[1.2rem] p-[2rem] bg-white w-full fixed bottom-0 z-10 rounded-t-[16px] border-t border-t-[#E5E7EB]">
                <button className="py-[1.57rem] w-full bg-[#155DFC] text-white rounded-[16px] text-[1.6rem] font-bold" onClick={() => setIsBuyOpen(true)}>매도</button>
                <button className="py-[1.57rem] w-full bg-[#E7000B] text-white rounded-[16px] text-[1.6rem] font-bold" onClick={() => setIsSellOpen(true)}>매수</button>
            </div>
        </div>
    )
}
export default Order;