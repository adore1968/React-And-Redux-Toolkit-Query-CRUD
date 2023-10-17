import { SetTaskPayload, Task } from "@/utils/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  task: Task;
}

const taskInitialState = {
  title: "",
  description: "",
  completed: false,
};

const initialState: InitialState = {
  task: taskInitialState,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<SetTaskPayload>) => {
      const { name, value, checked } = action.payload;
      if (name === "completed") {
        return { ...state, task: { ...state.task, completed: checked } };
      }
      return { ...state, task: { ...state.task, [name]: value } };
    },
    setGetTask: (state, action: PayloadAction<Task>) => {
      const task = action.payload;
      return { ...state, task };
    },
    resetTask: (state) => {
      return { ...state, task: taskInitialState };
    },
  },
});

export default tasksSlice.reducer;
export const { setTask, setGetTask, resetTask } = tasksSlice.actions;
