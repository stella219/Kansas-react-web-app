
import { BsGripVertical } from 'react-icons/bs';
import { AiFillCaretDown, AiOutlinePlus } from 'react-icons/ai';
import AssignmentControlButtons from './AssignmentControlButtons';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modules from '../Modules/index';
import { IoIosCreate } from 'react-icons/io';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import AssignmentButtons from './AssignmentButtons';


export default function Assignments() {
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
                    placeholder="search...." />
                </div>
                <div style={{ marginLeft: '15px' }}>
                    <button id="wd-add-assignment-group-btn" className="btn btn-md btn-secondary mt-4">+ Group</button> &nbsp;
                    <button id="wd-add-assignment-btn" className="btn btn-md btn-danger mt-4 float-end">+ Assignment</button> <br /><br />
                </div>
            </div>

            <div id="wd-assignments-list">
                <ul id="wd-assignments-list" className="list-group rounded-0">
                    <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray" style={{ borderLeft: '5px solid green'}}>
                        <div className="wd-assignment-title p-3 ps-2 bg-secondary"> 
                            <BsGripVertical className="me-2 fs-3 mt-2" /> <AiFillCaretDown />ASSIGNMENT
                            <BiDotsVerticalRounded className="float-end mt-2"/>
                            <AiOutlinePlus className="float-end mt-2"/>
                            <button type="button" className="btn round btn-md btn-outline-secondary text-black float-end me-1">40% of Total</button>
                        </div>
                        <ul className="wd-assignment-list-items list-group rounded-0">
                            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center" >
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="d-flex align-items-center flex-grow-1 text-decoration-none">
                                    <AssignmentButtons />
                                    <div className="flex-grow-1 me-5">
                                        <div className="p-1 ps-3">
                                            <span className="wd-assignment-link">A1</span>
                                            <p className="text-wrap"><span className="text-danger wd-15">Multiple Modules</span> 
                                                | <strong> Not available until </strong>May 6 at 12:00am | <strong>Due </strong> May 13 at 11:59pm | 100 pts    
                                            </p>
                                        </div>
                                    </div>
                                    <AssignmentControlButtons />
                                </a>
                            </li>
                            <li className="wd-assignment-list-item list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="d-flex align-items-center flex-grow-1 text-decoration-none">
                                    <AssignmentButtons />
                                    <div className="flex-grow-1 me-5">
                                        <div className="p-1 ps-3">
                                            <span className="wd-assignment-link">A2</span>
                                            <p className="text-wrap"><span className="text-danger">Multiple Modules</span>
                                            |   <strong> Not available until </strong>May 13 at 12:00am | <strong>Due </strong>May 20 at 11:59pm | 100 pts  
                                            </p>
                                        </div>
                                    </div>
                                    <AssignmentControlButtons /> 
                                </a>
                            </li>
                            <li className="wd-assignment-list-item list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="d-flex align-items-center flex-grow-1 text-decoration-none">
                                    <AssignmentButtons />
                                    <div className="flex-grow-1 me-5">
                                        <div className="p-1 ps-3">
                                            <span className="wd-assignment-link">A3</span>
                                            <p className="text-wrap"><span className="text-danger">Multiple Modules</span>
                                                <strong> Not available until </strong>May 20 at 12:00am |  <strong>Due </strong> May 27 at 11:59pm | 100 pts
                                            </p>
                                        </div>
                                    </div>
                                    <AssignmentControlButtons />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
