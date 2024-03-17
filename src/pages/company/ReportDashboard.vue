<template>
  <q-page class="pagelay ">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm">
          <small><q-breadcrumbs>
            <q-breadcrumbs-el to="/company" label="Home" />
            <q-breadcrumbs-el label="Reports Dashboard" />
          </q-breadcrumbs></small>
          <div class="text-title"><q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px;" /> Reports Dashboard</div>
          <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm text-right q-my-auto">
            <q-btn-group outline color="blue" >
                <q-btn outline color="blue" label="Day" />
                <q-btn outline color="blue" label="Week" active />
                <q-btn outline color="blue" label="Month" />
            </q-btn-group>
        </div>
      </div>

        <!-- GRAPH      -->
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                  <PieChart1> </PieChart1>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
                  <PieChart2> </PieChart2>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <ResponseTimeReportTable> </ResponseTimeReportTable >
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <AccidentReportTable> </AccidentReportTable >
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <AgeingDefectsTable> </AgeingDefectsTable >
                </div>
              </div>
            </div>
           
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <PieChart1> </PieChart1>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
                  <DefectReport> </DefectReport >
                </div>
              </div>
                 
            </div>
             
        </div>

    </div>
    
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import VueApexCharts from "vue3-apexcharts";
import DefectReport from 'components/company/report/DefectReport.vue'

// import AccidentChart from 'components/superadmin/dashboard/AccidentChart.vue'
import ResponseTimeReportTable from 'components/council/report/ResponseTimeReportTable.vue'
import AccidentReportTable from 'components/council/report/AccidentReportTable.vue'
import AgeingDefectsTable from 'components/company/report/AgeingDefectsTable.vue'
import PieChart1 from 'components/council/report/PieChart1.vue'
import PieChart2 from 'components/council/report/PieChart2.vue'
import { useMeta } from "quasar"

export default defineComponent({
  name: 'IndexPage',
  components: {
      // apexchart: VueApexCharts,
      DefectReport,
      ResponseTimeReportTable,
      AccidentReportTable,
      AgeingDefectsTable,
      PieChart1,
      PieChart2,
  },
  setup() {
    useMeta(() => {
      return {
        title: "Report Dashboard - Fleet Management",
      };
    });
  },
  data(){
    return {
        value: ref(81),
        active_calendar: ref(true),
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
