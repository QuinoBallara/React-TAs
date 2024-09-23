import { useState } from "react"

interface InputProps {
    onInputChange: (value: string) => void;
}

const IngresarValor = ({ onInputChange }: InputProps) => {

    const [value, setValue] = useState("");

    const addTask = () => {
        if (value != "") {
            onInputChange(value)
            setValue("")
        }

    }

    return (
        <>
            <input placeholder="Add Task" value={value} type="text" onChange={(e) => { setValue(e.target.value) }} />
            <button onClick={addTask}>Add</button>
        </>
    )
}

export default IngresarValor;