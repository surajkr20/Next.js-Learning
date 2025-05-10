 
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {

    async function createSnippet(formData: FormData){
        "use server"    // use server directive
        const title = formData.get('title') as string;    // accessing title
        const code = formData.get('code') as string;  // accessing code

        // interacting with database
        const snippet = await prisma.snippet.create({
            data: {
                title,
                code
            }
        })

        console.log("snippet created", snippet)
        redirect('/');
    }

  return (
    <form action={createSnippet} className='w-full px-20 py-10 flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
            <Label>Title</Label>
            <Input name='title' id='title'/>
        </div>
        <div className='flex flex-col gap-2'>
            <Label>Code</Label>
            <Textarea name='code' id='code'/>
        </div>
        <Button type='submit' >New</Button>
    </form>
  )
}

export default page