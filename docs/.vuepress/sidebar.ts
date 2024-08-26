import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "0-article/打卡.md",
        {
            text: "文章",
            icon: "article",
            prefix: "0-article/",
            link: "0-article/",
            // 可选的, 设置分组是否可以折叠，默认值是 false,
            // collapsible: true,
            children: [
                {
                    text: "🏗️ 基础",
                    prefix: "base/",
                    link: "base/",
                    collapsible: true,
                    children: ["1.md"],
                },
                {
                    text: "💭 阅读",
                    prefix: "read/",
                    link: "read/",
                    collapsible: true,
                    children: ["0.md", "1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md"],
                },
                {
                    text: "💧 资源",
                    prefix: "resource/",
                    link: "resource/",
                    collapsible: true,
                    children: ["0.md", "1.md"],
                },
                {
                    text: "🔍 速查",
                    prefix: "search/",
                    link: "search/",
                    collapsible: true,
                    children: ["0.md", "1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md"],
                },
                {
                    text: "🐧 服务器",
                    prefix: "server/",
                    link: "server/",
                    collapsible: true,
                    children: ["0.md", "1.md", "2.md"],
                },
                {
                    text: "📈 效率",
                    prefix: "strategy/",
                    link: "strategy/",
                    collapsible: true,
                    children: ["0.md", "1.md", "2.md", "3.md", "4.md", "5.md"],
                },
            ],

        },
    ],
    "/1-Java/": [
        "",
        "SUM.md",
        {
            text: "Java 基础",
            prefix: "1_ABC/",
            icon: "condition",
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
            text: "面向对象",
            prefix: "2_面向对象/",
            icon: "object",
            link: "2_面向对象/",
            collapsible: true,
            children: [
                {
                    text: "面向对象基础",
                    prefix: "面向对象基础/",
                    icon: "extend",
                    link: "面向对象基础/",
                    collapsible: true,
                    children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md", "13.md", "14.md", "15.md",
                    ],
                },
                {
                    text: "Java 核心类",
                    prefix: "Java核心类/",
                    icon: "string",
                    link: "Java核心类/",
                    collapsible: true,
                    children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md",
                    ],
                },
            ],
        },
        {
            text: "异常处理",
            prefix: "3_异常处理/",
            icon: "warn",
            link: "3_异常处理/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md",
            ],
        },
        {
            text: "反射*",
            prefix: "4_反射/",
            icon: "light",
            link: "4_反射/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md",
            ],
        },
        {
            text: "注解",
            prefix: "5_注解/",
            icon: "at",
            link: "5_注解/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md",
            ],
        },
        {
            text: "泛型",
            prefix: "6_泛型/",
            icon: "any",
            link: "6_泛型/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "集合",
            prefix: "7_集合/",
            icon: "map",
            link: "7_集合/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md", "13.md", "14.md", "15.md",
            ],
        },
        {
            text: "IO",
            prefix: "8_IO/",
            icon: "IO",
            link: "8_IO/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md",
            ],
        },
        {
            text: "日期与时间",
            prefix: "9_日期与时间/",
            icon: "date",
            link: "9_日期与时间/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "单元测试",
            prefix: "10_单元测试/",
            icon: "template",
            link: "10_单元测试/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md",
            ],
        },
        {
            text: "正则表达式",
            prefix: "11_正则表达式/",
            icon: "regexp",
            link: "11_正则表达式/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md",
            ],
        },
        {
            text: "加密与安全",
            prefix: "12_加密与安全/",
            icon: "safe",
            link: "12_加密与安全/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md",
            ],
        },
        {
            text: "多线程",
            prefix: "13_多线程/",
            icon: "asynchronous",
            link: "13_多线程/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md", "13.md", "14.md", "15.md", "16.md", "17.md", "18.md", "19.md", "20.md", "21.md", "22.md",
            ],
        },
        {
            text: "Maven 基础",
            prefix: "14_Maven基础/",
            icon: "module",
            link: "14_Maven基础/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "网络编程",
            prefix: "15_网络编程/",
            icon: "network",
            link: "15_网络编程/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "XML 与 JSON",
            prefix: "16_XML与JSON/",
            icon: "json",
            link: "16_XML与JSON/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md",
            ],
        },
        {
            text: "JDBC 编程",
            prefix: "17_JDBC编程/",
            icon: "table",
            link: "17_JDBC编程/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md",
            ],
        },
        {
            text: "函数式编程",
            prefix: "18_函数式编程/",
            icon: "function",
            link: "18_函数式编程/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md",
            ],
        },
        {
            text: "设计模式",
            prefix: "19_设计模式/",
            icon: "palette",
            link: "19_设计模式/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md",
                {
                    text: "详解",
                    collapsible: true,
                    children: ["1_1.md", "1_2.md", "1_3.md", "1_4.md", "1_5.md", "2_1.md", "2_2.md", "2_3.md", "2_4.md", "2_5.md", "2_6.md", "2_7.md", "3_1.md", "3_2.md", "3_3.md", "3_4.md", "3_5.md", "3_6.md", "3_7.md", "3_8.md", "3_9.md", "3_10.md", "3_11.md"]
                },
            ],
        },
        {
            text: "Web 开发",
            prefix: "20_Web开发/",
            icon: "html",
            link: "20_Web开发/",
            collapsible: true,
            children: ["1.md", "2.md", "3.md",
                {
                    text: "Servlet 进阶",
                    prefix: "4/",
                    link: "4/",
                    collapsible: true,
                    children: ["1.md", "2.md",]
                },
                "5.md", "6.md", "7.md",
                {
                    text: "使用 Filter",
                    prefix: "8/",
                    link: "8/",
                    collapsible: true,
                    children: ["1.md", "2.md"]
                },
                "9.md", "10.md",
            ],
        },
        {
            text: "Spring 开发",
            prefix: "21_Spring开发/",
            icon: "leaf",
            link: "21_Spring开发/",
            collapsible: true,
            children: [
                "1.md", "2.md", "3.md", "4.md", "5.md",
            ],
        },
        {
            text: "SpringBoot 开发",
            prefix: "22_SpringBoot开发/",
            icon: "leaf",
            link: "22_SpringBoot开发/",
            collapsible: true,
            children: [
                "",

            ],
        },
        {
            text: "SpringCloud 开发",
            prefix: "23_SpringCloud开发/",
            icon: "leaf",
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
            children: ["1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "12.md", "13.md", "14.md"
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
    "/3-algo/": [
        "",
        {
            text: "数据结构",
            prefix: "DS/",
            link: "DS/",
            collapsible: true,
            children: [
                "1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md",
            ],
        },
        {
            text: "算法思想",
            prefix: "Algo/",
            link: "Algo/",
            collapsible: true,
            children: [
                "1.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md",
            ],
        },

    ],
    "/10-project/": [
        "",
        "UserCentor.md",
    ],
    "/99-tools/": [
        "linux.md",
        "centos.md",
        {
            text: "Linux 鸟哥私房菜",
            icon: "linux",
            prefix: "Linux/",
            link: "Linux/",
            collapsible: true,
            children: [
                "00/",
                {
                    text: "① Linux 是什么/如何学习",
                    prefix: "01/",
                    link: "01/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md",
                        "08.md",
                        "09.md"
                    ]
                },
                {
                    text: "② 主机规划与磁盘分区",
                    prefix: "02/",
                    link: "02/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md"
                    ]
                },
                {
                    text: "③ 安装 CentOS 7.x",
                    prefix: "03/",
                    link: "03/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md"
                    ]
                },
                {
                    text: "④ 首次登陆与线上求助",
                    prefix: "04/",
                    link: "04/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md"
                    ]
                },
                {
                    text: "⑤ Linux 的文件权限与目录配置",
                    prefix: "05/",
                    link: "05/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md"
                    ]
                },
                {
                    text: "⑥ Linux 文件与目录管理",
                    prefix: "06/",
                    link: "06/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md"
                    ]
                },
                {
                    text: "⑦ Linux 磁盘与文件系统管理",
                    prefix: "07/",
                    link: "07/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md"
                    ]
                },
                {
                    text: "⑧ 文件与文件系统的压缩、打包与备份",
                    prefix: "08/",
                    link: "08/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md"
                    ]
                },
                {
                    text: "⑨ vim 程序编辑器",
                    prefix: "09/",
                    link: "09/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md"
                    ]
                },
                {
                    text: "⑩ 认识与学习 BASH",
                    prefix: "10/",
                    link: "10/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md",
                        "08.md"
                    ]
                },
                {
                    text: "⑪ 正则表达式与文件格式化处理",
                    prefix: "11/",
                    link: "11/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md"
                    ]
                },
                {
                    text: "⑫ 学习 Shell Scripts",
                    prefix: "12/",
                    link: "12/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md",
                        "08.md"
                    ]
                },
                {
                    text: "⑬ Linux 账号管理与 ACL 权限设置",
                    prefix: "13/",
                    link: "13/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md",
                        "08.md",
                        "09.md",
                        "13/10.md"
                    ]
                },
                {
                    text: "⑭ 磁盘配额(Quota)与进阶文件系统管理",
                    prefix: "14/",
                    link: "14/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md"
                    ]
                },
                {
                    text: "⑮ 例行性工作排程(crontab)",
                    prefix: "15/",
                    link: "15/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md"
                    ]
                },
                {
                    text: "⑯ 进程管理与 SELinux 初探",
                    prefix: "16/",
                    link: "16/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md"
                    ]
                },
                {
                    text: "⑰ 认识系统服务(daemons)",
                    prefix: "17/",
                    link: "17/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md"
                    ]
                },
                {
                    text: "⑱ 认识与分析登录文件",
                    prefix: "18/",
                    link: "18/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md"
                    ]
                },
                {
                    text: "⑲ 开机流程、模块管理与 Loader",
                    prefix: "19/",
                    link: "19/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md"
                    ]
                },
                {
                    text: "⑳ 基础系统设置与备份策略",
                    prefix: "20/",
                    link: "20/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md",
                        "08.md"
                    ]
                },
                {
                    text: "㉑ 软件安装：原始码与 Tarball",
                    prefix: "21/",
                    link: "21/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md",
                        "07.md",
                        "08.md"
                    ]
                },
                {
                    text: "㉒ 软件安装 RPM、SRPM、YUM",
                    prefix: "22/",
                    link: "22/",
                    collapsible: true,
                    children: [
                        "01.md",
                        "02.md",
                        "03.md",
                        "04.md",
                        "05.md",
                        "06.md"
                    ]
                }
            ],
        },
    ],
    HeadersPluginOptions: false,
});


