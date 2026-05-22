import type { BlogPost } from "@/types.ts";

export function BlogList(props: { blogPosts: BlogPost[] }) {
  return (
    <div class="overflow-x-auto">
      <table class="table">
        <tbody>
          {props.blogPosts.map((blog) => (
            <tr class="hover:bg-base-300 hover:cursor-pointer">
              <td class="italic tracking-wide align-top">
                {blog.createdAt.toLocaleDateString(undefined, {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td class="flex flex-col gap-2">
                <h3 class="text-lg font-semibold">{blog.title}</h3>
                <p>{blog.excerpt}</p>
              </td>
              <td class="align-top text-secondary-content">
                {blog.timeToRead} min
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
