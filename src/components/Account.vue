<template>
  <div class="app">
    <v-container class="mt-3" style="max-width: 600px">
      <v-layout align-center row wrap>
        <v-flex xs12>
          <h1>Account</h1>
          <v-avatar color="yellow darken-4" size="70">
            <span class="white--text text-h5"> {{ userFirstName }}</span>
          </v-avatar>
          <v-card-title>
            <v-icon class="mr-2">mdi-account</v-icon> Account
          </v-card-title>
          <div class="mt-3 pa-4">
            <v-text-field
              v-model="this.role"
              label="role"
              readonly
              outlined
            ></v-text-field>
            <v-text-field
              v-model="this.name"
              label="name"
              readonly
              outlined
            ></v-text-field>
            <v-text-field
              v-model="this.email"
              label="email"
              readonly
              outlined
            ></v-text-field>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Account",
  created() {
    if (this.userInfo != null) {
      this.role = this.userInfo.role;
      this.name = this.userInfo.name;
      this.email = this.userInfo.email;
    }
  },
  computed: {
    ...mapState(["userInfo", "userFirstName"]),
  },
  data() {
    return {
      role: null,
      name: null,
      email: null,
    };
  },
};
</script>

<style>
.app {
  text-align: center;
}
</style>