import React from 'react';

export default function Navigation() {
    // Fonction pour gérer le défilement
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <div className="flex gap-2 bottom-3 justify-center fixed w-full">
                <div className="navbar font-semibold gap-3 text-sm flex p-2 rounded-full z-50 text-white sm:bg-black:90 bg-black ">
                    {/* Les éléments de navigation avec onClick pour défiler vers la section */}
                    <p onClick={() => scrollToSection('about')} className="button_slide slide_right p-1 rounded-full cursor-pointer">A propos</p>
                    <p onClick={() => scrollToSection('tools')} className="button_slide slide_right p-1 rounded-full cursor-pointer">Outils</p>
                    <p onClick={() => scrollToSection('projects')} className="button_slide slide_right p-1 rounded-full cursor-pointer">Projet</p>
                    <p onClick={() => scrollToSection('contact')} className="button_slide slide_right p-1 rounded-full cursor-pointer">Contact</p>
                </div>
            </div>
        </>
    );
}
