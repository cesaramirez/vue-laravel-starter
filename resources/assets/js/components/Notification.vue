
<template lang="html">
    <v-snackbar :timeout="6000" :color="noti.type" multi-line v-model="noti.show">
        <span v-text="noti.message"></span>
        <v-btn flat @click="noti.show = false" dark>close</v-btn>
    </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    noti: "noti"
  })
};
</script>
