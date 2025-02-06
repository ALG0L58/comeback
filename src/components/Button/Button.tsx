import React from 'react';

import '../../styles/Button.css'


    
interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    
  }
  
  export const Button: React.FC<ButtonProps> = ({children, onClick }) => {
  
    return (
      <button className= 'button_blue' onClick={onClick}>
        {children}
      </button>
    );
    
  };
