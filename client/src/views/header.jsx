
import Location from '../assets/location.png'

export default function Header(){
    return(
        <>
        <div className='noisy '>
            <div className='flex justify-between items-center bg-blue-600 text-white'>
                <div className='mx-4'>
                    <h1 className='sm:text-base text-sm'>Portfolio 2024</h1>
                </div>
                <div className='m-4 flex gap-2 items-center'>
                    <img className='w-6 h-6' src={Location} alt="gmail logo"/>
                    <h1 className='sm:text-base text-sm'>Nord, Lille, France</h1>
                </div>
            </div>
            <div className=' relative sm:h-screen h-64 flex items-center mx-auto justify-center'>
                <div className="flex flex-col items-center gap-3">
                    <h1 className="sm:text-4xl text-xl font-black">William Penet</h1>
                    <h1 className="sm:text-6xl text-2xl">Développeur Front-End.</h1>
                    <h1 className="sm:text-3xl text-xl text-blue-600">Web & Mobile</h1>
                </div>
            </div>
        </div>
        </>
    )
}