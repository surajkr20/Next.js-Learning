"use server"

import {prisma} from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, title: string, code: string) =>{
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code, title
        }
    })
    redirect('/')
}

export const deleteSnippet = async (id: number) =>{
    await prisma.snippet.delete({
        where : {id}
    })

    redirect('/')
}