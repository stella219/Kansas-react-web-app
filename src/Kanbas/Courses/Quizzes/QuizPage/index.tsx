import React, { useState, useEffect } from 'react';
import { BsQuestionCircle, BsFillPlayFill } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import { useParams, useLocation } from 'react-router-dom';
import { GrEdit } from "react-icons/gr";
import { LiaHandPointRightSolid } from 'react-icons/lia'; 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitQuiz } from './submitQuiz';
import CountdownTimer from './countDownTimer';
import { findQuizDetails, findQuestionsForQuiz, findQuestionById } from '../client';

type SelectedAnswers = {
    [key: string]: string | { [key: string]: string };
};

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function QuizPage() {

    const { cid, qid} = useParams();

    const navigate = useNavigate(); 
    const currentUser = useSelector((state: any) => state.accountReducer.currentUser); // Get the current user from Redux
    const [quiz, setQuiz] = useState<any>(null); // State for quiz data
    const [quizQuestions, setQuizQuestions] = useState<any[]>([]); // Explicitly typing as any[]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showTimer, setShowTimer] = useState(true);
    const currentQuestion = quizQuestions[currentQuestionIndex] as any; // Type assertion
    const [startedAt] = useState(new Date().toISOString());
    const startedTime = new Date(startedAt);
    const timeLimit = quiz && quiz.time_limit === "Yes" ? parseInt(quiz.how_long ?? "0") : 0;
    const dueTime = new Date(startedTime.getTime() + timeLimit * 60000);
    const initialMinutes = timeLimit;
    const initialSeconds = 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const quizData = await findQuizDetails(cid as string, qid as string);
                console.log("Fetched quiz data:", quizData);
                setQuiz(quizData);
    
                // const questionsData = await findQuestionsForQuiz(qid as string);
                // console.log("Fetched questions data:", questionsData);
                // setQuizQuestions(questionsData);
    
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            }
        };
        fetchData();
    });



    // Helper function to go to the next question
    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Helper function to go to a specific question
    const handleQuestionClick = (index: number) => {
        setCurrentQuestionIndex(index);
    };

    // Helper function to go to the previous question
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Helper function to handle answer change
    const handleAnswerChange = (questionId: string, answer: any) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: answer
        });
    };

    const handleSubmitQuiz = () => {
        submitQuiz(currentUser, cid as string, qid as string, startedAt, selectedAnswers, quizQuestions, navigate);
        setIsSubmitted(true);
        setTimeout(() => {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Answers`);
        }, 2000); // 2 seconds delay before redirecting to the answers page
    };

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-9">
                    {isSubmitted && <div className="alert alert-success">Quiz submitted successfully!</div>}
                    <h2>{quiz?.number}</h2>
                    {currentUser.role === 'FACULTY' && (
                        <div className="alert alert-warning border-0" role="alert" style={{ backgroundColor: '#fae0d8', color: 'black' }}>
                            <BiErrorCircle /> This is a preview of the published version of the quiz
                        </div>
                    )}
                    <p>Started: {formatDate(startedAt)}</p>
                    <h4>Quiz Instructions</h4>
                    <hr />
                    {currentQuestion && (
                        <div className="d-flex mt-4 align-items-start">
                            <LiaHandPointRightSolid style={{ fontSize: '1.5rem', marginRight: '10px', marginTop: '10px' }} />
                            <div className="card flex-grow-1" style={{ minWidth: '500px' }}>
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">{currentQuestion.title}</h5>
                                    <span>{currentQuestion.points} pts</span>
                                </div>
                                <div className="card-body">
                                    <p>{currentQuestion.question}</p>
                                    {currentQuestion.type === 'Multiple Choice' && currentQuestion.choices && (
                                        <div>
                                            {currentQuestion.choices.map((option: string, idx: number) => (
                                                <div key={idx} className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={currentQuestion._id}
                                                        value={option}
                                                        checked={selectedAnswers[currentQuestion._id] === option}
                                                        onChange={() => handleAnswerChange(currentQuestion._id, option)}
                                                    />
                                                    <label className="form-check-label">
                                                        {option}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {currentQuestion.type === 'True/False' && (
                                        <div>
                                            {['True', 'False'].map((option, idx) => (
                                                <div key={idx} className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={currentQuestion._id}
                                                        value={option}
                                                        checked={selectedAnswers[currentQuestion._id] === option}
                                                        onChange={() => handleAnswerChange(currentQuestion._id, option)}
                                                    />
                                                    <label className="form-check-label">
                                                        {option}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {currentQuestion.type === 'Fill in the Blanks' && (
                                        <div className="form-group">
                                            {Object.keys(currentQuestion.answers).map((key, idx) => (
                                                <div key={idx} className="mb-3 d-flex align-items-center">
                                                    <label className="form-label me-2">{key}.</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        style={{ maxWidth: '300px' }}
                                                        value={(selectedAnswers[currentQuestion._id] as { [key: string]: string })?.[key] || ''}
                                                        onChange={(e) => handleAnswerChange(currentQuestion._id, {
                                                            ...(selectedAnswers[currentQuestion._id] as { [key: string]: string }),
                                                            [key]: e.target.value
                                                        })}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="mt-3 mb-3 d-flex justify-content-between " style={{ minWidth: '500px' }}>
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
                    <div className="border d-flex p-2 justify-content-between align-items-center" style={{ minWidth: '500px' }}>
                        <div className="ms-auto me-3">Quiz saved at {formatDate(startedAt)}</div>
                        <button
                            onClick={handleSubmitQuiz}
                            className="btn btn-secondary rounded-0"
                        >
                            Submit Quiz
                        </button>
                    </div>
                    {currentUser.role === 'FACULTY' && (
                        <>
                            <div className="border p-1 d-flex align-items-center mb-3 mt-5" style={{ backgroundColor: '#f0f0f0', color: 'black' }}>
                                <GrEdit className="ms-2 me-3" /> Keep Editing This Quiz   
                            </div>
                            <div>
                                <h5>Questions</h5>
                                <ul className="list-group mb-3">
                                    {quizQuestions.map((question: any, index: any) => (
                                        <li key={question._id} className="list-group-item d-flex align-items-center">
                                            <BsQuestionCircle className="me-2" />
                                            <a href={`#question${index}`} className="text-danger">{question.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
                <div className="col-md-3 mt-2 ms-3" style={{ minWidth: '500px' }}>
                    {currentUser.role === 'STUDENT' && (
                        <div className="d-none d-md-block float-end">
                            <h4>Questions</h4>
                            <ul className="list-group mb-3" style={{ maxWidth: '150px' }}>
                                {quizQuestions.map((question: any, index: number) => (
                                    <li key={question._id} className="list-group-item d-flex align-items-center border-0">
                                        <BsQuestionCircle className="me-2" />
                                        <button
                                            className="btn btn-link p-0 text-danger"
                                            onClick={() => handleQuestionClick(index)}
                                        >
                                            {question.title}
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
                    )}
                </div>
            </div>
        </div>
    );
}
