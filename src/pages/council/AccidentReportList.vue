<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/council" label="Home" />
                            <!-- <q-breadcrumbs-el label="Compliances" /> -->
                            <q-breadcrumbs-el label="Accidents Reported" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title">Accidents Reported</div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
                    
                </div>
                <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
                    <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                    <q-btn flat dense icon="delete_outline" class="q-mx-md text-red text-capitalize filterbtn_right" > <span class="q-pl-xs">Delete</span> </q-btn>
                    <q-btn flat dense icon="filter_list" class="q-mx-md text-blue text-capitalize filterbtn_right"> <span class="q-pl-xs">Filter</span> </q-btn>
                    <q-btn icon="add" color="primary" class="q-mx-sm q-px-md text-capitalize filterbtn_right" to="/add-vehicle"> <span class="q-pl-xs">Add Vehicle</span> </q-btn>
                    <q-input dense filled v-model="text" class="searchwidth" placeholder="Search" style="border-radius:8px;display: inline-block;">
                        <template v-slot:prepend>
                        <q-icon name="search" />
                        </template>
                    </q-input>
                </div>
            </div>
            
            <q-separator />

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
                        <div flat class="text-blue text-capitalize cursor-pointer" @click="$router.replace('/view-accident-report')">
                            {{ props.row.details }}
                        </div>
                    </q-td>
                </template>
            </q-table>
                
            <!-- FOOTER BUTTONS -->
            <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1"></div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
                  <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:white;color:#F38B41">
                    <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                    outstanding defects
                  </q-badge>
                  <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:white;color:#FF0000">
                    <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                    Non- Compliance
                  </q-badge>
                  <q-btn @click="$router.replace('/')" outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
                </div>
            </div>

            <div class="row fixed-bottom-right q-gutter-sm text-right q-pa-sm q-pr-lg" style="background: white;width:100%">
                <div class="col-12">
                    <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:white;color:#F38B41">
                            <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                            outstanding defects
                          </q-badge>

                          <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:white;color:#FF0000">
                            <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                            Non- Compliance
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
  { name: 'registration.', align: 'left', label: 'Vehicle Registration', field: 'registration', sortable: true },
  { name: 'accidentdate', align: 'left', label: 'Date of Accident', field: 'accidentdate' },
  { name: 'location', align: 'left', label: 'Location', field: 'location' },
  { name: 'drivername', align: 'left', label: 'Driver Name', field: 'drivername'},
  { name: 'driver_ref', align: 'left', label: 'Driver Badge Ref.', field: 'driver_ref' },
  { name: 'injuries', align: 'left', label: 'Injuries', field: 'injuries' },
  { name: 'details', align: 'left', label: 'Details', field: 'details' },
]

var rows = [
  {
    id:'1',
    businessname: 'Excelsior Taxis Ltd',
    registration: 'Car Name / ID',
    accidentdate: '23-oct-2023',
    location: '-',
    drivername: '@User Name',
    driver_ref: '-',
    injuries: 'YES',
    details: 'View Details'
  },
  {
    id:'2',
    businessname: 'Excelsior Taxis Ltd',
    registration: 'Car Name / ID',
    accidentdate: '23-oct-2023',
    location: '-',
    drivername: '@User Name',
    driver_ref: '-',
    injuries: 'NO',
    details: 'View Details'
  },
  {
    id:'3',
    businessname: 'Excelsior Taxis Ltd',
    registration: 'Car Name / ID',
    accidentdate: '23-oct-2023',
    location: '-',
    drivername: '@User Name',
    driver_ref: '-',
    injuries: 'YES',
    details: 'View Details'
  },
  {
    id:'5',
    businessname: 'Excelsior Taxis Ltd',
    registration: 'Car Name / ID',
    accidentdate: '23-oct-2023',
    location: '-',
    drivername: '@User Name',
    driver_ref: '-',
    injuries: 'YES',
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
        title: "Accident List - Fleet Management",
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
