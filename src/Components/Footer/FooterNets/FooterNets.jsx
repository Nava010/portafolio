import React from "react";
import "../FooterNets/FooterNets.css";
import { icons } from "../../Data/Data";

export const FooterNets = () => {
    return(
        <div className="footerNets">
           <ul className="nets-ul">
                {icons.map(({id, icon: Icon, color, url})=> (
                    
                        <li className="nets-li" key={id}>
                            <a href={url} target="_blank">
                                <Icon className="netsIcon" color={color}/>
                            </a>
                        </li>

                ))}
            </ul> 
        </div>
    )
    
}