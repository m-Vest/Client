import hi from '/icons/onboarding/hi.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NameInput from './components/nameInput';
import Button from './components/Button';
const NamePage = () => {
    const [name, setName] = useState('');
    const NICKNAME_EXAMPLES = ['성공맨', '부자재림이', '주린이', '윤혁'];
    const navigate = useNavigate();

    const handleExampleClick = (example: string) => {
        setName(example);
    };
    return (
        <div className="relative max-w-[500px] px-[5rem] bg-[linear-gradient(166deg,_#D0DFFF_-1.52%,_#FFF_100%)] h-[100dvh] w-[100dvw] fixed flex flex-col justify-center items-center">
            <img src={hi} alt="Onboarding Step" className="w-[6rem] h-[6rem] mb-[7rem]"/>
            <div className="mt-[-5rem] flex flex-col justify-center items-center">
                <h1 className="text-[3rem] text-black font-bold">안녕하세요!</h1>
                <p className="text-[1.8rem] text-[#4A5565] font-normal text-center mt-[1rem] whitespace-pre-line">
                    이름을 입력해주세요
                </p>
            </div>
            <div className='mt-[3rem] w-[90%]'>
                <NameInput value={name} onChange={setName} />
                 <div className="flex gap-[0.8rem] flex-wrap justify-center">
                    {NICKNAME_EXAMPLES.map((example) => (
                    <button
                        key={example}
                        type="button"
                        onClick={() => handleExampleClick(example)}
                        className="rounded-[10px]  bg-[#EFF6FF] border border-[#d4e3ff] mt-[1rem] px-[1.4rem] py-[0.8rem] text-[1.3rem] font-medium text-[#155DFC]active:scale-95"
                    >
                        {example}
                    </button>
                    ))}
                </div>
            </div>
            <Button text="시작하기" onClick={() => {navigate('/')}} />
      </div>
    )
};
export default NamePage;