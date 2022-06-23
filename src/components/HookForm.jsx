import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function HookForm() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters"),
    passwordConfirm: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "*Password didn't match."),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, reset, formState } = useForm(validationOpt);

  const { errors } = formState;

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="flex flex-col form-row md:flex-row">
          <div className="flex flex-col m-2 md:w-1/2 form-group">
            <label className="ml-2 text-sm text-gray-500">Password</label>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="flex flex-col m-2 md:w-1/2 form-group">
            <label className="ml-2 text-sm text-gray-500">
              Confirm Password
            </label>
            <input
              name="passwordConfirm"
              type="password"
              {...register("passwordConfirm")}
              className={`form-control ${
                errors.passwordConfirm ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.passwordConfirm?.message}
            </div>
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-2 m-1 text-sm leading-tight text-white bg-green-400 rounded-lg md:w-1/3 hover:bg-green-500 focus:outline-none"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
