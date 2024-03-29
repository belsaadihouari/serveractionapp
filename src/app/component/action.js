"use server";
import prisma from "../../../util/PrismaClient";

export const handlerPost = async (formData) => {
  const content = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
  };
  await prisma.user.create({
    data: {
      firstname: content.firstname,
      lastname: content.lastname,
      email: content.email,
    },
  });
};
