import { ThemeToggle } from "./theme-toggle.tsx";

export function Navbar() {
  return (
    <nav class="navbar bg-base-100 shadow-sm px-4 md:px-10">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl uppercase">hokkanen.io</a>
      </div>
      <div class="flex gap-2">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="/blog" class="capitalize">blog</a>
          </li>
          <li>
            <a href="/rss" class="uppercase">rss</a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
