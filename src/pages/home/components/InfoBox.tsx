import CountImg from '/icons/home/count.svg';
import StockImg from '/icons/home/stock.svg';
import UpImg from '/icons/home/up.svg';
import DownImg from '/icons/home/down.svg';
interface InfoBoxProps {
    type: 'count' | 'stock' | 'revenue';
    data : number;
}
const TITLE_MAP = {
  count: '보유 종목 수',
  stock: '거래 횟수',
  revenue: '예상 수익률',
} as const;

const IMG_MAP = (props: InfoBoxProps) => {
  return {
    count: CountImg,
    stock: StockImg,
    revenue: props.data >= 0 ? UpImg : DownImg,
  } as const;
};
const InfoBox = (props: InfoBoxProps) => {
    const title = TITLE_MAP[props.type];
    const unit = props.type==='revenue' ? '%' : props.type==='count' ? '개' : '회';
    return (
        <div className="w-full py-[1.65rem] flex flex-col items-center justify-between rounded-2xl border border-gray-100 bg-white shadow-sm h-[13rem]">
            <img src={IMG_MAP(props)[props.type]} className='w-[4rem] h-[4rem]'/>
            <span className="text-[#6A7282] text-[1.2rem] font-normal">{title}</span>
            <span className="text-black text-[1.8rem] font-bold">{props.data}{unit}</span>
        </div>
    )
}
export default InfoBox;