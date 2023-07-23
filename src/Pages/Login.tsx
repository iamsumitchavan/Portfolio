import { Formik, Form } from "formik";
import { FC, useContext } from "react";
import * as Yup from "yup";
import Button from "../Component/Button";
import { memo } from "react";
import HOCInput from "../Component/Input";
import axios from "axios";
import { CountContexts } from "../Component/Contexts";
import { Link } from "react-router-dom";

type LoginPageProps = {};

const Login: FC<LoginPageProps> = ({}) => {
  const { setUser } = useContext(CountContexts);
  const handleCodeyogi = async (values: {
    email: string;
    password: string;
  }) => {
    await axios
      .post("https://myeasykart.codeyogi.io/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log("response is ", response);
        const { token, user } = response.data;
        localStorage.setItem("user", user);
        setUser(user);

        localStorage.setItem("token", token);
      })
      .catch(() => {});
  };
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(12).required(),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div
      className="
    lg:flex
    lg:h-screen
    lg:flex-col
    lg:justify-center
    lg:items-center
    py-2
    flex
    flex-col
    justify-center
    items-center
    h-screen
    fixed
    right-0
    top-0
    left-0
    bottom-0"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleCodeyogi}
        validationSchema={schema}
      >
        <Form className="md:p-20 md:shadow-md md: outline-slate-300 object-cover px-20 ">
          <div className="py-5 ">
            <h1 className="text-black font-bold text-4xl text-center">
              Log In Page
            </h1>
          </div>
          <div>
            <HOCInput
              label="email"
              id="email"
              className="cursor-pointer shadow rounded-lg appearance-none focus:bg-white focus:outline-none border-2 md:rounded sm:w-80 w-72 md:py-2 py-3 px-3 text-gray-700 leading-tight focus:border-purple-500"
              placeholder="Enter Email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <HOCInput
              label="password"
              id="password"
              className="cursor-pointer shadow rounded-lg appearance-none focus:bg-white focus:outline-none border-2 md:rounded sm:w-80 w-72 md:py-2 py-3 px-3 text-gray-700 leading-tight focus:border-purple-500"
              placeholder="Enter password"
              name="password"
              type="password"
            />
          </div>
          <div className="py-2  md:flex md:flex-col md:items-end md:justify-end ">
            <Button title="login" />
            <p className="py-5 ">
              Don’t have an account yet?
              <Link
                to="/signup"
                className="font-bold text-indigo-500 cursor-pointer"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
      <div className="flex justify-center shadow-xl py-5 font-display px-8 border border-black text-white bg-black md:rounded-md rounded-sm ">
        temperory username and password is username : sumit121@gmail.com
        password: 12345678
      </div>
    </div>
  );
};
export default memo(Login);
