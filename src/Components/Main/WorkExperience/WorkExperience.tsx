import React from "react";
import "../WorkExperience/WorkExperience.css";
import { works } from "../../Data/Data";

export const WorkExperience = () => {
    return (
        <div>
            <div id="workExperience" className="workExperience">
                <div className="workExperience-title">
                    <h1>Experiencias Laborales y Records Academicos</h1>
                </div>
                <div className="workExperience-father">
                    {works.map((work => (
                        <div key={`work-${work.id}`}>
                            <div className="workExperience-box">
                                <div >
                                    <a href={work.url} target="_blank" rel=" noreferrer">
                                        <img src={work.img} alt={work.alt} />
                                    </a>    
                                </div>
                                <p>{work.text}</p>
                            </div>
                        </div>
                        
                    )))}
                    
                </div>
            </div>
        </div>
        
    )
}