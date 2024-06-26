import "../button.css";
import '../components/navigation';

import { Fade, Slide} from "react-awesome-reveal";

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

            <div id="about" className="sm:flex sm:items-center sm:justify-between sm:h-screen w-auto mb-4">
                <div className="mobileShow sm:hidden flex flex-col gap-12 justify-start items-center p-4 w-full">
                <Fade direction="up" delay="10">
                    <h1 className="text-2xl">Ici, vous y trouverez mes <span className="">formations</span> et expériences <span className="">professionnelles</span> les plus récentes.</h1>
                    <h2 className="text-base">"Ma passion pour l'art, le design et la mode influence profondément mon travail, apportant une touche créative à chaque projet"</h2>
                    <div className="flex flex-col items-center gap-3 ">
                        <h1>Pour un stage :</h1>
                        <div className="items-center gap-3 text-blue-600 bg-white p-2 rounded">
                            <a href="https://drive.google.com/file/d/1W5f8S2-HGviFz8daartcpnyEYyMDF_i5/view?usp=drive_link" download="cv">Télécharger le CV</a>
                        </div>
                        <h1>Pour un CDD / CDI :</h1>
                        <div className="items-center gap-3 text-blue-600 bg-white p-2 rounded">
                            <a href="https://drive.google.com/file/d/13RQ9ij2j8nyGWk_zKL1EFa86jF-IMUPn/view?usp=drive_link" download="cv">Télécharger le CV</a>
                        </div>
                    </div>
                    </Fade>
                </div>
                    <div className="left-block lg:flex-col gap-24 lg:items-start items-center lg:flex hidden sm:translate-x-24 sm:w-2/4 md:mx-0 mx-4">
                        <Fade direction="up" delay="10">
                        <h1 className="xl:text-6xl text-3xl">Ici, vous y trouverez mes <span className="">formations</span> et expériences <span className="">professionnelles</span> les plus récentes.</h1>
                        <h2 className="text-xl">"Ma passion pour l'art, le design et la mode influence profondément mon travail, apportant une touche créative à chaque projet"</h2>
                        
                        <div className="flex  gap-24 items-center">
                            <QRCodeSVG value="https://drive.google.com/uc?export=download&id=1h9iVe5ABtO_SKcYEXRaiIDmeyCuCuQ7Z"/>
                            
                            <div className="flex items-center gap-3">
                                <box-icon size="30px" color="blue" name='scan' type='solid'></box-icon>
                                <p className="">Télécharger le CV</p>
                            </div>
                        </div>
                        </Fade>
                    </div>

                <div className="Overflow1 overflow-x-scroll flex lg:flex-col items-end lg:h-screen py-10 sm:py-0">
                    <div className="relative sm:p-12  translate-y-24 lg:flex hidden flex-col gap-6">
                        <box-icon size="45px" color="white" name='hand-up' type='solid' animation='fade-down'></box-icon>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-blue-600 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='graduation'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2   p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  sm:bg-[#ffffff54] bg-[#e8e8e862] ">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h2 className=" sm:text-xl gap-6 ">#Formation</h2>
                                <h1 className="font-bold text-2xl sm:text-3xl gap-6">Studi - Développeur Angular Full Stack. Bac +3</h1>
                                <p className=" ">
                                La formation que je suis actuellement chez Studi s'inscrit dans la continuité de mon apprentissage chez Epitech. J'y consolide mes compétences en validant un Bachelor (titre RNCP de niveau Bac+3). 
                                <br /><br />
                                Je me suis également lancé le défi d'apprendre le langage Python, qui fait partie du programme du Bachelor, ajoutant ainsi une corde supplémentaire à mon arc dans mon parcours de développeur web.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-blue-600 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='graduation'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2   p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  sm:bg-[#ffffff54] bg-[#e8e8e862] ">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h2 className=" sm:text-xl gap-6 ">#Formation</h2>
                                <h1 className="font-bold text-2xl sm:text-3xl gap-6">Epitech - Intégrateur Web</h1>
                                <p className=" ">
                                Epitech a été un tournant dans ma vie professionnelle. En effet, après avoir été conseiller de vente,
                                 j'ai décidé de me reconvertir professionnellement en suivant une formation de 2 ans à l'école Epitech, à Lille.
                                <br /><br />
                                J'ai pu acquérir de solides bases dans le développement web en partant de zéro.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-blue-600 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='graduation'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2   p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  sm:bg-[#ffffff54] bg-[#e8e8e862] ">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h2 className=" sm:text-xl gap-6 ">#Formation</h2>
                                <h2 className="font-bold text-2xl sm:text-3xl gap-6">BGE LITTORAL OPALE</h2>
                                <p className=" ">
                                Deux modules sont proposés: Gestion financière : Être capable d'établir le budget prévisionnel en appréciant l'ensemble des coûts, des	Revenus, des besoins en financement pour évaluer la rentabilité et la viabilité de l'entreprise.
                                <br /><br />
                                Développement par le web : Être capable d'utiliser des techniques de référencement (naturel et payant) de contrôler sa	e-réputation et communiquer sur les réseaux sociaux, d'établir une stratégie e-marketing.
                                </p>
                            </div>
                        </div>
                    </div>
                     
                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-blue-600 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='briefcase'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2  p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  sm:bg-[#ffffff54] bg-[#e8e8e862] ">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h2 className=" sm:text-xl gap-6">#Expérience Pro</h2>
                                <h2 className="font-bold text-2xl sm:text-3xl gap-6">Entrepreneur e-commerce</h2>
                                <p className="">
                                Street n Old est une Friperie en ligne d'origine Française spécialisée dans le prêt-à-porter vintage streetwear où le but est de rendre la mode accessible à tous.
                                <br /><br />
                                Nous accordons une importance capitale aux pratiques éco-responsables, qui constituent l'une des valeurs fondamentales de la marque. 
                                
                                Les étiquettes par exemple, sont fabriquées à partir de cartons recyclés et les ficelles en toile de jute.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-blue-600 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='briefcase'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2   p-4 rounded-xl  sm:max-w-80 w-80 max-h-96 overflow-y-scroll  sm:bg-[#ffffff54] bg-[#e8e8e862] ">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h2 className=" sm:text-xl gap-6 ">#Expérience Pro</h2>
                                <h2 className="font-bold text-2xl sm:text-3xl gap-6">Foot Locker - Coquelles (62)</h2>
                                <p className=" ">
                                    En tant que vendeur chez Foot Locker, mes responsabilités incluaient l'accueil et le guidage des clients dans leur processus de sélection, jusqu'à la finalisation de leur achat. De plus, la gestion et l'organisation des stocks représentaient une part significative de mes tâches, en parallèle avec la promotion de ventes additionnelles.                                <br /><br />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-blue-600 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='briefcase'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2 p-4 rounded-xl sm:max-w-80 w-80 max-h-96 overflow-y-scroll  sm:bg-[#ffffff54] bg-[#e8e8e862] ">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h2 className=" sm:text-xl gap-6 ">#Expérience Pro</h2>
                                <h2 className="font-bold text-2xl sm:text-3xl gap-6">La Botte Chantilly - Lille</h2>
                                <p className=" ">
                                Mon expérience au sein de cette entreprise familiale, spécialisée dans les chaussures de milieu et haut de gamme, a été extrêmement enrichissante. Elle m'a permis de renforcer mes compétences en tant que conseiller de vente, en offrant une guidance tant sur le plan médical – en sélectionnant des chaussures adaptées aux besoins spécifiques de chaque client – que sur le plan esthétique.                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative sm:p-12 p-7">
                        <div className="iconElement absolute bg-blue-600 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                            <box-icon type='solid' color="white" name='briefcase'></box-icon>                        
                        </div>
                        <div className="boxContainer Overflow2 p-4 rounded-xl sm:max-w-80 w-80 max-h-96 overflow-y-scroll sm:bg-[#ffffff54] bg-[#e8e8e862] ">
                            <div className="containerElement flex flex-col gap-3 mt-6">
                                <h2 className=" sm:text-xl gap-6 ">#Expérience Pro</h2>
                                <h2 className="font-bold text-2xl sm:text-3xl gap-6">H&M Euralille</h2>
                                <p className=" ">
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