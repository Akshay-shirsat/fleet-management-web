<template>
  <q-page class="pagelay ">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 q-pa-sm">
          <small><q-breadcrumbs>
            <q-breadcrumbs-el label="Company Dashboard" />
          </q-breadcrumbs></small>
          <div class="text-title">Company Dashboard</div>
          <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all  Your Vehicles</div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
            <q-input dense filled v-model="text" class="fit" placeholder="Search" style="border-radius:8px;">
                <template v-slot:prepend>
                <q-icon name="search" />
                </template>
            </q-input>
        </div>
        
        
      </div>
      <q-separator />

      <!-- SHOW CARD SKELETON -->
      <div class="row q-pt-md q-mb-sm" v-if="showchart == ''">
          <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                  <q-card-section class="text-left q-pa-sm">
                      <div style="">
                          <q-space />
                          <div class="text-caption text-weight-bold col-12 ">
                              <q-badge class="blackbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm" color="black">
                                  <q-skeleton type="QBtn" style="width:50px;height:10px;" />
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
                          <div class="text-caption text-weight-bold col-12 ">
                              <q-badge class="infobadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm">
                                  <q-skeleton type="QBtn" style="width:50px;height:10px;" />
                              </q-badge>
                          </div>
                          <div class="text-h5 text-weight-bold"><q-skeleton type="text" /></div>
                      </div>
                  </q-card-section>
              </q-card>
          </div>
          <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                  <q-card-section class="text-left q-pa-sm">
                      <div style="">
                          <q-space />
                          <div class="text-caption text-weight-bold col-12 ">
                              <q-badge class="warningbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm">
                                  <q-skeleton type="QBtn" style="width:50px;height:10px;" />
                              </q-badge>
                          </div>
                          <div class="text-h5 text-weight-bold"><q-skeleton type="text" /></div>
                      </div>
                  </q-card-section>
              </q-card>
          </div>
          <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                  <q-card-section class="text-left q-pa-sm">
                      <div style="">
                          <q-space />
                          <div class="text-caption text-weight-bold col-12 ">
                              <q-badge dense class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm">
                                  <q-skeleton type="QBtn" style="width:50px;height:10px;" />
                              </q-badge>
                          </div>
                          <div class="text-h5 text-weight-bold"><q-skeleton type="text" /></div>
                      </div>
                  </q-card-section>
              </q-card>
          </div>
          <div class="col q-pr-md q-pl-none">
              <q-card bordered class="my-card no-shadow">
                  <q-card-section class="text-left q-pa-sm">
                      <div style="">
                          <q-space />
                          <div class="text-caption text-weight-bold col-12 ">
                              <q-badge class="dangerbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm">
                                  <q-skeleton type="QBtn" style="width:50px;height:10px;" />
                              </q-badge>
                          </div>
                          <div class="text-h5 text-weight-bold"><q-skeleton type="text" /></div>
                      </div>
                  </q-card-section>
              </q-card>
          </div>
      </div>
      <!-- SHOW ORIGINAL CARDS  -->
      <div class="row mb-block q-my-sm" v-if="showchart">
          <div class="col-12 col-md q-pa-sm">
            <q-card class="my-card bluecard">
                <q-card-section class="mategreen text-white row  q-pb-none">
                  <div class=" text-subtitle2 text-left col-12">Total Vehicles</div>
                </q-card-section>
                <q-card-section class="mategreen text-white row q-pt-none">
                    <div class="text-h4 text-left q-mt-md col-12">100</div>
                </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md q-pa-sm">
            <q-card class="my-card orangecard">
              <q-card-section class="text-white row  q-pb-none">
                  <div class=" text-subtitle2 text-left col-12">Total Drivers</div>
              </q-card-section>
              <q-card-section class="text-white row  q-pt-none">
                <div class="text-h4 text-left q-mt-md col-12">30</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md q-pa-sm">
            <q-card class="my-card redcard">
              <q-card-section class="text-white row q-pb-none">
                  <div class=" text-subtitle2 text-left col-12">Accident Reports</div>
              </q-card-section>
              <q-card-section class="text-white row q-pt-none">
                <div class="text-h4 text-left q-mt-md col-12">00</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md q-pa-sm">
            <q-card class="my-card purplecard">
              <q-card-section class="text-white row q-pb-none">
                  <div class=" text-subtitle2 text-left col-12">Defects</div>
              </q-card-section>
              <q-card-section class="text-white row q-pt-none">
                <div class="text-h4 text-left q-mt-md col-12">00</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md q-pa-sm">
            <q-card class="my-card pinkcard">
              <q-card-section class="text-white row q-pb-none">
                  <div class=" text-subtitle2 text-left col-12">Vehicle Off Road</div>
              </q-card-section>
              <q-card-section class="text-white row q-pt-none">
                <div class="text-h4 text-left q-mt-md col-12">00</div>
              </q-card-section>
            </q-card>
          </div>
      </div>

      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
            <VehicleDueTable > </VehicleDueTable >
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
            <DriverDueTable> </DriverDueTable >
        </div>
      </div>

    </div>
    
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMeta } from "quasar"
import VehicleDueTable from 'components/company/dashboard/VehicleDueTable.vue'
import DriverDueTable from 'components/company/dashboard/DriverDueTable.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
      // apexchart: VueApexCharts,
      VehicleDueTable,
      DriverDueTable,
  },
  setup() {
    useMeta(() => {
      return {
        title: "Company Dashboard - Fleet Management",
      };
    });
  },
  data(){
    return {
      value: ref(81),
      showchart:false,
    }
  },
  created() {
      let parent=this;
      setTimeout(function(){
          // this.basketAddSuccess = false;
          parent.showchart = true;
          console.log("The component is created yet.");
      }, 3000);     
  }
})
</script>
