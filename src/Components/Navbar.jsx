
function Navbar() {

  return (
    <div  >
   
    <div className=" flex justify-between items-center ">
      <div className=" font-bold text-3xl hover:scale-125 transition ease-in-out duration-300 ">{"<AV/>"}</div>
     <div>
      <div className="hidden lg:flex gap-6 text-gray-600 font-medium">
        <a className="cursor-pointer hover:scale-125 transition ease-in-out duration-300 hover:font-semibold">Home</a>
        <a  className="cursor-pointer hover:scale-125 transition ease-in-out duration-300 hover:font-semibold">About</a>
        <a className="cursor-pointer hover:scale-125 transition ease-in-out duration-300 hover:font-semibold">Tech Stack</a>
        <a className="cursor-pointer hover:scale-125 transition ease-in-out duration-300 hover:font-semibold">Projects</a>
      </div>
      <div className="block lg:hidden navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown dropdown-end dropdown-hover">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Tech Stack</a></li>
        <li><a>Projects</a></li>
      </ul>
    </div>
  </div>
  </div>

</div>
      
    </div>
    </div>
  );
}


export default Navbar;
