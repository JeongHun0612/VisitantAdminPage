<template>
  <div>
    <v-row no-gutters justify="space-between">
      <v-col cols="12" sm="5" md="4">
        <DatePicker />
      </v-col>
      <v-col class="mt-2 mr-3" align="end" cols="12" sm="6" md="4">
        <FaceSearch />
      </v-col>
    </v-row>
    <VisitorListTable />
  </div>
</template>

<script>
import VisitorListTable from "./VisitorListTable.vue";
import DatePicker from "./DatePicker.vue";
import FaceSearch from "./FaceSearch.vue";

export default {
  components: { VisitorListTable, DatePicker, FaceSearch },

  created() {
    this.$store.dispatch("getVisitorListTable");
  },
};
</script>

<style></style>
