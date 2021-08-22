import { Checkbox} from '@material-ui/core'
import React,{useState} from 'react'
import {changePermessogruppi,changePermssoSedi,changePermessoSondaggio,changePermessoReport} from '../features/counterSlice';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function SinglePermesso({title}) {


    

        /* Dispatch */
        const dispatch=useDispatch();

    /*     const [checked,setChecked]=useState(false) */
    const [getDataChecked,setDataChecked]=useState(false);
    const [permessiSend,setSendPermessi]=useState({})
  

    

    

    const changeChecked=(title)=>{
        setDataChecked((pre)=>{
            if(pre===false){
            
                return true
            }else if(pre===true){

                return false
            }
                
            
            
        })
        
        if(title=="Creare Gruppi"){
            if(getDataChecked===false){
                dispatch(changePermessogruppi({
                    title:title,
                    checked:true
                }))
             
            }else if(getDataChecked===true){
                dispatch(changePermessogruppi({
                    title:title,
                    checked:false
                }))
           
               
            }else{
                dispatch(changePermessogruppi({
                    title:title,
                    checked:false
                }))
              
            }
        }else if(title=="Creare Sedi"){
            if(getDataChecked===true){
                dispatch(changePermssoSedi({
                    title:title,
                    checked:false
                }))
             
            }else if(getDataChecked===false){
                dispatch(changePermssoSedi({
                    title:title,
                    checked:true
                }))
             
            }else{
                dispatch(changePermssoSedi({
                    title:title,
                    checked:false
                }))
              
            }
        }
        else if(title=="Creare Sondaggio"){
            if(getDataChecked===true){
                dispatch(changePermessoSondaggio({
                    title:title,
                    checked:false
                }))
               
            }else if(getDataChecked===false){
                dispatch(changePermessoSondaggio({
                    title:title,
                    checked:true
                }))
               
            }else{
                dispatch(changePermessoSondaggio({
                    title:title,
                    checked:false
                }))
              
            }
        }else if(title=="Analizza Report"){
            if(getDataChecked==true){
                dispatch(changePermessoReport({
                    title:title,
                        checked:false
                }))
               
            }else if(getDataChecked==false){
                dispatch(changePermessoReport({
                    title:title,
                     checked:true
                }))
              
            
            }else{
                dispatch(changePermessoReport({
                    title:title,
                        checked:false
                }))
              
            }  
        }
        

    }
     
    
    return (
        <div  className="ml-2.5 flex items-center justify-between w-60">
           
        <h3 className="text-xl" >{title}</h3>
        <Checkbox  checked={getDataChecked} onChange={()=>changeChecked(title)}/>
     
        </div>
    )
}

export default SinglePermesso
