<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-4 col-md-6 col-sm-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/company" label="Home" />
              <q-breadcrumbs-el to="/driver-list" label="Drivers" />
              <q-breadcrumbs-el label="Add Driver" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">
            <q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px" />
            Add a New Driver
          </div>
          <div class="text-weight-light header-sub-title" style="color: #7c8db5">
            Here is the information about all Your Vehicles
          </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12 q-pa-sm q-my-auto text-right">
          <!-- <q-btn icon="add" color="primary" class="q-mx-sm q-px-md text-capitalize"> <span class="q-pl-xs"> Edit </span> </q-btn>
                    <q-btn flat dense icon="delete_outline" class="q-mx-md text-red text-capitalize" > <span class="q-pl-xs">Delete</span> </q-btn> -->
        </div>
      </div>

      <div class="row mb-block q-my-sm">
        <!-- SKELETON START -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="activeSkeleton == ''">
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

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="activeSkeleton">
          <q-tabs
            v-model="tab"
            dense
            class="vtabs text-black"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
          >
            <q-tab name="info_tab" label="User information" />
            <q-tab name="report_tab" label="Notification Preferences" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated class="q-mt-md">
            <q-tab-panel name="info_tab" class="no-padding">
              <q-form @submit="saveDriverDetails" class="q-gutter-md">
                <div class="row tabsborder">
                  <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md text-center"
                    >
                      <q-img src="~src/assets/images/blank_profile.png" rounded></q-img>
                      <q-btn color="grey" dense rounded class="q-px-md q-mt-md">
                        Upload
                      </q-btn>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-sm">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                        <label><b>Account Information</b></label>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Full Name</label>
                        <q-input outlined name="driver_fullname" v-model="driver_fullname" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Email</label>
                        <q-input outlined name="email_id" v-model="email_id" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">App login ID</label>
                        <q-input outlined name="app_id" v-model="app_id" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Create Password</label>
                        <q-input outlined name="password" v-model="password" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Phone Number</label>
                        <q-input outlined name="phone_number" v-model="phone_number" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Date of birth</label>
                        <q-input outlined name="date_OfBirth" v-model="date_OfBirth" />
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Address</label>
                        <q-input outlined name="address" v-model="address" />
                      </div>
                    </div>

                    <div class="row q-pa-sm">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                        <label><b>Document Details</b></label>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">National Insurance No.</label>
                        <q-input
                          outlined
                          name="national_insurance"
                          v-model="national_insurance"
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Council Badge Ref:</label>
                        <q-input outlined name="council_badge" v-model="council_badge" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">DVLA Driving Licence No.</label>
                        <q-input outlined name="licence" v-model="licence" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">DBS Update Certificate No.</label>
                        <q-input outlined name="certificate" v-model="certificate" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-sm">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                        <div><b>Upload Documents</b></div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md"></div>
                      <div
                        class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <div class="text-caption">Council Badge</div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <q-btn
                          color="blue"
                          dense
                          rounded
                          align="right"
                          class="q-px-md text-caption text-capitalize"
                        >
                          Upload
                        </q-btn>
                      </div>
                    </div>
                    <div class="row q-pa-sm">
                      <div
                        class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <div class="text-caption">DVLA Drivers Licence</div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <q-btn
                          color="blue"
                          dense
                          rounded
                          align="right"
                          class="q-px-md text-caption text-capitalize"
                        >
                          Upload
                        </q-btn>
                      </div>
                    </div>
                    <div class="row q-pa-sm">
                      <div
                        class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <div class="text-caption">School Badge</div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <q-btn
                          color="blue"
                          dense
                          rounded
                          align="right"
                          class="q-px-md text-caption text-capitalize"
                        >
                          Upload
                        </q-btn>
                      </div>
                    </div>
                    <div class="row q-pa-sm">
                      <div
                        class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <div class="text-caption">Safeguarding Certificate</div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <q-btn
                          color="blue"
                          dense
                          rounded
                          align="right"
                          class="q-px-md text-caption text-capitalize"
                        >
                          Upload
                        </q-btn>
                      </div>
                    </div>
                    <div class="row q-pa-sm">
                      <div
                        class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <div class="text-caption">DBS Certificate</div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs q-my-auto"
                      >
                        <q-btn
                          color="blue"
                          dense
                          rounded
                          align="right"
                          class="q-px-md text-caption text-capitalize"
                        >
                          Upload
                        </q-btn>
                      </div>
                    </div>

                    <!-- <div class="row q-pa-sm q-pt-lg">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                        <div><b>Assign Vehicle</b></div>
                      </div>
                      <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 q-pa-sm">
                          <label class="custom-label">Search Vehicle</label>
                          <q-input
                            outlined
                            name="search"
                            v-model="search"
                            type="text"
                            lazy-rules
                            :rules="[
                              (val) => (val && val.length > 0) || 'Please type something',
                            ]"
                          />
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm">
                          <q-btn rounded class="q-pa-sm"
                            ><q-icon name="add" class="no-padding"
                          /></q-btn>
                        </div>
                      </div>
                      <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 q-pa-sm">
                          <label class="custom-label">Search Vehicle</label>
                          <q-input
                            outlined
                            v-model="search_vehicle"
                            type="text"
                            lazy-rules
                            :rules="[
                              (val) => (val && val.length > 0) || 'Please type something',
                            ]"
                          />
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm">
                          <q-btn rounded class="q-pa-sm"
                            ><q-icon name="remove" class="no-padding"
                          /></q-btn>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1">
                    <q-btn
                      label="Cancel"
                      type="button"
                      color="grey"
                      class="q-ma-xs q-px-lg"
                    />
                    <q-btn
                      label="Next"
                      type="submit"
                      class="q-ma-xs q-px-lg"
                      color="primary"
                    />
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg"
                  ></div>
                </div>
              </q-form>
            </q-tab-panel>

            <q-tab-panel name="report_tab" class="no-padding">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <div class="row q-pa-md tabsborder">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h5">
                      Notification Settings
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="text-grey q-py-md"><small>ACCOUNT</small></div>
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
                      <div class="text-grey q-py-md"><small>APPLICATION</small></div>
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
                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1">
                    <q-btn
                      label="Cancel"
                      type="button"
                      color="grey"
                      class="q-ma-xs q-px-lg text-capitalize"
                    />
                    <q-btn
                      label="Create User"
                      type="button"
                      class="q-ma-xs q-px-lg text-capitalize"
                      color="primary"
                    />
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg"
                  ></div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMeta ,Loading,QSpinnerGears ,Notify,LocalStorage } from "quasar";
import { api } from "boot/axios";

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
  { name: "registration", align: "left", label: "Registration", field: "registration" },
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
  name: "AddDriver",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Add Driver - Fleet Management",
      };
    });
  },
  data() {
    return {
      value: ref(81),
      activeSkeleton: false,
      tab: ref("info_tab"),
      setting1: ref(true),
      setting2: ref(false),
      setting3: ref(true),
      setting5: ref(false),
      setting6: ref(false),
      setting7: ref(true),

      age: ref(null),
      accept: ref(false),
      driver_fullname: ref(null),
      email_id: ref(null),
      app_id: ref(null),
      password: ref(null),
      phone_number: ref(null),
      date_OfBirth: ref(null),
      address: ref(null),
      national_insurance: ref(null),
      council_badge: ref(null),
      licence: ref(null),
      certificate: ref(null),
      // date: ref('2019/02/01'),

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
      parent.activeSkeleton = true;
      console.log("The component is created yet.");
    }, 3000);
  },
  methods: {

    async saveDriverDetails() {
      var parent = this;
      Loading.show({
        spinner: QSpinnerGears,
        message: "Please wait...",
        backgroundColor: "grey",
      });
     const data = {
       councilId: LocalStorage.getItem("userId"),
        driverFullName: parent.driver_fullname,
    emailId: parent.email_id,
    app_id: parent.app_id,
    password: parent.password,
    phoneNo: parent.phone_number,
    dateOfBirth: parent.date_OfBirth,
    address: parent.address,
    nationalInsuranceNo: parent.national_insurance,
    councilBadgeUpload: parent.council_badge,
    dVLADrivingLicenceNo: parent.licence,
    dBSUpdateCertificateNo: parent.certificate,
        // Add more properties as needed
      };

      try {
        let config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        };
        await api
          .post("/saveDriverDetails/driver", data, config)
          .then(function (response) {
            if (response.status == 200) {
              Loading.hide();
              Notify.create({
                color: "green-5",
                textColor: "white",
                message: "Driver details saved successfully",
                icon: "check",
              });
              parent.$router.push("/driver-list");
            }
          })
          .catch(function (error) {
            Notify.create({
              color: "red-5",
              textColor: "white",
              message: "Something went wrong, please try again",
              icon: "check",
            });
          });
      } catch (error) {
        Loading.hide();
        Notify.create({
          color: "red-5",
          textColor: "white",
          message: "Something went wrong, please try again",
          icon: "check",
        });
      }
    },
  },

});
</script>
