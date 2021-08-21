import React,{useState} from 'react'
import './css/header.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import Sidebar from './Sidebar';
function Header() {
    const [openMenu,setOpenedmenu]=useState(false);

    const showMenu=()=>{
        setOpenedmenu((pre)=>{
            if(pre===false){
                return true
            }else if(pre===false){
                return true
            }else {
                return false
            }


        })
    }
    return (
        <>
        <div className="header flex justify-between h-12 bg-purple-700">
        {/* Left side DIv */}
            <div className="left__side h-12 ml-2.5 flex items-center h-">
                <IconButton onClick={showMenu}>
                <ReorderIcon className="cursor-pointer text-white"/>

                </IconButton>
                <h3 className="text-white font-bold text-lg ml-2.5">Alle il Punto</h3>
            </div>

           {/* Right Side Div */}
           <div className="right__side h-12">
            <IconButton>
             <NotificationsIcon className="text-white"/>
            </IconButton>

            <IconButton>
                <SearchIcon className="text-white"/>
            </IconButton>
           </div>
        </div>
        <div className={`menu flex w-80  overflow-y-scroll max-h-60 max-w-md  ${(openMenu===true)?"sidebar__open":"sidebar__close"}`}>
           {(openMenu===true)?<Sidebar/>:""} 
        </div>
        </>
    )
}

export default Header
