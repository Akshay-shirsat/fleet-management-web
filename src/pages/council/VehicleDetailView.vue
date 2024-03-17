<template>
    <q-page class="pagelay ">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-4 col-md-4 col-sm-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/council" label="Home" />
                            <q-breadcrumbs-el to="/vehicle-list" label="Vehicles" />
                            <q-breadcrumbs-el label="Vehicle Details " />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title"><q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px;" /> Vehicle Details : <b>Car Name / ID </b> </div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>

                </div>

                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
                    <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                    <q-btn flat dense icon="delete_outline" class="q-mx-md text-red text-capitalize filterbtn_right" > <span class="q-pl-xs">Delete</span> </q-btn>
                    <!-- <q-btn flat dense icon="filter_list" class="q-mx-md text-blue text-capitalize filterbtn_right"> <span class="q-pl-xs">Filter</span> </q-btn> -->
                    <q-btn color="primary" class="q-mx-sm q-px-md text-capitalize filterbtn_right"> <span class="q-pl-xs">Edit</span> </q-btn>
                    <!-- <q-input dense filled v-model="text" class="searchwidth" placeholder="Search" style="border-radius:8px;display: inline-block;">
                        <template v-slot:prepend>
                        <q-icon name="search" />
                        </template>
                    </q-input> -->
                </div>
            </div>

            <!-- <q-separator /> -->

            <div class="row mb-block q-my-sm">
                <!-- SKELETON START -->
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="activeTable == ''">
                    <q-card class="no-shadow">
                        <q-card-actions align="left" class="q-gutter-md">
                            <q-skeleton type="QBtn" width="150px"  />
                            <q-skeleton type="QBtn" width="150px" />
                            <q-skeleton type="QBtn" width="150px" />
                        </q-card-actions>
                        <q-skeleton height="300px" square />
                    </q-card>
                </div>
                <!-- SKELETON END -->
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="activeTable">
                    <q-tabs
                        v-model="tab"
                        dense
                        class="vtabs text-black"
                        active-color="primary"
                        indicator-color="primary"
                        align="left"
                        narrow-indicator
                        >
                        <q-tab name="info_tab" label="Vehicle Information"/>
                        <q-tab name="history_tab" label="Checks History"/>
                        <q-tab name="report_tab" label="Accident Reports"/>
                    </q-tabs>
                    <q-separator />
                    <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="info_tab">
                            <!-- <div class="text-h6">info_tab</div> -->
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <q-img src="~src/assets/images/car.png"></q-img>
                                            <q-btn color="green" dense class="full-width"> Online </q-btn>
                                            <div>
                                                <div class="q-py-sm">
                                                    Assigned Driver <q-btn flat><q-icon name="edit" style="font-size:16px" /></q-btn>
                                                </div>
                                                <q-avatar size="sm">
                                                    <img src="https://cdn.quasar.dev/img/avatar.png" >
                                                </q-avatar>
                                                Natali Craig
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <div class="row q-my-md">
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Make</div>
                                            <div class="text-grey-6">Regular text column</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Model</div>
                                            <div class="text-grey-6">Regular text column</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Colour</div>
                                            <div class="text-grey-6">Regular text column</div>
                                        </div>
                                    </div>
                                    <div class="row q-my-md">
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Registration Number</div>
                                            <div class="text-grey-6">Regular text column</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Vehicle Licence Number</div>
                                            <div class="text-grey-6">Regular text column</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Vehicle Licence Renewal Date</div>
                                            <div class="text-grey-6">Regular text column</div>
                                        </div>
                                    </div>
                                    <div class="row q-my-md">
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Date of first Registration</div>
                                            <div class="text-grey-6">Regular text column</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">MOT Date</div>
                                            <div class="text-grey-6">dd.mm.yyyy</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">MOT Frequency </div>
                                            <div class="text-grey-6">4 Months</div>
                                        </div>
                                    </div>
                                    <div class="row q-my-md">
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Insurance Renewal Date</div>
                                            <div class="text-grey-6">dd.mm.yyyy</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Private Hire Operators Licence Renewal </div>
                                            <div class="text-grey-6">Regular text column</div>
                                        </div>

                                    </div>
                                    <div class="row q-my-md">
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Last Service Date</div>
                                            <div class="text-grey-6">dd.mm.yyyy</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Last Service Mileage </div>
                                            <div class="text-grey-6">dd.mm.yyyy</div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Car Tax Renewal Date </div>
                                            <div class="text-grey-6">dd.mm.yyyy</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="history_tab">
                            <q-table
                                title=""
                                :rows="rows"
                                :columns="columns"
                                row-key="name"
                                class="header no-shadow headbg"
                                :pagination="initialPagination"
                            >
                                <template v-slot:body-cell-defects="props">
                                    <q-td :props="props">
                                        <q-badge rounded outline class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(243, 139, 65, 0.25);color:#F38B41">
                                            {{ props.row.defects }}
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
                                <template v-slot:body-cell-details="props">
                                    <q-td :props="props">
                                        <div flat class="text-blue text-capitalize cursor-pointer" @click="$router.replace('/view-checks')">
                                            {{ props.row.details }}
                                        </div>
                                    </q-td>
                                </template>
                            </q-table>
                        </q-tab-panel>

                        <q-tab-panel name="report_tab">
                            <q-table
                                title=""
                                :rows="rows_accident"
                                :columns="columns_accident"
                                row-key="name"
                                class="header no-shadow headbg"
                                :pagination="initialPagination"
                            >

                                <template v-slot:body-cell-details="props">
                                    <q-td :props="props">
                                        <div flat class="text-blue text-capitalize cursor-pointer" @click="$router.replace('/vehicle-accident-details')">
                                            {{ props.row.details }}
                                        </div>
                                    </q-td>
                                </template>
                            </q-table>
                        </q-tab-panel>
                    </q-tab-panels>
                </div>
            </div>
            <!-- FOOTER BUTTONS -->
            <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
                    <q-btn outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
                    <q-btn outline  class="text-capitalize themebtnborder" label="Save" />
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
    label: 'Vehicle Regis.',
    align: 'left',
    field: row => row.vregistration,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'reportby', align: 'left', label: 'Report By', field: 'reportby', sortable: true },
  { name: 'checkdate', align: 'left', label: 'Check Date', field: 'checkdate', sortable: true },
  { name: 'duration', align: 'left', label: 'Duration', field: 'duration' },
  { name: 'time', align: 'left', label: 'Time', field: 'time' },
  { name: 'location', align: 'left', label: 'Location', field: 'location' },
  { name: 'defects', align: 'left', label: 'Defects', field: 'defects' },
  { name: 'status', align: 'left', label: 'Status', field: 'status'},
  { name: 'details', align: 'left', label: 'Details', field: 'details'}
]

var rows = [
  {
    id:'1',
    vregistration: 'Car Name / ID ',
    reportby : '@User Name',
    checkdate: '23-oct-2023',
    duration: '3 min 45 sec',
    time: '03:19 PM',
    location: 'London',
    defects: '5',
    status: 'Completed',
    details: 'View Details'
  },
  {
    id:'2',
    vregistration: 'Car Name / ID ',
    reportby : '@User Name',
    checkdate: '23-oct-2023',
    duration: '3 min 45 sec',
    time: '03:19 PM',
    location: 'London',
    defects: '5',
    status: 'In-Progress',
    details: 'View Details'
  },
  {
    id:'3',
    vregistration: 'Car Name / ID ',
    reportby : '@User Name',
    checkdate: '23-oct-2023',
    duration: '3 min 45 sec',
    time: '03:19 PM',
    location: 'London',
    defects: '5',
    status: 'Completed',
    details: 'View Details'
  },
  {
    id:'5',
    vregistration: 'Car Name / ID ',
    reportby : '@User Name',
    checkdate: '23-oct-2023',
    duration: '3 min 45 sec',
    time: '03:19 PM',
    location: 'London',
    defects: '5',
    status: 'Completed',
    details: 'View Details'
  },

]

var columns_accident = [
  {
    name: 'vregister',
    required: true,
    label: 'Vehicle Registration',
    align: 'left',
    field: row => row.vregister,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'accidentdate', align: 'left', label: 'Date of Accident', field: 'accidentdate', sortable: true },
  { name: 'location', align: 'left', label: 'Location', field: 'location', sortable: true },
  { name: 'drivername', align: 'left', label: 'Driver Name', field: 'drivername' },
  { name: 'driverbadge', align: 'left', label: 'Driver Badge Ref.', field: 'driverbadge' },
  { name: 'injuries', align: 'left', label: 'Injuries', field: 'injuries' },
  { name: 'details', align: 'left', label: 'Details', field: 'details'}
]

var rows_accident = [
  {
    id:'1',
    vregister: 'Car Name / ID ',
    accidentdate : '23-oct-2023',
    location: '-',
    drivername: '@User Name',
    driverbadge:'YES',
    injuries: '-',
    details: 'View Details'
  },
  {
    id:'2',
    vregister: 'Car Name / ID ',
    accidentdate : '23-oct-2023',
    location: '-',
    drivername: '@User Name',
    driverbadge:'NO',
    injuries: '-',
    details: 'View Details'
  },
  {
    id:'3',
    vregister: 'Car Name / ID ',
    accidentdate : '23-oct-2023',
    location: '-',
    drivername: '@User Name',
    driverbadge:'YES',
    injuries: '-',
    details: 'View Details'
  },
  {
    id:'5',
    vregister: 'Car Name / ID ',
    accidentdate : '23-oct-2023',
    location: '-',
    drivername: '@User Name',
    driverbadge:'YES',
    injuries: '-',
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
                title: "View Vehicle - Fleet Management",
            };
        });
    },
    data(){
        return {
            activeTable: false,
        value: ref(81),
        tab: ref('info_tab'),
        initialPagination: {
            // sortBy: 'desc',
            // descending: false,
            // page: 2,
            rowsPerPage: 8
            // rowsNumber: xx if getting data from a server
        },
        columns,
        rows,
        columns_accident,
        rows_accident
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
