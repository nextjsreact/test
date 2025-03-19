import { handleSubmission } from "@/app/action";
import Submitbutton from "@/components/general/Submitbutton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogRoute() {
    return (
      <div>
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Create Post</CardTitle>
            <CardDescription>
              Create a new Post to share with the world.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" action={handleSubmission}>
              <div className="flex flex-col gap-3">
                <Label>Title</Label>
                <Input
                  name="title"
                  type="text"
                  placeholder="Enter your title"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Content</Label>
                <Textarea
                  name="content"
                  placeholder="Enter your content"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Image URL</Label>
                <Input
                  name="url"
                  type="url"
                  placeholder="Your Image URL"
                  required
                />
              </div>
              <Submitbutton />
            </form>
          </CardContent>
        </Card>
      </div>
    );
}