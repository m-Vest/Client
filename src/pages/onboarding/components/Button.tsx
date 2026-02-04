interface ButtonProps {
    onClick?: () => void;
}   
const Button = ({ onClick }: ButtonProps) => {
    return(
        <button onClick={onClick} className="fixed bottom-[3rem] w-[80%] flex flex-row justify-center items-center gap-[0.7rem] py-[1.7rem] rounded-[14px] bg-[linear-gradient(90deg,_#2B7FFF_0%,_#155DFC_100%)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),_0_4px_6px_-4px_rgba(0,0,0,0.10)]">
            <span className="text-white text-[1.8rem] font-bold">다음</span>
            <span className="text-white text-[1.8rem]">{'>'}</span>
        </button>
    )
}
export default Button;