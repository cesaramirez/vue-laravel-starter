<template>
   <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card>
                <v-card-title primary-title>
                    <div class="headline">Reset Password</div>
                </v-card-title>
                <v-form @submit.prevent="reset">
                  <v-card-text>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.email"
                              name="email"
                              label="Email"
                              prepend-icon="mail"
                              :error-messages="errors.collect('email')"
                              v-validate="'required|email:server'"
                              data-vv-name="email"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.password"
                              name="password"
                              label="Password"
                              type="password"
                              prepend-icon="vpn_key"
                              :error-messages="errors.collect('password')"
                              v-validate="'required|min:6'"
                              data-vv-name="password"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.password_confirmation"
                              name="password_confirmation"
                              label="Confirm Password"
                              type="password"
                              prepend-icon="vpn_key"
                              :error-messages="errors.collect('password_confirmation')"
                              v-validate="'required|min:6'"
                              data-vv-name="password_confirmation"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn flat type="submit" :block="$vuetify.breakpoint.xsOnly">Reset Password</v-btn>
                  </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  layout: "auth",
  data: () => ({
    status: "",
    form: {
      token: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  }),

  methods: {
    reset() {
      this.$store
        .dispatch("auth/reset", {
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.password_confirmation,
          token: this.$route.params.token
        })
        .catch(e => {
          _.forEach(e.response.data.errors, (value, key) => {
            this.errors.add(key, value[0]);
          });
        });
    }
  }
};
</script>
