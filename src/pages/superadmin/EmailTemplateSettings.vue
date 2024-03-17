<template>
  <q-page class="pagelay">
    <div class="q-pa-md example-row-equal-width">
      <div class="row mb-block header_block">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-sm">
          <small>
            <q-breadcrumbs>
              <q-breadcrumbs-el to="/" label="Home" />
              <q-breadcrumbs-el label="Settings" />
            </q-breadcrumbs>
          </small>
          <div class="text-title">Email Template Settings</div>
          <div
            class="text-weight-light header-sub-title"
            style="color: #7c8db5"
          ></div>
        </div>
        <div
          class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-pa-sm filter_block q-my-auto"
        >
          <q-btn
            flat
            dense
            icon="download"
            class="q-mx-md filterbtn_right"
            @click="exportTable"
          >
            <span class="q-pl-xs">Export</span>
          </q-btn>
          <q-btn
            icon="add"
            color="primary"
            class="q-mx-sm q-px-md text-capitalize filterbtn_right"
            @click="openAddTemplateDialog = true"
          >
            <span class="q-pl-xs">Add Template</span>
          </q-btn>
        </div>
      </div>

      <q-separator />
      <div class="row full-width">
        <div
          class="col-xs-12 col-sm-12 col-md-12"
          :class="$q.screen.xs ? '' : 'q-px-sm'"
        >
          <q-markup-table class="no-shadow">
            <thead class="bg-grey-1">
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Template Name</th>
                <th class="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(tempData, tempIndex) in templateDatas"
                :key="tempIndex"
              >
                <td class="text-left">{{ tempIndex + 1 }}</td>
                <td class="text-left text-capitalize">
                  {{ tempData.templateName }}
                </td>
                <td class="text-right">
                  <q-btn
                    dense
                    round
                    flat
                    @click="editEmailTemplate(tempData)"
                    icon="edit"
                    color="primary"
                    ><q-tooltip class="bg-primary"
                      >Edit Email Template</q-tooltip
                    ></q-btn
                  >
                </td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </div>

    <q-dialog
      v-model="openAddTemplateDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="">
        <q-bar>
          <h5 class="headerTitle"><b>Add</b> Email Template</h5>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <q-form @submit="saveEmailTemplateRecords" greedy class="q-gutter-md">
            <div>
              <div class="row">
                <div class="col-6 q-pr-sm">
                  <q-input
                    outlined
                    dense
                    class="full-width"
                    v-model="templateName"
                    label="Template Name *"
                    :rules="[(val) => !!val || '* Required']"
                    lazy-rules
                  />
                </div>
                <div class="col-6 q-pl-sm q-mb-sm">
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="replyTo"
                    label="Reply To"
                  />
                </div>
                <div class="col-6 q-pr-sm">
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="emailCc"
                    label="CC"
                  />
                </div>
                <div class="col-6 q-pl-sm">
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="emailBcc"
                    label="BCC"
                  />
                </div>
                <div class="col-8">
                  <q-input
                    dense
                    outlined
                    class="full-width q-my-md"
                    v-model="subject"
                    label="Email Subject *"
                    :rules="[(val) => !!val || '* Required']"
                    lazy-rules
                  />
                  <q-editor
                    v-model="templateContent"
                    :dense="$q.screen.lt.md"
                    :toolbar="[
                      [
                        {
                          label: $q.lang.editor.align,
                          icon: $q.iconSet.editor.align,
                          fixedLabel: true,
                          list: 'only-icons',
                          options: ['left', 'center', 'right', 'justify'],
                        },
                        {
                          label: $q.lang.editor.align,
                          icon: $q.iconSet.editor.align,
                          fixedLabel: true,
                          options: ['left', 'center', 'right', 'justify'],
                        },
                      ],
                      [
                        'bold',
                        'italic',
                        'strike',
                        'underline',
                        'subscript',
                        'superscript',
                      ],
                      ['token', 'hr', 'link', 'custom_btn'],
                      ['print', 'fullscreen'],
                      [
                        {
                          label: $q.lang.editor.formatting,
                          icon: $q.iconSet.editor.formatting,
                          list: 'no-icons',
                          options: [
                            'p',
                            'h1',
                            'h2',
                            'h3',
                            'h4',
                            'h5',
                            'h6',
                            'code',
                          ],
                        },
                        {
                          label: $q.lang.editor.fontSize,
                          icon: $q.iconSet.editor.fontSize,
                          fixedLabel: true,
                          fixedIcon: true,
                          list: 'no-icons',
                          options: [
                            'size-1',
                            'size-2',
                            'size-3',
                            'size-4',
                            'size-5',
                            'size-6',
                            'size-7',
                          ],
                        },
                        {
                          label: $q.lang.editor.defaultFont,
                          icon: $q.iconSet.editor.font,
                          fixedIcon: true,
                          list: 'no-icons',
                          options: [
                            'default_font',
                            'arial',
                            'arial_black',
                            'comic_sans',
                            'courier_new',
                            'impact',
                            'lucida_grande',
                            'times_new_roman',
                            'verdana',
                          ],
                        },
                        'removeFormat',
                      ],
                      ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                      ['undo', 'redo'],
                      ['viewsource'],
                    ]"
                    :fonts="{
                      arial: 'Arial',
                      arial_black: 'Arial Black',
                      comic_sans: 'Comic Sans MS',
                      courier_new: 'Courier New',
                      impact: 'Impact',
                      lucida_grande: 'Lucida Grande',
                      times_new_roman: 'Times New Roman',
                      verdana: 'Verdana',
                    }"
                  />
                  <!-- <q-input v-model="templateContent" filled type="textarea" /> -->
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <q-card class="q-py-md" flat>
                    <label class="text-bold text-subtitle1 q-mx-md"
                      >Copy Placeholders</label
                    >
                    <q-separator class="q-mt-sm q-mx-md" />
                    <q-card-section class="q-mt-none q-pt-sm">
                      <div class="row">
                        <div
                          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-my-md"
                        >
                          <label
                            v-for="(placeholder, placeIndex) in placeholders"
                            :key="placeIndex"
                          >
                            <q-badge
                              outline
                              color="primary"
                              :label="placeholder"
                              class="q-ma-sm"
                              clickable
                              @click="copyToClipboardPlaceholder(placeholder)"
                            >
                              <q-tooltip class="bg-primary"
                                >Copy Placeholder</q-tooltip
                              >
                            </q-badge>
                          </label>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <div
                class="row"
                style="border-top: 1px solid #acb9ca; padding-top: 15px"
              >
                <div class="col-8"></div>
                <div class="col-4">
                  <q-btn
                    class="float-right q-px-md"
                    color="primary"
                    dense
                    label="save"
                    type="submit"
                  />
                  <q-btn
                    class="float-right text-red q-mx-sm q-px-md q-py-xs"
                    dense
                    outline
                    v-close-popup
                    label="Back"
                  />
                </div>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="openEditTemplateDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="">
        <q-bar>
          <h5 class="headerTitle"><b>Edit</b> Email Template</h5>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <q-form
            @submit="updateEmailTemplateRecords"
            greedy
            class="q-gutter-md"
          >
            <div>
              <div class="row">
                <div class="col-6">
                  <q-input
                    outlined
                    class="full-width"
                    v-model="updatetemplateName"
                    label="Template Name *"
                    :rules="[(val) => !!val || '* Required']"
                    lazy-rules
                    readonly
                    dense
                    disable
                  />
                </div>
                <div class="col-6 q-pl-sm q-mb-sm">
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="updateReplyTo"
                    label="Reply To"
                  />
                </div>
                <div class="col-6 q-pr-sm">
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="updateEmailCc"
                    label="CC"
                  />
                </div>
                <div class="col-6 q-pl-sm">
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="updateEmailBcc"
                    label="BCC"
                  />
                </div>
                <div class="col-8 q-mt-md">
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="updateSubject"
                    label="Email Subject *"
                    :rules="[(val) => !!val || '* Required']"
                    lazy-rules
                  />

                  <q-editor
                    v-model="updatetemplateContent"
                    :dense="$q.screen.lt.md"
                    :toolbar="[
                      [
                        {
                          label: $q.lang.editor.align,
                          icon: $q.iconSet.editor.align,
                          fixedLabel: true,
                          list: 'only-icons',
                          options: ['left', 'center', 'right', 'justify'],
                        },
                        {
                          label: $q.lang.editor.align,
                          icon: $q.iconSet.editor.align,
                          fixedLabel: true,
                          options: ['left', 'center', 'right', 'justify'],
                        },
                      ],
                      [
                        'bold',
                        'italic',
                        'strike',
                        'underline',
                        'subscript',
                        'superscript',
                      ],
                      ['token', 'hr', 'link', 'custom_btn'],
                      ['print', 'fullscreen'],
                      [
                        {
                          label: $q.lang.editor.formatting,
                          icon: $q.iconSet.editor.formatting,
                          list: 'no-icons',
                          options: [
                            'p',
                            'h1',
                            'h2',
                            'h3',
                            'h4',
                            'h5',
                            'h6',
                            'code',
                          ],
                        },
                        {
                          label: $q.lang.editor.fontSize,
                          icon: $q.iconSet.editor.fontSize,
                          fixedLabel: true,
                          fixedIcon: true,
                          list: 'no-icons',
                          options: [
                            'size-1',
                            'size-2',
                            'size-3',
                            'size-4',
                            'size-5',
                            'size-6',
                            'size-7',
                          ],
                        },
                        {
                          label: $q.lang.editor.defaultFont,
                          icon: $q.iconSet.editor.font,
                          fixedIcon: true,
                          list: 'no-icons',
                          options: [
                            'default_font',
                            'arial',
                            'arial_black',
                            'comic_sans',
                            'courier_new',
                            'impact',
                            'lucida_grande',
                            'times_new_roman',
                            'verdana',
                          ],
                        },
                        'removeFormat',
                      ],
                      ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                      ['undo', 'redo'],
                      ['viewsource'],
                    ]"
                    :fonts="{
                      arial: 'Arial',
                      arial_black: 'Arial Black',
                      comic_sans: 'Comic Sans MS',
                      courier_new: 'Courier New',
                      impact: 'Impact',
                      lucida_grande: 'Lucida Grande',
                      times_new_roman: 'Times New Roman',
                      verdana: 'Verdana',
                    }"
                  />
                  <!-- <q-input
                    v-model="updatetemplateContent"
                    filled
                    type="textarea"
                  /> -->
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <q-card class="q-py-md" flat>
                    <label class="text-bold text-subtitle1 q-mx-md"
                      >Copy Placeholders</label
                    >
                    <q-separator class="q-mt-sm q-mx-md" />
                    <q-card-section class="q-mt-none q-pt-sm">
                      <div class="row">
                        <div
                          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-my-md"
                        >
                          <label
                            v-for="(placeholder, placeIndex) in placeholders"
                            :key="placeIndex"
                          >
                            <q-badge
                              outline
                              color="primary"
                              :label="placeholder"
                              class="q-ma-sm"
                              clickable
                              @click="copyToClipboardPlaceholder(placeholder)"
                            >
                              <q-tooltip class="bg-primary"
                                >Copy Placeholder</q-tooltip
                              >
                            </q-badge>
                          </label>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <div
                class="row"
                style="border-top: 1px solid #acb9ca; padding-top: 15px"
              >
                <div class="col-8"></div>
                <div class="col-4">
                  <q-btn
                    class="float-right q-px-md"
                    color="primary"
                    dense
                    label="save"
                    type="submit"
                  />
                  <q-btn
                    class="float-right text-red q-mx-sm q-px-md q-py-xs"
                    dense
                    outline
                    v-close-popup
                    label="Back"
                  />
                </div>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import { LocalStorage, Loading, QSpinnerBars, Notify } from "quasar";

import { copyToClipboard } from "quasar";

export default defineComponent({
  name: "EmailSettings",
  setup() {},
  data() {
    return {
      templateContent: "",
      templateName: "",
      openAddTemplateDialog: ref(false),
      openEditTemplateDialog: ref(false),
      maximizedToggle: ref(true),
      templateDatas: [],
      updatetemplateName: "",
      updatetemplateContent: "",
      updatedtemplateId: "",
      qeditor: null,
      subject: "",
      updateSubject: "",
      // replyTo: "",
      replyTo: ref([]),
      emailBcc: ref([]),
      emailCc: ref([]),
      updateReplyTo: "",
      updateEmailBcc: "",
      updateEmailCc: "",
      placeholders: [
        "@portal-company-name@",
        "@portal-company-address@",
        "@portal-company-phone-no@",
        "@portal-company-email@",
        "@portal-website@",
      ],
    };
  },
  mounted() {
    this.templateContent =
      '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<meta http-equiv="Content-Type" content="text/html; charset=utf-8">&nbsp; &nbsp; &nbsp;<title></title>&nbsp; &nbsp; &nbsp;<table width="630" border="0" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="background:#939090;border-top:3px solid #ddd;border-bottom:3px solid #3e5294;padding:8px 0"><table width="630" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td>@LOGO@</td><td><strong></strong></td><td align="right" style="font-size:13px;font-weight:700;color:#f7f7f7"><b>@date@</b></td></tr></tbody></table>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr><td><table width="630" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td style="background:#fff;border:1px solid #e4e4e4;padding:15px;text-align:justify;font-size:12px;line-height:20px"><strong>Dear @NAME@,</strong><br><br>Add Content Here<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<table width="630" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><th style="color:#333;margin-bottom:10px;line-height:25px;text-align:left"><strong>Thank you.</strong><br><strong style="font-weight:bolder">@domain@<br></strong><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th></tr></tbody></table>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td></tr></tbody></table>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr><td>&nbsp;</td></tr></tbody></table>&nbsp; &nbsp;';
  },

  beforeUnmount() {},
  components: {
    // editor: Editor,
  },
  created() {
    this.getEmailTemplateRecords();
  },
  methods: {
    async saveEmailTemplateRecords() {
      var parent = this;
      Loading.show({
        spinner: QSpinnerBars,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      let data = {
        templateContent: parent.templateContent,
        templateName: parent.templateName,
        subject: parent.subject,
        replyTo: parent.replyTo.toString(),
        emailBcc: parent.emailBcc.toString(),
        emailCc: parent.emailCc.toString(),
      };

      let config = {
        headers: {
          authorization: LocalStorage.getItem("token"),
        },
      };
      await api
        .post("/saveEmailTemplate", data, config)
        .then(function (response) {
          console.log(response);
          if (response.status == "200") {
            parent.templateContent = "";
            parent.templateName = "";
            parent.openAddTemplateDialog = false;
            parent.replyTo = "";
            parent.emailBcc = "";
            parent.emailCc = "";
            Loading.hide();
            Notify.create({
              color: "green-5",
              textColor: "white",
              message: "Template added successfully",
              icon: "check",
              position: "top",
            });
            parent.getEmailTemplateRecords();
          }
          Loading.hide();
        })
        .catch(function (error) {
          console.log("error: " + error);
          Notify.create({
            color: "red-5",
            textColor: "white",
            type: "negative",
            message: "Something went to wrong, try again",
            position: "top",
          });
          Loading.hide();
        });
    },
    async getEmailTemplateRecords() {
      var parent = this;
      Loading.show({
        spinner: QSpinnerBars,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      let data = {};
      let config = {
        headers: {
          authorization: LocalStorage.getItem("token"),
        },
      };
      await api
        .post("/getEmailTemplateRecords", data, config)
        .then(function (response) {
          if (response.status == "200") {
            let records = [];
            response.data.templateDatas.map(async (item) => {
              records.push({
                templateName: item.templateName,
                templateDescription: item.templateDescription,
                template_id: item._id,
                subject: item.subject,
                cc: item.cc,
                bcc: item.bcc,
                replyTo: item.replyTo,
              });
            });
            parent.templateDatas = records;
          }
          Loading.hide();
        })
        .catch(function (error) {
          parent.$q.notify({
            color: "red-5",
            textColor: "white",
            type: "negative",
            message: "Something went to wrong, try again",
            position: "top",
          });
          Loading.hide();
        });
    },
    async editEmailTemplate(tempData) {
      console.log(tempData);
      this.updatetemplateName = tempData.templateName;
      this.updatetemplateContent = tempData.templateDescription
        ? tempData.templateDescription
        : "";
      this.updatedtemplateId = tempData.template_id;
      this.updateSubject = tempData.subject;
      this.updateEmailCc = tempData.cc;
      this.updateEmailBcc = tempData.bcc;
      this.updateReplyTo = tempData.replyTo;
      this.openEditTemplateDialog = true;
    },
    async updateEmailTemplateRecords() {
      var parent = this;
      Loading.show({
        spinner: QSpinnerBars,
        message: "Please wait...",
        backgroundColor: "grey",
      });
      let data = {
        templateContent: parent.updatetemplateContent,
        templateName: parent.updatetemplateName,
        subject: parent.updateSubject,
        replyTo: parent.updateReplyTo,
        emailBcc: parent.updateEmailBcc,
        emailCc: parent.updateEmailCc,
      };
      let config = {
        headers: {
          authorization: LocalStorage.getItem("token"),
        },
      };
      await api
        .put(
          "/updateEmailTemplateDetails/" + parent.updatedtemplateId,
          data,
          config
        )
        .then(function (response) {
          console.log(response);
          if (response.status == "200") {
            parent.updatetemplateContent = "";
            parent.updatetemplateName = "";
            parent.updateEmailBcc = "";
            parent.updateEmailCc = "";
            parent.updateReplyTo = "";
            parent.openEditTemplateDialog = false;
            Loading.hide();
            Notify.create({
              color: "green-5",
              textColor: "white",
              message: "Template updated successfully",
              icon: "check",
              position: "top",
            });
            parent.getEmailTemplateRecords();
          }
          Loading.hide();
        })
        .catch(function (error) {
          console.log("error: " + error);
          Notify.create({
            color: "red-5",
            textColor: "white",
            type: "negative",
            message: "Something went to wrong, try again",
            position: "top",
          });
          Loading.hide();
        });
    },
    // Copy placeholer
    copyToClipboardPlaceholder(placeholderVal) {
      if (copyToClipboard(placeholderVal)) {
        this.$q.notify({
          timeout: Math.random() * 5000 + 3000,
          type: "positive",
          message: placeholderVal + " has been copied to clipboard",
          position: "top",
        });
      } else {
        this.$q.notify({
          timeout: Math.random() * 5000 + 3000,
          type: "negative",
          message: "Failed to copy placeholder",
          position: "top",
        });
      }
    },
  },
});
</script>
<style>
.q-field--dense .q-field__label {
  font-size: 14px;
  top: 8px;
}
</style>
