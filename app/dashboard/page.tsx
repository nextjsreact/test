import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogPostCard from "@/components/general/BlogPostCard";


async function getData(userId: string){
  const data = await prisma.blogPost.findMany( 
  {
    where: {authorId: userId},
    orderBy:{createdAt: "asc"}
  }  
)
return data
}

export default async function DashboardRoute() {
  const {getUser} = getKindeServerSession();   
  const user= await getUser()
  const data = await getData(user.id);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link href="/dashboard/create" className={buttonVariants() }> Create Post</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item)=> (
            <BlogPostCard data={item} key={item.id} />

        ))}

      </div>
    </div>
  )
}