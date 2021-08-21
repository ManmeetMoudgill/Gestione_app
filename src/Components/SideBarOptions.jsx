import React from 'react'
import './css/sidebar.css'
function SideBarOptions({text}) {
    return (
        <div className="SideBar__option bg-white    ml-2.5 mt-2.5 mr-2.5">
             <h2 className="text-base  p-1.5">{text}</h2>
        </div>
    )
}

export default SideBarOptions
