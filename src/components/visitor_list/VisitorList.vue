<template>
  <div>
    <v-row no-gutters>
      <v-col cols="8" sm="4" md="3">
        <DatePicker />
      </v-col>
      <v-col class="mt-4" align="end" cols="4" sm="8" md="9">
        <CreateBtn />
        <DeleteBtn />
      </v-col>
    </v-row>
    <VisitorListTable />
  </div>
</template>

<script>
import VisitorListTable from "./VisitorListTable.vue";
import DatePicker from "./DatePicker.vue";
import CreateBtn from "./CreateBtn.vue";
import DeleteBtn from "./DeleteBtn.vue";

export default {
  components: { VisitorListTable, DatePicker, CreateBtn, DeleteBtn },
};
</script>

<style></style>
