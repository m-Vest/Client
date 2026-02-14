import RocketImg from '/icons/home/rocket.svg';
import MenuBox from './components/MenuBox';
import ChartBox from './components/ChartBox';
import InfoBox from './components/InfoBox';
import upRatio from '/icons/home/upRatio.svg';
const Home =()=>{
    const nickname = localStorage.getItem('nickname') || '투자왕님';
    return (
        <div className="pt-[3.2rem] pb-[8rem] px-[2rem] flex flex-col gap-[2.4rem] justify-between bg-[#F9FAFB]">
            <div className="flex flex-col gap-[0.4rem]">
                <h2 className="text-[2.4rem] font-bold">{nickname} <span className='text-[2.4rem] font-medium'>님</span></h2>
                <span className="text-[1.6rem] font-normal text-[#4A5565]">투자 실력을 키워가고 있어요!</span>
            </div>
            <div className="p-[2.4rem] flex flex-col rounded-[24px] bg-gradient-to-br justify-between bg-gradient-to-br from-[#1447E6] to-[rgba(127,156,219,0.82)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),_0_4px_6px_-4px_rgba(0,0,0,0.10)]">
                <span className="text-[#DBEAFE] text-[1.4rem]">💰 현재 내 자산</span>
                <div className="flex flex-row items-center gap-2 pb-[1.2rem] border-b border-[#F3F4F6]">
                    <span className="text-[#FFF] text-[3.6rem] font-bold">1000000</span>
                    <span className="text-[#FFF] text-[2rem] font-normal">원</span>
                </div>
                <div className="flex flex-row justify-between items-center gap-2 pt-[1.6rem]">
                   <div className='flex flex-col gap-[0.2rem] items-start'>
                        <span className="text-[#FFF] text-[1.2rem]">보유 현금</span>
                        <span className='text-white text-[1.6rem] font-bold'>86,500원</span>
                   </div>
                   <div className='flex flex-col gap-[0.2rem] items-end'>
                        <span className="text-[#FFF] text-[1.2rem]">주식 평가액</span>
                        <span className='text-white text-[1.6rem] font-bold'>175,500원</span>
                   </div>
                </div>
            </div>
            <ChartBox />
            <div className="
                    flex
                    items-center
                    h-[83.893px]
                    rounded-[16px]
                    border-[0.585px] border-[#BEDBFF]
                    bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE]
                    shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]
                    py-[16.583px] px-[16.583px]
                    gap-3
                    ">
                <img src={RocketImg} />
                <div className="flex flex-col">
                    <p className="text-[1.6rem] font-bold">첫 투자를 시작해보세요</p>
                    <p className="text-[1.4rem] text-[#364153] font-normal">다양한 종목들을 확인할 수 있어요!</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center gap-3'>
                <InfoBox type='count' data={0}/>
                <InfoBox type='stock' data={0}/>
                <InfoBox type='revenue' data={0}/>
            </div>
            <div className='flex flex-row gap-3'>
              <MenuBox icon="/icons/home/buy.png" title="주식 사기" description="종목 둘러보기"/>
              <MenuBox icon="/icons/home/myAsset.png" title="내 자산" description="보유 현황 보기"/>
            </div>
            
            <div className="flex flex-col p-[1.8rem] rounded-[16px] border-[1.726px] border-gray-100 bg-white shadow-sm">
               <div className='flex flex-row gap-[1.2rem] items-center'>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/-3d-icon-png-download-7232746.png" className='rounded-[16px] w-[4rem] h-[4rem]' />
                    <div className='w-full'>
                        <h1 className='text-[#101828] text-[1.6rem] font-bold'>삼성전자</h1>
                        <div className='flex flex-row gap-[0.8rem] items-center'>
                            <h3 className='text-[#6A7282] text-[1.4rem] font-semibold'>75,000원</h3>
                            <div className='flex flex-row gap-[0.3rem] items-center'>
                                <img src={upRatio} className='w-[1.2rem] h-auto'/>
                                <span className='text-[1.2rem] font-bold'>+500원</span>
                            </div>
                        </div>
                    </div>
               </div>
                <div className='mt-[1.6rem] flex flex-row w-full justify-between items-center gap-[0.8rem]'>
                    <button className='w-full py-[1.2rem] rounded-[14px] bg-[#155DFC] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),_0_2px_4px_-2px_rgba(0,0,0,0.10)] text-[1.6rem] text-white font-bold'>사기</button>
                    <button className='w-full py-[1.2rem] rounded-[14px] bg-[#F3F4F6] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),_0_2px_4px_-2px_rgba(0,0,0,0.10)] text-[1.6rem] text-black font-bold'>팔기</button>
                </div>
            </div>
            
        </div>
    )
}
export default Home;