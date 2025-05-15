<template>
  <div class="flex w-full">
    <section
      class="w-full panel resizable scroll-auto md:w-fit"
      :style="{ width: resizeValue + '%' }"
      :class="{ 'hidden md:block': !drawerOpen }"
    >
      <slot name="resizable" />
    </section>
    <div
      class="panel-resizer"
      @mousedown="onMouseDown"
      @touchstart="onTouchStart"
    />
    <section class="panel">
      <slot />
    </section>
  </div>
</template>

<script>
import { debounce } from "lodash"; // Import lodash for debouncing

export default {
  name: "ResizableTest",
  props: {
    drawerOpen: Boolean,
  },
  data() {
    return {
      isActive: false,
      resizeValue: null,
    };
  },
  created() {
    document.addEventListener("mousemove", this.onMouseMove, {
      capture: true,
    });
    this.debouncedHandleMove = debounce(this.handleMove, 5);

    document.addEventListener("mouseup", this.onMouseUp, {
      capture: true,
    });
    document.addEventListener("touchend", this.onTouchEnd, {
      capture: true,
    });
  },
  destroyed() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchend", this.onTouchEnd);
  },
  methods: {
    // trigger the handle start function
    onMouseDown(e) {
      this.handleStart(e.pageX);
      e.preventDefault();
    },
    handleStart(pageX) {
      this.isActive = true; // Resizing process started
      this.lastPageX = pageX; // keeps track of last known horizontal position of the mouse or touch event
    },
    // Trigger the handle end function
    onMouseUp(e) {
      this.isActive = false;
      this.handleEnd();
    },
    // Trigger the handle end function
    onTouchEnd(e) {
      this.isActive = false;
      this.handleEnd();
    },
    handleEnd() {
      this.isActive = false; // Resizing process ended
    },
    debouncedHandleMove(pageX) {
      //   this.handleMove(pageX);
    },
    // Trigger the handle move function
    onMouseMove(e) {
      // pageX parameter = horizontal coordinate of the mouse pointer relative to the whole document
      //   this.debouncedHandleMove = debounce(this.handleMove, 700);
      //   this.debouncedHandleMove(e.pageX);

      //   const debouncedHandleMove = debounce(this.handleMove, 700);
      // Call the debounced handleMove function with the pageX value
      //   this.debouncedHandleMove(e.pageX);
      this.handleMove(e.pageX);
    },

    handleMove(pageX) {
      if (this.isActive) {
        let offset = 0;
        let target = this.$el; // When current element (Panel resizer) is resized, set target variable
        while (target) {
          offset += target.offsetLeft;
          target = target.offsetParent;
        }
        const currentPage = pageX; // horizontal coordinate of the whole document
        const targetOffset = this.$el.offsetWidth; //Width of the resizing panel where mouse or touch moves
        const resizeValue =
          Math.floor(((currentPage - offset) / targetOffset) * 10000) / 100;

        if (resizeValue < 200) {
          this.resizeValue = resizeValue;
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;
  flex-flow: row wrap;
  align-items: stretch;
}

.panel {
  flex: 1;
  height: 100%;
  flex-flow: column nowrap;
  align-items: flex-start;
}

.panel.resizable {
  flex: none;
  min-width: 8rem;
  max-width: 100%;
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
