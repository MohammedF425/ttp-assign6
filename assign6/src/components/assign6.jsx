import React, {useEffect, useState} from "react";

const Assign6 = () => {
    const []
    return(
        <div>

            <h1>Cells</h1>

            <button type="button" onClick = "addrows">Add Rows</button>
            <button type="button" onClick = "addcols">Add Columms</button>
            <button type="button" onClick= "remrows">Remove Rows</button>
            <button type="button" onClick= "remcols">Remove Columns</button> 
    
            <select id="color" onChange = "changecolor">
            <option value ="">Default</option>
            <option value ="red">Red</option>
            <option value ="blue">Blue</option>
            <option value ="green">Green</option>
            <option value ="yellow">Yellow</option>
            </select> 
            <!--
                <button id="colorUncolorCells" onclick="filluncolor">Color Uncolored Cells</button>
                <button id="colorAllCells" onclick="fillall">Color All Cells</button>
                <button id="clearAllCells" onclick="clearall">Clear All Cells</button>
            -->
            <table id="grid">
            <tr>
            <td>Table</td>
            </tr>
            </table>
        </div>
        )
        
    };
export default Assign6;