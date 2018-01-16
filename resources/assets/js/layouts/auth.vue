<template>
  <v-app>
    <v-toolbar app class="elevation-0">
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{ name: 'welcome' }" exact>Welcome</v-btn>
        <v-btn flat :to="{ name: 'login' }" exact>Login</v-btn>
        <v-btn flat :to="{ name: 'register' }" exact>Register</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      absolute
    >
      <v-list class="pa-1">
        <img src="/storage/logo.png" height="150" style="display: block; margin: 0 auto;"/>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="{ name: item.to }" exact>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-container fill-height fluid class="blue darken-2">
      <child/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "auth-layout",
  data: () => ({
    drawer: null,
    items: [
      { title: 'Welcome', icon: 'dashboard', to: 'welcome' },
      { title: 'Login', icon: 'question_answer', to: 'login' },
      { title: 'Register', icon: 'question_answer', to: 'register' }
    ],
    appName: window.config.appName
  })
};
</script>
