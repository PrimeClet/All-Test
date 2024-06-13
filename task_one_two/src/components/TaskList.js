import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksRequest, addTaskRequest, updateTaskRequest, removeTaskRequest } from '../actions/taskActions';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.todos);
    const loading = useSelector(state => state.tasks.loading);
    const error = useSelector(state => state.tasks.error);

    console.log(tasks)

    useEffect(() => {
        dispatch(fetchTasksRequest());
    }, [dispatch]);

    const handleAddTask = () => {
        const newTask = { id: Date.now(), name: 'New Task', completed: false };
        dispatch(addTaskRequest(newTask));
    };

    const handleUpdateTask = (task) => {
        dispatch(updateTaskRequest({ ...task, completed: !task.completed }));
    };

    const handleRemoveTask = (taskId) => {
        dispatch(removeTaskRequest(taskId));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Task List</h1>
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks?.map(task => (
                    <li key={task.id}>
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => handleUpdateTask(task)}
            >
              {task.todo}
            </span>
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;