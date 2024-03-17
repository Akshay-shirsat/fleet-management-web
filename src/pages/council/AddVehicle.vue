<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm">
          <small
            ><q-breadcrumbs>
              <q-breadcrumbs-el to="/council" label="Home" />
              <q-breadcrumbs-el to="/vehicle-list" label="Vehicle" />
              <q-breadcrumbs-el label="Add Vehicle" /> </q-breadcrumbs
          ></small>
          <div class="text-title">
            <q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px" />Add
            New Vehicle
          </div>
          <div class="text-weight-light header-sub-title" style="color: #7c8db5">
            Here is the information about all Your Vehicles
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm text-center">
          <div class="text-h5">50</div>
          <div class="text-grey">Total Business Registered</div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm text-center">
          <div class="text-h5">500</div>
          <div class="text-grey">Total Vehicle</div>
        </div>
      </div>

      <div class="row mb-block q-my-sm">
        <!-- SKELETON START -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="activeSkeleton == ''">
          <q-skeleton type="QBtn" width="350px" class="q-ml-sm q-mb-md" />
          <q-card class="no-shadow no-padding">
            <q-card-actions align="left" class="q-gutter-md">
              <q-skeleton type="QBtn" width="150px" />
              <q-skeleton type="QBtn" width="150px" />
              <q-skeleton type="QBtn" width="150px" />
            </q-card-actions>
            <q-skeleton height="300px" square />
          </q-card>
        </div>
        <!-- SKELETON END -->

        <div
          class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-px-md q-pb-md"
          v-if="activeSkeleton"
        >
          <label class="custom-label">Select Business </label>
          <q-select outlined v-model="model" :options="options" />
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
            <q-tab name="add_vehicle_tab" label="Vehicle Information" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated class="q-mt-md">
            <q-tab-panel name="add_vehicle_tab" class="no-padding">
              <q-form @submit="onSubmit" class="q-gutter-md">
                <div class="row tabsborder">
                  <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm">
                    <div
                      class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-md text-center"
                    >
                      <q-img src="~src/assets/images/blank_profile.png" rounded></q-img>
                      <q-btn color="grey" dense rounded class="q-px-md q-mt-md">
                        Upload
                      </q-btn>
                    </div>
                  </div>
                  <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-sm">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Make</label>
                        <q-input outlined name="vehicle_make" v-model="vehicle_make" />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Model</label>
                        <q-input outlined name="vehicle_model" v-model="vehicle_model" />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Colour</label>
                        <q-input
                          outlined
                          name="vehicle_colour"
                          v-model="vehicle_colour"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Registration Number</label>
                        <q-input
                          outlined
                          name="registration_number"
                          v-model="registration_number"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Vehicle Licence Number</label>
                        <q-input
                          outlined
                          name="vehicle_licence_number"
                          v-model="vehicle_licence_number"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Vehicle Licence Renewal Date</label>
                        <q-input
                          outlined
                          name="licence_renewal_date"
                          v-model="licence_renewal_date"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Date of first Registration</label>
                        <q-input
                          outlined
                          name="first_registration_date"
                          v-model="first_registration_date"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">MOT Date</label>
                        <q-input outlined name="mot_date" v-model="mot_date" />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">MOT Frequency </label>
                        <q-input outlined name="mot_frequency" v-model="mot_frequency" />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Insurance Renewal Date</label>
                        <q-input
                          outlined
                          name="insurance_renewal_date"
                          v-model="insurance_renewal_date"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label"
                          >Private Hire Operators Licence Renewal
                        </label>
                        <q-input
                          outlined
                          name="operator_licence_renewal"
                          v-model="operator_licence_renewal"
                        />
                      </div>

                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">No of Passengers </label>
                        <q-input
                          outlined
                          name="number_of_passenger"
                          v-model="number_of_passenger"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Is the vehicle WAV </label>
                        <q-input
                          outlined
                          name="is_vehicle_wav"
                          v-model="is_vehicle_wav"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Vehicle Type </label>
                        <q-select
                          outlined
                          name="vehicle_type"
                          v-model="vehicle_type"
                          :options="vehicle_type_options"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <q-checkbox
                          name="ishandicap"
                          v-model="ishandicap"
                          label="Allow seats for Handicap"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Number of handicap seats </label>
                        <q-input
                          outlined
                          name="number_of_handicap_seats"
                          v-model="number_of_handicap_seats"
                        />
                      </div>
                      <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                                                <q-btn outline dense color="blue" class=""><q-icon name="add"></q-icon>  Add More</q-btn>
                                            </div> -->
                    </div>
                  </div>
                </div>
                <!-- FOOTER BUTTONS -->
                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1">
                    <q-btn
                      label="Cancel"
                      type="button"
                      color="grey"
                      class="q-ma-xs q-px-lg text-capitalize"
                    />
                    <q-btn
                      label="Create Vehicle"
                      type="submit"
                      class="q-ma-xs q-px-lg text-capitalize"
                      color="primary"
                    />
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg"
                  >
                    <q-btn
                      icon="add"
                      label="Add More Vehicle"
                      type="button"
                      color="grey"
                      class="q-ma-xs q-px-lg text-capitalize"
                    />
                    <!-- <q-btn @click="$router.replace('/')" outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
                                        <q-btn outline right class="text-capitalize themebtnborder" label="Save" /> -->
                  </div>
                </div>
              </q-form>
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
import { useQuasar, LocalStorage, Loading, QSpinnerGears, Notify } from "quasar";

export default defineComponent({
  name: "AddVehicle",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Add Vehicle - Fleet Management",
      };
    });
  },
  data() {
    return {
      image: ref(null),
      value: ref(81),
      activeSkeleton: false,
      model: ref("Business A"),
      options: ["Business A", "Business B", "Business C", "Business D"],
      vehicle_type_options: ["hatchback", "hatchback 2"],
      ishandicap: ref(false),
      tab: ref("add_vehicle_tab"),
      vehicle_make: ref(""),
      vehicle_model: ref(""),
      vehicle_colour: ref(""),
      registration_number: ref(""),
      vehicle_licence_number: ref(""),
      licence_renewal_date: ref(""),
      first_registration_date: ref(""),
      mot_date: ref(""),
      mot_frequency: ref(""),
      insurance_renewal_date: ref(""),
      operator_licence_renewal: ref(""),
      number_of_passenger: ref(""),
      is_vehicle_wav: ref(""),
      number_of_handicap_seats: ref(""),
      vehicle_type: ref(""),
      date: ref("2019/02/01"),
    };
  },
  methods: {
    async onSubmit() {
      try {
        var parent = this;
        Loading.show({
          spinner: QSpinnerGears,
          message: "Please wait...",
          backgroundColor: "grey",
        });

        const data = {
          councilId: LocalStorage.getItem("userId"),
          make: parent.vehicle_make,
          model: parent.vehicle_model,
          colour: parent.vehicle_colour,
          registrationNumber: parent.registration_number,
          vehicleLicenceNumber: parent.vehicle_licence_number,
          vehicleLicenceRenewalDate: parent.licence_renewal_date,
          dateOfFirstRegistration: parent.first_registration_date,
          motDate: parent.mot_date,
          motFrequency: parent.mot_frequency,
          insuranceRenewalDate: parent.insurance_renewal_date,
          privateHireOperatorsLicenceRenewal: parent.operator_licence_renewal,
          co2PerKg: parent.registration_number,
          noOfPassengers: parent.number_of_passenger,
          isThevehicleWAV: parent.is_vehicle_wav,
          vehicleType: parent.vehicle_type,
          seatsAvailableForHandicap: parent.number_of_handicap_seats,
          numberOfHandicapSeats: parent.number_of_handicap_seats,
        };

        const config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        };

        const response = await api.post("/saveNewVehicleDetails", data, config);

        if (response.status === 200) {
          Loading.hide();
          Notify.create({
            color: "green-5",
            textColor: "white",
            message: response.data.message,
            icon: "check",
          });
          this.$router.push("/vehicle-list");
        }
      } catch (error) {
        Loading.hide();
        console.error("Error:", error);
        Notify.create({
          color: "red-5",
          textColor: "white",
          message: "Something went wrong, please try again",
          icon: "warning",
        });
      }
    },
  },
  created() {
    let parent = this;
    setTimeout(function () {
      parent.activeSkeleton = true;
    }, 3000);
  },
});
</script>
