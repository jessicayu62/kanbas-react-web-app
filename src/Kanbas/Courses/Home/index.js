import ModuleList from "../Modules/ModuleList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Home() {
    return (
            <div className="row me-3">
                <ModuleList />
                <div className="col-xl-3 mb-3 mt-4">
                    <div className="wd-vertical-buttons">
                        <button type="button" className="btn btn-light btn-sm wd-button"><i
                            className="fa fa-upload"></i> Import Existing Content</button>
                        <button type="button" className="btn btn-light btn-sm wd-button"><i
                            className="fa fa-arrow-circle-o-right"></i> Import From Commons</button>
                        <button type="button" className="btn btn-light btn-sm wd-button"><i
                            className="fa fa-bullseye"></i> Choose Home Page</button>
                        <button type="button" className="btn btn-light btn-sm wd-button"><i
                            className="fa fa-bar-chart"></i> View Course Stream</button>
                        <button type="button" className="btn btn-light btn-sm wd-button"><i
                            className="fa fa-bullhorn"></i> New Accouncement</button>
                        <button type="button" className="btn btn-light btn-sm wd-button"><i
                            className="fa fa-bar-chart"></i> New Analytics</button>
                        <button type="button" className="btn btn-light btn-sm wd-button"><i
                            className="fa fa-bell"></i> View Course Notifications</button>
                    </div>

                    <h6 className="mt-4">To Do  </h6>
                    <hr />

                    <div className="vstack gap-3">
                        <div>
                            <i className="fa fa-circle" style={{ color: '#a71523' }}></i>
                            <span style={{ color: '#a71523' }}> Grade A1</span>
                            <i className="fa fa-times float-end" aria-hidden="true"></i>

                            <p className="ps-3 mb-0">100 points ●  Sept 18 at 11:59am</p>
                        </div>
                        <div>
                            <i className="fa fa-circle" style={{ color: '#a71523' }}></i>
                            <span style={{ color: '#a71523' }}> Grade A2</span>
                            <i className="fa fa-times float-end" aria-hidden="true"></i>
                            <p className="ps-3 mb-0">100 points ●  Oct 2 at 11:59am</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Home;