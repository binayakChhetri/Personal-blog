import { Button } from "@/UI/button";
import { DialogHeader } from "@/UI/dialog";
import { Input } from "@/UI/input";
import { Textarea } from "@/UI/textarea";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

export const AddPostDialog = () => {
  return (
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
          <Textarea placeholder="Write your post content..." className="h-40" />
          <Input placeholder="Tags (comma-seprated)" />
          <Button>Publish Post</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
