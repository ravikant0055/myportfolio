import React, { useRef, useState } from 'react';
import Lottie from 'react-lottie';
import './Contact.css';
import emailjs from '@emailjs/browser';
import PopUp from '../PopUp/PopUp';
const Contact = () => {
   const [model ,setModel] = useState(false);
   const toggleModal = () =>
    {
        setModel(!model);
    }
    if(model){
        document.body.classList.add('active-model');
    }
    else{
        document.body.classList.remove('active-model');
    }

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData:require( "./manwithlap.json"),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ocqncek', 'template_xyaqz79', form.current, 'c2OqDdVGMsoPAEMPY')
        .then((result) => {
            console.log(result.text);
            toggleModal();
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  

  return (
    <div className='contact-container'>
       <h1 id='p4'>Contacts</h1>
       <div className='list-container'>
         {/* Animation svg */}

         <div  className='animation-container'>
           <Lottie  options={defaultOptions} height={400} width={400}/>
         </div>

         {/* form */}
         <div className='contact-form-container'>
         <h2>Get In Touch</h2>
           <form ref={form} onSubmit={sendEmail} className='myform'>
             {/* <div className='form-container'> */}
              <input  className='con-1' type='text' placeholder='Your Name' name='user_name'/>
              <input className='con-1' type='email' placeholder='Your Email' name='user_email'/>
              <input className='con-1' type='text' placeholder='Subject' name='subject'/>
              <textarea id='msgid' className='con-1'  placeholder="Message" name='message' style={{height:"200px"}} ></textarea>
              <button  className='btn' type='submit'>Send</button>
              {/* </div> */}
           </form>
         </div>

       </div>

       {model && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
           <div className="modal-content">
           <img style={{width:'80px'}} src="https://em-content.zobj.net/source/microsoft-teams/363/smiling-face-with-hearts_1f970.png"/>
           <p>Thank You for your response</p>
          <button className="close-modal" onClick={toggleModal}>CLOSE</button>
          </div>
        </div>
       )} 
    </div>
    
  );
};
 
export default Contact;