import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
        <div className="container-footer">
          <p className="text-light">
            Website desenvolvido por :{" "}
            <a className="footer-a"
              href="https://github.com/PatriciaRuffino"
              target="_blank"
              rel="noreferrer">
              Patricia Ruffino
            </a>
          </p>
          <div id="contato">
          <p className="text-light"> Contato: <a href="https://www.linkedin.com/in/patriciaruffino/" target="_blank" rel="noreferrer">Linkedin</a> </p>  
          <p className="text-light">  <a href="sindelformr@gmail.com" target="_blank" rel="noreferrer">Email</a> </p>      
        </div>
        </div>
      </footer>
    );
  };
  export default Footer;
       
              
            
            
    
