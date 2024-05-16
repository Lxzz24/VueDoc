import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
// import { zhSidebarConfig } from "./sidebar/index.js";

export default hopeTheme({
    hostname: "https://www.gxmnzl.cn",

    author: {
        name: "Lxzz24",
        // url: "https://gxmnzl.cn",
    },

    iconAssets: "iconfont",

    logo: "/logo.svg",

    repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "src",

    // navbar
    navbar,

    // sidebar
    sidebar: sidebar,
    // sidebar: zhSidebarConfig,

    copyright: false,

    footer: '<a href="https://beian.miit.gov.cn"></a> </span> | 使用 MIT 协议, 版权所有 © 2022-present Lxzz24',

    displayFooter: true,

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    // page meta
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    toc: true,

    plugins: {
        // blog: true,


        // You should generate and use your own comment service
        // comment: {
        //     provider: "Giscus",
        //     repo: "vuepress-theme-hope/giscus-discussions",
        //     repoId: "R_kgDOG_Pt2A",
        //     category: "Announcements",
        //     categoryId: "DIC_kwDOG_Pt2M4COD69",
        // },
        components: {
            // 你想使用的组件
            // components: [
                // "ArtPlayer",
                // "Badge",
                // "BiliBili",
                // "CodePen",
                // "PDF",
                // "Replit",
                // "Share",
                // "SiteInfo",
                // "StackBlitz",
                // "VPBanner",
                // "VPCard",
                // "VidStack",
                // "XiGua",
            // ],
        },
        // 代码复制
        copyCode: {},

        // All features are enabled for demo, only preserve features you need here
        mdEnhance: {
            // 自定义内容对齐方式 :::right
            align: true,
            // 启用 GFM 警告
            alert: true,
            attrs: true,
            codetabs: true,// 代码块分组
            component: true,
            demo: true,
            // 启用 figure
            figure: true,
            // 提示容器
            hint: true,
            // 启用图片懒加载
            imgLazyload: true,
            // 启用图片标记
            imgMark: true,
            // 启用图片大小
            imgSize: true,
            include: true,
            mark: true, // 高亮 == ==
            tasklist: true, // 任务列表
            // footnote: true, // 脚注
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            // 上下角标
            sub: true,
            sup: true,
            tabs: true,// 选项卡
            vPre: true,

            // kotlinPlayground: true, // 启用 kotlin 交互演示


            // install chart.js before enabling it
            // yarn add -D chart.js
            // chart: true, //支持图表

            // insert component easily

            // install echarts before enabling it
            // yarn add -D echarts
            // echarts: true, //支持图表

            // install flowchart.ts before enabling it
            // yarn add -D flowchart.ts
            // 流程图
            flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            // install katex before enabling it
            // yarn add -D katex
            katex: true,

            // install mathjax-full before enabling it
            // mathjax: true,

            // install mermaid before enabling it
            // yarn add -D mermaid
            mermaid: true,

            // playground: {
            //   presets: ["ts", "vue"],
            // },

            // install reveal.js before enabling it
            // yarn add -D reveal.js 
            // 幻灯片
            // revealJs: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },

            // install @vue/repl before enabling it
            // vuePlayground: true,
        },

        // uncomment these if you want a pwa
        pwa: {
            favicon: "/favicon.ico",
            //   cacheHTML: true,
            //   cachePic: true,
            //   appendBase: true,
            //   apple: {
            //     icon: "/assets/icon/apple-icon-152.png",
            //     statusBarColor: "black",
            //   },
            //   msTile: {
            //     image: "/assets/icon/ms-icon-144.png",
            //     color: "#ffffff",
            //   },
            //   manifest: {
            //     icons: [
            //       {
            //         src: "/assets/icon/chrome-mask-512.png",
            //         sizes: "512x512",
            //         purpose: "maskable",
            //         type: "image/png",
            //       },
            //       {
            //         src: "/assets/icon/chrome-mask-192.png",
            //         sizes: "192x192",
            //         purpose: "maskable",
            //         type: "image/png",
            //       },
            //       {
            //         src: "/assets/icon/chrome-512.png",
            //         sizes: "512x512",
            //         type: "image/png",
            //       },
            //       {
            //         src: "/assets/icon/chrome-192.png",
            //         sizes: "192x192",
            //         type: "image/png",
            //       },
            //     ],
            //     shortcuts: [
            //       {
            //         name: "Demo",
            //         short_name: "Demo",
            //         url: "/demo/",
            //         icons: [
            //           {
            //             src: "/assets/icon/guide-maskable.png",
            //             sizes: "192x192",
            //             purpose: "maskable",
            //             type: "image/png",
            //           },
            //         ],
            //       },
            //     ],
            //   },
        },
    },
});
