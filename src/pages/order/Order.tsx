import OrderHeader from "./components/OrderHeader";
import walletImg from '/icons/order/wallet.png'
const Order = () =>{
    return (
        <div className="relative w-full h-full flex flex-col gap-[2.4rem] justify-between bg-[#F9FAFB]">
            <OrderHeader />
            <div className="relative pt-[10rem] px-[2rem] flex flex-col gap-[1.6rem]">
                <div className="rounded-3xl bg-white shadow-sm p-[2.4rem]">
                     <h1 className="text-[#6A7282] text-[1.4rem] font-normal">현재가</h1>
                     <p className=" mb-[1.2rem] text-[3.6rem] font-bold">123,456 <span className="text-[2.4rem]">원</span></p>
                     <span className="py-[0.65rem] text-[1.4rem] font-semibold bg-[#EFF6FF] text-[#155DFC] px-[1.2rem] rounded-full">-1,950원 (-1.5%)</span>
                </div>
                 <div className="rounded-3xl p-[2.5rem] flex flex-col border border-[#DBEAFE] bg-gradient-to-br from-[#EFF6FF] to-[#EEF2FF]">
                    <div className="flex flex-row gap-[0.8rem] items-center justify-start mb-[2rem]">
                        <img src={walletImg} className="w-auto h-[4rem]"/>
                        <p className="text-[1.6rem] font-bold">내 보유 정보</p>
                    </div>
                    <div className="flex flex-col gap-[1.4rem] border-b border-b-[#BEDBFF] pb-[1.4rem]">
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
            </div>
           
        </div>
    )
}
export default Order;