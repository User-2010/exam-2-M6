import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getApiOrders } from '../api/api'

import { useSelectedStore } from '../store/useSelectedStore'

export const AllOrdes = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['orders'],
        queryFn: getApiOrders
    })
    
    const selectedTasks = useSelectedStore((state) => state.selectedTasks)
    const addTask = useSelectedStore((state) => state.addTask)

    if (isLoading) {
        return <div>Загрузка...</div>
    }
    
    if (isError) {
        return <div>Ошибка при загрузке данных: {error.message}</div>
    }

    return (
        <div className="box">
            <h2>Все заказы ({data.length})</h2>
            <ul className="order-list">
                {data.map((order) => {
                    const isSelected = selectedTasks.some((item) => item.id === order.id)

                    return (
                        <li key={order.id} className="order-item">
                            <span>{order.title}</span>
                            <button className='button_bl'
                                onClick={() => addTask(order)}
                                disabled={isSelected}
                            >
                                {isSelected ? 'Уже выбрано' : 'Взять в работу'}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}