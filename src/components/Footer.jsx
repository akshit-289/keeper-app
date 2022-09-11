import React from "react";

const dat = new Date();
const year = dat.getFullYear();

function Footer() {
    return (
       <footer> 
        <p>copyright@{year}</p>
       </footer> 
    )
}

export default Footer;