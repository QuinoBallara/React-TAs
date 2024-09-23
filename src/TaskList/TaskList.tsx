import { useState } from 'react';
import IngresarValor from '../Input/Input';

function TaskList() {
    const [taskList, setTaskList] = useState<string[]>(["task 1", "task 2", "task 3"])

    const addToList = (elem: string) => {
        setTaskList([...taskList, elem]);
        console.log(elem)
    }

    return (
        <div>
            <IngresarValor onInputChange={addToList} />
            <ul>
                {taskList.map(task => (<li key={task}>{task}</li>))}
            </ul>
        </div>
    )
}

export default TaskList