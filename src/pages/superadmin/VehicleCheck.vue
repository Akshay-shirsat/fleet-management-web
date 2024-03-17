<template>
    <q-page class="">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block">
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/" label="Home" />
                            <q-breadcrumbs-el label="Vehicle" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title">Vehicle Details</div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
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

            <div class="row mb-block q-my-sm">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <q-table
                        title=""
                        :rows="rows"
                        :columns="columns"
                        row-key="name"
                        class="my-sticky-header-table no-shadow headbg"
                        :pagination="initialPagination"
                    >

                    <template v-slot:body-cell-flag="props">
                        <q-td :props="props">
                            <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(243, 139, 65, 0.25);color:#F38B41">
                                <q-badge rounded style="background:#F38B41;" class="q-mr-sm" />
                                {{ props.row.flag }}
                            </q-badge>

                            <q-badge rounded class="successbadge q-pt-sm q-pb-sm q-pr-sm q-pl-sm q-mr-md" style="background:rgba(255, 0, 0, 0.11);color:#FF0000">
                                <q-badge rounded style="background:#FF0000;" class="q-mr-sm" />
                                {{ props.row.flag2 }}
                            </q-badge>
                            
                        </q-td>
                    </template>
                    <template v-slot:body-cell-action="props">
                        <q-td :props="props">
                            <q-icon name="edit" size="20px" class="q-pr-sm" color="primary" @click="$router.replace('/vehicle-details')" />
                        </q-td>
                    </template>
                    
                    </q-table>
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

                    <q-btn @click="$router.replace('/')" outline label="Previous" class="text-capitalize q-mr-md themebtnborder" />
                    <q-btn outline  class="text-capitalize themebtnborder" label="Next" />
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
  { name: 'ownername', align: 'left', label: 'Owner’s Name ', field: 'ownername', sortable: true },
  { name: 'address', align: 'left', label: 'Address', field: 'address', sortable: true },
  { name: 'mobile', align: 'left', label: 'Mobile No.', field: 'mobile' },
  { name: 'compliance', align: 'left', label: 'Compliance Score', field: 'compliance' },
  { name: 'vehicle_no', align: 'left', label: 'No. Of Vehocle', field: 'vehicle_no' },
  { name: 'flag', align: 'left', label: 'Flagged', field: 'flag' },
  { name: 'action', align: 'left', label: '', field: 'action'}
]

var rows = [
  {
    id:'1',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'2',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'3',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'5',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'6',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'7',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'8',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'9',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'10',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'11',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'11',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'11',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
  {
    id:'11',
    businessname: 'Excelsior Taxis Ltd',
    ownername : 'James Langton',
    address: '"3 The Row, Nenthead...',
    mobile: 'Regular text column',
    compliance: '03 / 07',
    vehicle_no: '56',
    flag: '05',
    flag2: '50',
    action: '1'
  },
]

export default defineComponent({
  name: 'VehicleCheck',
  components: {
      
  },
  setup() {
    useMeta(() => {
      return {
        title: "Vehicle Checks - Fleet Management",
      };
    });
  },
  data(){
    return {
      value: ref(81),
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
  }
})
</script>
