<template>
  <v-container fill-height style="max-width: 450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isRegisterError" type="error">
          {{ isRegisterErrorMessage }}
        </v-alert>
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-account</v-icon> Register
          </v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" v-model="valid">
            <div class="mt-3 pa-4">
              <v-text-field
                v-model="name"
                label="name"
                type="text"
                :rules="nameRules"
                required
                outlined
                prepend-icon=" mdi-account-circle"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="email"
                type="email"
                :rules="emailRules"
                required
                outlined
                prepend-icon=" mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="password"
                type="password"
                :rules="passwordRules"
                required
                outlined
                prepend-icon=" mdi-lock"
              ></v-text-field>
              <v-btn
                dark
                color="light-blue darken-1"
                block
                depressed
                @click="signUp({ name, email, password })"
              >
                SIGN UP
              </v-btn>
            </div>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Register",
  computed: {
    ...mapState(["isRegisterError", "isRegisterErrorMessage"]),
  },
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [(v) => !!v || "이름을 입력해주세요."],
      email: "",
      emailRules: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) => /.+@.+\..+/.test(v) || "이메일 형식을 맞춰주세요.",
      ],
      password: "",
      passwordRules: [(v) => !!v || "비밀번호를 입력해주세요."],
    };
  },
  methods: {
    ...mapActions(["register"]),

    signUp(registerObj) {
      this.$refs.form.validate();
      if (this.valid) this.register(registerObj);
    },
  },
};
</script>

<style>
</style>