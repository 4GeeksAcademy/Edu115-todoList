import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
    const [valorInput, setValorInput] = useState('')
    const [tareas, setTareas] = useState([])

    const handleKeyDown = (e) => {
        if (e.key !== 'Enter') return
        const texto = valorInput.trim()
        if (!texto) return

        setTareas(prev => [...prev, texto])
        setValorInput('')
    }

    const eliminarTarea = (index) =>
        setTareas(prev => prev.filter((_, i) => i !== index))

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h1 className="titulo-todo mb-4">todos</h1>
            <div className="card shadow-sm w-25">
                <div className="card-body">
                    <input
                        type="text"
                        className="form-control border-0 border-bottom rounded-0 mb-3 input-todo"
                        placeholder="Escribe una tarea y presiona Enter"
                        value={valorInput}
                        onChange={(e) => setValorInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <ul className="list-group list-group-flush">
                        {tareas.map((tarea, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center tarea-item">
                                <span className="texto-tarea">{tarea}</span>
                                <button className="btn btn-sm text-danger btn-eliminar" onClick={() => eliminarTarea(index)}>X</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <footer className="card-footer text-secondary">
                    {tareas.length === 0 ? 'No hay tareas pendientes' : `${tareas.length} tarea(s) pendiente(s)`}
                </footer>
            </div>
        </div>
    )
}

export default TodoList
