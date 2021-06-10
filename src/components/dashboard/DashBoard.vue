<template>
  <v-container fluid>
    <div class="mb-5">
      <VisitorCountCard />
    </div>

    <v-btn-toggle v-model="toggle_btn" mandatory color="cyan darken-1">
      <v-btn @click="dateTypeSelect('day')">day</v-btn>
      <v-btn @click="dateTypeSelect('month')">month</v-btn>
      <v-btn @click="dateTypeSelect('year')">year</v-btn>
    </v-btn-toggle>
    <!-- line-chart -->
    <v-card class="mb-5">
      <v-card-title class="card-title">방문자 수 비율 </v-card-title>
      <v-divider></v-divider>
      <line-chart
        v-if="loaded"
        :chart-data="line_visitorNumData"
        class="pa-5"
      ></line-chart>
    </v-card>
    <v-row>
      <!-- pie-chart -->
      <v-col sm="12" md="4">
        <v-card>
          <v-card-title class="card-title">방문자 성별 비율</v-card-title>
          <v-divider></v-divider>
          <pie-chart
            v-if="loaded"
            :chart-data="pie_genderData"
            class="pa-5"
          ></pie-chart>
        </v-card>
      </v-col>

      <!-- bar-chart -->
      <v-col sm="12" md="8">
        <v-card>
          <v-card-title class="card-title">방문자 연령대 비율</v-card-title>
          <v-divider></v-divider>
          <bar-chart
            v-if="loaded"
            :chart-data="bar_ageData"
            class="pa-5"
          ></bar-chart>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VisitorCountCard from "./VisitorCountCard";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart.vue";

export default {
  components: {
    VisitorCountCard,
    LineChart,
    PieChart,
    BarChart,
  },
  created() {
    this.visitorNumData("year");
    this.genderData("year");
    this.ageData("year");
  },
  data() {
    return {
      loaded: false,
      toggle_btn: 2,

      line_visitorNumData: null,
      line_visitorNumData_labels: [],

      pie_genderData: null,

      bar_ageData: null,
    };
  },
  methods: {
    dateTypeSelect(dateType) {
      this.visitorNumData(dateType);
      this.genderData(dateType);
      this.ageData(dateType);
    },

    // visitorNumData methods
    visitorNumData(dateType) {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      const monthLastDay = new Date(year, month, 0).getDate();

      // dateType == "day" => day_labels
      if (dateType == "day") {
        this.line_visitorNumData_labels = [
          "00:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
        ];
      }
      // dateType == "month" => month_labels
      if (dateType == "month") {
        for (var i = 0; i < monthLastDay; i++) {
          this.line_visitorNumData_labels[i] = (i + 1).toString();
        }
      }
      // dateType == "year" => year_labels
      if (dateType == "year") {
        this.line_visitorNumData_labels = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
      }

      this.$Axios
        .get(`api/dashBoard/visitorNumLine?dateType=${dateType}`)
        .then((res) => {
          this.line_visitorNumData = {
            labels: this.line_visitorNumData_labels,
            datasets: [
              {
                backgroundColor: "#B2EBF2",
                borderWidth: 1,
                pointBorderColor: "#249EBF",
                pointBackgroundColor: "white",
                data: res.data,
              },
            ],
          };
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // genderData methods
    genderData(dateType) {
      this.$Axios
        .get(`api/dashBoard/genderPie?dateType=${dateType}`)
        .then((res) => {
          this.pie_genderData = {
            labels: ["Female", "Male"],
            datasets: [
              {
                backgroundColor: ["#EF9A9A", "#81D4FA"],
                data: res.data,
              },
            ],
          };
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // ageData methods
    ageData(dateType) {
      this.$Axios
        .get(`api/dashBoard/ageBar?dateType=${dateType}`)
        .then((res) => {
          this.bar_ageData = {
            labels: [
              "0 ~ 10세",
              "10 ~ 20세",
              "20 ~ 30세",
              "30 ~ 40세",
              "40 ~ 50세",
              "50 ~ 60세",
              "60 ~ 70세",
              "70세 이상",
            ],
            datasets: [
              {
                backgroundColor: "#f87979",
                pointBackgroundColor: "white",
                borderWidth: 1,
                pointBorderColor: "#249EBF",
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