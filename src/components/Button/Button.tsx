import './Button.styles.css';

interface ButtonProps {
  typeBtn: 'filled' | 'outlined';
  children: React.ReactNode;
  isActive?: boolean;
}

const Button = ({ typeBtn, children, isActive = false }: ButtonProps) => {
  const buttonStyle = typeBtn === 'filled' && isActive ? 'active' : typeBtn;
  return (
    <button className={`button-container ${buttonStyle}`}>
      {children}
    </button>
  );
}

export default Button;
