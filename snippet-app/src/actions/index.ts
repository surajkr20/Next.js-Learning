/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, title: string, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
      title,
    },
  });
  redirect("/");
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: { id },
  });

  redirect("/");
};

export async function createSnippet(_: any, formData: FormData) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 5) {
      return { message: "Title must be at least 5 characters.", success: false };
    }

    if (typeof code !== "string" || code.length < 8) {
      return { message: "Code must be at least 8 characters.", success: false };
    }

    await prisma.snippet.create({ data: { title, code } });

    // Intentionally force an error for testing
    throw new Error("Failed to store snippet in database");

    return { message: "", success: true };
  } catch (error: any) {
    return {
      message: error?.message || "Something went wrong",
      success: false,
    };
  }
}


