import React from "react";
import { NavLink } from 'react-router-dom'

export const SubMenu = ({match}) => <div className="about-menu">
    <li>
        <NavLink to="/about">[Company]</NavLink> </li>
    <li>
        <NavLink to="/about/history"> [History] </NavLink> </li>
    <li>
        <NavLink to="/about/services"> [Services] </NavLink> </li>
</div>
