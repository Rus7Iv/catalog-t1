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
  const buttonStyle = typeBtn === 'filled' && isActive ? 'active' : typeBtn;
  return (
    <button className={`button-container ${buttonStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
