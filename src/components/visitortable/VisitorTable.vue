<template>
  <div>
    <!-- visitor-table -->
    <v-data-table
      :headers="headers"
      :items="this.visitorTable"
      v-model="selected"
      show-select
      item-key="id"
      :sort-by="['date', 'time']"
      :sort-desc="[true, true]"
      hide-default-footer
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      class="elevation-1"
    >
      <template v-slot:[`item.data-table-select`]="{ isSelected, select }">
        <v-simple-checkbox
          :value="isSelected"
          @input="select($event)"
          :ripple="false"
          color="error"
        ></v-simple-checkbox>
      </template>
      {{ getSelected() }}

      <template v-slot:[`item.remark`]="{ item }">
        <v-icon small @click="editRemark(item)">
          {{ getRemarkIcon(item.remark) }}</v-icon
        >
      </template>
    </v-data-table>

    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="7"
      ></v-pagination>
    </div>

    <!-- remark-edit-dialog -->
    <EditRemarkDialog :data="dialogData" v-if="this.isRemarkDialog" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import EventBus from "@/event-bus.js";
import EditRemarkDialog from "./EditRemarkDialog";

export default {
  props: ["data"],
  components: { EditRemarkDialog },
  created() {
    EventBus.$on("initSelected", (payload) => {
      this.selected = payload;
    });
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      items: [],
      selected: [],
      headers: [
        { text: "출입", sortable: false, align: "center", value: "inandout" },
        { text: "방문 날짜", align: "center", value: "date" },
        { text: "방문 시간", align: "center", value: "time" },
        { text: "이름", sortable: false, align: "center", value: "name" },
        { text: "성별", sortable: false, align: "center", value: "gender" },
        { text: "연령대", sortable: false, align: "center", value: "age" },
        { text: "비고", sortable: false, align: "center", value: "remark" },
      ],

      dialogData: [],
    };
  },
  computed: {
    ...mapState(["visitorTable", "isRemarkDialog"]),
  },
  methods: {
    getRemarkIcon(remark) {
      if (remark != null && remark.length > 0) {
        return "mdi-plus-box-outline";
      } else {
        return "mdi-pencil";
      }
    },

    editRemark(item) {
      this.$Axios
        .get(`api/visitor/editRemark/${item.id}`)
        .then((res) => {
          this.dialogData = res.data;
          this.$store.commit("setIsRemarkDialog", true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSelected() {
      if (this.selected != undefined) {
        EventBus.$emit("getSelected", this.selected);
      }
    },
  },
};
</script>
