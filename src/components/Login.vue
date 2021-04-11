<template>
  <v-container fill-height style="max-width: 450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isLoginError" type="error">
          이메일과 비밀번호를 확인해주세요.
        </v-alert>
        <v-alert class="mb-3" :value="isLogin" type="success">
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-account</v-icon> Login
          </v-card-title>
          <v-divider></v-divider>
          <div class="mt-3 pa-3">
            <v-text-field
              v-model="email"
              label="email"
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
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style>
</style>