import './index.css';
import "./App.css";

import { Fade, Slide } from "react-awesome-reveal";
import Header from "./views/header";
import About from "./views/about";
import Tools from "./views/tools";
import Project from "./views/projects";
import Nav from './components/navigation';
import Contact from './components/contact';

import AnimatedCursor from "react-animated-cursor"
import withSplashScreen from './components/withSplashScreen';

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Revenez 😥";
})
window.addEventListener("focus", () =>{
  document.title = docTitle;
})

function App() {
  return (
    <>
      
    <div className=' relative overflow-x-hidden overflow-y-hidden'>
      <AnimatedCursor
        innerSize={8}
        outerSize={10}
        color='254, 91, 0'
        outerAlpha={0.2}
        innerScale={2}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 1,
              outerSize: 1,
              color: '#FE5B00',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
    <div class="-z-50 background-texture">
      <div class="blob-1"></div>
      <div class="blob-2"></div>
      <div class="blob-3"></div>
      <div class="blob-4"></div>
    </div>  
    <Header/> 
    <About/> 
    <Tools/> 
    <Project/>
    <Nav/>
    <Contact/>
    </div>
    </>
  );
}

export default withSplashScreen(App);  