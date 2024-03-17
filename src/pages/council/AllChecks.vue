<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/council" label="Home" />
              <q-breadcrumbs-el label="All Checks" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">All Checks</div>
          <div
            class="text-weight-light header-sub-title"
            style="color: #7c8db5"
          >
            Here is the information about all Your Vehicles
          </div>
        </div>

        <div
          class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto"
        >
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
            v-model="text"
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

      <q-table
        title=""
        :rows="rows"
        :columns="columns"
        row-key="name"
        class="my-sticky-header-table no-shadow headbg"
        :pagination="initialPagination"
        v-if="activeTable"
      >
        <template v-slot:body-cell-defects="props">
          <q-td :props="props">
            <q-badge
              rounded
              outline
              class="successbadge q-py-xs q-px-sm"
              style="color: #f38b41"
            >
              {{ props.row.defects }}
            </q-badge>
          </q-td>
        </template>
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-btn-dropdown
              color=""
              rounded
              :label="props.row.status"
              v-if="props.row.status == 'Completed'"
              class="status_green text-capitalize"
            >
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>In-Progress</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Pending</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Completed</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown
              color=""
              rounded
              :label="props.row.status"
              v-if="props.row.status == 'In-Progress'"
              class="status_orange text-capitalize"
            >
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>In-Progress</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Pending</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Completed</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-td>
        </template>

        <template v-slot:body-cell-registration="props">
          <q-td :props="props">
            <q-btn flat @click="$router.replace('/')">
              {{ props.row.registration }}
            </q-btn>
          </q-td>
        </template>
        <template v-slot:body-cell-details="props">
          <q-td :props="props">
            <div
              flat
              class="text-blue text-capitalize cursor-pointer"
              @click="$router.replace('/view-checks')"
            >
              {{ props.row.details }}
            </div>
          </q-td>
        </template>
        <!-- <template v-slot:body-cell-action="props">
                    <q-td :props="props">
                        <q-icon name="edit" size="20px" class="q-pr-sm" color="primary" />
                    </q-td>
                </template> -->
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
            <q-badge
              rounded
              style="background: #f38b41"
              class="q-mr-sm"
            />outstanding defects
          </q-badge>
          <q-badge
            rounded
            class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md"
            style="background: white; color: #ff0000"
          >
            <q-badge rounded style="background: #ff0000" class="q-mr-sm" /> Non-
            Compliance
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
import { useMeta } from "quasar";

var columns = [
  {
    name: "businessname",
    required: true,
    label: "Business Name ",
    align: "left",
    field: (row) => row.businessname,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "registration.",
    align: "left",
    label: "Vehicle Regis",
    field: "registration",
    sortable: true,
  },
  {
    name: "reportby",
    align: "left",
    label: "Report By",
    field: "reportby",
    sortable: true,
  },
  { name: "checkdate", align: "left", label: "Check Date", field: "checkdate" },
  { name: "duration", align: "left", label: "Duration", field: "duration" },
  { name: "time", align: "left", label: "Time", field: "time" },
  { name: "location", align: "left", label: "Location", field: "location" },
  { name: "defects", align: "left", label: "Defects", field: "defects" },
  { name: "status", align: "left", label: "Status", field: "status" },
  { name: "details", align: "left", label: "Details", field: "details" },
];

var rows = [
  {
    id: "1",
    businessname: "Excelsior Taxis Ltd",
    registration: "Car Name / ID",
    reportby: "@User Name",
    checkdate: "23-oct-2023",
    duration: "3 min 45 sec",
    time: "03:19 PM",
    location: "London",
    defects: "5",
    status: "Completed",
    details: "View Details",
  },
  {
    id: "2",
    businessname: "Excelsior Taxis Ltd",
    registration: "Car Name / ID",
    reportby: "@User Name",
    checkdate: "23-oct-2023",
    duration: "3 min 45 sec",
    time: "03:19 PM",
    location: "London",
    defects: "5",
    status: "Completed",
    details: "View Details",
  },
  {
    id: "3",
    businessname: "Excelsior Taxis Ltd",
    registration: "Car Name / ID",
    reportby: "@User Name",
    checkdate: "23-oct-2023",
    duration: "3 min 45 sec",
    time: "03:19 PM",
    location: "London",
    defects: "5",
    status: "Completed",
    details: "View Details",
  },
  {
    id: "5",
    businessname: "Excelsior Taxis Ltd",
    registration: "Car Name / ID",
    reportby: "@User Name",
    checkdate: "23-oct-2023",
    duration: "3 min 45 sec",
    time: "03:19 PM",
    location: "London",
    defects: "5",
    status: "In-Progress",
    details: "View Details",
  },
];

export default defineComponent({
  name: "VehicleCheck",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Checks List - Fleet Management",
      };
    });
  },
  data() {
    return {
      activeTable: false,
      value: ref(81),
      //   selection:ref('completed'),
      initialPagination: {
        // sortBy: 'desc',
        // descending: false,
        // page: 2,
        rowsPerPage: 8,
        // rowsNumber: xx if getting data from a server
      },
      columns,
      rows,
    };
  },
  created() {
    let parent = this;
    setTimeout(function () {
      parent.activeTable = true;
    }, 3000);
  },
});
</script>
