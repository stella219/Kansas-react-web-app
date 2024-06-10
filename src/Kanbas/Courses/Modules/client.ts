import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

//Add the createModule function shown below which creates a new module object in the dody and encode the courseID in the path.
export const createModule = async (courseId: string, module: any) => {
    const response = await axios.post( `${COURSES_API}/${courseId}/modules`, module );
    return response.data;
  };
  
//Implement findModulesForCourse function shown below which retrieves the modules for a given course
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

//deleteModule function send HTTP DELETE request to server to delete the module with the given moduleId
export const deleteModule = async (moduleId: string) => {
    const response = await axios
      .delete(`${MODULES_API}/${moduleId}`);
    return response.data;
  };

//updateModule function send HTTP PUT request to server to update the module with the given moduleId
export const updateModule = async (module: any) => {
    const response = await axios.
      put(`${MODULES_API}/${module._id}`, module);
    return response.data;
  };
  
  
