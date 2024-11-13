import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="bg-green-100 text-center px-10">
      <div className="container p-4">
        <section className="mb-4">
         <aside>
         <FacebookRoundedIcon color='action' sx={{fontSize:'40px'}} />
         <InstagramIcon color='action' sx={{fontSize:'40px', marginLeft:'20px'}} />
         <TwitterIcon color='action' sx={{fontSize:'40px', marginLeft:'20px'}} />
        <p className='text-black'>Copyright © {new Date().getFullYear()} - All right reserved by E-book Store Ltd</p>
     </aside>
        </section>
      </div>
    </footer>
    </div>
  )
}

export default Footer
