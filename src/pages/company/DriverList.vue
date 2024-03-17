<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/company" label="Home" />
              <q-breadcrumbs-el label="Drivers" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">All Drivers</div>
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
          >
            <span class="q-pl-xs">Add Driver</span>
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

      <div class="row mb-block q-mt-none">
        <!-- SHOW CARD SKELETON START-->
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          v-if="showchart == ''"
        >
          <div class="row q-pt-md q-mb-sm">
            <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                <q-card-section class="text-left q-pa-sm">
                  <div style="">
                    <q-space />
                    <div class="text-caption text-weight-bold col-12">
                      <q-badge
                        class="blackbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm"
                        color="black"
                      >
                        <q-skeleton
                          type="QBtn"
                          style="width: 50px; height: 10px"
                        />
                      </q-badge>
                    </div>
                    <div class="text-h5 text-weight-bold">
                      <q-skeleton type="text" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                <q-card-section class="text-left q-pa-sm">
                  <div style="">
                    <q-space />
                    <div class="text-caption text-weight-bold col-12">
                      <q-badge
                        class="infobadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm"
                      >
                        <q-skeleton
                          type="QBtn"
                          style="width: 50px; height: 10px"
                        />
                      </q-badge>
                    </div>
                    <div class="text-h5 text-weight-bold">
                      <q-skeleton type="text" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                <q-card-section class="text-left q-pa-sm">
                  <div style="">
                    <q-space />
                    <div class="text-caption text-weight-bold col-12">
                      <q-badge
                        class="warningbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm"
                      >
                        <q-skeleton
                          type="QBtn"
                          style="width: 50px; height: 10px"
                        />
                      </q-badge>
                    </div>
                    <div class="text-h5 text-weight-bold">
                      <q-skeleton type="text" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                <q-card-section class="text-left q-pa-sm">
                  <div style="">
                    <q-space />
                    <div class="text-caption text-weight-bold col-12">
                      <q-badge
                        dense
                        class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm"
                      >
                        <q-skeleton
                          type="QBtn"
                          style="width: 50px; height: 10px"
                        />
                      </q-badge>
                    </div>
                    <div class="text-h5 text-weight-bold">
                      <q-skeleton type="text" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                <q-card-section class="text-left q-pa-sm">
                  <div style="">
                    <q-space />
                    <div class="text-caption text-weight-bold col-12">
                      <q-badge
                        class="dangerbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm"
                      >
                        <q-skeleton
                          type="QBtn"
                          style="width: 50px; height: 10px"
                        />
                      </q-badge>
                    </div>
                    <div class="text-h5 text-weight-bold">
                      <q-skeleton type="text" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <!-- SHOW CARD SKELETON END-->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="showchart">
          <div class="row mb-block q-my-sm">
            <div class="col-12 col-md q-pa-sm">
              <q-card class="my-card bluecard">
                <q-card-section class="mategreen text-white row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 page_card_height_title"
                  >
                    Total Drivers
                  </div>
                </q-card-section>
                <q-card-section class="mategreen text-white row q-pt-none">
                  <div class="text-h4 text-left q-mt-md col-12">100</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md q-pa-sm">
              <q-card class="my-card orangecard">
                <q-card-section class="text-white row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 page_card_height_title"
                  >
                    Driver Renewals Due
                  </div>
                </q-card-section>
                <q-card-section class="text-white row q-pt-none">
                  <div class="text-h4 text-left q-mt-md col-12">30</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md q-pa-sm">
              <q-card class="my-card redcard">
                <q-card-section class="text-white row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 page_card_height_title"
                  >
                    Drivers Non-compliance
                  </div>
                </q-card-section>
                <q-card-section class="text-white row q-pt-none">
                  <div class="text-h4 text-left q-mt-md col-12">10</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md q-pa-sm">
              <q-card class="my-card purplecard">
                <q-card-section class="text-white row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 page_card_height_title"
                  >
                    Completed Vehicle Checks
                  </div>
                </q-card-section>
                <q-card-section class="text-white row q-pt-none">
                  <div class="text-h4 text-left q-mt-md col-12">10</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md q-pa-sm">
              <q-card class="my-card pinkcard">
                <q-card-section class="text-white row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 page_card_height_title"
                  >
                    Compliance Score Last Week
                  </div>
                </q-card-section>
                <q-card-section class="text-white row q-pt-none">
                  <div class="text-h4 text-left q-mt-md col-12">20%</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-md">
          <!--SKELETON START-->
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
          <!--SKELETON END-->

          <q-table
            title=""
            :rows="rows"
            :columns="columns"
            row-key="name"
            class="my-sticky-header-table no-shadow headbg"
            :pagination="initialPagination"
            v-if="activeTable"
            @request="onRequest"
          >
            <template v-slot:body-cell-drivername="props">
              <q-td :props="props">
                <q-avatar size="sm">
                  <img :src="props.row.drivername_image" />
                </q-avatar>
                Natali Craig
              </q-td>
            </template>

            <!-- Details Column -->
            <template v-slot:body-cell-details="props">
              <q-td :props="props">
                <q-label @click="viewDetails(props.row)" class="text-primary"
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
                  @click="$router.replace('/edit-driver/' + props.row.driverId)"
                />
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

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
import { api } from "boot/axios";

export default defineComponent({
  name: "DriverList",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Driver List - Fleet Management",
      };
    });
  },
  data() {
    return {
      activeTable: false,
      showchart: false,
      value: ref(81),
      text: "",
      initialPagination: {
        rowsPerPage: 8,
      },
      pagination: {
        // Define pagination object here
        rowsPerPage: 8,
        page: 1, // You may need to initialize other properties as well
        sortBy: null,
        descending: false,
        search: "",
      },
      columns: [
        {
          name: "driverFullName",
          align: "left",
          label: "Driver Name",
          field: "driverFullName",
          sortable: true,
        },
        {
          name: "phoneNo",
          align: "left",
          label: "Mobile No",
          field: "phoneNo",
          sortable: true,
        },
        {
          name: "dBSUpdateCertificateNo",
          align: "left",
          label: "DBS Update Certificate No",
          field: "dBSUpdateCertificateNo",
          sortable: true,
        },
        {
          name: "emailId",
          align: "left",
          label: "Email",
          field: "emailId",
          sortable: true,
        },
        {
          name: "nationalInsuranceNo",
          align: "left",
          label: "National Insurance No",
          field: "nationalInsuranceNo",
          sortable: true,
        },
        {
          name: "dBSUpdateCertificateNo",
          align: "left",
          label: "DBS Update Certificate No",
          field: "dBSUpdateCertificateNo",
          sortable: true,
        },
        {
          name: "dVLADrivingLicenceNo",
          align: "left",
          label: "DVLA Driving Licence No",
          field: "dVLADrivingLicenceNo",
          sortable: true,
        },
        {
          name: "councilBadgeReference",
          align: "left",
          label: "Council Badge Reference",
          field: "councilBadgeReference",
          sortable: true,
        },
        { name: "details", align: "left", label: "Details", field: "details" },
        { name: "action", align: "left", label: "Action", field: "action" },
      ],

      rows: [],
    };
  },
  created() {
    this.fetchData();
    let parent = this;
    setTimeout(function () {
      parent.showchart = true;
      parent.activeTable = true;
      console.log("The component is created yet.");
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
          `/getAllDriversRecords?page=${page}&limit=${this.pagination.rowsPerPage}&councilId=${userId}&search=${this.pagination.search}`,
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
      this.$router.push(`/edit/${row.id}`);
    },
  },
});
</script>
