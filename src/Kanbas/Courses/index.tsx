import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import {Navigate, Route, Routes, useParams, useLocation} from 'react-router';
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Quizzes from "./Quizzes";
import { FaAlignJustify } from "react-icons/fa6";
import Grades from "./Grades";
import QuizAnswer from "./Quizzes/Answers";
import QuizPage from "./Quizzes/QuizPage";
import PeopleTable from "./People/Table";



export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    return (
        <div id="wd-courses">
            <h2 className="text-danger ms-2">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                <CoursesNavigation courses={courses} />
                </div>
                <div className="flex-fill" style={{ height: '100%' }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable cid={cid} />} />
                        <Route path="People/:uid" element={<PeopleTable cid={cid} />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:quizID" element={<QuizPage />} />
                        <Route path="Quizzes/:quizID/Answers/:uid" element={<QuizAnswer />} />
                        {/* "/Courses/666a36dc1d4775398682b0d0/Quizzes/667510eb1d4775398682b22a/Answers/6676829dc3db84c97fa035fa" */}
                        <Route path="Quizzes/:quizID/QuizPage" element={<QuizPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}