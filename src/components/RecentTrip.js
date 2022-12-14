import './RecentTrip.css';
import TripData from './TripData';
import Trip1 from '../assets/Recent1.jpg'
import Trip2 from '../assets/Recent2.jpg'
import Trip3 from '../assets/Recent3.jpg'



const RecentTrip = () =>{
    return(
        <>
        <div className='trip'>
            <h1>Recent Trip</h1>
            <p>You can discover unique destinations using Google Maps</p>

            <div className='tripcard'>
                <TripData
                image = {Trip1}
                heading="Trip in Indonesia"
                text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                />

                <TripData
                image = {Trip2}
                heading="Trip in Japan"
                text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />

                <TripData
                image = {Trip3}
                heading="Trip in France"
                text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
        </div>
        </>
    )

}

export default RecentTrip