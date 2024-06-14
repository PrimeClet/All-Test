import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILURE,
    REMOVE_TASK_REQUEST,
    REMOVE_TASK_SUCCESS,
    REMOVE_TASK_FAILURE,
} from '../actions/taskActions';

// API calls (replace with actual API URLs)
const fetchTasksApi = () => fetch('https://dummyjson.com/todos?limit=5&skip=10').then(response => response.json());
const addTaskApi = (task) => fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    body: JSON.stringify(task),
    headers: { 'Content-Type': 'application/json' }
}).then(response => response.json());
const updateTaskApi = (task) => fetch(`https://dummyjson.com/todos/${task.id}`, {
    method: 'PUT',
    body: JSON.stringify({
        completed: true,
    }),
    headers: { 'Content-Type': 'application/json' }
}).then(response => response.json());
const removeTaskApi = (taskId) => fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'DELETE',
}).then(response => response.json());

// Worker sagas
function* fetchTasks() {
    try {
        const tasks = yield call(fetchTasksApi);
        yield put({ type: FETCH_TASKS_SUCCESS, payload: tasks });
    } catch (error) {
        yield put({ type: FETCH_TASKS_FAILURE, payload: error.message });
    }
}

function* addTask(action) {
    try {
        const newTask = yield call(addTaskApi, action.payload);
        yield put({ type: ADD_TASK_SUCCESS, payload: newTask });
    } catch (error) {
        yield put({ type: ADD_TASK_FAILURE, payload: error.message });
    }
}

function* updateTask(action) {
    try {
        const updatedTask = yield call(updateTaskApi, action.payload);
        yield put({ type: UPDATE_TASK_SUCCESS, payload: updatedTask });
    } catch (error) {
        yield put({ type: UPDATE_TASK_FAILURE, payload: error.message });
    }
}

function* removeTask(action) {
    try {
        yield call(removeTaskApi, action.payload);
        yield put({ type: REMOVE_TASK_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: REMOVE_TASK_FAILURE, payload: error.message });
    }
}

// Watcher sagas
function* watchFetchTasks() {
    yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
}

function* watchAddTask() {
    yield takeEvery(ADD_TASK_REQUEST, addTask);
}

function* watchUpdateTask() {
    yield takeEvery(UPDATE_TASK_REQUEST, updateTask);
}

function* watchRemoveTask() {
    yield takeEvery(REMOVE_TASK_REQUEST, removeTask);
}

// Root saga
export default function* rootSaga() {
    yield all([
        watchFetchTasks(),
        watchAddTask(),
        watchUpdateTask(),
        watchRemoveTask(),
    ]);
}