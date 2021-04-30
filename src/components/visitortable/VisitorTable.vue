<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :sort-by="['date', 'time']"
      :sort-desc="[true, true]"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.remark`]="{ item }">
        <v-icon small @click="editRemark(item)">mdi-pencil</v-icon>
      </template>
    </v-data-table>

    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="7"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VisitorEdit from "./VisitorEdit";

export default {
  created() {
    console.log(this.isEditDialog);
  },
  props: ["data"],
  components: { VisitorEdit },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      items: [],
      headers: [
        { text: "출입", sortable: false, align: "center", value: "inandout" },
        { text: "방문 날짜", align: "center", value: "date" },
        { text: "방문 시간", align: "center", value: "time" },
        { text: "이름", sortable: false, align: "center", value: "name" },
        { text: "성별", sortable: false, align: "center", value: "gender" },
        { text: "연령대", sortable: false, align: "center", value: "age" },
        { text: "비고", sortable: false, align: "center", value: "remark" },
      ],
    };
  },
  computed: {
    ...mapState(["isEditDialog"]),
  },
  methods: {
    editRemark(item) {
      this.dialog = true;
      console.log(item.id);
    },
  },
};
</script>
