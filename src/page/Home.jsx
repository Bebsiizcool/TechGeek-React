import React from 'react'
import { TbBrandReact } from "react-icons/tb";
import Services from '../../components/Services';
import Features from '../../components/Features';
import Hero from '../../components/Hero';
import Testamonials from '../../components/testamonials';
import About from '../../components/About';


const Home = () => {
 

  return (
  <div> 
    <Hero/>
    <Services/>
    <Testamonials/>
    <Features/>
    <About/>
    
    </div>
  )
}

export default Home