<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <v-avatar class="mr-2">
            <v-icon large> mdi-account-circle </v-icon>
          </v-avatar>
          Admin Page
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="ml-2 mr-2"></v-divider>
    <v-list class="ma-2">
      <v-list-item-group color="cyan darken-1">
        <v-list-item
          class="mt-2"
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "DashBoard", icon: "mdi-view-dashboard", link: "/dashboard" },
        {
          title: "Visitor Info",
          icon: " mdi-table-account",
          link: "/visitorInfo",
        },
        { title: "Visitor List", icon: "mdi-table", link: "/visitorList" },
        { title: "Account", icon: "mdi-account-box", link: "/account" },
      ],
    };
  },
};
</script>

<style>
</style>