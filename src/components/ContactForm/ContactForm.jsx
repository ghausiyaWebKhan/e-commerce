import './ContactForm.css';

const ContactForm = () => {
    return (
        <>
            <div className="contact-form" style={{color:'black'}}>
                <div className="contact" >
                    <input type="text" className='input-contact' placeholder='Your Name'/>
                    <input type="email" className='input-contact' placeholder='Your Email'/>
                    <input type="text" className='input-contact' placeholder='Subject'/>
                    <textarea type="message"  rows='10' cols='40' className='input-contact' placeholder='Message'/>
                    <button type='button'>Send Message</button>
                </div>
            </div>
        </>
    );
}



export default ContactForm;