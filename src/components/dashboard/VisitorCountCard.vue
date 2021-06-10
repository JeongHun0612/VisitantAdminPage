<template>
  <v-row>
    <v-col cols="12" sm="4">
      <v-card class="ma-1" outlined height="100px">
        <v-card-subtitle> 일일 방문자 수</v-card-subtitle>
        <span class="ml-5"> {{ this.dayCount }} </span>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card class="ma-1" outlined height="100px">
        <v-card-subtitle> 월별 방문자 수</v-card-subtitle>
        <span class="ml-5">{{ this.monthCount }} </span>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card class="ma-1" outlined height="100px">
        <v-card-subtitle> 누적 방문자 수</v-card-subtitle>
        <span class="ml-5">{{ this.allCount }} </span>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  created() {
    this.$Axios
      .get("api/dashBoard/visitorCount")
      .then((res) => {
        this.allCount = res.data[0];
        this.monthCount = res.data[1];
        this.dayCount = res.data[2];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      dayCount: 0,
      monthCount: 0,
      allCount: 0,
    };
  },
};
</script>

<style>
</style>