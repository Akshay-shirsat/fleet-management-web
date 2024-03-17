<template>
    <q-card class="my-card q-pa-md" style="min-height:390px" v-if="activeComp == ''">
        <div class=" text-bold">Ageing Defects List</div>

        <q-markup-table>
            <thead>
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
    </q-card>
    <q-card bordered class="my-card no-shadow q-pa-md" v-if="activeComp">
        <div class="text-h6">Ageing Defects List</div>
        <q-markup-table class="no-border my-sticky-header-table no-shadow headbg">
                <thead>
                    <tr>
                    <th class="text-left">Business Name</th>
                    <th class="text-left">Vehicle Reg</th>
                    <th class="text-left">Date of Defect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">12345612 </td>
                        <td class="text-left">dd/mm/yyyy</td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">12345612 </td>
                        <td class="text-left">dd/mm/yyyy</td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">12345612 </td>
                        <td class="text-left">dd/mm/yyyy</td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">12345612 </td>
                        <td class="text-left">dd/mm/yyyy</td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">12345612 </td>
                        <td class="text-left">dd/mm/yyyy</td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">12345612 </td>
                        <td class="text-left">dd/mm/yyyy</td>
                    </tr>
                    <tr>
                        <td class="text-left">Excelsior Taxis Ltd</td>
                        <td class="text-left">12345612 </td>
                        <td class="text-left">dd/mm/yyyy</td>
                    </tr>
                </tbody>
            </q-markup-table>
    </q-card>
</template>
<script>
import { defineComponent } from 'vue'
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
    name: 'DefectsTable',
    components: {
    },
    data(){
        return {
            activeComp: false,
            projectdata : '',

        }
    },
    created() {
        let parent=this;
        setTimeout(function(){
            // this.basketAddSuccess = false;
            parent.activeComp = true;
            console.log("The component is created yet.");
        }, 3000);

    }

})
</script>
