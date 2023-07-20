import { FC } from "react";

type ButtonProps = {
  title: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <div>
      <button
        type="submit"
        className="md:p-2 py-3 md:w-36 rounded-lg bg-green-600 text-black font-normal w-full p-2"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
