"use client";
import React from "react";
import "../globals.css";
import { handlerPost } from "./action";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Form = () => {
  const [state, setstate] = useState(false);
  const router = useRouter();
  const onSubmit = async (event) => {
    setstate(true);
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    await handlerPost(formData);
    router.refresh();
    form.reset();
    form.firstname.focus();
    setstate(false);
  };

  return (
    <form onSubmit={onSubmit} className="login-form">
      <p className="heading">Server Actions</p>
      <p className="paragraph">POST Request</p>
      <div className="input-group">
        <input
          required
          autoComplete="off"
          placeholder="First Name"
          id="firstname"
          name="firstname"
          type="text"
          minLength={3}
          maxLength={20}
        />
      </div>
      <div className="input-group">
        <input
          required
          autoComplete="off"
          placeholder="Last name"
          name="lastname"
          id="lastname"
          type="text"
          minLength={3}
          maxLength={20}
        />
      </div>
      <div className="input-group">
        <input
          required
          autoComplete="off"
          placeholder="Email"
          name="email"
          id="email"
          type="email"
        />
      </div>
      <button type="submit" disabled={state} className="button">
        {state ? "Adding..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
