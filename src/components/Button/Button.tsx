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
        "book-btn text-xl border-1 border-[#7584FE] p-3 px-7 text-[#efefef] rounded-full font-bold shadow-md  outline-none cursor-pointer " +
        className
      }
    >
      {children}
    </button>
  );
}

export default Button;
