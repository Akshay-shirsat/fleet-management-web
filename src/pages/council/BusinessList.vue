<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el label="Business" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">Business Registered</div>
          <div class="text-weight-light header-sub-title" style="color: #7c8db5">
            <!-- Here is the information about all Your Vehicles -->
          </div>
        </div>
        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block">
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
            to="/add-business"
          >
            <span class="q-pl-xs">Add Business</span>
          </q-btn>
          <q-input
            dense
            filled
            v-model="search"
            class="searchwidth"
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
      <!-- SKELETON VIEW START -->
      <q-markup-table class="no-shadow" v-if="activeTable == ''">
        <thead>
          <tr>
            <th class="text-left"><q-skeleton type="text" /></th>
            <th class="text-left"><q-skeleton type="text" /></th>
            <th class="text-left"><q-skeleton type="text" /></th>
            <th class="text-left"><q-skeleton type="text" /></th>
            <th class="text-left"><q-skeleton type="text" /></th>
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
      <!-- SKELETON VIEW END -->
      <!-- TABLE VIEW START -->
      <q-table
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
        <template v-slot:body-cell-details="props">
          <q-td :props="props">
            <div
              flat
              class="text-blue text-capitalize cursor-pointer"
              @click="$router.replace('/view-business/' + props.row.businessId)"
            >
              View Details
            </div>
          </q-td>
        </template>
      </q-table>
      <!-- SKELETON VIEW END -->

      <!-- FOOTER BUTTONS -->
      <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"></div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
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

          <q-btn outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
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
  name: "VehicleCheck",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Business List - Fleet Management",
      };
    });
  },
  data() {
    return {
      search: "",
      activeTable: false,
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
      headers: [
        {
          name: "businessName",
          required: true,
          label: "Business Name ",
          align: "left",
          field: (row) => row.businessName,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "businessEmail.",
          align: "left",
          label: "Business Email",
          field: "businessEmail",
          sortable: true,
        },
        {
          name: "contactPersonName",
          align: "left",
          label: "Contact Name",
          field: "contactPersonName",
        },
        {
          name: "contactPersonContact",
          align: "left",
          label: "Telephone No.",
          field: "contactPersonContact",
        },
        {
          name: "noOfVehicles",
          align: "left",
          label: "Number of Vehicle",
          field: "noOfVehicles",
        },
        {
          name: "isTheBusinessPrivateHire",
          align: "left",
          label: "Private Hire",
          field: "isTheBusinessPrivateHire",
        },
        { name: "details", align: "left", label: "Details", field: "details" },
      ],
      items: [],
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
          "/getAllBusinessRecords?page=" +
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

      const status = exportFile("Business.csv", content, "text/csv");

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
