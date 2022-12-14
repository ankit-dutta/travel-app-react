import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About1 from '../assets/About1.jpg';
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () =>{
    return(
     <>
        <header>
            <Navbar />
        </header>

     <Hero 
     cName = "hero-mid"
     heroImg = {About1}
     title = "About"    
     btnclass = "hide"
     />

     <AboutUs />

     <Footer />
     </>
    )
 }
 
 export default About;