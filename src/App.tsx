import React from 'react';
import './styles/App.css';
import { Header } from './components/header/Header'
import { TodoPanel } from './components/TodoPanel/TodoPanel'
import { TodoList } from './components/TodoList/TodoList'
import { Todo } from './types/Todo';



const DEFAULT_TODO_LIST = [
  {id: 1, name: 'task1', description: 'desicriptions1', checked: false},
  {id: 2, name: 'task2', description: 'desicriptions2', checked: false},
  {id: 3, name: 'task3', description: 'desicriptions3', checked: true}
]


function App  ()  {
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  const selectTodoIdForEdit = (id: Todo['id']) => {
    setTodoIdForEdit(id);
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }]);
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const changeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  return (
    <div className='app_container'>
      <div className='container'>
        <Header todoCount={todos.length} />
        <TodoPanel mode='add' addTodo={addTodo} />
        <TodoList
          todoIdForEdit={todoIdForEdit}
          todos={todos}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
};

export default App;