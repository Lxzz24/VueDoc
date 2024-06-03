import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "Java教程",
        icon: "java",
        link: "/1-Java/",
    },
    {
        text: "算法",
        icon: "variable",
        link: "/3-algo/",
    },
    {
        text: "软考",
        icon: "study",
        link: "/2-软考/",
    },
    {
        text: "开发工具",
        icon: "tool",
        link: "/99-tools/",
    },
    {
        text: "文档",
        icon: "blog",
        link: "/0-article/",
    },
    {
        text: "打卡",
        icon: "check",
        link: "/打卡.md",
    },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
