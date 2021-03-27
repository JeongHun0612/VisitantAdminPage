<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> CREATIVE TIM </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="ml-2 mr-2"></v-divider>

    <v-list-item v-for="item in items" :key="item.title" link>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" },
      ],
    };
  },
};
</script>

<style>
</style>