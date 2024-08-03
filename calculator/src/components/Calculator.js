
import {React,useState} from "react";
import style from "./Calculator.css";
const Calculator=()=>{
    const [display,setDisplay]=useState("")
    const appendToDisplay=(value)=>{
        setDisplay((prev)=>prev+value);
    }
    const clearDisplay=()=>{
        setDisplay("");
    }
    const calculate = () => {
        try {
            if (display === "" || display === "Error") {
                throw new Error("Incomplete expression");
            }
            if (display === "0/0") {
                setDisplay("NaN");
                return;
            }
            const result = eval(display);
            if (!isFinite(result)) {
                if (isNaN(result)) {
                    setDisplay("NaN");
                } else {
                    setDisplay("Infinity");
                }
            } else {
                setDisplay(result.toString());
            }
        } catch (error) {
            setDisplay("Error");
        }
    };
    return(
        <>
        <div className="calculator">
<input type="text" id={style.display}value={display} readOnly />
<div className="buttons">
    <button onClick={()=>appendToDisplay("7")}>7</button>
    <button onClick={()=>appendToDisplay("8")}>8</button>
    <button onClick={()=>appendToDisplay("9")}>9</button>
    <button onClick={()=>appendToDisplay("+")}>+</button>
    <button onClick={()=>appendToDisplay("4")}>4</button>
    <button onClick={()=>appendToDisplay("5")}>5</button>
    <button onClick={()=>appendToDisplay("6")}>6</button>
    <button onClick={()=>appendToDisplay("-")}>-</button>
    <button onClick={()=>appendToDisplay("1")}>1</button>
    <button onClick={()=>appendToDisplay("2")}>2</button>
    <button onClick={()=>appendToDisplay("3")}>3</button>
    <button onClick={()=>appendToDisplay("*")}>*</button>
    <button onClick={clearDisplay}>C</button>
    <button onClick={()=>appendToDisplay("0")}>0</button>
    <button onClick={calculate}>=</button>
    <button onClick={()=>appendToDisplay("/")}>/</button>
</div>
</div>
</>
    )
}
export default Calculator;