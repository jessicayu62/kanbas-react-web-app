import db from "../../Kanbas/Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Modules from "./Modules";
import { Link, Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses({ courses }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const path = pathname.split("/");
    const currPath = path[path.length - 1].replace("%20", " ")

    return (
        <div className="col-lg-11 d-flex flex-column wd-courses-col ps-1 pt-3">
            <div>
                <nav>
                    <ol className="breadcrumb align-items-center">
                        <i className="fa fa-bars pe-4 wd-icon" style={{ color: '#a71523' }}></i>
                        <li className="breadcrumb-item">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                <span className="wd-text" style={{ color: '#a71523' }}>{course.number + "." + course._id}</span>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}/${currPath}`}>
                                {currPath}
                            </Link>
                        </li>
                    </ol>
                </nav>
                <hr />
            </div>
            <CourseNavigation />

            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />
                        <Route
                            path="Assignments/new"
                            element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;