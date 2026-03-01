import ListStock from "./components/ListStock";
import { useState } from "react";
import SellModal from "../order/components/SellModal";
import BuyModal from "../order/components/BuyModal";
import { useGetStockList } from "../../apis/query/useGetStockList";
const List =() =>{
    const [keyword, setKeyword] = useState("");
    const [isSellOpen, setIsSellOpen] = useState(false);
    const [isBuyOpen, setIsBuyOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [stockCode, setStockCode] = useState('0');
    const [stockName, setStockName] = useState('');
    const [stockPrice, setStockPrice] = useState(0);
    const { stockList, isLoading, isError } = useGetStockList();
    
    if (isLoading) return <div>로딩중...</div>;
    if (isError) return <div>에러 발생</div>;
    console.log(stockList)
    const mockStocks = stockList;
   
    const filteredStocks = mockStocks.filter((stock) =>
        stock.stockName.toLowerCase().includes(keyword.toLowerCase())
        );
    
    const OpenModalType = (type: 'buy' | 'sell', stockNumCode: string, stockStrName:string, stockNumPrice: number) => {
        setIsFixed(true);
        setStockCode(stockNumCode);
        setStockName(stockStrName);
        setStockPrice(stockNumPrice);
        if (type === 'buy') {
            setIsBuyOpen(true);
        } else {
            setIsSellOpen(true);
        }
    };


    return (
        <div className="pt-[8.2rem] pb-[8rem] bg-[#F9FAFB]">
            {isBuyOpen && <BuyModal stockName={stockName} stockCode={stockCode} stockPrice={stockPrice} myAsset={1000000} onClose={() => {setIsBuyOpen(false); setIsFixed(false);}}/>}
            {isSellOpen && <SellModal stockName={stockName} stockCode={stockCode} stockPrice={stockPrice} myStockCount={3} onClose={() => {setIsSellOpen(false); setIsFixed(false);}}/>}
           <div className={`w-full h-full flex flex-col gap-[2.4rem] justify-between ${isFixed ? 'fixed' : ''} `}>
            


             <div className="max-w-[500px] fixed top-[3.9rem] w-full z-20 px-[2rem] bg-[#F9FAFB] pt-[1rem] pb-[1rem]">
                 <div className="flex flex-col gap-[0.4rem] mb-[2rem] mt-[2rem]">
                    <h2 className="text-[2.4rem] font-bold">🛒 주식 종목</h2>
                    <span className="text-[1.6rem] font-normal text-[#4A5565]">마음에 드는 종목에 투자해보세요!</span>
                </div>
                <input
                    type="text"
                    placeholder="종목명을 입력하세요"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full p-[1.2rem] rounded-[12px] border bg-white border-gray-200 text-[1.4rem] focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
                />
            </div>

            <div className="max-w-[500px] w-full flex flex-col px-[2rem] pt-[15rem] gap-[0.8rem]">



                {filteredStocks.length > 0 ? (
                filteredStocks.map((stock) => (
                    <ListStock
                    key={stock.stockCode}
                    name={stock.stockName}
                    price={stock.price}
                    dir={stock.changeRate}
                    change={stock.change}
                    onType={(type) => OpenModalType(type,stock.stockCode,stock.stockName,stock.price)}
                    />
                ))
                ) : (
                <div className="py-[3rem] text-center text-[1.4rem] text-gray-400">
                    🔎 검색 결과가 없습니다.
                </div>
                )}
            </div>   
           </div>
        </div>
       
    )
}
export default List;