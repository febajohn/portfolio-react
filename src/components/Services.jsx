import React from 'react'
import web_icon from '../assets/web-icon.png'
import mobile_icon from '../assets/mobile-icon.png'
import ui_icon from '../assets/ui-icon.png'
import graphics_icon from '../assets/graphics-icon.png'
import right_arrow from '../assets/right-arrow.png'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
 
    <h2 className="text-center text-5xl font-Ovo">My services</h2>
    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"> Building responsive websites that deliver exceptional user experiences.
Crafting clean, efficient code for seamless functionality.
 </p>

    <div className="grid grid-cols-auto gap-6 my-10">
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={web_icon} alt="" className="w-10"/>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Web Design</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">Skilled in designing responsive, visually appealing, and user-centric website layouts that enhance user engagement and brand identity.</p>
            <a href="" className="flex items-center gap-2 text-sm mt-5">Read more <img src={right_arrow} alt="" className="w-4"/></a>
        </div>
      
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={ui_icon} alt="" className="w-10"/>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">UI/ UX Design </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">Proficient in creating intuitive, user-friendly interfaces and seamless experiences through wireframing, prototyping, and usability testing. </p>
            <a href="" className="flex items-center gap-2 text-sm mt-5">Read more <img src={right_arrow} alt="" className="w-4"/></a>
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={graphics_icon} alt="" className="w-10"/>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Web Developement</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">Expert in developing fully functional websites with clean code, optimized performance, and cross-browser compatibility.</p>
            <a href="" className="flex items-center gap-2 text-sm mt-5">Read more <img src={right_arrow} alt="" className="w-4"/></a>
        </div>
    </div>
  </div>
  )
}

export default Services
