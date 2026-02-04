import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import step1 from '/icons/onboarding/step1.png';  
import step2 from '/icons/onboarding/step2.png';  
import step3 from '/icons/onboarding/step3.png';
import Button from './components/Button'; 
const OnBoarding =()=>{
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
    console.log(currentSlide, slide);
    return(
        <div className="px-[5rem] bg-[linear-gradient(166deg,_#D0DFFF_-1.52%,_#FFF_100%)] h-[100dvh] w-[100dvw] fixed flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.39, ease: 'easeOut' }}
                    className="flex flex-col justify-center items-center"
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
                </motion.div>
            </AnimatePresence>

          <Button onClick={() => setCurrentSlide((prev) => (prev + 1) % introSlides.length)} />
        </div>
    )
}
export default OnBoarding;