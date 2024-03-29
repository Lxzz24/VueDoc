import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        {
            text: "文章",
            icon: "article",
            prefix: "0-article/",
            link: "0-article/",
            // 可选的, 设置分组是否可以折叠，默认值是 false,
            // collapsible: true,
            children: [
                {
                    text: "💭 阅读",
                    prefix: "read/",
                    link: "read/",
                    // children: "structure",
                },
                {
                    text: "☁️ 资源",
                    prefix: "resource/",
                    link: "resource/",
                    // children: "structure",
                },
                {
                    text: "🔍 速查",
                    prefix: "search/",
                    link: "search/",
                    // children: "structure",
                },
                {
                    text: "🐧 服务器",
                    prefix: "server/",
                    link: "server/",
                    // children: "structure",
                },
                {
                    text: "📈 效率",
                    prefix: "strategy/",
                    link: "strategy/",
                    // children: "structure",
                },
            ],
        },
    ],
    "/1-Java/": [
        "",
        {
            text: "☘️ Java 基础",
            prefix: "1_ABC/",
            link: "1_ABC/",
            collapsible: true,
            children: [
                "1-简介/",
                "2-Java程序基础/",
                "3-流程控制/",
                "4-数组操作/",
            ],
        },
        {
            text: "☘️ 面向对象",
            prefix: "2_面向对象/",
            link: "2_面向对象/",
            collapsible: true,
            children: [
                {
                    text: "🌝 面向对象基础",
                    prefix: "面向对象基础/",
                    link: "面向对象基础/",
                    collapsible: true,
                    children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md", "13.md", "14.md", "15.md",
                    ],
                },
                {
                    text: "🌚 Java 核心类",
                    prefix: "Java核心类/",
                    link: "Java核心类/",
                    collapsible: true,
                    children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md",
                    ],
                },
            ],
        },
        {
            text: "☘️ 异常处理",
            prefix: "3_异常处理/",
            link: "3_异常处理/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md",
            ],
        },
        {
            text: "☘️ 反射",
            prefix: "4_反射/",
            link: "4_反射/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md",
            ],
        },
        {
            text: "☘️ 注解",
            prefix: "5_注解/",
            link: "5_注解/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md",
            ],
        },
        {
            text: "☘️ 泛型",
            prefix: "6_泛型/",
            link: "6_泛型/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "☘️ 集合",
            prefix: "7_集合/",
            link: "7_集合/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md", "13.md", "14.md", "15.md",
            ],
        },
        {
            text: "☘️ IO",
            prefix: "8_IO/",
            link: "8_IO/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md",
            ],
        },
        {
            text: "☘️ 日期与时间",
            prefix: "9_日期与时间/",
            link: "9_日期与时间/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "☘️ 单元测试",
            prefix: "10_单元测试/",
            link: "10_单元测试/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md",
            ],
        },
        {
            text: "☘️ 正则表达式",
            prefix: "11_正则表达式/",
            link: "11_正则表达式/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md",
            ],
        },
        {
            text: "☘️ 加密与安全",
            prefix: "12_加密与安全/",
            link: "12_加密与安全/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md",
            ],
        },
        {
            text: "☘️ 多线程",
            prefix: "13_多线程/",
            link: "13_多线程/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md", "13.md", "14.md", "15.md", "16.md", "17.md", "18.md", "19.md", "20.md", "21.md", "22.md",
            ],
        },
        {
            text: "☘️ Maven 基础",
            prefix: "14_Maven基础/",
            link: "14_Maven基础/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "☘️ 网络编程",
            prefix: "15_网络编程/",
            link: "15_网络编程/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "☘️ XML 与 JSON",
            prefix: "16_XML与JSON/",
            link: "16_XML与JSON/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md",
            ],
        },
        {
            text: "☘️ JDBC 编程",
            prefix: "17_JDBC编程/",
            link: "17_JDBC编程/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md",
            ],
        },
        {
            text: "☘️ 函数式编程",
            prefix: "18_函数式编程/",
            link: "18_函数式编程/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md",
            ],
        },
        {
            text: "☘️ 设计模式",
            prefix: "19_设计模式/",
            link: "19_设计模式/",
            collapsible: true,
            children: [
                {
                    text: "创建型模式",
                    collapsible: true,
                    children: ["1_1.md", "1_2.md", "1_3.md", "1_4.md", "1_5.md"]
                },
                {
                    text: "结构型模式",
                    collapsible: true,
                    children: ["2_1.md", "2_2.md", "2_3.md", "2_4.md", "2_5.md", "2_6.md", "2_7.md"]
                },
                {
                    text: "行为型模式",
                    collapsible: true,
                    children: ["3_1.md", "3_2.md", "3_3.md", "3_4.md", "3_5.md", "3_6.md", "3_7.md", "3_8.md", "3_9.md", "3_10.md", "3_11.md"]
                },
            ],
        },
        {
            text: "☘️ Web 开发",
            prefix: "20_Web开发/",
            link: "20_Web开发/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md",
                {
                    text: "Servlet 进阶",
                    link: "4.md",
                    collapsible: true,
                    children: ["4_1.md", "4_2.md",]
                },
                "5.md", "6.md", "7.md",
                {
                    text: "使用 Filter",
                    link: "8.md",
                    collapsible: true,
                    children: ["8_1.md", "8_2.md"]
                },
                "9.md", "10.md",
            ],
        },
        {
            text: "☘️ Spring 开发",
            prefix: "21_Spring开发/",
            link: "21_Spring开发/",
            collapsible: true,
            children: [
                "",

            ],
        },
        {
            text: "☘️ SpringBoot 开发",
            prefix: "22_SpringBoot开发/",
            link: "22_SpringBoot开发/",
            collapsible: true,
            children: [
                "",

            ],
        },
        {
            text: "☘️ SpringCloud 开发",
            prefix: "23_SpringCloud开发/",
            link: "23_SpringCloud开发/",
            collapsible: true,
            children: [
                "",

            ],
        },
    ],

    "/2-软考/": [
        "",
        {
            text: "上午",
            prefix: "上午题/",
            link: "上午题/",
            // collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md", "13.md", "14.md",
            ],
        },
        {
            text: "下午",
            prefix: "下午题/",
            link: "下午题/",
            // collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "6.md",
            ],
        },
    ],
    HeadersPluginOptions: false,
});


