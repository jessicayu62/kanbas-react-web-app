import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
// import "../App.css"; // optionally import CSS files as needed

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(COURSES_URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_URL, course);
    setCourses([
      ...courses,
      response.data
    ]);
    setCourse({ name: "",  number: "", startDate: "", endDate: ""});
  };
  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${COURSES_URL}/${course._id}`
    );
    setCourses(courses.filter((c) => c._id !== course._id));
  };
  const updateCourse = async (course) => {
    const response = await axios.put(
      `${COURSES_URL}/${course._id}`,
      course
    );

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          console.log(response.data)
          return course;
        } else {
          return c;
        }
      })
    );
    setCourse({ name: "",  number: "", startDate: "", endDate: ""});
  };

  return (
    <Provider store={store}>
      <div class="row justify-content-start">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;