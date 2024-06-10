import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

//Function to post new course to server 
export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
  };

//Function to delete course from server and returns the status responses from the server
export const deleteCourse = async (id: string) => {
    const response = await axios.delete(`${COURSES_API}/${id}`);
    return response.data;
};

//Function to update course on the server and returns the status responses from the server
export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course.id}`, course);
    return response.data;
  };
  
  