<template>
  <div class="mx-auto overflow-y-auto text-left lg:w-3/4 sm:w-full">
    <div class="w-full h-14"></div>
    <h1 class="text-4xl font-bold text-left">► START HERE</h1>

    <section class="mt-10 mb-10">
      <!-- Intro -->
      <div ref="Welcome">
        <h1 class="text-2xl font-bold text-left">Welcome to Panacea-Soft!</h1>
        <p class="text-left w-[85%] mt-6">
          This guide is designed to help you set up our project easily,
          minimizing any potential issues during the setup process. We
          continuously strive to enhance the setup experience, ensuring it's as
          seamless as possible. If you encounter any feedback or encounter bugs,
          please assist us by
          <a
            target="https://www.support.panacea-soft.com/help-center/tickets/new"
            href="https://www.support.panacea-soft.com/help-center/tickets/new"
            class="text-blue-500 underline decoration-blue-600"
            >creating tickets</a
          >.
          <br />
          <br />
          To commence the setup process, diligently follow the steps outlined in
          this guide. It's imperative to adhere to each step attentively, as
          overlooking any may lead to errors within your app. However, should
          you encounter any issues, rest assured that our team is available to
          assist you. Please feel free to
          <a
            target="https://www.support.panacea-soft.com/help-center/tickets/new"
            href="https://www.support.panacea-soft.com/help-center/tickets/new"
            class="text-blue-500 underline decoration-blue-600"
            >create a support ticket</a
          >, and we'll promptly address your concerns. For more information on
          our support guidelines, please refer to
          <a
            target="https://www.panacea-soft.com/2024/05/30/panacea-softs-support-policy/"
            href="https://www.panacea-soft.com/2024/05/30/panacea-softs-support-policy/"
            class="text-blue-500 underline decoration-blue-600"
          >our support policy document.</a>

          <br />
          <br />

          Please note that our support hours are from
          <b>9AM to 6PM, Monday to Friday</b>, in the
          <a
            target="https://www.timeanddate.com/worldclock/myanmar/yangon"
            href="https://www.timeanddate.com/worldclock/myanmar/yangon"
            class="text-blue-500 underline decoration-blue-600"
            >Yangon Time Zone</a
          >. We appreciate your patience in advance, as response times may vary
          depending on the volume of tickets we're handling.

          <br /><br />
          For easy navigation, you can access articles from the left side of our
          screen or simply click the links provided below, which will direct you
          to the relevant page.

          <br /><br />Thanks for using our products. Hope you get success with
          your best ideas. Peace!
        </p>
      </div>

      <!-- Preparing Environment -->
      <div ref="Preparing Environment" class="mt-20">
        <accordion
          title="I. Preparing Environment"
          desc="Before you start editing your project, you need to prepare the web
          server and flutter environment first in order to able to edit the
          project. So, Please make sure environment setup are done. For the iOS
          project setup, you may need to have Mac OS."
          :isMandatory="true"
          :routeRoot="
            RouteUtils.formatRoute2(
              docs.childs[1].alias,
              docs.childs[1].childs[1].alias
            )
          "
          :docs="docs.childs[1].childs[1]"
          :level="2"
        ></accordion>
      </div>

      <hr class="mt-8" />
      <div ref="Up And Running" class="mt-4">
        <accordion
          title="II. Up And Running"
          desc="Once you've set up the environments, it's time to install the project
          and get it ready to run in the prepared environment."
          :isMandatory="true"
          :routeRoot="
            RouteUtils.formatRoute2(
              docs.childs[1].alias,
              docs.childs[1].childs[2].alias
            )
          "
          v-bind:docs="docs.childs[1].childs[2]"
          level="2"
          :fold="true"
        ></accordion>
      </div>

      <hr class="mt-8" />
      <div ref="Setup" class="mt-4">
        <accordion
          title="III. Mandatory Setup"
          desc="Once you've successfully launched the project, it's essential to
          complete the core mandatory setup and customize the project based on
          your requirements, including white-labeling. Important: Each section
          of this setup is crucial and cannot be skipped. <br /><br />There are
          three main sections:"
          :isMandatory="true"
          :fold="true"
        >
          <template #beforeList>
            <ol type="1">
              <li class="text-left">1. Basic Project Setup</li>
              <li class="text-left">2. Setup ( Mobile )</li>
              <li class="text-left">3. Setup ( Frontend )</li>
            </ol></template
          >

          <template #customList>
            <!-- Basic Project Setup -->
            <sub-title
              title="1) Basic Project Setup"
              desc="This section details key steps for initiating a basic project setup, encompassing tasks such as modifying project names and versions, configuring SMTP settings, customizing logos, and more. All listed actions are mandatory for project setup."
              :isMandatory="true"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[2].alias,
                  docs.childs[2].childs[0].alias
                )
              "
              v-bind:docs="docs.childs[2].childs[0]"
              level="2"
            ></link-list>

            <!-- Mobile Setup -->
            <sub-title
              title="2) Mobile Setup"
              desc="This section outlines essential steps for mobile app setup, including modifying admin panel URLs, package names, app colors, and more. All tasks listed are mandatory for mobile app setup."
              :isMandatory="true"
            />

            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[2].alias,
                  docs.childs[2].childs[1].alias
                )
              "
              v-bind:docs="docs.childs[2].childs[1]"
              level="2"
            ></link-list>

            <!-- Frontend Setup -->
            <sub-title
              title="3) Frontend Setup"
              desc="This section outlines essential steps for frontend setup, including modifying default metadata, app colors, logos, icons, footer copyright and more. All tasks listed are mandatory for frontend configuration."
              :isMandatory="true"
            />

            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[2].alias,
                  docs.childs[2].childs[2].alias
                )
              "
              v-bind:docs="docs.childs[2].childs[2]"
              level="2"
            ></link-list>
          </template>
        </accordion>
      </div>

      <hr class="mt-8" />
      <div ref="Release" class="mt-4">
        <accordion
          title="IV. Release"
          desc="Before releasing, you might want to customize certain features. For customization instructions, please refer to the following sections."
          :isMandatory="true"
          :fold="true"
        >
          <template #customList>
            <!-- Google Play Release -->
            <sub-title
              title="1) Release on Google Play Store"
              desc="Once you've configured everything and completed white-labeling, you're ready to submit to Google Play. Before releasing, please ensure thorough testing to confirm that your app functions correctly."
              :isMandatory="true"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[5].alias,
                  docs.childs[5].childs[0].alias
                )
              "
              v-bind:docs="docs.childs[5].childs[0]"
              level="1"
            ></link-list>

            <!-- App Store Release -->
            <sub-title
              title="2) Release on Apple App Store"
              desc="Once you've configured everything and completed white-labeling, you're ready to submit to App Store. Before releasing, please ensure thorough testing to confirm that your app functions correctly."
              :isMandatory="true"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[5].alias,
                  docs.childs[5].childs[1].alias
                )
              "
              v-bind:docs="docs.childs[5].childs[1]"
              level="1"
            ></link-list>
          </template>
        </accordion>
      </div>

      <hr class="mt-8" />

      <h1 class="mt-12 text-2xl font-bold text-center">
        ... Optional Custom Configurations ...
      </h1>

      <div ref="Configuration" class="mt-8">
        <accordion
          title="V. Configuration"
          desc="Software configuration involves adjusting system parameters, admin panel settings, mobile app features, frontend appearance, vendor integrations, and PSX builder options to suit specific needs and preferences. Users customize these settings to optimize functionality, appearance, and integration within their software environment."
          :isMandatory="false"
          :fold="true"
        >
          <template #customList>
            <!-- System Configuration -->
            <sub-title
              title="1) System Configuration"
              desc="System Configuration involves setting up various aspects of the system, including promotion, currency, loading limits, login settings, image sizes, map settings, ad post types, item advanced settings, and other configurations to meet specific needs."
              :isMandatory="false"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[3].alias,
                  docs.childs[3].childs[0].alias
                )
              "
              v-bind:docs="docs.childs[3].childs[0]"
              level="1"
            ></link-list>

            <!-- Admin Panel Configuration -->
            <sub-title
              title="2) Admin Panel Configuration"
              desc="Admin Panel Configuration involves setting up image sizes, mail, notifications, images, deep linking, slow-moving item limits, default maps, watermarks, language refresh, and other settings."
              :isMandatory="false"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[3].alias,
                  docs.childs[3].childs[1].alias
                )
              "
              v-bind:docs="docs.childs[3].childs[1]"
              level="1"
            ></link-list>

            <!-- Mobile Configuration -->
            <sub-title
              title="3) Mobile Configuration"
              desc="Mobile Configuration involves setting up various aspects of the mobile application, including version updates, distribution, Admob, color customization, default data, blog sliders, and other configurations to meet specific requirements."
              :isMandatory="false"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[3].alias,
                  docs.childs[3].childs[2].alias
                )
              "
              v-bind:docs="docs.childs[3].childs[2]"
              level="1"
            ></link-list>

            <!-- Frontend Configuration -->
            <sub-title
              title="4) Frontend Configuration"
              desc="Frontend Configuration involves setting up Play Store and App Store details, images, Firebase, language refresh, meta tags, colors, and other settings."
              :isMandatory="false"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[3].alias,
                  docs.childs[3].childs[3].alias
                )
              "
              v-bind:docs="docs.childs[3].childs[3]"
              level="1"
            ></link-list>

            <!-- Vendor Configuration -->
            <sub-title
              title="5) Vendor Configuration"
              desc="Vendor Panel Configuration includes vendor on/off switches, language refresh settings, subscription configurations and other settings."
              :isMandatory="false"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[3].alias,
                  docs.childs[3].childs[4].alias
                )
              "
              v-bind:docs="docs.childs[3].childs[4]"
              level="1"
            ></link-list>

            <!-- PSX Builder Configuration -->
            <sub-title
              title="6) PSX Builder Configuration"
              desc="PSX Builder Configuration includes the ability to reset projects and other settings."
              :isMandatory="false"
            />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[3].alias,
                  docs.childs[3].childs[5].alias
                )
              "
              v-bind:docs="docs.childs[3].childs[5]"
              level="1"
            ></link-list>
          </template>
        </accordion>
      </div>

      <hr class="mt-8" />
      <div ref="Features" class="mt-4">
        <accordion
          title="VI. Features"
          desc="In this section, we detail the included features and provide links to related configurations. This allows users to customize features according to their requirements, ensuring they meet specific needs."
          :isMandatory="false"
          :routeRoot="RouteUtils.formatRoute(docs.childs[6].alias)"
          v-bind:docs="docs.childs[6]"
          level="1"
          :fold="true"
        ></accordion>
      </div>

      <hr class="mt-8" />
      <div ref="Technical Modification" class="mt-4">
        <accordion
          title="VII. Technical Modification"
          desc="In this section, we provide instructions on how to perform technical updates to the codebase."
          :isMandatory="false"
          :fold="true"
        >
          <template #customList>
            <!-- Web Project -->
            <sub-title title="1) Web Project" desc="" :isMandatory="false" />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[4].alias,
                  docs.childs[4].childs[1].alias
                )
              "
              v-bind:docs="docs.childs[4].childs[1]"
              level="1"
            ></link-list>

            <!-- Mobile Project -->
            <sub-title title="2) Mobile Project" desc="" :isMandatory="false" />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[4].alias,
                  docs.childs[4].childs[0].alias
                )
              "
              v-bind:docs="docs.childs[4].childs[0]"
              level="1"
            ></link-list>
          </template>
        </accordion>
      </div>

      <hr class="mt-8" />
      <div ref="FAQ" class="mt-4">
        <accordion title="VIII. FAQ" desc="" :isMandatory="false" :fold="true">
          <template #customList>
            <!-- Web Project -->
            <sub-title title="1) Web Project" desc="" :isMandatory="false" />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[7].alias,
                  docs.childs[7].childs[1].alias
                )
              "
              v-bind:docs="docs.childs[7].childs[1]"
              level="1"
            ></link-list>

            <!-- Mobile Project -->
            <sub-title title="2) Mobile Project" desc="" :isMandatory="false" />
            <link-list
              class="mt-4 ms-8"
              v-bind:root="
                RouteUtils.formatRoute2(
                  docs.childs[7].alias,
                  docs.childs[7].childs[0].alias
                )
              "
              v-bind:docs="docs.childs[7].childs[0]"
              level="1"
            ></link-list>
          </template>
        </accordion>
      </div>

      <div
        class="p-2 mt-32 mb-64 text-left bg-green-100 border-l-4 border-green-500"
        role="alert"
      >
        <p class="px-3">
          <i class="text-lg fas fa-search me-2"></i>
          <span>Have more questions?</span>
          &nbsp;
          <a
            class="text-blue-500 underline decoration-blue-600 hover:no-underline"
            href="https://www.support.panacea-soft.com/help-center/tickets/new"
            target="https://www.support.panacea-soft.com/help-center/tickets/new"
            >Submit a Request</a
          >
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import routes from "@/router/routes";
import docs from "../assets/psxmpc.json";
import LinkList from "@/components/LinkList.vue";
import MainTitle from "@/components/start-here/MainTitle.vue";
import SubTitle from "@/components/start-here/SubTitle.vue";
import Accordion from "@/components/start-here/Accordion.vue";
import { RouteUtils } from "@/utils/RouteUtils";

export default {
  name: "StartHere",
  components: {
    LinkList,
    MainTitle,
    SubTitle,
    Accordion,
  },
  data() {
    return {
      titles: [],
      docs: docs,
    };
  },
  created() {
    this.titles = routes.filter((route) => route.children);

    // console.log(this.$route.params);
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: "smooth" });
    },
    openInNewTab(url) {
      window.open(url, "_blank", "noreferrer");
    },
  },
  setup() {
    return {
      RouteUtils,
    };
  },
};
</script>

<style></style>
