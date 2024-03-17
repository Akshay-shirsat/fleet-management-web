<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-3 col-md-4 col-sm-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/company" label="Home" />
                            <q-breadcrumbs-el to="/driver-list" label="Drivers" />
                            <q-breadcrumbs-el label="View Driver" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title"><q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px;" /> Driver Profile : <b>Sid</b> </div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
                    
                </div>
                <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
                    <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                    <q-btn flat dense icon="delete_outline" class="q-mx-md text-red text-capitalize filterbtn_right" > <span class="q-pl-xs">Delete</span> </q-btn>
                    <q-btn flat dense icon="edit" class="q-mx-md text-blue text-capitalize filterbtn_right"> <span class="q-pl-xs">Filter</span> </q-btn>
                    <q-btn color="primary" icon="add" class="q-mx-sm q-px-md text-capitalize filterbtn_right" to="/add-business"> <span class="q-pl-xs">Add Driver</span> </q-btn>
                    <q-input dense filled v-model="text" class="searchwidth" placeholder="Search" style="border-radius:8px;display: inline-block;">
                        <template v-slot:prepend>
                        <q-icon name="search" />
                        </template>
                    </q-input>
                </div>
            </div>

            <div class="row mb-block q-my-sm">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="activeSkeleton == ''">
                    <q-card class="no-shadow">
                        <q-card-actions align="left" class="q-gutter-md">
                            <q-skeleton type="QBtn" width="200px" />
                            <q-skeleton type="QBtn" width="200px" />
                        </q-card-actions>
                        <q-skeleton type="text" />  
                        <q-item>
                            <q-item-section avatar class="q-gutter-md">
                                <q-skeleton type="QAvatar" />
                                <q-skeleton type="QBtn" />
                                <q-skeleton type="QBtn" />
                                <q-skeleton type="QBtn" />
                            </q-item-section>
                            <q-item-section>
                                 <q-skeleton height="200px" square />
                            </q-item-section>
                            <q-item-section>
                                <q-skeleton height="200px" square />
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="activeSkeleton">
                    <q-tabs
                        v-model="tab"
                        dense
                        class="vtabs text-black"
                        active-color="primary"
                        indicator-color="primary"
                        align="left"
                        narrow-indicator
                        >
                        <q-tab name="info_tab" label="User information" />
                        <q-tab name="report_tab" label="Notification Preferences"/>
                    </q-tabs>
                    <q-separator />
                    <q-tab-panels v-model="tab" animated class="q-mt-md">
                        <q-tab-panel name="info_tab" class="no-padding ">
                            <q-form
                                @submit="onSubmit"
                                class="q-gutter-md"
                                >
                                <div class="row">
                                    <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12 q-pa-xs ">
                                        <div class="row q-pa-xs">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs text-center">
                                                <q-img src="~src/assets/images/blank_profile.png" rounded></q-img>
                                                <q-btn color="grey" dense rounded class="text-caption q-mt-md text-capitalize"> Upload </q-btn>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs">
                                        <div class="row q-pa-sm tabsborder">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-md">
                                                <label><b>Account Information</b></label>
                                                <q-btn dense rounded color="blue" class="text-capitalize q-px-lg float-right">Edit</q-btn>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">Full Name</div>
                                                <div class="">Sid</div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="">App Login ID</div>
                                                <div class="text-grey-6">email@business.com</div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">Password</div>
                                                <div class="">****************</div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">Email</div>
                                                <div class="">siddxd@business.com</div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">Phone Number</div>
                                                <div class="">+91 49652845732</div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">Date of Birth</div>
                                                <div class="">dd/mm/yyyy</div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">Address 1</div>
                                                <div class=""></div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-xl">
                                                <q-space />
                                            </div>

                                            
                                        </div>
                                        <div class="row q-pa-sm tabsborder q-mt-md">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-md">
                                                <label><b>Document Details</b></label>
                                                <q-btn dense rounded color="blue" class="text-capitalize q-px-lg float-right">Edit</q-btn>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">National Insurance No.</div>
                                                <div class="">Sid</div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">Council Badge Ref:</div>
                                                <div class="">email@business.com</div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">DVLA Driving Licence No.</div>
                                                <div class="">****************</div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-md">
                                                <div class="text-grey-6">DBS Update Certificate No.</div>
                                                <div class="">siddxd@business.com</div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-xl">
                                                <q-space />
                                            </div>

                                            
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs ">
                                        <div class="row q-pa-sm tabsborder">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-md">
                                                <label><b>Quick Documents</b></label>
                                                <q-btn flat dense icon="download" class="text-capitalize q-px-md float-right">Download</q-btn>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs text-center">
                                                <q-img src="~src/assets/images/wordicon.png" width="30px"></q-img>
                                                <div class="text-caption">File Name</div>
                                                <div class="text-caption">8mb</div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs text-center">
                                                <q-img src="~src/assets/images/wordicon.png" width="30px"></q-img>
                                                <div class="text-caption">File Name</div>
                                                <div class="text-caption">8mb</div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs text-center">
                                                <q-img src="~src/assets/images/wordicon.png" width="30px"></q-img>
                                                <div class="text-caption">File Name</div>
                                                <div class="text-caption">8mb</div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs text-center">
                                                <q-img src="~src/assets/images/wordicon.png" width="30px"></q-img>
                                                <div class="text-caption">File Name</div>
                                                <div class="text-caption">8mb</div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-xl">
                                                <q-space />
                                            </div>
                                        </div>

                                        <div class="row q-pa-sm tabsborder q-mt-md">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-md">
                                                <label><b>Vehicle Assigned</b></label>
                                                <q-btn dense rounded color="blue" class="text-capitalize q-px-lg float-right">Edit</q-btn>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-none">
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs text-center">
                                                        <q-img src="~src/assets/images/car.png"></q-img>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs ">
                                                        <div class="text-caption"><b>Vehicle Name</b></div>
                                                        <div class="text-caption">Information</div>
                                                        <div class="text-caption">Information</div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs text-center">
                                                        <q-img src="~src/assets/images/car.png"></q-img>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs ">
                                                        <div class="text-caption"><b>Vehicle Name</b></div>
                                                        <div class="text-caption">Information</div>
                                                        <div class="text-caption">Information</div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs text-center">
                                                        <q-img src="~src/assets/images/car.png"></q-img>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs ">
                                                        <div class="text-caption"><b>Vehicle Name</b></div>
                                                        <div class="text-caption">Information</div>
                                                        <div class="text-caption">Information</div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-xl">
                                                <q-space />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs ">
                                        <div class="row q-pa-sm tabsborder">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div><b>Expiring</b></div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-md ">
                                                <q-card flat class="q-mb-md">
                                                    <q-item class="q-pa-none">
                                                        <q-item-section avatar>
                                                            <q-badge style="background:rgba(255, 0, 0, 0.2)" class="q-pa-md">
                                                                <img src="~src/assets/images/user-icon.png" />
                                                            </q-badge>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-item-label caption class="text-black">Council Badge </q-item-label>
                                                            <q-item-label caption class="text-red">
                                                                Expiring in 2 days
                                                            </q-item-label>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-btn dense class="text-capitalize text-white q-mx-xs" style="background-color:#C62828;font-size:12px"><q-icon name="edit" size="16px" /> Update</q-btn>
                                                        </q-item-section>
                                                    </q-item>
                                                </q-card>
                                                <q-card flat class="q-mb-md">
                                                    <q-item class="q-pa-none">
                                                        <q-item-section avatar>
                                                            <q-badge style="background:rgba(255, 0, 0, 0.2)" class="q-pa-md">
                                                                <img src="~src/assets/images/user-icon.png" />
                                                            </q-badge>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-item-label caption class="text-black">Council Badge </q-item-label>
                                                            <q-item-label caption class="text-red">
                                                                Expiring in 2 days
                                                            </q-item-label>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-btn dense class="text-capitalize text-white q-mx-xs" style="background-color:#C62828;font-size:12px"><q-icon name="edit" size="16px" /> Update</q-btn>
                                                        </q-item-section>
                                                    </q-item>
                                                </q-card>
                                                <q-card flat class="q-mb-md">
                                                    <q-item class="q-pa-none">
                                                        <q-item-section avatar>
                                                            <q-badge style="background:rgba(255, 0, 0, 0.2)" class="q-pa-md">
                                                                <img src="~src/assets/images/user-icon.png" />
                                                            </q-badge>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-item-label caption class="text-black">Council Badge </q-item-label>
                                                            <q-item-label caption class="text-red">
                                                                Expiring in 2 days
                                                            </q-item-label>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-btn dense class="text-capitalize text-white q-mx-xs" style="background-color:#C62828;font-size:12px"><q-icon name="edit" size="16px" /> Update</q-btn>
                                                        </q-item-section>
                                                    </q-item>
                                                </q-card>
                                                <q-card flat class="q-mb-md">
                                                    <q-item class="q-pa-none">
                                                        <q-item-section avatar>
                                                            <q-badge style="background:rgba(255, 0, 0, 0.2)" class="q-pa-md">
                                                                <img src="~src/assets/images/user-icon.png" />
                                                            </q-badge>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-item-label caption class="text-black">Council Badge </q-item-label>
                                                            <q-item-label caption class="text-red">
                                                                Expiring in 2 days
                                                            </q-item-label>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-btn dense class="text-capitalize text-white q-mx-xs" style="background-color:#C62828;font-size:12px"><q-icon name="edit" size="16px" /> Update</q-btn>
                                                        </q-item-section>
                                                    </q-item>
                                                </q-card>
                                                <q-card flat class="q-mb-md">
                                                    <q-item class="q-pa-none">
                                                        <q-item-section avatar>
                                                            <q-badge style="background:rgba(255, 0, 0, 0.2)" class="q-pa-md">
                                                                <img src="~src/assets/images/user-icon.png" />
                                                            </q-badge>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-item-label caption class="text-black">Council Badge </q-item-label>
                                                            <q-item-label caption class="text-red">
                                                                Expiring in 2 days
                                                            </q-item-label>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-btn dense class="text-capitalize text-white q-mx-xs" style="background-color:#C62828;font-size:12px"><q-icon name="edit" size="16px" /> Update</q-btn>
                                                        </q-item-section>
                                                    </q-item>
                                                </q-card>
                                                <q-card flat class="q-mb-md">
                                                    <q-item class="q-pa-none">
                                                        <q-item-section avatar>
                                                            <q-badge style="background:rgba(255, 0, 0, 0.2)" class="q-pa-md">
                                                                <img src="~src/assets/images/user-icon.png" />
                                                            </q-badge>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-item-label caption class="text-black">Council Badge </q-item-label>
                                                            <q-item-label caption class="text-red">
                                                                Expiring in 2 days
                                                            </q-item-label>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-btn dense class="text-capitalize text-white q-mx-xs" style="background-color:#C62828;font-size:12px"><q-icon name="edit" size="16px" /> Update</q-btn>
                                                        </q-item-section>
                                                    </q-item>
                                                </q-card>
                                                <q-card flat class="q-mb-md">
                                                    <q-item class="q-pa-none">
                                                        <q-item-section avatar>
                                                            <q-badge style="background:rgba(255, 0, 0, 0.2)" class="q-pa-md">
                                                                <img src="~src/assets/images/user-icon.png" />
                                                            </q-badge>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-item-label caption class="text-black">Council Badge </q-item-label>
                                                            <q-item-label caption class="text-red">
                                                                Expiring in 2 days
                                                            </q-item-label>
                                                        </q-item-section>
                                                        <q-item-section>
                                                            <q-btn dense class="text-capitalize text-white q-mx-xs" style="background-color:#C62828;font-size:12px"><q-icon name="edit" size="16px" /> Update</q-btn>
                                                        </q-item-section>
                                                    </q-item>
                                                </q-card>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-xl">
                                                <q-space />
                                            </div>
                                        </div>

                                    </div>
                                  
                                </div>
                               <!-- FOOTER BUTTONS -->
                                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1">
                                        <!-- <q-btn label="Cancel" type="button" color="grey" class="q-ma-xs q-px-lg" />
                                        <q-btn label="Next" type="submit" class="q-ma-xs q-px-lg" color="primary"/> -->
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
                                        <q-btn outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
                                        <!-- <q-btn label="Skip for now" type="button" color="grey" class="q-ma-xs q-px-lg" /> -->
                                        <!-- <q-btn outline right class="text-capitalize themebtnborder" label="Save" /> -->
                                    </div>
                                </div>
                                
                            </q-form>
                        </q-tab-panel>

                        <q-tab-panel name="report_tab" class="no-padding ">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm ">
                                    <div class="row q-pa-md tabsborder">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-h5">Notification  Settings</div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="text-grey q-py-md"><small>ACCOUNT</small></div>
                                            <div class="text-grey"><q-toggle v-model="setting1" label="Send a reminder email 10 days before Tax or MOT expiry" /></div>
                                            <div class="text-grey"><q-toggle v-model="setting2" label="Send a daily reminder email when Tax or MOT is expiring in 5 days or sooner" /></div>
                                            <div class="text-grey"><q-toggle v-model="setting3" label="Number of defects not signed-off" /></div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="text-grey q-py-md"><small>APPLICATION</small></div>
                                            <div class="text-grey"><q-toggle v-model="setting5" label="Place Holder" /></div>
                                            <div class="text-grey"><q-toggle v-model="setting6" label="Place Holder" /></div>
                                            <div class="text-grey"><q-toggle v-model="setting7" label="Place Holder" /></div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <!-- FOOTER BUTTONS -->
                                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1">
                                        <q-btn label="Cancel" type="button" color="grey" class="q-ma-xs q-px-lg" />
                                        <q-btn label="Create User" type="button" class="q-ma-xs q-px-lg" color="primary"/>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
                                    </div>
                                </div>
                            </div>
                        </q-tab-panel>

                    </q-tab-panels>
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
    label: 'Vehicle Name',
    align: 'left',
    field: row => row.vehiclename,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'vregistration', align: 'left', label: 'Vehicle Registration', field: 'vregistration', sortable: true },
  { name: 'licence_number', align: 'left', label: 'Licence Number', field: 'licence_number', sortable: true },
  { name: 'licence_expiry', align: 'left', label: 'Licence Expiry ', field: 'licence_expiry' },
  { name: 'registration', align: 'left', label: 'Registration', field: 'registration' },
  { name: 'make', align: 'left', label: 'Make', field: 'make' },
  { name: 'model', align: 'left', label: 'Model', field: 'model' },
  { name: 'assigned_driver', align: 'left', label: 'Assigned Driver', field: 'assigned_driver'},
  { name: 'details', align: 'left', label: 'Details', field: 'details'}
]

var rows = [
  {
    id:'1',
    vehiclename: 'Text Column',
    vregistration : 'Car Name / ID ',
    licence_number: '23-oct-2023',
    licence_expiry: '-',
    registration: '@User Name',
    make: '-',
    model: 'YES',
    assigned_driver: '',
    details: 'View Details'
  },
  {
    id:'2',
    vehiclename: 'Text Column',
    vregistration : 'Car Name / ID ',
    licence_number: '23-oct-2023',
    licence_expiry: '-',
    registration: '@User Name',
    make: '-',
    model: 'NO',
    assigned_driver: '',
    details: 'View Details'
  },
 
]

export default defineComponent({
    name: 'AddDriver',
    components: {
        
    },
    setup() {
        useMeta(() => {
            return {
                title: "View Driver Details - Fleet Management",
            };
        });
    },
    data(){
        return {
            value: ref(81),
            activeSkeleton: false,
            tab: ref('info_tab'),
            setting1: ref(true),
            setting2: ref(false),
            setting3: ref(true),
            setting5: ref(false),
            setting6: ref(false),
            setting7: ref(true),

            name : ref(null),
            age : ref(null),
            accept : ref(false),
            date: ref('2019/02/01'),

            initialPagination: {
                // sortBy: 'desc',
                // descending: false,
                // page: 2,
                rowsPerPage: 8
                // rowsNumber: xx if getting data from a server
            },
            columns,
            rows,
        }
    },
    created() {
        let parent=this;
        setTimeout(function(){
            parent.activeSkeleton = true;
            console.log("The component is created yet.");
        }, 3000);     
    },
  method:{
    onSubmit () {
    }
  }
})
</script>
