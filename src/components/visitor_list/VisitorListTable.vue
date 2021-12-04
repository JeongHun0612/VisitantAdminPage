<template>
  <div>
    <v-container fluid>
      <v-data-iterator
        :items="this.visitorListTable"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
        hide-default-footer
      >
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="2"
            >
              <v-card>
                <v-container fluid>
                  <v-layout column>
                    <v-flex mb-5>
                      <v-img
                        class="mx-1"
                        aspect-ratio="1"
                        :src="getImageUrl(item.ExternalImageId)"
                      ></v-img>
                    </v-flex>
                    <v-flex style="font-size: 15px"
                      >날짜 : {{ item.date }}</v-flex
                    >
                    <v-flex style="font-size: 15px"
                      >시간 : {{ item.time }}</v-flex
                    >
                  </v-layout>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>

      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 12,
      items: [],
    };
  },
  computed: {
    ...mapState(["visitorListTable"]),
  },
  methods: {
    getSelected() {},

    getImageUrl(item) {
      const urlHeader =
        "https://final-facecog-bucket.s3.ap-northeast-2.amazonaws.com/upload/";

      return urlHeader + item + "jpg";
    },
  },
};
</script>
