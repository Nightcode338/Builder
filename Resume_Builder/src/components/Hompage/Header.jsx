import { NavLink, Link } from "react-router-dom";
import { IoGlobeOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className=" flex py-8 px-20 bg-gr justify-between items-center bg-gradient-to-b from-[#F4E7FF] to-[#fff] ">
      <p className=" font-bold text-3xl">Resum<span className=" text-[#8910F1]">o</span></p>
      <div className=" nav text-xl font-bold flex gap-8">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/template"> Template</NavLink>
        <NavLink to="/Join"> Join Tabulio</NavLink>
        <NavLink to="/About"> About</NavLink>
     </div>
     <div className=" flex gap-8 font-medium text-lg">
        <div className=" flex items-center gap-2">
            <IoGlobeOutline />
            <p>English</p>
        </div>
        <div className=" w-32 h-12 bg-[#8910F1] rounded-lg flex items-center justify-center text-white">
        <Link > Start</Link>
        </div>

     </div>
    </div>
  )
}

export default Header
