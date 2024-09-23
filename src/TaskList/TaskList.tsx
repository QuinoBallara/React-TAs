import { useState } from 'react';
import IngresarValor from '../Input/Input';

function TaskList() {
    const [taskList, setTaskList] = useState<string[]>(["task 1", "task 2", "task 3"])

    const addToList = (elem: string) => {
        setTaskList([...taskList, elem]);
        console.log(elem)
    }

    const deleteFromList = (indexToRemove: number) => {
        setTaskList(taskList.filter((_, index) => index !== indexToRemove));
        console.log(taskList);
    }

    const editFromList = (index: number) => {
        const updatedList = [...taskList];
        updatedList[index] = "aaa";
        setTaskList(updatedList);
    }

    return (
        <div>
            <IngresarValor onInputChange={addToList} />
            <ul>
                {taskList.map((task, index) => (
                    <li key={task}>
                        {task}
                        <button onClick={() => deleteFromList(index)}>Eliminar</button>
                        <button onClick={() => editFromList(index)}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList