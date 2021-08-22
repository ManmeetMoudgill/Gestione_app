import { Checkbox } from "@material-ui/core";
import React,{useEffect,useState} from "react";
import Header from "./Header";
import SinglePermesso from "./SinglePermesso";
function Gruppi() {
    const [dataSelect,setDataSelect]=useState([])
    const [selectedOption,setSelectedOption]=useState(0);
    const [permessiData,setPermessiData]=useState([]);
    const [checked,setChecked]=useState(false);
    useEffect(()=>{
        
        const url="http://localhost/WorkProject/Gruppi.php";

        fetch(url,{mode: 'cors'}).then((res)=>{
            return res.json();

        }).then((data)=>{
           
            setDataSelect(data)
        
        }).catch((err)=>console.log(err))
    },[])

    const getPermessi=(e)=>{
      setSelectedOption(e.target.value)
      /* console.log(e.target.value) */
      if(e.target.value==="" || e.target.value===0){
          alert("Scegli il gruppo");
      }else{
        const url=`http://localhost/WorkProject/GetPermessi.php?id_gruppo=${e.target.value}`;
        fetch(url).then((res)=>{
          return res.json()

        }).then((data)=>{
          console.log(data[0])
          setPermessiData(data[0])

        }).catch((err)=>console.log(err))
      }

    }
    


    

  return (
      <>
      <Header />
    <div className="Gruppi__page   border-2 flex flex-col items-center justify-center border-red-500">

      {/* Upper div */}
      <div className="upper__div w-64 flex mt-2.5 flex-col items-center justify-center">
       <label className="text-2xl">Inserisci Nome Gruppo</label>
      

       <select id="select" value={selectedOption} onChange={getPermessi} className="border-2  w-64 mt-2.5 border-black-700" name="groups" id="">
        <option value="">Scegli il Gruppo</option>
          
      {dataSelect.map((data,id)=>{
           return <option className="text-2xl" key={id}  value={data.id_gruppo} >{data.nome}</option>
           
          
        })}
        </select>
      </div>

      {/* Bottom Div */}
      <div className="bottom__div w-64 mt-2.5 flex flex-col">
          <div className="gestione__permessi flex justify-between">
             <label className="text-2xl">Gestisci i permessi</label>
                <div className="select__all">
                <p className=" text-xs">Select all</p>
                <Checkbox  />
                </div>
               
          </div>
       {permessiData.map((data,id)=>{
         console.log(data.boolean)
        
       
         return <SinglePermesso key={id} checkedData={data.boolean} title={data.res} />
        
          
    
        
       })} 
      </div>
    </div>
     {/*  {console.log(selectedOption)} */}
    </>
  );
}

export default Gruppi;
