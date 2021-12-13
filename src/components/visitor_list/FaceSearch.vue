<template>
  <div>
    <v-file-input
      v-model="files"
      label="Search Image Input"
      accept="image/png, image/jpeg, image/bmp"
      outlined
      dense
      @change="imageFileChange"
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

    imageFileChange(file) {
      if (file != null) {
        this.$Axios
          .get(`/api/visitorList/faceSearch?faceFiles=${this.files.name}`)
          .then((res) => {
            this.setVisitorListTable(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
</style>