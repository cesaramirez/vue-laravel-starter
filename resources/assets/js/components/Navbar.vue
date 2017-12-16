<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-title class="white--text">
      <router-link :to="{ name: 'home' }">
        <v-btn flat>
          {{ appName }}
        </v-btn>
      </router-link>
      </v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="user">
      <v-btn flat>
        {{ user.name }}
      </v-btn>
    </template>
    <v-tooltip bottom>
      <v-btn icon @click.prevent="logout" slot="activator">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <span>Logout</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: "auth/user"
  }),

  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.replace({
        name: "login"
      });
    }
  }
};
</script>
