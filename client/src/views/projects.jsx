import React, { useState } from 'react';
import Image1 from '../assets/images-projets/shiftgaming.jpg';
import Image2 from '../assets/images-projets/prev1.jpg';
import Image3 from '../assets/images-projets/twitter2.png';
import Image4 from '../assets/images-projets/commerce3.jpg';
import Image5 from '../assets/images-projets/portfolio2024.jpg';

export default function Projects() {
    const [showImage1, setShowImage1] = useState(false);
    const [showImage2, setShowImage2] = useState(false);
    const [showImage3, setShowImage3] = useState(false);
    const [showImage4, setShowImage4] = useState(false);
    const [showImage5, setShowImage5] = useState(false);


    return(
        <>
        <div id="projects" className="relative">
            <div className="mainContainer sm:grid sm:grid-cols-2 items-center sm:items-start flex flex-col mx-5 sm:mx-10">
                <div className="elementContainer flex flex-col gap-8 w-full ">
                    <div className='text-center sm:text-left'>
                        <h2 className="sm:text-3xl text-2xl">Projets réalisés</h2>
                    </div>
                    <div className=""
                        onMouseEnter={() => setShowImage5(true)}
                        onMouseLeave={() => setShowImage5(false)}>
                        <p className="sm:text-2xl font duration-0 hover:duration-500 text-[#0057FF] ">Portfolio 2024</p>
                        <p className="font-light">Projet personnel</p>
                    </div>
                    <span className='border-1 border-b border-gray-500'></span>
                    <a href='https://www.shift-gaming.fr/' target='_blank'>
                        <div className=""
                            onMouseEnter={() => setShowImage1(true)}
                            onMouseLeave={() => setShowImage1(false)}>
                            <p className="sm:text-2xl font duration-0 hover:duration-500 text-[#0057FF] ">Shift Gaming</p>
                            <p className="font-light">Projet personnel</p>
                        </div>
                    </a>
                        <span className='border-1 border-b border-gray-500'></span>

                    <a href="https://github.com/Dopey59/Previously-On.git" target='_blank'>
                        <div className=""
                            onMouseEnter={() => setShowImage2(true)}
                            onMouseLeave={() => setShowImage2(false)}>
                            <p className="sm:text-2xl font duration-0 hover:duration-500 text-[#0057FF]">Previously On</p>
                            <p className="font-light">Projet scolaire</p>
                        </div>
                    </a>

                    <span className='border-1 border-b border-gray-500'></span>

                    <a href="https://github.com/Dopey59/My-Twitter.git" target='_blank'>
                        <div className=""
                            onMouseEnter={() => setShowImage3(true)}
                            onMouseLeave={() => setShowImage3(false)}>
                            <p className="sm:text-2xl font duration-0 hover:duration-500 text-[#0057FF]">Twitter - Clone</p>
                            <p className="font-light">Projet scolaire</p>
                        </div>
                    </a>

                    <span className='border-1 border-b border-gray-500'></span>

                    <a href="https://github.com/EpitechWebAcademiePromo2024/W-WEB-502-LIL-2-1-ecommerce-lucas.pesse.git" target='_blank'>
                        <div className=""
                            onMouseEnter={() => setShowImage4(true)}
                            onMouseLeave={() => setShowImage4(false)}>
                            <p className="sm:text-2xl font duration-0 hover:duration-500 text-[#0057FF]">E-commerce</p>
                            <p className="font-light ">Projet scolaire</p>
                        </div>
                    </a>
                    <span className='border-1 border-b border-gray-500'></span>                    
                </div>

                <div className='imagesShowed sm:h-screen h-fit flex mx-10 items-center'>
                    {showImage1 && (
                        <div className="">
                        <img src={Image1} alt="Description" className='border-white border-8 rounded-xl  h-auto'/>
                    </div>
                    )}
                    {showImage2 && (
                        <div className="">
                            <img src={Image2} alt="Description" className='border-white border-8 rounded-xl  h-auto ' />
                        </div>
                    )}
                    {showImage3 && (
                        <div className="">
                            <img src={Image3} alt="Description" className='border-white border-8 rounded-xl  h-auto ' />
                        </div>
                    )}
                    {showImage4 && (
                        <div className="">
                            <img src={Image4} alt="Description" className='border-white border-8 rounded-xl h-auto w-full'/>
                        </div>
                    )}
                    {showImage5 && (
                        <div className="">
                            <img src={Image5} alt="Description" className='border-white border-8 rounded-xl h-auto w-full'/>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}