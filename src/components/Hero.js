import './Hero.css'

const Hero = (props) =>{
   return(
    <>
    
   <div className={props.cName}> 
    <img alt="heroimg" src={props.heroImg} />
   </div>


    <div className="hero-text">
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <a href = {props.url} className={props.btnclass}>{props.btntxt}</a>
    </div>   
    </>
   )
}

export default Hero;