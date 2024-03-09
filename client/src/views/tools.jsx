import '../card.css';

export default function Tools(){
    return(
        <>
         <div id="tools" className="bg-zinc-800 mx-auto flex items-center flex-col justify-center h-fit sm:h-screen">
                <h2 className='text-orange-600 sm:text-3xl text-2xl text-center sm:mx-6 py-6 '>Outils - Compétences</h2>
                <div class="ag-courses_box w-full overflow-x-auto sm:overflow-hidden sm:flex-row ">
                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        UI/UX Web design
                        </div>

                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                        Figma, Photoshop, Illustrator, Notion, Jira
                        </span>
                        </div>
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Développeur web &amp; mobile - Front End
                        </div>

                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                        React,  Js,  Tailwind, Html/CSS..
                        </span>
                        </div>
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Veille technologique & artistique
                        </div>

                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                        Behance, UX Design.cc, A List Apart..
                        </span>
                        </div>
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Référencement naturel (SEO)
                        </div>

                        <div class="ag-courses-item_date-box">
                        
                        <span class="ag-courses-item_date">
                        Mots clés, Optimisation, Bonnes pratiques..
                        </span>
                        </div>
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Déploiement/Hébergement site web
                        </div>

                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                            Ionos, Hostinger, Aws..
                        </span>
                        </div>
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Autres skills | CMS, SQL, PHP , NodeJs, API..
                        </div>
                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                        Shopify, Wordpress, Wix
                        </span>
                        </div>
                    </a>
                    </div>
                </div>
        </div>
        </>
    )
}