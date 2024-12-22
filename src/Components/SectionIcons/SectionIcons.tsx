import React from "react";
import "../SectionIcons/SectionIcons.css"
import { languageIcons } from "../Data/Data";

export const SectionIcons = () => {
    
    return (
        <div>
            {languageIcons.map(({id,icon:Icon, title, text, color}) => (
                <div key={`icon-${id}`}>
                    <div className="modal fade" id={`exampleModal${id}`} aria-labelledby={`exampleModalLabel${id}` }aria-hidden="true">
                        <div  className="modal-dialog">

                            <div  className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id={`exampleModalLabel${id}`} color={color}>{title}</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body">
                                    <div className="modalBody-father">
                                        <Icon className="modalBody-icons" color={color}></Icon>
                                    </div>

                                    <div className="father-p">
                                        <p className="modalBody-p">{text}</p>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
      </div>
        
    )
}


/*<div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">REACT</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="modalBody-father">
                            <RiReactjsLine className="modalBody-icons" />
                        </div>

                        <div>
                            <p className="modalBody-p">una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario de manera eficiente y declarativa. Permite crear componentes reutilizables que manejan su propio estado, lo que facilita el desarrollo de aplicaciones web dinámicas y rápidas.</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>*/