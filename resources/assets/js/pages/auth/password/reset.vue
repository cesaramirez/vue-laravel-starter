<template>
   <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 lg4 xl4>
            <v-card>
                <v-card-title primary-title>
                  <v-flex justify-center hidden-sm-and-down>
                    <img src="/storage/logo.png" alt="" height="150px" class="text-xs-center" style="display: block; margin: 0 auto;" >
                    <h1 class="headline text-xs-center">Reset Password</h1>
                  </v-flex>
                  <v-flex justify-center hidden-md-and-up>
                    <h1 class="headline text-xs-center">Reset Password</h1>
                  </v-flex>
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
                      <v-btn color="primary" type="submit" :loading="loading" block>Reset Password</v-btn>
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
    loading: false,
    form: {
      token: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  }),

  methods: {
    reset() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loading = true;
          this.$store
            .dispatch("auth/reset", {
              email: this.form.email,
              password: this.form.password,
              password_confirmation: this.form.password_confirmation,
              token: this.$route.params.token
            })
            .then(() => {
              this.loading = false;
            })
            .catch(e => {
              this.loading = false;
              _.forEach(e.response.data.errors, (value, key) => {
                this.errors.add(key, value[0]);
              });
            });
        }
      });
    }
  }
};
</script>
