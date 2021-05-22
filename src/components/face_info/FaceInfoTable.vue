<template>
  <div>
    <!-- visitor-table -->
    <v-data-table
      :headers="headers"
      :items="this.faceInfoTable"
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
          {{ getRemarkIcon(item.remark) }}
        </v-icon>
      </template>

      <template v-slot:[`item.eyeglasses`]="{ item }">
        {{ getEyeGlasses(item.eyeglasses) }}
      </template>

      <template v-slot:[`item.Smile`]="{ item }">
        <v-icon color="yellow darken-3">
          {{ getSmileIcon(item.Smile) }}
        </v-icon>
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
    <v-dialog v-model="dialog" max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">비고</span>
        </v-card-title>

        <v-card-text>
          <v-textarea v-model="remarkText" name="input-7-1"></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="editRemarkSave">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import EventBus from "@/event-bus.js";

export default {
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
        { text: "방문 날짜", align: "center", value: "date" },
        { text: "방문 시간", align: "center", value: "time" },
        { text: "ID", sortable: false, align: "center", value: "face_id" },
        { text: "성별", sortable: false, align: "center", value: "gender" },
        { text: "연령대", sortable: false, align: "center", value: "age" },
        { text: "안경", sortable: false, align: "center", value: "eyeglasses" },
        { text: "기분", sortable: false, align: "center", value: "Smile" },
        { text: "비고", sortable: false, align: "center", value: "remark" },
      ],

      dialog: false,
      remarkIdx: null,
      remarkText: "",
    };
  },
  computed: {
    ...mapState(["faceInfoTable"]),
  },
  methods: {
    getSelected() {
      if (this.selected != undefined) {
        EventBus.$emit("getSelected", this.selected);
      }
    },

    getEyeGlasses(glasses) {
      if (glasses) return "○";
      else return "X";
    },

    getSmileIcon(smile) {
      if (smile) return " mdi-emoticon-excited-outline";
      else return "mdi-emoticon-neutral-outline";
    },

    getRemarkIcon(remark) {
      if (remark != null && remark.length > 0) {
        return "mdi-plus-box-outline";
      } else {
        return "mdi-pencil";
      }
    },
    editRemark(item) {
      this.remarkText = null;
      this.dialog = true;

      this.$Axios
        .get(`api/faceInfo/editRemark/${item.id}`)
        .then((res) => {
          this.remarkIdx = item.id;
          this.remarkText = res.data.remark;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editRemarkSave() {
      this.dialog = false;
      this.$Axios
        .patch(`api/faceInfo/editRemark/${this.remarkIdx}`, {
          remark_text: this.remarkText,
        })
        .then((res) => {
          this.$store.dispatch("getFaceInfoTable", this.faceInfoTable);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
