<template>
   <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
            <v-card>
                <v-card-title primary-title>
                    <div class="headline">Iniciar Sesión</div>
                    <small>Porfavor ingresar los datos del formulario siguiente para que puedas iniciar sesión en la aplicación.</small>
                </v-card-title>
                <v-form @submit.prevent="login">
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
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.password"
                              name="password"
                              label="Ingrese su Contraseña"
                              type="password"
                              prepend-icon="vpn_key"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout>
                      <v-flex d-flex justify-space-between>
                        <v-btn flat type="submit" :block="$vuetify.breakpoint.xsOnly">Ingresar</v-btn>
                        <v-btn flat :to="{ name: 'forgot' }" color="primary" :block="$vuetify.breakpoint.xsOnly">Forgot Your Password?</v-btn>
                      </v-flex>
                    </v-layout>
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
    form: {
      email: '',
      password: '',
      remember: false
    },
  }),
  methods: {
    async login () {

      // Log in the user.
      await this.$store.dispatch('auth/login', {
        email: this.form.email,
        password: this.form.password
      })

      // Redirect to home.
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>
