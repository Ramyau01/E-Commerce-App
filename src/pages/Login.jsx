import { FormInput, SubmitButton } from "../components";
import { Form, Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="grid place-items-center  w-5/6 max-w-96">
        <h1 className="text-2xl text-primary font-bold text-center py-8">
          C-MART
        </h1>
        <Form
          method="post"
          className="card bg-base-200 p-8 w-full shadow-lg flex flex-col gap-y-4"
        >
          <h4 className="text-center text-2xl font-semibold">Login</h4>
          <FormInput
            inputType="email"
            label="Email"
            name="identifier"
            defaultValue="ram@gmail.com"
          ></FormInput>
          <FormInput
            inputType="password"
            label="Password"
            name="password"
            defaultValue="Dashing@123"
          ></FormInput>
          <div className="mt-4">
            <SubmitButton
              text="Login"
              style="btn-primary btn-block text-lg font-medium"
            ></SubmitButton>

            <SubmitButton
              text="  Guest User"
              style=" btn-block mt-4 text-lg font-medium"
            ></SubmitButton>
            <p className="mt-4">
              Not a member yet ?
              <Link
                to="/register"
                className="ml-2 font-bold link link-hover link-primary-content underline"
              >
                Register
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};
