import Destination1 from '../assets/Destination1.jpg'
import Destination2 from '../assets/Destination2.jpg'
import Destination3 from '../assets/Destination3.jpg'
import Destination4 from '../assets/Destination4.jpg'

import './Destinations.css';

 const DestinationData = (props) =>{
    return(
        <>
          

        <div className={props.className}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="image"> 
            <img alt="img" src = {props.img1}/> 
            <img alt="img" src = {props.img2}/> 
            </div>
        </div>
       
        </>
    )
 }

 export default DestinationData