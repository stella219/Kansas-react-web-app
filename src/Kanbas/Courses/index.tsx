import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import {Navigate, Route, Routes} from 'react-router';
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import {GrMenu} from 'react-icons/gr';
import Grades from "./Grades";

export default function Courses() {
    return (
        <div id="wd-courses">
            <div className="d-flex align-ites-center">
                <GrMenu className="fs-3" style={{ marginLeft: '25px', marginTop:"8px" }}/>
                <h2>Course 1234</h2>
            </div>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}