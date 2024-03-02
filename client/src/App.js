import './index.css';
import "./App.css";

import Header from "./views/header";
import About from "./views/about";
import Tools from "./views/tools";
import Project from "./views/projects";


import withSplashScreen from './components/withSplashScreen';  // Include this line

import Nav from './components/navigation';

function App() {
  return (
    <>
    <div className=''>
     <Header/> 
     <About/> 
     <Tools/> 
     <Project/>
     <Nav/>
    </div>

    
  
    </>
  );
}

export default withSplashScreen(App);  