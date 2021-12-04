<template>
  <div>
    <v-file-input
      v-model="files"
      label="Search Image Input"
      accept="image/png, image/jpeg, image/bmp"
      outlined
      dense
      @change="imageFileChange()"
    ></v-file-input>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      files: [],
    };
  },
  methods: {
    ...mapMutations(["setVisitorListTable"]),

    imageFileChange() {
      this.$Axios
        .get("api/visitorList/faceSearch")
        .then((res) => {
          console.log(typeof res.data);
          console.log(res.data);
          this.setVisitorListTable(res.data);
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