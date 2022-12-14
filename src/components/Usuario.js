import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";
import ElBoton from "./Boton";

//se recomienda que siempre se llame initialAlgo
const initialUsuario={
   
    nombre:"",
    apellido:"",
    username:"",
    correo:"",
    clave:"",
    ciudad:"",
    region:""
}

const UsuarioRegistro = ({userAdd, usuarioEditado, setUsuarioEditado, userEdit}) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const {nro, nombre, apellido, username, correo, clave, ciudad, region} = usuario;

    //el hook useEffect está atento a si la variable que tiene dentro de sus corchetes cambia 
    //el deberá hacer todo lo que tiene en su función dentro
    //CONSIDERACIÓN, el useEffect siempre corre al menos una vez cuando carga la página por primera vez
    useEffect(()=>{
        //se hace la condición para que si está vacío mande el editado y sino el initial
        if (usuarioEditado!==null){
            setUsuario(usuarioEditado)
        }else{
            setUsuario(
                {
                    
                    nombre:"",
                    apellido:"",
                    username:"",
                    correo:"",
                    clave:"",
                    ciudad:"",
                    region:""
                }
            )
        }

    },[usuarioEditado]);
    //la e permite que ingrese los datos que se digitan en pantalla
    //la función handleImputChange se activa cuando editamos un dato en la pantalla
    const handleInputChange = (e)=>{
        const changedFormValue = {
            ...usuario,
            // el dato de name lo sustituye por value
            [e.target.name]:e.target.value
        }
        //se setea para que queden los datos actualizados
        setUsuario(changedFormValue);

    }
    //el navigate con el handleOnClick hace que un botón nos lleve a otra página
    //en el botón se debe poner el handleOnClick para que funcione
    const navigate= useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]))
    return (
            <form class="row g-3 needs-validation" novalidate>
                <legend class="text-center header">Registro de usuario</legend>
        
                {/*acá también se hace dinámico para que cambie el título si de está editando o agregando un usuario */}
                {usuarioEditado!==null ? <h1>Editar Usuario</h1>:<h1>Ingrese Usuario</h1>}

        <div class="col-md-4">
        <label for="name">Nombre</label>
        <input type="text" name="nombre" id="name"
         placeholder="Ingresa tu nombre"
         
         value={nombre}
         onChange={handleInputChange}
         />
            {/** se tienen que poner los values así para que tome los datos del imput y 
             * el onChange para que funcione, tienen que estar tal cual que en el innitial */}
        </div>
        <div class="col-md-4">
        <label for="name">Apellido</label>
        <input type="text" name="apellido" id="lastname" 
        placeholder="Ingresa tu apellido"
        value={apellido}
        onChange={handleInputChange}
        />
        </div>
        <div class="col-md-4">
        <label for="name">Username</label>
        <input type="text" name="username" id="username" 
        placeholder="Ingresa tu username"
        value={username}
        onChange={handleInputChange}
        />
        </div>
        <div class="col-md-3">
        <label for="name">Correo</label>
        <input type="text" name="correo" id="email" 
        placeholder="example@email.com"
        value={correo}
        onChange={handleInputChange}
        />
        </div>
        <div class="col-md-3">
        <label for="name">Clave</label>
        <input type="text" name="clave" id="password"
         placeholder="Clave secreta"
         value={clave}
         onChange={handleInputChange}
         />
        </div>
        <div class="col-md-3">
        <label for="name">Ciudad</label>
        <input type="text" name="ciudad" id="city"
         placeholder="Ciudad"
         value={ciudad}
         onChange={handleInputChange}
         />
        </div>
        
        <div class="col-md-3">
        <label for="name">Region</label>
        <input type="text" name="region" 
        id="region" placeholder="Región"
        value={region}
        onChange={handleInputChange}
        />
        </div>

        <div class="col-12">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
                You must agree before submitting.
            </div>
            </div>
        </div>
        <div class="col-12">
        {/* hace que el nombre del botón cambie si se va editar o agregar usuario */}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >{/** Se tiene que poner el onClick para que funcione la función userAdd 
           * y agregue el usuario */}
            Ingresar usuario
          </button>
        )}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            {/** se pone el onClick para que funcione el editar usuario 
             * y acá también se hace dinámico, para que aparezca 
             * el cancelar cuando se está en editar y sino nada */}
            Cancelar
          </button>
        ) : (
          <></>
        )}

            
                
        </div>
        <div class="col-12">
            <ElBoton infoButton={"Ir a autos"} handleOnClick={handleOnClick}/>
          {/** se tiene que poner el handleOnClick para que funcione el botón 
           * y me redirija a donde se le indicó */}      
        </div>
        </form>
    );
};
export default UsuarioRegistro;