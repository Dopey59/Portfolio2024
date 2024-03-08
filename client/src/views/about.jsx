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
            if (currentIndex < 3) { // Supposant que vous avez 3 éléments (0, 1, 2)
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
            <div id="about" className="noisy bg-black flex justify-center items-center sm:h-screen">
                
                <div className="Overflow flex-nowrap">{/* Carousel in mobile version */}
                 {/* First block */}
                 <div className="relative sm:p-12 p-7">
                    <div className="iconElement absolute bg-[#96C67F] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
                    </div>
                    <div className="boxContainer p-4 rounded-xl sm:w-96 w-80 bg-gray-200/50">
                        <div className="containerElement flex flex-col gap-3 mt-6">
                            <h1 className=" sm:text-xl gap-6 text-white">#Formation | 2022 - 2024</h1>
                            <h1 className="font-bold text-2xl sm:text-3xl gap-6">Web@cadémie by Epitech</h1>
                            <p className=" text-gray-200 ">Ce cursus qui se déroule au sein d'Epitech, une des toutes premières écoles d'informatique de France, bénéficie de ses enseignants et de sa pédagogie innovante reconnue qui favorise
                                l'auto progression et l'adaptabilité.
                                <br /><br />
                                Contenu : Les compétences acquises en première année : HTML5 / CSS3 PHP (Laravel, Symfony) MySQL Javascript (JQuery, NodeJS, React)  (applications mobiles hybrides) Apprentissages connexes (conduite de projets, méthodologies agiles, SEO, spécifications
                                fonctionnelles, CDC, UX, AI, etc..
                            </p>
                        </div>
                    </div>
                </div>
                {/* First block */}

                {/* Second block */}
                <div className="relative sm:p-12 p-7">
                    <div className="iconElement absolute bg-[#96C67F] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
                    </div>
                    <div className="boxContainer p-4 rounded-xl sm:w-96 w-80 bg-gray-200/50">
                        <div className="containerElement flex flex-col gap-3 mt-6">
                            <h1 className=" sm:text-xl gap-6 text-white ">#Formation | 2021</h1>
                            <h1 className="font-bold text-2xl sm:text-3xl gap-6">BGE LITTORAL OPALE</h1>
                            <p className=" text-gray-200">
                            Deux modules sont proposés: Gestion financière : Être capable d'établir le budget prévisionnel en appréciant l'ensemble des coûts, des	Revenus, des besoins en financement pour évaluer la rentabilité et la viabilité de l'entreprise.
                            <br /><br />
                             Développement par le web : Être capable d'utiliser des techniques de référencement (naturel et payant) de contrôler sa	e-réputation et communiquer sur les réseaux sociaux, d'établir une stratégie e-marketing.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Second block */}

                {/* Third block */}
                <div className="relative sm:p-12 p-7">
                    <div className="iconElement absolute bg-[#96C67F] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
                    </div>
                    <div className="boxContainer p-4 rounded-xl sm:w-96 w-80 bg-gray-200/50">
                        <div className="containerElement flex flex-col gap-3 mt-6">
                            <h1 className=" sm:text-xl gap-6 text-white ">#Expérience Pro</h1>
                            <h1 className="font-bold text-2xl sm:text-3xl gap-6">H&M - Euralille</h1>
                            <p className=" text-gray-200">
                            Deux modules sont proposés: Gestion financière : Être capable d'établir le budget prévisionnel en appréciant l'ensemble des coûts, des	Revenus, des besoins en financement pour évaluer la rentabilité et la viabilité de l'entreprise.
                            <br /><br />
                             Développement par le web : Être capable d'utiliser des techniques de référencement (naturel et payant) de contrôler sa	e-réputation et communiquer sur les réseaux sociaux, d'établir une stratégie e-marketing.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Third block */}
                <div className="relative sm:p-12 p-7">
                    <div className="iconElement absolute bg-[#96C67F] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
                    </div>
                    <div className="boxContainer p-4 rounded-xl sm:w-96 w-80 bg-gray-200/50">
                        <div className="containerElement flex flex-col gap-3 mt-6">
                            <h1 className=" sm:text-xl gap-6 text-white ">#Expérience Pro</h1>
                            <h1 className="font-bold text-2xl sm:text-3xl gap-6">H&M - Euralille</h1>
                            <p className=" text-gray-200">
                            Deux modules sont proposés: Gestion financière : Être capable d'établir le budget prévisionnel en appréciant l'ensemble des coûts, des	Revenus, des besoins en financement pour évaluer la rentabilité et la viabilité de l'entreprise.
                            <br /><br />
                             Développement par le web : Être capable d'utiliser des techniques de référencement (naturel et payant) de contrôler sa	e-réputation et communiquer sur les réseaux sociaux, d'établir une stratégie e-marketing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}