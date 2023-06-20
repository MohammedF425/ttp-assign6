import React, { useEffect, useRef, useState } from "react";
import "./Styling.css";

const Assign6 = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const gridRef = useRef(null);
    let isDragging = false;
    let table = document.getElementById("grid");


    const addRows = () => {
        const newRow = document.createElement('tr');
        const cols = gridRef.current.rows[0].cells.length;
        for (let i = 0; i < cols; i++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
        gridRef.current.appendChild(newRow);
    };

    const addCols = () => {
        const rows = gridRef.current.rows;
        for (let i = 0; i < rows.length; i++) {
            const newCell = document.createElement('td');
            rows[i].appendChild(newCell);
        }
    };
    const handleMouseUp = (event) => {
        isDragging= false
        // alert(isDragging)
    }

    const handleMouseDown = (event) => {
        event.target.style.backgroundColor = selectedColor;
        isDragging=true
        event.preventDefault();
    };

    const handleMouseOver = (event) => {
        console.log(isDragging)
        if (isDragging && event.target.tagName === "TD") {
            event.target.style.backgroundColor = selectedColor;
        }
        table.style.backgroundColor = '';

    }


    useEffect(() => {
        table = document.getElementById("grid");
        gridRef.current = table;
        const tds = document.querySelectorAll("td");
        tds.forEach((td) => {
            td.addEventListener('mouseup', handleMouseUp);
            td.addEventListener('mousedown', handleMouseDown);
            td.addEventListener('mouseover', handleMouseOver);
        });



        return () => {
            // Cleanup function to remove event listeners
            tds.forEach((td) => {
                td.removeEventListener('mouseup', handleMouseUp);
                td.removeEventListener('click', handleMouseDown);
                td.removeEventListener('mouseover', handleMouseOver);
            });

        };
    });


    return (
        <div>

            <h1
                style={{
                    fontSize: '60px',
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                }}
            >
                Cells
            </h1>

            <button type="button" onClick={addRows} className="add-button">Add Rows</button>
            <button type="button" onClick={addCols} className="add-button" >Add Columms</button>
            {/* <!-- <button type="button" onClick= {remRows}>Remove Rows</button>
            <button type="button" onClick= {remCols}>Remove Columns</button> 
            --> */}
            <select id="color" className="menu" onChange={(e) => setSelectedColor(e.target.value)}>
                <option value="">Default</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>

            <p></p>
            <table id='grid'>
                <tr>
                    <td className="tableCell">Table</td>
                </tr>
            </table>
        </div>
    )

};
export default Assign6;