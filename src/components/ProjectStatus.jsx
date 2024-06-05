import React from 'react'
import { projectStatusData } from '../constants'
import TableContent from './TableContent'

const ProjectStatus = () => {
    return (
        <div className="p-3" style={{ width: '800px', position: 'relative'}}>
            <div className="card">
                <div className="card-body" style={{ height: '530px' }}>
                    <div className="d-flex flex-wrap justify-content-between">
                        <h4 className="card-title mb-3">Project status</h4>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                {projectStatusData?.map((item) => (
                                    <TableContent key={item.id} data={item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default ProjectStatus