import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'boxicons'


function SplashMessage() {
    return (
        <div className='bg-gradient-to-r gap-5 from-black via-neutral-900 to-black flex justify-center items-center h-screen'>
            <div className=' name sm:text-4xl text-base flex gap-2 absolute'>
                    <box-icon size="lg" color="orangered" name='loader-alt' animation='spin' ></box-icon>
                    <span className='a'>A</span>
                    <span className='c'>C</span>
                    <span className='c2'>C</span>
                    <span className='e'>E</span>
                    <span className='s'>S </span>
                    <span className='e2 ml-3'>E</span>
                    <span className='n'>N </span>
                    <span className='c3 ml-3'>C</span>
                    <span className='o'>O</span>
                    <span className='u'>U</span>
                    <span className='r'>R</span>
                    <span className='s2'>S</span>
                </div>
                <div className='container'>
                    <div className=' rain grid grid-cols-3 container'>
                        <div className=' drop'></div>
                        <div className=' waves'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className=' splash'></div>
                        <div className=' particles'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className=' rain'>
                        <div className=' drop'></div>
                        <div className=' waves'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className=' splash'></div>
                        <div className=' particles'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className=' rain'>
                        <div className=' drop'></div>
                        <div className=' waves'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className=' splash'></div>
                        <div className=' particles'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className=' rain'>
                        <div className=' drop'></div>
                        <div className=' waves'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className=' splash'></div>
                        <div className=' particles'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className=' rain'>
                        <div className=' drop'></div>
                        <div className=' waves'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className=' splash'></div>
                        <div className=' particles'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className=' rain'>
                        <div className=' drop'></div>
                            <div className=' waves'>
                                <div></div>
                                <div></div>
                            </div>
                        <div className=' splash'></div>
                            <div className=' particles'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
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
                }, 3500)
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