import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'boxicons'


function SplashMessage() {
    return (
        <div id="splashscreen" className='noisy bg-black justify-center flex h-screen'>
            <div className='name sm:text-2xl items-center text-2xl flex'>
                <box-icon color='orangered' size='sm' name='loader-alt' animation='spin'/>
                <span className='h'>C</span>
                <span className='e'>h</span>
                <span className='l'>a</span>
                <span className='e'>r</span>
                <span className='e'>g</span>
                <span className='o'>e</span>
                <span className='w'>m</span>
                <span className='o2'>e</span>
                <span className='r'>n</span>
                <span className='l3'>t</span>
                <span className='h'>.</span>
                <span className='e'>.</span>
                <span className='l'>.</span>
            </div>
                <div className='flex justify-center items-center bottom-1 fixed text-white'>
                    <p className='font-light text-sm sm:text-lg'>Créé et développé par William Penet © 2024</p>
                </div>
        </div>
    );
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading: true,
          fadeOut: false, // Ajoutez l'état fadeOut pour contrôler l'animation
        };
      }
  
      async componentDidMount() {
        try {
          // Supposons que votre splash screen dure 3500ms
          setTimeout(() => {
            this.setState({ fadeOut: true }); // Commence l'animation de fade out
  
            // Configurez un autre timeout pour changer l'état de loading après la durée de l'animation
            setTimeout(() => {
              this.setState({ loading: false });
            }, 3000); // La durée de l'animation CSS fade-exit est de 3s
          }, 3500);
        } catch (err) {
          console.log(err);
          this.setState({ loading: false });
        }
      }
  
      render() {
        const { loading, fadeOut } = this.state;
  
        // Appliquez la classe fade-out si fadeOut est true
        const splashClass = fadeOut ? 'noisy bg-black justify-center flex h-screen fade-out' : 'noisy bg-black justify-center flex h-screen';
  
        if (loading) {
          // Rendu conditionnel du SplashMessage avec les classes dynamiques
          return <div id="splashscreen" className={splashClass}>{SplashMessage()}</div>;
        }
  
        // Une fois le loading terminé, affichez le composant enveloppé
        return <WrappedComponent {...this.props} />;
      }
    };
  }