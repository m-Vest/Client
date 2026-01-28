const Home =()=>{
    return (
        <div className="py-[3.2rem] px-[4.5rem] flex flex-col gap-[2.4rem] justify-between">
            <div className="flex flex-col gap-[0.4rem]">
                <h2>투자왕님</h2>
                <span>투자 실력을 키워가고 있어요!</span>
            </div>
            <div className="p-[2.4rem] flex flex-col rounded-[24px] bg-gradient-to-br justify-between from-[#155DFC] to-[#1447E6] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),_0_4px_6px_-4px_rgba(0,0,0,0.10)] w-[40.8rem] h-[17.6rem]">
                <span className="text-[#DBEAFE] text-[1.4rem]">현재 내 자산</span>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-[#FFF] text-[3.6rem] font-weight-700">1000000</span>
                    <span className="text-[#DBEAFE] text-[2rem] font-weight-400">원</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <span className="bg-[#FB2C3633] rounded-[99px] text-[1.4rem] text-white font-weight-600 py-[0.7rem] px-[1.2rem]">+50000</span>
                    <span className="text-[#FFC9C9] text-[1.4rem] font-weight-600">+5.00%</span>
                </div>
            </div>
        </div>
    )
}
export default Home;