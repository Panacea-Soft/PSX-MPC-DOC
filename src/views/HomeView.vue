<template>
  <Home :docs="psxdoc" :data="this.$route.meta" :parentDoc="parentDoc" />
</template>

<script>
// @ is an alias to /src
import routes from "../router/routes/index";
import Home from "@/components/Home.vue";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";
import metaData from "../assets/psxmpc.json";

export default {
  name: "HomeView",
  // props: ['data'],
  mounted() {
    const data = reactive({
      title: metaData.title,
      description: metaData.title,
      // image:
      //   "https://t24312566.p.clickup-attachments.com/t24312566/9440aed7-9414-47f8-970a-1bfce9c8c0cd/MultipurposeCover%20Photo.png",
      // width: "1200",
      // height: "627"
    });

    this.changeFavIcon(require(`../assets/${metaData.icon}.png`));

    useHead({
      title: computed(() => data.title),
      meta: [
        {
          name: "og:title",
          content: computed(() => data.title),
        },
        // {
        //   property: "og:image",
        //   content: computed(() =>  data.image)
        // },
        // {
        //   property: "og:image:width",
        //   content: computed(() => data.width)
        // },
        // {
        //   property: "og:image:height",
        //   content: computed(() => data.height)
        // },
        // {
        //   property: "og:image:type",
        //   content: computed(() =>  'image/png')
        // }
      ],
    });
  },
  components: {
    Home,
  },
  created() {
    this.filterDoc(routes);
    // console.log(this.$router.options.routes);
  },
  data() {
    return {
      psxdoc: routes[1],
      parentDoc: {},
      router: useRoute(),
    };
  },
  methods: {
    filterDoc(data) {
      for (let i = 0; i < data.length; i++) {
        // let meta = data[i].meta;
        if (data[i].meta) {
          if (this.$route.meta.appLink == data[i].meta.appLink) {
            // console.log(data[i]);
            this.parentDoc = data[i];
            break;
          }
          if (data[i].hasOwnProperty("children")) {
            // console.log(data[i].meta.appLink);
            this.filterDoc(data[i].children);
          }
        } else {
          continue;
        }
      }
    },
    changeFavIcon(image) {
      let favicon = document.querySelector('link[rel="icon"]');
      if (!favicon) {
        favicon = document.createElement("link");
        favicon.setAttribute("rel", "icon");
        favicon.setAttribute("type", "image/png");
        document.head.appendChild(favicon);
      }
      favicon.setAttribute("href", image);
    },
  },
};
</script>
