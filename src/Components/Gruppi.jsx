import { Checkbox } from "@material-ui/core";
import React,{useEffect,useState} from "react";
import Header from "./Header";
function Gruppi() {
    const [dataSelect,setDataSelect]=useState([])
    useEffect(()=>{
        
        const url="http://localhost/WorkProject/Gruppi.php";

        fetch(url,{mode: 'cors'}).then((res)=>{
            return res.json();

        }).then((data)=>{
           
            setDataSelect(data)
        
        }).catch((err)=>console.log(err))
    },[])

  return (
      <>
      <Header />
    <div className="Gruppi__page   border-2 flex flex-col items-center justify-center border-red-500">

      {/* Upper div */}
      <div className="upper__div w-64 flex mt-2.5 flex-col items-center justify-center">
       <label className="text-2xl">Inserisci Nome Gruppo</label>
      

       <select id="select" className="border-2  w-64 mt-2.5 border-black-700" name="groups" id="">
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
      </div>
    </div>
    </>
  );
}

export default Gruppi;
