import React from "react";

const ElBoton =({infoButton, handleOnClick})=>{
    return(
        <div>
        <center>
            <button 
            type="button" 
            class="btn btn-success"
            onClick={()=> {
                handleOnClick();
            }}
            >{infoButton}</button>
        </center>
        </div>
    )
}
export default ElBoton;