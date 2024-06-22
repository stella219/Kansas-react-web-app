import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;
const RECORDS_API = `${REMOTE_SERVER}/api/records`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// fetch all quizzes for a course
export const findQuizzesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
}

// fetch all questions for a quiz
export const findQuestionsForQuiz = async (quizId: string) => {
    const response = await axios.get(`${QUIZZES_API}/${quizId}/questions`);
        return response.data;
}

//fetch individual questions by ID
export const findQuestionById = async (questionId: string) => {
    const response = await axios.get(`${QUESTIONS_API}/${questionId}`);
    return response.data;
}
// fetch all records for a quiz
export const findRecordForQuiz = async (quizId: string, userId: string) => {
    const response = await axios.get(`${RECORDS_API}/${quizId}/${userId}`);
    return response.data;
}

// create a record for a quiz
export const createRecordForQuiz = async (quizId: string, userId: string, record: any) => {
    const response = await axios.post(`${RECORDS_API}/${quizId}/${userId}`, record);
    return response.data;
}


// fetch details of a quiz
export const findQuizDetails = async (cid: string, quizId: string) => {
    console.log('cid:', cid, 'quizId:', quizId)
    const response = await axios.get(`${COURSES_API}/${cid}/quizzes/${quizId}`);
    return response.data;
};

