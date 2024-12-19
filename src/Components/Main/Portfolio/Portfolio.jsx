import React from "react";
import "../Portfolio/Portfolio.css";
import Foto2 from "../../../Images/Foto2.png"

export const Portfolio = () => {
    console.log(Portfolio)
    return(
        <section id="portfolio" className="portfolio">
            <div className="text-content">
                    <div className="whiteBox"></div>
                    <div className="yellowBox"></div>
                <h1>PORTA <br/><span className="highlight">FOLIO</span></h1>
            </div>      
            <div className="image-container">
                
                <div className="divFrame">                  
                    <img
                        src={Foto2}
                        alt="Ehab Elsehmawy"
                    />  
                </div>  
            </div>
        </section>
    )
}