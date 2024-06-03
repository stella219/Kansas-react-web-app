import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import {Routes, Route, Navigate} from "react-router";
import * as db from "./Database";
import { useState } from "react";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";



export default function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState<any>({
    _id:"0", name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15",
    images:"/images/react.jpg", description:"New Description"
  });
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString()};
      setCourses([...courses, {...courses, ...newCourse}]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

    return (
      <Provider store={store}>
        <div id="wd-kanbas" className="h-100">
          <div className="d-flex h-100">
            <div className="d-none d-md-block bg-black">
              <KanbasNavigation />
            </div>
            <div className="flex-pill ms-3">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={
                  <Dashboard
                    courses={courses}
                    course = {course}
                    setCourse = {setCourse}
                    addNewCourse = {addNewCourse}
                    deleteCourse = {deleteCourse}
                    updateCourse = {updateCourse} />
                } />
                <Route path="Courses/:cid/*" element={
                  <Courses courses={courses} />} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </Provider>
  );
}