import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step1 from '/icons/onboarding/step1.png';  
import step2 from '/icons/onboarding/step2.png';  
import step3 from '/icons/onboarding/step3.png';
import Button from './components/Button'; 
import info1 from '/icons/onboarding/info1.png';
import info2 from '/icons/onboarding/info2.png';
const OnBoarding =()=>{
    const navigate = useNavigate();
    const introSlides = [
        {
            img: step1,
            title: '투자, 게임처럼 배워요',
            description: '실제 돈 없이 주식 투자를\n재미있게 연습할 수 있어요',
            color: 'from-blue-500 to-blue-600'
        },
        {
            img: step2,
            title: '100만원으로 시작',
            description: '가상의 돈으로\n안전하게 연습해보세요',
            color: 'from-blue-500 to-blue-600'
        },
        {
            img: step3,
            title: '데일리 피드백으로 성장',
            description: '매일 투자 결과를 분석하고\n조언을 받아보세요',
            color: 'from-blue-500 to-blue-600'
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide = introSlides[currentSlide];
    const handleNext = () => {
        if (currentSlide === introSlides.length - 1) {
            navigate('/namePage');
            return;
        }

        setCurrentSlide((prev) => prev + 1);
       };
    console.log(currentSlide, slide);
    return(
        <div className="relative max-w-[500px] px-[5rem] bg-[linear-gradient(166deg,_#D0DFFF_-1.52%,_#FFF_100%)] h-[100dvh] w-[100dvw] fixed flex flex-col justify-center items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.39, ease: 'easeOut' }}
                        className="w-full flex flex-col justify-center items-center"
                    >
                        <img
                        src={slide.img}
                        alt="Onboarding Step"
                        className="w-[20rem] h-[20rem] mb-[2rem]"
                        />

                        <div className="mt-[-5rem] flex flex-col justify-center items-center">
                            <h1 className="text-[3rem] text-black font-bold">
                                {slide.title}
                            </h1>
                            <p className="text-[1.8rem] text-[#4A5565] font-normal text-center mt-[1rem] whitespace-pre-line">
                                {slide.description}
                            </p>
                        </div>
                        <div className='w-full'>
                            {currentSlide == 1 && (
                                <div className='w-full mt-[3.5rem] p-[2.3rem] rounded-[16px] border border-[0.556px] border-[#BEDBFF] bg-[#EFF6FF]'>
                                    <div className='font-semibold text-[#1C398E] text-[1.4rem] py-[0.5rem]'>💵  시작 자금</div>
                                    <div className='flex flex-row mt-[0.3rem] items-center justify-start'>
                                        <span className='text-[3rem] text-[#1C398E] font-bold'>100000</span>
                                        <span className='text-[3rem] text-[#1C398E] font-bold'>원</span>
                                    </div>
                                </div>
                            )}
                            {currentSlide == 2 && (
                                <div className='flex flex-col gap-[1.2rem] mt-[3.5rem]'>
                                    <div className='flex flex-row gap-[1.2rem] w-full p-[1.8rem] rounded-[14px] border border-[0.556px] border-[#BEDBFF] bg-[#EFF6FF]'>
                                        <img src={info1} alt="daily feedback" className='w-[4rem] h-[4rem]'/>
                                        <div className='flex flex-col'>
                                            <span className='text-[#1C398E] text-[1.4rem] font-semibold leading-[2rem] tracking-[-0.015rem]'>실시간 차트 분석</span>
                                            <span className='text-[#1447E6] text-[1.2rem] font-normal leading-[1.6rem]'>자산 변화를 한눈에 봐요</span>
                                        </div>
                                     </div>
                                     <div className='flex flex-row gap-[1.2rem] w-full p-[1.8rem] rounded-[14px] border border-[0.556px] border-[#BEDBFF] bg-[#EFF6FF]'>
                                        <img src={info2} alt="daily feedback" className='w-[4rem] h-[4rem]'/>
                                        <div className='flex flex-col'>
                                            <span className='text-[#1C398E] text-[1.4rem] font-semibold leading-[2rem] tracking-[-0.015rem]'>맞춤형 데일리 조언</span>
                                            <span className='text-[#1447E6] text-[1.2rem] font-normal leading-[1.6rem]'>투자습관을 개선해요</span>
                                        </div>
                                     </div>
                                </div>
                                
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
                <Button text="다음" onClick={handleNext} />
        </div>
    )
}
export default OnBoarding;