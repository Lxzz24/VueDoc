import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/VueDoc/",

    lang: "zh-CN",
    title: "文档演示",
    description: "lxzz24 的知识库",

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,

});
