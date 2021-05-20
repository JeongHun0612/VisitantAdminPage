<template>
  <v-col cols="12">
    <v-card class="ma-1" outlined height="300px">
      <line-chart
        :data="chartData"
        label="방문자 수"
        xmin="2021-01-01"
        xmax="2022-01-01"
      ></line-chart>
    </v-card>
  </v-col>
</template>

<script>
export default {
  methods: {
    test() {
      console.log("test");
    },
  },
  data() {
    return {
      chartData: {
        "2017-05-13": 2,
        "2017-05-14": 5,
        "2017-05-15": 4,
        "2017-05-16": 6,
        "2017-05-17": 2,
        "2017-05-18": 5,
        "2017-05-19": 4,
        "2017-05-20": 6,
        "2017-05-21": 2,
        "2017-05-22": 5,
        "2017-05-23": 4,
        "2017-05-24": 6,
        "2017-05-25": 2,
        "2017-05-26": 5,
        "2017-05-27": 4,
        "2017-05-28": 6,
        "2017-05-29": 2,
        "2017-05-30": 5,
      },
    };
  },
};
</script>

<style>
</style>