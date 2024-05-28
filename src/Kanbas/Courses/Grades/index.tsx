import React from 'react';
import { IoIosArrowDown, IoIosSettings } from 'react-icons/io';
import { FaFileImport, FaFileExport, FaFilter } from 'react-icons/fa';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import './index.css'; // Add a custom CSS file for specific styles
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { users, grades, enrollments, assignments, courses } from '../../Database';

export default function Grades() {
    
    const { cid } = useParams();

    //Filter the enrollment file by courses
    const courseEnrollments = enrollments.filter((enrollment) => enrollment.course === cid);
    
    //Get the students for the course enrollments
    const enrolledStudents = courseEnrollments.map(enrollment => {
        return users.find(user => user._id === enrollment.user)
    });

    //Get the course Assignments from assignments data file
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

    // Check if there are grades for the current course
    const courseGrades = grades.filter(grade => courseAssignments.some(assignment => assignment._id === grade.assignment));
    const noGradesAvailable = courseGrades.length === 0;

    return (
        <div className="container mt-3">
            <div className="row mb-3 justify-content-end">
                <div className="col-auto">
                    <button className="btn btn-secondary me-2">
                        <FaFileImport /> Import
                    </button>
                    <div className="dropdown d-inline-block">
                        <button className="btn btn-secondary me-2" type="button" id="dropdownMenuButton">
                            <FaFileExport /> Export <IoIosArrowDown />
                        </button>
                    </div>
                    <button className="btn btn-secondary">
                        <IoIosSettings />
                    </button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label className="form-label fw-bold">Student Name</label>
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                            <HiOutlineMagnifyingGlass />
                        </span>
                        <input type="text" placeholder="Search Students" className="form-control border-start-0 border-end-0" />
                        <span className="input-group-text bg-white"><IoIosArrowDown /></span>
                    </div>
                </div>
                <div className="col">
                    <label className="form-label fw-bold">Assignment Names</label>
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                            <HiOutlineMagnifyingGlass />
                        </span>
                        <input type="text" placeholder="Search Assignment" className="form-control border-start-0 border-end-0" />
                        <span className="input-group-text bg-white"><IoIosArrowDown /></span>
                    </div>
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-auto align-self-end">
                    <button className="btn btn-secondary">
                        <FaFilter /> Apply Filters
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                {noGradesAvailable ? (
                    <div className="alert alert-info" role="alert">
                        No information available.
                    </div>
                ) : (
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center">Student Name</th>
                                {courseAssignments.map(assignment => (
                                    <th key={assignment._id} className="text-center column-width">{assignment.title}
                                    <br /><span className="text-center">Out of 100</span></th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {enrolledStudents.map(student => (
                                student ? (
                                    <tr key={student?._id}>
                                    <td className="text-dark fw-bold">{student?.firstName} {student?.lastName}</td>
                                    {courseAssignments.map(assignment => (
                                        <td className="text-center" key={assignment._id}>
                                            {grades.find(grade => grade.assignment === assignment._id && grade.student === student._id)?.grade || 'N/A'}
                                        </td>
                                    ))}
                                </tr>
                                ) : null
                            ))}     
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}