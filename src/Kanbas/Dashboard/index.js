import { React } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import background from '../images/blue_background.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {
    return (
        <div className="col-lg-10 p-1 pt-2 wd-dashboard-col">
            <h1>Dashboard</h1>
            <hr />
            <h3>Published Courses ({courses.length})</h3>
            <hr />
            <form className="form-inline mb-4">
                <input value={course.name} placeholder="Course Name" className="form-control mr-sm-2 w-auto d-inline me-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
                <input value={course.number} placeholder="Course Number" className="form-control mr-sm-2 w-auto d-inline me-2"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })}
                />
                <input value={course.startDate} className="form-control mr-sm-2 w-auto d-inline me-2" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                />
                <input value={course.endDate} className="form-control mr-sm-2 w-auto d-inline me-2" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                />

                <div className="float-end me-5">
                    <button type="submit" className="btn btn-secondary me-2" onClick={updateCourse}>Update</button>
                    <button type="submit" className="btn btn-danger" onClick={addNewCourse}>Add</button>
                </div>
            </form>
            <div className="d-flex d-flex flex-wrap">
                <div className="row">
                    {courses.map((course) => (
                        <div className="col-sm-3 wd-dashboard-div">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                <div className="card wd-dashboard-card">
                                    <img className="card-img-top" src={background} alt="background-color" />
                                    <div className="card-body">
                                        <h6 className="card-title text-truncate">{course.number + " " + course._id + " " + course.name}</h6>
                                        <h6 className="card-text">{course.number + "." + course._id}</h6>
                                        <p className="card-text wd-card-text">{course.startDate + " - " + course.endDate}</p>
                                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Assignments`} className="list-group-item">
                                            <i className="fa fa-pencil-square-o" style={{ color: "black" }}></i>
                                        </Link>
                                        <button type="button" class="btn btn-danger btn-sm me-2 mt-2" onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>Edit</button>
                                        <button type="button" class="btn btn-secondary btn-sm mt-2" onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}
                                        >Delete</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;