<template>
   <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card>
                <v-card-title primary-title>
                  <v-flex justify-center hidden-sm-and-down>
                    <img src="/storage/logo.png" alt="" height="150px" class="text-xs-center" style="display: block; margin: 0 auto;" >
                    <h1 class="headline text-xs-center">Register</h1>
                  </v-flex>
                  <v-flex justify-center hidden-md-and-up>
                    <h1 class="headline text-xs-center">Register</h1>
                  </v-flex>
                </v-card-title>
                <v-form @submit.prevent="register">
                  <v-card-text>
                      <v-layout row>
                          <v-flex xs12>
                              <v-text-field
                              v-model="form.name"
                              name="name"
                              label="Name"
                              prepend-icon="face"
                              :error-messages="errors.collect('name')"
                              v-validate="'required'"
                              data-vv-name="name"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
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
                              label="Password Confirmation"
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
                      <v-btn color="primary" type="submit" block>Register</v-btn>
                  </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import _ from "lodash";
export default {
  layout: "auth",
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      remember: false
    },
    _errors: []
  }),
  methods: {
    register() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch("auth/register", {
              name: this.form.name,
              email: this.form.email,
              password: this.form.password,
              password_confirmation: this.form.password_confirmation
            })
            .then(() => {
              this.$router.replace({ name: "home" });
            })
            .catch(e => {
              _.forEach(e.response.data.errors, (value, key) => {
                this.errors.add(key, value[0]);
              });
            });
        }
      });
    },
    collect(field) {
      return _errors[field][0];
    }
  }
};
</script>
