import './index.css';
import './App.css';

// import PhotoProfil from "../src/assets/pp.jpg";
// import Phone from "../src/assets/phone.jpg";

// import Skills from "./components/skills";
import Header from "./views/header";
import About from "./views/about";


import withSplashScreen from './components/withSplashScreen';  // Include this line

function App() {
  return (
    <>
     <Header/> 
     <About/> 

    
  
    </>
  );
}

export default withSplashScreen(App);  