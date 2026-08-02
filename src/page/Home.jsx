import React from 'react'
import { TbBrandReact } from "react-icons/tb";
import Services from '../../components/Services';
import Features from '../../components/Features';
import Hero from '../../components/Hero';


const Home = () => {
 

  return (
  <div> 
    <Hero/>
    <Services/>
    
<div id="services" className="h-screen bg-slate-950 overflow-hidden">
 <div className='mt-15'>
 </div>
</div>

<Features/>

    </div>
  )
}

export default Home