import { useField } from "formik";
import { FC } from "react";

type FormikInputProps = {
  name: string;
  className: string;
  label: string;
  placeholder: string;
  type: string;
  id: string;
};

const FormikInput: FC<FormikInputProps> = ({
  name,
  className,
  label,
  placeholder,
  type,
  id,
  ...rest
}) => {
  const field = useField(name);
  const [data, meta] = field;
  const { onBlur, onChange, value } = data;
  const { error, touched } = meta;

  return (
    <div>
      <div>
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={className}
          placeholder={placeholder}
          name={name}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          {...rest}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default FormikInput;
