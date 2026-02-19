import BackIcon from '/icons/order/back.svg'
const OrderHeader = () =>{
    return (
        <div className="absolute top-0 left-0 w-full bg-white px-[1.2rem] py-[1.6rem] flex flex-row justify-start gap-[1.2rem] items-center">
            <img src={BackIcon} className="w-[4rem] h-[4rem]"/>
            <span className='text-[2rem] font-bold'>SK 하이닉스</span>
        </div>
    )
}
export default OrderHeader;