'use server'

import { prisma } from './utils/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

/* interface FormData {
  title: string
  description: string
} */

export async function handleSubmission(formData: FormData) {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user) {
        return redirect("/api/auth/register");
    }

    const title = formData.get('title');
    const content = formData.get('content');
    const url = formData.get('url');
    // Here you would typically interact with your database
    // For example with Prisma:
    await prisma.blogPost.create({
       data: {
         title: title as string,
         content: content as string,
         imageUrl: url as string,
         authorId: user.id,
         authorImage: user.picture as string,
         authorName: user.given_name as string,
       },
     })

    // Revalidate the dashboard page to show the new item
    //revalidatePath('/dashboard')
     return redirect("/dashboard")
    //return { success: true }

}

