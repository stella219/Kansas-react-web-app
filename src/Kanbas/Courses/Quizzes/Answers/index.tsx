import React, {useState, useEffect} from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import { useParams } from 'react-router';
import { GrEdit } from 'react-icons/gr';
import {BsFillPlayFill} from 'react-icons/bs';
import { quizzes, questions } from "../../../Database";
import { LiaHandPointRightSolid } from 'react-icons/lia'; // Ensure this import is correct based on your icon library

//Function to calculate the time taken in minutes
const calculateTimeTaken = (start:any, end:any) => {
    return Math.round((end.getTime() - start.getTime()) / 60000);
}

//Function to calculate the score
const calculateScore = (quizQuestions: any) => {
    return quizQuestions.reduce((total:any, question:any) => {
        if (question.correct_answer) {
            total += question.points;
        }
        return total;
    },0);
};

export default function QuizAnswerScore() {
    const { cid, qid } = useParams();
    const quiz = quizzes.find((quiz: any) => quiz._id === qid);
    const quizQuestions = quiz ? questions.filter((question) => quiz.questions.includes(question._id)) : [];
    
    // Simulate starting and ending time of the quiz
    const [startedAt] = useState(new Date());
    const [endedAt] = useState(new Date(startedAt.getTime() + 20 * 60000)); // Simulate 20 minutes later

    // Calculate the time taken
    const timeTaken = calculateTimeTaken(startedAt, endedAt);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-9">
                    <h2>Q1</h2>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div>
                            <span><strong>Due</strong> May 17 at 8:59pm &nbsp;&nbsp; &nbsp; <strong>Points</strong> 23 &nbsp;&nbsp; &nbsp;
                            <strong>Questions</strong> 6 &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; <strong>Time Limit</strong> 30 Minutes 
                            </span>
                            <br />
                            <span><strong>Available</strong> May 12 at 9pm&nbsp;&nbsp;&nbsp;<strong>Until</strong> May 17 at 8:59pm</span>
                        </div>
                    </div>
                    <hr />
                    <div className = "mt-5">
                        <span>This quiz has been locked May 17 at 8:59pm.</span>
                    </div>
                    <div className="mt-5">
                        <h4>Attempt History</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope = "col"></th>
                                    <th scope="col">Attempt</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>LATEST</td>
                                    <td>Attempt 1</td>
                                    <td>20 minutes</td>
                                    <td>29 out of 29</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="ms-3">
                            <p>Score for this quiz: 29 out of 29 <br />
                                Submitted May 14 at 6:23pm<br />
                                This attempt took 20 minutes.</p>
                        </div>
                    </div>
                    <div className="position-relative mt-4">
                        <div className="card rounded-0">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Question 1</h5>
                                <span>1 / 1 pts</span>
                            </div>
                            <div className="card-body">
                            <p>Which of the following is the primary advantage of a liquid rocket engine over a solid rocket engine?</p>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="question1" id="option1" checked disabled/>
                                        <label className="form-check-label" htmlFor="option1">
                                            Higher specific impulse
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="question1" id="option2" disabled/>
                                        <label className="form-check-label" htmlFor="option2">
                                            Lower cost
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="question1" id="option3" disabled/>
                                        <label className="form-check-label" htmlFor="option3">
                                            Simpler design
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="question1" id="option4" disabled/>
                                        <label className="form-check-label" htmlFor="option4">
                                            Shorter burn time
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute" style={{ left: '-80px', top: '100px' }}>
                            <div className="badge bg-success p-2">Correct!</div>
                        </div>
                    </div>
                    <hr />
                    <div className="col d-flex justify-content-between">
                        <button className="border-0 rounded-0 btn btn-md btn-secondary"><BsFillPlayFill style={{ transform: 'rotate(180deg)' }}/>Previous</button>
                        <button className="border-0 rounded-0 btn btn-md btn-secondary">Next <BsFillPlayFill /></button>
                    </div>
                </div>
                <div className="col-md-3 mt-2 ">
                    <div className="d-none d-md-block float-end">
                        <h4>Submission Details:</h4>
                        <hr />
                        <p><strong>Time:</strong> 20 minutes</p>
                        <p><strong>Current Score: </strong> 29 out of 29</p>
                        <p><strong>Kept Score:</strong> 29 out of 29</p>
                    </div>
                </div>   
            </div>
        </div>
    );
}
