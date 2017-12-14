
<template lang="html">
<div>
    <v-snackbar :timeout="6000" :color="noti.type" multi-line v-model="noti.show">
        {{ noti.message }}
        <v-btn flat @click="noti.show = false" dark>Cerrar</v-btn>
    </v-snackbar>
</div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    noti: "noti"
  })
};
</script>
