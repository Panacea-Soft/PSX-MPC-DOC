<template>
  <!-- <div> -->
  <div class="mt-3 text-start" v-for="(childDoc, index) in docs">
    <div v-for="(subChild, index) in childDoc">
      <div v-if="subChild.childs == null && subChild.title != null">
        <li class="mt-1 text-left">
          <router-link
            v-bind:to="root + '/' + RouteUtils.formatRoute(subChild.alias)"
            class="text-blue-500 decoration-blue-600 hover:text-blue-800"
            >{{ subChild.title }}</router-link
          >
        </li>
      </div>
      <div v-else-if="subChild.title != null">
        <li class="mt-1 text-left">
          <router-link
            v-bind:to="root + '/' + RouteUtils.formatRoute(subChild.alias)"
            class="text-blue-500 decoration-blue-600 hover:text-blue-800"
            >{{ subChild.title }}</router-link
          >
        </li>
        <div v-if="level >= 2" v-for="(subsubChild, index) in subChild.childs">
          <li class="mt-1 text-left ms-10">
            <router-link
              v-bind:to="
                root +
                '/' +
                RouteUtils.formatRoute(subChild.alias) +
                '/' +
                RouteUtils.formatRoute(subsubChild.alias)
              "
              class="text-blue-500 decoration-blue-600 hover:text-blue-800"
              >{{ subsubChild.title }}</router-link
            >
          </li>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { RouteUtils } from "@/utils/RouteUtils";

export default {
  name: "LinkList",
  props: ["docs", "level", "root"],

  setup() {
    const count = "Url Url";

    // expose to template and other options API hooks
    return {
      count,
      RouteUtils,
    };
  },
};
</script>

<style></style>
