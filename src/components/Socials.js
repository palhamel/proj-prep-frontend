import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'


// TODO: Break out to own FA component library

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



/*
https://codesandbox.io/s/react-social-follow-cnupc?file=/src/styles.css

.social-container {
  background: #eee;
  padding: 25px 50px;
}
a.social {
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
}

a.social:hover {
  transform: translateY(-2px);
}

a.youtube {
  color: #eb3223;
}

a.facebook {
  color: #4968ad;
}

a.twitter {
  color: #49a1eb;
}

a.instagram {
  color: black;
}





*/