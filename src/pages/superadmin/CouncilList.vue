<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el label="Council" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">Council</div>
          <div
            class="text-weight-light header-sub-title"
            style="color: #7c8db5"
          >
            Here is the information about all Your council
          </div>
        </div>
        <div
          class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto"
        >
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
            flat
            dense
            icon="delete_outline"
            class="q-mx-md text-red text-capitalize filterbtn_right"
          >
            <span class="q-pl-xs">Delete</span>
          </q-btn>
          <q-btn
            flat
            dense
            icon="filter_list"
            class="q-mx-md text-blue text-capitalize filterbtn_right"
          >
            <span class="q-pl-xs">Filter</span>
          </q-btn>
          <q-btn
            icon="add"
            color="primary"
            class="q-mx-sm q-px-md text-capitalize filterbtn_right"
            to="/add-council"
          >
            <span class="q-pl-xs">Add Council</span>
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
        <thead>
          <tr>
            <th class="text-left">
              <q-skeleton type="text" />
            </th>
            <th class="text-left">
              <q-skeleton type="text" />
            </th>
            <th class="text-left">
              <q-skeleton type="text" />
            </th>
            <th class="text-left">
              <q-skeleton type="text" />
            </th>
            <th class="text-left">
              <q-skeleton type="text" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
          </tr>
          <tr>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
          </tr>
          <tr>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
          </tr>
          <tr>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
            <td class="text-left"><q-skeleton type="text" /></td>
          </tr>
        </tbody>
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
              @click="$router.replace('/edit-council/' + props.row.councilId)"
            />
          </q-td>
        </template>
      </q-table>

      <!-- FOOTER BUTTONS -->
      <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"></div>
        <div
          class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg"
        >
          <q-badge
            rounded
            class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md"
            style="background: white; color: #f38b41"
          >
            <q-badge rounded style="background: #f38b41" class="q-mr-sm" />
            outstanding defects
          </q-badge>
          <q-badge
            rounded
            class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md"
            style="background: white; color: #ff0000"
          >
            <q-badge rounded style="background: #ff0000" class="q-mr-sm" />
            Non- Compliance
          </q-badge>
          <q-btn
            outline
            label="Cancel"
            class="text-capitalize q-mr-md themebtnborder"
          />
        </div>
      </div>

      <div
        class="row fixed-bottom-right q-gutter-sm text-right q-pa-sm q-pr-lg"
        style="background: white; width: 100%"
      >
        <div class="col-12">
          <q-badge
            rounded
            class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md"
            style="background: white; color: #f38b41"
          >
            <q-badge rounded style="background: #f38b41" class="q-mr-sm" />
            outstanding defects
          </q-badge>

          <q-badge
            rounded
            class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md"
            style="background: white; color: #ff0000"
          >
            <q-badge rounded style="background: #ff0000" class="q-mr-sm" />
            Non- Compliance
          </q-badge>

          <q-btn
            outline
            label="Cancel"
            class="text-capitalize q-mr-md themebtnborder"
          />
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

var rows = [
  {
    id: "1",
    council_name: "Council Name",
    email: "email@gmail.com",
    contact: "9812390871",
    number_of_business: "5",
    action: "View action",
  },
  {
    id: "2",
    council_name: "Council Name",
    email: "email@gmail.com",
    contact: "9812390871",
    number_of_business: "5",
    action: "View action",
  },
  {
    id: "3",
    council_name: "Council Name",
    email: "email@gmail.com",
    contact: "9812390871",
    number_of_business: "5",
    action: "View action",
  },
  {
    id: "5",
    council_name: "Council Name",
    email: "email@gmail.com",
    contact: "9812390871",
    number_of_business: "5",
    action: "View action",
  },
];

export default defineComponent({
  name: "VehicleCheck",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Manage Council - Fleet Management",
      };
    });
  },
  data() {
    return {
      activeTable: false,
      headers: [
        {
          name: "councilName",
          required: true,
          label: "Council Name ",
          align: "left",
          field: (row) => row.councilName,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "contactEmailAddress.",
          align: "left",
          label: "Email",
          field: "contactEmailAddress",
          sortable: true,
        },
        {
          name: "telephoneNumber",
          align: "left",
          label: "Contact",
          field: "telephoneNumber",
        },
        {
          name: "numberOfBusinesses",
          align: "left",
          label: "Number of Business",
          field: "numberOfBusinesses",
        },
        { name: "action", align: "left", label: "Action", field: "action" },
      ],
      items: [],
      filter: ref(""),
      loading: ref(false),
      pagination: {
        sortBy: "id", // Default sorting column
        descending: false, // Default sorting order
        page: 1, // Current page number
        rowsPerPage: 50, // Number of rows per page
        rowsNumber: 0, // Total number of items,
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
      await api
        .get(
          "/getAllCouncilRecords?page=" +
            page +
            "&limit=" +
            parent.pagination.rowsPerPage +
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
      const content = [
        parent.headers.map((col) => this.wrapCsvValue(col.label)),
      ]
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

      formatted =
        formatted === void 0 || formatted === null ? "" : String(formatted);

      formatted = formatted.split('"').join('""');
      /**
       * Excel accepts \n and \r in strings, but some other CSV parsers do not
       * Uncomment the next two lines to escape new lines
       */
      // .split('\n').join('\\n')
      // .split('\r').join('\\r')

      return `"${formatted}"`;
    },
  },
});
</script>
