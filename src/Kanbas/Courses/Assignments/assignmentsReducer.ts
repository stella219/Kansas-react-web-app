import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: { title: "", description: "", points: 0, due: "", available: "", until: "" },
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
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map(
        (assignment) => (assignment._id === action.payload._id ? action.payload : assignment)
      );
    },
    setAssignment: (state, action) => {
        state.assignments = action.payload;
    },
    editAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.map((a) =>
          a._id === assignmentId ? { ...a, editing: true } : a
        );
      }
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, editAssignment} = assignmentsReducer.actions;
export default assignmentsReducer.reducer;
