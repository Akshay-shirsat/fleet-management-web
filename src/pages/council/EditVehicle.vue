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
            <q-icon
              name="arrow_back_ios"
              class="q-mt-none"
              style="margin-top: -8px"
            />Edit Vehicle
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
                          vehicle_colour
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
  name: "EditVehicle",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Edit Vehicle - Fleet Management",
      };
    });
    const tab = ref("add_vehicle_tab");

    return { tab };
  },
  data() {
    return {
      image: ref(null),
      value: ref(81),
      activeSkeleton: false,
      model: ref("Business A"),
      options: ["Business A", "Business B", "Business C", "Business D"],
      vehicle_make: ref(""),
      vehicle_model: ref(""),
      vehicle_colour: ref(""),
      registration_number: ref(""),
      vehicle_licence_number: ref(""),
      licence_renewal_date: ref(""),
      mot_date: ref(""),
      mot_frequency: ref(""),
      insurance_renewal_date: ref(""),
      operator_licence_renewal: ref(""),
      is_vehicle_wav: ref(""),
      vehicle_type: ref(""),
      ishandicap: ref(""),
      number_of_handicap_seats: ref(""),
    };
  },
  methods: {
    async onSubmit() {
      try {
        Loading.show({
          spinner: QSpinnerGears,
          message: "Updating vehicle details...",
          backgroundColor: "grey",
        });
        const vehicleId = this.$route.params.vehicleId;
        const data = {
          councilId: LocalStorage.getItem("userId"),
          make: this.vehicle_make,
          model: this.vehicle_model,
          colour: this.vehicle_colour,
          registrationNumber: this.registration_number,
          vehicleLicenceNumber: this.vehicle_licence_number,
          vehicleLicenceRenewalDate: this.licence_renewal_date,
          dateOfFirstRegistration: this.first_registration_date,
          motDate: this.mot_date,
          motFrequency: this.mot_frequency,
          insuranceRenewalDate: this.insurance_renewal_date,
          privateHireOperatorsLicenceRenewal: this.operator_licence_renewal,
          noOfPassengers: this.number_of_passenger,
          isThevehicleWAV: this.is_vehicle_wav,
          vehicleType: this.vehicle_type,
          seatsAvailableForHandicap: this.ishandicap,
          numberOfHandicapSeats: this.number_of_handicap_seats,
        };

        const config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        };

        const response = await api.put(
          `/updateVehicleDetails/${vehicleId}`,
          data,
          config
        );

        if (response.status === 200) {
          Loading.hide();
          Notify.create({
            color: "green-5",
            textColor: "white",
            message: "Vehicle details updated successfully.",
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
          message: "Failed to update vehicle details. Please try again later.",
          icon: "warning",
        });
      }
    },
    async getVehicleDetails() {
      try {
        const vehicleId = this.$route.params.vehicleId;
        Loading.show({
          spinner: QSpinnerGears,
          message: "Fetching vehicle details...",
          backgroundColor: "grey",
        });

        const data = {
          user_id: LocalStorage.getItem("userId"),
          userName: LocalStorage.getItem("userName"),
        };

        const config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        };

        const response = await api.get(`/getVehicleDetails/${vehicleId}`, config, data);

        if (response.status === 200) {
          Loading.hide();

          this.vehicle_make = response.data.vehicleDetails.make;
          this.vehicle_model = response.data.vehicleDetails.model;
          this.vehicle_colour = response.data.vehicleDetails.colour;
          this.registration_number = response.data.vehicleDetails.registrationNumber;
          this.vehicle_licence_number = response.data.vehicleDetails.vehicleLicenceNumber;
          this.licence_renewal_date =
            response.data.vehicleDetails.vehicleLicenceRenewalDate;
          this.first_registration_date =
            response.data.vehicleDetails.dateOfFirstRegistration;
          this.mot_date = response.data.vehicleDetails.motDate;
          this.mot_frequency = response.data.vehicleDetails.motFrequency;
          this.insurance_renewal_date = response.data.vehicleDetails.insuranceRenewalDate;
          this.operator_licence_renewal =
            response.data.vehicleDetails.privateHireOperatorsLicenceRenewal;
          this.number_of_passenger = response.data.vehicleDetails.noOfPassengers;
          this.is_vehicle_wav = response.data.vehicleDetails.isThevehicleWAV;
          this.vehicle_type = response.data.vehicleDetails.vehicleType;
          this.ishandicap = response.data.vehicleDetails.seatsAvailableForHandicap;
          this.number_of_handicap_seats =
            response.data.vehicleDetails.numberOfHandicapSeats;
        }
      } catch (error) {
        Loading.hide();
        console.error("Error:", error);
        Notify.create({
          color: "red-5",
          textColor: "white",
          message: "Failed to fetch vehicle details. Please try again later.",
          icon: "warning",
        });
      }
    },
  },
  created() {
    this.getVehicleDetails();
    this.activeSkeleton = true;
  },
});
</script>
