import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditPageSnippet = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  return (
    <div className="w-full px-20 flex flex-col gap-5">
      <div>
        {snippet && <EditSnippetForm snippet={snippet} />}
        {!snippet && <div>Snippet not found.</div>}
      </div>
    </div>
  );
};

export default EditPageSnippet;
