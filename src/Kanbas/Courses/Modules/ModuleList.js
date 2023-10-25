import React from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

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
                    <li className="list-group-item mb-4">
                        <div className="form-group">
                            <input type="email" value={module.name} className="form-control mb-2"
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, name: e.target.value }))
                                }
                            />
                            <textarea className="form-control mb-2"
                                value={module.description}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, description: e.target.value }))
                                }
                                rows="3">
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-danger float-end" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                        <button type="submit" className="btn btn-secondary float-end me-2" onClick={() => dispatch(updateModule(module))}>Update</button>

                    </li>

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
                                                <button type="submit" className="btn btn-secondary btn-sm float-end" onClick={() => dispatch(setModule(module))}>Edit</button>
                                                <button type="submit" className="btn btn-danger btn-sm float-end" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
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
                            ))}
                </ul>
            </div >
        </div >
    );
}
export default ModuleList;