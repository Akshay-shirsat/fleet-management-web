<template>
    <q-card bordered class="my-card no-shadow q-pa-md" v-if="activeComp == ''">
        <div class="text-h6">Co2 Ratings</div>
        <q-skeleton type="QBtn" class="q-mb-lg q-mr-lg" style="float:left" />
        <q-skeleton type="QBtn" class="q-mb-lg" />
        <div id="chartpie" class="q-mt-lg center">
            <q-skeleton type="circle" class="q-mb-lg" style="height:200px;width:200px" />
        </div>
    </q-card>
    <q-card bordered class="my-card no-shadow q-pa-md" v-if="activeComp">
        <div class="text-h6">Vehicle Checks Overview</div>
        <div id="chart_vehicle">
            <apexchart type="donut" :options="chartOptions_vehicle" :series="series_vehicle"></apexchart>
        </div>
    </q-card>
</template>
<script>
import { defineComponent } from 'vue'
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
    name: 'VehiclecheckChart',
    components: {
        apexchart: VueApexCharts,
    },
    data(){
        return {
            activeComp: false,
            projectdata : '',

            //VEHICLE CHECK GRAPH donat chart
            series_vehicle: [40, 20, 30],
            chartOptions_vehicle: {
                chart_vehicle: {
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#CB3333', '#53AA0F','#FF993A'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart_vehicle: {
                        width: 200
                        },
                        legend: {
                        show: true,
                        position: 'bottom'
                        }
                    }
                }]
            },
        }
    },
    created() {
        let parent=this;
        setTimeout(function(){
            // this.basketAddSuccess = false;
            parent.activeComp = true;
            console.log("The component is created yet.");
        }, 3000);

    }

})
</script>
