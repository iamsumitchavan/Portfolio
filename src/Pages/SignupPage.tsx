import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const handleSubmitSignupForm = (values: {
    full_name: string;
    email: string;
    password: string;
  }) => {
    console.log("password is ", values.password);
    axios
      .post("https://myeasykart.codeyogi.io/signup", {
        fullName: values.full_name,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("token", token);
      });
  };

  const schema = Yup.object().shape({
    full_name: Yup.string().min(12).max(24).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(8).required(),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null!],
      "Passwords must match"
    ),
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,

    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmitSignupForm,
  });
  return (
    <>
      <div className="flex h-screen justify-center items-center ">
        <form onSubmit={handleSubmit} className="p-20 shadow-xl">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold py-4 ">Sign Up Page</h1>
          </div>
          <div className="py-3 flex flex-col">
            <label className="sr-only" htmlFor="fullname">
              fullname
            </label>
            <input
              placeholder="fullname"
              autoComplete="name"
              id="fullname"
              name="full_name"
              className="border border-black p-2 w-64 rounded-lg"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.full_name}
            />
            {touched.full_name && errors && <span>{errors.full_name}</span>}
          </div>
          <div className="py-3 flex flex-col">
            <label className="sr-only" htmlFor="email">
              email
            </label>
            <input
              placeholder="email"
              autoComplete="email"
              id="email"
              name="email"
              className="border border-black p-2 w-64 rounded-lg"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors && <span>{errors.email}</span>}
          </div>

          <div className="py-3 flex flex-col">
            <label className="sr-only" htmlFor="password">
              password
            </label>
            <input
              placeholder="password"
              autoComplete="password"
              id="password"
              name="password"
              className="border border-black p-2 w-64 rounded-lg"
              type="password"
            />
            {touched.password && errors && <span>{errors.password}</span>}
          </div>
          <div className="py-3 flex flex-col">
            <label className="sr-only" htmlFor="confirm_password">
              confirmpassowrd
            </label>
            <input
              placeholder="password"
              autoComplete="password"
              id="confirm_password"
              name="confirm_password"
              className="border border-black p-2 w-64 rounded-lg"
              type="password"
            />
            {touched.confirm_password && errors && (
              <span>{errors.confirm_password}</span>
            )}
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <button
              className="bg-indigo-700 text-white p-2 w-52 rounded-lg"
              type="submit"
            >
              signin
            </button>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <p className="text-sm font-bold text-indigo-700">
                already sign in ?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
