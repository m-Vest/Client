interface MenuBoxProps {
    icon: string;
    title: string;
    description: string;
}

const MenuBox = ({ icon, title, description }: MenuBoxProps) => {
    return (
           <div className='w-full h-[14.4rem] rounded-[16px] bg-gradient-to-br from-[#1447E6] to-[rgba(127,156,219,0.82)] shadow-md p-[2rem]'>
                    <div className='w-[4.8rem] h-[4.8rem] bg-[#FFFFFF33] rounded-[14px] flex justify-center items-center'><img src={icon} className='w-[2.4rem]'/></div>
                    <p className='text-white font-bold text-[1.6rem] mb-[0.53rem] mt-[1.1rem]'>{title}</p>
                    <p className='text-white font-normal text-[1.2rem]'>{description}</p>
                </div>
    );
};
export default MenuBox;