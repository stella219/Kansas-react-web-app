import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { quizzes, questions, quizHistory } from "../../../Database";
import AnswerFeedback from './answerFeedback';
import { calculateScore, fetchStudentAnswers, calculateTotalPoints } from './calculatingScore';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
};

const calculateQuestionScore = (question: any, studentAnswer: any) => {
    if (question.type === 'Fill in the Blanks') {
        const correctAnswers = question.correct_answer;
        let score = 0;
        for (const [key, value] of Object.entries(correctAnswers)) {
            if (studentAnswer.answers && studentAnswer.answers[key] === value) {
                score += 1;
            }
        }
        return score;
    } else if (studentAnswer.answer === question.correct_answer) {
        return question.points;
    } else {
        return 0;
    }
};

export default function QuizAnswerScore() {
    const { cid, qid } = useParams<{ cid: string; qid: string }>();
    const quiz = quizzes.find((quiz) => quiz._id === qid);
    const quizQuestions = quiz ? questions.filter((question) => quiz.questions.includes(question._id)) : [];

    const query = useQuery();
    const userId = "121";  // Replace this with dynamic user ID as needed
    const userQuizHistory = quizHistory.find(history => history.user === userId && history.quiz === qid);

    const startedAt = userQuizHistory?.startedAt;
    const submittedAt = userQuizHistory?.submittedAt;
    
    const totalPoints = calculateTotalPoints(quizQuestions);
    const studentAnswers = fetchStudentAnswers(userId, qid || "");
    const studentScore = calculateScore(quizQuestions, studentAnswers);

    const timeTaken = userQuizHistory?.timeTaken || "N/A";

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-9 mb-3">
                    <h2>{quiz?.title}</h2>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div>
                            <span>
                                <strong>Due</strong> {formatDate(quiz?.due_date)} &nbsp;&nbsp; &nbsp;
                                <strong>Points</strong> {totalPoints} &nbsp;&nbsp; &nbsp;
                                <strong>Questions</strong> {quiz?.questions.length} &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
                                <strong>Time Limit</strong> {quiz?.time_limit}
                            </span>
                            <br />
                            <span>
                                <strong>Available</strong> {formatDate(quiz?.available_date)}&nbsp;&nbsp;&nbsp;
                                <strong>Until</strong> {formatDate(quiz?.until_date)}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-5">
                        <span>This quiz has been locked {formatDate(quiz?.until_date)}.</span>
                    </div>
                    <div className="mt-5">
                        <h4>Attempt History</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Attempt</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>LATEST</td>
                                    <td>Attempt 1</td>
                                    <td>{timeTaken}</td>
                                    <td>{studentScore} out of {totalPoints}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="ms-3">
                            <p>Score for this quiz: {studentScore} out of {totalPoints} <br />
                                Submitted {formatDate(submittedAt)}<br />
                                This attempt took {timeTaken}.
                            </p>
                        </div>
                    </div>
                    {quizQuestions.map((question, index) => {
                        const studentAnswer = studentAnswers.find((ans:any) => ans.questionId === question._id);
                        const questionScore = studentAnswer ? calculateQuestionScore(question, studentAnswer) : 0;
                        return (
                            <div key={index} className="position-relative mt-4">
                                <div className="card rounded-0">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">{question.name}</h5>
                                        <span>{questionScore} / {question.points} pts</span>
                                    </div>
                                    <div className="card-body">
                                        <p>{question.question_text}</p>
                                        <div className="ms-3">
                                            {studentAnswer && <AnswerFeedback question={question} studentAnswer={studentAnswer} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <br /><br/>
                </div>
                <div className="col-lg-3 mt-2">
                    <div className="d-none d-md-block float-end">
                        <h4>Submission Details:</h4>
                        <hr />
                        <p><strong>Time:</strong> {timeTaken}</p>
                        <p><strong>Current Score: </strong> {studentScore} out of {totalPoints}</p>
                        <p><strong>Kept Score:</strong> {studentScore} out of {totalPoints}</p>
                    </div>
                </div>   
            </div>
        </div>
    );
}
