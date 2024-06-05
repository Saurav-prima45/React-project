import React from 'react'
import { sessionsByChanel } from '../constants'

const Sessions = () => {
    const { deviceStatus, data } = sessionsByChanel 
    return (
        <div className="p-3 border" style={{ width: '350px', height: '450px' }}>
            <h4>{deviceStatus}</h4>
            {data.map((item, id) => (
                <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ color: item.label === "Empolyee Name" ? 'black' : 'blue', fontWeight: item.label === "Empolyee Name" ? '600' : '400' }}>{item.label}</p>
                    <p style={{ fontWeight: item.label === "Empolyee Name" ? '600' : '400' }}>{item.value}</p>
                </div>
            ))}
        </div>
    )
}

export default Sessions