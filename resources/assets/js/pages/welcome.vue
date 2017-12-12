<template>
  <div>
    <div class="top-right links">
      <template>
        <router-link to="/">
          Home
        </router-link>
      </template>
      <template>
        <router-link to="/">
          Login
        </router-link>
        <router-link to="/">
          Register
        </router-link>
      </template>
    </div>

    <div class="text-center">
      <div class="title mb-4">
        {{ title }}
      </div>

      <div class="links">
        <a href="https://laravel.com/docs">Documentation</a>
        <a href="https://laracasts.com">Laracasts</a>
        <a href="https://laravel-news.com">News</a>
        <a href="https://forge.laravel.com">Forge</a>
        <a href="https://github.com/laravel/laravel">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',

  data: () => ({
    title: window.config.appName
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.text-center {
  text-align: center;
}

.title {
  font-size: 85px;
}
</style>
