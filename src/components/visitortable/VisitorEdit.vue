<template>
  <v-dialog v-model="isDialog" max-width="400px">
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
        <v-btn color="blue darken-1" text @click="isDialog = false">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="remarkEditSave"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  created() {
    console.log(this.isDialog);
  },
  props: ["isDialog"],

  data() {
    return {
      remarkText: "",
    };
  },
  methods: {
    remarkEditSave() {
      this.isDialog = false;
    },
  },
};
</script>

<style>
</style>