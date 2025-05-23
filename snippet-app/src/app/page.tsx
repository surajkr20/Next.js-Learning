/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const snippets = await prisma.snippet.findMany(); // accessing data through snippet

  return (
    <div className="w-full px-20">
      <h1 className="font-bold text-3xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-yellow-400 text-xl">Snippet</h1>
        <Button><Link href={'/snippet/new'}>New</Link></Button>
      </div>
      {
        snippets.map((snippet) =>(
          <div className="flex justify-between mt-3 border-white items-center bg-zinc-700 rounded-md p-3 font-semibold">
            <h1 className="text-shadow-green-100">{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}><Button variant={'link'} className="text-white">View</Button></Link>
          </div>
        ))
      }
    </div>
  );
}
