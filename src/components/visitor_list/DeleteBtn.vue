<template>
  <v-btn class="mr-4" color="error" outlined @click="allDelete">
    <v-icon left> mdi-delete </v-icon>
    전체삭제
  </v-btn>
</template>

<script>
export default {
  methods: {
    allDelete() {
      console.log("전체 삭제");
    },
  },
};
</script>

<style></style>
