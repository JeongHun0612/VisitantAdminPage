<template>
  <div>
    <v-app-bar app color="deep-purple accent-4" dense dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

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
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="ma-2 mt-4 rounded-lg"
      color="teal accent-4"
      width="250"
      height="450"
      dark
    >
      <NavDrawer />
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavDrawer from "./NavDrawer";
export default {
  components: { NavDrawer },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
</style>