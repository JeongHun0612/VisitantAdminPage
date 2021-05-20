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
import { mapMutations } from "vuex";

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
    ...mapMutations(["setVisitorTable"]),

    dateSearch() {
      this.$refs.menu.save(this.date);

      if (this.date.length == 0) {
        this.isDateError = true;
      } else {
        this.isDateError = false;
        this.$Axios
          .get(`/api/visitor/dateSearch?date=${this.date}`)
          .then((res) => {
            this.setVisitorTable(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    dateReload() {
      this.date = [];
      this.$store.dispatch("getVisitorTable");
    },
  },
};
</script>

<style>
</style>