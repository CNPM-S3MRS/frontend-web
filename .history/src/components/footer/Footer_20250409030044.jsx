import React from "react";
import { NavLink } from "react-router-dom";
import LogoBK from "../../assets/LogoBK.jpg"; // Adjust the path as necessary

const Footer = () => {
    return(
        <footer className="bg-gray-800 text-white">
            
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} MyBK. All rights reserved.</p>
                <p className="text-sm">Developed by BK Team</p>
            </div>
            <img src={LogoBK} alt="Logo" className="w-17 h-16 object-contain mx-auto my-4" />
        </footer>
    );
};

export default Footer;