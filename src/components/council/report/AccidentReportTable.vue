<template>
    <!-- SKELETON VIEW START -->
    <q-card class="my-card q-pa-md" style="min-height:390px" v-if="activeComp == ''">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                <div class="">Accident Reports</div>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block">
                <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                <q-btn flat dense icon="filter_list" class="q-mx-md text-blue text-capitalize filterbtn_right"> <span class="q-pl-xs">Filter</span> </q-btn>
                <q-input dense v-model="text" class="" placeholder="Search" style="border-radius:8px;display: inline-block;">
                    <template v-slot:prepend>
                    <q-icon name="search" />
                    </template>
                </q-input>
            </div>
        </div>
        <q-markup-table>
            <thead>
                <tr>
                <th class="text-left"><q-skeleton type="text" /></th>
                <th class="text-left"><q-skeleton type="text"  /></th>
                <th class="text-left"><q-skeleton type="text"  /></th>
                <th class="text-left"><q-skeleton type="text"  /></th>
                <th class="text-left"><q-skeleton type="text"  /></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                </tr>
                <tr>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                </tr>
                <tr>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                </tr>
                <tr>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                    <td class="text-left"><q-skeleton type="text"  /></td>
                </tr>
               
            </tbody>
        </q-markup-table>
    </q-card>
    <!-- SKELETON VIEW END -->
    <!-- RESPONSE REPORT TABLE VIEW START -->
    <q-card bordered class="my-card no-shadow q-pa-md" v-if="activeComp">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                <div class="">Accident Reports</div>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block">
                <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                <q-btn flat dense icon="filter_list" class="q-mx-md text-blue text-capitalize filterbtn_right"> <span class="q-pl-xs">Filter</span> </q-btn>
                <q-input dense v-model="text" class="" placeholder="Search" style="border-radius:8px;display: inline-block;">
                    <template v-slot:prepend>
                    <q-icon name="search" />
                    </template>
                </q-input>
            </div>
        </div>
        <q-table
            title=""
            :rows="rows"
            :columns="columns"
            row-key="name"
            class="my-sticky-header-table no-shadow headbg"
            :pagination="initialPagination"
        >
            <template v-slot:body-cell-details="props">
                <q-td :props="props">
                    <div flat class="text-blue text-capitalize cursor-pointer" @click="$router.replace('/checks-list')">
                        {{ props.row.details }}
                    </div>
                </q-td>
            </template>
        </q-table>
        
    </q-card>
    <!-- RESPONSE REPORT TABLE VIEW END -->
</template>
<script>
import { defineComponent } from 'vue'
import VueApexCharts from "vue3-apexcharts";

var columns = [
    
  {
    name: 'vehicle',
    required: true,
    label: 'Vehicle',
    align: 'left',
    field: row => row.vehicle,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'driver', align: 'left', label: 'Driver', field: 'driver', sortable: true },
  { name: 'details', align: 'left', label: 'Details', field: 'details', sortable: true },
  { name: 'date', align: 'left', label: 'Date', field: 'date' },
]

var rows = [
  {
    id:'1',
    vehicle: 'Text Column',
    driver : 'Driver name',
    details: '-',
    date: '27/01/2023',
  },
  {
    id:'2',
    vehicle: 'Text Column',
    driver : 'Driver name',
    details: '-',
    date: '27/01/2023',
  },
  {
    id:'3',
    vehicle: 'Text Column',
    driver : 'Driver name',
    details: '-',
    date: '27/01/2023',
  },
  {
    id:'5',
    vehicle: 'Text Column',
    driver : 'Driver name',
    details: '-',
    date: '27/01/2023',
  },
  {
    id:'6',
    vehicle: 'Text Column',
    driver : 'Driver name',
    details: '-',
    date: '27/01/2023',
  },
 
]

export default defineComponent({
    name: 'ResponseTimeReportTable',
    components: {
    },
    data(){
        return {
            activeComp: false,
            projectdata : '',
            columns,
            rows,
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