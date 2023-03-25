import React from 'react';
import "./aboutus.scss";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const AboutUs = () => {
    return (
        <div className='about' id='aboutus'>
            <div className="aboutLeft">
                <img src="./img/duaa.jpg" alt="" />
            </div>

            <div className="aboutRight">
                <div className="aboutRightText">
                    <h1>About us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga, explicabo dicta incidunt quibusdam cum natus sapiente rem, ea quisquam similique maiores
                        facilis? Aliquam laborum nihil temporibus, veritatis sapiente sequi!
                    </p>
                </div>

                <div className="contact">
                    <span><EmailIcon className='icon' /> kaoulakhemiri@gmail.com</span>
                    <span><PhoneAndroidIcon className='icon' /> +216 53243620</span>
                    <a href='https://www.linkedin.com/in/khaoula-khemiri-389b58171/' target="_blank">< LinkedInIcon className='icon' />  kaoula khemiri </a>

                </div>
            </div>
        </div>
    );
}

export default AboutUs;
