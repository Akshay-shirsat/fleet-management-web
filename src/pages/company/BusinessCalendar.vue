<style src="@quasar/quasar-ui-qcalendar/dist/index.css"></style>
<template>
  <q-page class="pagelay">
    <div class="example-row-equal-width q-my-xs q-mx-xs">
      <q-card class="shadow-1 q-my-sm">
        <q-card-section class="q-mx-none q-pa-none">
          <div class="row mb-block header_block">
            <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm">
              <div class="text-title">Event Calendar</div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 q-pa-sm q-my-auto text-right">
              <q-btn
                dense
                rounded
                color="grey-3"
                icon="search"
                class="q-mx-md text-grey-9 text-capitalize"
              >
              </q-btn>
              <q-btn
                icon-right="add_circle"
                outline
                color="blue-14"
                label="Add Event"
                class="q-mx-sm text-capitalize"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
      <div class="row mb-block header_block">
        <div class="col-lg-12 col-md-12 col-sm-12 q-pl-sm text-center">
          <q-card class="shadow-1 q-my-sm">
            <q-card-section class="q-mx-none q-pa-none">
              <CalendarNavigationBar @today="onToday" @prev="onPrev" @next="onNext" />
              <q-separator />
              <p class="text-center text-h5 text-bold">
                {{ selectedCalendarDetails }}
              </p>
              <div class="row justify-center">
                <div style="display: flex; max-width: 800px; width: 100%" class="q-ma-sm">
                  <q-calendar-month
                    ref="calendar"
                    v-model="selectedDate"
                    animated
                    focusable
                    hoverable
                    no-active-date
                    cell-width="200px"
                    :day-min-height="138"
                    :day-height="0"
                    @change="onChange"
                    @moved="onMoved"
                    @click-date="onClickDate"
                    @click-day="onClickDay"
                    @click-workweek="onClickWorkweek"
                    @click-head-workweek="onClickHeadWorkweek"
                    @click-head-day="onClickHeadDay"
                  >
                    <template #day="{ scope: { timestamp } }">
                      <template
                        v-for="event in eventsMap[timestamp.date]"
                        :key="event.id"
                      >
                        <div
                          :class="badgeClasses(event, 'day')"
                          :style="badgeStyles(event, 'day')"
                          @click="openEventDetailsDialog(event)"
                          class="my-event"
                        >
                          <div class="title q-calendar__ellipsis">
                            {{ event.title + (event.time ? " - " + event.time : "") }}
                            <q-tooltip>{{ event.details }}</q-tooltip>
                          </div>
                        </div>
                      </template>
                    </template>
                  </q-calendar-month>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMeta } from "quasar";
// import { QCalendar, addToDate  } from '@quasar/quasar-ui-qcalendar'
import {
  QCalendarMonth,
  addToDate,
  parseDate,
  parseTimestamp,
  today,
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";

import CalendarNavigationBar from "../../components/company/CalendarNavigationBar.vue";

export default defineComponent({
  name: "BusinessCalendar",
  components: {
    //QCalendar
    CalendarNavigationBar,
    QCalendarMonth,
  },
  setup() {
    useMeta(() => {
      return {
        title: "Calendar - Fleet Management",
      };
    });
  },
  data() {
    return {
      miniDate1: "2024/01/01",
      miniDate2: "2024/02/01",
      miniDate3: "2024/03/01",
      activeTable: false,
      value: ref(81),
      selectedDate: today(),
      text: "",
      eventTitle: "",
      eventprojectName: "",
      eventprojectId: "",
      eventbuildingName: "",
      eventnumberOfMeters: "",
      eventBuildingSize: "",
      eventsummary: "",
      eventprojectPhase: "",
      eventprojectStatus: "",
      eventstatusColor: "",
      eventlocation: "",
      eventengineerName: "",
      eventDateTime: "",
      events: [
        {
          id: 1,
          title: "Event-01",
          details: "Lorem Ipsum",
          date: "2024-03-10",
          bgcolor: "orange",
        },
        {
          id: 2,
          title: "Event-02",
          details: "Lorem Ipsum",
          date: "2024-03-03",
          bgcolor: "green",
          icon: "fas fa-birthday-cake",
        },
        {
          id: 3,
          title: "Event-04",
          details: "Lorem Ipsum",
          date: "2024-02-29",
          time: "10:00",
          duration: 120,
          bgcolor: "red",
          icon: "fas fa-handshake",
        },
        {
          id: 4,
          title: "Event-05",
          details: "Lorem Ipsum",
          date: "2024-02-06",
          time: "11:30",
          duration: 90,
          bgcolor: "teal",
          icon: "fas fa-hamburger",
        },
        {
          id: 5,
          title: "Event-06",
          details: "Lorem Ipsum",
          date: "2024-03-12",
          time: "17:00",
          duration: 90,
          bgcolor: "grey",
          icon: "fas fa-car",
        },
        {
          id: 6,
          title: "Event-06",
          details: "Lorem Ipsum",
          date: "2024-02-09",
          time: "08:00",
          duration: 540,
          bgcolor: "blue",
          icon: "fas fa-chalkboard-teacher",
        },
        {
          id: 7,
          title: "Event-07",
          details: "Lorem Ipsum",
          date: "2024-02-25",
          time: "19:00",
          duration: 180,
          bgcolor: "teal",
          icon: "fas fa-utensils",
        },
        {
          id: 8,
          title: "Event-08",
          details: "Lorem Ipsum",
          date: "2024-02-06",
          bgcolor: "purple",
          icon: "rowing",
          days: 2,
        },
        {
          id: 9,
          title: "Event-09",
          details: "Lorem Ipsum",
          date: "2024-02-12",
          bgcolor: "purple",
          icon: "fas fa-fish",
          days: 2,
        },
        {
          id: 10,
          title: "Event-10",
          details: "Lorem Ipsum",
          date: "2024-01-12",
          bgcolor: "purple",
          icon: "fas fa-plane",
          days: 5,
        },
      ],
      selectedCalendarDetails: "",
      CalendarMonths: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  mounted() {
    const currentDate = new Date();
    let currentMonth = currentDate.toLocaleString("default", {
      month: "long",
    });
    let currentYear = currentDate.getFullYear();
    this.selectedCalendarDetails = currentYear + " - " + currentMonth;
  },
  created() {
    let parent = this;
    setTimeout(function () {
      // this.basketAddSuccess = false;
      parent.activeTable = true;
      console.log("The component is created yet.");
    }, 3000);
  },
  computed: {
    eventsMap() {
      console.log(this.events);
      const map = {};
      if (this.events.length > 0) {
        this.events.forEach((event) => {
          (map[event.date] = map[event.date] || []).push(event);
          if (event.days !== undefined) {
            let timestamp = parseTimestamp(event.date);
            let days = event.days;
            // add a new event for each day
            // skip 1st one which would have been done above
            do {
              timestamp = addToDate(timestamp, { day: 1 });
              if (!map[timestamp.date]) {
                map[timestamp.date] = [];
              }
              map[timestamp.date].push(event);
              // already accounted for 1st day
            } while (--days > 1);
          }
        });
      }
      console.log(map);
      return map;
    },
  },
  methods: {
    badgeClasses(event, type) {
      return {
        [`text-white bg-${event.bgcolor}`]: true,
        "rounded-border": true,
      };
    },

    badgeStyles(day, event) {
      const s = {};
      // s.left = day.weekday === 0 ? 0 : (day.weekday * this.parsedCellWidth) + '%'
      // s.top = 0
      // s.bottom = 0
      // s.width = (event.days * this.parsedCellWidth) + '%'
      return s;
    },

    isBetweenDatesWeek(dateStart, dateEnd, weekStart, weekEnd) {
      return (
        (dateEnd < weekEnd && dateEnd >= weekStart) ||
        dateEnd === weekEnd ||
        (dateEnd > weekEnd && dateStart <= weekEnd)
      );
    },

    onToday() {
      this.$refs.calendar.moveToToday();
    },
    onPrev() {
      this.$refs.calendar.prev();
    },
    onNext() {
      this.$refs.calendar.next();
    },
    onMoved(data) {
      console.log("onMoved", data);
      this.selectedCalendarDetails =
        data.year + " - " + this.CalendarMonths[data.month - 1];
    },
    onChange({ start }) {
      this.start = start;
      // this.updateTitle();
    },
    onClickDate(data) {
      console.log("onClickDate", data);
    },
    onClickDay(data) {
      console.log("onClickDay", data);
    },
    onClickWorkweek(data) {
      console.log("onClickWorkweek", data);
    },
    onClickHeadDay(data) {
      console.log("onClickHeadDay", data);
    },
    onClickHeadWorkweek(data) {
      console.log("onClickHeadWorkweek", data);
    },
  },
});
</script>
