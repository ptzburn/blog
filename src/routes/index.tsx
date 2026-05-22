import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div>
      <Head>
        <title>My name is Milan.</title>
      </Head>
      <div class="flex flex-col gap-10 my-10">
      </div>
    </div>
  );
});
