import Figma from "../assets/figma.png";
import Tailwind from "../assets/Tailwind.png";
// import Figma from "../assets/figma.png";


export default function Skills(){
    return(
        <>
        <main className="bg-gradient-to-b from-black via-neutral-900 to-black h-80 sm:h-screen z-50 mt-16">
             <div className="absolute -z-50 mt-6 grid-cols-1 sm:mx-auto sm:container flex-col sm:justify-around text-gray-300 sm:flex hidden">
                <h1 className="emptyFont sm:text-9xl text-4xl  sm:mx-36">A propos</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl sm:mx-36">A propos</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl sm:mx-36">A propos</h1>
            </div>
        <div className="containerSection2 flex sm:justify-evenly sm:items-center sm:overflow-hidden overflow-x-scroll ">{/* Carousel in mobile version */}
                {/* First block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-gray-500 bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={Figma}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Figma</h2>
                        </div>
                    </div>
                </div>
                {/* First block */}

                {/* Second block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-gray-500 bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-48 w-32 h-auto" src={Tailwind}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Figma</h2>
                        </div>
                    </div>
                </div>
                {/* First block */}

                {/* Third block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-gray-500 bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={Figma}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Figma</h2>
                        </div>
                    </div>
                </div>
                {/* Third block */}

                {/* Fourth block */}
                <div className="relative p-7 container mx-auto ">
                    <div className="boxContainer duration-0 hover:duration-500 hover:bg-gray-500 bg-gray-200/10 p-4 rounded-xl ">
                        <div className="containerElement flex flex-col items-center gap-3">
                            <img className="sm:w-64 w-44" src={Figma}></img>
                            <h2 className="sm:w-64 w-64 text-center text-white text-xl font-bold">Figma</h2>
                        </div>
                    </div>
                </div>
                {/* Third block */}
            </div>
            {/* Section 2 - End */}
        </main>
        </>
    )
}