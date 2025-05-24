import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { deleteSnippet} from "@/actions"
import { notFound } from "next/navigation";

const SnippetDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  await new Promise((r) => setTimeout(r, 2000));

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if(!snippet) return notFound();

  const deleteSnippetActions = deleteSnippet.bind(null, snippet.id) 

  return (
    <div className="w-full px-20 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-yellow-400 font-semibold font-serif">
          {snippet?.title}
        </h1>
        <div className="flex gap-4">
          <Button><Link href={`/snippet/${snippet.id}/edit`}>Edit</Link></Button>
          <form action={deleteSnippetActions}>
            <Button type="submit">Delete</Button>
          </form>
        </div>
      </div>
      <pre className="bg-zinc-700 rounded-md p-4"><code>{snippet?.code}</code></pre>
    </div>
  );
};

export default SnippetDetails;
