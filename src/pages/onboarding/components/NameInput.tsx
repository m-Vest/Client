interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

const NameInput = ({
  value,
  onChange,
  maxLength = 10,
}: NameInputProps) => {
  return (
    <div className="flex flex-col gap-[0.8rem]">
      <div className="flex justify-between items-center">
        <span className="text-[1.4rem] font-medium text-[#364153]">
          닉네임
        </span>
        <span className="text-[1.2rem] font-normal text-[#6A7282]">
          {value.length}/{maxLength}자
        </span>
      </div>

      <input
        type="text"
        value={value}
        maxLength={maxLength}
        placeholder="투자왕"
        onChange={(e) => {
            const nextValue = e.target.value.slice(0, maxLength);
            onChange(nextValue);
        }}
        className="h-[5.6rem] rounded-[14px] border-[1.667px] border-[#E5E7EB] bg-[#F9FAFB] p-[1.6rem] text-[1.6rem] placeholder:text-[#9CA3AF] outline-none focus:border-[#155DFC]"
      />
    </div>
  );
};

export default NameInput;
