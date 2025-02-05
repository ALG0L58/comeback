import React from 'react';

import '../../styles/Header.css'

interface HeaderProps {
    todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
    <div className="header_container">
        <div className='header_title'>
            Todo list <b>{todoCount}</b> tasks
        </div>
    </div>
)
