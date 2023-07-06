import React from 'react';
import Slider from 'react-slick';
import ractjs from '../../assets/react.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import git from '../../assets/git.png';
import xd from '../../assets/xd.png';
import figma from '../../assets/figmax.png';
import and from '../../assets/and.png';
import './LogoSlider.css'
const LogoSlider = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     // autoplaySpeed: 2000,
    //     // cssEase: "linear"
    //     responsive:[
    //       {
    //         breakpoint :768,
    //         settings : {
    //           slidesToShow:2,
    //         },
    //       },
    //       {
    //         breakpoint :480,
    //         settings : {
    //           slidesToShow :1,
    //         },
    //       },
    //     ],
    //   };
  return (
    <div className='skills-container'>
        {/* <Slider {...settings}> */}
            <img src={ractjs} alt='React.Js' className='skill-logo'/>
            <img src={html} alt='html' className='skill-logo' />
            <img src={css} alt='css' className='skill-logo' />
            <img src={js} alt='js' className='skill-logo' />
            <img src={git} alt='git' className='skill-logo' />
            <img src={xd} alt='adobe.xd' className='skill-logo' />
            <img src={figma} alt='figma' className='skill-logo' />
            <img src={and} alt='android' className='skill-logo' />
        {/* </Slider> */}
    </div>
  );
};

export default LogoSlider;