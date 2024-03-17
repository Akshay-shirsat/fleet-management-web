<style>
.q-table thead, .q-table tr, .q-table th, .q-table td {
    border-color: rgb(0 0 0 / 0%);
}
</style>
<template>
  <q-page class="pagelay pagebg">
    <div class="q-pa-xs example-row-equal-width">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 q-pa-xs">
            <q-card bordered class="no-shadow">
                <div class="q-pa-md">
                  <div class="text-title">Welcome Back, Europcar</div>
                  <div class="text-weight-light" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
                </div>
            </q-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 q-pa-xs">
            <q-card bordered class="no-shadow">
              <div class="row no-padding">
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row">
                        <div class=" text-h6 text-left col-9"> 150 <br>Completed Checks</div>
                        <div class="text-h4 text-left col-3 q-my-auto"><q-icon name="people" class="text-blue" /></div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row">
                        <div class=" text-h6 text-left col-9"> 53 <br>Accident Reports  </div>
                        <div class="text-h4 text-left col-3 q-my-auto"><q-icon name="sports_motorsports" class="text-blue" /></div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row">
                        <div class=" text-h6 text-left col-9"> 12 <br>Total Defaults  </div>
                        <div class="text-h4 text-left col-3 q-my-auto"><q-icon name="task_alt" class="text-blue" /></div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <!-- <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row ">
                        <div class=" text-h6 text-left col-9"> 209 <br>Co2 Score </div>
                        <div class="text-h4 text-left col-3 q-my-auto"><q-icon name="u_turn_right" class="text-blue rotate-270" /></div>
                    </q-card-section>
                  </q-card>
                </div> -->
              </div>
            </q-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8 col-sm-12 q-pa-xs">
          <q-card bordered class="no-shadow q-pa-md" style="min-height:650px">
            <div class="text-h6">Business List
              <q-icon name="refresh" class="float-right text-blue" size="30px" />
              <q-btn dense outline class="q-px-sm text-blue float-right text-capitalize"> <q-icon name="add" /> Add Driver</q-btn>
            </div>
            <q-markup-table class="no-border">
                <thead>
                    <tr>
                    <th class="text-left">Business Name</th>
                    <th class="text-left">Business Email</th>
                    <th class="text-left">Contact Name</th>
                    <th class="text-left">Contact Telephone </th>
                    <th class="text-left">Flagged</th>
                    <th class="text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">excelsiortaxis@gmail.com</td>
                        <td class="text-left">167,000 </td>
                        <td class="text-left">167,000 </td>
                        <td>
                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(243, 139, 65, 0.25);color:#F38B41">
                            <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                            03
                          </q-badge>

                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(255, 0, 0, 0.11);color:#FF0000">
                            <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                            03
                          </q-badge>
                          
                        </td>
                        <td class="text-left">
                            <q-icon name="edit" size="20px" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">excelsiortaxis@gmail.com</td>
                        <td class="text-left">167,000 </td>
                        <td class="text-left">167,000 </td>
                        <td>
                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(243, 139, 65, 0.25);color:#F38B41">
                            <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                            03
                          </q-badge>

                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(255, 0, 0, 0.11);color:#FF0000">
                            <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                            03
                          </q-badge>
                          
                        </td>
                        <td class="text-left">
                            <q-icon name="edit" size="20px" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">excelsiortaxis@gmail.com</td>
                        <td class="text-left">167,000 </td>
                        <td class="text-left">167,000 </td>
                        <td>
                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(243, 139, 65, 0.25);color:#F38B41">
                            <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                            03
                          </q-badge>

                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(255, 0, 0, 0.11);color:#FF0000">
                            <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                            03
                          </q-badge>
                          
                        </td>
                        <td class="text-left">
                            <q-icon name="edit" size="20px" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">excelsiortaxis@gmail.com</td>
                        <td class="text-left">167,000 </td>
                        <td class="text-left">167,000 </td>
                        <td>
                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(243, 139, 65, 0.25);color:#F38B41">
                            <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                            03
                          </q-badge>

                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(255, 0, 0, 0.11);color:#FF0000">
                            <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                            03
                          </q-badge>
                          
                        </td>
                        <td class="text-left">
                            <q-icon name="edit" size="20px" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">excelsiortaxis@gmail.com</td>
                        <td class="text-left">167,000 </td>
                        <td class="text-left">167,000 </td>
                        <td>
                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(243, 139, 65, 0.25);color:#F38B41">
                            <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                            03
                          </q-badge>

                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(255, 0, 0, 0.11);color:#FF0000">
                            <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                            03
                          </q-badge>
                          
                        </td>
                        <td class="text-left">
                            <q-icon name="edit" size="20px" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">excelsiortaxis@gmail.com</td>
                        <td class="text-left">167,000 </td>
                        <td class="text-left">167,000 </td>
                        <td>
                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(243, 139, 65, 0.25);color:#F38B41">
                            <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                            03
                          </q-badge>

                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(255, 0, 0, 0.11);color:#FF0000">
                            <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                            03
                          </q-badge>
                          
                        </td>
                        <td class="text-left">
                            <q-icon name="edit" size="20px" class="q-pr-sm" />
                        </td>
                    </tr>
                </tbody>
            </q-markup-table>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="row">
            <div class="col-md-12 col-sm-12 q-pa-xs">
              <q-card bordered class=" no-shadow q-pa-md">
                <div class="text-h6">Vehicle Checks Overview</div>
                <div id="chart_vehicle">
                  <apexchart type="donut" :options="chartOptions_vehicle" :series="series_vehicle"></apexchart>
                </div>
              </q-card>
              <q-card bordered class="no-shadow q-pa-md q-mt-md">
                <div class="text-h6">Reported Defects</div>
                <div id="chart_report">
                  <apexchart type="bar" height="250" :options="chartOptions_report" :series="series_report"></apexchart>
                </div>
              </q-card>
            </div>
          </div>
          
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 q-pa-xs">
            <q-card bordered class="no-shadow">
              <div class="row no-padding">
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row">
                        <div class=" text-h6 text-left col-9"> 150 <br>Completed Checks</div>
                        <div class="text-h4 text-left col-3 q-my-auto"><q-icon name="people" class="text-blue" /></div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row">
                        <div class=" text-h6 text-left col-9"> 53 <br>Accident Reports  </div>
                        <div class="text-h4 text-left col-3 q-my-auto"><q-icon name="sports_motorsports" class="text-blue" /></div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row">
                        <div class=" text-h6 text-left col-9"> 12 <br>Total Defaults  </div>
                        <div class="text-h4 text-left col-3 q-my-auto"><q-icon name="task_alt" class="text-blue" /></div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <!-- <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row ">
                        <div class=" text-h6 text-left col-9"> 209 <br>Co2 Score </div>
                        <div class="text-h4 text-left col-3 q-my-auto"><q-icon name="u_turn_right" class="text-blue rotate-270" /></div>
                    </q-card-section>
                  </q-card>
                </div> -->
              </div>
            </q-card>
        </div>
      </div>

    </div>
    
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: 'IndexPage',
  components: {
      apexchart: VueApexCharts,
  },
  data(){
    return {
      value: ref(81),
      

      //BUSINESS COMPLIANCE Graph
      series: [{
        data: [21, 22, 10, 28, 16, 21]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: ['#367CFF', '#53AA0F','#B548C6','#53AA0F', '#DC3434', '#32A7E2'],
        plotOptions: {
          bar: {
            columnWidth: '20%',
            distributed: true,
            borderRadius: 9,
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
              fontSize: '10px',
            }
          }
        }
      },

      //ACCIDENT Graph
      series_areport: [{
        data: [400, 430, 448, 470, 540, 580]
      }],
      chartOptions_areport: {
        chart_areport: {
          type: 'bar',
          height: 380,
        },
        plotOptions: {
          bar: {
            barHeight: '30%',
            distributed: true,
            horizontal: true,
            borderRadius: 3,
            dataLabels: {
              position: 'bottom',
            },
          }
        },
        colors: ['#CB3333', '#32A7E2', '#FF8700', '#4BA83D', '#A5978B', '#6750A4'],
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        stroke: {
          width: 1,
          colors: ['#fff'],
        },
        xaxis: {
          categories: ['Business Name (10)', 'Business Name', 'Business Name', 'Business Name', 'Business Name', 'Business Name'],
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: ['#8F8F8F'],
            }
          }
        },
        legend: {
          show: false,
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        }
      },

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
  }
})
</script>
