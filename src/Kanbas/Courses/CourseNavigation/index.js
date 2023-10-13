import { Link, useParams, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Annoucements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div class="col-lg-2 wd-profile-nav-col">
            <ul class="nav flex-column nav-bar wd-profile-nav">
                {links.map((link, index) => (
                    <li class="nav-item">
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`list-group-item ${pathname.includes(link) && "active"}`}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation;