/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Typed from "react-typed"


export const Header = () => {
    return (
        <div className="header-wraper">
           
            <div id="main-info">
                <h1>Full Stack Developer</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Software development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contato</a>

            </div>
            
        </div>
    )
}
export default Header

