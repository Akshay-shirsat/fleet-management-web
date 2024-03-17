<template>
    <q-page class="pagelay ">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-3 col-md-4 col-sm-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el label="Home" />
                            <q-breadcrumbs-el to="/defects-list" label="Defects Reported" />
                            <q-breadcrumbs-el label="Defects Details" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title"><q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px;" /> Defects : HVI10412</div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
                    
                </div>
                <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto">
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
                <!-- SKELETON START -->
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
                            </q-tabs>
                        </template>

                        <template v-slot:after>
                            <q-tab-panels v-model="tab" >
                                <q-tab-panel name="requirement_tab" class="vtab-panel">
                                    <q-skeleton height="150px" />
                                </q-tab-panel>
                            </q-tab-panels>
                        </template>

                    </q-splitter>
                </div>
                <!-- SKELETON END -->
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
                                <q-tab name="requirement_tab" class="text-capitalize borderbottom">
                                    Council Requirement <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="work_tab" label="Body Work" class="text-capitalize tabboderbottom" >
                                    <q-badge rounded floating color="orange" class="tabsdots" />
                                </q-tab>
                                <q-tab name="odometer_tab" label="Odometer" class="text-capitalize tabboderbottom" >
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
                                        
                                        <div class="col-md-12 col-sm-12 col-xs-12 horiz-tabsborder q-pa-md q-mb-md">
                                            <div class="row">
                                                <div class="col-md-4 q-mb-md">
                                                    <div class="text-body2 q-mb-md">Is there a first aid kit available and accessible? <span class="text-red">*</span> <span class="text-grey">(Check expiry date)</span> </div>
                                                    <q-btn outline class="q-mr-md q-px-lg themebtnborder">Yes</q-btn>
                                                    <q-btn outline class="q-mr-md q-px-lg themebtnborder btnactive">No</q-btn>
                                                    <q-btn outline class="q-mr-md q-px-lg themebtnborder">Yes</q-btn>
                                                </div>
                                                <div class="col-md-4 q-mb-md">
                                                    <div class="text-body2"> Uploaded Photos </div>
                                                    <div class="q-pl-sm q-mt-md text-grey">
                                                        No Photos Uploaded
                                                        <!-- <q-img src="~src/assets/images/a1.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" /> -->
                                                    </div>
                                                </div>
                                                <div class="col-md-4 q-mb-md">
                                                    <div class="text-body2">Comments</div>
                                                    <q-card class="my-card q-my-md bg-grey-1 no-border-radius">
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

                                <q-tab-panel name="work_tab">
                                    <div class="text-h4 q-mb-md">Alarms</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                                </q-tab-panel>

                                <q-tab-panel name="odometer_tab">
                                    <div class="text-h4 q-mb-md">Movies</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
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
        title: "View Defects - Fleet Management",
      };
    });
  },
  data(){
    return {
        isdataAvailable: false,
        value: ref(81),
        tab: ref('requirement_tab'),
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
