import ListStock from "./components/listStock";
const List =() =>{
    return (
        <div className="py-[3.2rem] px-[2rem] flex flex-col gap-[2.4rem] justify-between bg-[#F9FAFB]">
            <div className="flex flex-col gap-[0.4rem]">
                <h2 className="text-[2.4rem] font-bold">🛒 주식 종목</h2>
                <span className="text-[1.6rem] font-normal text-[#4A5565]">마음에 드는 종목에 투자해보세요!</span>
            </div>
             <div className="w-full flex flex-col gap-[0.8rem]">
                <h1 className="text-[1.8rem] text-[#101828] font-bold mt-[1.2rem]"> 전체 종목 </h1>
                <ListStock />
                <ListStock /><ListStock />
            </div>
        </div>
       
    )
}
export default List;