import './index.css';
import "./App.css";

import Header from "./views/header";
import About from "./views/about";
import Tools from "./views/tools";
import Project from "./views/projects";
import Nav from './components/navigation';
import Contact from './components/footer';


import AnimatedCursor from "react-animated-cursor"
import withSplashScreen from './components/withSplashScreen';  // Include this line

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
    <div className='w-full h-auto'>
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