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
    <div className="Gruppi__page border-2 border-red-500">

      {/* Upper div */}
      <div className="upper__div flex flex-col items-center justify-center">
       <label className="text-2xl">Inserisci Nome Gruppo</label>
      

       <select id="select" className="border-2  w-60 mt-2.5 border-black-700" name="groups" id="">
        <option value="">Scegli il Gruppo</option>
          
      {dataSelect.map((data,id)=>{
           return <option className="text-2xl" key={id}  value={data.id_gruppo} >{data.nome}</option>
           
          
        })}
        </select>
      </div>

      {/* Bottom Div */}
      <div className="bottom__div">

      </div>
    </div>
    </>
  );
}

export default Gruppi;
