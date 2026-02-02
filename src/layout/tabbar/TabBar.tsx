import { useState } from 'react';
import Icon1 from '/icons/tabbar/icon1.svg';
import Icon2 from '/icons/tabbar/icon2.svg';
import Icon3 from '/icons/tabbar/icon3.svg';
import Icon1_On from '/icons/tabbar/icon1_on.svg';
import Icon2_On from '/icons/tabbar/icon2_on.svg';
import Icon3_On from '/icons/tabbar/icon3_on.svg';
import Tab from './Tab';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white flex border-t border-gray-300 max-w-[500px]">
      <Tab
        icon={Icon1}
        activeIcon={Icon1_On}
        label="홈"
        isActive={activeTab === 0}
        onClick={() => setActiveTab(0)}
      />
      <Tab
        icon={Icon2}
        activeIcon={Icon2_On}
        label="주식"
        isActive={activeTab === 1}
        onClick={() => setActiveTab(1)}
      />
      <Tab
        icon={Icon3}
        activeIcon={Icon3_On}
        label="내 자산"
        isActive={activeTab === 2}
        onClick={() => setActiveTab(2)}
      />
    </div>
  );
};

export default TabBar;
