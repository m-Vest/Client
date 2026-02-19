import BackIcon from '/icons/order/back.svg'
const OrderHeader = () =>{
    return (
        <div className="absolute z-10 top-0 left-0 w-full bg-white px-[1.2rem] py-[0.8rem] flex flex-row justify-start gap-[1.2rem] items-center border-b border-b-[#c9ced5]">
            <img src={BackIcon} className="w-[4rem] h-[4rem]"/>
            <span className='text-[1.7rem] font-bold'>SK 하이닉스</span>
        </div>
    )
}
export default OrderHeader;