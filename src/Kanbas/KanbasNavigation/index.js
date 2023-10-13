import { Link, useLocation } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import logo from '../images/neu.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = ["user", "tachometer", "book", "calendar", "inbox", "clock-o", "desktop", "arrow-right", "question-circle"];
    const { pathname } = useLocation();

    return (
        <div className="col-lg-1">
            <ul className="nav flex-column nav-bar wd-kanbas-nav pt-2">
                <Link
                    key={-1}
                    to={`/Kanbas/Dashboard`}
                    className="list-group-item nav-item pb-3">
                    <div className="d-flex flex-column align-items-center">
                        <img src={logo} width="65" height="50" alt="neu-logo" />
                    </div>
                </Link>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link === 'Courses' ? `/Kanbas/${link}/CS104` : `/Kanbas/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"} nav-item pb-1`}>
                        <div className="d-flex flex-column align-items-center">
                            <i className={`fa fa-${icons[index]} fa-2x`} style={link.includes("Account") ? { color: "#bfb0b0" } : { color: '#a71523' }}></i>
                            <h6 className="wd-navbar-link pt-1">{link}</h6>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
export default KanbasNavigation;