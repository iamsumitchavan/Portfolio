import { FC } from "react";
import { useField } from "formik";

const FormikHoc = (IncomingComponent: FC<any>) => {
  type OutgoingProps = {
    name: string;
    label: string;
    id: string;
    className: string;
    placeholder: string;
    type: string;
  };
  const OutgoingComponent: FC<OutgoingProps> = ({
    name,
    label,
    id,
    className,
    ...rest
  }) => {
    const field = useField(name);
    const [data, meta] = field;
    const { onBlur, onChange, value } = data;
    const { error, touched } = meta;

    console.log("touched is ", touched);
    return (
      <IncomingComponent
        name={name}
        id={id}
        className={className}
        label={label}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        error={error}
        touched={touched}
        {...rest}
      />
    );
  };

  return OutgoingComponent;
};

export default FormikHoc;
