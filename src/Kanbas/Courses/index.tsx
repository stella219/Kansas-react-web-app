import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import {Navigate, Route, Routes, useParams, useLocation} from 'react-router';
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import QuizPreview from "./Quizzes/Preview";
import Quizzes from "./Quizzes";
import { FaAlignJustify } from "react-icons/fa6";
import Grades from "./Grades";
import Answers from "./Quizzes/Answers";
import TakingQuiz from "./Quizzes/TakingQuiz";
import PeopleTable from "./People/Table";
import PeopleDetails from "./People/Details";

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
                <CoursesNavigation />
                </div>
                <div className="flex-fill" style={{ height: '100%' }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid" element={<QuizPreview />} />
                        <Route path="Quizzes/:qid/Answers" element={<Answers />} />
                        <Route path="Quizzes/:qid/TakingQuiz" element={<TakingQuiz />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}