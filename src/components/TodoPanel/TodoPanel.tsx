import React from 'react';
import { Button } from '../Button/Button'

import '../../styles/TodoPanel.css'
import { Todo } from '../../types/Todo';

const DEFAULT_TODO = {
    name: '',
    description: ''
}


interface AddTodoPanelProps {
    mode: 'add';
    addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
  }
  
interface EditTodoPanelProps {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>;
    changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
    const isEdit = props.mode === 'edit';
    const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);
        
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    }

    const onClick = () => {
        if (isEdit) {
            return props.changeTodo(todo);
          }
          props.addTodo(todo);
        setTodo(DEFAULT_TODO)
    }

    return (
        <div className='todo_panel_container'>
            <div className="fields_container">
                <div className='field_container'>
                    <label htmlFor="name">
                        <div>name</div>
                        <input type="text" id='name' value={todo.name} name='name' onChange={onChange}/>
                    </label>
                </div>
                <div className='field_container'>
                    <label htmlFor="description">
                        <div>description</div>
                        <input type="text" id='description' value={todo.description} name='description' onChange={onChange}/>
                    </label>
                </div>
            </div>
            <div className='button_container'>
                {!isEdit && (
                    <Button onClick={onClick}>
                        ADD
                    </Button>
                )}
                {isEdit && (
                    <Button onClick={onClick}>
                        EDIT
                    </Button>
                )}
            </div>
        </div>
    );
}
