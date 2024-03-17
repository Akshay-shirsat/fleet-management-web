<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-4 col-md-6 col-sm-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/council" label="Home" />
              <q-breadcrumbs-el to="/business-list" label="Business" />
              <q-breadcrumbs-el label="View Business" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">
            <q-icon
              name="arrow_back_ios"
              class="q-mt-none"
              style="margin-top: -8px"
            />
            Business : <b>Excelsior Taxis Ltd </b>
          </div>
          <div
            class="text-weight-light header-sub-title"
            style="color: #7c8db5"
          >
            Here is the information about all Your Vehicles
          </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12 q-pa-sm q-my-auto text-right">
          <q-btn
            icon="add"
            color="primary"
            class="q-mx-sm q-px-md text-capitalize"
          >
            <span class="q-pl-xs"> Edit </span>
          </q-btn>
          <q-btn
            flat
            dense
            icon="delete_outline"
            class="q-mx-md text-red text-capitalize"
          >
            <span class="q-pl-xs">Delete</span>
          </q-btn>
        </div>
      </div>

      <!-- <q-separator /> -->

      <div class="row mb-block q-my-sm">
        <!-- SHOW CARD SKELETON START-->
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          v-if="showcards == ''"
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
        <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="showcards">
                    <div class="row mb-block q-my-sm">
                        <div class="col-12 col-md q-pa-sm">
                            <q-card class="my-card bluecard">
                                <q-card-section class="mategreen text-white row  q-pb-none">
                                <div class=" text-subtitle2 text-left col-12">Total Vehicles </div>
                                </q-card-section>
                                <q-card-section class="mategreen text-white row q-pt-none">
                                    <div class="text-h4 text-left q-mt-md col-12">00</div>
                                </q-card-section>
                            </q-card>
                        </div>
                        <div class="col-12 col-md q-pa-sm">
                            <q-card class="my-card orangecard">
                            <q-card-section class="text-white row  q-pb-none">
                                <div class=" text-subtitle2 text-left col-12">Total Drivers</div>
                            </q-card-section>
                            <q-card-section class="text-white row  q-pt-none">
                                <div class="text-h4 text-left q-mt-md col-12">00</div>
                            </q-card-section>
                            </q-card>
                        </div>
                        <div class="col-12 col-md q-pa-sm">
                            <q-card class="my-card redcard">
                            <q-card-section class="text-white row q-pb-none">
                                <div class=" text-subtitle2 text-left col-12">Accident Reports</div>
                            </q-card-section>
                            <q-card-section class="text-white row q-pt-none">
                                <div class="text-h4 text-left q-mt-md col-12">00</div>
                            </q-card-section>
                            </q-card>
                        </div>
                        <div class="col-12 col-md q-pa-sm">
                            <q-card class="my-card purplecard">
                            <q-card-section class="text-white row q-pb-none">
                                <div class=" text-subtitle2 text-left col-12">Defects</div>
                            </q-card-section>
                            <q-card-section class="text-white row q-pt-none">
                                <div class="text-h4 text-left q-mt-md col-12">00</div>
                            </q-card-section>
                            </q-card>
                        </div>
                        <div class="col-12 col-md q-pa-sm">
                            <q-card class="my-card pinkcard">
                            <q-card-section class="text-white row q-pb-none">
                                <div class=" text-subtitle2 text-left col-12">Compliances Score</div>
                            </q-card-section>
                            <q-card-section class="text-white row q-pt-none">
                                <div class="text-h4 text-left q-mt-md col-12">00</div>
                            </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </div> -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="showcards">
          <div class="row parentcard">
            <div class="col-12 col-md col-sm childcard q-pa-sm">
              <q-card class="my-card bluecard">
                <q-card-section
                  dense
                  class="bg-secondary text-primary row q-pb-none"
                >
                  <div
                    class="text-subtitle2 text-left col-12 text-weight-bold dashboardcard"
                  >
                    Total <br />
                    Vehicles
                  </div>
                </q-card-section>
                <q-card-section class="bg-secondary text-primary row q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold"
                  >
                    10 <span class="text-subtitle1 text-weight-bold">cars</span>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md col-sm q-pa-sm childcard">
              <q-card class="my-card orangecard">
                <q-card-section dense class="row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 text-weight-bold text-purple-10 dashboardcard"
                  >
                    Vehicle MOT <br />
                    Due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold text-purple-10"
                  >
                    10
                    <span class="text-subtitle1 text-weight-bold text-purple-10"
                      >days</span
                    >
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md col-sm q-pa-sm childcard">
              <q-card class="my-card ambercard">
                <q-card-section dense class="row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 text-weight-bold text-amber-10 dashboardcard"
                  >
                    Insurance <br />Due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold text-amber-10"
                  >
                    20
                    <span class="text-subtitle1 text-weight-bold text-amber-10"
                      >days</span
                    >
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md col-sm q-pa-sm">
              <q-card class="my-card redcard">
                <q-card-section dense class="row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 text-weight-bold text-red-14 dashboardcard"
                  >
                    Driver Medical <br />Due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold text-red-14"
                  >
                    20
                    <span class="text-subtitle1 text-weight-bold text-red-14"
                      >days</span
                    >
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md col-sm q-pa-sm">
              <q-card class="my-card greycard">
                <q-card-section dense class="row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 text-weight-bold dashboardcard"
                  >
                    Driver License <br />
                    Due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold"
                  >
                    20 <span class="text-subtitle1 text-weight-bold">days</span>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md col-sm q-pa-sm">
              <q-card class="my-card pinkcard">
                <q-card-section dense class="row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 text-weight-bold text-pink-12 dashboardcard"
                  >
                    Safeguard Training <br />due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold text-pink-12"
                  >
                    20
                    <span class="text-subtitle1 text-weight-bold text-pink-12"
                      >days</span
                    >
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="row q-pa-md">
            <div class="col-12 col-md-12">
              <LeastCompliantChart> </LeastCompliantChart>
              <!-- <DefectsChart> </DefectsChart> -->
            </div>
          </div>
        </div>
        <!-- SKELETON START -->
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg"
          v-if="activeSkeleton == ''"
        >
          <q-card class="no-shadow">
            <q-card-actions align="left" class="q-gutter-md">
              <q-skeleton type="QBtn" width="200px" />
              <q-skeleton type="QBtn" width="200px" />
            </q-card-actions>
            <q-skeleton type="text" />
            <q-item>
              <q-item-section avatar class="q-gutter-md">
                <q-skeleton type="QAvatar" />
                <q-skeleton type="QBtn" />
                <q-skeleton type="QBtn" />
                <q-skeleton type="QBtn" />
              </q-item-section>
              <q-item-section>
                <q-skeleton height="200px" square />
              </q-item-section>
              <q-item-section>
                <q-skeleton height="200px" square />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <!-- SKELETON END -->

        <!-- TABS -->
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          v-if="activeSkeleton"
        >
          <q-tabs
            v-model="tab"
            dense
            class="vtabs text-black"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
          >
            <q-tab name="info_tab" label="Business Overview" />
            <q-tab name="history_tab" label="Vehicle Information" />
            <q-tab name="report_tab" label="Notification Preferences" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated class="q-mt-md">
            <q-tab-panel name="info_tab" class="no-padding">
              <!-- <div class="text-h6">info_tab</div> -->
              <div class="row">
                <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 q-pa-sm">
                  <div class="row q-pa-md tabsborder">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h5"
                    >
                      Business Details
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="text-grey-6 q-py-sm">Business Name</div>
                      <div class="">lorem ipsum</div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="text-grey-6 q-py-sm">Business Email</div>
                      <div class="">loremipsum@gmail.com</div>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h5 q-mt-lg"
                    >
                      Contact Person Details
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="text-grey-6 q-py-sm">Contact Name</div>
                      <div class="">lorem ipsum</div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="text-grey-6 q-py-sm">Tel. Number</div>
                      <div class="">12334567345</div>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h5 q-mt-lg"
                    >
                      Vehicle Details
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="text-grey-6 q-py-sm">Number Of Vehicles</div>
                      <div class="">05</div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="text-grey-6 q-py-sm">
                        Number of vehicles on License
                      </div>
                      <div class="">04</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-sm">
                  <div class="row q-pa-md tabsborder">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h5"
                    >
                      Is the Business Private Hire
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <q-space class="q-py-sm" />
                      <q-btn
                        outline
                        class="q-mr-md q-mb-md q-px-lg themebtnborder btnactive_grey"
                        >Yes</q-btn
                      >
                      <q-btn
                        outline
                        class="q-mr-md q-mb-md q-px-lg themebtnborder"
                        >No</q-btn
                      >
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h5 q-mt-lg"
                    >
                      Private Hire Licence
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="text-grey-6 q-py-sm">Operators Licence</div>
                      <div class="">287359283475394278</div>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg"
                    >
                      <div class="text-grey-6 q-py-sm">
                        Operators Licence Expiry Date
                      </div>
                      <div class="">
                        11/12/2021 <q-icon name="calendar_month" />
                      </div>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pb-lg"
                    ></div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="history_tab" class="no-padding">
              <q-table
                title=""
                :rows="rows"
                :columns="columns"
                row-key="name"
                class="header no-shadow headbg"
                :pagination="initialPagination"
              >
                <template v-slot:body-cell-details="props">
                  <q-td :props="props">
                    <div
                      flat
                      class="text-blue text-capitalize cursor-pointer"
                      @click="$router.replace('/checks-list')"
                    >
                      {{ props.row.details }}
                    </div>
                  </q-td>
                </template>
              </q-table>
            </q-tab-panel>

            <q-tab-panel name="report_tab" class="no-padding">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <div class="row q-pa-md tabsborder">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h5"
                    >
                      Notification Settings
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="text-grey q-py-md">
                        <small>ACCOUNT</small>
                      </div>
                      <div class="text-grey">
                        <q-toggle
                          v-model="setting1"
                          label="Send a reminder email 10 days before Tax or MOT expiry"
                        />
                      </div>
                      <div class="text-grey">
                        <q-toggle
                          v-model="setting2"
                          label="Send a daily reminder email when Tax or MOT is expiring in 5 days or sooner"
                        />
                      </div>
                      <div class="text-grey">
                        <q-toggle
                          v-model="setting3"
                          label="Number of defects not signed-off"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="text-grey q-py-md">
                        <small>APPLICATION</small>
                      </div>
                      <div class="text-grey">
                        <q-toggle v-model="setting5" label="Place Holder" />
                      </div>
                      <div class="text-grey">
                        <q-toggle v-model="setting6" label="Place Holder" />
                      </div>
                      <div class="text-grey">
                        <q-toggle v-model="setting7" label="Place Holder" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
      <!-- FOOTER BUTTONS -->
      <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"></div>
        <div
          class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg"
        >
          <q-btn
            outline
            label="Cancel"
            class="text-capitalize q-mr-md themebtnborder"
          />
          <q-btn outline class="text-capitalize themebtnborder" label="Save" />
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
    name: "vehiclename",
    required: true,
    label: "Vehicle Name",
    align: "left",
    field: (row) => row.vehiclename,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "vregistration",
    align: "left",
    label: "Vehicle Registration",
    field: "vregistration",
    sortable: true,
  },
  {
    name: "licence_number",
    align: "left",
    label: "Licence Number",
    field: "licence_number",
    sortable: true,
  },
  {
    name: "licence_expiry",
    align: "left",
    label: "Licence Expiry ",
    field: "licence_expiry",
  },
  {
    name: "registration",
    align: "left",
    label: "Registration",
    field: "registration",
  },
  { name: "make", align: "left", label: "Make", field: "make" },
  { name: "model", align: "left", label: "Model", field: "model" },
  {
    name: "assigned_driver",
    align: "left",
    label: "Assigned Driver",
    field: "assigned_driver",
  },
  { name: "details", align: "left", label: "Details", field: "details" },
];

var rows = [
  {
    id: "1",
    vehiclename: "Text Column",
    vregistration: "Car Name / ID ",
    licence_number: "23-oct-2023",
    licence_expiry: "-",
    registration: "@User Name",
    make: "-",
    model: "YES",
    assigned_driver: "",
    details: "View Details",
  },
  {
    id: "2",
    vehiclename: "Text Column",
    vregistration: "Car Name / ID ",
    licence_number: "23-oct-2023",
    licence_expiry: "-",
    registration: "@User Name",
    make: "-",
    model: "NO",
    assigned_driver: "",
    details: "View Details",
  },
];

export default defineComponent({
  name: "VehicleCheck",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "View Business - Fleet Management",
      };
    });
  },
  data() {
    return {
      value: ref(81),
      activeSkeleton: false,
      showcards: false,
      tab: ref("info_tab"),
      setting1: ref(true),
      setting2: ref(false),
      setting3: ref(true),
      setting5: ref(false),
      setting6: ref(false),
      setting7: ref(true),
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
      parent.showcards = true;
      parent.activeSkeleton = true;
    }, 3000);
  },
});
</script>
