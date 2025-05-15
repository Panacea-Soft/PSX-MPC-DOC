<template>
  <div class="container">
    <section
      class="resize-x panel resizable"
      :style="{ width: sidebarWidth + 'px' }"
    >
      <aside
        id="sidebar"
        :class="`${
          isOpen ? '' : '-translate-x-full'
        } fixed top-0 left-0 z-50 w-64 
      transition-transform sm:block mb-3 h-screen pt-5 bg-white border-r border-gray-200 sm:translate-x-0`"
        aria-label="Sidebar"
      >
        <a
          @click.prevent="closeDrawer"
          aria-controls="sidebar"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center sm:hidden"
        >
          <div class="fas fa-times"></div>
          <span class="sr-only">Close menu</span>
        </a>
        <div class="px-3 mt-5">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative" @click="clearFilter">
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
              @input="search"
            />
          </div>
        </div>
        <div class="h-full px-3 pb-4 mt-5 overflow-y-auto bg-white">
          <ul class="space-y-1 text-xs font-medium">
            <TreeDropDown :docs="docs" :path="docs.path" />
          </ul>
          <div class="w-full h-28"></div>
        </div>
      </aside>
      <div class="panel-resizer" @mousedown="onMouseDown"></div>
    </section>
    <section class="panel">
      <!-- Main content -->
    </section>
  </div>
</template>

<script>
import TreeDropDown from "./TreeDropDown.vue";

export default {
  name: "Sidebar",
  props: ["psxdocs", "isOpen"],
  components: {
    TreeDropDown,
  },
  created() {
    // console.log(this.psxdocs.params.link);
  },
  data() {
    return {
      docs: this.psxdocs,
      drops: {},
      searchResult: {
        children: [],
      },
      active: "bg-gray-100",
      startX: 0, // Initial mouse position on mousedown
      sidebarWidth: 200, // Initial width of the sidebar
      isResizing: false, // Flag to track resizing state
    };
  },
  methods: {
    search(event) {
      let searchData = event.target.value;
      // console.log(searchData);
      this.searchResult.children = [];
      if (searchData != "") {
        this.filterData(this.psxdocs.children, searchData);
        // check for duplicate value
        // this.searchResult = this.searchResult.filter(
        //   (obj, index, current) =>
        //     index ===
        //     current.findIndex(
        //       data => data.title === obj.title && data.parent === obj.parent
        //     )
        // );
        // console.log(this.searchResult);
        this.docs = this.searchResult;
        // console.log(this.docs.children);
        // this.searchResult.map(data => (this.docs = data));
      } else {
        this.docs = this.psxdocs;
      }
    },
    clearFilter() {
      alert("dfd2323");
      this.docs = this.psxdocs;
      // console.log(this.docs);
    },
    filterData(data, searchData) {
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].meta.title.toLowerCase().includes(searchData.toLowerCase())
        ) {
          // console.log(data[i]);
          this.searchResult.children.push(data[i]);
        } else if (data[i].hasOwnProperty("children")) {
          // console.log(true);
          this.filterData(data[i].children, searchData);
        }
      }
      // console.log(result);
    },
    closeDrawer() {
      this.$emit("closeDrawer");
    },
    onMouseDown(event) {
      this.startX = event.pageX; // Update start position
      this.isResizing = true; // Set resizing flag
      // Add event listeners for mousemove and mouseup on document
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseMove(event) {
      if (this.isResizing) {
        // Calculate new width based on mouse movement
        const newWidth = this.sidebarWidth + (event.pageX - this.startX);
        // Update width within certain limits (e.g., minimum width)
        this.sidebarWidth = Math.max(100, newWidth);
        // Update start position for the next movement
        this.startX = event.pageX;
      }
    },
    onMouseUp() {
      this.isResizing = false; // Reset resizing flag
      // Remove event listeners when resizing ends
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  align-items: stretch;
}

.panel {
  position: relative;
  flex: 1;
  flex-flow: column nowrap;
  align-items: flex-start;
}

.panel.resizable {
  flex: none;
  min-width: 8rem;
  max-width: 50%;
}

.panel-resizer {
  cursor: col-resize;
  position: relative;
  width: 4px;
  margin: 0 -2px;
  z-index: 1;
}

.panel-resizer::before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 100%;
  background-color: #eee;
  transition: background-color 250ms, box-shadow 250ms;
}

.panel-resizer:hover::before {
  background-color: blue;
  box-shadow: 0 1px 4px 1px blue;
}
</style>
