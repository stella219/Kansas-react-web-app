import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import moment from 'moment';
import * as client from "./client";
import { updateAssignment, addAssignment } from './assignmentsReducer';


function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const assignment = assignments.find((assignment: any) => assignment._id === aid) || {};

    const currentDate = new Date();
    const defaultDueDate = assignment.due ? assignment.due : currentDate.toISOString().slice(0, 16);
    const defaultAvailableFrom = assignment.available ? assignment.available : currentDate.toISOString().slice(0, 10) + "T00:00";
    const defaultAvailableUntil = assignment.until ? assignment.until : currentDate.toISOString().slice(0, 10) + "T23:59";

    const [title,setTitle] = useState(assignment.title || "");
    const [description,setDescription] = useState(assignment.description || "");
    const [points,setPoints] = useState(assignment.points || "");
    const [due,setDue] = useState(defaultDueDate);
    const [from,setFrom] = useState(defaultAvailableFrom);
    const [until,setUntil] = useState(defaultAvailableUntil);


    useEffect(() => {
        if (aid !== 'new') {
            client.getAssignment(aid as string).then((assignment) => {
                setTitle(assignment.title);
                setDescription(assignment.description);
                setPoints(assignment.points);
                setDue(assignment.due);
                setFrom(assignment.available);
                setUntil(assignment.until);
            });
        }
    }, [aid]);

    const handleSave = async () => {
        const formattedAssignment = {
            _id: aid,
            title,
            description,
            points,
            due,
            available: from,
            until,
            course: cid
        };

        if (aid !== 'new') {
            await client.updateAssignment(formattedAssignment);
            dispatch(updateAssignment(formattedAssignment));
        } else {
            await client.createAssignment(cid as string, formattedAssignment);
            dispatch(addAssignment(formattedAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignment-editor" className="container mt-3">
            <div className="row mb-3 d-flex">
                <div className="col">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="New Assignment"
                    />
                </div>
            </div>
            <div className="row mb-3 d-flex">
                <div className="col">
                    <textarea
                        id="wd-description"
                        className="form-control"
                        value={description}
                        rows={5}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group row mb-3 justify-content-end">
                <div className="col-lg-12 d-flex justify-content-end align-items-center">
                    <label htmlFor="wd-points" className="col-md-4 text-end me-2">Points</label>
                    <input id="wd-points" className="form-control w-80"
                        value={points}
                        onChange={(e) => setPoints(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group row mb-3 justify-content-end">
                <div className="col-lg-12 d-flex justify-content-end align-items-center">
                    <label htmlFor="wd-group" className="col-md-4 text-end me-2" style={{ whiteSpace: 'nowrap' }}>Assignment Group</label>
                    <div className="position-relative w-100">
                        <select id="wd-group" className="form-control w-160">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="LABS">LABS</option>
                            <option value="PROJECTS">PROJECTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                        </select>
                        <IoIosArrowDown className="position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }} />
                    </div>
                </div>
            </div>
            <div className="form-group row mb-3 justify-content-end">
                <div className="col-lg-12 d-flex justify-content-end align-items-center">
                    <label htmlFor="wd-submission-type" className="col-md-4 text-end me-2" style={{ whiteSpace: 'nowrap' }}>Display Grade as</label>
                    <div className="position-relative w-100">
                        <select id="wd-submission-type" className="form-control w-160">
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                        </select>
                        <IoIosArrowDown className="position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }} />
                    </div>
                </div>
            </div>
            <div className="form-group row mb-3 justify-content-end">
                <div className="row col-lg-15 d-flex justify-content-end align-items-center">
                    <label htmlFor="wd-submission-type" className="col-md-3 text-end me-2" style={{ whiteSpace: 'nowrap' }}>Submission</label>
                    <div className="col-md-8 border p-3" style={{ borderWidth: '2px' }}>
                        <div className="position-relative w-180">
                            <select id="wd-submission-type" className="form-control mb-2">
                                <option selected value="Online">Online</option>
                                <option value="GitHub">Github</option>
                            </select>
                            <IoIosArrowDown className="position-absolute" style={{ top: '10px', right: '9px' }} />
                        </div>
                        <label htmlFor="wd-text-entry" className="form-label"><strong>Online Entry Options</strong></label>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input " id="wd-text-entry" />
                            <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                        </div>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
                            <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                        </div>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="wd-media-recording" />
                            <label htmlFor="wd-media-recording" className="form-check-label">Media Recording</label>
                        </div>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                        </div>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group row mb-3 justify-content-end">
                <div className="row col-lg-15 d-flex justify-content-end align-items-center">
                    <label htmlFor="wd-assign" className="col-md-3 col-form-label text-end" style={{ whiteSpace: 'nowrap' }}>Assign</label>
                    <div className="col-md-8 border p-3">
                        <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                        <select id="wd-assign-to" className="form-control mb-2">
                            <option selected value="Everyone">Everyone      X</option>
                        </select>
                        <label htmlFor="wd-due-date" className="form-label mt-2 fw-bold">Due</label>
                        <input type="datetime-local"
                            id="wd-due-date"
                            className="form-control mb-2"
                            value={due}
                            onChange={(e) => setDue(e.target.value)}
                        />
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                <input type="datetime-local"
                                    id="wd-available-from"
                                    className="form-control mb-2"
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form-label">Until</label>
                                <input type="datetime-local"
                                    id="wd-available-until"
                                    className="form-control mb-2 border-end-0"
                                    value={until}
                                    onChange={(e) => setUntil(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-end">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-cancel-btn" className="btn btn-secondary me-2">Cancel</Link>
                    <button onClick={handleSave} className="btn btn-success me-2">Save</button>
                </div>
            </div>
        </div>
    );
}

export default AssignmentEditor;