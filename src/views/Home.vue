<template>
  <v-app>
    <!-- <v-navigation-drawer
      app
      class="ma-2 mt-4 rounded-lg"
      color="teal accent-4"
      width="250"
      height="450"
      dark
      expand-on-hover
      permanent
    >
      <NavDrawer />
    </v-navigation-drawer> -->
    <v-main class="pa-0 ml-2">
      <DashBoard />
    </v-main>
  </v-app>
</template>

<script>
import DashBoard from "../components/DashBoard";
import NavDrawer from "../components/NavDrawer";

export default {
  name: "Home",
  components: {
    DashBoard,
    NavDrawer,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
