import { useState } from "react";

export default function App() {

    const [tasks, settarefas] = useState<any>([])
    const [input, setInput] = useState<any>("")


    function add() {
        if (input.trim() === "") {
            alert("Digite Uma Tarefa")
            return
        }
        settarefas([...tasks, input])
        setInput("")

    }


    return (
        <section>
            <h1>Lista de Tarefas</h1>
            <input type="text" value={input} onChange={(e) => {
                console.log(e.target.value)
                setInput(e.target.value)
            }} />
            <button onClick={add}>Add</button>
            <ul>
                {tasks.map((task: any) => (
                    <li key={task}>
                        {task}
                    </li>
                ))}

            </ul>
        </section>

    )

}