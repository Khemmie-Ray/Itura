import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { ImCart } from "react-icons/im";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo2.svg';
// import { useDisconnect } from "@web3modal/ethers/react";

const MobileSidebar = () =>  {
//   const { disconnect } = useDisconnect()

  const activeStyle = {
    background: '#B9A7C3',
    borderRadius: '10px',
    color: '#030A04',
    padding: '10px'
  };

  return (
    <div className='w-[100%] text-white px-6 py-2 flex lg:hidden md:hidden border-t border-grey bg-white/20 items-center justify-between backdrop-blur-[20px] rounded-full text-center'>
      <NavLink to="/dashboard" className="text-[24px] py-4 px-4" style={({isActive}) => isActive ? activeStyle : null } end><CgHomeAlt /></NavLink>
      <NavLink to="marketplace" className="text-[20px] py-4 px-4" style={({isActive}) => isActive ? activeStyle : null }><ImCart className="mr-4" /></NavLink>
      <NavLink to="aichat" className="text-[20px] py-4 px-4" style={({isActive}) => isActive ? activeStyle : null }><BiBox /></NavLink>
      {/* <button className="text-[14px]   flex items-center py-4 mb-4 px-6  hover:text-[#015C28]" onClick={() => disconnect()}><TbSettings  /> Log out</button> */}
    </div>
  )
}

export default MobileSidebar