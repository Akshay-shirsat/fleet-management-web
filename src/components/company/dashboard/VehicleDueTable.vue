<template>
    <!-- SKELETON VIEW START -->
    <q-card class="my-card q-pa-md" style="min-height:390px" v-if="activeComp == ''">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                <div class="">Vehicle Due Dates</div>
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
                <div class="">Vehicle Due Dates</div>
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
            <template v-slot:body-cell-tax_renewal="props">
                <q-td :props="props">
                    <div flat class="text-red text-capitalize cursor-pointer" v-if="props.row.due='Yes'" @click="$router.replace('/checks-list')">
                        <span>{{ props.row.tax_renewal }} <q-icon name="calendar_month" style="margin-top: -6px;" class="q-pl-sm" /></span>
                    </div>
                </q-td>
            </template>
            <template v-slot:body-cell-council_expiry="props">
                <q-td :props="props">
                    <div flat class="text-capitalize cursor-pointer">
                        <span>{{ props.row.council_expiry }} <q-icon name="calendar_month" style="margin-top: -6px;" class="q-pl-sm" /></span>
                    </div>
                </q-td>
            </template>
            <template v-slot:body-cell-v_licence_renewal_date="props">
                <q-td :props="props">
                    <div flat class="text-capitalize cursor-pointer">
                        <span>{{ props.row.v_licence_renewal_date }} <q-icon name="calendar_month" style="margin-top: -6px;" class="q-pl-sm" /></span>
                    </div>
                </q-td>
            </template>
            <template v-slot:body-cell-insurance_renewal_date="props">
                <q-td :props="props">
                    <div flat class="text-capitalize cursor-pointer">
                        <span>{{ props.row.insurance_renewal_date }} <q-icon name="calendar_month" style="margin-top: -6px;" class="q-pl-sm" /></span>
                    </div>
                </q-td>
            </template>
            <template v-slot:body-cell-mot_due_date="props">
                <q-td :props="props">
                    <div flat class="text-capitalize cursor-pointer">
                        <span>{{ props.row.mot_due_date }} <q-icon name="calendar_month" style="margin-top: -6px;" class="q-pl-sm" /></span>
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
    label: 'Vehicle Name',
    align: 'left',
    field: row => row.vehicle,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'vehicle_reg', align: 'left', label: 'Vehicle Reg.', field: 'vehicle_reg', sortable: true },
  { name: 'tax_renewal', align: 'left', label: 'Tax renewal', field: 'tax_renewal', sortable: true },
  { name: 'v_licence_renewal_date', align: 'left', label: 'Vehicle license renewal', field: 'v_licence_renewal_date' },
  { name: 'insurance_renewal_date', align: 'left', label: 'Insurance renewal date', field: 'insurance_renewal_date' },
  { name: 'mot_due_date', align: 'left', label: 'MOT Due Date', field: 'mot_due_date' },
]

var rows = [
  {
    id:'1',
    due:'yes',
    vehicle: 'Vehicle Name',
    vehicle_reg : 'Vehicle reg name',
    tax_renewal: '27/01/2023',
    v_licence_renewal_date: '27/01/2023',
    insurance_renewal_date: '27/01/2023',
    mot_due_date : '27/01/2023',
  },
  {
    id:'2',
    due:'yes',
    vehicle: 'Vehicle Name',
    vehicle_reg : 'Vehicle reg name',
    tax_renewal: '27/01/2023',
    v_licence_renewal_date: '27/01/2023',
    insurance_renewal_date: '27/01/2023',
    mot_due_date : '27/01/2023',
  },
  {
    id:'3',
    due:'no',
    vehicle: 'Vehicle Name',
    vehicle_reg : 'Vehicle reg name',
    tax_renewal: '27/01/2023',
    v_licence_renewal_date: '27/01/2023',
    insurance_renewal_date: '27/01/2023',
    mot_due_date : '27/01/2023',
  },
  {
    id:'5',
    due:'no',
    vehicle: 'Vehicle Name',
    vehicle_reg : 'Vehicle reg name',
    tax_renewal: '27/01/2023',
    v_licence_renewal_date: '27/01/2023',
    insurance_renewal_date: '27/01/2023',
    mot_due_date : '27/01/2023',
  },
  {
    id:'6',
    due:'no',
    vehicle: 'Vehicle Name',
    vehicle_reg : 'Vehicle reg name',
    tax_renewal: '27/01/2023',
    v_licence_renewal_date: '27/01/2023',
    insurance_renewal_date: '27/01/2023',
    mot_due_date : '27/01/2023',
  },
 
]

export default defineComponent({
    name: 'VehicleDueTable',
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