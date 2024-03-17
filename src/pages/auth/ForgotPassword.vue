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
                <h5 class="logodarkcolor text-center">
                  <b>Forgot Password</b>
                </h5>
              </div>
              <div class="col q-pb-md">
                <q-label class="text-left text-grey">Email</q-label>
                <q-input
                  filled
                  clearable
                  v-model="email"
                  type="email"
                  :rules="emailRules"
                />
              </div>

              <div class="col q-pb-md text-center">
                <q-btn
                  type="submit"
                  class="full-width q-pa-sm q-mt-lg sitegreenbtn text-white text-capitalize"
                  label="Submit"
                />
              </div>

              <div class="col q-pb-m">
                <q-badge color="red" v-if="errormsg">{{ errormsg }}</q-badge>
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
import { QImg, QCard, QCardSection, QForm, QInput, QBtn, QBadge } from "quasar";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    QImg,
    QCard,
    QCardSection,
    QForm,
    QInput,
    QBtn,
    QBadge,
  },
  data() {
    return {
      email: "",
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
    onSubmit() {},
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
