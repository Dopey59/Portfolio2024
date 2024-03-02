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
        <div id="projects" className="noisy h-screen w-full">
            <div className="flex-row justify-between items-center sm:mx-6 gap-2 ">
                <div className="sm:flex-row sm:justify-between flex flex-col">
                    <h2 className="text-orange-600 text-3xl mt-6 font-black">Projets réalisés</h2>
                    <hr />
                </div>

                <div className="titleProject mt-14">
                    <div className="flex justify-between mb-2 hover:cursor-pointer"
                        onMouseEnter={() => setShowImage1(true)}
                        onMouseLeave={() => setShowImage1(false)}>
                        <h2 className="sm:text-base font text-zinc-900"
                        >Shift Gaming</h2>
                        
                        <h2 className="sm:text-base font-light">Projet personnel</h2>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2 mt-4 hover:cursor-pointer"
                    onMouseEnter={() => setShowImage2(true)}
                    onMouseLeave={() => setShowImage2(false)}>
                        <h2 className="sm:text-base font text-zinc-900">Previously On</h2>
                        <h2 className="sm:text-base font-light">Projet scolaire</h2>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2 mt-4 hover:cursor-pointer"
                    onMouseEnter={() => setShowImage3(true)}
                    onMouseLeave={() => setShowImage3(false)}>
                        <h2 className="sm:text-base font text-zinc-900">Twitter - Clone</h2>
                        <h2 className="sm:text-base font-light">Projet scolaire</h2>
                    </div>
                    <hr />
                    <div className="flex justify-between mb-2 mt-4 hover:cursor-pointer"
                    onMouseEnter={() => setShowImage4(true)}
                    onMouseLeave={() => setShowImage4(false)}>
                        <h2 className="sm:text-base font text-zinc-900">E-commerce</h2>
                        <h2 className="sm:text-base font-light">Projet scolaire</h2>
                    </div>
                    <hr />
                </div>
                {showImage1 && (
                <div className=" justify-between w-1/2 flex gap-3">
                    <img src={Image1} alt="Description" className='border-white border-8 sm:w-64 h-auto rounded-xl'/>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia at ratione dicta sint sequi, repellat excepturi? Quidem, nesciunt corporis inventore in ut modi facilis similique ipsum quia commodi iure!</p>
                </div>
                )}
                {showImage2 && (
                    <div className="image-container rounded">
                        <img src={Image2} alt="Description" className='border-white border-8 sm:w-64 h-auto rounded-xl ' />
                    </div>
                )}
                {showImage3 && (
                    <div className="image-container rounded">
                        <img src={Image3} alt="Description" className='border-white border-8 sm:w-64 h-auto rounded-xl ' />
                    </div>
                )}
                {showImage4 && (
                    <div className="image-container rounded">
                        <img src={Image4} alt="Description" className='border-white border-8 sm:w-64 h-auto rounded-xl '/>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}