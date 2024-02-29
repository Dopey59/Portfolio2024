export default function Navigation(){
    return(
        <>
        {/* Navigation */}
        <div className="flex gap-2 bottom-3 justify-center fixed z-50 ">
            <div className="navbar font-semibold gap-3 justify-center text-sm flex items-center p-2 rounded-full z-50 text-white bg-black/70 ">
                <p className="hover:bg-white button_slide slide_right p-1 rounded-full">A propos</p>
                <p className="hover:bg-white button_slide slide_right p-1 rounded-full">Outils</p>
                <p className="hover:bg-white button_slide slide_right p-1 rounded-full">Projet</p>
                <p className="hover:bg-white button_slide slide_right p-1 rounded-full">Contact</p>
            </div>
        </div>
        {/* Navigation */}
        </>
    )
}