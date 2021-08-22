import { Checkbox} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import selectPermessi from '../features/counterSlice';
import changePermessi from '../features/counterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function SinglePermesso({selectedAll,title,checkedData}) {
/*     const [checked,setChecked]=useState(false) */
    const [getDataChecked,setDataChecked]=useState(false);

    const permessiRedux=useSelector(selectPermessi);
    

    useEffect(()=>{
        if(selectedAll===true){
       
            setDataChecked(()=>{
                return true
            })
         }else{

             setDataChecked(()=>{
                
                 if(checkedData==1){
                     return true;
                 }else if(checkedData==0){
                     return false;
                 }else{
                     return false;
                 }
             }) 
         }

    },[checkedData,selectedAll])
     
    const changeChecked=()=>{
       
        setDataChecked((pre)=>{
            if(pre===false){
                return true
            }else{
                return false
            }

        })

    }
    return (
        <div  className="ml-2.5 flex items-center justify-between w-60">
           
        <h3 className="text-xl" >{title}</h3>
        <Checkbox checked={getDataChecked} onChange={changeChecked}/>
     
        </div>
    )
}

export default SinglePermesso
