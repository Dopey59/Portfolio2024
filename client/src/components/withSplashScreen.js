import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'boxicons'


function SplashMessage() {
    return (
        <div className='noisy justify-center items-center flex overflow-y-hidden h-screen fixed w-screen overflow-x-hidden'>
           <div class="-z-50 fixed background-texture">
                <div class="blob-1"></div>
                <div class="blob-2"></div>
                <div class="blob-3"></div>
                <div class="blob-4"></div>
            </div>
            <div className='flex items-center'>
                <div className='flex gap-1'>
                    <box-icon color='blue' size='sm' name='loader-alt' animation='spin'/>
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
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        fade:true,
                    });
                }, 1000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}