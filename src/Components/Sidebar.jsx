import React from 'react'
import SideBarOptions from './SideBarOptions'
import { NavLink } from 'react-router-dom'
function Sidebar() {
    
    return (
        <div className="sidebar w-full">
            <NavLink exact to="/Commesse"><SideBarOptions text="Commesse"/></NavLink>
            <NavLink exact to="/Sedi"><SideBarOptions text="Sedi"/></NavLink>
            <NavLink exact to="/Gruppi"><SideBarOptions text="Gruppi"/></NavLink>
            <NavLink exact to="/Attivita"><SideBarOptions text="Attivita"/></NavLink>
            <NavLink exact to="/Sondaggio"><SideBarOptions text="Questionari"/></NavLink>
            <SideBarOptions text="Settings"/>
            <SideBarOptions text="Report"/>
           <NavLink exact to="/Home"> <SideBarOptions text="Home"/></NavLink>
           
           
        </div>
    )
}

export default Sidebar
