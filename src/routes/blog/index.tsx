import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import { Hero } from "@/routes/blog/(_components)/hero.tsx";
import { exampleBlogs } from "@/constants.ts";
import { page } from "fresh";
import { BlogList } from "@/routes/blog/(_components)/blog-list.tsx";

export const handler = define.handlers({
  GET() {
    return page({ exampleBlogs });
  },
});

export default define.page<typeof handler>(function Blog({ data }) {
  return (
    <div>
      <Head>
        <title>Milan's Blog</title>
      </Head>
      <div class="flex flex-col gap-10 my-10">
        <Hero />
        <div class="flex justify-between uppercase border-b-2 border-base-300 pb-2 tracking-wide font-medium">
          <p>posts</p>
          <p>{data.exampleBlogs.length} entries</p>
        </div>
        <BlogList blogPosts={data.exampleBlogs} />
        <div class="join flex flex-row items-center justify-center">
          <button class="join-item btn">1</button>
          <button class="join-item btn btn-active">2</button>
          <button class="join-item btn">3</button>
          <button class="join-item btn">4</button>
        </div>
      </div>
    </div>
  );
});
