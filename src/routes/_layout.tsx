import { define } from "../utils.ts";
import { Navbar } from "@/components/navbar.tsx";
import { Footer } from "@/components/footer.tsx";

export default define.layout(({ Component }) => {
  return (
    <div class="flex min-h-screen flex-col">
      <Navbar />
      <main class="flex-1 mx-8 md:mx-14">
        <Component />
      </main>
      <div class="border-t-neutral">
        <Footer />
      </div>
    </div>
  );
});
