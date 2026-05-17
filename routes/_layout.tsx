import { define } from "../utils.ts";
import { Navbar } from "../components/navbar.tsx";

export default define.layout(({ Component }) => {
  return (
    <div class="flex flex-col">
      <Navbar />
      <main class="flex-1 mx-auto">
        <Component />
      </main>
      <footer>&copy; 2026</footer>
    </div>
  );
});
