import React from 'react'
import SideBarOptions from './SideBarOptions'

function Sidebar() {
    
    return (
        <div className="sidebar w-full">
            <SideBarOptions text="Commesse"/>
            <SideBarOptions text="Sedi"/>
            <SideBarOptions text="Gruppi"/>
            <SideBarOptions text="Attivita"/>
            <SideBarOptions text="Questionari"/>
            <SideBarOptions text="Settings"/>
            <SideBarOptions text="Report"/>
            <SideBarOptions text="Home"/>
           
           
        </div>
    )
}

export default Sidebar
