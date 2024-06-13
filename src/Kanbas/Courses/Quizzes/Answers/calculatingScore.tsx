import { quizHistory } from "../../../Database";

export const calculateScore = (quizQuestions: any, studentAnswers: any) => {
    let score = 0;
    quizQuestions.forEach((question: any) => {
        const studentAnswer = studentAnswers.find((ans: any) => ans.questionId === question._id);
        if (studentAnswer) {
            if (question.type === 'Fill in the Blanks') {
                const correctAnswers = question.correct_answer;
                for (const [key, value] of Object.entries(correctAnswers)) {
                    if (studentAnswer.answers[key] === value) {
                        score += 1; // Each correct blank is worth 1 point
                    }
                }
            } else {
                if (studentAnswer.answer === question.correct_answer) {
                    score += question.points;
                }
            }
        }
    });
    return score;
};

export const fetchStudentAnswers = (userId: any, quizId: any) => {
    const userHistory = quizHistory.find((history:any) => history.user === userId && history.quiz === quizId);
    if (userHistory) {
        return userHistory.answers || [];
    }
    return [];
};

export const calculateTotalPoints = (quizQuestions: any) => {
    return quizQuestions.reduce((total: any, question: any) => {
        if (question.type === 'Fill in the Blanks') {
            return total + Object.keys(question.correct_answer).length; // Each blank is worth 1 point
        }
        return total + question.points;
    }, 0);
};
