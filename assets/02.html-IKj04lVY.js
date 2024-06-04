const t=JSON.parse('{"key":"v-6f521720","path":"/99-tools/Linux/16/02.html","title":"工作管理（job control）","lang":"zh-CN","frontmatter":{"category":"Tools","tag":"Linux","headerDepth":0,"description":"是在 bash 环境下的概念，当我们登录系统取得 bash shell 后，在单一终端机下同时进行多个工作的行为管理。 🍀 什么是工作管理？ 进行工作管理的行为中，其实每个工作都是目前 bash 的子进程，彼此之间是有相关性的。我们无法以 job control 的方式由 tty1 的环境去管理 tty2 的 bash 为什么会有工作管理？系统有多个...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/16/02.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"工作管理（job control）"}],["meta",{"property":"og:description","content":"是在 bash 环境下的概念，当我们登录系统取得 bash shell 后，在单一终端机下同时进行多个工作的行为管理。 🍀 什么是工作管理？ 进行工作管理的行为中，其实每个工作都是目前 bash 的子进程，彼此之间是有相关性的。我们无法以 job control 的方式由 tty1 的环境去管理 tty2 的 bash 为什么会有工作管理？系统有多个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工作管理（job control）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 什么是工作管理？","slug":"🍀-什么是工作管理","link":"#🍀-什么是工作管理","children":[]},{"level":2,"title":"🍀 job control 的管理","slug":"🍀-job-control-的管理","link":"#🍀-job-control-的管理","children":[{"level":3,"title":"直接将指令丢到背景中 执行 的 &","slug":"直接将指令丢到背景中-执行-的","link":"#直接将指令丢到背景中-执行-的","children":[]},{"level":3,"title":"将 目前 的工作丢到背景中_暂停_：ctrl+z","slug":"将-目前-的工作丢到背景中-暂停-ctrl-z","link":"#将-目前-的工作丢到背景中-暂停-ctrl-z","children":[]},{"level":3,"title":"观察目前的背景工作状态：jobs","slug":"观察目前的背景工作状态-jobs","link":"#观察目前的背景工作状态-jobs","children":[]},{"level":3,"title":"将背景工作拿到前景来处理：fg","slug":"将背景工作拿到前景来处理-fg","link":"#将背景工作拿到前景来处理-fg","children":[]},{"level":3,"title":"让工作在背景下的状态变成运行中：bg","slug":"让工作在背景下的状态变成运行中-bg","link":"#让工作在背景下的状态变成运行中-bg","children":[]},{"level":3,"title":"管理背景中的工作：kill","slug":"管理背景中的工作-kill","link":"#管理背景中的工作-kill","children":[]}]},{"level":2,"title":"🍀 脱机管理问题","slug":"🍀-脱机管理问题","link":"#🍀-脱机管理问题","children":[]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":7.24,"words":2171},"filePathRelative":"99-tools/Linux/16/02.md","localizedDate":"2024年5月16日","autoDesc":true}');export{t as data};
