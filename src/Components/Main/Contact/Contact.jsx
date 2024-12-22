import React from "react";
import "../Contact/Contact.css";
import { contactIcons } from "../../Data/Data";


export const Contact = () => {
    return(
        <div id="contact" className="contact">
            <div className="contactTitle">
                <h1>Contacto</h1>
            </div>
            <div className="contactSection-box">
                {contactIcons.map(({id, url,text,icon: Icon,color})=>(
                    <section key={id} className="contactSection">
                        {url ? (<a href={url} target="_blank" rel="noreferrer">
                            <Icon className="contactIcon" color={color}></Icon>
                        </a>) : <Icon className="contactIcon" color={color}></Icon>}
                        <p>{text}</p>
                    </section>
                ))}
            </div> 
        </div>
    )
}