import Image from 'next/image'
import React from 'react'
import H4 from "@/public/boat.png";
import H5 from "@/public/meter.svg";
import Logo from "@/public/logo.png";


function Guides() {
  return (
    <section className='flexCenter flex-col'>
      <div className="padding-container max-container w-full pb-24">
        <Image src={Logo} alt='AI Nyayavaani' width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-cyberRed">Your AI Detective Hub</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px] text-neonBlue'>Case Investigation Center</h2>
          <p className="regular-16 text-gray-50 xl:max-w-[520px]">
            Welcome to AI Nyayavaani – Where Advanced Intelligence Meets Investigation. 
            Dive into high-tech crime-solving with AI-driven analytics, real-time case updates, 
            and deep forensic analysis. Step into the future of detective work with cutting-edge 
            tools and a network of digital sleuths.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image src={H4}alt="AI Console" width={1440} height={580} className='w-full object-cover object-center 2xl:rounded-5xl' />
        <div className="absolute flex bg-darkGlass py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-20 border border-neonBlue backdrop-blur-md">
          <Image src={H5} alt='AI Chip' width={60} height={130} className='h-full w-auto'/>
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full gap-2">
                <p className='regular-16 text-gray-400'>Current Case</p>
                <p className='bold-16 text-gray-200 '>Ongoing Analysis</p>
              </div>
              <p className='bold-20 mt-2 text-white'>Digital Mirage</p>
            </div>
            <div className="flex w-full flex-col">
              <p className='regular-16 text-gray-400'>Lead Suspect</p>
              <h4 className='bold-20 mt-2 text-neonBlue text-gray-400'>Unknown Entity</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guides;
