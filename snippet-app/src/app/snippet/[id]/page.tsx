import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const SnippetDetails = async ({
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

  if(!snippet) return <h1>Snippet is not found!</h1>

  return (
    <div className="w-full px-20 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-yellow-400 font-semibold font-serif">
          {snippet?.title}
        </h1>
        <div className="flex gap-4">
          <Button><Link href={`/snippet/${snippet.id}/edit`}>Edit</Link></Button>
          <Button>Delete</Button>
        </div>
      </div>
      <pre className="bg-zinc-700 rounded-md p-4"><code>{snippet?.code}</code></pre>
    </div>
  );
};

export default SnippetDetails;
