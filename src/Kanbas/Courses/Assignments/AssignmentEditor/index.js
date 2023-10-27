import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { addAssignment, updateAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const [editedAssignment, setEditedAssignment] = useState(assignment);
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        if (editedAssignment._id) {
            dispatch(updateAssignment(editedAssignment));
        } else {
            dispatch(addAssignment(editedAssignment));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div class="d-flex flex-column mt-4 me-5">
            <div class="float-end wd-button-group">
                <i class="fa fa-check-circle" style={{ color: 'green' }}></i>
                <span style={{ color: 'green' }}> Published</span>
                <button type="button" class="btn btn-light ms-2"><i class="fa fa-ellipsis-v"></i>
                </button>
            </div>
            <hr />
            <div className="form-group">
                <label for="text-fields-assignment-name" class="form-label">Assignment Name</label>
                <input defaultValue={assignment.title}
                    placeholder="Assignment Title"
                    className="form-control mb-4" 
                    onChange={(e) => setEditedAssignment({...editedAssignment, title: e.target.value})}
                    />
                <textarea
                    class="form-control"
                    placeholder="Assignment Description"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    onChange={(e) => setEditedAssignment({...editedAssignment, description: e.target.value})}>
                        {editedAssignment.description}
                </textarea>

                <div className="row justify-content-md-center align-items-center mt-4">
                    <div className="col col-lg-2">
                        <div className="float-end">Points</div>
                    </div>
                    <div className="col-6">
                        <input type="number" className="form-control" 
                        id="text-fields-points"
                        defaultValue={editedAssignment.points}
                        onChange={(e) => setEditedAssignment({...editedAssignment, points: e.target.value})}
                         />
                    </div>
                </div>

                <div class="row justify-content-md-center mt-4">
                    <div class="col col-lg-2">
                        <div class="float-end">Assign</div>
                    </div>

                    <div class="col-6 wd-border-div border rounded">
                        <div class="pt-3">
                            <label for="assign-to" class="form-label"><b>Due</b></label>
                            <input type="date" class="form-control" id="assign-to" 
                            defaultValue={editedAssignment.dueDate}
                            onChange={(e) => setEditedAssignment({...editedAssignment, dueDate: e.target.value})}/>
                        </div>
                        <div class="d-flex pb-4 w-auto">
                            <div class="pt-3 flex-fill me-1">
                                <label for="available-from" class="form-label"><b>Available from</b></label>
                                <input type="date" class="form-control" id="available-from"
                                defaultValue={editedAssignment.availableFrom}
                                onChange={(e) => setEditedAssignment({...editedAssignment, availableFrom: e.target.value})} />
                            </div>
                            <div class="pt-3 flex-fill ms-1">
                                <label for="until" class="form-label"><b>Until</b></label>
                                <input type="date" class="form-control" id="until"
                                defaultValue={editedAssignment.until}
                                onChange={(e) => setEditedAssignment({...editedAssignment, until: e.target.value})} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="float-end wd-button-group">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-light me-1">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>
        </div>
    );
}


export default AssignmentEditor;