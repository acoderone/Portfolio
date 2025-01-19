import React from 'react';

function Footer() {
  return (
    <div className='flex flex-col rounded-lg p-2 justify-center items-center '>
    <div className='  font-medium '>Want to contact me?</div>
     
      <div className='font-semibold p-2'>
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=avi5200786@gmail.com&su=SUBJECT&body=BODY" 
        target="_blank">CLICK HERE</a>
      </div>
      
    </div>
  );
}

export default Footer;
