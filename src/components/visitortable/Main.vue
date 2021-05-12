<template>
  <div>
    <v-row no-gutters>
      <v-col cols="8" sm="4" md="3">
        <VisitorDatePicker />
      </v-col>
      <v-col class="mt-4" align="end" cols="4" sm="4" md="9">
        <VisitorDelete />
      </v-col>
    </v-row>
    <VisitorTable v-on:getSelected="getSelectedData" />
  </div>
</template>

<script>
import VisitorTable from "./VisitorTable.vue";
import VisitorDatePicker from "./VisitorDatePicker.vue";
import VisitorDelete from "./VisitorDelete.vue";

export default {
  components: { VisitorTable, VisitorDatePicker, VisitorDelete },
  created() {
    this.$store.dispatch("getVisitorTable");
  },
  methods: {
    getSelectedData(selected) {
      console.log(selected);
    },
  },
};
</script>

<style></style>
