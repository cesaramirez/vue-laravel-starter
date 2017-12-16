<template>
   <v-layout align-center justify-center>
        <v-flex xs12 sm12 md5>
            <v-card>
                <v-card-title primary-title>
                    <div class="headline">Register</div>
                    <small>Porfavor ingresar los datos del formulario siguiente para que puedas iniciar sesión en la aplicación.</small>
                </v-card-title>
                <v-form @submit.prevent="register">
                  <v-card-text>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.name"
                              name="name"
                              label="Ingrese su Nombre"
                              prepend-icon="mail"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
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
                      <v-btn flat type="submit" :block="$vuetify.breakpoint.xsOnly">Ingresar</v-btn>
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
      name: '',
      email: '',
      password: '',
      remember: false
    },
  }),
  methods: {
    register () {
      this.$store.dispatch('auth/register', {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password
      }).then( () => {
        console.log('register')
        this.$router.replace({ name: 'home' })
      }).catch( () => {
        console.log('error')
      })
    }
  }
}
</script>
