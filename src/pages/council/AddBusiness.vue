<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-4 col-md-6 col-sm-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el to="/business-list" label="Business" />
              <q-breadcrumbs-el label="Add Business" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">
            <q-icon
              name="arrow_back_ios"
              class="q-mt-none"
              style="margin-top: -8px"
            />
            Add New Business
          </div>
          <div
            class="text-weight-light header-sub-title"
            style="color: #7c8db5"
          >
            <!-- Here is the information about all Your Vehicles -->
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

      <div class="row mb-block q-my-sm">
        <!-- SKELETON START -->
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          v-if="activeSkeleton == ''"
        >
          <q-card class="no-shadow">
            <q-card-actions align="left" class="q-gutter-md">
              <q-skeleton type="QBtn" width="200px" />
              <q-skeleton type="QBtn" width="200px" />
            </q-card-actions>
            <q-skeleton type="text" />
            <q-item>
              <q-item-section>
                <q-skeleton height="300px" square />
              </q-item-section>
              <q-item-section>
                <q-skeleton height="300px" square />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <!-- SKELETON END -->

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
            <q-tab name="info_tab" label="Setup Business" v-if="isNextClick" />
            <q-tab
              name="notificationPreferences"
              label="Notification Preferences"
              v-if="isNextClick"
            />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="activeTab" animated class="q-mt-md">
            <q-tab-panel name="info_tab" class="no-padding">
              <q-form @submit="navigateToNextTab" class="q-gutter-md" greedy>
                <div class="row">
                  <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-md tabsborder">
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h6"
                      >
                        Business Details
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Business Name</label>
                        <q-input
                          outlined
                          v-model="businessName"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Business Email</label>
                        <q-input
                          outlined
                          v-model="businessEmail"
                          lazy-rules
                          :rules="[(val) => !!val || '* Required']"
                        />
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-md"
                      ></div>

                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h6 q-mt-lg"
                      >
                        Contact Person Details
                      </div>
                      <div
                        class="row col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        v-for="(
                          contactPersonDetail, index
                        ) in contactPersonDetails"
                        :key="index"
                      >
                        <div
                          class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-md"
                        >
                          <label class="custom-label">Contact Name</label>
                          <q-input
                            outlined
                            v-model="contactPersonDetail.personName"
                            lazy-rules
                            :rules="[
                              (val) => (val && val.length > 0) || '* Required',
                            ]"
                          />
                        </div>
                        <div
                          class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-md"
                        >
                          <label class="custom-label">Tel. Number</label>
                          <q-input
                            outlined
                            v-model="contactPersonDetail.personContact"
                            lazy-rules
                            :rules="[
                              (val) => (val && val.length > 0) || '* Required',
                            ]"
                          />
                        </div>
                        <div
                          class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-md"
                        >
                          <q-btn round v-if="index == 0"
                            ><q-icon
                              name="add"
                              class="no-padding"
                              @click="addContactPerson"
                          /></q-btn>
                          <q-btn round class="q-px-sm" v-else
                            ><q-icon
                              name="remove"
                              class="no-padding"
                              @click="removeContactPerson(index)"
                          /></q-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-md tabsborder">
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h6"
                      >
                        Is the Business Private Hire
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <q-space class="q-py-sm" />
                        <q-btn
                          outline
                          class="q-mr-md q-mb-md q-px-lg themebtnborder"
                          :class="
                            isTheBusinessPrivateHire == 'yes'
                              ? 'btnactive_blue'
                              : ''
                          "
                          @click="updateisTheBusinessPrivateHire('yes')"
                          >Yes</q-btn
                        >
                        <q-btn
                          outline
                          class="q-mr-md q-mb-md q-px-lg themebtnborder"
                          :class="
                            isTheBusinessPrivateHire == 'no'
                              ? ''
                              : 'btnactive_blue'
                          "
                          @click="updateisTheBusinessPrivateHire('no')"
                          >No</q-btn
                        >
                      </div>
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h6 q-my-lg"
                      >
                        Private Hire Licence
                      </div>
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm"
                      >
                        <q-space />
                        <label class="custom-label">Operators Licence</label>
                        <q-input
                          outlined
                          v-model="privateHireOperatorsLicence"
                          label=""
                        />
                      </div>
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm"
                      >
                        <label class="custom-label"
                          >Operators Licence Expiry Date</label
                        >

                        <q-input
                          outlined
                          v-model="privateHireOperatorsLicenceExpiryDate"
                          mask="date"
                        >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy
                                cover
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-date
                                  v-model="
                                    privateHireOperatorsLicenceExpiryDate
                                  "
                                >
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Close"
                                      color="primary"
                                      flat
                                    />
                                  </div>
                                </q-date>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"
                  >
                    <q-btn
                      label="Cancel"
                      type="button"
                      color="grey"
                      class="q-ma-xs q-px-lg text-capitalize"
                    />
                    <q-btn
                      label="Next"
                      type="submit"
                      class="q-ma-xs q-px-lg text-capitalize"
                      color="primary"
                    />
                  </div>
                </div>
              </q-form>
            </q-tab-panel>

            <q-tab-panel name="notificationPreferences" class="no-padding">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <div class="row q-pa-md tabsborder">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h6"
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

                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"
                  >
                    <q-btn
                      label="Back"
                      type="button"
                      color="grey"
                      class="q-ma-xs q-px-lg text-capitalize"
                    />
                    <q-btn
                      label="Save"
                      type="button"
                      class="q-ma-xs q-px-lg text-capitalize"
                      color="primary"
                      @click="saveBusinessNvehicleDetails"
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
import { useMeta } from "quasar";
import { api } from "boot/axios";
import {
  useQuasar,
  LocalStorage,
  Loading,
  QSpinnerGears,
  Notify,
} from "quasar";
export default defineComponent({
  name: "AddBusiness",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Add Business - Fleet Management",
      };
    });
  },
  data() {
    return {
      activeTab: "info_tab",
      activeSkeleton: false,
      tab: ref("info_tab"),
      setting1: ref(true),
      setting2: ref(false),
      setting3: ref(true),
      setting5: ref(false),
      setting6: ref(false),
      setting7: ref(true),
      vehicle_type_options: ["hatchback", "hatchback 2"],
      contactPersonDetails: [],
      licence: "",
      businessName: "",
      businessEmail: "",
      numberOfVehiclesLicence: "",
      numberOfVehicles: "",
      addVehiclesArr: [],
      isTheBusinessPrivateHire: "no",
      privateHireOperatorsLicence: "",
      privateHireOperatorsLicenceExpiryDate: "",
      notificationSettings: [],
      isSkipForNowClick: false,
      isNextClick: false,
    };
  },
  methods: {
    onSubmit() {
      this.tab = "setupVehicle";
      this.isNextClick = true;
    },
    submitSetupVehicle() {
      this.tab = "notificationPreferences";
    },
    skipVehicleAddstep() {
      this.tab = "isSkipForNowClick";
    },
    async saveBusinessNvehicleDetails() {
      var parent = this;
      Loading.show({
        spinner: QSpinnerGears,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      const password = this.generatePassword();
      console.log("password :: " + password);
      let data = {
        contactPersonDetails: parent.contactPersonDetails,
        numberOfVehiclesLicence: parent.numberOfVehiclesLicence,
        businessName: parent.businessName,
        businessEmail: parent.businessEmail,
        numberOfVehicles: parent.numberOfVehicles,
        addVehiclesArr: parent.addVehiclesArr,
        isTheBusinessPrivateHire: parent.isTheBusinessPrivateHire,
        privateHireOperatorsLicence: parent.privateHireOperatorsLicence,
        privateHireOperatorsLicenceExpiryDate:
          parent.privateHireOperatorsLicenceExpiryDate,
        notificationSettings: parent.notificationSettings,
        password: password,
        isSkipForNowClick: parent.isSkipForNowClick,
      };

      try {
        let config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
          },
        };
        await api
          .post("/saveNewBusinessDetails", data, config)
          .then(function (response) {
            if (response.status == 200) {
              Loading.hide();
              Notify.create({
                color: "green-5",
                textColor: "white",
                message: "Business added successfully",
                icon: "check",
              });
              parent.$router.push("/business-list");
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
    generatePassword() {
      let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let password = "";
      let length = 8;

      for (let i = 0; i < length; i++) {
        password += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }

      return password;
    },
    addContactPerson() {
      this.contactPersonDetails.push({
        personName: "",
        personContact: "",
      });
    },
    removeContactPerson(index) {
      this.contactPersonDetails.splice(index, 1);
    },
    updateisTheBusinessPrivateHire(value) {
      this.isTheBusinessPrivateHire = value;
    },
    addBusinessVehicles() {
      this.addVehiclesArr.push({
        make: "",
        model: "",
        colour: "",
        registrationNumber: "",
        vehicleLicenceNumber: "",
        vehicleLicenceRenewalDate: "",
        dateOfFirstRegistration: "",
        motDate: "",
        motFrequency: "",
        insuranceRenewalDate: "",
        privateHireOperatorsLicenceRenewal: "",
        // co2PerKg: "",
        noOfPassengers: "",
        isThevehicleWAV: "",
        vehicleType: "",
        seatsAvailableForHandicap: false,
        numberOfHandicapSeats: "",
      });
    },
    removeBusinessVehicles(index) {
      this.addVehiclesArr.splice(index, 1);
    },
    navigateToNextTab() {
      this.activeTab = "notificationPreferences";
    },
  },
  created() {
    let parent = this;
    setTimeout(function () {
      parent.activeSkeleton = true;
    }, 3000);
    this.addContactPerson();
    this.addBusinessVehicles();
  },
});
</script>
