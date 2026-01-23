interface TabProps {
  icon: string;
  activeIcon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ icon, activeIcon, label, isActive, onClick }: TabProps) => {
  return (
    <div
      onClick={onClick}
      className="flex-1 flex gap-[0.4rem] flex-col items-center py-[1rem] cursor-pointer"
    >
      <img
        src={isActive ? activeIcon : icon}
        alt={label}
        className="mx-4"
      />
      <span
        className={`text-[1.2rem] ${
          isActive ? 'text-blue-500 font-semibold' : 'text-[#99A1AF]'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default Tab;
