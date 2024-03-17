<template>
    <q-page class="">
        <div class="q-pa-md example-row-equal-width">
            <div class="row mb-block">
                <div class="col-lg-4 col-md-6 col-sm-12 q-pa-sm">
                    <small>
                        <q-breadcrumbs>
                            <q-breadcrumbs-el to="/" label="Home" />
                            <q-breadcrumbs-el label="Driver" />
                            <q-breadcrumbs-el label="Driver Profile" />
                        </q-breadcrumbs>
                    </small>
                    <div class="text-title">Driver Profile: <b>Sid</b></div>
                    <div class="text-weight-light header-sub-title" style="color:#7C8DB5">Here is the information about all Your Vehicles</div>

                </div>
                <div class="col-lg-8 col-md-6 col-sm-12 q-pa-sm q-my-auto text-right">
                    <q-input dense filled v-model="text"  class="searchwidth" placeholder="Search" style="border-radius:8px;display: inline-block;">
                        <template v-slot:prepend>
                        <q-icon name="search" />
                        </template>
                    </q-input>

                    <q-btn  icon="add" color="primary" class="q-mx-sm q-px-md text-capitalize"> <span class="q-pl-xs">Add Driver</span> </q-btn>
                    <q-btn flat dense icon="edit" class="q-mx-md text-blue text-capitalize"> <span class="q-pl-xs">Edit</span> </q-btn>
                    <q-btn flat dense icon="delete_outline" class="q-mx-md text-red text-capitalize" > <span class="q-pl-xs">Delete</span> </q-btn>
                    <q-btn flat dense icon="download" class="q-mx-md"> <span class="q-pl-xs">Export</span> </q-btn>


                </div>
            </div>



            <div class="row mb-block q-my-sm">
                <div class="col-lg-12">
                    <q-tabs
                        v-model="tab"
                        dense
                        class="vtabs text-black"
                        active-color="primary"
                        indicator-color="primary"
                        align="left"
                        narrow-indicator

                        >
                        <q-tab name="info_tab" label="Driver Information" class="tabsborder" />
                        <q-tab name="history_tab" label="Assiged Vehicle History" class="tabsborder" />
                    </q-tabs>
                    <q-separator />
                    <q-tab-panels v-model="tab" animated class="q-mt-md">
                        <q-tab-panel name="info_tab" class="q-pa-none ">

                            <div class="row q-pa-md q-mb-md" style="border:1px solid #D9D9D9;border-radius:10px">
                                <div class="col-lg-1 col-md-12 col-sm-12 col-xs-12">
                                    <div class="row ">
                                        <div class="col-lg-8">
                                            <q-img src="~src/assets/images/user1.png" style="border-radius:10px"></q-img>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                    <div class="row q-my-sm">
                                        <div class="col-lg-8">
                                            <div class="q-py-xs text-weight-bold">Esthera Jackson</div>
                                            <div class="text-grey-6">esthera@businessname.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                    <div class="row " >
                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Driver Name</div>
                                            <div class="text-grey-6">Sid</div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Email</div>
                                            <div class="text-grey-6">siddxd@business.com</div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Phone Number</div>
                                            <div class="text-grey-6">+91 49652845732</div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">App Login ID</div>
                                            <div class="text-grey-6">email@business.com</div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Password</div>
                                            <div class="text-grey-6">********</div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">Date of Birth</div>
                                            <div class="text-grey-6">dd/mm/yyyy</div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                            <div class="q-py-sm">National Insurance Number</div>
                                            <div class="text-grey-6">49652845732</div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="row  q-mb-md">
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="row" style="border:1px solid #D9D9D9;border-radius:10px">
                                        <div class="col-lg-8 q-pa-md">
                                            <div class="text-h6">Notification  Settings</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="row" style="border:1px solid #D9D9D9;border-radius:10px">
                                        <div class="col-lg-12">
                                            <div class="text-h6">Notification  Settings</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="row" style="border:1px solid #D9D9D9;border-radius:10px">
                                        <div class="col-lg-12">

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </q-tab-panel>

                        <q-tab-panel name="history_tab">
                            <div class="text-h6">history_tab</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </q-tab-panel>

                    </q-tab-panels>
                </div>
            </div>
            <!-- FOOTER BUTTONS -->
            <div class="row fixed-bottom-right q-gutter-sm text-right q-pa-sm q-pr-lg footercls">
                <div class="col-12">
                    <q-btn  outline label="Cancel" class="text-capitalize q-mr-md themebtnborder" />
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
                title: "Driver Profile - Fleet Management",
            };
        });
    },
    data(){
        return {
        value: ref(81),
        tab: ref('info_tab')
        }
    }
})
</script>
