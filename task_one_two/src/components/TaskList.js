import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksRequest, addTaskRequest, updateTaskRequest, removeTaskRequest } from '../actions/taskActions';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const loading = useSelector(state => state.tasks.loading);
    const error = useSelector(state => state.tasks.error);

    const [taskName, setTaskName] = useState('');

    useEffect(() => {
        dispatch(fetchTasksRequest());
    }, [dispatch]);

    const handleAddTask = () => {
        const newTask = { userId: 1, todo: taskName, completed: false };
        dispatch(addTaskRequest(newTask));
        alert("Task was added successfully!");
        setTaskName('');
    };

    const handleUpdateTask = (task) => {
        dispatch(updateTaskRequest({ ...task, completed: !task.completed }));
        alert("task was updated sucessfully!");
    };

    const handleRemoveTask = (taskId) => {
        dispatch(removeTaskRequest(taskId));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Task List</h1>
            <ul style={{textAlign: "left"}}>
                {tasks.todos?.map(task => (
                    <li key={task.id}>
            <span
                style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                onClick={() => handleUpdateTask(task)}
            >
              {task.todo}
            </span>
                        <button className=" mx-3 btn btn-outline-danger my-2 btn-sm"
                                onClick={() => handleRemoveTask(task.id)}>Remove
                        </button>
                    </li>
                ))}
            </ul>

            <br/>
            <h2>Task ADD</h2>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter task name"
                    required
                />
                <button type="submit">Add Task</button>
            </form>
            <button className=" btn btn-outline-success my-2" onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskList;