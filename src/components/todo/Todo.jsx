import React, { useState } from 'react'
import { Modal } from './Modal'

export function Todo({ todo, deleteTodo, updateTodo }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => setIsModalOpen(false)

    return (
        <div className="todo">
            <input type="checkbox" />
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>удалить</button>
            <button onClick={handleOpenModal}>Поменять</button>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onUpdate={updateTodo}
                currentTitle={todo.title}
                id={todo.id}
            />
        </div>
    )
}
