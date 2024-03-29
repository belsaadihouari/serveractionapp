import React from "react";
import "../globals.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import prisma from "../../../util/PrismaClient";
const Form = () => {
  const handlerPost = async (formData) => {
    "use server";
    const content = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
    };
    await prisma.user.create({
      data:{
        firstname:content.firstname,
        lastname:content.lastname,
        email:content.email,
      }
    })
  };

  return (
    <>
      <div className="login-container">
        <form action={handlerPost} className="login-form">
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
          <button type="submit">Add</button>
          <div className="bottom-text"></div>
        </form>
      </div>
    </>
  );
};

export default Form;
