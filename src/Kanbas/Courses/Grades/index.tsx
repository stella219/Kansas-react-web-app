import React from 'react';
import { IoIosArrowDown, IoIosSettings } from 'react-icons/io';
import { FaFileImport, FaFileExport, FaFilter } from 'react-icons/fa';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import './index.css'; // Add a custom CSS file for specific styles

export default function Grades() {
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
                    <label className="form-label"><strong>Student Name</strong></label>
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                            <HiOutlineMagnifyingGlass />
                        </span>
                        <input type="text" placeholder="Search Students" className="form-control border-start-0 border-end-0" />
                        <span className="input-group-text bg-white"><IoIosArrowDown /></span>
                    </div>
                </div>
                <div className="col">
                    <label className="form-label"><strong>Assignment Names</strong></label>
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
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center">Student Name</th>
                            <th className="text-center fw-normal column-width">A1 SETUP<br /><span className="fw-normal">Out of 100</span></th>
                            <th className="text-center fw-normal column-width">A2 HTML<br /><span className="fw-normal">Out of 100</span></th>
                            <th className="text-center fw-normal column-width highlight-cell">A3 CSS<br /><span className="fw-normal highlight-column">Out of 100</span></th>
                            <th className="text-center fw-normal column-width">A4 BOOTSTRAP<br /><span className="fw-normal">Out of 100</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-danger fw-bold">Jane Adams</td>
                            <td >100%</td>
                            <td >94.6%</td>
                            <td className="highlight-cell">92.1%</td>
                            <td >86.2%</td>
                        </tr>
                        <tr>
                            <td className="text-danger fw-bold">Christina Allen</td>
                            <td >100%</td>
                            <td >100%</td>
                            <td className="highlight-cell">100%</td>
                            <td >100%</td>
                        </tr>
                        <tr>
                            <td className="text-danger">Sameera Ansari</td>
                            <td >100%</td>
                            <td >100%</td>
                            <td className="highlight-cell">100%</td>
                            <td >100%</td>
                        </tr>
                        <tr className="highlight-row">
                            <td className="text-danger fw-bold">Han Bao</td>
                            <td className="highlight-cell fw-normal fill-cell">100%</td>
                            <td >100%</td>
                            <td className="d-flex align-items-center">
                                <input type="text" defaultValue="80%" className="form-control form-control-sm border-danger" />
                                <FaFileImport className="ms-2" />
                            </td>
                            <td className="fw-normal">100%</td>
                        </tr>
                        <tr>
                            <td className="text-danger fw-bold">Malli Sai Srinivas Balbhill</td>
                            <td >94.4%</td>
                            <td >96.7%</td>
                            <td className="highlight-cell">99.8%</td>
                            <td >89.1%</td>
                        </tr>
                        <tr>
                            <td className="text-danger fw-bold">Sian Cao</td>
                            <td >100%</td>
                            <td >100%</td>
                            <td className="highlight-column">100%</td>
                            <td >100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
