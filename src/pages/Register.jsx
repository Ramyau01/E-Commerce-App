import { FormInput, SubmitButton } from "../components";
import { Form, Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { Logo } from "../components/Logo";
export const Register = () => {
  return (
    <section className="h-screen grid place-items-center py-20">
      <div className="w-5/6 max-w-96">
        <div className="text-center leading-relaxed">
          <Logo></Logo>
        </div>

        <h4 className="text-center leading-8 text-xl font-semibold">
          Create your CMart Account
        </h4>
        <div className="flex space-x-3 place-items-center leading-8 bg-slate-100 rounded-md px-2 mt-2">
          <span className="mx-2">
            <FaRegEnvelope></FaRegEnvelope>
          </span>
          Have an account?
          <Link
            to="/login"
            className="underline font-bold link link-hover link-primary-content"
          >
            Login
          </Link>
        </div>
      </div>

      <Form
        method="POST"
        className=" bg-base-200 shadow-2xl w-5/6 max-w-96 flex flex-col  p-8 mt-4 rounded-md "
      >
        <FormInput
          inputType="text"
          label="User Name"
          name="username"
        ></FormInput>

        <FormInput inputType="email" label="Email" name="email"></FormInput>
        <FormInput
          inputType="password"
          label="Create a password"
          name="password"
        ></FormInput>
        <div className="flex gap-4 my-2">
          <input type="checkbox" name="" id="" />
          <p className="text-sm">
            Send me emails about new arrivals, hot items, daily savings and
            more.
          </p>
        </div>

        <SubmitButton style="btn-block mt-4 text-lg font-medium"></SubmitButton>
      </Form>
    </section>
  );
};
