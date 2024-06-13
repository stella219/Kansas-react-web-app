import React, { useState } from 'react';
import { BsQuestionCircle, BsFillPlayFill } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { quizzes, questions } from "../../../Database";
import { GrEdit } from "react-icons/gr";
import { LiaHandPointRightSolid } from 'react-icons/lia'; // Ensure this import is correct based on your icon library

export default function QuizPreview() {
    const { cid, qid } = useParams();
    const quiz = quizzes.find((quiz: any) => quiz._id === qid);
    const quizQuestions = quiz ? questions.filter((question) => quiz.questions.includes(question._id)) : [];
    
    // Track the current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    // Record the quiz start time
    const [startedAt] = useState(new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }));

    // Helper function to go to the next question
    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Helper function to go to the previous question
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
        <div className="container-fluid mt-4">
            <div className="row">    
                <div className="col-md-12">    
                    <div>
                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/TakingQuiz?startedAt=${encodeURIComponent(startedAt)}`}>
                            Student Taking Quiz Screen
                        </Link>
                    </div>

                    <h2>{quiz?.title}</h2>
                    <div className="alert alert-warning border-0" role="alert" style={{ backgroundColor: '#fae0d8', color: 'black' }}>
                        <BiErrorCircle /> This is a preview of the published version of the quiz
                    </div>
                    <p>Started: {startedAt}</p>
                    <h4>Quiz Instructions</h4>
                    <hr />
                    {currentQuestion && (
                        <div className="d-flex mt-4 align-items-start">
                            <LiaHandPointRightSolid style={{ fontSize: '1.5rem', marginRight: '10px', marginTop: '10px' }} />
                            <div className="card flex-grow-1" style={{ minWidth: '600px' }}> {/* Set a fixed width for the card */}
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">{currentQuestion.name}</h5>
                                    <span>{currentQuestion.points} pts</span>
                                </div>
                                <div className="card-body">
                                    <p>{currentQuestion.question_text}</p>
                                    {currentQuestion.type === 'Multiple Choice' && currentQuestion.options && (
                                        <div>
                                            {currentQuestion.options.map((option, idx) => (
                                                <div key={idx} className="form-check">
                                                    <input className="form-check-input" type="radio" />
                                                    <label className="form-check-label">
                                                        {option}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {currentQuestion.type === 'True/False' && (
                                        <div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" />
                                                <label className="form-check-label">
                                                    True
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" />
                                                <label className="form-check-label">
                                                    False
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {currentQuestion.type === 'Fill in the Blanks' && (
                                        <div className="form-group">
                                            {Object.keys(currentQuestion.correct_answer).map((key, idx) => (
                                                <div key={idx} className="mb-3 d-flex align-items-center">
                                                    <label className="form-label me-2">{key}.</label>
                                                    <input type="text" className="form-control" style={{ maxWidth: '300px' }} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="mt-3 mb-3 d-flex justify-content-between">
                        <button 
                            onClick={handlePrevious} 
                            className="btn btn-secondary rounded-0"
                            style={{ visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible' }}
                        >
                            <BsFillPlayFill style={{ transform: 'rotate(180deg)' }} /> Previous
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="btn btn-secondary rounded-0"
                            style={{ visibility: currentQuestionIndex === quizQuestions.length - 1 ? 'hidden' : 'visible' }}
                        >
                            Next <BsFillPlayFill />
                        </button>
                    </div>
                    <div className="border d-flex p-2 justify-content-between align-items-center">
                        <div className="ms-auto me-3">Quiz saved at {startedAt}</div>
                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Answers`} className="btn btn-secondary rounded-0">Submit Quiz</Link>
                    </div>
                    <div className="border p-1 d-flex align-items-center mb-3 mt-5" style={{ backgroundColor: '#f0f0f0', color: 'black' }}>
                        <GrEdit className="ms-2 me-3" /> Keep Editing This Quiz
                    </div>
                    <div>
                        <h5>Questions</h5>
                        <ul className="list-group mb-3">
                            {quizQuestions.map((question:any, index:any) => (
                                <li key={question._id} className="list-group-item d-flex align-items-center">
                                    <BsQuestionCircle className="me-2" />
                                    <a href={`#question${index}`} className="text-danger">{question.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
