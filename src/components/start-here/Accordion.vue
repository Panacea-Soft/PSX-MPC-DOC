<template>
  <div>
    <main-title
      :title="title"
      :desc="desc"
      :isMandatory="isMandatory"
      :onToggleClicked="onToggleClicked"
      :fold="fold"
    ></main-title>

    <div v-if="!isFolding" class="mx-8">
      <slot name="beforeList" />

      <slot name="customList" class="mt-4 ms-8" />

      <link-list
        v-if="docs != null"
        class="mt-4 ms-8"
        v-bind:root="routeRoot"
        v-bind:docs="docs"
        :level="level"
      ></link-list>

      <slot name="afterList"></slot>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/start-here/MainTitle.vue";
import SubTitle from "@/components/start-here/SubTitle.vue";
import LinkList from "@/components/LinkList.vue";
import { ref } from "vue";
export default {
  name: "Accordion",
  components: {
    LinkList,
    MainTitle,
    SubTitle,
  },
  props: {
    title: {},
    desc: {},
    isMandatory: {},
    routeRoot: {},
    docs: {},
    level: { default: 1 },
    fold: { default: false },
  },

  setup(props) {
    var isFolding = ref(props.fold);
    function onToggleClicked(isFold) {
      isFolding.value = isFold;
      console.log("Hello");
    }
    return {
      onToggleClicked,
      isFolding,
    };
  },
};
</script>

<style></style>
