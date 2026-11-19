import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destination")({
  component: DestinationLayout,
});

function DestinationLayout() {
  return <Outlet />;
}
