import './Button.styles.css';

interface ButtonProps {
  typeBtn: 'filled' | 'outlined' | 'flat';
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const Button = ({ typeBtn, children, isActive = false, className = '' }: ButtonProps) => {
  const buttonStyle = typeBtn === 'filled' && isActive ? 'active' : typeBtn;
  return (
    <button className={`button-container ${buttonStyle} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
