import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
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
            <label for="text-fields-assignment-name" class="form-label">Assignment Name</label>
            <input value={assignment.title}
                className="form-control mb-2" />
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