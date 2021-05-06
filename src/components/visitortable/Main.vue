<template>
  <div>
    <v-row>
      <v-col cols="8" sm="4" md="3">
        <VisitorDatePicker />
      </v-col>
    </v-row>
    <VisitorTable />
  </div>
</template>

<script>
import VisitorTable from "./VisitorTable.vue";
import VisitorDatePicker from "./VisitorDatePicker.vue";

export default {
  components: { VisitorTable, VisitorDatePicker },
  created() {
    this.$store.dispatch("getVisitorTable");
  },
};
</script>

<style>
</style>