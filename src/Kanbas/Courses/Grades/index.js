import db from "../../Database";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="d-flex flex-column mt-4 me-4">
            <div className="d-flex flex-wrap">
                <span style={{ color: '#a71523' }} className="pt-1">Gradebook</span>
                <div className="float-end wd-button-group">
                    <button type="button" className="btn btn-light me-2">
                        <i className="fa fa-file-o"></i> Import</button>
                    <button className="btn btn-light dropdown-toggle me-3" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-file-o fa-flip-horizontal"></i> Export
                    </button>

                    <button type="button" className="btn btn-light"><i className="fa fa-gear"></i>
                    </button>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                <div className="pt-3 me-1 flex-md-fill">
                    <label for="available-from" className="form-label"><b>Student Names</b></label>
                    <select className="form-select">
                        <option selected>Search Students</option>
                    </select>
                </div>
                <div className="pt-3 ms-1 flex-md-fill">
                    <label for="until" className="form-label"><b>Assignment Names</b></label>
                    <select className="form-select">
                        <option selected>Search Assignments</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-light mt-3"><i className="fa fa-filter"></i> Apply
                    Filters</button>
            </div>

            <div class="table mt-3">
                <table class="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th scope="col" className="w-25">Student Name</th>
                            {assignments.map((assignment) => (<th className="text-center w-25">{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td style={{ color: '#a71523' }}>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td className="text-center">{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>);
}
export default Grades;