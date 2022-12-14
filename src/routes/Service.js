import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services1 from '../assets/services1.jpg';
import Footer from "../components/Footer";
import RecentTrip from "../components/RecentTrip";


const Service = () =>{
    return(
     <>
        <header>
            <Navbar />
        </header>

     <Hero 
     cName = "hero-mid"
     heroImg = {Services1}
     title = "Service"
    
     btnclass = "hide"
     />

      <RecentTrip />

     <Footer />
     </>
    )
 }
 
 export default Service;