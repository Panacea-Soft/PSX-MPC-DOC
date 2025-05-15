<template>
  <div class="flex items-center text-center">
    <div
      class="text-base font-bold text-red-400 cursor-pointer me-4"
      @click="onClick()"
      v-if="isFold"
    >
      ▲
    </div>
    <div
      class="text-base font-bold text-gray-500 cursor-pointer me-4"
      @click="onClick()"
      v-else
    >
      ▼
    </div>
    <!-- ↥↧⌃⌄ ⨁⊖⊞🔼🔽⊕⇈⇊▾∆∇[+] ⟰⟱ ⇧↑˄˅˯˰↑↓⇧⇡ -->
    <h1 class="text-3xl font-bold text-left cursor-pointer" @click="onClick()">
      {{ title }}
      <span v-if="isMandatory" class="text-2xl text-rose-400"
        >( Mandatory )</span
      >
    </h1>
  </div>
  <div class="text-left w-[85%] mt-6 mx-8" v-if="!isFold" v-html="desc" />
</template>

<script>
import { ref } from "vue";
export default {
  name: "MainTitle",
  props: {
    title: {},
    desc: {},
    isMandatory: {},
    onToggleClicked: {},
    fold: { default: false },
  },

  setup(props) {
    var isFold = ref(props.fold);
    function onClick() {
      isFold.value = !isFold.value;
      if (props.onToggleClicked != null) {
        props.onToggleClicked(isFold.value);
      }
    }
    return {
      onClick,
      isFold,
    };
  },
};
</script>

<style></style>
