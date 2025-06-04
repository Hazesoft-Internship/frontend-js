"use client";

type ButtonProps = {
  value: string;
  onClick: () => void;
  style: React.CSSProperties;
};

const Button = ({ value, onClick, style }: ButtonProps) => {
  return (
    <button style={{ ...style }} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
