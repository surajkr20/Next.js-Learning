/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full px-20">
      <h1 className="font-bold text-3xl">Home</h1>
      <div className="flex items-center justify-between">
        <Link href={'/snippet'} className="font-serif font-semibold">Snippet</Link>
        <Button><Link href={'/snippet/new'}>New</Link></Button>
      </div>
    </div>
  );
}
