<template>
  <div>
    <VisitorDatePicker />
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