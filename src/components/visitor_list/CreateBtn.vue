<template>
  <v-btn class="mr-4" color="success" outlined @click="createBtn">
    <v-icon left> mdi-plus-box-outline </v-icon>
    데이터 추가
  </v-btn>
</template>

<script>
export default {
  methods: {
    createBtn() {
      console.log("추가");
    },
  },
};
</script>

<style></style>
