const e=JSON.parse('{"key":"v-4a982870","path":"/99-tools/Linux/21/04.html","title":"Tarball 的管理与建议","lang":"zh-CN","frontmatter":{"category":"Tools","tag":"Linux","headerDepth":0,"description":"那么接下来我们要知道如何使用具有源码的 Tarball 来建立一个属于自己的软件 Tarball 的安装是可以跨平台的，只是需要的编译程序可能并不相同，例如 Linux 上用 gcc，而 windows 上也有相关的 c 编译程序。 如果万一没有编译成功，可以通过修改小部分的程序代码（通常是因为很小部分的不同）就可以跨平台的移植了 🍀 使用源码管理软...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/21/04.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"Tarball 的管理与建议"}],["meta",{"property":"og:description","content":"那么接下来我们要知道如何使用具有源码的 Tarball 来建立一个属于自己的软件 Tarball 的安装是可以跨平台的，只是需要的编译程序可能并不相同，例如 Linux 上用 gcc，而 windows 上也有相关的 c 编译程序。 如果万一没有编译成功，可以通过修改小部分的程序代码（通常是因为很小部分的不同）就可以跨平台的移植了 🍀 使用源码管理软..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tarball 的管理与建议\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 使用源码管理软件所需要的基础软件","slug":"🍀-使用源码管理软件所需要的基础软件","link":"#🍀-使用源码管理软件所需要的基础软件","children":[]},{"level":2,"title":"🍀 Tarball 安装的基本步骤","slug":"🍀-tarball-安装的基本步骤","link":"#🍀-tarball-安装的基本步骤","children":[]},{"level":2,"title":"🍀 一般 Tarball 软件安装的建议事项（如何移除？升级？）","slug":"🍀-一般-tarball-软件安装的建议事项-如何移除-升级","link":"#🍀-一般-tarball-软件安装的建议事项-如何移除-升级","children":[]},{"level":2,"title":"🍀 一个简单的范例，利用 ntp 来示范","slug":"🍀-一个简单的范例-利用-ntp-来示范","link":"#🍀-一个简单的范例-利用-ntp-来示范","children":[]},{"level":2,"title":"🍀 利用 patch 更新源码","slug":"🍀-利用-patch-更新源码","link":"#🍀-利用-patch-更新源码","children":[{"level":3,"title":"main-0.1 版本","slug":"main-0-1-版本","link":"#main-0-1-版本","children":[]},{"level":3,"title":"由 0.1 升级到 0.2 的 patch file","slug":"由-0-1-升级到-0-2-的-patch-file","link":"#由-0-1-升级到-0-2-的-patch-file","children":[]},{"level":3,"title":"测试旧版程序的功能","slug":"测试旧版程序的功能","link":"#测试旧版程序的功能","children":[]},{"level":3,"title":"查阅 patch file 内容","slug":"查阅-patch-file-内容","link":"#查阅-patch-file-内容","children":[]},{"level":3,"title":"更新源码，并重新编译程序","slug":"更新源码-并重新编译程序","link":"#更新源码-并重新编译程序","children":[]}]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":17.1,"words":5131},"filePathRelative":"99-tools/Linux/21/04.md","localizedDate":"2024年5月16日","autoDesc":true}');export{e as data};