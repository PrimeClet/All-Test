import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserDetails from './components/UserDetails';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './components/TaskList';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [userId, setUserId] = useState(1);

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  return (
      <div className="App container py-2">
          <div className="row justify-content-start mt-1">
              <div className="col-6">
                  <input
                      type="number"
                      value={userId}
                      onChange={handleInputChange}
                      placeholder="Enter user ID"
                  />
                  <UserDetails userId={userId}/>
              </div>
              <div className="col-6">
                  <Provider store={store}>
                      <div>
                          <h1>Task Manager</h1>
                          <TaskList/>
                      </div>
                  </Provider>
              </div>
          </div>

      </div>
  );
}

export default App;
