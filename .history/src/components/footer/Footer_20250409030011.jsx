import React from "react";
impo

const Footer = () => {
    return(
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} MyBK. All rights reserved.</p>
                <p className="text-sm">Developed by BK Team</p>
            </div>
        </footer>
    );
};

export default Footer;