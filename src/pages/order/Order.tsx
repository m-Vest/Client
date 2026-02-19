import OrderHeader from "./components/OrderHeader";
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
            </div>
            <div className="rounded-3xl p-[2.5rem] flex flex-col border border-[#DBEAFE] bg-gradient-to-br from-[#EFF6FF] to-[#EEF2FF]">
                <div></div>
            </div>
        </div>
    )
}
export default Order;