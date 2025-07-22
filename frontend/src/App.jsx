import React  from "react";
import Converter  from "./pages/Converter";
import TopBar from "./pages/TopBar";
import "./App.css";

function App(){
    return(
        <div>
            <TopBar/>
            <Converter/>
        </div>
    )
}

export default App;