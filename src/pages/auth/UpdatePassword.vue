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
                <h5 class="logodarkcolor text-center"><b>Update Password</b></h5>
              </div>
              <div class="col q-pb-md">
                <q-label class="text-left text-grey">New Password</q-label>
                <q-input
                  filled
                  clearable
                  v-model="newPassword"
                  type="password"
                  :rules="passwordRules"
                />
              </div>

              <div class="col q-pb-md">
                <q-label class="text-left text-grey">Confirm Password</q-label>
                <q-input
                  filled
                  clearable
                  v-model="confirmPassword"
                  type="password"
                  :rules="confirmPasswordRules"
                />
              </div>

              <div class="col q-pb-md text-center">
                <q-btn
                  type="submit"
                  class="full-width q-pa-sm q-mt-lg sitegreenbtn text-white text-capitalize"
                  label="Update Password"
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
import { QImg, QCard, QCardSection, QForm, QInput, QBtn, QBadge } from 'quasar'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    QImg,
    QCard,
    QCardSection,
    QForm,
    QInput,
    QBtn,
    QBadge
  },
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      errormsg: '',
      passwordRules: [
        (val) => {
          if (!val) {
            return '* Required, please enter a new password'
          } else if (val.length < 8) {
            return '* Password must be at least 8 characters long'
          } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(val)) {
            return '* Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number'
          }
          return true
        }
      ],
      confirmPasswordRules: [
        (val) => {
          if (!val) {
            return '* Required, please confirm your password'
          } else if (val !== this.newPassword) {
            return '* Passwords do not match'
          }
          return true
        }
      ]
    }
  },
  methods: {
    onSubmit() {
    
    }
  }
}
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
