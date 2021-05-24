<template>
  <v-container fluid>
    <VisitorCountCard />
    <div class="mb-5">
      <line-chart></line-chart>
    </div>
    <v-row>
      <v-col sm="12" md="4">
        <PieChart />
      </v-col>
      <v-col sm="12" md="8">
        <bar-chart></bar-chart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VisitorCountCard from "./VisitorCountCard";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import BarChart from "./BarChart.vue";

export default {
  components: {
    VisitorCountCard,
    LineChart,
    PieChart,
    ColumnChart,
    BarChart,
  },
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