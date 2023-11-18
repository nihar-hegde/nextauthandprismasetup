"use server";
import { prisma } from "../prisma";

interface UserType {
  username: string;
}

export async function createUser(params: UserType) {
  try {
    const { username } = params;
    await prisma.user.create({
      data: {
        username,
      },
    });
  } catch (error) {
    console.log("Error while createing User!!");
  }
}
