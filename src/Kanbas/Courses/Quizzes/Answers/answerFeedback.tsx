import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface AnswerFeedbackProps {
    question: any;
    studentAnswer: any;
}

const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({ question, studentAnswer }) => {
    const correctAnswers = question.correct_answer;

    if (question.type === 'Fill in the Blanks') {
        return (
            <div>
                {Object.keys(correctAnswers).map((key, idx) => (
                    <div key={idx} className="mb-3 d-flex align-items-center">
                        <FaTimesCircle className={`me-2 ${studentAnswer.answers && studentAnswer.answers[key] !== correctAnswers[key] ? 'text-danger' : 'd-none'}`} />
                        <FaCheckCircle className={`me-2 ${studentAnswer.answers && studentAnswer.answers[key] === correctAnswers[key] ? 'text-success' : 'd-none'}`} />
                        <label className="form-label me-1">{key}.</label>
                        <div className="d-flex align-items-center" style={{ width: '100%' }}>
                            <input type="text" className="form-control" disabled value={studentAnswer.answers ? studentAnswer.answers[key] : ''} style={{ maxWidth: '300px' }} />  
                        </div>
                    </div>
                ))}
                {Object.keys(correctAnswers).some(key => studentAnswer.answers && studentAnswer.answers[key] !== correctAnswers[key]) && (
                    <div>
                        <strong>Correct Answer:</strong>
                        {Object.keys(correctAnswers).map((key, idx) => (
                            studentAnswer.answers && studentAnswer.answers[key] !== correctAnswers[key] && (
                                <div key={idx} className="mb-3 d-flex align-items-center">
                                    <label className="form-label me-2">{key}.</label>
                                    <input type="text" className="form-control" disabled value={correctAnswers[key]} style={{ maxWidth: '300px' }} />
                                </div>
                            )
                        ))}
                    </div>
                )}
            </div>
        );
    } else if (question.type === 'True/False') {
        const options = ["True", "False"];
        return (
            <div>
                {options.map((option, idx) => (
                    <div key={idx} className="form-check d-flex align-items-center">
                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                            {studentAnswer.answer === option && (
                                <>
                                    {option === correctAnswers ? (
                                        <FaCheckCircle className="text-success me-2" style={{ position: 'absolute', left: '-24px' }} />
                                    ) : (
                                        <FaTimesCircle className="text-danger me-2" style={{ position: 'absolute', left: '-24px' }} />
                                    )}
                                </>
                            )}
                            <input className="form-check-input ms-2 me-1" type="radio" name={`question-${question._id}`} disabled checked={studentAnswer.answer === option} />
                            <label className="form-check-label">
                                {option}
                            </label>
                        </div>
                    </div>
                ))}
                {studentAnswer.answer !== correctAnswers && (
                    <div className="mt-2">
                        <strong>Correct Answer:</strong>
                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input ms-2 me-2" type="radio" name={`question-${question._id}`} disabled />
                            <label className="form-check-label">
                                {correctAnswers}
                            </label>
                        </div>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>
                {question.options && question.options.map((option:any, idx:any) => (
                    <div key={idx} className="form-check d-flex align-items-center">
                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                            {studentAnswer.answer === option && (
                                <>
                                    {option === correctAnswers ? (
                                        <FaCheckCircle className="text-success me-2" style={{ position: 'absolute', left: '-24px' }} />
                                    ) : (
                                        <FaTimesCircle className="text-danger me-2" style={{ position: 'absolute', left: '-24px' }} />
                                    )}
                                </>
                            )}
                            <input className="form-check-input ms-2 me-1" type="radio" name={`question-${question._id}`} disabled checked={studentAnswer.answer === option} />
                            <label className="form-check-label">
                                {option}
                            </label>
                        </div>
                    </div>
                ))}
                {studentAnswer.answer !== correctAnswers && (
                    <div className="mt-2">
                        <strong>Correct Answer:</strong>
                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input ms-2 me-2" type="radio" name={`question-${question._id}`} disabled />
                            <label className="form-check-label">
                                {correctAnswers}
                            </label>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default AnswerFeedback;
