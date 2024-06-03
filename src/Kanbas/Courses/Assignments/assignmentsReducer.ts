import { createSlice} from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: { title: "", description: "", points: 0, due: "", available: "", until: ""},
};

const assignmentsReducer = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment: any) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map(
                (assignment:any) => {
                    return assignment._id === action.payload._id ? action.payload : assignment;
                }
            );
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    }
});

export const {addAssignment, deleteAssignment, updateAssignment, setAssignment} = assignmentsReducer.actions;
export default assignmentsReducer.reducer;