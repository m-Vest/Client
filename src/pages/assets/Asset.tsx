

const Asset = ()=>{
    return (
        <div className="pt-[3.2rem] pb-[8rem] px-[2rem] flex flex-col gap-[2.4rem] justify-between bg-[#F9FAFB] flex flex-col justify-start">
             <div className="flex flex-col gap-[0.4rem]">
                <h2 className="text-[2.4rem] font-bold">💼 내 자산</h2>
                <span className="text-[1.6rem] font-normal text-[#4A5565]">보유 중인 주식을 확인해보세요</span>
            </div>

            <div className="rounded-3xl bg-white shadow-lg p-[2.4rem]">
                <h1 className="text-[1.4rem] leading-8 tracking-[-0.015rem] font-normal">주식 평가액</h1>
                <p className="mt-[0.3rem] mb-[1.2rem] font-bold text-[3.6rem]">890,870<span className="font-normal text-[2rem]">원</span></p>
                <span className="rounded-full bg-[#155DFC] py-[0.7rem] px-[1.2rem] text-[1.6rem] text-white font-semibold">
                    +980원
                </span>
            </div>

           
        </div>
        
    )
}
export default Asset;