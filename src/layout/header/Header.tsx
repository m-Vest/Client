import Logo from '/logo/mVestLogo.png';
import { useNavigate } from 'react-router-dom';
const Header = () =>{
    const navigate = useNavigate();
    return (
        <div className="max-w-[500px] fixed top-0 w-full py-[1.2rem] px-[2rem] bg-white flex justify-start gap-[1rem] z-100 border-b border-b-gray-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)]" onClick={()=>navigate('/')}>
            <img src={Logo} className='w-[3rem]'/>
            <span className='text-[1.8rem] font-bold'> MVest</span>
        </div>
    )
}
export default Header;