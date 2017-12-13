<template>
  <v-app>
  <navbar></navbar>
  <v-content>
    <v-container fluid>
      <child/>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "app-layout",
  components: {
    Navbar
  }
};
</script>
