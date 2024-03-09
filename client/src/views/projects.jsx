import React, { useState } from 'react';
import Image1 from '../assets/images-projets/shiftgaming.jpg';
import Image2 from '../assets/images-projets/prev1.jpg';
import Image3 from '../assets/images-projets/twitter2.png';
import Image4 from '../assets/images-projets/commerce3.jpg';
import Image5 from '../assets/images-projets/portfolio2024.jpg';


import Video from'../assets/video/particles2.mp4'; 


export default function Projects() {
    const [showImage1, setShowImage1] = useState(false);
    const [showImage2, setShowImage2] = useState(false);
    const [showImage3, setShowImage3] = useState(false);
    const [showImage4, setShowImage4] = useState(false);
    const [showImage5, setShowImage5] = useState(false);


    return(
        <>
        <div id="projects" className="relative noisy sm:h-screen">
            <video autoPlay="autoplay" loop="loop" muted className="video">
                <source src={Video} type="video/mp4"></source>
            </video>
            <div className="mainContainer sm:grid sm:grid-cols-2 flex flex-col items-center sm:mx-10 ">
                <div className="elementContainer flex flex-col gap-6 h-[30rem] w-fit text-gray-400">
                    <h2 className="text-orange-600 text-3xl mt-6 font-black">Projets réalisés</h2>

                    <div className=""
                        onMouseEnter={() => setShowImage5(true)}
                        onMouseLeave={() => setShowImage5(false)}>
                        <p className="sm:text-2xl font duration-0 hover:duration-500 hover:text-white ">Portfolio 2024</p>
                        <p className="font-light">Projet personnel</p>
                    </div>
                    <span className='border-1 border-b border-gray-500'></span>

                    <div className=""
                        onMouseEnter={() => setShowImage1(true)}
                        onMouseLeave={() => setShowImage1(false)}>
                        <p className="sm:text-2xl font duration-0 hover:duration-500 hover:text-white ">Shift Gaming</p>
                        <p className="font-light">Projet personnel</p>
                    </div>

                    <span className='border-1 border-b border-gray-500'></span>

                    <div className=""
                        onMouseEnter={() => setShowImage2(true)}
                        onMouseLeave={() => setShowImage2(false)}>
                        <p className="sm:text-2xl font duration-0 hover:duration-500 hover:text-white">Previously On</p>
                        <p className="font-light">Projet scolaire</p>
                    </div>

                    <span className='border-1 border-b border-gray-500'></span>

                    <div className=""
                        onMouseEnter={() => setShowImage3(true)}
                        onMouseLeave={() => setShowImage3(false)}>
                        <p className="sm:text-2xl font duration-0 hover:duration-500 hover:text-white">Twitter - Clone</p>
                        <p className="font-light">Projet scolaire</p>
                    </div>

                    <span className='border-1 border-b border-gray-500'></span>

                    <div className=""
                        onMouseEnter={() => setShowImage4(true)}
                        onMouseLeave={() => setShowImage4(false)}>
                        <p className="sm:text-2xl font duration-0 hover:duration-500 hover:text-white">E-commerce</p>
                        <p className="font-light ">Projet scolaire</p>
                    </div>

                    <span className='border-1 border-b border-gray-500'></span>

                    
                </div>

                <div className='imagesShowed sm:h-screen h-fit flex items-center'>
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