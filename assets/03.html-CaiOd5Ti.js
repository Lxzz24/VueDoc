const e=JSON.parse('{"key":"v-0d3e800c","path":"/99-tools/Linux/13/03.html","title":"主机的细部权限规划：ACL 的使用","lang":"zh-CN","frontmatter":{"category":"Tools","tag":"Linux","headerDepth":0,"description":"从第 5 章开始，在强调 Linux 的权限概念非常重要，传统的权限仅有三种身份（owner、group、others）搭配三种权限（r、w、x），无法单纯的针对某一个使用者或某一个群组来设置设置特殊的权限需求，那么此时就需要使用 ACl 这个机制了 🍀 什么是 ACl 与如何支持启动 ACl ACl （Access Control List），主要...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/13/03.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"主机的细部权限规划：ACL 的使用"}],["meta",{"property":"og:description","content":"从第 5 章开始，在强调 Linux 的权限概念非常重要，传统的权限仅有三种身份（owner、group、others）搭配三种权限（r、w、x），无法单纯的针对某一个使用者或某一个群组来设置设置特殊的权限需求，那么此时就需要使用 ACl 这个机制了 🍀 什么是 ACl 与如何支持启动 ACl ACl （Access Control List），主要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主机的细部权限规划：ACL 的使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 什么是 ACl 与如何支持启动 ACl","slug":"🍀-什么是-acl-与如何支持启动-acl","link":"#🍀-什么是-acl-与如何支持启动-acl","children":[{"level":3,"title":"如何启动 ACl","slug":"如何启动-acl","link":"#如何启动-acl","children":[]}]},{"level":2,"title":"🍀 ACL 的设置技巧：getfacl、setfacl","slug":"🍀-acl-的设置技巧-getfacl、setfacl","link":"#🍀-acl-的设置技巧-getfacl、setfacl","children":[{"level":3,"title":"setfacl 指令用法介绍以及最简单的 u:账户:权限 设置","slug":"setfacl-指令用法介绍以及最简单的-u-账户-权限-设置","link":"#setfacl-指令用法介绍以及最简单的-u-账户-权限-设置","children":[]},{"level":3,"title":"getfacl 指令用法","slug":"getfacl-指令用法","link":"#getfacl-指令用法","children":[]},{"level":3,"title":"特定的单一群组的权限设置：g:群组名:权限","slug":"特定的单一群组的权限设置-g-群组名-权限","link":"#特定的单一群组的权限设置-g-群组名-权限","children":[]},{"level":3,"title":"针对有效权限设置：m:权限","slug":"针对有效权限设置-m-权限","link":"#针对有效权限设置-m-权限","children":[]},{"level":3,"title":"例题","slug":"例题","link":"#例题","children":[]},{"level":3,"title":"使用默认权限设置目录未来文件的 ACL 权限继承 d:[u|g]:[user|group]:权限","slug":"使用默认权限设置目录未来文件的-acl-权限继承-d-u-g-user-group-权限","link":"#使用默认权限设置目录未来文件的-acl-权限继承-d-u-g-user-group-权限","children":[]},{"level":3,"title":"例题练习","slug":"例题练习","link":"#例题练习","children":[]}]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":7.33,"words":2198},"filePathRelative":"99-tools/Linux/13/03.md","localizedDate":"2024年5月16日","autoDesc":true}');export{e as data};
