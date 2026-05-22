export function Footer() {
  return (
    <footer class="footer sm:footer-horizontal bg-base-100 items-center p-4 md:px-10">
      <aside class="grid-flow-col items-center">
        <p>
          © {new Date().getFullYear()}{" "}
          <span class="uppercase">milan hokkanen</span>
        </p>
      </aside>
      <nav class="grid-flow-col uppercase gap-4 md:place-self-center md:justify-self-end">
        <a href="/rss">rss</a>
        <a href="/contact">email</a>
        <a href="https://github.com/ptzburn">github</a>
      </nav>
    </footer>
  );
}
