import React from "react";

const TemasComponente =()=>{
    return (

        <div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                <label class="form-check-label" for="inlineCheckbox1">Motos</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label class="form-check-label" for="inlineCheckbox2">Aviones</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                <label class="form-check-label" for="inlineCheckbox3">Cohetes (disabled)</label>
                </div>
        </div>

    )
}
export default TemasComponente;