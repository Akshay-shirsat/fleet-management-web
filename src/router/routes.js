const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "vehicle-check",
        component: () => import("pages/superadmin/VehicleCheck.vue"),
      },
      {
        path: "vehicle-details",
        component: () => import("pages/superadmin/VehicleDetail.vue"),
      },
      {
        path: "driver-profile",
        component: () => import("pages/superadmin/DriverProfile.vue"),
      },

      {
        path: "council-list",
        component: () => import("pages/superadmin/CouncilList.vue"),
      },
      {
        path: "add-council",
        component: () => import("pages/superadmin/AddCouncil.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "edit-council/:councilId",
        component: () => import("pages/superadmin/EditCouncil.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "settings",
        component: () => import("pages/superadmin/SettingPage.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "smtp-settings",
        component: () => import("pages/superadmin/SmtpSetting.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "email-template-settings",
        component: () => import("pages/superadmin/EmailTemplateSettings.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/auth/LoginPage.vue"),
        name: "Login",
      },
      {
        path: "forget-password",
        component: () => import("pages/auth/ForgotPassword.vue"),
        name: "ForgetPassword",
      },
      {
        path: "update-password",
        component: () => import("pages/auth/UpdatePassword.vue"),
        name: "UpdatePassword",
      },
    ],
  },
  {
    path: "/company",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/company/CompanyDashboard.vue"),
      },
      {
        path: "/vehicle-check-list",
        component: () => import("pages/company/VehicleCheckList.vue"),
      },
      {
        path: "/vehicle-check-details",
        component: () => import("pages/company/VehicleCheckDetails.vue"),
      },
      {
        path: "/defects-reported-list",
        component: () => import("pages/company/DefectsReportedList.vue"),
      },
      {
        path: "/defects-reported-details",
        component: () => import("pages/company/DefectsReportedDetails.vue"),
      },
      {
        path: "/accident-list",
        component: () => import("pages/company/AccidentRList.vue"),
      },
      {
        path: "/accident-details",
        component: () => import("pages/company/AccidentRDetails.vue"),
      },
      {
        path: "/vehicle-registered-list",
        component: () => import("pages/company/VehicleRegisteredList.vue"),
      },
      {
        path: "/vehicle-registered-details",
        component: () => import("pages/company/VehicleRegisteredDetails.vue"),
      },
      {
        path: "/view-vehicle-history",
        component: () => import("pages/company/ViewVehicleHistory.vue"),
      },
      {
        path: "/request-updates",
        component: () => import("pages/company/RequestUpdates.vue"),
      },
      {
        path: "/driver-list",
        component: () => import("pages/company/DriverList.vue"),
      },
      {
        path: "/edit-driver/:driverId",
        component: () => import("pages/company/EditDriver.vue"),
      },
      {
        path: "/add-driver",
        component: () => import("pages/company/AddDriver.vue"),
      },
      {
        path: "/view-driver",
        component: () => import("pages/company/ViewDriver.vue"),
      },
      {
        path: "/reports",
        component: () => import("pages/company/ReportPageList.vue"),
      },
      {
        path: "/report-dashboard",
        component: () => import("pages/company/ReportDashboard.vue"),
      },
      {
        path: "/new-request",
        component: () => import("pages/company/NewRequest.vue"),
      },
      {
        path: "/business-calendar",
        component: () => import("pages/company/BusinessCalendar.vue"),
      },

      {
        path: "/DashboardPage2",
        component: () => import("pages/company/DashboardPage2.vue"),
      },
    ],
  },
  {
    path: "/council",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/CompanyDashboard",
        component: () => import("pages/company/CompanyDashboard.vue"),
      },
      {
        path: "/add-checks",
        component: () => import("pages/checksQuestions/AddChecks.vue"),
      },
      {
        path: "/edit-checks/:checkId",
        component: () => import("pages/checksQuestions/EditChecks.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/manageChecklistVehicleCheckNDefects",
        component: () => import("pages/checksQuestions/ManageChecksList.vue"),
      },
      {
        path: "/checks-list",
        component: () => import("pages/council/AllChecks.vue"),
      },
      {
        path: "/view-checks",
        component: () => import("pages/council/ChecksView.vue"),
      },
      {
        path: "/accident-report",
        component: () => import("pages/council/AccidentReportList.vue"),
      },
      {
        path: "/view-accident-report",
        component: () => import("pages/council/AccidentReportView.vue"),
      },
      {
        path: "/business-list",
        component: () => import("pages/council/BusinessList.vue"),
      },
      {
        path: "/add-business",
        component: () => import("pages/council/AddBusiness.vue"),
      },
      {
        path: "/view-business/:businessId",
        component: () => import("pages/council/BusinessView.vue"),
      },
      {
        path: "/vehicle-list",
        component: () => import("pages/council/VehicleList.vue"),
      },
      {
        path: "/vehicle-listtwo",
        component: () => import("pages/council/VehicleListtwo.vue"),
      },
      {
        path: "/add-vehicle",
        component: () => import("pages/council/AddVehicle.vue"),
      },
      {
        path: "/edit-vehicle/:vehicleId",
        component: () => import("pages/council/EditVehicle.vue"),
      },
      {
        path: "/vehicle-accident-details",
        component: () => import("pages/council/VehicleAccidentDetails.vue"),
      },
      {
        path: "/council-vehicle-details/:vehicleId",
        component: () => import("pages/council/VehicleDetailView.vue"),
      },
      {
        path: "/report-overview",
        component: () => import("pages/council/ReportOverview.vue"),
      },
      {
        path: "/report-list",
        component: () => import("pages/council/ReportList.vue"),
      },

      {
        path: "/defects-list",
        component: () => import("pages/council/DefectsList.vue"),
      },
      {
        path: "/view-defects",
        component: () => import("pages/council/DefectsView.vue"),
      },
      {
        path: "/user-profile",
        component: () => import("pages/council/UserProfile.vue"),
      },
    ],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
