import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Spec: "buttonStyle": "border-2 border-current", "radius": "rounded-lg"
  const baseStyles = "relative px-8 py-3 rounded-lg font-serif font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group shadow-sm hover:shadow-md active:scale-[0.98] border-2";
  
  const variants = {
    primary: "bg-primary text-secondary border-primary hover:bg-secondary hover:text-primary",
    secondary: "bg-secondary text-primary border-secondary hover:bg-white hover:border-white",
    outline: "bg-transparent text-primary border-primary hover:bg-primary hover:text-secondary",
    ghost: "bg-transparent text-textMain border-transparent hover:text-primary hover:bg-primary/5 p-0",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};