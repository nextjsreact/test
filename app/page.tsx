import BlogPostCard from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
      updatedAt: true,
    }
  })
  return data
  }


export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8 "> Latest Post</h1>
      <Suspense fallback={<p> Salem Wait please</p>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts(){
  const data = await getData();
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <BlogPostCard data={item} key={item.title} />
        ))}
      </div>

)}
