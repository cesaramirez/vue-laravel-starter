export default [
  { path: "/", name: "welcome", component: require("@/pages/welcome") },

  // Guest routes.
  ...middleware("guest", [
    { path: "/login", name: "login", component: require("@/pages/auth/login") },
    { path: '/register', name: 'register', component: require('@/pages/auth/register') },
    // { path: '/password/reset', name: 'password.request', component: require('~/pages/auth/password/email') },
    // { path: '/password/reset/:token', name: 'password.reset', component: require('~/pages/auth/password/reset') }
  ]),

  { path: "*", component: require("@/pages/errors/404.vue") }
];


/**
 * @param  {String|Function} middleware
 * @param  {Array} routes
 * @return {Array}
 */
function middleware (middleware, routes) {
  routes.forEach(route =>
    (route.middleware || (route.middleware = [])).unshift(middleware)
  )

  return routes
}
