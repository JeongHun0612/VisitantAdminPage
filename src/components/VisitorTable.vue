<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="2">
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
              v-model="date"
              label="Picker in menu"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="dateSearch"> OK </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="items"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      sort-by="date"
      sort-desc
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    ></v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="7"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitorTable",
  created() {
    this.date = this.$moment().format("YYYY-MM-DD");
    this.$Axios
      .get("api/visitor")
      .then((res) => {
        this.items = res.data.sort((a, b) => {
          return b.id - a.id;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      date: "",
      menu: false,

      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: "출입", sortable: false, align: "center", value: "inandout" },
        { text: "방문 날짜", align: "center", value: "date" },
        { text: "방문 시간", align: "center", value: "time" },
        { text: "이름", sortable: false, align: "center", value: "name" },
        { text: "성별", sortable: false, align: "center", value: "gender" },
        { text: "연령대", sortable: false, align: "center", value: "age" },
        { text: "비고", sortable: false, align: "center", value: "remark" },
      ],
      items: [],
    };
  },
  methods: {
    dateSearch() {
      this.$refs.menu.save(this.date);
      this.$Axios
        .get(`/api/visitor/dateSearch?date=${this.date}`)
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>