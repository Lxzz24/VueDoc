import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "Java教程",
        icon: "java",
        link: "/1-Java/",
    },
    {
        text: "软考笔记",
        icon: "study",
        link: "/2-软考/",
    },
    {
        text: "文档",
        icon: "blog",
        link: "/0-article/",
    },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
