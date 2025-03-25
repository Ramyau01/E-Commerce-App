import { FormInput, SubmitButton } from "../components";
import { Form } from "react-router-dom";

export const CheckoutForm = () => {
  return (
    <Form
      method="post"
      className="card bg-base-100 p-8 shadow-lg flex flex-col gap-y-4 max-w-2xl"
    >
      <h4 className="text-start text-2xl font-semibold">Shipping address</h4>
      <FormInput inputType="text" label="First Name" name="name"></FormInput>
      <FormInput inputType="text" label="Address" name="address"></FormInput>
      <div className="mt-4">
        <SubmitButton
          text="Place your Order"
          style="btn-primary btn-block text-lg font-medium max-w-xs "
        ></SubmitButton>
      </div>
    </Form>
  );
};
