<template>
  <div>
    <v-app-bar app dark color="light-blue darken-1" flat>
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title> {{ routeName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="isLogin">
        <!-- v-menu mdi-dots-vertical -->
        <v-menu left bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{ name: 'DashBoard' }">
              <v-list-item-title>DashBoard</v-list-item-title>
            </v-list-item>
            <v-list-item router :to="{ name: 'FaceInfo' }">
              <v-list-item-title>FaceInfo</v-list-item-title>
            </v-list-item>
            <v-list-item router :to="{ name: 'VisitorList' }">
              <v-list-item-title>VisitorList</v-list-item-title>
            </v-list-item>
            <v-list-item router :to="{ name: 'UserList' }">
              <v-list-item-title>UserList</v-list-item-title>
            </v-list-item>
            <v-list-item router :to="{ name: 'Account' }">
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- v-menu v-avatar -->
        <v-menu left bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mr-1" icon v-bind="attrs" v-on="on">
              <v-avatar color="yellow darken-4" size="35">
                <span class="white--text text-h7"> {{ userFirstName }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar class="mb-2" color="yellow darken-4">
                  <span class="white--text text-h7">{{ userFirstName }}</span>
                </v-avatar>
                <h3>{{ this.userInfo.name }}</h3>
                <p class="text-caption mt-1">
                  {{ this.userInfo.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text router :to="{ name: 'Account' }">
                  Account
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn @click="logout" depressed rounded text> LOGOUT </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="256" height="800">
      <NavDrawer />
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavDrawer from "./NavDrawer";
import { mapState, mapActions } from "vuex";

export default {
  components: { NavDrawer },
  created() {},
  computed: {
    ...mapState(["isLogin", "userInfo", "userFirstName"]),
    routeName() {
      return this.$route.name;
    },
  },
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
</style>