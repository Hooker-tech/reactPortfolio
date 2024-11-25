import React from "react";

import React, { useState } from 'react'
import './nav.css'

const NavBar = ({}) => {
    return (
        <>

            <div id='linkContainer'>
                <div className='navBar'>
                    <a href='#'>Home</a>
                    <a href="#" >About Me</a>
                    <a href="#" >Projects</a>
                    <a href="#" >Skills</a>
                    <a href="#" >Education</a>
                    <a href="#" >Contact Me</a>
                </div>
            </div>

        </>
    )
}

export default NavBar
