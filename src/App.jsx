import React,{useRef} from 'react';
import Banner from './Components/Banner';
import Component3 from './Components/Component3';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  
const componentRef=useRef();
 const scrollToComponent=()=>{
  componentRef.current.scrollIntoView({behavior:'smooth'});
 }

  return (
    <div className='px-24 py-10 flex flex-col gap-5 justify-center'>
      <div className='lg:h-screen'>
        <Navbar scrollToComponent={scrollToComponent} />
        <Banner />
      </div>
      <div ref={componentRef} className='flex justify-center h-full'>
        <Component3 />
      </div>
      <div className='h-28 p-4 rounded-md bg-slate-950 text-zinc-50'>
       <Footer />
      </div>
    </div>
  );
}

export default App;
