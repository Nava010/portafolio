import React, { useState } from "react";
import "../Navigator/Nav.css";
import { GiAngelOutfit } from "react-icons/gi";
import { tabs } from "../Data/Data";


export const Nav = () => {
        const [activeTab, setActiveTab] = useState(null);

        const handleTab = (tabId ) => {
            setActiveTab(tabId)
        }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <GiAngelOutfit  className="w-75 h-75"/> NAVA
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 indexCustom nav nav-underline">
                            {tabs.map((tab)=>(
                                <li key={tab.id} className="nav-item" onClick={() => handleTab(tab.id)}>
                                    <a  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`} href={tab.hrefId}>{tab.label}</a>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}