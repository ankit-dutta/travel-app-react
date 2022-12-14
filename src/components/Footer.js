 import { Link } from 'react-router-dom';
 import './Footer.css'


const Footer = () =>{
    return(
        <>
        {/* <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Travel</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href = "/">
                        <i className='fa-brands fa-facebook-square'/>
                    </a>
                    <a href = "/">
                        <i className='fa-brands fa-instagram-square'/>
                    </a>
                    <a href = "/">
                        <i className='fa-brands fa-behance-square'/>
                    </a>
                    <a href = "/">
                        <i className='fa-brands fa-twitter-square'/>
                    </a>
                </div>
            </div>
        
            <div className='bottom'></div>
        </div> */}


<footer>
<div class="footer">
<div class="row">
<Link href="#"><i className="fa-brands fa-facebook-square"></i></Link>
<Link href="#"><i className="fa-brands fa-instagram-square"></i></Link>
<Link href="#"><i className="fa-brands fa-behance-square"></i></Link>
<Link href="#"><i className="fa-brands fa-twitter-square"></i></Link>
</div>

<div class="row">
<ul>
<li><Link href="#">Contact us</Link></li>
<li><Link href="#">Our Services</Link></li>
<li><Link href="#">Privacy Policy</Link></li>
<li><Link href="#">Terms & Conditions</Link></li>
<li><Link href="#">Career</Link></li>
</ul>
</div>

<div class="row">
Travel Copyright © 2021 Travel - All rights reserved || Travel.com
</div>
</div>
</footer>
        </>
    )
}


export default Footer;