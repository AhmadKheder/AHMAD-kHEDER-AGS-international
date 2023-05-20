import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional props specific to your button component
  // For example, you can add a custom class name or style
  customClassName?: string;
  customStyle?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  customClassName,
  customStyle,
  ...rest
}) => {
  return (
    <button
      className={`button ${customClassName}`}
      style={{ padding: "10px 20px", border: "none", ...customStyle }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
