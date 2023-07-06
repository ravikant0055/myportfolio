import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      
      <div className='footer-copyright'>
         <p> © Made with React.Js by Ravi kant </p>
      </div>

      {/* social */}
      <div className='footer-social-media'>
            <a href="https://twitter.com/ravikant0011" target="_blank">
                <i className='fa-brands fa-twitter'></i>
            </a>
            <a href="https://github.com/ravikant0055" target="_blank">
                <i className='fa-brands fa-github'></i>
            </a>
            <a href="https://www.linkedin.com/in/ravi-kant-62814a1a3" target="_blank">
                <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href='' target="_blank">
                <i className='fa-solid fa-envelope'></i>
            </a>
      </div>
    </footer>

  );
};

export default Footer;