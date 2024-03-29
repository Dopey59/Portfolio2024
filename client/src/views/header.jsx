
import Video from'../assets/video/particles2.mp4'; 

export default function Header(){
    return(
        <>
       <div className=' relative sm:h-screen h-96 flex items-center mx-auto justify-center'>
            <video autoPlay="autoplay" loop="loop" muted  className="video">
                <source src={Video} type="video/mp4"></source>
            </video>
            <div className="flex flex-col items-center gap-3">
                <h1 className="sm:text-4xl text-xl text-white font-black">William Penet</h1>
                <h1 className="sm:text-6xl text-2xl text-white">Développeur Front-End.</h1>
                <h1 className="sm:text-3xl text-xl text-[#FF4500]">Web & Mobile</h1>
            </div>
        </div>
        </>
    )
}