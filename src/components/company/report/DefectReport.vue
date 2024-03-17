<template>

    <q-card bordered class="my-card no-shadow q-pa-md q-mb-md" v-if="activeComp == ''">
        <div class="text-h6">Reported Defects</div>
        <div id="chart">
            <q-skeleton type="QRange" style="height:300px" />
        </div>
    </q-card>
    <q-card bordered class="my-card no-shadow q-pa-md"  v-if="activeComp">
        <div class="text-h6">Reported Defects</div>
        <div id="chart_report">
            <apexchart type="bar" height="250" :options="chartOptions_report" :series="series_report"></apexchart>
        </div>
        <q-markup-table>
            <thead>
                <tr>
                <th class="text-left">Vehicle Name</th>
                <th class="text-right">Average Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left"><q-badge rounded color="orange-7" /> Vehicle </td>
                    <td class="text-right"> 5</td>
                </tr>
                <tr>
                    <td class="text-left"><q-badge rounded color="purple-7" /> Vehicle </td>
                    <td class="text-right">28</td>
                </tr>
                <tr>
                    <td class="text-left"><q-badge rounded color="red-7" /> Vehicle </td>
                    <td class="text-right">28</td>
                </tr>
                <tr>
                    <td class="text-left"><q-badge rounded color="green-7" /> Vehicle </td>
                    <td class="text-right">28</td>
                </tr>
                <tr>
                    <td class="text-left"><q-badge rounded color="orange-7" /> Vehicle </td>
                    <td class="text-right">28</td>
                </tr>

            </tbody>
        </q-markup-table>
    </q-card>
</template>
<script>
import { defineComponent } from 'vue'
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
    name: 'DefectReport',
    components: {
        apexchart: VueApexCharts,
    },
    data(){
        return {
            activeComp: false,
            projectdata : '',

            //Defects REPORT
            series_report: [{
                data: [11, 22, 10, 28, 16, 21]
            }],
            chartOptions_report: {
                chart_report: {
                height: 350,
                type: 'bar',
                events: {
                    click: function(chart_report, w, e) {
                    // console.log(chart, w, e)
                    }
                }
                },
                colors: ['#F38B41', '#CD82AD','#CC4748','#CD82AD', '#CC4748', '#448E4D'],
                plotOptions: {
                bar: {
                    columnWidth: '30%',
                    distributed: true,
                    borderRadius: 5,
                }
                },
                dataLabels: {
                enabled: false
                },
                legend: {
                show: false
                },
                xaxis: {
                categories: [
                    ['Business Name', ''],
                    ['Business Name', ''],
                    ['Business Name', ''],
                    ['Business Name', ''],
                    ['Business Name', ''],
                    ['Business Name', ''],
                ],
                labels: {
                    style: {
                    colors: ['#8F8F8F', '#8F8F8F','#8F8F8F','#8F8F8F', '#8F8F8F', '#8F8F8F'],
                    fontSize: '10px'
                    }
                }
                }
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