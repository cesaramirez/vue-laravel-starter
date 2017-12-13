<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-tooltip bottom>
      <v-btn icon @click="logout"  slot="activator">
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
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>

</style>
