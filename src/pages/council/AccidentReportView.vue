<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-4 col-md-4 col-sm-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/council" label="Home" />
                            <q-breadcrumbs-el to="/accident-report" label="Accidents" />
                            <q-breadcrumbs-el label="Accident Details" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title"><q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px;" /> Accident Report : HVI10412</div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
                    
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
                    <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                    <!-- <q-btn flat dense icon="delete_outline" class="q-mx-md text-red text-capitalize filterbtn_right" > <span class="q-pl-xs">Delete</span> </q-btn> -->
                    <!-- <q-btn flat dense icon="filter_list" class="q-mx-md text-blue text-capitalize filterbtn_right"> <span class="q-pl-xs">Filter</span> </q-btn> -->
                    <!-- <q-btn icon="add" color="primary" class="q-mx-sm q-px-md text-capitalize filterbtn_right"> <span class="q-pl-xs">Add Vehicle</span> </q-btn> -->
                    <q-input dense filled v-model="text" class="searchwidth" placeholder="Search" style="border-radius:8px;display: inline-block;">
                        <template v-slot:prepend>
                        <q-icon name="search" />
                        </template>
                    </q-input>
                </div>
                
            </div>
            
            <!-- <q-separator /> -->

            <div class="row mb-block q-my-sm">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="isdataAvailable==''">
                    <q-splitter v-model="splitterModel" >
                        <template v-slot:before>
                            <q-tabs v-model="tab" vertical >
                                <q-tab name="detail" class="q-mb-md">
                                    <q-skeleton width="150px" height="50px" />
                                </q-tab>
                                <q-tab name="interior_tab" class="q-mb-md">
                                    <q-skeleton width="150px" height="50px" />
                                </q-tab>
                                <q-tab name="exterior_tab" class="q-mb-md">
                                    <q-skeleton width="150px" height="50px" />
                                </q-tab>
                                <q-tab name="light_tab" class="q-mb-md">
                                    <q-skeleton width="150px" height="50px" />
                                </q-tab>
                            </q-tabs>
                        </template>

                        <template v-slot:after>
                            <q-tab-panels v-model="tab" >
                                <q-tab-panel name="detail" class="vtab-panel">
                                    <q-skeleton height="150px" />
                                    <br />
                                    <q-skeleton height="150px" />
                                    <br />
                                    <q-skeleton height="150px" />
                                </q-tab-panel>
                            </q-tab-panels>
                        </template>

                    </q-splitter>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="isdataAvailable">
                    <q-splitter
                        v-model="splitterModel"
                        style="height: 560px"
                        class=""
                        >
                        <template v-slot:before>
                            <q-tabs
                            v-model="tab"
                            vertical
                            active-color="primary"
                            indicator-color="primary"
                            class="htabs text-grey-8 full-height horiz-tabsborder q-px-md"
                            >
                            <q-tab name="injuries" label="Injuries" class="text-capitalize borderbottom tabboderbottom" />
                            <q-tab name="location" label="Date,Time and Location" class="text-capitalize borderbottom tabboderbottom" />
                            <q-tab name="detail" label="Collision Details" class="text-capitalize borderbottom tabboderbottom" />
                            <q-tab name="insurance" label="Insurance Details" class="text-capitalize borderbottom tabboderbottom" />
                            </q-tabs>
                        </template>

                        <template v-slot:after>
                            <q-tab-panels
                            v-model="tab"
                            animated
                            swipeable
                            vertical
                            transition-prev="jump-up"
                            transition-next="jump-up"
                            class=""
                            >
                                <q-tab-panel name="injuries" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Injuries</div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="location" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Date, Time And Location</div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="detail" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">1. Is your vehicle drivable?*</div>
                                            <div class="q-pl-sm  q-mt-md">
                                                <q-btn  outline class="themebtnborder q-mx-sm q-px-lg btnactive_blue"> Yes </q-btn>
                                                <q-btn  outline class="themebtnborder q-mr-sm q-px-lg"> No </q-btn>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">2. No. of vehicle Involved </div>
                                            <div class="q-pl-sm  q-mt-md">
                                                <q-btn  outline class="themebtnborder q-mx-sm q-px-lg"> 2 </q-btn>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div class="text-body2">3. Tap on the image below to indicate where your vehicle has been damaged. You can select multiple area </div>
                                                    <div class="q-pl-sm q-mt-md">
                                                        <q-img src="~src/assets/images/car2.png" style="width:200px;" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div class="text-body2">4. Upload Photos of damage to all vehicles involved and/or damage to property</div>
                                                
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div class="text-body2"> Uploaded Photos </div>
                                                    <div class="q-pl-sm q-mt-md">
                                                        <q-img src="~src/assets/images/a1.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div class="text-body2">Comments</div>
                                                    <q-card class="my-card q-my-md bg-grey-1">
                                                        <q-card-section>
                                                            <div>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</div>
                                                        </q-card-section>
                                                        <q-separator />
                                                    </q-card>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="insurance" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Insurance Details</div>
                                        </div>
                                    </div>
                                </q-tab-panel>
                            </q-tab-panels>
                        </template>

                        </q-splitter>
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

export default defineComponent({
    name: 'VehicleCheck',
    components: {
        
    },
    setup() {
        useMeta(() => {
            return {
                title: "View Accident Report - Fleet Management",
            };
        });
    },
    data(){
        return {
            isdataAvailable:ref(false),
            value: ref(81),
            tab: ref('detail'),
            splitterModel: ref(20)
        }
    },
    created() {
        let parent=this;
        setTimeout(function(){
            parent.isdataAvailable = true;
        }, 3000);     
    }
})
</script>
