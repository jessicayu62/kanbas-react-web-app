import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div className="col-xl mt-2 me-4">
            <div className="d-flex flex-column">
                <div className="align-self-end pt-4">
                    <button type="button" className="btn btn-light ms-1">Collapse All</button>
                    <button type="button" className="btn btn-light ms-1">View Progress</button>
                    <button className="btn btn-light dropdown-toggle ms-1" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-check-circle" style={{ color: 'green' }}></i> Publish All
                    </button>
                    <button type="button" className="btn btn-danger ms-1">
                        <i className="fa fa-plus"></i> Module</button>
                    <button type="button" className="btn btn-light ms-1"><i className="fa fa-ellipsis-v"></i>
                    </button>
                </div>
                <hr />
                <ul className="list-group">
                    {
                        modules
                            .filter((module) => module.course === courseId)
                            .map((module, index) => (
                                <div className="mb-5">
                                    <li class="list-group-item list-group-item-secondary">
                                        <div class="d-flex align-items-center">
                                            <b>{module.name}</b>
                                            <div class="ms-auto p-2 hstack gap-3">
                                                <i class="fa fa-check-circle" style={{ color: 'green' }}></i>
                                                <i className="fa fa-plus"></i>
                                                <i class="fa fa-ellipsis-v"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex align-items-center">
                                            {module.description}
                                            <div class="ms-auto p-2 hstack gap-3">
                                                <i class="fa fa-check-circle" style={{ color: 'green' }}></i>
                                                <i class="fa fa-ellipsis-v"></i>
                                            </div>
                                        </div>

                                    </li>
                                </div>
                            ))
                    }
                </ul>
            </div >
        </div >
    );
}
export default ModuleList;