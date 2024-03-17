<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-4 col-md-6 col-sm-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el to="/manageChecks" label="Checks Questions" />
              <q-breadcrumbs-el label="Add Checks Questions " />
            </q-breadcrumbs>
          </small>
          <div class="text-title">
            <q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px" />
            Add Checks Questions
          </div>
          <div class="text-weight-light header-sub-title" style="color: #7c8db5">
            <!-- Here is the information about all Your Vehicles -->
          </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12 q-pa-sm q-my-auto text-right"></div>
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
            <q-tab name="info_tab" label="Setup Checks Questions" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated class="q-mt-md">
            <q-tab-panel name="info_tab" class="no-padding">
              <q-form @submit="onSubmit" class="q-gutter-md" greedy>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                    <div class="row q-pa-md tabsborder">
                      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label q-mb-md">Check Type</label>
                        <q-radio
                          class="q-mt-md"
                          v-model="checkType"
                          checked-icon="task_alt"
                          unchecked-icon="panorama_fish_eye"
                          val="defect"
                          label="Defect"
                          size="md"
                        />
                        <br />
                        <q-radio
                          v-model="checkType"
                          checked-icon="task_alt"
                          unchecked-icon="panorama_fish_eye"
                          val="VehicleChecks"
                          label="Vehicle Checks"
                          size="md"
                          checked
                        />
                      </div>
                      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-md">
                        <label class="custom-label">Question Category</label>
                        <q-select
                          outlined
                          v-model="questionCategory"
                          :options="questionCategoryOptions"
                          lazy-rules
                          emit-value
                          map-options
                          :rules="[(val) => !!val || '* Required']"
                        />
                      </div>
                      <div
                        class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-md full-width"
                      >
                        <label class="custom-label">Check Question</label>
                        <q-input
                          v-model="question"
                          outlined
                          type="textarea"
                          class="full-width"
                          lazy-rules
                          :rules="[(val) => !!val || '* Required']"
                        />
                      </div>

                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-body1">
                        Question Options
                      </div>
                      <div
                        class="row col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        v-for="(option, index) in options"
                        :key="index"
                      >
                        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-md">
                          <label class="custom-label">Option - {{ index + 1 }}</label>
                          <q-input
                            outlined
                            v-model="options[index].option"
                            lazy-rules
                            :rules="[(val) => (val && val.length > 0) || '* Required']"
                          />
                        </div>

                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-md">
                          <q-btn round v-if="index == 0"
                            ><q-icon name="add" class="no-padding" @click="addoptions"
                          /></q-btn>
                          <q-btn round class="q-px-sm" v-else
                            ><q-icon
                              name="remove"
                              class="no-padding"
                              @click="removeoptions(index)"
                          /></q-btn>
                        </div>
                      </div>
                      <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <label class="custom-label">Is Question Required</label>
                          <q-radio
                            class="q-mt-md"
                            size="md"
                            v-model="isQuestionRequired"
                            val="yes"
                            label="Yes"
                          /><br />
                          <q-radio
                            size="md"
                            v-model="isQuestionRequired"
                            val="no"
                            label="No"
                          />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <label class="custom-label">Is Upload Photo Required</label>
                          <q-radio
                            class="q-mt-md"
                            size="md"
                            v-model="isUploadPhotoRequired"
                            val="yes"
                            label="Yes"
                          /><br />
                          <q-radio
                            size="md"
                            v-model="isUploadPhotoRequired"
                            val="no"
                            label="No"
                          />
                        </div>
                      </div>
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
                      label="Save"
                      type="submit"
                      class="q-ma-xs q-px-lg text-capitalize"
                      color="primary"
                    />
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg"
                  ></div>
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
  name: "AddChecks",
  setup() {
    useMeta(() => {
      return {
        title: "Add Checklist - Fleet Management",
      };
    });
  },
  data() {
    return {
      activeSkeleton: false,
      tab: ref("info_tab"),
      checkType: "vehicleChecks",
      options: [],
      questionCategory: "",
      questionCategoryOptions: [
        {
          label: "Council Requirement",
          value: "council_requirement",
        },
        {
          label: "Interior Check",
          value: "Interior_Check",
        },
        {
          label: "Exterior Questions",
          value: "Exterior_Questions",
        },
        {
          label: "Lightning Check",
          value: "Lightning_Check",
        },
        {
          label: "Wipers and Washer",
          value: "Wipers_and_Washer",
        },
        {
          label: "Tyre Check",
          value: "Tyre_Check",
        },
        {
          label: "Body Work",
          value: "Body_Work",
        },
        {
          label: "Tyre Check",
          value: "Tyre_Check",
        },
        {
          label: "Odometer",
          value: "Odometer",
        },
        {
          label: "Comments",
          value: "Comments",
        },
      ],
      question: "",
      isQuestionRequired: "yes",
      isUploadPhotoRequired: "yes",
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

        let data = {
          councilId: LocalStorage.getItem("userId"),
          questionFor: parent.checkType,
          questionCategory: parent.questionCategory,
          isQuestionRequired: parent.isQuestionRequired,
          isUploadNeeded: parent.isUploadPhotoRequired,
          question: parent.question,
          options: parent.options,
        };

        const config = {
          headers: {
            authorization: LocalStorage.getItem("token"),
          },
        };

        const response = await api.post("/saveCheckQuestions", data, config);

        if (response.status == 200) {
          Loading.hide();
          Notify.create({
            color: "green-5",
            textColor: "white",
            message: "Checklist added successfully",
            icon: "check",
          });
          this.$router.push("/manageChecklistVehicleCheckNDefects");
        }
      } catch (error) {
        Loading.hide();
        console.log("error :: " + error);
        Notify.create({
          color: "red-5",
          textColor: "white",
          message: "Something went wrong, please try again",
          icon: "check",
        });
      }
    },

    addoptions() {
      this.options.push({ option: "" });
    },
    removeoptions(index) {
      this.options.splice(index, 1);
    },
  },
  created() {
    setTimeout(() => {
      this.activeSkeleton = true;
    }, 3000);

    this.options.push({ option: "" });
  },
});
</script>
