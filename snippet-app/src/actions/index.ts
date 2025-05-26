/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache"

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
  revalidatePath(`/snippet/${id}`)
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: { id },
  });
  revalidatePath('/')
  redirect("/");
};

export async function createSnippet(_: any, formData: FormData) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 5) {
      return {
        message: "Title must be at least 5 characters.",
        success: false,
      };
    }

    if (typeof code !== "string" || code.length < 8) {
      return { message: "Code must be at least 8 characters.", success: false };
    }

    await prisma.snippet.create({ data: { title, code } });

    // Intentionally force an error for testing
    throw new Error("Failed to store snippet in database");
    revalidatePath('/'); // on-demand caching for showing real time page changes
    return { message: "", success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error?.message || "Something went wrong",
        success: false,
      };
    } else {
      return { message: "some internal server error" };
    }
  }
}
