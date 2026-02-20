import closeIcon from '/icons/order/close.svg'
import plusIcon from '/icons/order/plus.svg'
import minusIcon from '/icons/order/minus.svg'
import { useState } from 'react'
interface OrderModalProps {
    stockName: string;
    stockCode: string;
    stockPrice: number;
    myAsset: number;
    onClose: () => void
}
const OrderModal = ({stockName, stockCode, stockPrice, myAsset, onClose}: OrderModalProps) => {
    const [quantity, setQuantity] = useState(1)
    const price = stockPrice || 128000
    const maxQuantity = Math.floor((myAsset || 0) / price)

    const handleMinus = () => {
        setQuantity(prev => Math.max(1, prev - 1))
    }

    const handlePlus = () => {
        setQuantity(prev => Math.min(maxQuantity, prev + 1))
    }
    return (
        <div className="fixed top-0 z-27 w-full h-full bg-[#00000080]">
            <div className="relative w-full h-full">
                <div className="absolute bottom-0 rounded-t-[32px] bg-white  w-full py-[2rem]">
                    <div className="flex flex-row justify-between items-center border-b border-b-[#F3F4F6] px-[2.4rem] pb-[2rem] pt-[1rem]">
                        <span className='text-[1.7rem] font-bold'>매도하기</span>
                        <img src={closeIcon} className="w-[2.4rem] h-[2.4rem] cursor-pointer" onClick={onClose}/>
                    </div>
                    <div className='relative w-full px-[2.4rem]'>
                        <div className='p-[2rem] flex flex-col gap-[0.2rem] bg-[#F9FAFB] rounded-[16px] mt-[2.4rem]'>
                            <h1 className='text-[1.8rem] font-bold'>{stockName}</h1>
                            <p className='text-[1.4rem] text-[#6A7282] font-normal'>{stockCode}</p>
                            <p className='text-[3rem] font-bold'>{price.toLocaleString()} <span className='text-[2rem] font-bold'>원</span></p>
                        </div>
                        <div className='flex flex-row justify-between mt-[2.4rem] items-center'>
                            <span className='text-[1.4rem] font-bold'>주문 수량</span>
                            <span className='text-[1.4rem] font-normal'>최대 {maxQuantity}주 가능</span>
                        </div>
                        <div className='flex flex-row justify-around gap-[2rem] mt-[1.6rem] items-center'>
                            <img src={minusIcon} className='w-[2rem] h-[2rem]' onClick={handleMinus}/>
                            <div className='rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] text-right py-[1.4rem] pr-[1.4rem] w-[80%] text-[2rem] font-bold'>{quantity}</div>
                            <img src={plusIcon} className='w-[2rem] h-[2rem]' onClick={handlePlus}/>
                        </div>
                        <div className='mt-[4.3rem] rounded-2xl border border-[#BEDBFF] bg-[#EFF6FF] p-[2.1rem]'>
                            <div className='flex flex-row justify-between items-center'>
                                <span className='text-[#4A5565] text-[1.4rem] font-medium'>총 주문 금액</span>
                                <span className='text-[2.4rem] font-bold'>   {(price * quantity).toLocaleString()}<span className='text-[1.8rem] font-bold'>원</span></span>
                            </div>
                            <div className='text-[#6A7282] text-[1.4rem] font-normal mt-[1.9rem]'> {price.toLocaleString()}원 × {quantity}주</div>
                        </div>
                        <button className='w-full mt-[3.2rem] rounded-[16px] bg-[#155DFC] text-white text-[1.6rem] font-bold py-[1.6rem]'>
                            매도하기
                        </button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default OrderModal;