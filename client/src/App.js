import './index.css';
import "./App.css";


// import PhotoProfil from "../src/assets/pp.jpg";
// import Phone from "../src/assets/phone.jpg";

// import Skills from "./components/skills";

import Header from "./views/header";
import About from "./views/about";
import Tools from "./views/tools";

import withSplashScreen from './components/withSplashScreen';  // Include this line

function App() {
  return (
    <>
    <div className='relative'>
     <Header/> 
     <About/> 
     <Tools/> 
    </div>

    
  
    </>
  );
}

export default withSplashScreen(App);  