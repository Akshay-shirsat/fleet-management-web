<template>
  <q-page class="pagebg">
    <div class="q-pa-md example-row-equal-width">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 q-pa-sm">
            <q-card bordered class="no-shadow">
                <div class="q-pa-md">
                  <div class="text-title">Welcome Back, Europcar</div>
                  <div class="text-weight-light" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
                </div>
            </q-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 q-pa-sm">
            <q-card bordered class="no-shadow">
              <div class="row no-padding">
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row q-pb-none">
                        <div class=" text-h6 text-left col-9"> 150 <br>Total users</div>
                        <div class="text-h4 text-left col-3"><q-icon name="people" class="text-blue" /></div>
                    </q-card-section>
                    <q-card-section class="row q-pt-none">
                      <div class="text-subtitle1 text-left col-12" style="color:#7C8DB5">
                        <q-icon name="north_east" class="text-green"></q-icon> 1 Added This Week
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row q-pb-none">
                        <div class=" text-h6 text-left col-9"> 53 <br>Total Vehicles </div>
                        <div class="text-h4 text-left col-3"><q-icon name="sports_motorsports" class="text-blue" /></div>
                    </q-card-section>
                    <q-card-section class="row q-pt-none">
                      <div class="text-subtitle1 text-left col-12" style="color:#7C8DB5">
                        <q-icon name="north_east" class="text-green"></q-icon> 1 Added This Week
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row q-pb-none">
                        <div class=" text-h6 text-left col-9"> 12 <br>Total Accident Reports </div>
                        <div class="text-h4 text-left col-3"><q-icon name="task_alt" class="text-blue" /></div>
                    </q-card-section>
                    <q-card-section class="row q-pt-none">
                      <div class="text-subtitle1 text-left col-12" style="color:#7C8DB5">
                        <q-icon name="call_received" class="text-red"></q-icon> 2 This Week
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row q-pb-none">
                        <div class=" text-h6 text-left col-9"> 209 <br>Co2 Score </div>
                        <div class="text-h4 text-left col-3"><q-icon name="u_turn_right" class="text-blue rotate-270" /></div>
                    </q-card-section>
                    <q-card-section class="row q-pt-none">
                      <div class="text-subtitle1 text-left col-12" style="color:#7C8DB5">
                        <q-icon name="north_east" class="text-green"></q-icon> 1 Added This Week
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8 col-sm-12 q-pa-sm">
          <q-card bordered class="no-shadow q-pa-md">
            <div class="text-h6">Drivers List
              <q-btn dense outline class="q-px-sm text-blue float-right text-capitalize"> <q-icon name="add" /> Add Driver</q-btn>
            </div>
            <q-markup-table>
                <thead>
                    <tr>
                    <th class="text-left">Driver Id</th>
                    <th class="text-left">Driver Name</th>
                    <th class="text-left">Vehicle Allotted</th>
                    <th class="text-left">Driver Licences</th>
                    <th class="text-left">Joining Date</th>
                    <th class="text-left">Header</th>
                    <th class="text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-left">#CM9801</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Natali Craig
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> Just now
                        </td>
                        <td>
                          <q-badge rounded color="blue-3"  />
                          <span class="text-blue-9"> In Progress</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9802</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Kate Morrison
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> A minute ago
                        </td>
                        <td>
                          <q-badge rounded color="green-3"  />
                          <span class="text-green-9"> Complete</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9803</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Drew Cano
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> 1 hour ago
                        </td>
                        <td>
                          <q-badge rounded color="blue-3"  />
                          <span class="text-blue-9"> In Progress</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9805</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Natali Craig
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> Yesterday
                        </td>
                        <td>
                          <q-badge rounded color="grey-3" />
                          <span class="text-grey-9"> Rejected</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9802</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Kate Morrison
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> A minute ago
                        </td>
                        <td>
                          <q-badge rounded color="green-3"  />
                          <span class="text-green-9"> Complete</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9803</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Drew Cano
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> 1 hour ago
                        </td>
                        <td>
                          <q-badge rounded color="blue-3"  />
                          <span class="text-blue-9"> In Progress</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9805</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Natali Craig
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> Yesterday
                        </td>
                        <td>
                          <q-badge rounded color="grey-3" />
                          <span class="text-grey-9"> Rejected</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9802</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Kate Morrison
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> A minute ago
                        </td>
                        <td>
                          <q-badge rounded color="green-3"  />
                          <span class="text-green-9"> Complete</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9803</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Drew Cano
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> 1 hour ago
                        </td>
                        <td>
                          <q-badge rounded color="blue-3"  />
                          <span class="text-blue-9"> In Progress</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">#CM9805</td>
                        <td class="text-left">
                            <q-avatar size="sm">
                                <img src="https://cdn.quasar.dev/img/avatar.png" >
                            </q-avatar>
                            Natali Craig
                        </td>
                        <td class="text-left">text</td>
                        <td class="text-left">text</td>
                        <td class="text-left">
                            <q-icon name="calendar_month" class="q-pr-sm" /> Yesterday
                        </td>
                        <td>
                          <q-badge rounded color="grey-3" />
                          <span class="text-grey-9"> Rejected</span>
                        </td>
                        <td class="text-left">
                            <q-icon name="more_horiz" class="q-pr-sm" />
                        </td>
                    </tr>
                </tbody>
            </q-markup-table>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="row">
            <div class="col-md-12 col-sm-12 q-pa-sm">
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
        <div class="col-md-12 col-sm-12 col-xs-12 q-pa-sm">
            <q-card bordered class="no-shadow">
              <div class="row no-padding">
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row q-pb-none">
                        <div class=" text-h6 text-left col-9"> 150 <br>Total users</div>
                        <div class="text-h4 text-left col-3"><q-icon name="people" class="text-blue" /></div>
                    </q-card-section>
                    <q-card-section class="row q-pt-none">
                      <div class="text-subtitle1 text-left col-12" style="color:#7C8DB5">
                        <q-icon name="north_east" class="text-green"></q-icon> 1 Added This Week
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row q-pb-none">
                        <div class=" text-h6 text-left col-9"> 53 <br>Total Vehicles </div>
                        <div class="text-h4 text-left col-3"><q-icon name="sports_motorsports" class="text-blue" /></div>
                    </q-card-section>
                    <q-card-section class="row q-pt-none">
                      <div class="text-subtitle1 text-left col-12" style="color:#7C8DB5">
                        <q-icon name="north_east" class="text-green"></q-icon> 1 Added This Week
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row q-pb-none">
                        <div class=" text-h6 text-left col-9"> 12 <br>Total Accident Reports </div>
                        <div class="text-h4 text-left col-3"><q-icon name="task_alt" class="text-blue" /></div>
                    </q-card-section>
                    <q-card-section class="row q-pt-none">
                      <div class="text-subtitle1 text-left col-12" style="color:#7C8DB5">
                        <q-icon name="call_received" class="text-red"></q-icon> 2 This Week
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <q-separator vertical class="q-my-md" />
                <div class="col-12 col-md">
                  <q-card class="no-shadow">
                    <q-card-section class="row q-pb-none">
                        <div class=" text-h6 text-left col-9"> 209 <br>Co2 Score </div>
                        <div class="text-h4 text-left col-3"><q-icon name="u_turn_right" class="text-blue rotate-270" /></div>
                    </q-card-section>
                    <q-card-section class="row q-pt-none">
                      <div class="text-subtitle1 text-left col-12" style="color:#7C8DB5">
                        <q-icon name="north_east" class="text-green"></q-icon> 1 Added This Week
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
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
import { useMeta } from "quasar"

export default defineComponent({
  name: 'IndexPage',
  components: {
      apexchart: VueApexCharts,
  },
  setup() {
    useMeta(() => {
      return {
        title: "Dashboard - Fleet Management",
      };
    });
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
