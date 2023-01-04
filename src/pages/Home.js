import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ElBoton, UsuarioRegistro} from "../components";
import TablaUsuario from "../components/TablaUsuario";
import "./Home.css";

import { getAllUsers, addUser, editUser, deleteUser } from "../services/User";

const usuario1=[
    {
    nro: "1",    
    nombre: "Joseph",
    apellido: "Perez",
    username: "jope15",
    correo: "jo.pe@gmail.com",
    clave: "6789",
    ciudad: "Santiago",
    región: "metropolitana"
},
{
    nro: "2",
    nombre: "Joseph",
    apellido: "Joestar",
    username: "jojo15",
    correo: "jo.jo@gmail.com",
    clave: "1234",
    ciudad: "Santiago",
    región: "metropolitana"

}
]



const HomePage = () => {
    const navigate=useNavigate();
    const handleOnClick = useCallback(()=>navigate("/Temas", {}, [navigate]));
    //en este momento state vale lo mismo que usuario1
    //genera una función setteadora que me va a permitir cambiar los datos de usuario 1 sin afectarlo directamente(setState)
    const [state, setState] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado]=useState(null);

   

    useEffect(()=>{

        getUsers();

    },[])
    //tienen que ir los tres puntos para que mantenga los usuarios creados y me agregue el que nuevo
   /*  const userAdd=(usuario)=>{
        const addUsuario=[
            ...state, usuario
        ]
        setState(addUsuario);
    } */
    const userAdd = async(addUsuario)=>{
        //en esta línea se agrega un usuario a la BD
        const usuarioBD=await addUser(addUsuario);
        //aquí haremos que la tabla de actualice
        getUsers();
    }

   /*  const userEdit = (usuarioEditado)=>{
        //aquí se usa el map para que recorra y me actualice el usuario que tiene el parámetro indicado que en este caso es username pero puede ser otro
        const editUser = state.map(usuario =>(usuario.username === usuarioEditado.username ? usuarioEditado: usuario))
        //se setes para que se actualice
        setState(editUser);
    
    } */

    const userEdit = async(editUsuario) =>{
        const usuarioBD = await editUser (editUsuario);
        getUsers();
    }
  

    const getUsers = async()=>{
        const usuarioBD = await getAllUsers();
        setState(usuarioBD);
    }

    /*  const userDelete=(usernameUsuario)=>{
        const changeUser = state.filter(usuario=> usuario.username!==usernameUsuario);
        setState(changeUser)
    }; */

    const userDelete = async(idUsuario)=>{
        const usuarioBD= await deleteUser(idUsuario);
        getUsers();
    }
     
    return(
        <div>
            {/**se tienen que poner las funciones (las props) para que funcionen */}
            <UsuarioRegistro userAdd={userAdd} usuarioEditado={usuarioEditado} 
            setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>

            <TablaUsuario usuarios={state} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>
        
            <ElBoton infoButton={"Temas"} handleOnClick={handleOnClick}/>
            
        </div>

    )
}
export default HomePage;