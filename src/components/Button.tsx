"use client";

type ButtonProps = {
  value: string;
  style: React.CSSProperties;
  onClick?: () => void;
};

const Button = ({ value, onClick, style }: ButtonProps) => {
  return (
    <button style={{ ...style }} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
