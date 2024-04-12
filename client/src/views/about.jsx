import "../button.css";
import '../components/navigation';

import Arrow from '../assets/arrow.png'

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

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

        const email = "penet.william@gmail.com";
        const mailtoString = `mailto:${email}`;

    return(
        <>

            <div id="about" className="bg-zinc-900 sm:flex sm:items-center sm:justify-between sm:h-screen">

                <div className="left-block lg:flex-col gap-24 lg:items-start items-center lg:flex hidden sm:translate-x-24 sm:w-2/4 md:mx-0 mx-4">
                    <h1 className="xl:text-6xl text-4xl text-white">Ici, vous y trouverez mes <span className="text-orange-600">formations</span> et expériences <span className="text-orange-600">professionnelles</span> les plus récentes.</h1>
                    <h1 className="xl:text-3xl text-3xl text-white">"Ma passion pour l'art, le design et la mode influence profondément mon travail, apportant une touche créative à chaque projet"</h1>
                    
                    <div className="flex  gap-3 items-center">
                        <QRCodeSVG value="https://drive.google.com/uc?export=download&id=1h9iVe5ABtO_SKcYEXRaiIDmeyCuCuQ7Z"/>
                        
                        <div className="flex items-center gap-1">
                            <box-icon size="30x" color="orangered" name='scan' type='solid'></box-icon>
                            <p className="text-white">Télécharger le CV</p>
                        </div>
                    </div>

                </div>

                <div className="Overflow1 overflow-x-scroll flex  lg:flex-col items-end lg:h-screen">

                    <div className="relative sm:p-12  translate-y-24 lg:flex hidden flex-col gap-6">
                        <box-icon size="45px" color="white" name='hand-up' type='solid' animation='fade-down' ></box-icon>
                    </div>

                    <div className="relative p-7 sm:p-12 mx-14 sm:mx-auto">
                        <div className="iconElement absolute bg-[#FF4500] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                         <box-icon type='solid' color="white" name='graduation'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2   p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  bg-gray-200/50">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h1 className=" sm:text-xl gap-6 text-white">#Formation | 2022 - 2024</h1>
                                <h1 className="font-bold text-2xl sm:text-3xl gap-6">Web@cadémie by Epitech</h1>
                                <p className=" text-gray-200 ">Ce cursus qui se déroule au sein d'Epitech, une des toutes premières écoles d'informatique de France, bénéficie de ses enseignants et de sa pédagogie innovante reconnue qui favorise
                                    l'auto progression et l'adaptabilité.
                                    <br /><br />
                                    Les compétences acquises : HTML5 / CSS3, Php, MySQL Javascript (JQuery, NodeJS, React)
                                     - Conduite de projets, méthodologies agiles, SEO, etc..
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-[#FF4500] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='graduation'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2   p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  bg-gray-200/50">
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

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-[#FF4500] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='briefcase'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2   p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  bg-gray-200/50">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h1 className=" sm:text-xl gap-6 text-white ">#Expérience Pro</h1>
                                <h1 className="font-bold text-2xl sm:text-3xl gap-6">Entrepreneur e-commerce</h1>
                                <p className=" text-gray-200">
                                Street n Old est une Friperie en ligne d'origine Française spécialisée dans le prêt-à-porter vintage streetwear où le but est de rendre la mode accessible à tous.
                                <br /><br />
                                Nous accordons une importance capitale aux pratiques éco-responsables, qui constituent l'une des valeurs fondamentales de la marque. 
                                
                                Les étiquettes par exemple, sont fabriquées à partir de cartons recyclés et les ficelles en toile de jute.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-[#FF4500] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='briefcase'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2   p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  bg-gray-200/50">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h1 className=" sm:text-xl gap-6 text-white ">#Expérience Pro</h1>
                                <h1 className="font-bold text-2xl sm:text-3xl gap-6">Foot Locker - Coquelles (62)</h1>
                                <p className=" text-gray-200">
                                    En tant que vendeur chez Foot Locker, mes responsabilités incluaient l'accueil et le guidage des clients dans leur processus de sélection, jusqu'à la finalisation de leur achat. De plus, la gestion et l'organisation des stocks représentaient une part significative de mes tâches, en parallèle avec la promotion de ventes additionnelles.                                <br /><br />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-[#FF4500] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='briefcase'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2 p-4 rounded-xl sm:max-w-80 w-80 max-h-96 overflow-y-scroll  bg-gray-200/50">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h1 className=" sm:text-xl gap-6 text-white ">#Expérience Pro</h1>
                                <h1 className="font-bold text-2xl sm:text-3xl gap-6">La Botte Chantilly - Lille</h1>
                                <p className=" text-gray-200">
                                Mon expérience au sein de cette entreprise familiale, spécialisée dans les chaussures de milieu et haut de gamme, a été extrêmement enrichissante. Elle m'a permis de renforcer mes compétences en tant que conseiller de vente, en offrant une guidance tant sur le plan médical – en sélectionnant des chaussures adaptées aux besoins spécifiques de chaque client – que sur le plan esthétique.                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-[#FF4500] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='briefcase'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2 p-4 rounded-xl sm:max-w-80 w-80 max-h-96 overflow-y-scroll bg-gray-200/50">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h1 className=" sm:text-xl gap-6 text-white ">#Expérience Pro</h1>
                                <h1 className="font-bold text-2xl sm:text-3xl gap-6">H&M Euralille</h1>
                                <p className=" text-gray-200">
                                Au sein d'H&M, j'étais chargé de diverses tâches, notamment l'étiquetage et le scannage des articles. Je m'occupais également du réapprovisionnement des stocks et du placement des articles en rayon, une activité communément appelée "facing", qui faisait partie intégrante de mon quotidien.
                                Une de mes premières expériences en tant que conseiller de  vente qui m'a marqué.                             
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}