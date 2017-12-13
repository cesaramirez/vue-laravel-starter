<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md6>
      <h1 class="text-xs-center mb-4">Page not Found</h1>
      <div class="links text-xs-center">
        <router-link :to="{ name: 'welcome' }">
          Go Home
        </router-link>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "not-found",

  layout: "default"
};
</script>
