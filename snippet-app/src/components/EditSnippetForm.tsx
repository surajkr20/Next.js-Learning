
"use client";
import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import type { Snippet } from "@/generated/prisma";
import { saveSnippet } from "@/actions";
import { Button } from "./ui/button";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const [title, setTitle] = useState(snippet.title);

  const saveSnippetAction = saveSnippet.bind(null, snippet?.id as number, code);

  const changeEventHandler = (value: string = "") => {
    setCode(value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  
  return (
    <div>
      <form
        action={saveSnippetAction}
        className="flex items-center justify-between mb-4"
      >
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="w-[50%] p-1 font-serif"
        />
        <Button type="submit" className="cursor-pointer">
          Save
        </Button>
      </form>
      <MonacoEditor
        width="full"
        height="400"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default EditSnippetForm;
