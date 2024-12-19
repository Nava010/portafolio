import React from "react";
import "../Footer/Footer.css"
import { ContactFooter } from "./ContactFooter/ContactFooter";
import { FooterNets } from "./FooterNets/FooterNets";

export const Foo = () => {
    return (
        <footer className="footer-box">
            <ContactFooter></ContactFooter>
            <FooterNets></FooterNets>
        </footer>
        
    )
}