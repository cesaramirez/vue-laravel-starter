<template>
   <v-layout align-center justify-center>
        <v-flex xs12 sm12 md5>
            <v-card>
                <v-card-title primary-title>
                    <div class="headline">Reset Password</div>
                </v-card-title>
                <v-form @submit.prevent="send">
                  <v-card-text>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.email"
                              name="email"
                              label="Ingrese su Correo Electrónico"
                              prepend-icon="mail"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn flat type="submit">Send Password Reset Link</v-btn>
                  </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
  layout: 'auth',

  data: () => ({
    status: '',
    form: {
      email: ''
    }
  }),

  methods: {
    async send () {
      this.$store.dispatch('auth/forgot', {
        email: this.form.email
      }).then( () => {
        this.form.email = ''
      }).catch( () => {
        console.log('error')
      })
      // const { data } = await this.form.post('/api/password/email')

      // this.status = data.status

      // this.form.reset()
    }
  }
}
</script>
