import { FC } from "react";

type ButtonProps = {
  title: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ title }) => {
  let classname;

  if ((title = "login")) {
    classname = "md:w-36 lg:w-36 sm:w-36";
  } else if ((title = "sign up")) {
    classname = "md:80 lg:w-80 sm:w-80";
  }
  return (
    <div>
      <button
        type="submit"
        className={
          " md:p-2 py-3  md:rounded-lg rounded-sm hover:cursor-pointer active:bg-green-300 bg-green-400 text-black font-normal w-full p-2 " +
          classname
        }
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
