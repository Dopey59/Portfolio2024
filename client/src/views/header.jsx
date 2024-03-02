
export default function Header(){
    return(
        <>
       <div className='Header bg-gradient-to-r from-black via-neutral-900 to-black h-screen flex-col sm:flex-row flex items-center justify-center'>
            <div className="flex flex-col items-center gap-3">
                <h2 className="sm:text-4xl text-xl text-white">William Penet</h2>
                <h2 className="sm:text-6xl text-2xl text-white">Développeur Front-End.</h2>
                <h2 className="sm:text-3xl text-xl font-light text-[#FF4500]">Web & Mobile</h2>
            </div>
        </div>
        </>
    )
}