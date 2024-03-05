import "../button.css"

import '../components/navigation';

import React, { useState } from 'react';

import Avatar from "../assets/avatar.png";
import Graduate from "../assets/graduate.png"

import Video from'../assets/video/particles2.mp4'; 



export default function About(){
        // État pour suivre l'index de l'élément actuellement affiché
        const [currentIndex, setCurrentIndex] = useState(0);

        // Fonction pour afficher l'élément suivant
        const showNextElement = () => {
            if (currentIndex < 1) { // Supposant que vous avez 3 éléments (0, 1, 2)
            setCurrentIndex(currentIndex + 1);
            }
        };

        // Fonction pour retourner à l'élément précédent
        const showPreviousElement = () => {
            if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            }
        };


    return(
        <>
            <div id="about" className="relative sm:h-screen">
                <video autoPlay="autoplay" loop="loop" muted className="video">
                    <source src={Video} type="video/mp4"></source>
                </video>
                {currentIndex === 0 && (
                <div className="Element1 sm:flex-row flex flex-col sm:justify-around items-center p-4 sm:p-0 h-auto sm:h-screen">
                    <div className="hidden sm:flex">
                        <button onClick={showPreviousElement} className="button-svg" disabled={currentIndex <= 0}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orangered" width="30" height="30" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
                        </button>
                    </div>
                    <div className="mobileVersion-Arrow sm:hidden flex w-full items-center justify-between">
                        <button onClick={showPreviousElement} className="button-svg" disabled={currentIndex <= 0}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orangered" width="30" height="30" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
                        </button>

                        <button onClick={showNextElement} className="button-svg" disabled={currentIndex >= 1} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="orangered"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </button>
                    </div>
                    
                    <div className="flex flex-col items-end sm:w-2/4 gap-5" >
                    
                        <div className="flex flex-col gap-5 p-4 shadow-lg bg-gray-700/50 rounded-2xl">
                            <h2 className="sm:text-3xl text-xl font-black text-white">A propos</h2>
                            <p className="sm:text-xl text-base sm:font-light text-white ">Ancien conseiller de vente dans le prêt à porter, je me suis reconverti dans le développement web, me spécialisant dans le front end pour les applications web et mobiles.
                            Ma passion pour l'art, le design et la mode influence profondément mon travail, apportant une touche créative à chaque projet. 
                            <br /><br />
                            Sensible à l'écologie et attaché aux valeurs humaines, je mets un point d'honneur à développer des solutions respectueuses
                            de l'environnement et inclusives. Mon amour pour le contact humain et mon désirse d'aider reflètent dans ma manière
                            d'interagir avec les clients, visant toujours à offrir un service exceptionnel.
                            </p>

                            <div className="sm:flex hidden text-white gap-2">
                                    <p className="rounded px-2 py-1 border-zinc-600 border-2 bg-gray-700">Altruiste</p>
                                    <p className="rounded px-2 py-1 border-zinc-600 border-2 bg-gray-700">Jovial</p>
                                    <p className="rounded px-2 py-1 border-zinc-600 border-2 bg-gray-700">Empathique</p>
                                    <p className="rounded px-2 py-1 border-zinc-600 border-2 bg-gray-700">Geek</p>
                                </div>
                            </div>
                        </div>
                        <img src={Avatar} className="w-64 h-64 sm:w-96 sm:h-auto sm:flex hidden" alt="" />

                        <div className="gap-2 flex flex-col sm:hidden">
                            <img src={Avatar} className="w-64 h-64 sm:w-96 sm:h-auto" alt="" />
                        </div>
                        <div className="hidden sm:flex">
                            <button onClick={showNextElement} className="button-svg" disabled={currentIndex >= 1} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="orangered"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                            </button>
                        </div>
                    </div>
                )}

                {currentIndex === 1 && (
                <div className="Element2 sm:flex-row flex flex-col sm:justify-around items-center p-4 sm:p-0 h-auto sm:h-screen">
                    <button onClick={showPreviousElement} className="button-svg" disabled={currentIndex <= 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="orangered" width="30" height="30" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
                    </button>
                    <div className="flex flex-col items-end 4 gap-5 rounded-2xl shadow-lg bg-gray-700/50 ">
                        <div className="flex flex-col text-white gap-5 p-4 drop-shadow shadow-lg ">
                            <h2 className="sm:text-3xl text-xl font-black text-white">Diplôme</h2>
                            <p className="sm:text-xl text-base sm:font-light">Baccalauréat STI2D - Sciences et technologies de l'industrie et du développement durable.
                            <br /><br />
                            Option SIN - systèmes de l'information et du numérique.
                            <br /><br />
                            <p>Lycée Léonard De Vinci, Calais.</p>
                            <br />
                            <p className="">Obtention : Juin 2016</p>
                            </p>   
                            
                            <div className="sm:flex hidden text-white gap-2">
                                    <p className="rounded px-2 py-1 border-zinc-600 border-2 bg-gray-700">Altruiste</p>
                                    <p className="rounded px-2 py-1 border-zinc-600 border-2 bg-gray-700">Jovial</p>
                                    <p className="rounded px-2 py-1 border-zinc-600 border-2 bg-gray-700">Empathique</p>
                                    <p className="rounded px-2 py-1 border-zinc-600 border-2 bg-gray-700">Geek</p>
                            </div>
                        </div>
                    </div>
                            <img src={Graduate} className="w-64 h-64 sm:w-96 sm:h-auto sm:flex hidden" alt="" />
                    <button onClick={showNextElement} className="button-svg" disabled={currentIndex >= 1} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="orangered"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                    </button>
                </div>
                )}
            </div>
        </>
    )
}