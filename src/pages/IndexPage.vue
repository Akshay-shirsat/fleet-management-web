<template>
  <q-page class="" v-if="userType == 'super-admin'">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block">
        <div class="col-lg-9 col-md-9 col-sm-12 q-pa-sm">
          <small
            ><q-breadcrumbs>
              <q-breadcrumbs-el label="SuperAdmin" />
              <q-breadcrumbs-el label="Dashboard" /> </q-breadcrumbs
          ></small>
          <div class="text-title">Dashboard</div>
          <div
            class="text-weight-light header-sub-title"
            style="color: #7c8db5"
          >
            Here is the information about all Your Vehicles
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 q-pa-sm q-my-auto text-right">
          <q-btn-dropdown
            dense
            outline
            color="primary"
            class="text-capitalize"
            label="Weekly"
          >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Week One</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Week Two</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Week Three</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
      <q-separator />
      <!-- SHOW CARD SKELETON -->
      <div class="row q-pt-md q-mb-sm" v-if="showchart == ''">
        <div class="col-12 col-md q-pa-sm">
          <q-card class="my-card">
            <q-card-section class="mategreen text-white row q-pb-none">
              <div class="text-subtitle2 text-left col-9">
                <q-skeleton type="QBtn" style="width: 90%; height: 30px" />
              </div>
              <div class="text-h4 text-left col-3">
                <q-skeleton type="QBtn" style="width: 100%; height: 30px" />
              </div>
            </q-card-section>
            <q-card-section class="mategreen text-white row q-pt-sm">
              <q-skeleton type="QAvatar" class="" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md q-pa-sm">
          <q-card class="my-card">
            <q-card-section class="mategreen text-white row q-pb-none">
              <div class="text-subtitle2 text-left col-9">
                <q-skeleton type="QBtn" style="width: 90%; height: 30px" />
              </div>
              <div class="text-h4 text-left col-3">
                <q-skeleton type="QBtn" style="width: 100%; height: 30px" />
              </div>
            </q-card-section>
            <q-card-section class="mategreen text-white row q-pt-sm">
              <q-skeleton type="QAvatar" class="" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md q-pa-sm">
          <q-card class="my-card">
            <q-card-section class="mategreen text-white row q-pb-none">
              <div class="text-subtitle2 text-left col-9">
                <q-skeleton type="QBtn" style="width: 90%; height: 30px" />
              </div>
              <div class="text-h4 text-left col-3">
                <q-skeleton type="QBtn" style="width: 100%; height: 30px" />
              </div>
            </q-card-section>
            <q-card-section class="mategreen text-white row q-pt-sm">
              <q-skeleton type="QAvatar" class="" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md q-pa-sm">
          <q-card class="my-card">
            <q-card-section class="mategreen text-white row q-pb-none">
              <div class="text-subtitle2 text-left col-9">
                <q-skeleton type="QBtn" style="width: 90%; height: 30px" />
              </div>
              <div class="text-h4 text-left col-3">
                <q-skeleton type="QBtn" style="width: 100%; height: 30px" />
              </div>
            </q-card-section>
            <q-card-section class="mategreen text-white row q-pt-sm">
              <q-skeleton type="QAvatar" class="" />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <!-- SHOW ORIGINAL CARDS  -->
      <!-- <div class="row mb-block q-my-sm" v-if="showchart">
        <div class="col-12 col-md q-pa-sm">
          <q-card class="my-card bluecard">
            <q-card-section class="mategreen text-white row q-pb-none">
              <div class="text-subtitle2 text-left col-9">
                Check Completed <br />
                This Week
              </div>
              <div class="text-h4 text-left col-3">360</div>
            </q-card-section>
            <q-card-section class="mategreen text-white row q-pt-none">
              <div class="text-h2 text-weight-bold text-right q-pl-md col-12">
                <q-knob
                  show-value
                  font-size="12px"
                  v-model="value"
                  size="50px"
                  :thickness="0.12"
                  color="white"
                  track-color="blue-8"
                >
                  {{ value }}%
                </q-knob>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md q-pa-sm">
          <q-card class="my-card orangecard">
            <q-card-section class="text-white row q-pb-none">
              <div class="text-subtitle2 text-left col-9">
                Defects Reported <br />
                This Week
              </div>
              <div class="text-h4 text-left col-3">360</div>
            </q-card-section>
            <q-card-section class="text-white row q-pt-none">
              <div class="text-h2 text-weight-bold text-right q-pl-md col-12">
                <q-knob
                  show-value
                  font-size="12px"
                  v-model="value"
                  size="50px"
                  :thickness="0.12"
                  color="white"
                  track-color="orange-9"
                >
                  {{ value }}%
                </q-knob>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md q-pa-sm">
          <q-card class="my-card redcard">
            <q-card-section class="text-white row q-pb-none">
              <div class="text-subtitle2 text-left col-9">
                Accidents Reported <br />
                This Week
              </div>
              <div class="text-h4 text-left col-3">360</div>
            </q-card-section>
            <q-card-section class="text-white row q-pt-none">
              <div class="text-h2 text-weight-bold text-right col-12">
                <q-knob
                  show-value
                  font-size="12px"
                  v-model="value"
                  size="50px"
                  :thickness="0.12"
                  color="white"
                  track-color="red-10"
                >
                  {{ value }}%
                </q-knob>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md q-pa-sm">
          <q-card class="my-card purplecard">
            <q-card-section class="text-white row q-pb-none">
              <div class="text-subtitle2 text-left col-9">
                Vehicles Off Road <br />
                This Week
              </div>
              <div class="text-h4 text-left col-3">360</div>
            </q-card-section>
            <q-card-section class="text-white row q-pt-none">
              <div class="text-h2 text-weight-bold text-right col-12">
                <q-knob
                  show-value
                  font-size="12px"
                  v-model="value"
                  size="50px"
                  :thickness="0.12"
                  color="white"
                  track-color="purple-10"
                >
                  {{ value }}%
                </q-knob>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div> -->
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="showchart">
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
                  Check Completed <br />
                  This Week
                </div>
              </q-card-section>
              <q-card-section class="bg-secondary text-primary row q-pt-none">
                <div class="text-h2 text-weight-bold text-right q-pl-md col-12">
                  <q-knob
                    show-value
                    font-size="12px"
                    v-model="value"
                    size="50px"
                    :thickness="0.12"
                    color="white"
                    track-color="blue-8"
                  >
                    {{ value }}%
                  </q-knob>
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
                  Defects Reported <br />
                  This Week
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class="text-h2 text-weight-bold text-right q-pl-md col-12">
                  <q-knob
                    show-value
                    font-size="12px"
                    v-model="value"
                    size="50px"
                    :thickness="0.12"
                    color="white"
                    track-color="orange-9"
                  >
                    {{ value }}%
                  </q-knob>
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
                  Accidents Reported <br />
                  This Week
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class="text-h2 text-weight-bold text-right col-12">
                  <q-knob
                    show-value
                    font-size="12px"
                    v-model="value"
                    size="50px"
                    :thickness="0.12"
                    color="white"
                    track-color="red-10"
                  >
                    {{ value }}%
                  </q-knob>
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
                  Vehicles Off Road <br />
                  This Week
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class="text-h2 text-weight-bold text-right col-12">
                  <q-knob
                    show-value
                    font-size="12px"
                    v-model="value"
                    size="50px"
                    :thickness="0.12"
                    color="white"
                    track-color="red-10"
                  >
                    {{ value }}%
                  </q-knob>
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
      <div class="row">
        <div class="col-md-6 col-sm-12 q-pa-sm">
          <ComplianceChart> </ComplianceChart>
          <AccidentChart> </AccidentChart>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="row">
            <div class="col-md-12 col-sm-12 q-pa-sm">
              <DefectsChart> </DefectsChart>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-sm-12 q-pa-sm">
              <VehiclecheckChart> </VehiclecheckChart>
            </div>

          </div>
        </div>
      </div>
    </div>
  </q-page>
  <councilDashboard v-if="userType == 'council'" />
  <CompanyDashboard v-if="userType == 'company'" />
</template>

<script>
import { defineComponent, ref } from "vue";
// import VueApexCharts from "vue3-apexcharts";
import ComplianceChart from "components/superadmin/dashboard/ComplianceChart.vue";
import DefectsChart from "components/superadmin/dashboard/DefectsChart.vue";
import AccidentChart from "components/superadmin/dashboard/AccidentChart.vue";
import VehiclecheckChart from "components/superadmin/dashboard/VehiclecheckChart.vue";
import {
  useQuasar,
  LocalStorage,
  Loading,
  QSpinnerGears,
  Notify,
  useMeta,
} from "quasar";
import councilDashboard from "./council/CouncilDashboard.vue";
import CompanyDashboard from "./company/CompanyDashboard.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    // apexchart: VueApexCharts,
    ComplianceChart,
    DefectsChart,
    AccidentChart,
    VehiclecheckChart,
    councilDashboard,
    CompanyDashboard,
  },
  setup() {
    useMeta(() => {
      return {
        title: "Dashboard - Fleet Management",
      };
    });
  },
  data() {
    return {
      value: ref(81),
      showchart: false,
      userType: LocalStorage.getItem("user_type"),
    };
  },
  created() {
    let parent = this;
    setTimeout(function () {
      // this.basketAddSuccess = false;
      parent.showchart = true;
    }, 3000);
    console.log(this.userType);
  },
});
</script>
