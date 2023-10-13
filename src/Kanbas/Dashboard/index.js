import { Link } from "react-router-dom";
import db from "../Database";
import 'font-awesome/css/font-awesome.min.css';
import background from '../images/blue_background.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="col-lg-10 p-1 pt-2 wd-dashboard-col">
            <h1>Dashboard</h1>
            <hr />
            <h3>Published Courses ({courses.length * 2})</h3>
            <hr />
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
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    {courses.map((course) => (
                        <div className="col-sm-3 wd-dashboard-div">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                <div className="card wd-dashboard-card">
                                    <img className="card-img-top" src={background} alt="background-color" />
                                    <div className="card-body">
                                        <h6 className="card-title text-truncate">{course.number + " " + course._id + " " + course.name}</h6>
                                        <h6 className="card-text">{course.number + "." + course._id}</h6>
                                        <p className="card-text wd-card-text">{course.startDate + " - " + course.endDate}</p>
                                        <i className="fa fa-pencil-square-o" style={{ color: "black" }}></i>
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