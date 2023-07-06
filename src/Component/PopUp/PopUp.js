import React, { useState } from 'react'
import './PopUp.css'
const PopUp = () => {
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
  return (
 <>
  <button onClick={toggleModal} className='btn-model'>open</button> 
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
    </>
  );
};

export default PopUp;