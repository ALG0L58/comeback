import React from 'react';
import './styles/App.css';

const DEFAULT_TODO_LIST = [
  {id: 1, name: 'task1', desicriptions: 'desicriptions1', checked: false},
  {id: 2, name: 'task2', desicriptions: 'desicriptions2', checked: false},
  {id: 3, name: 'task3', desicriptions: 'desicriptions3', checked: true}
]



function App() {
  

  return (
    <div className='app_container'>
      <div className="container">todos</div>
    </div>
  );
}

export default App;
