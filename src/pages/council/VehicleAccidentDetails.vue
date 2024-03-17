<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-4 col-md-4 col-sm-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/council" label="Home" />
                            <q-breadcrumbs-el to="/vehicle" label="Vehicles" />
                            <q-breadcrumbs-el to="/council-vehicle-details" label="Vehicle Details - Accident" />
                            <q-breadcrumbs-el label="Accident Report Details" />
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
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                                                    <div class="text-body2">4. Photos of damage to Vehicle 1</div>
                                                    <div class="q-pl-sm q-mt-md">
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a1.png" style="width:100px;" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div class="text-body2">5. Photos of damage to Vehicle 2  </div>
                                                    <div class="q-pl-sm q-mt-md">
                                                        <q-img src="~src/assets/images/a1.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div class="text-body2">6. Photos of damage to Vehicle 3 </div>
                                                    <div class="q-pl-sm q-mt-md">
                                                        <q-img src="~src/assets/images/a2.png" style="width:100px;" class="q-mr-sm" />
                                                        <q-img src="~src/assets/images/a1.png" style="width:100px;" />
                                                    </div>
                                                    
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
        title: "Accident Details - Fleet Management",
      };
    });
  },
  data(){
    return {
      value: ref(81),
      tab: ref('detail'),
      splitterModel: ref(20)
    }
  }
})
</script>
