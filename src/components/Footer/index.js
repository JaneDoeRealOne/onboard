import React from 'react';
import './footer.css';
import Logo from '../assets/KYH-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <div className='brand-section'>
          <img src={Logo} className='footer-logo' alt='logotype' />
          <p className='p-tag' name='number' type='number'>076- 885 21 20</p>
          <p className='p-tag' name='email' type='email'>antagning@kyh.se</p>
        </div>
        <div className='social-media-wrapper'>

          <a href="https://www.youtube.com/channel/UCw0LS01KsWOYYRDGjcag_Dg/featured"
            className="youtube social" target='_blank' rel='noopener noreferrer' >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>

          <a href="https://www.instagram.com/kyh_yrkeshogskola/"
            className="instagram social" target='_blank' rel='noopener noreferrer' >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          <a href="https://www.facebook.com/KYHyrkeshogskola/"
            className="facebook social" target='_blank' rel='noopener noreferrer' >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a href="https://www.linkedin.com/school/kyh/"
            className="likedin social" target='_blank' rel='noopener noreferrer' >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <div className='contact-section'>
          <p className='contact-text'>Kontakt</p>
          <a href='https://kyh.se/integritetspolicy/' className='policy'>Integritetspolicy</a>
          <span className='copy-text'>&copy; KYH 2021</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;

