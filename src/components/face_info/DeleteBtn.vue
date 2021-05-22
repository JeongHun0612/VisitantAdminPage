<template>
  <div>
    <!-- selected-delete-btn, all-delete-btn -->
    <v-btn class="mr-4" outlined @click="selectedDelete">
      <v-icon left> mdi-delete </v-icon>
      선택삭제
    </v-btn>
    <v-btn class="mr-4" color="error" outlined @click="allDelete">
      <v-icon left> mdi-delete </v-icon>
      전체삭제
    </v-btn>

    <!-- snackbar -->
    <v-snackbar v-model="snackbar" :timeout="timeout" top>
      <v-icon class="mr-4" color="red"> mdi-alert </v-icon>
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import EventBus from "@/event-bus.js";

export default {
  created() {
    EventBus.$on("getSelected", (payload) => {
      this.getSelectedData = payload;
    });
  },
  data() {
    return {
      getSelectedData: [],

      snackbar: false,
      snackbarText: "선택된 데이터가 없습니다.",
      timeout: 1000,
    };
  },
  methods: {
    selectedDelete() {
      if (this.getSelectedData.length == 0) this.snackbar = true;
      else {
        if (confirm("정말로 삭제하시겠습니까?")) {
          this.getSelectedData.forEach((item) => {
            this.$Axios
              .delete(`api/faceInfo/delete/${item.id}`)
              .then((res) => {})
              .catch((err) => {
                console.log(err);
              });
          });
          this.$store.dispatch("getFaceInfoTable");
          this.getSelectedData = undefined;
          EventBus.$emit("initSelected", this.getSelectedData);
        }
      }
    },

    allDelete() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$Axios
          .delete("api/faceInfo/delete")
          .then((res) => {
            this.$store.dispatch("getFaceInfoTable");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style></style>
