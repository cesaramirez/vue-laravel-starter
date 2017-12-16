<template>
  <v-app>
    <v-toolbar app class="elevation-0">
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat :to="{ name: 'welcome' }" exact>Welcome</v-btn>
      <v-btn flat :to="{ name: 'login' }" exact>Login</v-btn>
      <v-btn flat :to="{ name: 'register' }" exact>Register</v-btn>
    </v-toolbar>
    <v-container fill-height fluid>
      <child/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "auth-layout",
  data: () => ({
    appName: window.config.appName
  })
};
</script>
