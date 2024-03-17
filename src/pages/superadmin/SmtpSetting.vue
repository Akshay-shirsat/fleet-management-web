<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
          <small
            ><q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el label="Settings" />
              <q-breadcrumbs-el label="SMTP Settings" /> </q-breadcrumbs
          ></small>
          <div class="text-title">SMTP Settings</div>
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
            <q-tab name="add_vehicle_tab" label="SMTP Setting" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated class="q-mt-md">
            <q-tab-panel name="add_vehicle_tab" class="no-padding">
              <q-form class="q-gutter-md" greedy>
                <div class="row tabsborder">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-sm">
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">SMTP Host</label>
                        <q-input
                          outlined
                          v-model="smtpHost"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">SMTP Port</label>
                        <q-input
                          outlined
                          v-model="smtpPort"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">SMTP User Name</label>
                        <q-input
                          outlined
                          v-model="smtpUser"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                        />
                      </div>
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <label class="custom-label">SMTP Password</label>
                        <q-input
                          outlined
                          v-model="smtpPassword"
                          :rules="[(val) => !!val || '* Required']"
                          lazy-rules
                          type="password"
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
                      to="/"
                    />
                    <q-btn
                      outline
                      right
                      class="text-capitalize themebtnborder"
                      label="Save"
                      @click="saveSmtpSettings"
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
import { api } from "boot/axios";
import { LocalStorage, Notify, Loading, QSpinnerGears, useMeta } from "quasar";
export default defineComponent({
  name: "SmtpSetting",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "SMTP Settings - Fleet Management",
      };
    });
  },
  data() {
    return {
      smtpHost: "",
      smtpUser: "",
      smtpPassword: "",
      smtpPort: "",
      testEmailId: "",
      activeSkeleton: true,
      tab: "add_vehicle_tab",
    };
  },
  methods: {
    async saveSmtpSettings() {
      var parent = this;
      if (
        this.smtpHost == "" &&
        this.smtpUser == "" &&
        this.smtpPassword == "" &&
        this.smtpPort == ""
      ) {
        this.$q.notify({
          timeout: Math.random() * 5000 + 3000,
          type: "negative",
          message: "Please fill all required field",
          position: "top",
        });
      } else {
        Loading.show({
          spinner: QSpinnerGears,
          message: "Please wait...",
          backgroundColor: "grey",
        });
        let data = {
          user_id: LocalStorage.getItem("userId"),
          userName: LocalStorage.getItem("userName"),
          smtpHost: this.smtpHost,
          smtpPassword: this.smtpPassword,
          smtpPort: this.smtpPort,
          smtpUser: this.smtpUser,
        };
        let config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
          },
        };
        await api
          .post("/saveSmtpSettings", data, config)
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              Loading.hide();
              parent.$q.notify({
                message: "SMTP settings updated successfully.",
                position: "top",
                timeout: Math.random() * 5000 + 3000,
                type: "positive",
                icon: "check",
              });
            } else {
              Loading.hide();
              parent.$q.notify({
                message: "Failed to update settings.",
                position: "top",
                timeout: Math.random() * 5000 + 3000,
                type: "positive",
                icon: "check",
              });
            }
          })
          .catch(function (error) {
            console.log(error);
            parent.$q.notify({
              message: "Failed to update settings.",
              position: "top",
              timeout: Math.random() * 5000 + 3000,
              type: "positive",
              icon: "check",
            });
            Loading.hide();
          });
      }
    },
    async getSmtpRecords() {
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
        .post("/getSmtpDetails/", data, config)
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            parent.smtpHost = response.data.smtpData.host;
            parent.smtpUser = response.data.smtpData.username;
            parent.smtpPassword = response.data.smtpData.password;
            parent.smtpPort = response.data.smtpData.port;
            parent.activeSkeleton = true;
          }
          Loading.hide();
        })
        .catch(function (error) {
          console.log(error);
          Loading.hide();
        });
    },
    async sendTestEmail() {
      Loading.show({
        spinner: QSpinnerGears,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      var parent = this;
      let data = {
        user_id: LocalStorage.getItem("userId"),
        userName: LocalStorage.getItem("userName"),
        testEmail: parent.testEmailId,
      };
      let config = {
        headers: {
          authorization: LocalStorage.getItem("token"),
        },
      };
      await api
        .post("/sendEmailData/", data, config)
        .then(function (response) {
          if (response.status == 200) {
            parent.testEmailId = "";
            Notify.create({
              color: "green-5",
              textColor: "white",
              message:
                "Email send on your given email id, please check your inbox.",
              icon: "check",
            });
          }
          Loading.hide();
        })
        .catch(function (error) {
          console.log(error);
          Loading.hide();
        });
    },
  },
  mounted() {
    this.getSmtpRecords();
    // let parent = this;
    // setTimeout(function () {
    //   parent.activeSkeleton = true;
    // }, 3000);
  },
});
</script>
