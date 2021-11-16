import React from 'react'
import gmail from './img/gmail.png';
import linkedin from './img/linkedin.png';
import github from './img/github.png';

export const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
       
          <p className="text-light"> copyright Patricia Ruffino</p>
          
          <div id="contato">
           <a href="https://github.com/PatriciaRuffino" target="_blank" rel="noreferrer"><img className="linkedin" src= {github} alt= "github"/></a>
           <a className="email" href="mailto:sindelformr@gmail.com" target="_blank" rel="noreferrer"> <img className="gmail" src= {gmail} alt= "gmail"/></a>  
           <a href="https://www.linkedin.com/in/patriciaruffino/" target="_blank" rel="noreferrer"><img className="linkedin" src= {linkedin} alt= "linkedin"/></a>
        </div>
      </footer>
    );
  };
  export default Footer;
          
          
           
          
            
            
      
    
    
       
              
            
            
    
