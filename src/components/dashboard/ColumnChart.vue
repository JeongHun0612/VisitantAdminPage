<template>
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
</template>

<script>
export default {};
</script>

<style>
</style>