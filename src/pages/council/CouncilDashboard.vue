<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
          <small
            ><q-breadcrumbs>
              <q-breadcrumbs-el label="Council Dashboard" /> </q-breadcrumbs
          ></small>
          <div class="text-title">
            <q-icon
              name="arrow_back_ios"
              class="q-mt-none"
              style="margin-top: -8px"
            />
            Council Dashboard
          </div>
        </div>
      </div>

      <!-- SHOW CARD SKELETON -->
      <div class="row q-pt-md q-mb-sm" v-if="showchart == ''">
        <div class="col q-pr-md q-pl-none">
          <q-card bordered class="my-card no-shadow">
            <q-card-section class="text-left q-pa-sm">
              <div style="">
                <q-space />
                <div class="text-caption text-weight-bold col-12">
                  <q-badge
                    class="blackbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm"
                    color="black"
                  >
                    <q-skeleton type="QBtn" style="width: 50px; height: 10px" />
                  </q-badge>
                </div>
                <div class="text-h5 text-weight-bold">
                  <q-skeleton type="text" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pr-md q-pl-none">
          <q-card bordered class="my-card no-shadow">
            <q-card-section class="text-left q-pa-sm">
              <div style="">
                <q-space />
                <div class="text-caption text-weight-bold col-12">
                  <q-badge class="infobadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm">
                    <q-skeleton type="QBtn" style="width: 50px; height: 10px" />
                  </q-badge>
                </div>
                <div class="text-h5 text-weight-bold">
                  <q-skeleton type="text" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pr-md q-pl-none">
          <q-card bordered class="my-card no-shadow">
            <q-card-section class="text-left q-pa-sm">
              <div style="">
                <q-space />
                <div class="text-caption text-weight-bold col-12">
                  <q-badge class="warningbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm">
                    <q-skeleton type="QBtn" style="width: 50px; height: 10px" />
                  </q-badge>
                </div>
                <div class="text-h5 text-weight-bold">
                  <q-skeleton type="text" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pr-md q-pl-none">
          <q-card bordered class="my-card no-shadow">
            <q-card-section class="text-left q-pa-sm">
              <div style="">
                <q-space />
                <div class="text-caption text-weight-bold col-12">
                  <q-badge
                    dense
                    class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm"
                  >
                    <q-skeleton type="QBtn" style="width: 50px; height: 10px" />
                  </q-badge>
                </div>
                <div class="text-h5 text-weight-bold">
                  <q-skeleton type="text" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pr-md q-pl-none">
          <q-card bordered class="my-card no-shadow">
            <q-card-section class="text-left q-pa-sm">
              <div style="">
                <q-space />
                <div class="text-caption text-weight-bold col-12">
                  <q-badge class="dangerbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm">
                    <q-skeleton type="QBtn" style="width: 50px; height: 10px" />
                  </q-badge>
                </div>
                <div class="text-h5 text-weight-bold">
                  <q-skeleton type="text" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row mb-block q-my-sm" v-if="showchart">
        <div class="col-12 col-md-9">
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
                    Vehicle License <br />
                    due in
                  </div>
                </q-card-section>
                <q-card-section class="bg-secondary text-primary row q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold"
                  >
                    10 <span class="text-subtitle1 text-weight-bold">days</span>
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
                    Vehicle MOT <br />
                    Due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold text-purple-10"
                  >
                    10
                    <span class="text-subtitle1 text-weight-bold text-purple-10"
                      >days</span
                    >
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
                    Insurance <br />Due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold text-amber-10"
                  >
                    20
                    <span class="text-subtitle1 text-weight-bold text-amber-10"
                      >days</span
                    >
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
                    Driver Medical <br />Due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold text-red-14"
                  >
                    20
                    <span class="text-subtitle1 text-weight-bold text-red-14"
                      >days</span
                    >
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md col-sm q-pa-sm">
              <q-card class="my-card greycard">
                <q-card-section dense class="row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 text-weight-bold dashboardcard"
                  >
                    Driver License <br />
                    Due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold"
                  >
                    20 <span class="text-subtitle1 text-weight-bold">days</span>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md col-sm q-pa-sm">
              <q-card class="my-card pinkcard">
                <q-card-section dense class="row q-pb-none">
                  <div
                    class="text-subtitle2 text-left col-12 text-weight-bold text-pink-12 dashboardcard"
                  >
                    Safeguard Training <br />due
                  </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  <div
                    class="text-h6 text-left q-mt-md col-12 text-weight-bold text-pink-12"
                  >
                    20
                    <span class="text-subtitle1 text-weight-bold text-pink-12"
                      >days</span
                    >
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="row q-pa-md">
            <div class="col-12 col-md-12">
              <LeastCompliantChart> </LeastCompliantChart>

            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="row">
            <div class="col-md col-md q-pa-sm">
              <q-card class="my-card complaincecard">
                <apexchart
                  width="100%"
                  type="donut"
                  :options="chartOptions"
                  :series="series"
                  height="auto"
                ></apexchart>
              </q-card>
            </div>
          </div>
          <div class="row">
            <div class="col-md col-md q-pa-sm">
              <q-card class="my-card defectcard">
                <apexchart
                  width="100%"
                  type="donut"
                  :options="chartOptionstwo"
                  :series="seriestwo"
                  height="auto"
                ></apexchart>
              </q-card>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12 q-pa-sm">
          <LeastCompliantChart> </LeastCompliantChart>

          <!-- <DefectsChart> </DefectsChart> -->
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
              <AccidentChart> </AccidentChart>
              <DefectsTable> </DefectsTable>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm">
              <RatingCheckChart> </RatingCheckChart>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
              <q-card bordered class="my-card no-shadow q-pa-md">
                <div style="min-height: 300px">
                  <div class="text-h6">New Updates</div>
                </div>
              </q-card>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMeta } from "quasar";

import VueApexCharts from "vue3-apexcharts";
import LeastCompliantChart from "components/council/dashboard/LeastCompliantChart.vue";
import DefectsChart from "components/superadmin/dashboard/DefectsChart.vue";
// import AccidentChart from 'components/superadmin/dashboard/AccidentChart.vue'
import DefectsTable from "components/council/dashboard/DefectsTable.vue";
import RatingCheckChart from "components/council/dashboard/RatingCheckChart.vue";
import VehiclecheckChart from "components/superadmin/dashboard/VehiclecheckChart.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    apexchart: VueApexCharts,
    //DefectsChart,
    DefectsTable,
   // RatingCheckChart,
    LeastCompliantChart,
  },
  setup() {
    useMeta(() => {
      return {
        title: "Council Dashboard - Fleet Management",
      };
    });
  },
  data() {
    return {
      value: ref(100),
      showchart: true,
      xaxis: {
        labels: {
          show: false,
        },
      },
      chartOptionstwo: {
        labels: ["", "", "yellow", "yellow"],
          dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      title: {
              text: 'Defects Report',
              align: 'left',
              color: 'yellow',
             
            },

      },
      chartOptions: {
        labels: ["", "", "", "Red"],
          dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      title: {
              text: 'Compliance Check',
              align: 'left',
              color: 'red'
            },

      },
      series: [0, 0, 0, 75],
      seriestwo: [0, 0, 10, 0],
    };
  },
  created() {
    let parent = this;
    setTimeout(function () {
      // this.basketAddSuccess = false;
      parent.showchart = true;
      console.log("The component is created yet.");
    }, 3000);
  },
});
</script>
