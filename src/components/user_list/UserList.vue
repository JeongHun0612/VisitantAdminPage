<template>
  <UserListTable />
</template>

<script>
import UserListTable from "./UserListTable";

export default {
  name: "UserList",
  components: { UserListTable },

  created() {
    this.$store.dispatch("getUserListTable");
  },
};
</script>

<style>
</style>