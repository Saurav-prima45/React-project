import React from 'react'
import { deviceStatusData } from '../constants'
import { ProgressBar } from 'react-bootstrap'

const DeviceStatus = () => {
    const { deviceStatus, data } = deviceStatusData
    return (
        <div className="p-3 border" style={{ width: '330px', height: '250px' }}>
            <h3>{deviceStatus}</h3>
            <div>
                {data.map((item, id) => (
                    <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p>{item.label}</p>
                        <p>{item.numericalValue}</p>
                    </div>
                ))}
                <ProgressBar now={60} variant="success" style={{ height: '10px' }} />
            </div>
        </div>
    )
}

export default DeviceStatus