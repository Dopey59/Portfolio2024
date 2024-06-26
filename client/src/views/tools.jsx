import '../card.css';

export default function Tools(){
    return(
        <>

         <div id="tools" className="mx-auto flex items-center flex-col justify-center sm:h-screen mb-16">
                <h2 className='sm:text-3xl text-2xl sm:mx-6 py-6 '>Outils - Compétences</h2>
                <div class="ag-courses_box w-full overflow-x-auto sm:overflow-hidden sm:flex-row ">
                    <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        UI/UX Web design
                        </div>

                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                        Figma, Photoshop, Illustrator, Notion, Jira
                        </span>
                        </div>
                    </div>
                    </div>

                    <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Développeur web &amp; mobile - Front End
                        </div>

                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                        React,  Js,  Tailwind, Html/CSS..
                        </span>
                        </div>
                    </div>
                    </div>

                    <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Veille technologique & artistique
                        </div>

                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                        Behance, UX Design.cc, A List Apart..
                        </span>
                        </div>
                    </div>
                    </div>

                    <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Référencement naturel (SEO)
                        </div>

                        <div class="ag-courses-item_date-box">
                        
                        <span class="ag-courses-item_date">
                        Mots clés, Optimisation, Bonnes pratiques..
                        </span>
                        </div>
                    </div>
                    </div>

                    <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Déploiement &
                        Hébergement 
                        </div>

                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                            Ionos, Hostinger, Aws..
                        </span>
                        </div>
                    </div>
                    </div>

                    <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Autres skills | CMS, SQL, PHP , NodeJs, API..
                        </div>
                        <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                        Shopify, Wordpress, Wix
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        </>
    )
}