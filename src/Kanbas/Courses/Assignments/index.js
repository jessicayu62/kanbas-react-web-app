import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
    deleteAssignment,
    selectAssignment
} from "./assignmentsReducer"

function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();

    const getDate = (dateString) => {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date(dateString);
        return (days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate());
    }

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
                        <Link
                            to={`/Kanbas/Courses/${courseId}/Assignments/new`}
                            className="wd-assignment-title"
                            onClick={() => dispatch(selectAssignment({
                                course: courseId,
                            }))}
                        >
                            <button type="button" className="btn btn-danger ms-1">
                                <i className="fa fa-plus"></i> Assignment</button>
                        </Link>
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
                        {assignments
                            .filter((assignment) => assignment.course === courseId).map((assignment) => (
                                <li className="list-group-item wd-assignment-item">
                                    <div className="d-flex align-items-center">
                                        <div className="p-2"><i className="fa fa-pencil-square-o fa-2x" style={{ color: 'green' }}></i></div>
                                        <div className="ps-2 pt-3">
                                            <div className="d-flex flex-column">
                                                <Link
                                                    key={assignment._id}
                                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                                    className="wd-assignment-title"
                                                    onClick={() => dispatch(selectAssignment(assignment))}
                                                >
                                                    <h6>{assignment.title}</h6>
                                                </Link>
                                                <p><span style={{ color: '#a71523' }}>Multiple Modules</span> | <b>Due</b> {assignment.dueDate !== undefined ? getDate(assignment.dueDate) : "No Date Set"} | {assignment.points ?? "__"} pts</p>
                                            </div>
                                        </div>
                                        <div className="ms-auto p-2">
                                            <div className="hstack gap-3">
                                                <i className="fa fa-check-circle" style={{ color: 'green' }}></i>
                                                <button type="button" class="btn btn-danger btn-sm"
                                                    onClick={() => {
                                                        if (window.confirm(`Are you sure you want to delete assignment ${assignment.title}?`)) {
                                                            dispatch(deleteAssignment(assignment._id));
                                                        }
                                                    }}>
                                                    Delete
                                                </button>
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