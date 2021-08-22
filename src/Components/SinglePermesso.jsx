import { Checkbox} from '@material-ui/core'
import React,{useState} from 'react'

function SinglePermesso({title,checkedData}) {
    const [checked,setChecked]=useState(false)
    const [getDataChecked,setDataChecked]=useState(null);
     setDataChecked(()=>{
        if(checkedData===1){
            return true;
        }else if(checkedData===0){
            return false;
        }else{
            return false;
        }
    }) 
    const changeChecked=()=>{
        setChecked((pre)=>{
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
        <Checkbox checked={checked} onChange={changeChecked}/>
      {/*  <Checkbox checked={(data.boolean==1)?true:false}/> */}
        </div>
    )
}

export default SinglePermesso
