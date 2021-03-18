import React from "react";
import resume from "./NataliaDoudkina_Resume.pdf";
import "./socialMedia.styles.scss";

const SocialMedia = () => {
  return (
    <div>
      <ul>
        <li>
          <li>
            <a href={resume} className='resume-link'>Resume</a>
          </li>
          <a href="mailto:natasobl@hotmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i> Email
          </a>
        </li>
        <li>
          <a href="https://github.com/NataliaDoudkina">
            <i className="fa fa-github" aria-hidden="true"></i> Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/natalia-doudkina-5157678a/">
            <i className="fa fa-linkedin"></i> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
