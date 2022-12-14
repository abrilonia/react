import React, { useCallback } from "react";
import TemasComponente from "../components/Temas";
import { useNavigate } from "react-router-dom";
import { ElBoton } from "../components";


const TemasPage =()=>{
    const navigate= useNavigate();
    const handleOnClick = useCallback(()=>navigate("/", {}, [navigate]))
    return(
        <div>
            <TemasComponente/>
            <ElBoton infoButton={"Volver a la página principal"} handleOnClick={handleOnClick}/>

        </div>

    )
}
export default TemasPage;