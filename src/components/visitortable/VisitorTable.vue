<template>
  <div>
    <!-- visitor-table -->
    <v-data-table
      :headers="headers"
      :items="this.visitorTable"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :sort-by="['date', 'time']"
      :sort-desc="[true, true]"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
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
    <v-dialog v-model="this.isDialog" max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">비고</span>
        </v-card-title>

        <v-card-text>
          <v-textarea
            v-model="remarkText"
            name="input-7-1"
            value="내용을 입력해주세요."
          ></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="remarkEditCancle">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="remarkEditSave">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["data"],
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

      isDialog: false,
      editIndex: 0,
      remarkText: "",
    };
  },
  computed: {
    ...mapState(["visitorTable"]),
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
          this.remarkText = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      this.editIndex = item.id;
      this.isDialog = true;
    },

    remarkEditCancle() {
      this.isDialog = false;
      this.remarkText = "";
    },

    remarkEditSave() {
      this.isDialog = false;
      this.$Axios
        .patch(`api/visitor/editRemark/${this.editIndex}`, {
          remark_text: this.remarkText,
        })
        .then((res) => {
          this.remarkText = "";
          this.$store.dispatch("getVisitorTable", this.visitorTable);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
