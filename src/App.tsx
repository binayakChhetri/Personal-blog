import Header from "@/layout/Header";
import { BlogPost } from "./modules/blog-post/components/BlogPost";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <Header />
      <BlogPost />
    </div>
  );
}
