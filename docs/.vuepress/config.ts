import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/VueDoc/",

    lang: "zh-CN",
    title: "BLOG",
    description: "lxzz24 的知识库",

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,

    head: [
        // ... 其他 head 配置

        // 预连接到字体服务
        ["link", { rel: "preconnect", href: "https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest", crossorigin: "anonymous" }],
        // 导入 LXGW Wenkai 字体样式表
        ["link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest/style.css"
        }],
    ],

    // ... 其他配置

});
