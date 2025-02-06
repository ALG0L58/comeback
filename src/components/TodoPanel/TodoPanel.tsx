import React from 'react';
import { Button } from '../Button/Button'

import '../../styles/TodoPanel.css'

const DEFAULT_TODO = {
    name: '',
    description: ''
}

export const TodoPanel = () => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO)
        console.log(todo);
        
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
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
                <Button>ADD</Button>
            </div>
        </div>
    );
}
