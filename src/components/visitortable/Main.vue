<template>
  <div>
    <VisitorDatePicker
      v-on:dateSearch="getVisitorData"
      v-on:dateReload="getVisitorData"
    />
    <VisitorTable :data="visitorData" />
  </div>
</template>

<script>
import VisitorTable from "./VisitorTable.vue";
import VisitorDatePicker from "./VisitorDatePicker.vue";

export default {
  components: { VisitorTable, VisitorDatePicker },
  created() {
    this.$Axios
      .get("api/visitor")
      .then((res) => {
        this.visitorData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      visitorData: [],
    };
  },
  methods: {
    getVisitorData(data) {
      this.visitorData = data;
    },
  },
};
</script>

<style>
</style>