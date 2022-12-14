import React from "react";

const TablaAuto = ({autos, deleteAuto}) =>{
    return (
        <div>
            <legend class="text-center header">Datos de autos registrados</legend>
        <table class="table">
            <thead >
                <tr> 
                <th scope="col">Nro</th>
                <th scope="col">Modelo</th>
                <th scope="col">Marca</th>
                <th scope="col">Año</th>
                <th scope="col">Color</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
            {autos.map(auto=>(
                <tr>
                <td>{auto.nro}</td>
                <td>{auto.modelo}</td>
                <td>{auto.marca}</td>
                <td>{auto.año}</td>
                <td>{auto.color}</td>
                <td
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-success">
              Editar
            </button>
            <button type="button" class="btn btn-warning">
              Mover
            </button>
            <button type="button" class="btn btn-danger"
            onClick={() => {
              deleteAuto(auto.color);
            }}>
              Eliminar
            </button>
            
          </td>
          </tr>

            ))};
            </tbody>
            </table>
            </div>
    )
}
export default TablaAuto;