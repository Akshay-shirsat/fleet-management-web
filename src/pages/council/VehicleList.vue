<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/council" label="Home" />
              <q-breadcrumbs-el label="Vehicles" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">Vehicles Registered</div>
        </div>

        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
          <q-btn flat dense icon="download" class="q-mx-md filterbtn_right">
            <span class="q-pl-xs">Export</span>
          </q-btn>

          <q-btn
            flat
            dense
            icon="filter_list"
            class="q-mx-md text-blue text-capitalize filterbtn_right"
          >
            <span class="q-pl-xs">Filter</span>
          </q-btn>

          <q-input
            dense
            filled
            v-model="pagination.search"
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

      <q-table
        title=""
        :rows="rows"
        :columns="columns"
        row-key="id"
        class="my-sticky-header-table no-shadow headbg"
        :pagination="initialPagination"
        v-if="activeTable"
        @request="onRequest"
      >
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-btn-dropdown
              :class="{ 'bg-grey': props.row.Status === 'off road' }"
              color="green"
              :label="props.row.StatusLabel"
              v-model="props.row.Status"
              rounded
              dense
              no-caps
            >
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  @click="onStatusClick('on road', props.row)"
                >
                  <q-item-section>
                    <q-item-label>On Road</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-close-popup
                  @click="onStatusClick('off road', props.row)"
                >
                  <q-item-section>
                    <q-item-label>Off Road</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-td>
        </template>

        <!-- Action Column -->

        <!-- Details Column -->
        <template v-slot:body-cell-details="props">
          <q-td :props="props">
            <q-label @click="$router.replace('/council-vehicle-details/' + props.row.id)" class="text-primary"
              >View Details</q-label
            >
          </q-td>
        </template>
        <!-- Action Column -->
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-icon
              name="edit"
              size="20px"
              class="q-pr-sm"
              color="primary"
              @click="$router.replace('/edit-vehicle/' + props.row.id)"
            />
          </q-td>
        </template>
      </q-table>

      <!-- FOOTER BUTTONS -->
      <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"></div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
          <q-btn outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from "quasar";
import { api } from "boot/axios";

export default defineComponent({
  name: "VehicleCheck",

  setup() {
    useMeta(() => {
      return {
        title: "Vehicle List - Fleet Management",
      };
    });
  },

  data() {
    return {
      activeTable: false,
      initialPagination: {
        rowsPerPage: 10, // Adjust rows per page as needed
      },
      columns: [
        {
          name: "vehicleRegistration",
          align: "center",
          label: "Vehicle Registration",
          field: "vehicleRegistration",
          sortable: true,
        },
        {
          name: "make",
          align: "center",
          label: "Vehicle Make",
          field: "make",
        },
        {
          name: "model",
          align: "center",
          label: "Vehicle Model",
          field: "model",
        },
        {
          name: "noOfPassengers",
          align: "center",
          label: "No of Seats",
          field: "noOfPassengers",
          sortable: true,
        },
        {
          name: "licenseNumber",
          align: "center",
          label: "Vehicle Licence  No.",
          field: "licenseNumber",
          sortable: true,
        },
        {
          name: "licenceExpiryDate",
          align: "center",
          label: "Vehicle Licence Expiry ",
          field: "licenceExpiryDate",
        },
        {
          name: "assignedDriver",
          align: "center",
          label: "Assigned Driver",
          field: "assignedDriver",
        },
        {
          name: "status",
          align: "center",
          label: "Status",
          field: "status",
          sortable: true,
          format: (val) => val,
          slot: "body-cell-status",
        },
        {
          name: "details",
          align: "center",
          label: "Details",
          field: "details",
          format: (val) => val,
          slot: "body-cell-details",
        },
        { name: "action", align: "left", label: "Action", field: "action" },
      ],
      rows: [],
      StatusLabel: "",
      pagination: {
        sortBy: "id",
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0,
        search: "",
      },
    };
  },

  created() {
    this.fetchData();
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
      try {
        let userId = localStorage.getItem("userId").replace("__q_strn|", "");
        const response = await api.get(
          `/getAllVehiclesRecords?page=${page}&limit=${this.pagination.rowsPerPage}&councilId=${userId}&search=${this.pagination.search}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (response.status === 200) {
          const { data, totalItems } = response.data;
          this.rows = data;
          this.pagination.rowsNumber = totalItems;
          this.activeTable = true;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    },
    onStatusClick(status, row) {
      row.Status = status;
    },
    viewDetails(row) {
      this.$router.push(`/council-vehicle-details/${row.id}`);
    },
  },
});
</script>

<style>
.bg-grey {
  background-color: grey !important;
}
</style>
