import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

import routes, { defaultRoute } from "./routes";

export type RouteDefinition = {
  name: string;
  path: string;
  visible?: boolean;
};

const router = createRouter(routes, {
  defaultRoute,
});

router.usePlugin(browserPlugin());

export default router;
