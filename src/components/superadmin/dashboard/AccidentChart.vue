<template>
  <q-card
    bordered
    class="my-card no-shadow q-pa-md q-mb-md"
    v-if="activeComp == ''"
  >
    <div class="text-h6">Most Accident Reports</div>
    <div id="chart_areport">
      <q-skeleton type="QRange" style="height: 300px" />
    </div>
  </q-card>
  <q-card bordered class="my-card no-shadow q-pa-md" v-if="activeComp">
    <div class="text-h6">Most Accident Reports</div>
    <div id="chart_areport">
      <apexchart
        type="bar"
        height="250"
        :options="chartOptions_areport"
        :series="series_areport"
      ></apexchart>
    </div>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "AccidentChart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      activeComp: false,
      projectdata: "",

      //ACCIDENT Graph
      series_areport: [
        {
          data: [400, 430, 448, 470, 540, 580],
        },
      ],
      chartOptions_areport: {
        chart_areport: {
          type: "bar",
          height: 380,
        },
        plotOptions: {
          bar: {
            barHeight: "30%",
            distributed: true,
            horizontal: true,

            dataLabels: {
              position: "bottom",
            },
          },
        },
        colors: [
          "#E7F0F7",
          "#369FFF",
          "#E7F0F7",
          "#369FFF",
          "#E7F0F7",
          "#369FFF",
        ],
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        xaxis: {
          categories: [
            "Business Name (10)",
            "Business Name",
            "Business Name",
            "Business Name",
            "Business Name",
            "Business Name",
          ],
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: ["#8F8F8F"],
            },
          },
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
                return "";
              },
            },
          },
        },
      },
    };
  },
  created() {
    let parent = this;
    setTimeout(function () {
      // this.basketAddSuccess = false;
      parent.activeComp = true;
      console.log("The component is created yet.");
    }, 3000);
  },
});
</script>
