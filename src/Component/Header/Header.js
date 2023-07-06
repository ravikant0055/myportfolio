import mypic from "../../assets/profilepic.png";
import React from 'react';
import Typical from 'react-typical';
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">

      {/* <div className="social-content">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-envelope"></i>
      </div> */}


      {/* Header Content */}

      <div className="header-content">
        <h1>Hey! <img style={{width:'40px'}} src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png"/>  </h1>
        <h2 className='fullname'> I'm Ravi Kant</h2>
        {/* add yarn react-typical  */}
        <h2 className='typical-h'>
            I am a {""}
            <Typical
               className='tp'
              steps={[
                "Full Stack Developer",1000,
                "React Developer",1000,
                "Java Developer",1000,
                "Android Developer",1000,
              ]}
              loop={Infinity}
              wrapper='n'
            />
        </h2>
        <p>I am ravikant and i am budding Fullstack
            Developer with 1+ years of work
            experience and now looking out for a 
            career enriching opportunity, presently 
            I am associated with Wipro Technologies
            as a Project Engineer.
        </p>
       
         <div className="social-content">
         <a href="https://drive.google.com/file/d/1VTi0peKKxggK_GCry6M69ijKmiXECHv7/view?usp=drivesdk" target="_blank"><button className="hire-button" type="submit">HIRE ME</button></a>
          <a href="https://twitter.com/ravikant0011" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/ravi-kant-62814a1a3" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/ravikant0055" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="" target="_blank"><i class="fa-solid fa-envelope"></i></a>
      </div>
      </div>
      
      {/* Image Content */}

      <div className="profile-img-container">
       <img src={mypic} alt='mypic'/>
      </div>

    </div>
  );
};

export default Header;