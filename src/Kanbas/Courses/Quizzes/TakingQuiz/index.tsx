import React, { useState } from 'react';
import { BsQuestionCircle, BsFillPlayFill } from 'react-icons/bs';
import { Link, useParams, useLocation } from 'react-router-dom';
import { quizzes, questions } from "../../../Database";
import { LiaHandPointRightSolid } from 'react-icons/lia';
import CountdownTimer from './countDownTimer'; // Adjust the import path as necessary

// Parse the startedAt time from the URL parameters
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function TakingQuiz() {
    const { cid, qid } = useParams();
    const quiz = quizzes.find((quiz: any) => quiz._id === qid);
    const quizQuestions = quiz ? questions.filter((question: any) => quiz.questions.includes(question._id)) : [];

    // Track the current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showTimer, setShowTimer] = useState(true);

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

    // Helper function to go to a specific question
    const handleQuestionClick = (index: number) => {
        setCurrentQuestionIndex(index);
    };

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const query = useQuery();
    const startedAt = query.get('startedAt');
    const startedTime = startedAt ? new Date(startedAt) : new Date();
    const timeLimit = quiz ? parseInt(quiz.time_limit.split(' ')[0]) : 0; // Assuming time limit is in "20 Minutes" format
    const dueTime = new Date(startedTime.getTime() + timeLimit * 60000);

    const initialMinutes = timeLimit;
    const initialSeconds = 0;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <h2>{quiz?.title}</h2>
                    <p>Started: {startedAt}</p>
                    <h4>Quiz Instructions</h4>
                    <hr />
                    {currentQuestion && (
                        <div className="d-flex mt-4 align-items-start">
                            <LiaHandPointRightSolid style={{ fontSize: '1.5rem', marginRight: '10px', marginTop: '10px' }} />
                            <div className="card flex-grow-1">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">{currentQuestion.name}</h5>
                                    <span>{currentQuestion.points} pts</span>
                                </div>
                                <div className="card-body">
                                    <p>{currentQuestion.question_text}</p>
                                    {currentQuestion.type === 'Multiple Choice' && currentQuestion.options && (
                                        <div>
                                            {currentQuestion.options.map((option: string, idx: number) => (
                                                <div key={idx} className="form-check">
                                                    <input className="form-check-input" type="radio" name={`question-${currentQuestion._id}`} />
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
                                                <input className="form-check-input" type="radio" name={`question-${currentQuestion._id}`} />
                                                <label className="form-check-label">
                                                    True
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={`question-${currentQuestion._id}`} />
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
                </div>

                <div className="col-md-3 mt-2 ms-3">
                    <div className="d-none d-md-block float-end">
                        <h4>Questions</h4>
                        <ul className="list-group mb-3" style={{ maxWidth: '150px' }}>
                            {quizQuestions.map((question: any, index: number) => (
                                <li key={question._id} className="list-group-item d-flex align-items-center border-0" >
                                    <BsQuestionCircle className="me-2" />
                                    <button
                                        className="btn btn-link p-0 text-danger"
                                        onClick={() => handleQuestionClick(index)}
                                    >
                                        {question.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <div className="row">
                                <div className="col-12 d-flex align-items-center">
                                    <h6 className="mb-0 me-2">Time Running:</h6>
                                    <button className="btn btn-secondary btn-sm" onClick={() => setShowTimer(!showTimer)}>
                                        {showTimer ? 'Hide Time' : 'Show Time'}
                                    </button>
                                </div>
                                <div className="col-12">
                                    <span>Attempt due: {dueTime.toLocaleString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true
                                    })}</span>
                                </div>
                                {showTimer && (
                                    <div className="col-12">
                                        <CountdownTimer initialMinutes={initialMinutes} initialSeconds={initialSeconds} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}