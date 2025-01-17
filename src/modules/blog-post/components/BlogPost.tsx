import { Button } from "@/UI/button";
import { Badge } from "@/UI/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/UI/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Bookmark,
  Edit2,
  Heart,
  MessageSquare,
  Share2,
  Trash2,
} from "lucide-react";

let posts = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a powerful library for building user interfaces and also interactives web apps...",
    date: "2025-01-03",
    author: {
      name: "John Doe",
      avatar: "https://avatars.githubusercontent.com/u/64035674?v=4",
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
    isBookmarked: true,
  },
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a powerful library for building user interfaces and also interactives web apps...",
    date: "2025-01-03",
    author: {
      name: "John Doe",
      avatar: "https://avatars.githubusercontent.com/u/64035674?v=4",
    },
    likes: 42,
    comments: [
      {
        id: 2,
        author: "Jane Smith",
        content: "Great post!",
        date: "2025-01-03",
      },
    ],
    tags: ["React", "JavaScript", "Web Development"],
    isLiked: true,
    isBookmarked: false,
  },
];

export const BlogPost = () => {
  return (
    <main>
      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <CardHeader className="gap-2">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src={post.author.avatar} className="w-10" />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <CardTitle className="text-sm">{post.title}</CardTitle>
                  <div className="text-sm text-gray-500">
                    {post.author.name} • {post.date}
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                  >
                    •••
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2 w-56 bg-white rounded-lg pl-3 pr-2 py-2 border-[1px] shadow-md">
                  <DropdownMenuLabel className="text-sm font-semibold pt-2 pl-2">
                    Actions
                  </DropdownMenuLabel>
                  <DropdownMenuItem className="flex items-center gap-3 pl-2 pr-4 py-2 cursor-pointer rounded-lg hover:bg-gray-100 hover:outline-none">
                    <Edit2 className="w-4 h-4" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 pl-2 pr-4 py-2 cursor-pointer rounded-lg hover:bg-gray-100 hover:outline-none ">
                    <Trash2 className="w-4 h-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex gap-2 flex-wrap">
              {posts.map((post) =>
                post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))
              )}
            </div>
          </CardHeader>
          <CardContent className="text-[15px]">{post.content}</CardContent>
          <CardFooter>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className={post.isLiked ? "text-red-500" : "none"}
              >
                <Heart
                  className="w-4 h-4"
                  fill={post.isLiked ? "red " : "none"}
                />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="w-4 h-4" />
                {post.comments.length}
              </Button>

              <Button variant="ghost">
                <Bookmark
                  className="w-4 h-4 "
                  fill={post.isBookmarked ? "currentColor" : "none"}
                />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
};
