import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './socialfollow.css'

export const SocialFollow = () => {
  return (
    <div className="social-container">
      <a
        href="https://www.youtube.com/"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a
        href="https://www.instagram.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
    </div>
  );
}
