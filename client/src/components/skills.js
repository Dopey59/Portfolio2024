import Figma from "../assets/figma.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import Html from "../assets/html.png";
import React from "../assets/react.png";
import Ts from "../assets/ts.png";
import Node from "../assets/node.png";
import Texture from "../assets/texture.jpg";






export default function Skills(){
    return(
        <>
        <main className="relative bg-gradient-to-b from-black via-neutral-900 to-black sm:h-fit z-50 mt-16">
            <div className="absolute -z-50 m-16 grid-cols-1 sm:mx-auto sm:container flex-col sm:justify-around text-gray-300 sm:flex hidden gap-24">
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-800  sm:mx-36">Skills</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-800 sm:mx-36">Skills</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-800  sm:mx-36">Skills</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-800 sm:mx-36">Skills</h1>
            </div>
            <div className="hide-scrollbar containerSection2 flex sm:h-screen items-center overflow-x-scroll">{/* Carousel in mobile version */}
                {/* First block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-zinc-900 hover:cursor bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={Figma}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Figma - Maquette</h2>
                        </div>
                    </div>
                </div>
                {/* First block */}

                {/* Second block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-zinc-900 hover:cursor bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-44 w-32 h-auto" src={Css}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Css & Framework</h2>
                        </div>
                    </div>
                </div>
                {/* Second block */}

                {/* Third block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-zinc-900 hover:cursor bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={Js}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Javascript</h2>
                        </div>
                    </div>
                </div>
                {/* Third block */}

                {/* Fourth block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-zinc-900 hover:cursor bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={Html}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Html</h2>
                        </div>
                    </div>
                </div>
                {/* Fourth block */}

                {/* Firth block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-zinc-900 hover:cursor bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={React}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">React - Framework</h2>
                        </div>
                    </div>
                </div>
                {/* Firth block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-zinc-900 hover:cursor bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={Ts}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Typescript</h2>
                        </div>
                    </div>
                </div>
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-zinc-900 hover:cursor bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={Node}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">NodeJs</h2>
                        </div>
                    </div>
                </div>
            </div>

        
            {/* Section 2 - End */}
        </main>
        </>
    )
}