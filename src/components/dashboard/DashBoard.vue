<template>
  <v-container fluid>
    <VisitorCountCard />
    <v-row>
      <LineChart />
    </v-row>
    <v-row>
      <PieChart />
      <ColumnChart />
    </v-row>
    <v-row>
      <Bar />
    </v-row>
  </v-container>
</template>

<script>
import VisitorCountCard from "./VisitorCountCard";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import Bar from "./Bar";

export default {
  components: { VisitorCountCard, LineChart, PieChart, ColumnChart, Bar },
  created() {
    this.$Axios
      .get("api/dashboard")
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("err");
      });
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>