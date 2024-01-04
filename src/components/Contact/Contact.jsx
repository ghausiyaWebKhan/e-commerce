import ContactForm from '../ContactForm/ContactForm';
// import Footer from '../Footer/Footer';
// // import Header from '../Navbar/Header';
// import Navbar from '../Navbar/Navbar';
import ShopRoute from '../ShopRoute/ShopRoute';

const Contact = () =>{
    return(
        <>
            <div>
                {/* <Header/> */}
                {/* <Navbar/> */}
                <ShopRoute route1 = 'Home /' route2 = 'Contact /' route3=''/>
                <ContactForm/>
                {/* <Footer/> */}
            </div>
        </>
    );
}

export default Contact;