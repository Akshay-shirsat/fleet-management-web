<template>
  <q-card
    bordered
    class="my-card no-shadow q-pa-md q-mb-md"
    v-if="activeComp == ''"
  >
    <div class="text-h6">Compliance History</div>
    <div id="chart">
      <q-skeleton type="QRange" style="height: 300px" />
    </div>
  </q-card>
  <q-card bordered class="my-card no-shadow q-pa-md q-mb-md" v-if="activeComp">
    <div class="text-h6">Compliance History</div>
    <div id="chart">
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "LeastCompliantChart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      activeComp: false,
      projectdata: "",

      //BUSINESS COMPLIANCE Graph
      series: [
        {
          data: [21, 22, 10, 28, 16, 21],
        },
      ],
      chartOptions: {
        chart: {
          height: "247px",
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
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
        plotOptions: {
          bar: {
            columnWidth: "28px",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            ["Jan", ""],
            ["Feb", ""],
            ["Mar", ""],
            ["Apr", ""],
            ["May", ""],
            ["June", ""],
          ],
          labels: {
            style: {
              colors: [
                "#8F8F8F",
                "#8F8F8F",
                "#8F8F8F",
                "#8F8F8F",
                "#8F8F8F",
                "#8F8F8F",
              ],
              fontSize: "10px",
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
