import axios from "axios";
import * as client from "./client";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

//Implement getAssignment function shown below which retrieves the assignments for a given course
export const getAssignment = async (assignmentId: string) => {
    const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  };

export const updateAssignment = async (assignment:any) => {
    const response = await axios.
        put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios
      .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  }

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment );
    return response.data;
  };

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios
      .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
  };  