<template>
  <h5 class="mt-6 text-xl font-bold">
    {{ title }}
    <span v-if="isMandatory" class="text-rose-400">( Mandatory )</span>
  </h5>
  <div class="mt-4" v-html="desc" />
</template>

<script>
export default {
  name: "SubTitle",
  props: ["title", "desc", "isMandatory"],

  setup() {
    // expose to template and other options API hooks
    return {};
  },
};
</script>

<style></style>
