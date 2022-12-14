import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AutoPage, TemasPage } from "./pages";

const App=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<HomePage/>}/> 
                <Route path= "/Auto" element={<AutoPage/>}/>
                <Route path= "/Temas" element={<TemasPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
