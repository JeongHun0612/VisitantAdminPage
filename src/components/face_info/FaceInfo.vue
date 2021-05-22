<template>
  <div>
    <v-row no-gutters>
      <v-col cols="8" sm="4" md="3">
        <DatePicker />
      </v-col>
      <v-col class="mt-4" align="end" cols="4" sm="8" md="9">
        <DeleteBtn />
      </v-col>
    </v-row>
    <FaceInfoTable />
  </div>
</template>

<script>
import FaceInfoTable from "./FaceInfoTable.vue";
import DatePicker from "./DatePicker.vue";
import DeleteBtn from "./DeleteBtn.vue";

export default {
  components: { FaceInfoTable, DatePicker, DeleteBtn },

  created() {
    this.$store.dispatch("getFaceInfoTable");
  },
};
</script>

<style></style>
