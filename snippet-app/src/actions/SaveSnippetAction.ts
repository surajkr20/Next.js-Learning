"use server";

import { saveSnippet } from "@/actions"; // or wherever your original save logic is
import { redirect } from "next/navigation";

export async function saveSnippetFormAction(
  id: number,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (!title || !code) {
    throw new Error("Both title and code are required.");
  }

  await saveSnippet(id, title, code);
  redirect("/");
}
