import { Button } from "@/UI/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/UI/card";
import { Input } from "@/UI/input";
import { Label } from "@/UI/label";

export const Login = () => {
  return (
    <Card className="w-[350px] m-auto mt-20">
      <CardHeader>
        <CardTitle>Login </CardTitle>
        <CardDescription>
          Please login to continue using the app
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2 items-start space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2 items-start space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">LOG IN</Button>
      </CardFooter>{" "}
    </Card>
  );
};
