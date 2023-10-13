import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="col-xl mt-4 me-4">
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <div className="w-25">
                        <input type="text" className="form-control" placeholder="Search for Assignment" />
                    </div>
                    <div className="align-self-end wd-button-group">
                        <button type="button" className="btn btn-light ms-1">
                            <i className="fa fa-plus"></i> Group</button>
                        <button type="button" className="btn btn-danger ms-1">
                            <i className="fa fa-plus"></i> Assignment</button>
                        <button type="button" className="btn btn-light ms-1"><i className="fa fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>
                <hr />
                <div>
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-secondary">
                            <b>ASSIGNMENTS</b>
                            <div className="float-end hstack gap-3">
                                <span className="wd-rounded-borders">40% of Total</span>
                                <i className="fa fa-plus"></i>
                                <i className="fa fa-ellipsis-v"></i>
                            </div>
                        </li>
                        {courseAssignments.map((assignment) => (
                            <li className="list-group-item wd-assignment-item">
                                <div className="d-flex align-items-center">
                                    <div className="p-2"><i className="fa fa-pencil-square-o fa-2x" style={{color:'green'}}></i></div>
                                    <div className="ps-2 pt-3">
                                        <div className="d-flex flex-column">
                                            <Link
                                                key={assignment._id}
                                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                                className="wd-assignment-title"
                                                >
                                                <h6>{assignment.title}</h6>
                                            </Link>
                                            <p><span style={{color: '#a71523'}}>Multiple Modules</span> | <b>Due</b> Sep 18, 2023 at 11:59pm | 100 pts </p>
                                        </div>
                                    </div>
                                    <div className="ms-auto p-2">
                                        <div className="hstack gap-3">
                                            <i className="fa fa-check-circle" style={{color:'green'}}></i>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Assignments;