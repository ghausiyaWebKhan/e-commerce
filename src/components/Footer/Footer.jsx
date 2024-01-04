import './Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GoToTop from '../GoToTop/GoToTop';
import { useEffect , useState} from 'react';




const Footer = () =>{
    const [isVisible, setIsVisible] = useState(false);
    const goToNavbar = () => {
        window.scrollTo({ top:0, left:0,behavior:'smooth'});
    }
    const listenToScroll = () =>{
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(windowScroll);
        if(windowScroll > 122){
            setIsVisible(true);
            
        }else{
            setIsVisible(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',listenToScroll);
        // stop to scroll , chache memory se ghayab
        return () => window.removeEventListener('scroll',listenToScroll);
    },[]);
    
    
       return( <>
            <div className='footer'>
                <div className='iner_footer'>
                    <div className='get_in_touch'>
                        <h1>GET IN TOUCH</h1>
                        <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet n</p>
                        <ul>
                            <li><span><LocationOnIcon/></span>123 Street, New York, USA</li>
                            <li><span><EmailIcon/></span>info@example.com</li>
                            <li><span><LocalPhoneIcon/></span>+012 345 67890</li>
                        </ul>

                    </div>
                    <div className='quick_shop'>
                        <h1>QUICK SHOP</h1>
                        <ul>
                            <li><span><ChevronRightIcon/></span><a href='#'>Home</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Our Shop</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Shop Detail</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Shopping Cart</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Checkou</a>t</li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='account'>
                    <h1>MY ACCOUNT</h1>
                        <ul>
                            <li><span><ChevronRightIcon/></span><a href='#'>Home</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Our Shop</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Shop Detail</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Shopping Cart</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Checkout</a></li>
                            <li><span><ChevronRightIcon/></span><a href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='news_letter'>
                    <h1>NEWS LETTER</h1>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <h2>FOLLOW US</h2>
                        <div className='social_icons'>
                            <span><LinkedInIcon/></span>
                            <span><TwitterIcon/></span>
                            <span><InstagramIcon/></span>
                            <span><FacebookIcon/></span>
                        </div>
                    </div>
                    {/* <hr/> */}
                </div>
                    
                    {isVisible && (

                    <div className='go-to-top' onClick={goToNavbar}><GoToTop/></div>
                    )}
                    
            
            </div>
        </>
    );
}

export default Footer;