<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="dateRangeText"
          style="font-size: 18px"
          label="날짜를 선택해주세요."
          prepend-icon="mdi-calendar"
          append-icon="mdi-reload"
          :error="isDateError"
          readonly
          @click:append="dateReload"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" no-title range scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="dateSearch"> OK </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [],
      isDateError: false,
      menu: false,
    };
  },
  computed: {
    dateRangeText() {
      if (this.date.length == 2) {
        return this.date.join(" ~ ");
      } else {
        return this.date;
      }
    },
  },
  methods: {
    dateSearch() {
      this.$refs.menu.save(this.date);
      console.log("dateSearch");
    },
    dateReload() {
      console.log("reload");
    },
  },
};
</script>

<style>
</style>