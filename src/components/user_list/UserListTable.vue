<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" md="3" sm="5">
        <v-text-field
          class="mb-3"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          outlined
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <v-data-table
          :headers="headers"
          :items="this.userListTable"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          @page-count="pageCount = $event"
          hide-default-footer
          class="elevation-1"
        >
          <template v-slot:[`item.role`]="{ item }">
            <v-icon v-if="item.role">
              {{ getRoloIcon(item.role) }}
            </v-icon>
            <v-btn v-if="!item.role" @click="authAccept(item)"> 대기 </v-btn>
          </template>

          <template v-slot:[`item.remark`]="{ item }">
            <v-btn
              class="ma-1"
              small
              outlined
              color="success"
              :disabled="disabledReleaseBtn(item)"
              @click="authRelease(item)"
            >
              권한해제
            </v-btn>
            <v-btn
              class="ma-1"
              small
              outlined
              color="error"
              :disabled="disabledDeleteBtn(item)"
              @click="userDelete(item)"
            >
              삭제
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      search: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      itmes: [],
      headers: [
        { text: "번호", sortable: false, align: "start", value: "id" },
        { text: "이름", sortable: false, align: "center", value: "name" },
        { text: "이메일", sortable: false, align: "center", value: "email" },
        { text: "권한", align: "center", value: "role" },
        { text: "가입일자", sortable: false, align: "center", value: "date" },
        { text: "비고", sortable: false, align: "center", value: "remark" },
      ],
    };
  },
  computed: {
    ...mapState(["userListTable"]),
  },

  methods: {
    getRoloIcon(role) {
      if (role == "super") {
        return " mdi-account-edit ";
      } else if (role == "admin") {
        return "mdi-account-cog";
      }
    },

    authAccept(item) {
      this.$Axios
        .post(`api/userList/authUpdate/${item.id}`)
        .then((res) => {
          alert("권한이 승인되었습니다.");
          this.$store.dispatch("getUserListTable");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    authRelease(item) {
      if (confirm("정말로 권한을 해제 하시겠습니까?")) {
        this.$Axios
          .post(`api/userList/authDelete/${item.id}`)
          .then((res) => {
            this.$store.dispatch("getUserListTable");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    userDelete(item) {
      if (confirm("정말로 삭제 하시겠습니까?")) {
        this.$Axios
          .delete(`api/userList/delete/${item.id}`)
          .then((res) => {
            this.$store.dispatch("getUserListTable");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    disabledReleaseBtn(item) {
      if (item.role == "super" || item.role == "") return "";
    },
    disabledDeleteBtn(item) {
      if (item.role == "super") return "";
    },
  },
};
</script>

<style>
</style>