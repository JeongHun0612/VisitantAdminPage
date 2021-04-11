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
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{ name: 'Account' }">
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>LogOut</v-list-item-title>
            </v-list-item>
          </v-list>
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
  computed: {
    ...mapState(["isLogin"]),
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