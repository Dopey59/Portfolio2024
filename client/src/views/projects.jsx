import React, { useState } from 'react';
import Image1 from '../assets/pattern2.jpg';
import Image2 from '../assets/pattern5.jpg';
import Image3 from '../assets/pattern3.jpg';
import Image4 from '../assets/waves.jpg';


export default function Projects() {
    const [showImage1, setShowImage1] = useState(false);
    const [showImage2, setShowImage2] = useState(false);
    const [showImage3, setShowImage3] = useState(false);
    const [showImage4, setShowImage4] = useState(false);

    return(
        <>
        <div id="projects" className="noisy sm:h-screen">
            <div className="mainContainer sm:grid sm:grid-cols-2 flex flex-col items-center sm:mx-10 ">

                <div className="elementContainer flex flex-col gap-6 h-[26rem] sm:w-1/2">
                        <h2 className="text-orange-600 text-3xl mt-6 font-black">Projets réalisés</h2>

                    <div className="flex justify-between hover:cursor-pointer"
                        onMouseEnter={() => setShowImage1(true)}
                        onMouseLeave={() => setShowImage1(false)}>
                        <p className="sm:text-xl font text-zinc-900">Shift Gaming</p>
                        <p className="sm:text-xl font-light">Projet personnel</p>
                    </div>

                    <span className='border-1 border-b border-black'></span>

                    <div className="flex justify-between hover:cursor-pointer"
                        onMouseEnter={() => setShowImage2(true)}
                        onMouseLeave={() => setShowImage2(false)}>
                        <p className="sm:text-xl font text-zinc-900">Previously On</p>
                        <p className="sm:text-xl font-light">Projet scolaire</p>
                    </div>

                    <span className='border-1 border-b border-black'></span>

                    <div className="flex justify-between mx-hover:cursor-pointer"
                        onMouseEnter={() => setShowImage3(true)}
                        onMouseLeave={() => setShowImage3(false)}>
                        <p className="sm:text-xl font text-zinc-900">Twitter - Clone</p>
                        <p className="sm:text-xl font-light">Projet scolaire</p>
                    </div>

                    <span className='border-1 border-b border-black'></span>

                    <div className="flex justify-between mx-hover:cursor-pointer"
                        onMouseEnter={() => setShowImage4(true)}
                        onMouseLeave={() => setShowImage4(false)}>
                        <p className="sm:text-xl font text-zinc-900">E-commerce</p>
                        <p className="sm:text-xl font-light">Projet scolaire</p>
                    </div>

                    <span className='border-1 border-b border-black'></span>
                </div>

                <div className='imagesShowed sm:h-screen h-fit flex items-center'>
                    {showImage1 && (
                    <div className="">
                        <img src={Image1} alt="Description" className='border-white border-8 rounded-xl  h-auto'/>
                    </div>
                    )}
                    {showImage2 && (
                        <div className=" rounded">
                            <img src={Image2} alt="Description" className='border-white border-8 rounded-xl  h-auto ' />
                        </div>
                    )}
                    {showImage3 && (
                        <div className=" rounded w-full">
                            <img src={Image3} alt="Description" className='border-white border-8 rounded-xl  h-auto ' />
                        </div>
                    )}
                    {showImage4 && (
                        <div className=" rounded">
                            <img src={Image4} alt="Description" className='border-white border-8 rounded-xl  h-auto '/>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}