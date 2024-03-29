import React from "react";
import "../globals.css";
import Form from "./form";
const Container = () => {
  // const handlerPost = async (formData) => {
  //   "use server";
  //   const content = {
  //     firstname: formData.get("firstname"),
  //     lastname: formData.get("lastname"),
  //     email: formData.get("email"),
  //   };
  //   await prisma.user.create({
  //     data: {
  //       firstname: content.firstname,
  //       lastname: content.lastname,
  //       email: content.email,
  //     },
  //   });
  //   revalidatePath("/");
  // };
  

  return (
    <>
      <div className="login-container">
        <Form ></Form>
       
      </div>
    </>
  );
};

export default Container;
