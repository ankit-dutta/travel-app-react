import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Contactimg from '../assets/contact1.jpg';
import Footer from "../components/Footer";

const Contact = () =>{
    return(
     <>
        <header>
            <Navbar />
        </header>

     <Hero 
     cName = "hero-mid"
     heroImg = {Contactimg}
    //  title = "contact"
    
     btnclass = "hide"
     />


<Footer />
     </>
    )
 }
 
 export default Contact;