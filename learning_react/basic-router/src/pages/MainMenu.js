import React from "react";
import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'

export const MainMenu = () =>
    <nav>
        <NavLink to="/">
            <HomeIcon/>
        </NavLink>
        <NavLink to="/about">[About]</NavLink>
        <NavLink to="/contact">[Contact]</NavLink>
    </nav>
