import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactUs() {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yd247in', 'template1', form.current, 'VdQ4--7AZkMyERSyS')
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) {
          setIsMessageSent(true);
          notify('Message envoyé !', 'success');
        } else {
          notify('Une erreur est survenue', 'error');
        }
      })
      .catch((error) => {
        console.log(error.text);
        notify('Une erreur est survenue..', 'error');
      });
  };

  const notify = (message, type) => {
    toast(message, {
      position: 'top-right',
      type: type,
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <>
      {/* <!-- Hero --> */}
      <div id="contact" className="">
        <div className="noisy flex justify-center px-4 sm:px-24  h-screen items-center ">
          <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
            {/* <!-- Title --> */}
            <h1 className="text-3xl sm:text-left text-center text-indigo-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
              Contactez<span className="text-indigo-500"> moi !</span>
            </h1>
            <p className="mt-3 sm:text-left text-center text-base text-gray-500">
             Une question à mon sujet ? Merci de remplir le formulaire ci-dessous. Réponse sous 48h maximum.
            </p>
            {/* <!-- End Title --> */}

            <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Formulaire de contact</div>

            {/* <!-- Form --> */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <input required type="text" id="hs-hero-name-2" placeholder="Prénom du destinataire" name="from_name" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-slate-900 border-gray-700 text-gray-400"/>
              </div>

              <div className="mb-4">
                <input required type="text" id="hs-hero-name-2" placeholder="Objet" name="object" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-slate-900 border-gray-700 text-gray-400"/>
              </div>

              <div className="mb-4">
                <input required type="email" id="hs-hero-email-2" name="from_mail" placeholder="E-mail" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-slate-900 border-gray-700 text-gray-400"/>
              </div>

              <div className="mb-4">
                <div>
                  <textarea required id="hs-about-contacts-1" type="text" placeholder="Message" name="message" rows="4" className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"></textarea>
                </div>
              </div>

              <div className="grid">
                
                <input type="submit" onClick={notify} value="Envoyer" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 outline-none hover:cursor-pointer transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4"/>
                  <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark" 
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};