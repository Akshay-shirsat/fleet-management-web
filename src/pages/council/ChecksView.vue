<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/council" label="Home" />
              <q-breadcrumbs-el to="/checks-list" label="All Checks" />
              <q-breadcrumbs-el label="Check Details" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">
            <q-icon
              name="arrow_back_ios"
              class="q-mt-none"
              style="margin-top: -8px"
            />
           Vehicle Check Details : X8 EXL
          </div>
        </div>
        <div
          class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto"
        >
          <q-btn flat dense icon="download"  class="q-mx-md filterbtn_right">
            <span class="q-pl-xs text-grey-9">Export</span>
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
      <q-card>
        <q-card-section class="row q-gutter-md justify-center">
          <div class="col">
          <q-card-section class="row items-center">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-card-section>
          </div>
          <div class="col text-center ">
            <div class="text-subtitle items-center text-weight-bold q-mt-md ">
              Driver Name
            </div>
            <div class="q-mt-md">Adam Harrington</div>
          </div>
          <div class="col text-center">
            <div class="text-subtitle text-weight-bold q-mt-md">Vehicle Regis.</div>
            <div class="q-mt-md">X8 EXL</div>
          </div>
          <div class="col text-center">
            <div class="text-subtitle q-mt-md text-weight-bold">Check Date</div>
            <div class="q-mt-md">06/02/2024</div>
          </div>
          <div class="col text-center">
            <div class="text-subtitle q-mt-md text-weight-bold">Duration</div>
            <div class="q-mt-md">10:30</div>
          </div>
          <div class="col text-center">
            <div class="text-subtitle q-mt-md text-weight-bold">Time</div>
            <div class="q-mt-md">14:08</div>
          </div>
          <div class="col text-center">
            <div class="text-subtitle q-mt-md text-weight-bold">Location</div>
            <div class="q-mt-md">Chipping Norton</div>
          </div>
          <div class="col-3 text-center">
            <div class="text-subtitle q-mt-md text-weight-bold">Defects</div>
            <q-btn dense no-caps outline style="color: negative;" class="text-negative q-mt-md" label="5 Defects Found" />

          </div>
          <div class="col text-center">
            <div class="text-subtitle q-mt-md text-weight-bold">Status</div>
            <q-btn dense class="q-mt-md bg-positive" rounded>Checked</q-btn>
          </div>
        </q-card-section>
      </q-card>
      <div class="row mb-block q-my-sm">
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          v-if="isdataAvailable == ''"
        >
          <q-splitter v-model="splitterModel">
            <template v-slot:before>
              <q-tabs v-model="tab" vertical>
                <q-tab name="requirement_tab" class="q-mb-md">
                  <q-skeleton width="150px" height="50px" />
                </q-tab>
                <q-tab name="interior_tab" class="q-mb-md">
                  <q-skeleton width="150px" height="50px" />
                </q-tab>
                <q-tab name="exterior_tab" class="q-mb-md">
                  <q-skeleton width="150px" height="50px" />
                </q-tab>
                <q-tab name="light_tab" class="q-mb-md">
                  <q-skeleton width="150px" height="50px" />
                </q-tab>
                <q-tab name="wiperwash_tab" class="q-mb-md">
                  <q-skeleton width="150px" height="50px" />
                </q-tab>
                <q-tab name="tyre_tab" class="q-mb-md">
                  <q-skeleton width="150px" height="50px" />
                </q-tab>
                <q-tab name="tyre_tab" class="q-mb-md">
                  <q-skeleton width="150px" height="50px" />
                </q-tab>
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels v-model="tab">
                <q-tab-panel name="requirement_tab" class="vtab-panel">
                  <q-skeleton height="150px" />
                  <br />
                  <q-skeleton height="150px" />
                  <br />
                  <q-skeleton height="150px" />
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </div>
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          v-if="isdataAvailable"
        >
          <q-splitter v-model="splitterModel" class="vtab-sidebar">
            <template v-slot:before>
              <q-tabs
                v-model="tab"
                vertical
                active-color="bg-primary"
                indicator-color="primary"
                class="text-grey-8 full-height horiz-tabsborder"
                dense
              >
                <q-tab
                  name="requirement_tab"
                  class="text-capitalize tabboderbottom borderbottom bg-warning text-negative"
                  label=" Council Requirement"
                >
                </q-tab>
                <q-tab
                  name="interior_tab"
                  label="Interior Check"
                  class="text-capitalize tabboderbottom borderbottom"
                >
                </q-tab>
                <q-tab
                  name="exterior_tab"
                  label="Exterior Questions"
                  class="text-capitalize tabboderbottom borderbottom"
                >
                </q-tab>
                <q-tab
                  name="light_tab"
                  label="Lightning Check"
                  class="text-capitalize tabboderbottom borderbottom"
                >
                </q-tab>
                <q-tab
                  name="wiperwash_tab"
                  label="Wipers and Washer"
                  class="text-capitalize tabboderbottom borderbottom text-negative"
                >
                </q-tab>
                <q-tab
                  name="tyre_tab"
                  label="Tyre Check"
                  class="text-capitalize tabboderbottom borderbottom"
                >
                </q-tab>

                <q-tab
                  name="work_tab"
                  label="Body Work"
                  class="text-capitalize tabboderbottom borderbottom text-negative"
                >
                </q-tab>
                <q-tab
                  name="odometer_tab"
                  label="Odometer"
                  class="text-capitalize tabboderbottom borderbottom"
                >
                </q-tab>
                <q-tab
                  name="comment_tab"
                  label="Comments"
                  class="text-capitalize tabboderbottom borderbottom"
                >
                </q-tab>
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
                class=""
              >
                <q-tab-panel
                  name="requirement_tab"
                  class="no-padding vtab-panel q-ma-md"
                >
                  <div class="col-md-12 col-sm-12 col-xs-12 bordered-collapse">
                    <div class="row" style="background-color: #f7f7f7">
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md"
                      >
                        <div class="text-weight-bold text-grey-9">Check Question</div>
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 flex justify-center items-center"
                      >
                        <div class="text-weight-bold text-grey-9">Answer</div>
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 flex justify-center items-center"
                      >
                        <div class="text-weight-bold text-grey-9">Upload photo</div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 flex justify-center items-center q-pa-sm"
                      >
                        <div class="text-weight-bold text-grey-9">Comments</div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12 bordered-collapse">
                    <div class="row">
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md bordered-column bordered-collapse"
                      >
                        <div class="text-weight-bold">
                          1. Council vehicle licence plate(s) clearly displayed
                          and not obscured?
                          <span class="text-red">*</span>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-btn
                          outline
                          class="themebtnborder bg-secondary text-white"
                          >Yes</q-btn
                        >
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-btn flat outline class="themebtnborder">N/A</q-btn>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center q-pa-sm"
                      >
                        <q-label
                          class="text-weight-light flex justify-center items-center q-pa-sm"
                          >Lorem ipsum dolor sit amet consectetur. Erat auctor a
                          aliquam vel congue luctus. Leo diam cras neque mauris
                          ac arcu elit ipsum dolor sit amet
                          consectetur.</q-label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12 bordered-collapse">
                    <div class="row">
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md bordered-column bordered-collapse"
                      >
                        <div class="text-weight-bold">
                          2. No Smoking signs are displayed and viewable by
                          every passenger? *
                          <span class="text-red">*</span>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-btn
                          outline
                          class="themebtnborder bg-warning text-white"
                          >No</q-btn
                        >
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-label class="text-primary">View Photos</q-label>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center q-pa-sm"
                      >
                        <q-label
                          class="text-weight-light flex justify-center items-center q-pa-sm"
                          >Lorem ipsum dolor sit amet consectetur. Erat auctor a
                          aliquam vel congue luctus. Leo diam cras neque mauris
                          ac arcu elit ipsum dolor sit amet
                          consectetur.</q-label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12 bordered-collapse">
                    <div class="row">
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md bordered-column bordered-collapse"
                      >
                        <div class="text-weight-bold">
                          3.Is there a first aid kit available and accessible? *
                          (Check expiry date)
                          <span class="text-red">*</span>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-btn outline class="themebtnborder bg-grey-4"
                          >N/A</q-btn
                        >
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-label class="text-primary">View Photos</q-label>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center q-pa-sm"
                      >
                        <q-label
                          class="text-weight-light flex justify-center items-center q-pa-sm"
                          >Lorem ipsum dolor sit amet consectetur. Erat auctor a
                          aliquam vel congue luctus. Leo diam cras neque mauris
                          ac arcu elit ipsum dolor sit amet
                          consectetur.</q-label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12 bordered-collapse">
                    <div class="row">
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md bordered-column bordered-collapse"
                      >
                        <div class="text-weight-bold">
                          4. Is there a fire extinguisher available and
                          accessible? * (Check expiry date)
                          <span class="text-red">*</span>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-btn
                          outline
                          class="themebtnborder bg-secondary text-white"
                          >Yes</q-btn
                        >
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-label class="text-primary">View Photos</q-label>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center q-pa-sm"
                      >
                        <q-label
                          class="text-weight-light flex justify-center items-center q-pa-sm"
                          >Lorem ipsum dolor sit amet consectetur. Erat auctor a
                          aliquam vel congue luctus. Leo diam cras neque mauris
                          ac arcu elit ipsum dolor sit amet
                          consectetur.</q-label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12 bordered-collapse">
                    <div class="row">
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md bordered-column bordered-collapse"
                      >
                        <div
                          class="text-weight-bold flex justify-center items-center"
                        >
                          5.Is the taxi meter visable and collaborated to the
                          current tariffs?
                          <span class="text-red">*</span>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-btn
                          outline
                          class="themebtnborder bg-secondary text-white"
                          >Yes</q-btn
                        >
                      </div>
                      <div
                        class="col-lg-2 col-md-2 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center"
                      >
                        <q-label class="text-primary">View Photos</q-label>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-12 col-xs-12 bordered-column bordered-collapse flex justify-center items-center q-pa-sm"
                      >
                        <q-label
                          class="text-weight-light flex justify-center items-center q-pa-sm"
                          >Lorem ipsum dolor sit amet consectetur. Erat auctor a
                          aliquam vel congue luctus. Leo diam cras neque mauris
                          ac arcu elit ipsum dolor sit amet
                          consectetur.</q-label
                        >
                      </div>
                    </div>
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </div>
      </div>

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

export default defineComponent({
  name: "VehicleCheck",
  components: {},
  setup() {
    useMeta(() => {
      return {
        title: "View Checks - Fleet Management",
      };
    });
  },
  data() {
    return {
      isdataAvailable: ref(false),
      value: ref(81),
      tab: ref("requirement_tab"),
      splitterModel: ref(20),
    };
  },
  created() {
    let parent = this;
    setTimeout(function () {
      parent.isdataAvailable = true;
    }, 3000);
  },
});
</script>
