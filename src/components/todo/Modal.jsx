import React, { useState } from 'react'
import './Modal.css'

export function Modal({ isOpen, onClose, onUpdate, currentTitle, id }) {
    const [newTitle, setNewTitle] = useState(currentTitle)

    const handleUpdate = () => {
        if (newTitle.trim()) {
            onUpdate(id, newTitle)
            setNewTitle('')
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Update Todo</h2>
                <input
                    type="text"
                    placeholder="Новый заголовок"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button onClick={handleUpdate}>Обновить</button>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    )
}
