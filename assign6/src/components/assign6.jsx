import React, {useEffect, useRef, useState} from "react";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

const Assign6 = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const gridRef = useRef(null);

    const addRows = () => {
        const newRow = document.createElement('tr');
        const cols = gridRef.current.rows[0].cells.length;
        for (let i = 0; i < cols; i++) {
        const newCell = document.createElement('td');
        // newCell.addEventListener('mousedown', changeCellColor);
        // newCell.addEventListener('mouseup', releasedMouse);
        newRow.appendChild(newCell);
        }
        gridRef.current.appendChild(newRow);
    };

    const addCols = () => {
        const rows = gridRef.current.rows;
        for (let i = 0; i < rows.length; i++) {
        const newCell = document.createElement('td');
        // newCell.addEventListener('mousedown', changeCellColor);
        // newCell.addEventListener('mouseup', releasedMouse);
        rows[i].appendChild(newCell);
        }
    };

    const changeColor = (event) => {
        setSelectedColor(event.target.value);
    };

    useEffect(() => {
        gridRef.current = document.getElementById("grid");
    }, []);

    
    return(
        <div>

            <h1>Cells</h1>

            <button type="button" onClick = {addRows}>Add Rows</button>
            <button type="button" onClick = {addCols}>Add Columms</button>
            {/* <!-- <button type="button" onClick= {remRows}>Remove Rows</button>
            <button type="button" onClick= {remCols}>Remove Columns</button> 
            --> */}
            <select id="color" onChange = {changeColor}>
            <option value ="">Default</option>
            <option value ="red">Red</option>
            <option value ="blue">Blue</option>
            <option value ="green">Green</option>
            <option value ="yellow">Yellow</option>
            </select> 
            {/* <!--
                <button id="colorUncolorCells" onclick="filluncolor">Color Uncolored Cells</button>
                <button id="colorAllCells" onclick="fillall">Color All Cells</button>
                <button id="clearAllCells" onclick="clearall">Clear All Cells</button>
            --> */}
            
            <table id='grid'>
            <tr>
            <td className="tableCell">Table</td>
            </tr>
            </table>
        </div>
        )
        
    };
export default Assign6;


 //const gridRef = useRef('null')
    // const[selectedColor, setSelectedColor] = useState("")
    // const[table,setTable] = useState(document.querySelector('table'))
    // table.style.backgroundColor = '';

//   const [isDragging, setIsDragging] = useState(false);
    // const gridRef = useRef(null);
    //gpt->
        // const [selectedColor, setSelectedColor] = useState("");
        // const [table, setTable] = useState(null);

        
    //here


// Function to add columns to the grid
//   const addCols = () => {
//     const rows = gridRef.current.rows;
//     for (let i = 0; i < rows.length; i++) {
//       const newCell = (
//         <td
//         //    onMouseDown={changeCellColor}
//         //    onMouseUp={releasedMouse}
//         ></td>
//       );
//       rows[i].appendChild(newCell);
//     }
//   };
  
//   const addRows = () => {
//     const grid = gridRef.current;
//   if (grid.rows.length > 1) {
//     grid.removeChild(grid.lastElementChild);
//   }
//   };
//   const remRows = () => {
//     // ...
//   };

//   const remCols = () => {
//     // ...
//   };
