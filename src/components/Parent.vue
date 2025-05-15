<template>
  <div v-if="data != null && data.meta != null">
    <div
      v-if="
        (data.children &&
          this.$route.path != '/getting-started/started-here') ||
        (data.children && this.$route.path != '/started-here')
      "
      class="max-h-screen overflow-y-auto"
    >
      <!-- {{ data }} -->
      <!-- {{ data.meta.image }} -->
      <img
        :src="require(`../assets/${data.meta.image}.png`)"
        v-if="data.meta.image"
      />
      <!-- class="w-full h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" -->
      <div
        class="w-full h-32 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-200"
        v-else
      ></div>

      <div class="w-[60%] mx-auto">
        <h1
          :class="`${
            data.meta.image ? 'text-center' : 'text-left'
          } mt-10 text-3xl font-bold mb-7 `"
        >
          {{ data.meta.title }}
        </h1>

        <hr class="mx-auto" />

        <div class="grid w-full grid-cols-1 lg:grid-cols-2">
          <div v-for="(chidDoc, index) in data.children" :key="index">
            <router-link
              :to="chidDoc.meta.appLink"
              class="grid items-center grid-cols-5 gap-3 p-4"
            >
              <div
                v-if="chidDoc.meta.title == 'START HERE'"
                class="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg"
              >
                <i class="text-2xl far fa-file-alt"></i>
              </div>

              <div
                v-else
                class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg"
              >
                <i class="text-2xl far fa-file-alt"></i>
              </div>

              <small
                v-if="chidDoc.meta.title == 'START HERE'"
                class="col-span-4 font-bold text-left text-orange-600 text-normal"
                >{{ chidDoc.meta.title }}</small
              >
              <small
                v-else
                class="col-span-4 font-bold text-left text-normal"
                >{{ chidDoc.meta.title }}</small
              >
            </router-link>
          </div>
        </div>

        <hr class />
      </div>
    </div>
    <StartHere class="max-h-screen overflow-y-auto" v-else />
  </div>
</template>

<script>
import StartHere from "./StartHere.vue";

export default {
  name: "Parent Component",
  props: ["data"],
  components: {
    StartHere,
  },
};
</script>

<style></style>
