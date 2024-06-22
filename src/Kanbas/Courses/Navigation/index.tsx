import { Link, useLocation } from 'react-router-dom';
import PeopleTable from '../People/Table';
import { useParams } from 'react-router';
import "./index.css";

export default function CoursesNavigation({courses} : {courses: any[]}) {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course:any) => course._id === cid);
    const links = [
        { label: "Home", path: `/Kanbas/Courses/${course?._id}/Home` }, 
        { label: "Modules", path: `/Kanbas/Courses/${course?._id}/Modules` }, 
        { label: "Piazza", path: `/Kanbas/Courses/${course?._id}/Piazza` }, 
        { label: "Zoom", path: `/Kanbas/Courses/${course?._id}/Zoom` },
        { label: "Assignments", path: `/Kanbas/Courses/${course?._id}/Assignments` }, 
        { label: "Quizzes", path: `/Kanbas/Courses/${course?._id}/Quizzes` }, 
       // { label: "Take", path: `/Kanbas/Courses/${course?._id}/Quizzes/${quiz._id}` }, 
        { label: "Grades", path: `/Kanbas/Courses/${course?._id}/Grades` },
        { label: "People", path: `/Kanbas/Courses/${course?._id}/People` }
    ];

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item border border-0 ${pathname.includes(link.label) ? "active text-black" : "text-danger"}`}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
