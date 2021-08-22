import { Checkbox} from '@material-ui/core'
import React,{useState,useEffect} from 'react'

function SinglePermesso({title,checkedData}) {
/*     const [checked,setChecked]=useState(false) */
    const [getDataChecked,setDataChecked]=useState(false);

    useEffect(()=>{
        setDataChecked(()=>{
           
            if(checkedData==1){
                return true;
            }else if(checkedData==0){
                return false;
            }else{
                return false;
            }
        }) 
    },[checkedData])
     
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
        <div  className="flex items-center justify-between w-60">
           
        <h3>{title}</h3>
        <Checkbox checked={getDataChecked} onChange={changeChecked}/>
     
        </div>
    )
}

export default SinglePermesso
