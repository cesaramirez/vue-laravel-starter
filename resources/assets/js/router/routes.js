export default [
  { path: "/", name: "welcome", component: require("@/pages/welcome") },

  // Guest routes.
  ...middleware("guest", [
    { path: "/login", name: "login", component: require("@/pages/auth/login") },
    {
      path: "/register",
      name: "register",
      component: require("@/pages/auth/register")
    }
  ]),

  // Authenticated routes.
  ...middleware("auth", [
    { path: "/home", name: "home", component: require("@/pages/home") }
  ]),

  { path: "*", component: require("@/pages/errors/404.vue") }
];

/**
 * @param  {String|Function} middleware
 * @param  {Array} routes
 * @return {Array}
 */
function middleware(middleware, routes) {
  routes.forEach(route =>
    (route.middleware || (route.middleware = [])).unshift(middleware)
  );

  return routes;
}
