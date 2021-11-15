import React from 'react'
import fotopaty from './img/fotopaty.jpg';


const Resume = () => {
    return (
            <div id="container">
                <img className="fotopaty" src={fotopaty} alt="Foto Patrcia" />
                
                <div className="menber-info">
                    <h3>Patricia Ruffino</h3>
                    <h4>Desenvolvedora Full Stack</h4>
                    <p>Sou natural do Rio de Janeiro, sou bacharel em Filosofia,
                        Tecnóloga em Gestão Financeira e tenho Pós-graduação em Ciências
                        de dados e Big Data.
                        Sou apaixonada por tecnologia e atualmente estou 
                        aprofudando meus conhecimentos no CTD da Digital House!
                    </p>
                </div>
            </div>
        
  
     
       
       
    )
}

export default Resume
