import React, { useState } from 'react';
import { BsGripVertical } from 'react-icons/bs';
import { IoIosCreate } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import { AiFillCaretDown, AiOutlinePlus } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as db from '../../Database';
import { deleteAssignment } from './assignmentsReducer';
import DeleteModal from './DeleteModal';


export default function Assignments() {
    const { cid } = useParams();
    const assignments = useSelector((state:any) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state:any) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const courseAssignments = assignments.filter((assignment:any) => assignment.course === cid);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentAssignmentId, setCurrentAssignmentId] = useState(null);

    const handleOpenDeleteModal = (assignmentId: any, event:any) => {
    event.stopPropagation();  // Stop the event from propagating to parent elements
    setShowDeleteModal(true);
    setCurrentAssignmentId(assignmentId);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleDeleteAssignment = () => {
        dispatch(deleteAssignment(currentAssignmentId));
        setShowDeleteModal(false);
    };

    return (
        <div>
            <div id="wd-assignments" className="d-flex align-items-center justify-content-between mb-3">
                <div className="input-group w-50">
                    <span className="input-group-text bg-white border-end-0">
                        <HiOutlineMagnifyingGlass />
                    </span>
                    <input
                        type="text"
                        className="form-control border-start-0"
                        id="wd-search-assignment"
                        placeholder="search...."
                    />
                </div>
                <div style={{ marginLeft: '15px' }}>
                    <button  className="btn btn-md btn-secondary mt-4">+ Group</button> &nbsp;
                    <Link to = {`/Kanbas/Courses/${cid}/Assignments/new`}>
                        <button  className="btn btn-md btn-danger mt-4 float-end">+ Assignment</button> 
                    </Link><br /><br />
                </div>
            </div>

            <div id="wd-assignments-list">
                <ul id="wd-assignments-list" className="list-group rounded-0">
                    <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray" style={{ borderLeft: '5px solid green' }}>
                        <div className="wd-assignment-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3 mt-2" /> <AiFillCaretDown />ASSIGNMENT
                            <BiDotsVerticalRounded className="float-end mt-2" />
                            <AiOutlinePlus className="float-end mt-2" />
                            <button type="button" className="btn round btn-md btn-outline-secondary text-black float-end me-1">40% of Total</button>
                        </div>
                        <ul className="wd-assignment-list-items list-group rounded-0">
                            {courseAssignments.filter((assignment:any) => assignment.course === cid)
                            .map((assignment:any) => (
                                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="d-flex align-items-center flex-grow-1 text-decoration-none">
                                        <BsGripVertical className="me-2 fs-3 text-success" />
                                        <div className="flex-grow-1 me-5">
                                            <div className="p-1 ps-3">
                                                <span className="wd-assignment-link text-black">{assignment.title}</span>
                                                <p className="text-wrap">
                                                    <span className="text-danger wd-15">Multiple Modules | </span>
                                                    <span className="text-black fw-bold">Not available until </span>  
                                                    <span className="text-black">{assignment.available} | </span>
                                                    <span className="text-black fw-bold">Due </span>
                                                    <span className="text-black">{assignment.until} | {assignment.points}</span>
                                                    <span className="text-black"> pts </span>
                                                </p>
                                            </div>
                                        </div>
                                        <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            <IoIosCreate className="fs-4 text-success" />
                                        </Link>
                                    </Link>
                                    <FaTrash className="fs-4 text-danger ms-2" 
                                        style={{ cursor: 'pointer' }} onClick={(e) => handleOpenDeleteModal(assignment._id, e)} />
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
                {showDeleteModal && (
                <DeleteModal
                    showModal={showDeleteModal}
                    handleClose={handleCloseDeleteModal}
                    handleDelete={handleDeleteAssignment}
                />
                 )}
            </div>
        </div>
    );
}
