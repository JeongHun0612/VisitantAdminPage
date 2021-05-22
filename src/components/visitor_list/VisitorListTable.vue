<template>
  <div>
    <!-- visitor-table -->
    <v-data-table
      :headers="headers"
      :items="itmes"
      :sort-by="['date', 'time']"
      :sort-desc="[true, true]"
      hide-default-footer
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      class="elevation-1"
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
import EventBus from "@/event-bus.js";

export default {
  created() {
    EventBus.$on("initSelected", (payload) => {
      this.selected = payload;
    });
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      itmes: [
        {
          date: "2021-12-20",
          time: "15:46",
          name: "홍길동",
          addr: "대덕구",
          tel: "010-2610-3442",
          temperature: "36.5",
        },
      ],
      selected: [],
      headers: [
        { text: "방문 날짜", align: "center", value: "date" },
        { text: "방문 시간", align: "center", value: "time" },
        { text: "이름", sortable: false, align: "center", value: "name" },
        { text: "거주지", sortable: false, align: "center", value: "addr" },
        { text: "전화번호", sortable: false, align: "center", value: "tel" },
        {
          text: "온도",
          sortable: false,
          align: "center",
          value: "temperature",
        },
        { text: "비고", sortable: false, align: "center", value: "remark" },
      ],
    };
  },
  methods: {
    getSelected() {},
  },
};
</script>
