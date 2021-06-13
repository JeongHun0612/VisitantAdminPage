<template>
  <v-container fill-height style="max-width: 450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isLoginError" type="error">
          {{ isLoginErrorMessage }}
        </v-alert>
        <v-alert class="mb-3" :value="isLogin" type="success">
          로그인이 완료되었습니다.
        </v-alert>
        <!-- Login Info - Input Card -->
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-account</v-icon> Login
          </v-card-title>
          <v-divider></v-divider>
          <div class="mt-3 pa-4">
            <v-text-field
              v-model="email"
              label="email"
              type="email"
              outlined
              prepend-icon=" mdi-email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="password"
              type="password"
              outlined
              prepend-icon=" mdi-lock"
            ></v-text-field>
            <v-btn
              dark
              color="light-blue darken-1"
              block
              depressed
              @click="login({ email, password })"
            >
              LOGIN
            </v-btn>
          </div>
          <div class="text-center pb-3">
            <span class="mr-3">Not registered?</span>
            <router-link to="/register">Create an account</router-link>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapState(["isLogin", "isLoginError", "isLoginErrorMessage"]),
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style>
</style>