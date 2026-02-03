import { useState } from 'react';
import MainLogo from '/logo/mVestLogo.png';
import icon1 from '/icons/onboarding/icon1.svg';
import icon2 from '/icons/onboarding/icon2.svg';
import icon3 from '/icons/onboarding/icon3.svg';    
const OnBoarding =()=>{
    const introSlides = [
        {
            emoji: '🎓',
            title: '투자, 게임처럼 배워요',
            description: '실제 돈 없이\n주식 투자를 재미있게 연습할 수 있어요',
            color: 'from-blue-500 to-blue-600'
        },
        {
            emoji: '💰',
            title: '100만원으로 시작',
            description: '가상의 돈으로\n안전하게 연습해보세요',
            color: 'from-blue-500 to-blue-600'
        },
        {
            emoji: '📊',
            title: 'AI 피드백으로 성장',
            description: '매일 투자 결과를 분석하고\n조언을 받아보세요',
            color: 'from-blue-500 to-blue-600'
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide = introSlides[currentSlide];
    console.log(currentSlide, slide);
    return(
        <div className="px-[3rem] bg-[linear-gradient(166deg,_#D0DFFF_-1.52%,_#FFF_100%)] h-[100dvh] w-[100dvw] fixed flex flex-col justify-center items-center">
            <div className='relative flex flex-col justify-center items-center mt-[-15rem]'>
                <img src={MainLogo} alt="mVest Logo" className="w-[15.7rem] h-[15.7rem] mb-[1.5rem]" />
                <h1 className='font-bold text-black text-[3.7rem]'>MVest</h1>
                <p className='font-medium text-[1.8rem] text-[#4A5565] mb-[7rem]'>투자 초보를 위한 모의 투자 서비스</p>
                <button className='w-full bg-[#FEE500] py-[1.5rem] flex flex-row justify-center items-center gap-[1rem] rounded-[14px] shadow-lg active:scale-95 transition-transform disabled:opacity-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 3C5.58172 3 2 5.89543 2 9.5C2 11.6484 3.24328 13.5313 5.13531 14.6953L4.38438 17.3266C4.33672 17.4766 4.44297 17.6328 4.60156 17.6328C4.65469 17.6328 4.70938 17.6141 4.75547 17.5766L7.88281 15.2578C8.57656 15.4016 9.28203 15.5 10 15.5C14.4183 15.5 18 12.6046 18 9C18 5.39543 14.4183 3 10 3Z" fill="black"/>
                        </svg>
                    <span className='text-[1.5rem] font-bold leading-[2.4rem] tracking-[-0.0312rem]'>카카오로 3초만에 시작하기</span>
                </button>
                <p className='text-[#6A7282] text-[1.2rem] font-medium mt-[1rem]'>로그인하면 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.</p>
            </div>
             <div className='absolute bottom-[5rem] flex flex-row  justify-around w-full'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={icon1} alt="icon1" className='w-[4.5rem] h-[4.5rem] mb-[0.8rem]'/>  
                    <p className='text-[#4A5565] text-[1.2rem] font-semibold'>100% 안전</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={icon2} alt="icon2" className='w-[4.5rem] h-[4.5rem] mb-[0.8rem]'/>  
                    <p className='text-[#4A5565] text-[1.2rem] font-semibold'>쉬운 학습</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={icon3} alt="icon3" className='w-[4.5rem] h-[4.5rem] mb-[0.8rem]'/>  
                    <p className='text-[#4A5565] text-[1.2rem] font-semibold'>실제 주식 변동</p>
                </div>
             </div>
        </div>
    )
}
export default OnBoarding;