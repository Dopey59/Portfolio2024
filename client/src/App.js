import './index.css';
import './App.css';

// import PhotoProfil from "../src/assets/pp.jpg";
// import Phone from "../src/assets/phone.jpg";

// import Skills from "./components/skills";
// import Projects from "./components/projects";

import withSplashScreen from './components/withSplashScreen';  // Include this line



function App() {
  return (
    <>
      <div>
        <div className='flex items-center justify-center h-screen'>
          <h1 className="text-6xl">Portfolio 2024</h1>
        </div>
      </div>
    
  
    </>
  );
}

export default withSplashScreen(App);  