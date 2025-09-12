import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)")({
  beforeLoad: ({ context, location }) => {
    console.log(context, location);
    if (!context.auth) {
      throw redirect({
        to: "/",
        search: {
          redirect: location.href,
        },
      });
    }
  },

  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
