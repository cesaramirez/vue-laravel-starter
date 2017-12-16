<template>
   <v-layout align-center justify-center>
        <v-flex xs12 sm12 md5>
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
  <!-- <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="reset_password">
        <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
          <alert-success :form="form" :message="status"></alert-success>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">email</label>
            <div class="col-md-7">
              <input v-model="form.email" type="email" name="email" class="form-control"
                :class="{ 'is-invalid': form.errors.has('email') }">
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">password</label>
            <div class="col-md-7">
              <input v-model="form.password" type="password" name="password" class="form-control"
                :class="{ 'is-invalid': form.errors.has('password') }">
              <has-error :form="form" field="password"></has-error>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">confirm_password</label>
            <div class="col-md-7">
              <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control"
                :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
              <has-error :form="form" field="password_confirmation"></has-error>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-md-9 ml-md-auto">
              <v-button >reset_password</v-button>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div> -->
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
    async reset() {
      this.$store.dispatch("auth/reset", {
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
        token: this.$route.params.token
      });
    }
    //   async reset () {
    //     this.form.token = this.$route.params.token

    //     const { data } = await this.form.post('/api/password/reset')

    //     this.status = data.status

    //     this.form.reset()
    //   }
  }
};
</script>
