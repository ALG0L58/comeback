import React from 'react';
import './styles/App.css';
import { Header } from './components/header/Header'
import { TodoPanel } from './components/TodoPanel/TodoPanel'
import { TodoList } from './components/TodoList/TodoList'



const DEFAULT_TODO_LIST = [
  {id: 1, name: 'task1', description: 'desicriptions1', checked: false},
  {id: 2, name: 'task2', description: 'desicriptions2', checked: false},
  {id: 3, name: 'task3', description: 'desicriptions3', checked: true}
]

type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};




function App () {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST)

  const addTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }]);
  };

  return (
    <div className='app_container'>
      <div className="container">
        <Header todoCount={todos.length}/>
        <TodoPanel addTodo = { addTodo }/>
        <TodoList todos = {todos}/>
      </div>
    </div>
  );
}

export default App;
