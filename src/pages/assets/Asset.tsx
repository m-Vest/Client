import ideaImg from '/icons/assets/idea.png';
import MyAsset from './components/MyAsset';
const Asset = ()=>{
    return (
        <div className="pt-[3.2rem] pb-[8rem] flex flex-col justify-between bg-[#F9FAFB] flex flex-col justify-start">
             <div className="flex flex-col px-[2rem] gap-[0.4rem]">
                <h2 className="text-[2.4rem] font-bold">💼 내 자산</h2>
                <span className="text-[1.6rem] font-normal text-[#4A5565]">보유 중인 주식을 확인해보세요</span>
            </div>

           <div className="relative px-[2rem] w-full mt-[2.4rem] z-10">
                <div className="rounded-3xl bg-white shadow-lg p-[2.4rem] relative ">
                    <h1 className="text-[1.4rem] leading-8 tracking-[-0.015rem] font-normal">주식 평가액</h1>
                    <p className="mt-[0.3rem] mb-[1.2rem] font-bold text-[3.6rem]">890,870<span className="font-normal text-[2rem]">원</span></p>
                    <span className="rounded-full bg-[#155DFC] py-[0.7rem] px-[1.2rem] text-[1.6rem] text-white font-semibold">
                        +980원
                    </span>
                </div>
           </div>
            <div className="relative w-full">
               <div className="absolute w-full top-[-3rem]">
                    <div className="pt-[7rem] pb-[3rem] px-[2rem] rounded-[16px] border border-[#FFF085] bg-gradient-to-br from-[#FEFCE8] to-[#FFF7ED] flex flex-row gap-[1.2rem]">
                       <img src={ideaImg} className="w-[4rem] h-[4rem]"/>
                       <div className="flex flex-col gap-[0.4rem]">
                            <h1 className="text-[1.7rem] font-bold">투자 꿀팁</h1>
                            <h3 className="text-[1.4rem] text-[#364153] font-medium">분산 투자를 해보세요!<br/>여러 종목에 나눠 투자하면 리스크를 줄일 수 있어요.</h3>
                       </div>
                    </div>

                    <div className='pt-[2.4rem] px-[2rem] w-full flex flex-col gap-[0.8rem]'>
                            <div className='flex flex-row justify-between items-center mb-[1.2rem]'>
                                <h2 className='text-[1.8rem] font-bold'>보유 주식</h2>
                                <span className='text-[1.4rem] text-[#6A7282] font-normal'>2개 종목</span>
                            </div>
                            <MyAsset stockName='SK 하이닉스' stockCount={10} stockPrice={98900} totalAmount={890000} profitLoss={980}/>
                            <MyAsset stockName='삼성전자' stockCount={5} stockPrice={75000} totalAmount={375000} profitLoss={5000}/>
                    </div>
                    

               </div>
               
            </div>
           
        </div>
        
    )
}
export default Asset;