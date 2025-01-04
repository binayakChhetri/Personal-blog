import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { useState } from "react";

let posts = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "React is a powerful library for building user interfaces...",
    date: "2025-01-03",
    author: {
      name: "John Doe",
      avatar: "/api/placeholder/32/32",
    },
    likes: 42,
    comments: [
      {
        id: 1,
        author: "Jane Smith",
        content: "Great post!",
        date: "2025-01-03",
      },
    ],
    tags: ["React", "JavaScript", "Web Development"],
    isLiked: false,
    isBookmarked: false,
  },
];

const getAllTags = () => {
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
};

export default function Header() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Bin's blogs</h1>
      <div className="flex gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-gray-500" />
          <Input placeholder="Search posts...." className="pl-8" />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Post</Button>
          </DialogTrigger>
          <DialogOverlay className="fixed inset-0 bg-black opacity-75" />{" "}
          <DialogContent className="w-[400px] sm:w-[500px] p-5 rounded-lg bg-white absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <DialogHeader className="mb-4 text-left font-semibold">
              <DialogTitle>Create New Blog Post</DialogTitle>
            </DialogHeader>
            <div className="space-y-4  w-400px">
              <Input placeholder="Post Title" />
              <Textarea
                placeholder="Write your post content..."
                className="h-40"
              />
              <Input placeholder="Tags (comma-seprated)" />
              <Button>Publish Post</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-2 flex-wrap">
        {getAllTags().map((tag) => (
          <Badge
            key={tag}
            variant={selectedTag === tag ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </header>
  );
}
