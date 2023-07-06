import Navbar from "./Component/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./Component/Header/Header";
import Services from "./Component/Services/Services";
import Contact from "./Component/Contact/Contact";
import Timeline from "./Component/Timeline/Timeline";
import Projects from "./Component/Projects/Projects";
import LogoSlider from "./Component/LogoSlider.js/LogoSlider";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
        <Header/> 
     <Timeline/>
       <LogoSlider/>
    <Services/>
       <Projects/>
     <Contact/> 
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
