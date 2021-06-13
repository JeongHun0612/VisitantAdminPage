<template>
  <div class="app">
    <v-container class="mt-3" style="max-width: 700px">
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
              v-model="this.userInfo.role"
              label="role"
              readonly
              outlined
            ></v-text-field>
            <v-text-field
              v-model="this.userInfo.name"
              label="name"
              readonly
              outlined
            ></v-text-field>
            <v-text-field
              v-model="this.userInfo.email"
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
  computed: {
    ...mapState(["userInfo", "userFirstName"]),
  },
};
</script>

<style>
.app {
  text-align: center;
}
</style>