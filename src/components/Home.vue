<template>
  <div class="w-full">
    <div
      :class="{
        'fixed z-10 bg-white bg-opacity-50': drawerOpen,
        hidden: !drawerOpen,
      }"
      @click.prevent="toggleDrawer"
    ></div>

    <div class="flex w-full h-full">
      <a
        @click.prevent="toggleDrawer"
        aria-controls="sidebar"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-red-500 rounded-lg hover:bg-white md:hidden lg:hidden"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </a>
    </div>

    <ResizableSidebar :psxdocs="docs" :drawerOpen="drawerOpen" class="h-full">
      <template v-slot:resizable>
        <div class="h-screen overflow-y-auto">
          <div class="mt-3 text-sm text-right text-gray-400 me-4">V1.3.0</div>
          <div class="px-3 mt-3">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <!-- @click.prevent="clearFilter" -->
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full h-10 p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                autocomplete="off"
                ref="searchKeyword"
                @input="search"
              />
            </div>
          </div>
          <div class="h-full max-h-screen px-3 pb-4 mt-5 bg-white">
            <ul class="space-y-1 text-xs font-medium">
              <TreeDropDown :docs="docs" :path="docs.path" />
              <TreeDropDown :docs="searchResult.children" />
            </ul>
            <div class="w-full h-28"></div>
          </div>
        </div>
      </template>
      <!-- {{ this.$route.path }} -->
      <!-- {{ data.appLink }} -->
      <div class="z-50 h-screen px-3 overflow-hidden">
        <iframe
          :src="data.link"
          class="w-full h-screen overflow-y-auto"
          v-if="data.link"
        ></iframe>
        <!-- // -->
        <Parent :data="docs" v-else-if="data.appLink == '/'" />
        <Parent
          :data="findChildrenByPath(docs, getLastSegment(data.appLink))"
          v-else
        />

        <!-- <RouterView v-else /> -->
        <!-- <StartHere v-else-if="this.$route.path == '/getting-started/started-here'"/> -->
      </div>
    </ResizableSidebar>
  </div>
</template>

<script>
import Parent from "./Parent.vue";
import ResizableSidebar from "./Sidebar1.vue"; // Assuming you have a ResizableSidebar.vue component
import TreeDropDown from "./TreeDropDown.vue"; // Import the TreeDropDown component
export default {
  name: "Home",
  props: ["docs", "data", "parentDoc"], // Define psxdocs as a prop

  data() {
    return {
      docs: this.docs,
      drops: {},
      active: "bg-gray-100",
      drawerOpen: false,
      searchResult: {
        children: [],
      },
    };
  },
  components: {
    ResizableSidebar,
    Parent,
    TreeDropDown,
  },

  mounted() {
    const storedValue = localStorage.getItem("inputValue");
    if (storedValue) {
      this.inputValue = storedValue;
    }
    if (storedValue != null && storedValue != "") {
      this.$refs.searchKeyword.value = storedValue;
      this.search();
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen; // Toggle the drawerOpen state
      //alert("This is now " + this.drawerOpen);
    },

    search(event) {
      let searchData = this.$refs.searchKeyword.value.toLowerCase(); //event.target.value.toLowerCase();
      console.log(searchData);
      this.searchResult.children = [];
      localStorage.setItem("inputValue", this.$refs.searchKeyword.value);
      // Filter data based on search input
      if (searchData !== "") {
        this.filterData(this.docs.children, searchData);
        this.docs = this.searchResult;
      } else {
        this.docs = this.docs;
      }
    },
    clearFilter() {
      alert("dfd");
      this.docs = this.docs;
      // console.log(this.docs);
    },
    getLastSegment(path) {
      const segments = path.split("/");
      const lastSegment = segments[segments.length - 1];
      return lastSegment || ""; // Return an empty string if "/" is not found
    },
    findChildrenByPath(data, path) {
      let found = false;

      function search(node) {
        if (found) {
          return null;
        }

        if (node.path === path) {
          found = true;
          console.log(node);
          return node;
        }

        if (node.children) {
          for (const child of node.children) {
            const result = search(child);
            if (result != null) {
              console.log(result);
              return result;
            }
          }
        }

        return null;
      }

      return search(data);
    },
    getAllLabels(docs) {
      //console.log(docs);
      let labels = [];
      docs.forEach((doc) => {
        labels.push({
          title: doc.meta.title,
          link: doc.meta.link,
        });
        if (doc.children) {
          labels = labels.concat(this.getAllLabels(doc.children));
        }
      });
      return labels;
    },

    filterData(data, searchData) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].meta.title.toLowerCase().includes(searchData)) {
          // console.log(data[i]);
          this.searchResult.children.push(data[i]);
        } else if (data[i].hasOwnProperty("children")) {
          // console.log(true);
          this.filterData(data[i].children, searchData);
        }
      }
      //console.log(this.searchResult);
    },
  },
};
</script>

<style></style>
