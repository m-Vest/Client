import info1 from '/icons/onboarding/info1.png';
import info2 from '/icons/onboarding/info2.png';

interface InfoBoxProps {
  type: 1 | 2;
}

const INFO_MAP = {
  1: {
    img: info1,
    title: '실시간 차트 분석',
    description: '자산 변화를 한눈에 봐요',
  },
  2: {
    img: info2,
    title: '맞춤형 데일리 조언',
    description: '투자습관을 개선해요',
  },
} as const;

const InfoBox = ({ type }: InfoBoxProps) => {
  const { img, title, description } = INFO_MAP[type];

  return (
    <div className="flex flex-row gap-[1.2rem] w-full p-[1.8rem] rounded-[14px] border border-[0.556px] border-[#BEDBFF] bg-[#EFF6FF]">
      <img src={img} alt={title} className="w-[4rem] h-[4rem]" />
      <div className="flex flex-col">
        <span className="text-[#1C398E] text-[1.4rem] font-semibold leading-[2rem] tracking-[-0.015rem]">
          {title}
        </span>
        <span className="text-[#1447E6] text-[1.2rem] font-normal leading-[1.6rem]">
          {description}
        </span>
      </div>
    </div>
  );
};

export default InfoBox;
