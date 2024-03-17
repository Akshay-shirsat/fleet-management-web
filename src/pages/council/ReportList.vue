<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/council" label="Home" />
                            <q-breadcrumbs-el label="Reports" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title">Reports</div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all  Your Inspections</div>
                    
                </div>
                <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
                    <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div class="text-h6"> Reports</div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-sm filter_block">
                    <q-input dense filled v-model="text" class="" placeholder="Search" style="width:100%;border-radius:8px;">
                        <template v-slot:prepend>
                        <q-icon name="search" />
                        </template>
                    </q-input>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm">
                    <q-btn-dropdown dense outline color="primary" class="text-capitalize" label="Weekly" style="width:100%">
                        <q-list>
                        <q-item clickable v-close-popup>
                            <q-item-section>
                            <q-item-label>Week One</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup>
                            <q-item-section>
                            <q-item-label>Week Two</q-item-label>
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
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm text-center">
                    <q-btn-group outline color="blue" class="text-capitalize ">
                        <q-btn dense outline color="blue" label="Day" class="text-capitalize" />
                        <q-btn dense outline color="blue" label="Week" active class="text-capitalize" />
                        <q-btn dense outline color="blue" label="Month" class="text-capitalize" />
                    </q-btn-group>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm">
                    <q-btn outline dense icon="filter_list" class="q-mx-md text-blue text-capitalize full-width"> <span class="q-pl-xs">Filter</span> </q-btn>
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
                        <div flat class="text-blue text-capitalize cursor-pointer" @click="$router.replace('/report-overview')">
                            {{ props.row.details }}
                        </div>
                    </q-td>
                </template>
            </q-table>
            

            <!-- FOOTER BUTTONS -->
            <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"></div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
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
    name: 'vehiclename',
    required: true,
    label: 'Vehicle Name ',
    align: 'left',
    field: row => row.vehiclename,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'checkdate.', align: 'left', label: 'Check Date', field: 'checkdate', sortable: true },
  { name: 'check_completed', align: 'left', label: 'Check Completed', field: 'check_completed' },
  { name: 'duration', align: 'left', label: 'Duration', field: 'duration' },
  { name: 'location', align: 'left', label: 'Location', field: 'location'},
  { name: 'report_by', align: 'left', label: 'Report By', field: 'report_by' },
  { name: 'status', align: 'left', label: 'Status', field: 'status' },
  { name: 'defects', align: 'left', label: 'Defects ', field: 'defects' },
  { name: 'details', align: 'left', label: 'Details', field: 'details' },
]

var rows = [
  {
    id:'1',
    vehiclename: 'HVI10412',
    checkdate: '23-oct-2023',
    check_completed: '23-oct-2023',
    duration: '3 min 5 Sec',
    location: 'London ',
    report_by: 'James',
    status:'Complected',
    defects:'5 Defect',
    details: 'View Details'
  },
  {
    id:'2',
    vehiclename: 'HVI10412',
    checkdate: '23-oct-2023',
    check_completed: '23-oct-2023',
    duration: '3 min 5 Sec',
    location: 'London ',
    report_by: 'James',
    status:'Complected',
    defects:'5 Defect',
    details: 'View Details'
  },
  
]

export default defineComponent({
    name: 'VehicleCheck',
    components: {
        
    },
    setup() {
        useMeta(() => {
            return {
                title: "Report List - Fleet Management",
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
