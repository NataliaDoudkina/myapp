import React from "react";
import "./skills.styles.scss";
import {FaJsSquare, FaReact, FaNode, FaHtml5, FaBootstrap} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di'; 


const Skills = () => {
  return (
   
  <ul>
  <li className='skill'><FaJsSquare size={30} color="black" /> JavaScript</li>
  <li className='skill'><FaNode size={30} color="black" /> Node.js/Express</li>
  <li className='skill'><DiMongodb size={30} color="green" /> MongoDb</li>
  <li className='skill'><FaReact size={30} color="blue"/> React</li>
  <li className='skill'><FaHtml5 size={30} color="red" /> HTML/CSS</li>
  <li className='skill'><FaBootstrap size={30} color="purple" /> Bootstrap</li>
  </ul>
  
   
  );
};

export default Skills;
