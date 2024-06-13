export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

export const REMOVE_TASK_REQUEST = 'REMOVE_TASK_REQUEST';
export const REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS';
export const REMOVE_TASK_FAILURE = 'REMOVE_TASK_FAILURE';

export const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });
export const fetchTasksSuccess = (tasks) => ({ type: FETCH_TASKS_SUCCESS, payload: tasks });
export const fetchTasksFailure = (error) => ({ type: FETCH_TASKS_FAILURE, payload: error });

export const addTaskRequest = (task) => ({ type: ADD_TASK_REQUEST, payload: task });
export const addTaskSuccess = (task) => ({ type: ADD_TASK_SUCCESS, payload: task });
export const addTaskFailure = (error) => ({ type: ADD_TASK_FAILURE, payload: error });

export const updateTaskRequest = (task) => ({ type: UPDATE_TASK_REQUEST, payload: task });
export const updateTaskSuccess = (task) => ({ type: UPDATE_TASK_SUCCESS, payload: task });
export const updateTaskFailure = (error) => ({ type: UPDATE_TASK_FAILURE, payload: error });

export const removeTaskRequest = (taskId) => ({ type: REMOVE_TASK_REQUEST, payload: taskId });
export const removeTaskSuccess = (taskId) => ({ type: REMOVE_TASK_SUCCESS, payload: taskId });
export const removeTaskFailure = (error) => ({ type: REMOVE_TASK_FAILURE, payload: error });