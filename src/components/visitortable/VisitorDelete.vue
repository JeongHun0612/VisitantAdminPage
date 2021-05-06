<template>
  <div>
    <v-btn class="mr-4" outlined @click="selectedDelete">
      <v-icon left> mdi-delete </v-icon>
      선택삭제
    </v-btn>
    <v-btn class="mr-4" outlined @click="allDelete">
      <v-icon left> mdi-delete </v-icon>
      전체삭제
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["visitorSelected"]),
  },
  methods: {
    selectedDelete() {
      console.log(this.visitorSelected);
    },
    allDelete() {},
  },
};
</script>

<style>
</style>