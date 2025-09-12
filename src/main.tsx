import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "./global.css";
import { parse, stringify } from "jsurl2";
import reportWebVitals from "./reportWebVitals.ts";
import { useAuthStore } from "./store/index.ts";

// Create a new router instance
const router = createRouter({
  parseSearch: parseSearchWith(parse),
  stringifySearch: stringifySearchWith(stringify),
  routeTree,
  context: {
    auth: undefined,
    queryClient: undefined,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const InnerRouter = () => {
  const auth = useAuthStore();
  return <RouterProvider router={router} context={{ auth: auth.token }} />;
};

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <InnerRouter />
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
