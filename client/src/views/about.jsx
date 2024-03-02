import "../button.css"

import '../components/navigation';


import Avatar from "../assets/avatar.png";


export default function About(){

    return(
        <>
        <div id="about" className="noisy h-screen">
            <div className="sm:flex-row flex flex-col sm:justify-around items-center p-4 sm:p-0 h-auto sm:h-screen">
                <div className="flex flex-col items-end sm:w-2/4 gap-5">
                    <div className="flex flex-col gap-5">
                        <h1 className="sm:text-3xl text-xl font-black text-orange-600">A propos</h1>
                        <p className="sm:text-xl text-base sm:font-light ">Ancien conseiller de vente dans le prêt à porter, je me suis reconverti dans le développement web, me spécialisant dans le front end pour les applications web et mobiles.
                        Ma passion pour l'art, le design et la mode influence profondément mon travail, apportant une touche créative à chaque projet. 
                        <br /><br />
                        Sensible à l'écologie et attaché aux valeurs humaines, je mets un point d'honneur à développer des solutions respectueuses
                        de l'environnement et inclusives. Mon amour pour le contact humain et mon désirse d'aider reflètent dans ma manière
                        d'interagir avec les clients, visant toujours à offrir un service exceptionnel.
                        </p>

                        <div className=" text-zinc-900 sm:flex hidden gap-2">
                                <p className="rounded px-2 py-1 border-orange-600 border-2">Altruiste</p>
                                <p className="rounded px-2 py-1 border-orange-600 border-2">Jovial</p>
                                <p className="rounded px-2 py-1 border-orange-600 border-2">Empathique</p>
                                <p className="rounded px-2 py-1 border-orange-600 border-2">Geek</p>
                            </div>
                        </div>
                    </div>
                    <img src={Avatar} className="w-64 h-64 sm:w-96 sm:h-auto sm:flex hidden" alt="" />

                    <div className="gap-2 flex flex-col sm:hidden">
                        <img src={Avatar} className="w-64 h-64 sm:w-96 sm:h-auto" alt="" />
                        <div className="grid text-center text-white font-semibold grid-cols-2 gap-2">
                            <p className="rounded px-2 py-1 bg-orange-600">Altruiste</p>
                            <p className="rounded px-2 py-1 bg-orange-600">Jovial</p>
                            <p className="rounded px-2 py-1 bg-orange-600">Empathique</p>
                            <p className="rounded px-2 py-1 bg-orange-600">Geek</p>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}