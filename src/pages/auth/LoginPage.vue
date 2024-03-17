<template>
  <div class="col row items-start">
    <q-card class="col-12">
      <q-card-section horizontal>
        <q-img class="col-7 window-height" src="~src/assets/loginbg3.jpg">
          <div class="absolute-full imgoverlay">
            <div
              class="absolute-top-right text-subtitle1 text-center bg-white"
              style="
                width: 38%;
                padding: 2%;
                float: right;
                top: 7%;
                opacity: 100%;
              "
            >
              <q-img
                alt="Builder logo"
                src="~src/assets/CAB-MANAGER.jpg"
                class="imglogo"
                style="width: 50%"
              />
            </div>
          </div>
        </q-img>

        <q-card-section class="col-5">
          <q-form @submit="onSubmit" greedy>
            <div class="col loginform">
              <div class="col">
                <h5 class="logodarkcolor text-center"><b>Sign In</b></h5>
              </div>
              <div class="col q-pb-md">
                <q-label class="text-left text-grey">Username</q-label>
                <q-input
                  filled
                  clearable
                  v-model="username"
                  type="email"
                  :rules="emailRules"
                />
              </div>
              <div class="col q-pb-md">
                <q-label class="text-left text-grey">Password</q-label>
                <q-input
                  filled
                  clearable
                  v-model="password"
                  type="password"
                  :rules="[
                    (val) => !!val || '* Required, please enter password',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon name="visibility" />
                  </template>
                </q-input>
                <!-- <q-input filled v-model="text" /> -->
              </div>

              <div class="col q-pb-md text-center">
                <a href="#" class="logodarkcolor text-center nounderline"
                  ><p class="text-weight-bold">Forgot Password?</p></a
                >
                <q-btn
                  type="submit"
                  class="full-width q-pa-sm q-mt-lg sitegreenbtn text-white text-capitalize"
                  label="Sign In"
                />
              </div>

              <div class="col q-pb-m">
                <q-badge color="red" v-if="errormsg"> {{ errormsg }}</q-badge>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card-section>

      <q-separator />
    </q-card>
  </div>
</template>

<script>
import {
  useQuasar,
  Loading,
  QSpinnerGears,
  useMeta,
  Notify,
  LocalStorage,
} from "quasar";
import { ref } from "vue";
import { api } from "boot/axios";
import { useRoute } from "vue-router";

export default {
  setup() {
    useMeta(() => {
      return {
        title: "Login - Fleet Management",
      };
    });
  },
  data() {
    return {
      username: "",
      password: "",
      errormsg: "",

      emailRules: [
        (val) => {
          if (!val) {
            return "* Required, please enter email";
          } else {
            const validRegex =
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
            if (!val.match(validRegex)) {
              return "* Please enter valid email";
            }
          }

          return true;
        },
      ],
    };
  },
  methods: {
    checklogin() {
      this.$router.push("/");
    },
    onSubmit() {
      this.login();
    },
    async login() {
      var parent = this;
      Loading.show({
        spinner: QSpinnerGears,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      let data = {
        email: parent.username,
        password: parent.password,
      };

      let config = {};
      await api
        .post("/sign-in", data, config)
        .then(function (response) {
          response = JSON.parse(JSON.stringify(response));
          Loading.hide();
          if (response.status == 200) {
            LocalStorage.set("userId", response.data.user_id);
            LocalStorage.set("userName", response.data.name);
            LocalStorage.set("token", "Bearer " + response.data.token);
            LocalStorage.set(
              "user_type",
              response.data.user_type.toLowerCase()
            );
            Notify.create({
              message: "Welcome to Fleet Management System",
              position: "top",
              timeout: Math.random() * 5000 + 3000,
              type: "positive",
            });

            window.location.href = "/";
          } else if (response.data.status == "401") {
            Notify.create({
              message: "Please enter valid username and password",
              position: "top",
              timeout: Math.random() * 5000 + 3000,
              type: "negative",
            });
          } else if (response.status == 201 || response.status == 400) {
            Notify.create({
              message: response.data.message,
              position: "top",
              timeout: Math.random() * 5000 + 3000,
              type: "positive",
              textColor: "white",
            });
          } else {
            Notify.create({
              type: "negative",
              message: "Something went wrong, please try again.",
              position: "top",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          Loading.hide();
        });
    },
  },
};
</script>

<style>
.imgoverlay {
  background-color: #3738388c !important;
}
.logodarkcolor {
  color: #023c40;
}
.loginform {
  padding: 15% 15.5% 21% 20%;
}
.nounderline {
  text-decoration: none;
}
.imglogo {
  width: 100%;
}
.sitegreenbtn {
  background: #0daf4d;
}
</style>
