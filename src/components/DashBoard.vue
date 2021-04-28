<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card class="ma-1" outlined height="100px">
          <v-card-subtitle> 방문자 수</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="ma-1" outlined height="100px">
          <v-card-subtitle> 최초방문자 수</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="ma-1" outlined height="100px">
          <v-card-subtitle> 재방문자 수</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="ma-1" outlined height="300px">
          <line-chart :data="chartData"></line-chart>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="mr-auto">
        <v-card class="ma-1" outlined height="300px">
          <pie-chart
            :data="[
              ['male', 150],
              ['female', 120],
            ]"
          ></pie-chart>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7">
        <v-row no-gutters>
          <v-col cols="4">
            <v-card class="ma-1" outlined height="57px">
              <v-card-subtitle> 방문자 수</v-card-subtitle>
            </v-card>
            <v-card class="ma-1" outlined height="57px">
              <v-card-subtitle> 방문자 수</v-card-subtitle>
            </v-card>
            <v-card class="ma-1" outlined height="57px">
              <v-card-subtitle> 방문자 수</v-card-subtitle>
            </v-card>
            <v-card class="ma-1" outlined height="57px">
              <v-card-subtitle> 방문자 수</v-card-subtitle>
            </v-card>
            <v-card class="ma-1" outlined height="57px">
              <v-card-subtitle> 방문자 수</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card class="ma-1" outlined height="300px">
              <column-chart
                :data="[
                  ['10', 22],
                  ['20', 54],
                  ['30', 60],
                  ['40', 50],
                  ['50', 20],
                  ['60', 10],
                ]"
              ></column-chart>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DashBoard",
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
    return {
      chartData: { "2017-05-13": 2, "2017-05-14": 5, "2017-05-15": 4 },
    };
  },
};
</script>

<style>
</style>