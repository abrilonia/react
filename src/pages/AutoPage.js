import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ElBoton, AutoRegistro, TablaAuto } from "../components";

const auto=[{
    modelo: "bonito",
    marca:"nissan",
    año:"1990",
    color:"verde"
}
]


const AutoPage =()=>{
    const navigate= useNavigate();
    const handleOnClick = useCallback(()=>navigate("/", {}, [navigate]));
    const [car, setCar] = useState(auto);
    const autoDelete=(colorAuto)=>{
        const changeCar = car.filter(auto=> auto.color!==colorAuto);
        setCar(changeCar)
    };


    return (
        <div>
            <AutoRegistro/>
            <TablaAuto autos={car} deleteAuto={autoDelete}/> <hr/>
            <ElBoton infoButton={"Volver a la página principal"} handleOnClick={handleOnClick}/>
        </div>
    )
}
export default AutoPage;