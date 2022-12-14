import Destination from "../components/Destinations";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RecentTrip from "../components/RecentTrip";


const Home = () =>{
   return(
    <>
     <header>
      <Navbar />
      </header>

     <Hero 
     cName = "hero"
     heroImg = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     title = "Your Journey Your Story"
     text = "choose Your Favourite Destination"
     btntxt = "Travel Plan"
     url = '/'
     btnclass = "show"
     />

     <Destination />

     <RecentTrip />

     <Footer />
    </>
   )
}

export default Home;