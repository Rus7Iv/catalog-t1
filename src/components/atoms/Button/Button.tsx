import React from 'react';
import './Button.styles.css';

interface ButtonProps {
  typeBtn: 'filled' | 'outlined' | 'flat';
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({ typeBtn, children, isActive = false, className = '', onClick }: ButtonProps) => {
  const buttonStyle = `button--${typeBtn}${isActive && typeBtn === 'filled' ? ' button--active' : ''}`
  return (
    <button className={`button ${buttonStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
