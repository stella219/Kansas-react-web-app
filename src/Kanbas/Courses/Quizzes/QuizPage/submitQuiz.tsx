import { calculateScore } from "../Answers/calculatingScore"; // Adjust the import path as necessary
import { quizHistory } from "../../../Database";

export const submitQuiz = (currentUser: any, cid: string, qid: string, startedAt: string, selectedAnswers: any, quizQuestions: any, history: any) => {
    const submittedAt = new Date().toISOString();
    const timeTakenSeconds = (new Date(submittedAt).getTime() - new Date(startedAt).getTime()) / 1000;
    const score = calculateScore(quizQuestions, Object.keys(selectedAnswers).map(questionId => ({
        questionId,
        answer: selectedAnswers[questionId]
    })));
    const newQuizHistory = {
        user: currentUser._id,
        role: currentUser.role,
        course: cid,
        quiz: qid,
        attempt: 1,
        startedAt,
        submittedAt,
        timeTaken: `${timeTakenSeconds} seconds`,
        score,
        answers: Object.keys(selectedAnswers).map(questionId => ({
            questionId,
            answer: selectedAnswers[questionId]
        }))
    };

    // Add newQuizHistory to quizHistory data file
    quizHistory.push(newQuizHistory);

    history.push(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Answers`);
};
