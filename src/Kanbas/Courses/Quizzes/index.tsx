import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { useParams } from 'react-router';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { FaRocket } from 'react-icons/fa6';
import { IoIosCreate } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import { findQuizzesForCourse, findRecordByUserByQuiz } from './client';
import { useSelector } from 'react-redux';

interface Quiz {
    _id: string;
    title: string;
    due_date: string;
    points: number;
    questions: Array<any>;
    how_many_attempts: number;
}

export default function Quizzes() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
    const [courseQuizzes, setCourseQuizzes] = useState<Quiz[]>([]);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertQuizID, setAlertQuizID] = useState<string>('');

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const quizzes = await findQuizzesForCourse(cid as string);
                setCourseQuizzes(quizzes);
            } catch (error) {
                console.error('Failed to fetch quizzes. Please check the console for more details.');
            }
        };
        fetchQuizzes();
    }, [cid]);

    const getCurrentTimestamp = () => new Date().toISOString();

    const checkUserAttempt = async (quiz: Quiz) => {
        try {
            const recordData = await findRecordByUserByQuiz(currentUser._id, quiz._id);
            if (recordData && recordData.attempt >= quiz.how_many_attempts) {
                setAlertQuizID(quiz._id);
                setShowAlert(true);
            } else {
                navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`);
            }
        } catch (error) {
            console.error('Failed to check user attempts', error);
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`);
        }
    };

    return (
        <div>
            <div id="wd-quizzes" className="d-flex align-items-center justify-content-between mb-3">
                <div className="input-group w-50">
                    <span className="input-group-text bg-white border-end-0">
                        <HiOutlineMagnifyingGlass />
                    </span>
                    <input
                        type="text"
                        className="form-control border-start-0"
                        id="wd-search-quiz"
                        placeholder="Search for Quiz..."
                    />
                </div>
                <div style={{ marginLeft: '15px' }}>
                    <button id="wd-add-quiz-btn" className="btn btn-md btn-danger mt-4 float-end">
                        + Quiz
                    </button>
                </div>
            </div>

            <div id="wd-quizzes-list">
                <ul id="wd-quizzes-list" className="list-group rounded-0">
                    <li className="wd-quiz-list list-group-item p-0 mb-5 fs-5 border-gray" style={{ borderLeft: '5px solid green' }}>
                        <div className="wd-quiz-title p-3 ps-2 bg-secondary">
                            <AiFillCaretDown /> Assignment Quizzes
                        </div>
                        <ul className="wd-quiz-list-items list-group rounded-0">
                            {courseQuizzes.map(quiz => (
                                <li key={quiz._id} className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                                    <div
                                        onClick={() => checkUserAttempt(quiz)}
                                        className="d-flex align-items-center flex-grow-1 text-decoration-none"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <FaRocket className="ms-2 fs-3 text-success" />
                                        <div className="flex-grow-1 me-5">
                                            <div className="p-1 ps-3">
                                                <span className="wd-quiz-link">{quiz.title}</span>
                                                <p className="text-wrap fs-6 mt-1 text-dark">
                                                    <span className="wd-15 fw-bold">Closed  &nbsp; &nbsp;Due</span> &nbsp;
                                                    <span>{quiz.due_date} </span> &nbsp;&nbsp;
                                                    <span>{quiz.points} pts</span> &nbsp;&nbsp;
                                                    <span>{quiz.questions.length} Questions</span>
                                                </p>
                                            </div>
                                        </div>
                                        <IoIosCreate className="fs-4 text-success ms-2" />
                                        <FaTrash className="fs-4 text-danger ms-2" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>

            {showAlert && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Quiz Attempt Limit Reached</h5>
                                <button type="button" className="close" onClick={() => setShowAlert(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>You have reached the maximum number of attempts for this quiz.</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setShowAlert(false);
                                        navigate(`/Kanbas/Courses/${cid}/Quizzes/${alertQuizID}/Answers/${currentUser._id}`);
                                    }}
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
