import "../button.css"

import Avatar from "../assets/avatar.png";
export default function About(){
    const about = document.getElementById('about');


    return(
        <>
        <div className="bg-gradient-to-r from-black items-center via-zinc-900 to-black h-full w-full">
            <div className="flex justify-around items-center">
                <div className="flex sm:flex-row flex-col sm:w-2/4 text-white gap-5">
                    <h1 className="sm:text-3xl text-xl">A propos</h1>
                    <p className="sm:text-base text-sm">Ancien conseiller de vente, je me suis reconverti dans le développement web, me spécialisant dans le front end pour les applications web et mobiles. Ma passion pour l'art, le design et la mode influence profondément mon travail, apportant une touche créative à chaque projet.  Sensible à l'écologie et attaché aux valeurs humaines, je mets un point d'honneur à développer des solutions respectueuses de l'environnement et inclusives. Mon amour pour le contact humain et mon désirse d'aider reflètent dans ma manière d'interagir avec les clients, visant toujours à offrir un service exceptionnel</p>
                </div>
                <img src={Avatar} className="w-36 h-auto sm:w-96 sm:h-auto" alt="" />
            </div>
            
        </div>
        </>
    )
}