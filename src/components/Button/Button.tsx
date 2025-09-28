import type { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  className = "",
  children = <>BOOK A CALL</>,
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={
        "book-btn border-1 border-[#7584FE] p-2 px-5 text-[#efefef] rounded-full font-bold shadow-md  outline-none cursor-pointer " +
        className
      }
    >
      {children}
    </button>
  );
}

export default Button;
