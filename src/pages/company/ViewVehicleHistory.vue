<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/company" label="Home" />
                            <q-breadcrumbs-el to="/vehicle-registered-list" label="Vehicles Registered" />
                            <q-breadcrumbs-el to="/vehicle-registered-details" label="Vehicle Details" />
                            <q-breadcrumbs-el label="Vehicle Check - History" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title"><q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px;" /> Vehicle Check : HVI10412</div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
                    
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
                    <q-btn flat dense icon="download" class="q-mx-md filterbtn_right"> <span class="q-pl-xs">Export</span> </q-btn>
                    <!-- <q-btn flat dense icon="delete_outline" class="q-mx-md text-red text-capitalize filterbtn_right" > <span class="q-pl-xs">Delete</span> </q-btn> -->
                    <!-- <q-btn flat dense icon="filter_list" class="q-mx-md text-blue text-capitalize filterbtn_right"> <span class="q-pl-xs">Filter</span> </q-btn> -->
                    <q-btn color="primary" class="q-mx-sm q-px-md text-capitalize filterbtn_right"> <span class="q-pl-xs">Request update</span> </q-btn>
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
                                <q-tab name="requirement_tab" class="q-mb-md">
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
                                <q-tab name="wiperwash_tab" class="q-mb-md">
                                    <q-skeleton width="150px" height="50px" />
                                </q-tab>
                                <q-tab name="tyre_tab" class="q-mb-md">
                                    <q-skeleton width="150px" height="50px" />
                                </q-tab>
                                <q-tab name="tyre_tab" class="q-mb-md">
                                    <q-skeleton width="150px" height="50px" />
                                </q-tab>
                            </q-tabs>
                        </template>

                        <template v-slot:after>
                            <q-tab-panels v-model="tab" >
                                <q-tab-panel name="requirement_tab" class="vtab-panel">
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
                        class="vtab-sidebar"
                        >
                        <template v-slot:before>
                            <q-tabs
                            v-model="tab"
                            vertical
                            active-color="primary"
                            indicator-color="primary"
                            class="htabs text-grey-8 full-height horiz-tabsborder "
                            >
                                <q-tab name="requirement_tab" class="text-capitalize tabboderbottom borderbottom">
                                    Council Requirement <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="interior_tab" label="Interior Check" class="text-capitalize tabboderbottom borderbottom">
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="exterior_tab" label="Exterior Questions" class="text-capitalize tabboderbottom borderbottom">
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="light_tab" label="Lightning Check" class="text-capitalize tabboderbottom borderbottom">
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="wiperwash_tab" label="Wipers and Washer" class="text-capitalize tabboderbottom borderbottom">
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="tyre_tab" label="Tyre Check" class="text-capitalize tabboderbottom borderbottom">
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                
                                <q-tab name="work_tab" label="Body Work" class="text-capitalize tabboderbottom borderbottom" >
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="odometer_tab" label="Odometer" class="text-capitalize tabboderbottom borderbottom" >
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="comment_tab" label="Comments" class="text-capitalize tabboderbottom borderbottom" >
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
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
                                <q-tab-panel name="requirement_tab" class="no-padding vtab-panel">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2 q-mb-md">1. Council vehicle licence plate(s) clearly displayed and not obsured? <span class="text-red">*</span> </div>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder btnactive_blue">Yes</q-btn>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder">No</q-btn>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder">N/A</q-btn>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2"> Uploaded Photos </div>
                                                    <div class="q-pl-sm q-mt-md text-grey">
                                                        No Photos Uploaded
                                                        <!-- <q-img src="~src/assets/images/a1.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" /> -->
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2">Comments</div>
                                                    <q-card class="my-card q-my-md bg-grey-1 no-border-radius">
                                                        <q-card-section>
                                                            <small>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</small>
                                                        </q-card-section>
                                                        <q-separator />
                                                    </q-card>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2 q-mb-md">2. No Smoking signs are displayed and viewable by every passenger? <span class="text-red">*</span> </div>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder btnactive_blue">Yes</q-btn>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder ">No</q-btn>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder">Yes</q-btn>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2"> Uploaded Photos </div>
                                                    <div class="q-pl-sm q-mt-md text-grey">
                                                        <q-img src="~src/assets/images/a1.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2">Comments</div>
                                                    <q-card class="my-card q-my-md bg-grey-1 no-border-radius">
                                                        <q-card-section>
                                                            <small>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</small>
                                                        </q-card-section>
                                                        <q-separator />
                                                    </q-card>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2 q-mb-md">3. Is there a first aid kit available and accessible? <span class="text-red">*</span> <span class="text-grey">(Check expiry date)</span> </div>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder">Yes</q-btn>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder btnactive">No</q-btn>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder">N/A</q-btn>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2"> Uploaded Photos </div>
                                                    <div class="q-pl-sm q-mt-md text-grey">
                                                        No Photos Uploaded
                                                        <!-- <q-img src="~src/assets/images/a1.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" /> -->
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2">Comments</div>
                                                    <q-card class="my-card q-my-md bg-grey-1 no-border-radius">
                                                        <q-card-section>
                                                            <small>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</small>
                                                        </q-card-section>
                                                        <q-separator />
                                                    </q-card>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2 q-mb-md">5. Is there a fire extinguisher available and accessible? * (Check expiry date) </div>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder btnactive_blue">Yes</q-btn>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder ">No</q-btn>
                                                    <q-btn outline class="q-mr-md q-mb-md q-px-lg themebtnborder">N/A</q-btn>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2"> Uploaded Photos </div>
                                                    <div class="q-pl-sm q-mt-md text-grey">
                                                        <q-img src="~src/assets/images/a1.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mb-md">
                                                    <div class="text-body2">Comments</div>
                                                    <q-card class="my-card q-my-md bg-grey-1 no-border-radius">
                                                        <q-card-section>
                                                            <small>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</small>
                                                        </q-card-section>
                                                        <q-separator />
                                                    </q-card>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="interior_tab" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Interior Check</div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="exterior_tab" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Exterior Questions</div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="light_tab" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Lightning Check</div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="wiperwash_tab" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Wipers and Washer </div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="tyre_tab" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Tyre Check</div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="work_tab" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Work</div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="odometer_tab" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Odometer</div>
                                        </div>
                                    </div>
                                </q-tab-panel>

                                <q-tab-panel name="comment_tab" class="no-padding">
                                    <div class="row q-pl-sm ">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="text-body2">Comments</div>
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
  name: 'ViewVehicleHistory',
  components: {
      
  },
  setup() {
    useMeta(() => {
      return {
        title: "Vehicle History - Fleet Management",
      };
    });
  },
  data(){
    return {
        isdataAvailable:ref(false),
        value: ref(81),
        tab: ref('requirement_tab'),
        splitterModel: ref(20)
    }
  },
  created() {
        let parent=this;
        setTimeout(function(){
            parent.isdataAvailable = true;
            console.log("The component is created yet.");
        }, 3000);     
    }
})
</script>
