<template>
  <v-container fluid>
    <div class="mb-5">
      <VisitorCountCard />
    </div>
    <v-card class="mb-5">
      <v-card-title class="card-title">방문자 수 비율</v-card-title>
      <v-divider></v-divider>
      <line-chart class="pa-5"></line-chart>
    </v-card>
    <v-row>
      <v-col sm="12" md="4">
        <v-btn @click="test('year')">test</v-btn>
        <v-card>
          <v-card-title class="card-title">방문자 성별 비율</v-card-title>
          <v-divider></v-divider>
          <pie-chart
            v-if="loaded"
            :chart-data="pieData"
            class="pa-5"
          ></pie-chart>
        </v-card>
      </v-col>
      <v-col sm="12" md="8">
        <v-card>
          <v-card-title class="card-title">방문자 연령대 비율</v-card-title>
          <v-divider></v-divider>
          <bar-chart class="pa-5"></bar-chart>
        </v-card>
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
    this.test("day");
  },
  data() {
    return {
      loaded: false,

      pieData: [],
    };
  },
  methods: {
    //dateNum 0 : 일, 1 0: 월, 2 : 년

    test(dateType) {
      this.$Axios
        .get(`api/dashBoard/gender?dateType=${dateType}`)
        .then((res) => {
          this.pieData = {
            labels: ["Female", "Male"],
            datasets: [
              {
                backgroundColor: [
                  this.maleGradient,
                  this.femaleGradient,
                  "#00D8FF",
                ],
                data: res.data,
              },
            ],
          };
          this.loaded = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.card-title {
  font-size: 15px;
}
</style>