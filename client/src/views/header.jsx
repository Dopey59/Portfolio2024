export default function Header(){
    return(
        <>
       <div>
        <nav className="flex justify-end mx-4 items-center mt-4 gap-2">
            <div className="bg-[#FF4500] text-orange rounded-full w-4 h-4"></div>
            <div className="bg-[#FF4500] text-orange rounded-full w-4 h-4"></div>
            <div className="bg-[#FF4500] text-orange rounded-full w-4 h-4"></div>
        </nav>
            <div className='flex items-center flex-col justify-center h-screen'>
                <div className="flex flex-col">
                    <h2 className="sm:text-2xl text-xl">Portfolio <span className="text-[#FF4500]">2024</span></h2>
                    <h1 className="sm:text-6xl text-4xl">William Penet</h1>
                    <div className="flex items-end justify-end">
                        <h2 className="sm:text-base text-xs text-black">Front-End - web & mobile.</h2>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2 justify-end bottom-3 fixed">
                    <div className="navbar font-semibold gap-3 text-sm flex items-center p-2 rounded-full text-white bg-black/90 ">
                        <p className="hover:bg-white button_slide slide_right p-1 rounded-full">A propos</p>
                        <p className="hover:bg-white button_slide slide_right p-1 rounded-full">Outils</p>
                        <p className="hover:bg-white button_slide slide_right p-1 rounded-full">Projet</p>
                        <p className="hover:bg-white button_slide slide_right p-1 rounded-full">Contact</p>
                    </div>
                </div>
                {/* Navigation */}


            </div>
        </div>
        </>
    )
}