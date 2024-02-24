import './index.css';
import './App.css';

import PhotoProfil from "../src/assets/pp.jpg";
import Phone from "../src/assets/phone.jpg";

import Skills from "./components/skills";
import Projects from "./components/projects";



function App() {
  return (
    <>
      <main className="">
        {/* Navbar */}
        <div className="flex justify-end  sm:mr-4 mt-4 mr-5 gap-3">
        <svg className="bg-[#FE5B00] p-1 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"></path></svg>
        <svg className="bg-[#FE5B00] p-1 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"></path></svg>
        <svg className="bg-[#FE5B00] p-1 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"></path></svg>
        {/* Navbar */}

        </div>
        {/* Title Container */}
        <div className="headerContainer flex justify-center sm:mt-44 mt-10">
          <div className="flex flex-col">
            <div>
              <h2 className="sm:text-3xl text-xl font-bold">2024</h2>
            </div>
            <div className='flex justify-end '>
              <div className='absolute items-end sm:mt-3 z-50'>
                <span className="dot sm:visible invisible"></span>
              </div>
            </div>
            <h1 className="sm:text-8xl text-6xl text-zinc-800 relative -z-50">Portfolio<span className="sm:text-black text-[#FE5B00]">.</span></h1>
            <div>
              <div className="flex justify-between">
              <h2 className="font-semibold sm:text-normal text-xs">Penet William</h2>
                <h2 className="font-bold sm:text-4xl text-2xl">Front-End</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Title Container */}

        {/* hr section */}
        <div className="sm:mt-40 mt-11 border-b border-gray-400">
          <hr></hr>
        </div>
        {/* hr section */}

          {/* A propos section */}
          <div className="absolute -z-50 m-16 grid-cols-1 sm:mx-auto sm:container flex-col sm:justify-around text-gray-300 sm:flex hidden gap-24">
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-300  sm:mx-36">A propos</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-300 sm:mx-36">A propos</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-300  sm:mx-36">A propos</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-300 sm:mx-36">A propos</h1>
                <h1 className="emptyFont sm:text-9xl text-4xl text-zinc-300 sm:mx-36">A propos</h1>

            </div>

          <div className='sm:mt-24 mt-4 h-screen sm:mx-auto sm:container mx-2 p-6 flex flex-col sm:flex-row sm:p-0 sm:justify-around items-center relative z-50'>
            <div className='flex flex-col container mx-auto gap-6'>
              <div className="container mx-auto flex flex-col gap-12">
                <h2 className='sm:text-2xl text-xl bg-white p-2 w-fit uppercase'><span className='font-bold'>Hello !</span>  Ma spécialité <span className="font-bold">?</span> Le <span className="font-bold">design</span> & <span className="font-bold">SEO</span>.</h2>
                <p className='text-base sm:text-xl sm:w-2/4'>Ma mission est de rendre une expérience unique et fluide aux utilisateurs ainsi qu'une compatibilité web et mobile au top pour vos projets.</p>
                <p className='text-base sm:text-xl sm:w-2/4'>J'accompagne le client dans son projet et déploit leurs sites web ou mobile en ligne grâce aux différents cloud existants (AWS, Hostinger..) </p>

                <p className='text-base sm:text-xl sm:w-2/4 font-bold'>Au-delà de mon travail sur l'ux/ui design je peux également travailler le référencement naturel de votre site-web.</p>
              </div>
            </div>
            <img className="sm:mt-0c mt-6 sm:w-80 w-44 h-auto rounded shadow-black shadow-sm" src={PhotoProfil}/>
          </div>
          {/* A propos section */}
        <Skills/>
        <Projects/>
      </main>
  
    </>
  );
}
export default App;