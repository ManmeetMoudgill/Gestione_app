import { Checkbox} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import selectpermessi from '../features/counterSlice';
import changePermessi from '../features/counterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function SinglePermesso({sendPermessi,selectedAll,title,checkedData}) {
/*     const [checked,setChecked]=useState(false) */
    const [getDataChecked,setDataChecked]=useState(false);
    const [permessiSend,setSendPermessi]=useState({})
   /*  const permessiRedux=useSelector(selectpermessi);
    console.log(permessiRedux) 
    const dispatch=useDispatch(); */


    useEffect(()=>{
        
        if(selectedAll===true){
       
            console.log("Inside the")
            setDataChecked(()=>{
                return true
            })
          
       
          
         }else{

             setDataChecked(()=>{
                
                 if(checkedData==1){
                    
                        return true;
                 }else if(checkedData==0){
                     console.log("Not Selected")
                     return false;
                 }else{

                     return false;
                 }
             }) 
          
         }

    },[checkedData,selectedAll])
     
    const changeChecked=()=>{
     
        
        setDataChecked((pre)=>{
            if(pre===false || checkedData==0){
              
                return true
            }else if(pre===true || checkedData==1){

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
