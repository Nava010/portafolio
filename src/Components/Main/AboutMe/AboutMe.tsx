import React from "react";
import { languageIcons } from "../../Data/Data";
import "../AboutMe/AboutMe.css"

export const AboutMe = () => {
    return (
        <div id="aboutMe" className="aboutMe-description">
            <div className="aboutMe-box">
                <div className="aboutMe-Icon"> 
                    {languageIcons.slice(0,3).map(({id, icon:Icon, color})=> (
                        
                            <a key={id}  className="text-reset"  type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
                                <Icon className="lenguaguesIcon" color={color}></Icon>
                            </a>
                        
                            
                    ))}
                </div>

                <div className="aboutMe-son">
                    <h1 >Acerca <br></br> De Mi</h1>
                    <div className="aboutMe-div"></div>
                </div>
                <div className="aboutMe-Icon2">
                    {languageIcons.slice(3).map(({id, icon:Icon, color}) => (
                            <a key={id}  className="text-reset"  type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
                                <Icon className="lenguaguesIcon" color={color}></Icon>
                            </a>
                    ))}
                </div>

            </div>

            <div className="aboutMe-p">
                <div className="p-father">
                    <p>
                        Hola👋,
                        Mi nombre es Pablo Navarrete, tengo 24 años, cuento con experiencia en el area de atencion al cliente y actualmente estudio ingenieria de sitemas en la UCV.
                        Lleve la escuela de programacion de desarrollo web en Platzi🚀, cuento con conocimiento en React, javascript e Angular y siempre estoy dispuesto a aprender nuevas cosas, como lo dice el lema de platzi "NUNCA PARES DE APRENDER"
                    </p>
                </div>
                
            </div>
        
    </div>        
    )
    
}