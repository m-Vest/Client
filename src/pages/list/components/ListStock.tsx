import upRatio from '/icons/home/upRatio.svg';
const ListStock = () => {
    return (
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
    )
}
export default ListStock;