interface MyAssetProps {
    stockCode: string;
    stockName: string;
    stockCount: number;
    stockPrice: number;
    totalAmount: number;
    investedAmount: number;
    profitLoss: number;
    profitRate: number;
}
import { useNavigate } from "react-router-dom";
const MyAsset = (props: MyAssetProps) => {
    const navigate = useNavigate();
    const isProfit = props.profitLoss >= 0;
    return (
         <div className='rounded-2xl border border-[#E5E7EB] bg-white p-[1.7rem] flex flex-col gap-[1.2rem]' onClick ={()=>  navigate('/order', {state: { stockCode: props.stockCode, stockName: props.stockName }})}>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row gap-[1.5rem] justify-start items-center'>
                    <div className='text-[3rem]'>🚀</div>
                    <div className='flex flex-col gap-[0.1rem]'>
                        <div className='text-[1.6rem] font-bold'>{props.stockName}</div>
                        <div className='text-[1.4rem] text-[#6A7282] font-normal'>{props.stockCount}주 보유</div>
                    </div>
                </div>
                <div className={`text-[1.4rem] font-bold ${isProfit ? 'text-[#E7000B]' : 'text-[#155DFC]'}`}>
                    {isProfit ? '+' : ''}{props.profitLoss.toLocaleString()}원 ({isProfit ? '+' : ''}{props.profitRate.toFixed(2)}%)
                </div>
            </div>
            <div className='rounded-[14px] bg-[#F9FAFB] p-[1.2rem] flex flex-row items-center justify-between'>
                <span className='text-[#4A5565] text-[1.4rem] font-normal'>총 금액</span>
                <span className='text-[1.6rem] font-bold'>{props.totalAmount.toLocaleString()}원</span>
            </div>
            <div className='flex flex-row items-center justify-between px-[1rem]'>
                <span className='text-[#4A5565] text-[1.4rem] font-normal'>투자 원금</span>
                <span className='text-[1.6rem] font-medium'>{props.investedAmount.toLocaleString()}원</span>
            </div>
            <div className='flex flex-row items-center justify-between px-[1rem]'>
                <span className='text-[#4A5565] text-[1.4rem] font-normal'>1주 평가금액</span>
                <span className='text-[1.6rem] font-medium'>{props.stockPrice.toLocaleString()}원</span>
            </div>
        </div>
    )
}
export default MyAsset;
