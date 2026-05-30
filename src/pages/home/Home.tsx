import RocketImg from '/icons/home/rocket.svg';
import MenuBox from './components/MenuBox';
import ChartBox from './components/ChartBox';
import InfoBox from './components/InfoBox';
import { useNavigate } from 'react-router-dom';
import { INVEST_CHEERS } from '../../constants/investmentCheers';
import { useState } from 'react';
import Logout from './components/Logout';
import { useAssetInfo } from '../../apis/query/useAssetInfo';
const Home =()=>{
    const navigate = useNavigate();
    const nickname = localStorage.getItem('nickname') || '투자왕님';
    const [randomCheer] = useState(() =>INVEST_CHEERS[Math.floor(Math.random() * INVEST_CHEERS.length)]);
    const { assetInfo } = useAssetInfo();
    const myAsset = (assetInfo?.balance ?? 0) + (assetInfo?.totalStockEvaluation ?? 0);
    const stockCount = assetInfo?.stocks.length ?? 0;
    const totalStockQuantity = assetInfo?.totalStockQuantity ?? 0;
    const profitRate = assetInfo?.totalProfitRate ?? 0;
    return (
        <div className="pt-[7.2rem] pb-[8rem] px-[2rem] flex flex-col gap-[2.3rem] justify-between bg-[#F9FAFB]">
            <div className='flex flex-row justify-between items-center'>
                <div className="flex flex-col gap-[0.4rem] w-[90%]">
                    <h2 className="text-[2.4rem] font-bold">👤 {nickname} <span className='text-[2.4rem] font-medium'>님</span></h2>
                    <span className="text-[1.6rem] font-normal text-[#4A5565]">오늘도 투자 레벨업하러 오셨네요!</span>
                </div>
                <Logout/>
            </div>
            
            <div className="p-[2.4rem] flex flex-col rounded-[24px] bg-gradient-to-br justify-between bg-gradient-to-br from-[#1447E6] to-[rgba(127,156,219,0.82)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),_0_4px_6px_-4px_rgba(0,0,0,0.10)]">
                <span className="text-[#DBEAFE] text-[1.4rem]">💰 현재 내 자산</span>
                <div className="flex flex-row items-center gap-2 pb-[1.2rem] border-b border-[#F3F4F6]">
                    <span className="text-[#FFF] text-[3.6rem] font-bold">{myAsset.toLocaleString()}</span>
                    <span className="text-[#FFF] text-[2rem] font-normal">원</span>
                </div>
                <div className="flex flex-row justify-between items-center gap-2 pt-[1.6rem]">
                   <div className='flex flex-col gap-[0.2rem] items-start'>
                        <span className="text-[#FFF] text-[1.2rem]">보유 현금</span>
                        <span className='text-white text-[1.6rem] font-bold'>{(assetInfo?.balance ?? 0).toLocaleString()}원</span>
                   </div>
                   <div className='flex flex-col gap-[0.2rem] items-end'>
                        <span className="text-[#FFF] text-[1.2rem]">주식 평가액</span>
                        <span className='text-white text-[1.6rem] font-bold'>{(assetInfo?.totalStockEvaluation ?? 0).toLocaleString()}원</span>
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
                    py-[0.8rem] px-[1.5rem]
                    gap-3
                    ">
                <img src={RocketImg} />
                <div className="flex flex-col">
                    <p className="text-[1.4rem] text-[#364153] font-medium">{randomCheer}</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center gap-3'>
                <InfoBox type='count' data={stockCount}/>
                <InfoBox type='stock' data={totalStockQuantity}/>
                <InfoBox type='revenue' data={Number(profitRate.toFixed(2))}/>
            </div>
            <div className='flex flex-row gap-3'>
              <MenuBox icon="/icons/home/buy.png" title="주식 사기" description="종목 둘러보기" onLanding={()=>navigate('/list')}/>
              <MenuBox icon="/icons/home/myAsset.png" title="내 자산" description="보유 현황 보기" onLanding={()=>navigate('/assets')}/>
            </div>
            
        </div>
    )
}
export default Home;
