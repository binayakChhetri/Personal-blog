import Header from "@/layout/Header";
import { BlogPost } from "./modules/blog-post/components/BlogPost";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <BlogPost />
    </div>
  );
}
