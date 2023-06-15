import React, {Component, ReactPropTypes} from 'react';

class assign6 extends Component{
    constructor(props){
        super(props);


    }

    addrows = (e) =>{

    }



    render(){
        return(
        <div>

            <h1>Cells</h1>

            <button type="button" onclick = "addrows()">Add Rows</button>
            <button type="button" onclick = "addcols()">Add Columms</button>
            <button type="button" onclick= "remrows()">Remove Rows</button>
            <button type="button" onclick= "remcols()">Remove Columns</button> 
    
            <select id="color" onchange = "changecolor()">
            <option value ="">Default</option>
            <option value ="red">Red</option>
            <option value ="blue">Blue</option>
            <option value ="green">Green</option>
            <option value ="yellow">Yellow</option>
            </select> 
            <button id="colorUncolorCells" onclick="filluncolor()">Color Uncolored Cells</button>
            <button id="colorAllCells" onclick="fillall()">Color All Cells</button>
            <button id="clearAllCells" onclick="clearall()">Clear All Cells</button>
    
            <table id="grid">
            <tr>
            <td>Table</td>
            </tr>
            </table>
        </div>
        )
        
    };
}

export default assign6;