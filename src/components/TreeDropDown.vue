<template>
  <div>
    <li :class="`${[isFolder ? 'pl-2' : 'pl-3']} `" v-if="checkLink(docs)">
      <router-link :to="docs.meta.appLink" @click.prevent="toggle">
        <div
          :class="`${
            this.$route.path == docs.meta.appLink ? activeStyle : ''
          } ${normalStyle}`"
          :id="docs.path"
        >
          <!-- @click.stop="changePage(docs.link,{title: docs.title,parent: docs.parent})" -->
          <button
            class="flex items-center h-5 p-1 text-gray-900 transition duration-75 rounded-sm hover:bg-gray-200"
            v-if="isFolder"
          >
            <i class="text-xs fas fa-angle-down" v-if="open"></i>
            <i class="text-xs fas fa-angle-right" v-else></i>
          </button>

          <div class="pl-3" v-if="!isFolder"></div>
          <p class="text-left truncate">
            <i class="px-2 far fa-file-alt"></i>
            <span v-if="docs.path == 'started-here'">►►► </span
            >{{ docs.meta.title }}
          </p>
        </div>
      </router-link>

      <ul
        :class="`${isFolder ? 'py-1 space-y-1' : ''} font-medium text-xs`"
        v-show="open"
      >
        <TreeDropDown
          v-for="(doc, index) in docs.children"
          :key="index"
          :docs="doc"
          :path="`${path}${doc.path}`"
        />
      </ul>
    </li>

    <li
      :class="`${[isFolder ? 'pl-2' : 'pl-3']} `"
      v-else-if="checkDropDown(docs)"
      :id="docs.path"
    >
      <router-link :to="docs.meta.appLink" @click.prevent="toggle">
        <div
          :class="`${
            this.$route.path == docs.meta.appLink ? activeStyle : ''
          } ${normalStyle}`"
        >
          <!-- @click.stop="changePage(docs.link,{title: docs.title,parent: docs.parent})" -->
          <button
            class="flex items-center h-5 p-1 text-gray-900 transition duration-75 rounded-sm hover:bg-gray-200"
            v-if="isFolder"
          >
            <i class="text-xs fas fa-angle-down" v-if="open"></i>
            <i class="text-xs fas fa-angle-right" v-else></i>
          </button>

          <div class="pl-3" v-if="!isFolder"></div>
          <p class="text-left truncate">
            <i class="px-2 far fa-file-alt"></i>
            {{ docs.meta ? docs.meta.title : "" }}
          </p>
        </div>
      </router-link>
      <ul
        :class="`${isFolder ? 'py-1 space-y-1' : ''} font-medium text-xs`"
        v-show="open"
      >
        <TreeDropDown
          v-for="(doc, index) in docs.children"
          :key="index"
          :docs="doc"
          :path="`${path}${doc.path}`"
        />
      </ul>
    </li>

    <ul
      :class="`${isFolder ? 'py-1 space-y-1' : ''} font-medium text-xs`"
      v-else
    >
      <TreeDropDown
        v-for="(doc, index) in docs.children"
        :key="index"
        :docs="doc"
        :path="`${doc.path}`"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: "TreeDropDown",
  props: ["docs", "path"],
  data() {
    return {
      open: false,
      normalStyle: "flex items-center hover:bg-gray-100 cursor-pointer p-1",
      activeStyle: `bg-gray-200`,
      route: "",
      childPath: "",
    };
  },
  computed: {
    isFolder() {
      // console.log(typeof this.docs.parent);
      return this.docs.children;
    },
  },
  mounted() {
    // console.log(this.$route.path);
    this.checkActive();
  },
  methods: {
    toggle(e) {
      // console.log(this.$route.path);
      // console.log(e.currentTarget.id);
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    checkLink(doc) {
      // console.log("doc.path",doc.path)
      if (doc.meta) {
        if (doc.meta.link || doc.path == "started-here" || doc.path == "/") {
          return true;
        }
      } else {
        return false;
      }
    },
    checkDropDown(doc) {
      if (doc.meta) {
        if (!doc.meta.link) {
          return true;
        }
      } else {
        return false;
      }
    },
    checkActive() {
      // check link active
      // console.log('this path',this.path);

      if (this.path == "/") {
        this.open = !this.open;
      } else {
        let checkActives = this.$route.path.split("/").filter((n) => n);

        let activePath = "/";

        for (let i = 0; i < checkActives.length; i++) {
          activePath += checkActives[i];
          // console.log("activePath",activePath == this.path);
          if (activePath == this.path) {
            // console.log("activePath",activePath,this.path);

            this.open = !this.open;
          }
        }
      }

      // console.log('activePath',activePath)
    },
  },
};
</script>

<style></style>
