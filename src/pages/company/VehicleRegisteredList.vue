<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/company" label="Home" />
                            <q-breadcrumbs-el label="Vehicles Registered" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title">Vehicles Registered</div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all  Your Vehicles</div>
                </div>
                
                <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
                    <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                    <q-btn flat dense icon="delete_outline" class="q-mx-md text-red text-capitalize filterbtn_right" > <span class="q-pl-xs">Delete</span> </q-btn>
                    <q-btn flat dense icon="filter_list" class="q-mx-md text-blue text-capitalize filterbtn_right"> <span class="q-pl-xs">Filter</span> </q-btn>
                    <!-- <q-btn icon="add" color="primary" class="q-mx-sm q-px-md text-capitalize filterbtn_right"> <span class="q-pl-xs">Add Vehicle</span> </q-btn> -->
                    <q-input dense filled v-model="text" class="searchwidth" placeholder="Search" style="border-radius:8px;display: inline-block;">
                        <template v-slot:prepend>
                        <q-icon name="search" />
                        </template>
                    </q-input>
                </div>
            </div>
            
            <q-separator />
            <!-- SKELETON VIEW START -->
            <q-markup-table class="no-shadow" v-if="activeTable == ''">
                <thead >
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
            <!-- SKELETON VIEW END -->

            <!-- TABLE VIEW START -->
            <q-table
                title=""
                :rows="rows"
                :columns="columns"
                row-key="name"
                class="my-sticky-header-table no-shadow headbg"
                :pagination="initialPagination"
                v-if="activeTable"
                >
                <template v-slot:body-cell-details="props">
                    <q-td :props="props">
                        <div flat class="text-blue text-capitalize cursor-pointer" @click="$router.replace('/vehicle-registered-details')">
                            {{ props.row.details }}
                        </div>
                    </q-td>
                </template>
            </q-table>
            <!-- TABLE VIEW END -->

            <!-- FOOTER BUTTONS -->
            <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"></div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
                    <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:white;color:#F38B41">
                        <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />outstanding defects
                    </q-badge>
                    <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:white;color:#FF0000">
                        <q-badge rounded style="background:#FF0000;" class="q-mr-sm" /> Non- Compliance
                    </q-badge>
                    <q-btn outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMeta } from "quasar"

var columns = [
    
  {
    name: 'vregistration',
    required: true,
    label: 'Vehicle Registration',
    align: 'left',
    field: row => row.vregistration,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'licence_number', align: 'left', label: 'Licence Number', field: 'licence_number', sortable: true },
  { name: 'licence_expiry', align: 'left', label: 'Licence Expiry ', field: 'licence_expiry' },
  { name: 'registration', align: 'left', label: 'Registration', field: 'registration' },
  { name: 'make', align: 'left', label: 'Make', field: 'make' },
  { name: 'model', align: 'left', label: 'Model', field: 'model' },
  { name: 'assigned_driver', align: 'left', label: 'Assigned Driver', field: 'assigned_driver'},
  { name: 'flag', align: 'left', label: 'Flag', field: 'flag'},
  { name: 'details', align: 'left', label: 'Details', field: 'details'}
]

var rows = [
  {
    id:'1',
    vregistration : 'Car Name / ID ',
    licence_number: '23-oct-2023',
    licence_expiry: '-',
    registration: '@User Name',
    make: '-',
    model: 'YES',
    assigned_driver: '',
    flag: '',
    details: 'View Details'
  },
  {
    id:'2',
    vregistration : 'Car Name / ID ',
    licence_number: '23-oct-2023',
    licence_expiry: '-',
    registration: '@User Name',
    make: '-',
    model: 'NO',
    assigned_driver: '',
    flag: '',
    details: 'View Details'
  },
 
]

export default defineComponent({
    name: 'VehicleRegisteredList',
    components: {
      
    },
    setup() {
        useMeta(() => {
            return {
                title: "Registered Vehicles - Fleet Management",
            };
        });
    },
    data(){
        return {
            activeTable: false,
            value: ref(81),
        //   selection:ref('completed'),
        initialPagination: {
                // sortBy: 'desc',
                // descending: false,
                // page: 2,
                rowsPerPage: 8
                // rowsNumber: xx if getting data from a server
            },
        columns,
        rows
        }
    },
    created() {
        let parent=this;
        setTimeout(function(){
            parent.activeTable = true;
        }, 3000);     
    }
})
</script>
