import ListStock from "./components/listStock";
const List =() =>{
    const mockStocks = [
        { id: 1, name: '삼성전자', price: 75000, dir: 'up' as const, change: 500 },
        { id: 2, name: '카카오', price: 48200, dir: 'down' as const, change: -1200 },
        { id: 3, name: '네이버', price: 214000, dir: 'up' as const, change: 3500 },
        { id: 4, name: 'LG에너지솔루션', price: 412000, dir: 'down' as const, change: -8000 },
        { id: 5, name: 'SK하이닉스', price: 120000, dir: 'up' as const, change: 2500 },
        ];

    return (
        <div className="py-[3.2rem] px-[2rem] flex flex-col gap-[2.4rem] justify-between bg-[#F9FAFB]">
            <div className="flex flex-col gap-[0.4rem]">
                <h2 className="text-[2.4rem] font-bold">🛒 주식 종목</h2>
                <span className="text-[1.6rem] font-normal text-[#4A5565]">마음에 드는 종목에 투자해보세요!</span>
            </div>
             <div className="w-full flex flex-col gap-[0.8rem]">
                <h1 className="text-[1.8rem] text-[#101828] font-bold mt-[1.2rem]"> 전체 종목 </h1>
                {
                    mockStocks.map((stock) => (
                        <ListStock
                            key={stock.id}
                            name={stock.name}
                            price={stock.price} 
                            dir={stock.dir}
                            change={stock.change}
                        />
                    ))
                }
            </div>
        </div>
       
    )
}
export default List;