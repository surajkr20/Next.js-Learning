"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState, useEffect, useRef, useState } from "react";
import { createSnippet } from "@/actions";
import { useRouter } from "next/navigation";
import ErrorPage from "@/app/snippet/new/error";

const Page = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [redirecting, setRedirecting] = useState(false);

  const [formStateData, action] = useActionState(createSnippet, {
    message: "",
    success: false,
  });

  useEffect(() => {
    if (formStateData.success && !redirecting) {
      formRef.current?.reset();
      setRedirecting(true);
      router.push("/");
    }
  }, [formStateData.success, redirecting, router]);

  return (
    <form ref={formRef} action={action} className="w-full px-20 py-10 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label>Title</Label>
        <Input name="title" id="title" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      {!formStateData.success && formStateData.message &&(
        <ErrorPage error={new Error(formStateData.message)} className="bg-red-950 p-2 border-red-500 mt-2">{formStateData.message}</ErrorPage>
      )}
      <Button type="submit">New</Button>
    </form>
  );
};

export default Page;
