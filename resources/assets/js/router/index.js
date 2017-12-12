import Vue from "vue";
import routes from "./routes";
import Router from "vue-router";

Vue.use(Router);

const router = make();

export default router;
/**
 * Create a new router instance.
 *
 * @return {Router}
 */
function make() {
  const router = new Router({
    mode: "history",
    routes: routes.map(beforeEnter)
  });

  router.beforeEach(async (to, from, next) => {
    setLayout(router, to)
    next()
  })

  return router;
}

/**
 * Add beforeEnter guard to the route.
 *
 * @param {Object} route
 * @param {Object}
 */
function beforeEnter (route) {
  if (route.children) {
    route.children.forEach(beforeEnter)
  }

  return route
}

/**
 * Set the application layout from the matched page component.
 *
 * @param {Router} router
 * @param {Route} to
 */
function setLayout(router, to) {
  // Get the first matched component.
  const [component] = router.getMatchedComponents({ ...to });

  if (component) {
    router.app.$nextTick(() => {

      // Set application layout.
      router.app.setLayout(component.layout || "");
    });
  }
}
