<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el label="Manage Checklist" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">Manage Checklist</div>
          <div class="text-weight-light header-sub-title" style="color: #7c8db5">
            Here is the information about all Your council
          </div>
        </div>
        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
          <q-btn
            flat
            dense
            icon="download"
            class="q-mx-md filterbtn_right"
            @click="exportTable"
          >
            <span class="q-pl-xs">Export</span>
          </q-btn>

          <q-btn
            icon="add"
            color="primary"
            class="q-mx-sm q-px-md text-capitalize filterbtn_right"
            to="/add-checks"
          >
            <span class="q-pl-xs">Add Check</span>
          </q-btn>
          <q-input
            dense
            filled
            class="searchwidth"
            v-model="filter"
            placeholder="Search"
            style="border-radius: 8px; display: inline-block"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>

      <q-separator />

      <q-markup-table class="no-shadow" v-if="activeTable == ''">
        <!-- Skeleton Loader Content -->
      </q-markup-table>

      <q-table
        title=""
        ref="tableRef"
        :columns="headers"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
        no-data-label="I didn't find anything for you"
        no-results-label="The filter didn't uncover any results"
        :rows="items"
        v-model:pagination="pagination"
        :rows-per-page-options="[50, 100, 200]"
        :filter="filter"
        @request="onRequest"
        class="my-sticky-header-table no-shadow headbg"
        v-if="activeTable"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-icon
              name="edit"
              size="20px"
              class="q-pr-sm"
              color="primary"
              @click="$router.replace('/edit-checks/' + props.row.id)"
            />
          </q-td>
        </template>
      </q-table>

      <!-- FOOTER BUTTONS -->
      <!-- Footer Buttons Content -->

      <div
        class="row fixed-bottom-right q-gutter-sm text-right q-pa-sm q-pr-lg"
        style="background: white; width: 100%"
      >
        <div class="col-12">
          <!-- Badge and Button Content -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  useMeta,
  useQuasar,
  LocalStorage,
  Platform,
  Notify,
  Loading,
  QSpinnerGears,
} from "quasar";
import { api } from "boot/axios";
import exportFile from "quasar/src/utils/export-file.js";

export default defineComponent({
  name: "ManageChecklist",
  setup() {
    useMeta(() => {
      return {
        title: "Manage Checklist - Fleet Management",
      };
    });
  },
  data() {
    return {
      activeTable: false,
      headers: [
        {
          name: "category",
          required: true,
          label: "Category",
          align: "left",
          field: (row) => row.questionCategory,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "questions",
          align: "left",
          label: "Questions",
          field: "question",
          sortable: true,
        },
        {
          name: "isRequire",
          align: "left",
          label: "Is Required",
          field: "isRequire",
        },
        {
          name: "images",
          align: "left",
          label: "Images",
          field: "isUploadNeeded",
        },
        { name: "action", align: "left", label: "Action", field: "action" },
      ],
      items: [],
      filter: ref(""),
      pagination: {
        sortBy: "id",
        descending: false,
        page: 1,
        rowsPerPage: 50,
        rowsNumber: 0,
        search: "",
      },
      selected: [],
    };
  },
  async created() {
    await this.fetchData();
    let parent = this;
    setTimeout(function () {
      parent.activeTable = true;
    }, 3000);
  },
  methods: {
    async onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;
      this.pagination.search = filter;
      this.pagination.page = page;
      this.pagination.rowsPerPage = rowsPerPage;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;

      await this.fetchData(page);
    },
    async fetchData(page = 1) {
      var parent = this;

      Loading.show({
        spinner: QSpinnerGears,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      let data = {};
      let config = {
        headers: {
          authorization: LocalStorage.getItem("token"),
        },
      };
      //getChecksListRecords?page=1&limit=10&councilId=65d9f3905567de9f60890f0f&search=
      await api
        .get(
          "/getChecksListRecords?page=" +
            page +
            "&limit=" +
            parent.pagination.rowsPerPage +
            "&councilId=" +
            LocalStorage.getItem("userId") +
            "&search=" +
            parent.pagination.search,
          config,
          data
        )
        .then(function (response) {
          if (response.status == "200") {
            const { data, totalItems } = response.data;
            parent.items = data;
            parent.pagination.rowsNumber = totalItems;
          }
          Loading.hide();
        })
        .catch(function (error) {
          parent.$q.notify({
            color: "red-5",
            textColor: "white",
            type: "negative",
            message: "Something went to wrong, try again",
            position: "top",
          });
          Loading.hide();
        });
    },

    getSelectedString() {
      return this.selected.length === 0
        ? ""
        : `${this.selected.length} record${
            this.selected.length > 1 ? "s" : ""
          } selected of ${this.items.length}`;
    },

    exportTable() {
      let parent = this;
      // naive encoding to csv format
      const content = [parent.headers.map((col) => this.wrapCsvValue(col.label))]
        .concat(
          parent.items.map((row) =>
            parent.headers
              .map((col) =>
                this.wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format,
                  row
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("table-export.csv", content, "text/csv");

      if (status !== true) {
        $q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
          position: "top",
        });
      }
    },
    wrapCsvValue(val, formatFn, row) {
      let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

      formatted = formatted === void 0 || formatted === null ? "" : String(formatted);

      formatted = formatted.split('"').join('""');

      return `"${formatted}"`;
    },
  },
});
</script>
