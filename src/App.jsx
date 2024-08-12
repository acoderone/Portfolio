import React,{useRef} from 'react';
import Banner from './Components/Banner';
import Component3 from './Components/Component3';
import Navbar from './Components/Navbar';

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
    </div>
  );
}

export default App;
