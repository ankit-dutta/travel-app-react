import Destination1 from '../assets/Destination1.jpg'
import Destination2 from '../assets/Destination2.jpg'
import Destination3 from '../assets/Destination3.jpg'
import Destination4 from '../assets/Destination4.jpg'
import DestinationData from './DestinationData';

import './Destinations.css';


const Destination = () =>{
  return(
    <>
       <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot time frame</p>

         <DestinationData
          className = "first-des"
          heading = "Taal valvano , Batangas"
          text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          img1 = {Destination1}
          img2 = {Destination2}
         />

<DestinationData
          className = "first-des-reverse"
          heading = "Mt.Daguldul,Batangas"
          text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          img1 = {Destination3}
          img2 = {Destination4}
         />


       </div>   </>
  )
}


export default Destination;