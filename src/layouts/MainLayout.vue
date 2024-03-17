<style>
.sidebarbg {
  background: #ffff;
}
.headerbg {
  background-color: white;
}
</style>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="headerbg shadow-1">
      <q-toolbar style="color: black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-img src="~src/assets/fleetweb.png" style="width: 150px" />
        </q-toolbar-title>

        <div class="text-weight-medium flex items-center">
          <q-btn flat round dense icon="email" class="q-mr-md">
            <q-badge floating color="blue">2</q-badge>
          </q-btn>

          <q-btn flat round dense icon="notifications">
            <q-badge floating color="orange" rounded size="xs">2</q-badge>
            <q-menu>
              <q-list bordered class="rounded-borders" style="max-width: 350px">
                <q-item-label header>Notifications</q-item-label>
                <q-separator />
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label lines="1">Brunch this weekend?</q-item-label>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold">Janet</span>
                      -- I'll be in your neighborhood doing errands this
                      weekend. Do you want to grab brunch?
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side top> 1 min ago </q-item-section>
                </q-item>

                <q-separator inset="item" />

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label lines="1">Linear Project</q-item-label>
                    <q-item-label caption lines="2">
                      <span class="text-weight-bold">John</span>
                      -- Can we schedule a call for tomorrow?
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side top> 1 min ago </q-item-section>
                </q-item>
              </q-list>

              <q-item clickable v-ripple>
                <q-item-section class="text-center">
                  <div
                    @click="$router.replace('/notification')"
                    class="text-orange"
                  >
                    Read More Notification
                  </div>
                </q-item-section>
              </q-item>
            </q-menu>
          </q-btn>
          <q-avatar size="lg">|</q-avatar>
          <div>
            <q-avatar
              color="green"
              text-color="white"
              icon="person_pin"
              size="md"
            />
            <q-btn-dropdown flat label=" Marci Fumons">
              <q-list>
                <q-item clickable v-close-popup tabindex="0">
                  <q-item-section>
                    <q-item-label>Profile</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup tabindex="1">
                  <q-item-section>
                    <q-item-label @click="signOut">Logout</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="userType == 'super-admin'"
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = false"
      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'sidebarbg'"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item-label header> Menu </q-item-label>
          <q-item clickable v-ripple @click="$router.replace('/')">
            <q-item-section avatar class="q-pr-none">
              <q-icon name="home" class="menu-title" />
            </q-item-section>
            <q-item-section class="menu-title"> Dashboard </q-item-section>
          </q-item>

          <q-item
            active
            clickable
            v-ripple
            @click="$router.replace('/business-calendar')"
          >
            <q-item-section avatar class="menu-title">
              <q-icon name="calendar_month" />
            </q-item-section>
            <q-item-section class="menu-title"> Schedules </q-item-section>
          </q-item>

          <q-expansion-item
            group="somegroup"
            class=" overflow-hidden"
            icon="home"
            label="Councils"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/council-list')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    All Council
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/add-council')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Add Council
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            group="somegroup"
            class="overflow-hidden"
            icon="equalizer"
            label="Compliances"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/vehicle-check')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Vehicle Checks
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Accident Report / Checks
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            group="somegroup"
            class="overflow-hidden"
            icon="description"
            label="Drivers"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    All Drivers
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/driver-profile')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Add New Driver
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            group="somegroup"
            class=" overflow-hidden"
            icon="settings"
            label="Settings"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/settings')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    General Settings
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/smtp-settings')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    SMTP Settings
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/email-template-settings')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Email Template Settings
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-item active clickable v-ripple @click="$router.replace('/')">
            <q-item-section avatar class="menu-title">
              <q-icon name="notifications" />
            </q-item-section>
            <q-item-section class="menu-title">
              Notification Settings
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-if="userType == 'council'"
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = false"
      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'sidebarbg'"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item-label header> Menu </q-item-label>
          <q-item clickable v-ripple @click="$router.replace('/')">
            <q-item-section avatar class="q-pr-none">
              <q-icon name="home" class="menu-title" />
            </q-item-section>
            <q-item-section class="menu-title"> Dashboard </q-item-section>
          </q-item>

          <q-item
            active
            clickable
            v-ripple
            @click="$router.replace('/business-calendar')"
          >
            <q-item-section avatar class="menu-title">
              <q-icon name="calendar_month" />
            </q-item-section>
            <q-item-section class="menu-title"> Schedules </q-item-section>
          </q-item>

          <q-expansion-item
            group="somegroup"
            class="overflow-hidden"
            icon="equalizer"
            label="Compliances"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/checks-list')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Vehicle Checks
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/accident-report')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Accident Report
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/defects-list')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Defects
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            group="somegroup"
            class=" overflow-hidden"
            icon="description"
            label="Businesses"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/business-list')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    All Businesses
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/add-business')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Add Business
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            group="somegroup"
            class=" overflow-hidden"
            icon="airport_shuttle"
            label="Vehicle"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/vehicle-list')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    All vehicle
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/add-vehicle')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Add Vehicle
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

           <q-expansion-item
            group="somegroup"
            class=" overflow-hidden"
            icon="summarize"
            label="Manage Checklist"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/manageChecklistVehicleCheckNDefects')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                   Vehicle Checklist
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/add-checks')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Add checks
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            group="somegroup"
            class=" overflow-hidden"
            icon="summarize"
            label="Reports"
            header-class="menu-title"
            expand-icon-class="menu-title"
            :content-inset-level="0.5"
          >
            <q-card class="transparent rounded-borders q-py-xs">
              <q-card-section class="q-py-xs menusideborder">
                <q-item
                  active
                  clickable
                  @click="$router.replace('/report-overview')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Overview
                  </q-item-section>
                </q-item>
                <q-item
                  active
                  clickable
                  @click="$router.replace('/report-list')"
                  dense
                  class="no-padding"
                >
                  <q-item-section class="sub-menu-title">
                    Reports
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-item
            active
            clickable
            v-ripple
            @click="$router.replace('/council')"
          >
            <q-item-section avatar class="menu-title">
              <q-icon name="notifications" />
            </q-item-section>
            <q-item-section class="menu-title">
              Notification Settings
            </q-item-section>
          </q-item>

          <q-item
            active
            clickable
            v-ripple
            @click="$router.replace('/council')"
          >
            <q-item-section avatar class="menu-title">
              <q-icon name="date_range" />
            </q-item-section>
            <q-item-section class="menu-title"> Requests </q-item-section>
          </q-item>

          <q-item
            active
            clickable
            v-ripple
            @click="$router.replace('/council')"
          >
            <q-item-section avatar class="menu-title">
              <q-icon name="file_upload" />
            </q-item-section>
            <q-item-section class="menu-title"> Exports </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  useQuasar,
  LocalStorage,
  Loading,
  QSpinnerGears,
  Notify,
} from "quasar";
export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {
      userType: LocalStorage.getItem("user_type"),
    };
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      miniState: ref(false),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    signOut() {
      LocalStorage.clear();
      this.$router.replace("/login");
    },
  },
});
</script>
