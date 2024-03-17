<template>
    <q-page class="pagelay">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block header_block">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-sm">
                    <small><q-breadcrumbs>
                        <q-breadcrumbs-el to="/company" label="Home" />
                        <q-breadcrumbs-el to="request-updates" label="Request Updates" />
                        <q-breadcrumbs-el label="New Request" />
                    </q-breadcrumbs></small>
                    <div class="text-title"><q-icon name="arrow_back_ios" class="q-mt-none" style="margin-top: -8px;" />New Request</div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm text-center">
                    <div class="text-h5">50</div>
                    <div class="text-grey">Total Business Registered</div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm text-center">
                    <div class="text-h5">500</div>
                    <div class="text-grey">Total Vehicle</div>
                </div>
            </div>

            <div class="row mb-block q-my-sm">
                <!-- SKELETON START -->
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="activeSkeleton == ''">
                    <q-skeleton type="QBtn" width="350px" class="q-ml-sm q-mb-md" />
                    <q-card class="no-shadow no-padding">
                        <q-card-actions align="left" class="q-gutter-md">
                            <q-skeleton type="QBtn" width="150px"  />
                            <q-skeleton type="QBtn" width="150px" />
                            <q-skeleton type="QBtn" width="150px" />
                        </q-card-actions>
                        <q-skeleton height="300px" square />
                    </q-card>
                </div>
                <!-- SKELETON END -->

                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-px-md q-pb-md" v-if="activeSkeleton">
                    <label class="custom-label">Select Vehicle </label>
                    <q-select outlined v-model="model" :options="options"/>
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
                        <q-tab name="add_vehicle_tab" label="Vehicle Information"/>
                    </q-tabs>
                    <q-separator />
                    <q-tab-panels v-model="tab" animated class="q-mt-md">
                        
                        <q-tab-panel name="add_vehicle_tab" class="no-padding ">
                            <q-form
                                @submit="onSubmit"
                                class="q-gutter-md"
                                >
                                <div class="row tabsborder">
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 q-pa-sm ">
                                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 q-pa-md text-center">
                                            <q-img src="~src/assets/images/car.png" rounded></q-img>
                                            <q-btn color="green" dense class="full-width"> Online </q-btn>
                                            <div>
                                                <div class="q-py-sm">
                                                    Assigned Driver <q-btn flat class="q-pa-xs" ><q-icon name="edit" style="font-size:16px" /></q-btn>
                                                </div>
                                                <q-avatar size="sm">
                                                    <img src="https://cdn.quasar.dev/img/avatar.png" >
                                                </q-avatar>
                                                Natali Craig
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 q-pa-sm ">
                                        <div class="row q-pa-sm ">
                                            
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Make</div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Model</div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Colour</div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Registration Number</div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Vehicle Licence Number</div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Vehicle Licence Renewal Date</div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Date of first Registration</div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">MOT Date</div>
                                                <div class="text-grey-6">dd.mm.yyyy</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">MOT Frequency </div>
                                                <div class="text-grey-6">4 Months</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Insurance Renewal Date</div>
                                                <div class="text-grey-6">dd.mm.yyyy</div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">Private Hire Operators Licence Renewal </div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div>
                                            <!-- <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <div class="q-py-sm">CO2 </div>
                                                <div class="text-grey-6">Regular text column</div>
                                            </div> -->
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <label class="custom-label">Last Service Date </label>
                                                <q-input
                                                    outlined
                                                    name="last_service_date"
                                                    v-model="last_service_date"
                                                    type="date"
                                                />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <label class="custom-label">Last Service Mileage </label>
                                                <q-input
                                                    outlined
                                                    name="last_service_mileage"
                                                    v-model="last_service_mileage"
                                                    type="date"
                                                />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
                                                <label class="custom-label">Car Tax Renewal Date</label>
                                                <q-input
                                                    outlined
                                                    name="car_tax_renewal_date"
                                                    v-model="car_tax_renewal_date"
                                                    type="date"
                                                />
                                            </div>
                                            <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                                                <q-btn outline dense color="blue" class=""><q-icon name="add"></q-icon>  Add More</q-btn>
                                            </div> -->
                                        </div>
                                    </div>
                                   
                                </div>
                               <!-- FOOTER BUTTONS -->
                                <div class="row fixed-bottom-right q-pa-sm q-mt-xl footercls">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align1">
                                        <q-btn label="Cancel" type="button" color="grey" class="q-ma-xs q-px-lg text-capitalize" />
                                        <q-btn label="Request Update" type="submit" class="q-ma-xs q-px-lg text-capitalize" color="primary"/>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer_align2 q-pr-lg">
                                        <!-- <q-btn icon="add" label="Add More Vehicle" type="button" color="grey" class="q-ma-xs q-px-lg" /> -->
                                        <!-- <q-btn @click="$router.replace('/')" outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
                                        <q-btn outline right class="text-capitalize themebtnborder" label="Save" /> -->
                                    </div>
                                </div>
                                
                            </q-form>
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

export default defineComponent({
  name: 'NewRequest',
  components: {
      
  },
  setup() {
    useMeta(() => {
      return {
        title: "New Request - Fleet Management",
      };
    });
  },
  data(){
    return {
        value: ref(81),
        activeSkeleton:false,
        model: ref("Vehicle A"),
        options: [
            'Vehicle A', 'Vehicle B', 'Vehicle C', 'Vehicle D'
        ],
        tab: ref('add_vehicle_tab'),
        name : ref(null),
        accept : ref(false),
        last_service_date : ref('2019/02/01'),
        car_tax_renewal_date : ref('2019/02/01'),
        last_service_mileage : ref(null), 

        date: ref('2019/02/01'),
    }
  },
  method:{
    onSubmit () {
    }
  },
  created() {
        let parent=this;
        setTimeout(function(){
            parent.activeSkeleton = true;
        }, 3000);     
    }
})
</script>
