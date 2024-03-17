<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
          <small
            ><q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el to="/council-list" label="Council" />
              <q-breadcrumbs-el label="Edit Council" /> </q-breadcrumbs
          ></small>
          <div class="text-title">
            <q-icon
              name="arrow_back_ios"
              class="q-mt-none"
              style="margin-top: -8px"
            />
            Edit Council
          </div>
          <div
            class="text-weight-light header-sub-title"
            style="color: #7c8db5"
          >
            Here is the information about Council details
          </div>
        </div>
      </div>

      <div class="row mb-block q-my-sm">
        <!-- SKELETON START -->
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          v-if="activeSkeleton == ''"
        >
          <q-card class="no-shadow no-padding">
            <q-card-actions align="left" class="q-gutter-md">
              <q-skeleton type="QBtn" width="150px" />
            </q-card-actions>
            <q-skeleton height="300px" square />
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
            <q-tab name="add_vehicle_tab" label="Council Information" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated class="q-mt-md">
            <q-tab-panel name="add_vehicle_tab" class="no-padding">
              <q-form @submit="updateCouncilRecord" class="q-gutter-md" greedy>
                <div class="row tabsborder">
                  <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm"
                    >
                      <label><b>Upload Image </b> </label>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm text-left"
                    >
                      <q-img
                        src="~src/assets/images/blank_profile.png"
                        v-if="!councilUploadUrl"
                      />

                      <q-img :src="councilUploadUrl" v-else />
                      {{ councilUploadUrl }}
                      <q-file
                        dense
                        flat
                        rounded
                        standout
                        v-model="image"
                        label="Select Image"
                        class="q-mt-md"
                      />
                    </div>
                  </div>
                  <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-sm">
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Council Name</label>
                        <q-input
                          outlined
                          v-model="council_name"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Number of Businesses</label>
                        <q-input outlined v-model="business_Number" />
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label"
                          >Names of Council Staff</label
                        >
                        <q-input
                          outlined
                          v-model="council_staff_name"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>

                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Telephone Number</label>
                        <q-input
                          type="number"
                          outlined
                          v-model="contact"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label"
                          >Contact email address</label
                        >
                        <q-input
                          type="email"
                          outlined
                          v-model="contact_email"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Password</label>
                        <q-input type="password" outlined v-model="password" />
                      </div>

                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label"
                          >Address of Head Office</label
                        >
                        <q-input
                          type="textarea"
                          outlined
                          v-model="address"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- FOOTER BUTTONS -->
                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"
                  ></div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg"
                  >
                    <q-btn
                      outline
                      label="Cancel"
                      class="text-capitalize q-mr-md themebtnborder"
                      to="/council-list"
                    />
                    <q-btn
                      outline
                      right
                      class="text-capitalize themebtnborder"
                      label="Save"
                      type="submit"
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
import {
  useQuasar,
  LocalStorage,
  Loading,
  QSpinnerGears,
  Notify,
} from "quasar";
export default defineComponent({
  name: "AddCouncil",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Add Council - Fleet Management",
      };
    });
  },
  data() {
    return {
      activeSkeleton: false,
      tab: ref("add_vehicle_tab"),
      council_name: ref(null),
      image: ref(null),
      business_Number: ref(null),
      council_staff_name: ref(null),
      contact: ref(null),
      contact_email: ref(null),
      password: ref(null),
      address: ref(null),
      councilUploadUrl: "",
    };
  },
  methods: {
    async updateCouncilRecord() {
      var parent = this;
      Loading.show({
        spinner: QSpinnerGears,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      const formData = new FormData();
      // Add form data
      formData.append("council_name", parent.council_name);
      formData.append("image", parent.image);
      formData.append("business_Number", parent.business_Number);
      formData.append("council_staff_name", parent.council_staff_name);
      formData.append("contact", parent.contact);
      formData.append("contact_email", parent.contact_email);
      formData.append("password", parent.password);
      formData.append("address", parent.address);

      try {
        let config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        };
        await api
          .put(
            "/updateCouncilRecord/" + this.$route.params.councilId,
            formData,
            config
          )
          .then(function (response) {
            if (response.status == 200) {
              Loading.hide();
              Notify.create({
                color: "green-5",
                textColor: "white",
                message: "Council details updated successfully",
                icon: "check",
              });
              parent.$router.push("/council-list");
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

      this.password = password;
    },
    async getCouncilDetails() {
      var parent = this;
      let data = {
        user_id: LocalStorage.getItem("userId"),
        userName: LocalStorage.getItem("userName"),
      };
      let config = {
        headers: {
          authorization: LocalStorage.getItem("token"),
        },
      };
      await api
        .get("/getCouncilDetails/" + this.$route.params.councilId, config, data)
        .then(function (response) {
          response = JSON.parse(JSON.stringify(response));
          if (response.status == 200) {
            var result = response.data.data;
            parent.council_name = result.councilName;
            parent.business_Number = result.numberOfBusinesses;
            parent.council_staff_name = result.councilStaffNames
              ? result.councilStaffNames
              : "";
            parent.contact = result.telephoneNumber;
            parent.contact_email = result.contactEmailAddress;

            parent.address = result.addressOfHeadOffice;
            if (result.uploadPhoto) {
              parent.councilUploadUrl =
                response.data.profilePath + result.uploadPhoto;
            }
          }
          parent.activeSkeleton = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    let parent = this;
    parent.getCouncilDetails();
    // setTimeout(function () {
    //   parent.activeSkeleton = true;
    // }, 3000);
  },
});
</script>
