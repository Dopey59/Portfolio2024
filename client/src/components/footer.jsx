
import Gmail from '../assets/gmail.png'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Location from '../assets/location.png'



export default function Contact(){
    return(
        <>
        <div id="contact" className="bg-black h-44">
            <div className='flex items-center flex-col justify-center'>
                <div className='flex  mt-9'>
                    <img className='w-6 h-6 ' src={Location} alt="gmail logo"/>
                    <h1 className='text-white mb-3'>Nord, Lille, France</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <a href='mailto:penet.william@gmail.com' target='_blank'>
                        <img className='w-9 h-9 rounded-full bg-white' src={Gmail} alt="gmail logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/william-penet/" target='_blank'>
                        <img className='w-9 h-9' src={Linkedin} alt="linkedin logo"/>
                    </a>
                    <a href="https://github.com/Dopey59" target='_blank'>
                        <img className='w-9 h-9 bg-white rounded-full' src={Github} alt="linkedin logo"/>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}