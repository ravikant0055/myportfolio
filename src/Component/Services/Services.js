import React from 'react';
import "./Services.css";
const Services = () => {
  return (
    <div className='services-container'>
        <h1 id='p2' className='headtag'>What I do for Clients</h1>
        {/* <div className='services-list-container'> */}

            {/* Items */}
            <div className='services-item-container'>
               <div className='services-item'>
                    <i className='fa-solid fa-code'></i>
                    <h3>Web Developement</h3>
                    <p>
                    As an dedicated web developer specializing in React JS,
                     my focus is on create exceptional solutions to my clients, 
                     I can create dynamic user-friendly web application
                      that enhance user engagement and satisfaction I develop modular and
                       reusable UI components using React component based architecture which
                        facilitates efficient development and easy maintenance
                    </p>
                </div>

                <div className='services-item'>
                    <i className='fa-solid fa-code'></i>
                    <h3>UI/UX Designing</h3>
                    <p>
                    As a UI designer with expertise in Adobe XD and figma.
                     my primary focus is on providing visually stunning and 
                     user centric designs for my client.Using these powerful 
                     design tools, I create intuitive and engaging user interfaces
                      that enhance the overall user experience. I specialize in 
                      creating responsive layout design that is visually appealing
                    and interaction.
                    </p>
                </div> 

                <div className='services-item'>
                    <i className='fa-solid fa-code'></i>
                    <h3>Java Developement</h3>
                    <p>
                    As a Java developer specializing in Spring Boot,
                     I specialize in providing cutting-edge solutions
                      for my clients with the Spring Boot powerful framework.
                    I design and develop robust and scalable web applications that meet 
                    the unique requirements for each client, from building RESTful APIs 
                    to implementing secure authentication and database integration.


                    </p>
                </div> 

                <div className='services-item'>
                    <i className='fa-solid fa-code'></i>
                    <h3>App Developement</h3>
                    <p>
                    As an App developer specializing in Flutter,
                    I excel in developing top notch mobile application for my clients.
                    Using the flutter framework,I build cross-platform apps that runs seamlessly
                     on both Android and iOS devices. By leveraging Flutter’s responsive and expressive UI Toolkit,
                    I design visually stunning interfaces that provide users with an smooth and engaging experience.

                    </p>
                </div> 

            </div>
        {/* </div> */}
    </div>
  );
};

export default Services;