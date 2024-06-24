import { findRecordByUserByQuiz, createRecordForUserForQuiz, updateRecordForQuiz } from '../client';
import { useNavigate } from 'react-router-dom';

// Define types
type Answer = {
    questionId: string;
    answer: string | { [key: string]: string };
    pointsEarned?: number; // New field to store points earned for each question
};

type QuizRecord = {
    user: string;
    role: string;
    course: string;
    quiz: string;
    attempt: number;
    startedAt: string;
    submittedAt: string;
    timeTaken: string;
    score: number;
    pointsForQuiz: number;
    answers: Answer[];
};

// Function to calculate the score for a single question
const calculateScoreForQuestion = (question: any, userAnswer: any): number => {
    const correctAnswer = question.answers;
    let pointsEarned = 0;

    if (question.type === 'Fill in the Blanks') {
        // Calculate points for each blank, handle undefined cases
        if (correctAnswer && userAnswer) {
            pointsEarned = Object.keys(correctAnswer).reduce((acc, key) => {
                return acc + (userAnswer[key] === correctAnswer[key] ? 1 : 0);
            }, 0);
        }
    } else if (question.type === 'Multiple Choice' || question.type === 'True/False') {
        // Compare directly for Multiple Choice and True/False
        if (correctAnswer && correctAnswer[0] !== undefined) {
            pointsEarned = userAnswer === correctAnswer[0] ? question.points : 0;
        }
    }

    return pointsEarned;
};

// Function to calculate the total points for all questions in the quiz
const calculatePointsForQuiz = (quizQuestions: any[]): number => {
    return quizQuestions.reduce((acc, question) => acc + question.points, 0);
};

export const submitQuiz = async (
    currentUser: any,
    cid: string,
    quizID: string,
    startedAt: string,
    selectedAnswers: any,
    quizQuestions: any,
    navigate: any
) => {
    const submittedAt = new Date().toISOString();
    const timeTakenSeconds = (new Date(submittedAt).getTime() - new Date(startedAt).getTime()) / 1000;
    const pointsForQuiz = calculatePointsForQuiz(quizQuestions);

    // Prepare answers and calculate points for each question
    const answers = quizQuestions.map((question: any) => {
        const userAnswer = selectedAnswers[question._id];
        const pointsEarned = calculateScoreForQuestion(question, userAnswer);
        return {
            questionId: question._id,
            answer: userAnswer,
            pointsEarned
        };
    });

    // Calculate total score
    const score = answers.reduce((acc: any, answer: any) => acc + (answer.pointsEarned || 0), 0);

    // Create new quiz history record
    const newQuizHistory: QuizRecord = {
        user: currentUser._id,
        role: currentUser.role.toLowerCase(),
        course: cid,
        quiz: quizID,
        attempt: 1,
        startedAt,
        submittedAt,
        timeTaken: `${Math.floor(timeTakenSeconds / 60)} minutes ${Math.floor(timeTakenSeconds % 60)} seconds`,
        score,
        pointsForQuiz,
        answers
    };

    try {
        const existingRecord = await findRecordByUserByQuiz(currentUser._id, quizID);
        if (existingRecord) {
            // Update the existing record
            const updatedRecord = {
                ...existingRecord,
                attempt: existingRecord.attempt + 1,
                startedAt,
                submittedAt,
                timeTaken: newQuizHistory.timeTaken,
                score,
                pointsForQuiz,
                answers
            };
            await updateRecordForQuiz(currentUser._id, quizID, updatedRecord);
        } else {
            // Create a new record
            await createRecordForUserForQuiz(newQuizHistory);
        }
        navigate(`/Courses/${cid}/Quizzes/${quizID}/Answers/${currentUser._id}`);
    } catch (error) {
        console.error("Error submitting quiz:", error);
    }
};
