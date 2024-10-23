import React from 'react';
import logo from './Image/logo.jpeg';
// import { Togle } from './ui/Togle';
// import {Drop} from './ui/Drop'
import { Link } from 'react-router-dom';



interface NavBarProps {}



export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="  bg-black  w-full" >
      <div className="flex justify-around items-center">

      <div className="flex justify-butween md:justify-start  items-center">  <img src={logo} alt="Mercedes Logo"      
        className="
        m-2
            h-12 w-12  
            sm:h-20 sm:w-20
            md:h-14 md:w-14
            lg:h-20 lg:w-20 
            xl:h-16 xl:w-16  
            2xl:h-32 2xl:w-36  "/>
        <span className="text-white text-lg font-bold hidden  lg:block ">Mercedes-Bense</span>
        </div>

{/* <Togle/> */}
  <div className=" lg:flex justify-between hidden  items-center  bg-slate-900 text-gray-200 w-auto">
    <input
      type="text"
      className="bg-slate-900 text-white font-bold placeholder-gray-500 outline-none w-64"
      placeholder="Your search term / OnlineCode"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 text-gray-200"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  </div>

      </div>
      {/* <Drop/> */}
      <div className="space-x-6 border-t-2 hidden  border-slate-300 lg:flex    px-80 py-5">
        <li><Link  to="" className="text-gray-300 text-2xl hover:text-white">Our models</Link></li>
        <li><Link  to="" className="text-gray-300 text-2xl hover:text-white">Online Showroom</Link></li>
        <li><Link  to="" className="text-gray-300 text-2xl hover:text-white">Shopping guide</Link></li>
        <li><Link  to="" className="text-gray-300 text-2xl hover:text-white">Technology</Link></li>
        <li><Link  to="" className="text-gray-300 text-2xl hover:text-white">Service</Link></li>
        
        
        
      </div>
    </nav>
  );
}
