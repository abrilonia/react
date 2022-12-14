import React from "react";

const TablaUsuario = ({usuarios, deleteUser, setUsuarioEditado}) => {
    return (
        <div>
            <legend class="text-center header">Datos de usuarios registrados</legend>
        <table class="table">
            <thead>
                <tr> 
                <th scope="col">Nro</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Username</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Region</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
              {/**el map para que recorra el usuario y agregue cada uno de los datos en la tabla */}
              {usuarios.map(usuario=>(
                <tr>
                  <td>
                    {/**se escribe así para que la función addUser tome los datos */}
                    {usuario.nro}
                  </td>
                  <td>
                    {usuario.nombre}
                  </td>
                  <td>
                    {usuario.apellido}
                  </td>
                  <td>
                    {usuario.username}
                  </td>
                  <td>
                    {usuario.ciudad}
                  </td>
                  <td>
                    {usuario.region}
                  </td>
                  <td>
                  <button
                  type="button"
                  class="btn btn-danger"
                  
                  onClick={() => {
                    deleteUser(usuario.username);
                  }}
                > {/** el onClick para que funcione la función que se coloque en el cuerpo*/}
                 Eliminar
                </button>
                  </td>
                  <td>
                  <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    setUsuarioEditado(usuario)
                  }}
                >
                 Editar
                </button>
                  </td>
                </tr>
              ))}           
             

          
            </tbody>
            </table>
            </div>
    )
}
export default TablaUsuario;