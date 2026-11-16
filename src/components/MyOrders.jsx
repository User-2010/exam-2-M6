import React from 'react'
import { useSelectedStore } from '../store/useSelectedStore'

export const MyOrders = () => {
    const selectedTasks = useSelectedStore((state) => state.selectedTasks);
    
    const addTask = useSelectedStore((state) => state.addTask);
    const removeTask = useSelectedStore((state) => state.removeTask);
    const clearAll = useSelectedStore((state) => state.clearAll);

    return (
        <div>
            <div className="box">
                <div className="header-row">
                    <h2>Мои заказы (Выбрано: {selectedTasks.length})</h2>
                    {selectedTasks.length > 0 && (
                        <button onClick={clearAll} className="btn-danger">
                            Очистить всё
                        </button>
                    )}
                </div>

                {selectedTasks.length === 0 ? (
                    <p>Список пуст. Выберите заказы слева.</p>
                ) : (
                    <ul className="order-list">
                        {selectedTasks.map((task) => (
                            <li key={task.id} className="order-item">
                                <span>{task.title}</span>
                                <button
                                    onClick={() => removeTask(task.id)}
                                    className="btn-danger"
                                >
                                    Отказаться
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}