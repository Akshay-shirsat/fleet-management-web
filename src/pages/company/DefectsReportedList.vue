<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/company" label="Home" />
                            <q-breadcrumbs-el label="Defects Reported" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title">Defects Reported</div>
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
            
                <template v-slot:body-cell-defectscount="props">
                    <q-td :props="props">
                        <q-badge rounded outline class="successbadge q-py-xs q-px-sm" style="color:#F38B41">
                            {{ props.row.defectscount }}
                        </q-badge>
                    </q-td>
                </template>
                <template v-slot:body-cell-status="props">
                    <q-td :props="props">
                        <q-btn-dropdown
                            color=""
                            rounded
                            :label="props.row.status"
                            v-if="props.row.status =='Completed'"
                            class = "status_green  text-capitalize"
                            >
                            <q-list>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>In-Progress</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Pending</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Completed</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                        <q-btn-dropdown
                            color=""
                            rounded
                            :label="props.row.status"
                            v-if="props.row.status =='In-Progress'"
                            class = "status_orange text-capitalize"
                            >
                            <q-list>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>In-Progress</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Pending</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <q-item-label>Completed</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    
                    </q-td>
                </template>

                <template v-slot:body-cell-registration="props">
                    <q-td :props="props">
                        <q-btn flat @click="$router.replace('/')">
                            {{ props.row.registration }}
                        </q-btn>
                    </q-td>
                </template>
                <template v-slot:body-cell-details="props">
                    <q-td :props="props">
                        <div flat class="text-blue text-capitalize cursor-pointer" @click="$router.replace('/defects-reported-details')">
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
    name: 'businessname',
    required: true,
    label: 'Business Name ',
    align: 'left',
    field: row => row.businessname,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'registration.', align: 'left', label: 'Vehicle Regis', field: 'registration', sortable: true },
  { name: 'checkdate', align: 'left', label: 'Check Date', field: 'checkdate' },
  { name: 'defectsdescription', align: 'left', label: 'Defect Description', field: 'defectsdescription' },
  { name: 'defectscount', align: 'left', label: 'No. of Defects', field: 'defectscount'},
  { name: 'status', align: 'left', label: 'Status', field: 'status' },
  { name: 'details', align: 'left', label: 'Details', field: 'details' },
]

var rows = [
  {
    id:'1',
    businessname: 'Excelsior Taxis Ltd',
    registration: 'Car Name / ID',
    checkdate: '23-oct-2023',
    defectsdescription: '-',
    defectscount: '5',
    status: 'Completed',
    details: 'View Details'
  },
  {
    id:'2',
    businessname: 'Excelsior Taxis Ltd',
    registration: 'Car Name / ID',
    checkdate: '23-oct-2023',
    defectsdescription: '-',
    defectscount: '5',
    status: 'In-Progress',
    details: 'View Details'
  },
  {
    id:'3',
    businessname: 'Excelsior Taxis Ltd',
    registration: 'Car Name / ID',
    checkdate: '23-oct-2023',
    defectsdescription: '-',
    defectscount: '5',
    status: 'Completed',
    details: 'View Details'
  },
  {
    id:'5',
    businessname: 'Excelsior Taxis Ltd',
    registration: 'Car Name / ID',
    checkdate: '23-oct-2023',
    defectsdescription: '-',
    defectscount: '5',
    status: 'In-Progress',
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
                title: "Defects Report - Fleet Management",
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
            // this.basketAddSuccess = false;
            parent.activeTable = true;
            console.log("The component is created yet.");
        }, 3000);     
    }
})
</script>
