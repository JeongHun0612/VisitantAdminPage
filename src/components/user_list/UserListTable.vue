<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      hide-default-footer
      disable-sort
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      class="elevation-1"
    >
      <template v-slot:[`item.role`]="{ item }">
        {{ item.role }}
        <v-btn v-if="!item.role"> 대기</v-btn>
      </template>
    </v-data-table>

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
  props: ["data"],
  created() {
    console.log(this.data);
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      itmes: [],
      headers: [
        { text: "번호", sortable: false, align: "start", value: "id" },
        { text: "이름", value: "name" },
        { text: "이메일", value: "email" },
        { text: "권한", value: "role" },
        { text: "가입일자", value: "date" },
      ],
    };
  },
  methods: {
    getRole() {
      return "test";
    },
  },
};
</script>

<style>
</style>