import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/(dashboard)/")({
  component: App,
});

export const submitForm = async (_e: React.SubmitEvent<HTMLFormElement>) => {
  // const formData = new FormData(e.currentTarget);
  // const data = Object.fromEntries(formData.entries());
};

function App() {
  return (
    <div className="p-4 text-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(e);
        }}
      >
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            className="w-fit border border-blue-500"
          />
          <Button type="submit" className={"w-fit cursor-pointer"}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
