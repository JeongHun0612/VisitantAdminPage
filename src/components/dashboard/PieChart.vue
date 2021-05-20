<template>
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
</template>

<script>
export default {};
</script>

<style>
</style>