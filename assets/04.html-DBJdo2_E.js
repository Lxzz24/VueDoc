const e=JSON.parse('{"key":"v-687eb4a4","path":"/99-tools/Linux/16/04.html","title":"","lang":"zh-CN","frontmatter":{"category":"Tools","tag":"Linux","headerDepth":0,"description":"🍀 特殊文件与进程 在第 6 章中讲到特殊权限 SUID、SGID、SBIT，那么这些权限对于你的 进程 是如何影响的？进程用到的系统资源，比如硬盘资源，使用 umount 硬盘时，出现提示 「device is busy」的提示是怎么回事？ 🍀 具有 SUID、SGID 权限的指令执行状态 SUID 的权限与进程的相关性非常大，SUID 的程序是...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/16/04.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:description","content":"🍀 特殊文件与进程 在第 6 章中讲到特殊权限 SUID、SGID、SBIT，那么这些权限对于你的 进程 是如何影响的？进程用到的系统资源，比如硬盘资源，使用 umount 硬盘时，出现提示 「device is busy」的提示是怎么回事？ 🍀 具有 SUID、SGID 权限的指令执行状态 SUID 的权限与进程的相关性非常大，SUID 的程序是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 特殊文件与进程","slug":"🍀-特殊文件与进程","link":"#🍀-特殊文件与进程","children":[]},{"level":2,"title":"🍀 具有 SUID、SGID 权限的指令执行状态","slug":"🍀-具有-suid、sgid-权限的指令执行状态","link":"#🍀-具有-suid、sgid-权限的指令执行状态","children":[]},{"level":2,"title":"🍀  /proc/* 代表的意义","slug":"🍀-proc-代表的意义","link":"#🍀-proc-代表的意义","children":[]},{"level":2,"title":"🍀 查询已开启文件或已执行进程开启之文件","slug":"🍀-查询已开启文件或已执行进程开启之文件","link":"#🍀-查询已开启文件或已执行进程开启之文件","children":[{"level":3,"title":"fuser：由文件（或文件系统）找出正在使用该文件的进程","slug":"fuser-由文件-或文件系统-找出正在使用该文件的进程","link":"#fuser-由文件-或文件系统-找出正在使用该文件的进程","children":[]},{"level":3,"title":"lsof：列出被进程所开启的文件名","slug":"lsof-列出被进程所开启的文件名","link":"#lsof-列出被进程所开启的文件名","children":[]},{"level":3,"title":"pidof：找出某个正在运行的程序的 PID","slug":"pidof-找出某个正在运行的程序的-pid","link":"#pidof-找出某个正在运行的程序的-pid","children":[]}]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":10.54,"words":3161},"filePathRelative":"99-tools/Linux/16/04.md","localizedDate":"2024年5月16日","autoDesc":true}');export{e as data};
