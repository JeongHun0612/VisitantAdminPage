<template>
  <v-app style="background-color: #fafafa">
    <AppBar />
    <v-main class="ma-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar";

export default {
  components: {
    AppBar,
  },
};
</script>