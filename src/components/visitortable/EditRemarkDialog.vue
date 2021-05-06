<template>
  <v-dialog v-model="this.isRemarkDialog" max-width="400px">
    <v-card v-click-outside="onClickOutside">
      <v-card-title>
        <span class="headline">비고</span>
      </v-card-title>

      <v-card-text>
        <v-textarea v-model="remarkText" name="input-7-1"></v-textarea>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="remarkEditCancle">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="remarkEditSave"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: ["data"],
  created() {
    this.remarkText = this.data.remark;
  },
  data() {
    return {
      remarkText: "",
    };
  },
  computed: {
    ...mapState(["isRemarkDialog"]),
  },
  methods: {
    ...mapMutations(["setIsRemarkDialog"]),

    onClickOutside() {
      this.setIsRemarkDialog(false);
    },

    remarkEditCancle() {
      this.setIsRemarkDialog(false);
    },

    remarkEditSave() {
      this.setIsRemarkDialog(false);
      this.$Axios
        .patch(`api/visitor/editRemark/${this.data.id}`, {
          remark_text: this.remarkText,
        })
        .then((res) => {
          this.$store.dispatch("getVisitorTable", this.visitorTable);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>