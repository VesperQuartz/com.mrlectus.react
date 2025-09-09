import { TanstackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { AsyncProvider } from "@/providers/async";
import { LoadingProvider } from "@/providers/loader";

export const Route = createRootRoute({
  component: () => (
    <>
      <AsyncProvider>
        <LoadingProvider>
          <Outlet />
          <TanstackDevtools
            config={{
              position: "bottom-left",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </LoadingProvider>
      </AsyncProvider>
    </>
  ),
});
