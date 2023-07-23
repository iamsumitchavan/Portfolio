import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import HOCInput from "../Component/Input";
import Button from "../Component/Button";

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

  const initialValues = {
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  return (
    <>
      <div className="lg:flex lg:h-screen lg:flex-col lg:justify-center lg:items-center py-2 flex flex-col justify-center items-center h-screen fixed right-0 top-0 left-0 bottom-0 ">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmitSignupForm}
        >
          <Form className="md:p-20 md:shadow-md md: outline-slate-300 object-cover px-20 ">
            <div className="py-5">
              <h1 className="text-black font-bold text-4xl text-center ">
                Sign Up Page
              </h1>
            </div>
            <div className="py-3 flex flex-col">
              <HOCInput
                label="fullname"
                placeholder="fullname"
                id="fullname"
                name="full_name"
                className="cursor-pointer shadow rounded-lg appearance-none focus:bg-white focus:outline-none border-2 md:rounded sm:w-80 w-72 md:py-2 py-3 px-3 text-gray-700 leading-tight focus:border-purple-500"
                type="text"
              />
            </div>
            <div className="py-3 flex flex-col">
              <HOCInput
                placeholder="email"
                label="email"
                id="email"
                name="email"
                className="cursor-pointer shadow rounded-lg appearance-none focus:bg-white focus:outline-none border-2 md:rounded sm:w-80 w-72 md:py-2 py-3 px-3 text-gray-700 leading-tight focus:border-purple-500"
                type="email"
              />
            </div>

            <div className="py-3 flex flex-col">
              <HOCInput
                label="password"
                placeholder="password"
                id="password"
                name="password"
                className="cursor-pointer shadow rounded-lg appearance-none focus:bg-white focus:outline-none border-2 md:rounded sm:w-80 w-72 md:py-2 py-3 px-3 text-gray-700 leading-tight focus:border-purple-500"
                type="password"
              />
            </div>
            <div className="py-3 flex flex-col">
              <HOCInput
                label="confirmpassowrd"
                placeholder="password"
                id="confirm_password"
                name="confirm_password"
                className="cursor-pointer shadow rounded-lg appearance-none focus:bg-white focus:outline-none border-2 md:rounded sm:w-80 w-72 md:py-2 py-3 px-3 text-gray-700 leading-tight focus:border-purple-500"
                type="password"
              />
            </div>
            <div className="py-2  md:flex md:flex-col md:justify-end md:items-end  ">
              <Button title="sign up" />
            </div>
            <div className="flex space-x-4 justify-end">
              <Link to="/login">
                <p className="text-sm font-bold text-indigo-700">
                  already sign in ?
                </p>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default SignupPage;
