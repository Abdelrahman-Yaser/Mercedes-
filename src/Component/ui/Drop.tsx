

export const Drop = () => {
  return (
    <div className="flex flex-col bg-white h-screen relatve ">
<div className="bg-black rounded-lg ">
  <div className=" flex justify-around items-center bg-slate-900 text-gray-200">
    <input
      type="text"
      className="bg-slate-900 text-gray-200 placeholder-gray-500 outline-none mb-2"
      placeholder="Your search term/OnlineCode"
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


<div className="h-96">
  <div className=" flex justify-between items-center border-b  divide-slate-200 p-3  pb-9 ">
    <a href="#home" className="text-black text-base ">Our models</a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-black">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  </div>
  <div className=" flex justify-between items-center  border-b  divide-slate-200 p-3 pb-9 ">
    <a href="#home" className="text-black text-base">Online Showroom</a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-black">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  </div>
  <div className=" flex justify-between items-center p-3 border-b  divide-slate-200 pb-9">
    <a href="#home" className="text-black text-base">Shopping guide</a>
  </div>
  <div className="flex justify-between items-center  p-3 border-b  divide-slate-200 pb-9">
    <a href="#home" className="text-black text-base">Service</a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-black">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  </div>
  <div className="flex justify-between items-center p-3 shadow-lg shadow-slate-400/50 pb-9">
    <a href="#home" className="text-black text-base ">Technology</a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-black">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  </div>
</div>
<div className="flex  flex-col justify-between">
<div className="p-3 mt-5 mb-64"><span>Privacy Policy/Provider</span></div>

<div className="flex justify-end  bg-black" >
  <span className="text-white text-center items-center bg-slate-600 w-8 h-8 rounded-sm mx-auto m-2">En</span>
  </div>
</div>
    </div>
  );
}
