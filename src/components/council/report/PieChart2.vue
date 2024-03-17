<template>
    <!-- SKELETON VIEW START -->
    <q-card bordered class="my-card no-shadow q-pa-md" v-if="activeComp == ''">
        <div class="text-h6">
            <q-btn-dropdown dense flat color="primary" class="text-capitalize" label="Weekly" >
                <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                        <q-item-label>Mid Week</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup>
                        <q-item-section>
                        <q-item-label>Weekly</q-item-label>
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
        <q-skeleton type="QBtn" class="q-mb-lg q-mr-lg" style="float:left" />
        <q-skeleton type="QBtn" class="q-mb-lg" />
        <div id="chart_vehicle" class="q-mt-lg center">
            <q-skeleton type="circle" class="q-mb-lg" style="height:200px;width:200px" />
        </div>
    </q-card>
    <!-- SKELETON VIEW END -->
    <!-- GRAPH VIEW START -->
    <q-card bordered class="my-card no-shadow q-pa-md" v-if="activeComp">
        <div class="text-h6 text-center">
            <q-btn-dropdown dense flat color="primary" class="text-capitalize" label="Weekly" >
                <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                        <q-item-label>Mid Week</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup>
                        <q-item-section>
                        <q-item-label>Weekly</q-item-label>
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
        <div id="chart_vehicle">
            <apexchart type="donut" :options="chartOptions_vehicle" :series="series_vehicle"></apexchart>
        </div>
    </q-card>
    <!-- GRAPH VIEW END -->
</template>
<script>
import { defineComponent } from 'vue'
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
    name: 'PieChart1',
    components: {
        apexchart: VueApexCharts,
    },
    data(){
        return {
            activeComp: false,
            projectdata : '',

            //VEHICLE CHECK GRAPH donat chart
            series_vehicle: [40, 10],
            chartOptions_vehicle: {
                chart_vehicle: {
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#FF993A','#53AA0F'],
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