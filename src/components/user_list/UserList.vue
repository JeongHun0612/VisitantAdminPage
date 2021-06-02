<template>
  <UserListTable :data="userListData" />
</template>

<script>
import UserListTable from "./UserListTable";

export default {
  name: "UserList",
  components: { UserListTable },
  created() {
    this.$Axios
      .get("api/userList")
      .then((res) => {
        this.userListData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      userListData: [],
    };
  },
};
</script>

<style>
</style>