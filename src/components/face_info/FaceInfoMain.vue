<template>
  <div>
    <v-row no-gutters>
      <v-col cols="8" sm="3" md="4">
        <DatePicker />
      </v-col>
      <v-col class="mt-4" align="end" cols="4" sm="9" md="8">
        <Delete />
      </v-col>
    </v-row>
    <FaceInfoTable />
  </div>
</template>

<script>
import FaceInfoTable from "./FaceInfoTable.vue";
import DatePicker from "./DatePicker.vue";
import Delete from "./DeleteBtn.vue";

export default {
  components: { FaceInfoTable, DatePicker, Delete },

  created() {
    this.$store.dispatch("getFaceInfoTable");
  },
};
</script>

<style></style>
