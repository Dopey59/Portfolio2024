import "../button.css"
import Avatar from "../assets/avatar.png";
export default function About(){
    return(
        <>
        <div className="h-screen bg-black">
                <div className="mx-4 py-4">
                    <h2 className="bg-white p-2 w-fit">A propos</h2>
                </div>
            <div className='flex items-center flex-col p-2 justify-center'>
                <div className="flex flex-col text-base sm:text-2xl gap-3 justify-start sm:container sm:mx-auto">
                    <p className="text-white">
                    Ancien conseiller de vente, je me suis reconverti dans le développement web, me spécialisant dans le front end pour les applications web et mobiles.</p>
                    <p className="text-white">Ma passion pour l'art, le design et la mode influence profondément mon travail, apportant une touche créative à chaque projet.
                    Sensible à l'écologie et attaché aux valeurs humaines, je mets un point d'honneur à développer des solutions respectueuses de l'environnement et inclusives.                    
                    </p>
                    <p className="text-white">
                        Mon amour pour le contact humain et mon désir d'aider se reflètent dans ma manière d'interagir avec les clients,
                        visant toujours à offrir un service exceptionnel.
                    </p>
                    <img src={Avatar} alt="" />
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2 justify-end bottom-3 fixed">
                    <div className="navbar font-semibold gap-3 text-sm flex items-center p-2 rounded-full text-white bg-white/20 ">
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