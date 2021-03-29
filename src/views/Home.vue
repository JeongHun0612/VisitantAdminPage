<template>
  <v-app>
    <Header />

    <v-main class="pa-0 ml-2">
      <DashBoard />
    </v-main>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import DashBoard from "../components/DashBoard";
import NavDrawer from "../components/NavDrawer";

export default {
  name: "Home",
  components: {
    Header,
    DashBoard,
    NavDrawer,
  },
  data() {
    return {};
  },
};
</script>
