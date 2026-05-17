import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div>
      <Head>
        <title>Milan's Blog</title>
      </Head>
      <div>
        Hello world!
      </div>
    </div>
  );
});
