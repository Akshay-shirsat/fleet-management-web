<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
          <small
            ><q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el label="Settings" />
              <q-breadcrumbs-el label="General Settings" /> </q-breadcrumbs
          ></small>
          <div class="text-title">General Settings</div>
          <div
            class="text-weight-light header-sub-title"
            style="color: #7c8db5"
          >
            Here is the information about all Your Vehicles
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
            <q-tab name="add_vehicle_tab" label="General Setting" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated class="q-mt-md">
            <q-tab-panel name="add_vehicle_tab" class="no-padding">
              <q-form class="q-gutter-md" greedy>
                <div class="row tabsborder">
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-sm">
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Website Title</label>
                        <q-input
                          outlined
                          name="website_title"
                          v-model="title"
                        />
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Company Name</label>
                        <q-input
                          outlined
                          name="company_name"
                          v-model="portalCompanyName"
                        />
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">E-mail</label>
                        <q-input outlined name="email" v-model="portalEmail" />
                      </div>
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Contact</label>
                        <q-input
                          outlined
                          name="contact"
                          v-model="portalContact"
                        />
                      </div>
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">Address</label>
                        <q-input
                          type="textarea"
                          outlined
                          name="address"
                          v-model="portalAddress"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm"
                    >
                      <label><b>Site Logo</b> </label>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm text-left"
                    >
                      <q-img :src="portallogourl"></q-img>
                      <q-file
                        dense
                        rounded
                        standout
                        name="site_logo"
                        v-model="portalLogo"
                        label="Update Logo"
                        class="q-mt-md"
                      />
                    </div>
                    <q-separator />
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm"
                    >
                      <label><b>Fevicon</b> </label>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm text-left"
                    >
                      <q-img :src="portalfaviconourl" />
                      <q-file
                        dense
                        rounded
                        standout
                        name="site_logo"
                        v-model="portalFavIcon"
                        label="Update Fevicon"
                        class="q-mt-md"
                      />
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
                      to="/"
                    />
                    <q-btn
                      outline
                      right
                      class="text-capitalize themebtnborder"
                      label="Save"
                      @click="savePortalSettings"
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
import { LocalStorage, Notify, Loading, QSpinnerGears } from "quasar";
import { api } from "boot/axios";
export default defineComponent({
  name: "SettingPage",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "Settings - Fleet Management",
      };
    });
  },
  data() {
    return {
      value: ref(81),
      activeSkeleton: false,
      tab: ref("add_vehicle_tab"),
      title: "",
      portalLogo: "",
      portalFavIcon: "",
      portalfaviconourl: "",
      portallogourl: "",
      portalAddress: "",
      portalContact: "",
      portalEmail: "",
      portalWebsite: "",
      portalCompanyName: "",
    };
  },
  methods: {
    async savePortalSettings() {
      var parent = this;
      Loading.show({
        spinner: QSpinnerGears,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      const formData = new FormData();
      // Add form data
      formData.append("title", parent.title);
      formData.append("portalAddress", parent.portalAddress);
      formData.append("portalContact", parent.portalContact);
      formData.append("portalEmail", parent.portalEmail);
      formData.append("portalWebsite", parent.portalWebsite);
      formData.append("portalLogo", parent.portalLogo);
      formData.append("portalFavIcon", parent.portalFavIcon);
      formData.append("portalCompanyName", parent.portalCompanyName);

      try {
        let config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        };
        await api
          .post("/savePortalSettings", formData, config)
          .then(function (response) {
            if (response.status == 200) {
              Loading.hide();
              Notify.create({
                color: "green-5",
                textColor: "white",
                message: "Portal data updated successfully",
                icon: "check",
              });
            }
          })
          .catch(function (error) {
            Notify.create({
              color: "red-5",
              textColor: "white",
              message: error,
              icon: "check",
            });
          });
      } catch (error) {
        Loading.hide();
        Notify.create({
          color: "red-5",
          textColor: "white",
          message: error,
          icon: "check",
        });
      }
    },

    async getPortalSettings() {
      Loading.show({
        spinner: QSpinnerGears,
        message: "Please wait...",
        backgroundColor: "grey",
      });
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
        .post("/getPortalSettings/", data, config)
        .then(function (response) {
          if (response.status == 200) {
            parent.title = response.data.portalDatas.title;
            parent.portalAddress = response.data.portalDatas.portalAddress;
            parent.portalContact = response.data.portalDatas.portalContact;
            parent.portalEmail = response.data.portalDatas.portalEmail;
            parent.portalWebsite = response.data.portalDatas.portalWebsite;
            parent.portallogourl = response.data.portalDatas.portalLogo;
            parent.portalfaviconourl = response.data.portalDatas.faviconLogo;
            parent.portalCompanyName =
              response.data.portalDatas.portalCompanyName;
            parent.activeSkeleton = true;
          }
          Loading.hide();
        })
        .catch(function (error) {
          Loading.hide();
        });
    },
  },
  created() {
    let parent = this;
    this.getPortalSettings();
    // setTimeout(function () {
    //   parent.activeSkeleton = true;
    // }, 3000);
  },
});
</script>
