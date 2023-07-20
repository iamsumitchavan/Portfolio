import { FC } from "react";
import FormikHoc from "./FormikHoc";
import { memo } from "react";

type InputProps = {
  id: string;
  label: string;
  name: string;
  className: string;
  error: string;
  touched: boolean;
};

export const Input: FC<InputProps> = ({
  id,
  label,
  name,
  className,
  error,
  touched,
  ...rest
}) => {
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <label className="sr-only" htmlFor={id}>
            {label}
          </label>
          <input id={id} name={name} className={className} {...rest} />
          {touched && error && <span className="text-red-500">{error}</span>}
        </div>
      </div>
    </div>
  );
};

const HOCInput = FormikHoc(Input);

export default memo(HOCInput);
