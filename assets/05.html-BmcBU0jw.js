const e=JSON.parse('{"key":"v-65150366","path":"/99-tools/Linux/16/05.html","title":"SELinux 初探","lang":"zh-CN","frontmatter":{"category":"Tools","tag":"Linux","headerDepth":0,"description":"CentOS 5.x 之后，SELinux 已经是个非常完备的核心模块了，尤其是 CentOS 提供了很多管理 SELinux 的指令与机制，因此在整理架构上面是单纯且容易操作管理的，所以在没有自行开发网络服务软件以及使用其他第三方协力软件的情况下，也就是全部使用 CentOS 官方提供的软件来使用我们服务器的情况下，建议不要关闭 SELinux 🍀...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/16/05.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"SELinux 初探"}],["meta",{"property":"og:description","content":"CentOS 5.x 之后，SELinux 已经是个非常完备的核心模块了，尤其是 CentOS 提供了很多管理 SELinux 的指令与机制，因此在整理架构上面是单纯且容易操作管理的，所以在没有自行开发网络服务软件以及使用其他第三方协力软件的情况下，也就是全部使用 CentOS 官方提供的软件来使用我们服务器的情况下，建议不要关闭 SELinux 🍀..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.gxmnzl.cn/VueDoc/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SELinux 初探"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SELinux 初探\\",\\"image\\":[\\"https://www.gxmnzl.cn/VueDoc/\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 什么是 SELinux","slug":"🍀-什么是-selinux","link":"#🍀-什么是-selinux","children":[{"level":3,"title":"当初设计的目标：避免资源的误用","slug":"当初设计的目标-避免资源的误用","link":"#当初设计的目标-避免资源的误用","children":[]},{"level":3,"title":"传统的文件权限与账户关系：自主式访问控制 DAC","slug":"传统的文件权限与账户关系-自主式访问控制-dac","link":"#传统的文件权限与账户关系-自主式访问控制-dac","children":[]},{"level":3,"title":"以政策规则规定特定进程读取特定文件：委任式访问控制 MAC","slug":"以政策规则规定特定进程读取特定文件-委任式访问控制-mac","link":"#以政策规则规定特定进程读取特定文件-委任式访问控制-mac","children":[]}]},{"level":2,"title":"🍀 SELinux 的运作模式","slug":"🍀-selinux-的运作模式","link":"#🍀-selinux-的运作模式","children":[{"level":3,"title":"安全性本文 Security Context","slug":"安全性本文-security-context","link":"#安全性本文-security-context","children":[]}]},{"level":2,"title":"🍀 SELinux 三种模式的启动、关闭与观察","slug":"🍀-selinux-三种模式的启动、关闭与观察","link":"#🍀-selinux-三种模式的启动、关闭与观察","children":[{"level":3,"title":"SElinux 的启动与关闭","slug":"selinux-的启动与关闭","link":"#selinux-的启动与关闭","children":[]}]},{"level":2,"title":"🍀 SELinux 政策内的规则管理","slug":"🍀-selinux-政策内的规则管理","link":"#🍀-selinux-政策内的规则管理","children":[{"level":3,"title":"SELinux 各个规则的布尔值查询：getsebool","slug":"selinux-各个规则的布尔值查询-getsebool","link":"#selinux-各个规则的布尔值查询-getsebool","children":[]},{"level":3,"title":"SELinux 各个规则规范的主体进程能够读取的文件 SELinux type 查询 seinfo、sesearch","slug":"selinux-各个规则规范的主体进程能够读取的文件-selinux-type-查询-seinfo、sesearch","link":"#selinux-各个规则规范的主体进程能够读取的文件-selinux-type-查询-seinfo、sesearch","children":[]},{"level":3,"title":"修改 SELinux 规则的布尔值 setsebool","slug":"修改-selinux-规则的布尔值-setsebool","link":"#修改-selinux-规则的布尔值-setsebool","children":[]}]},{"level":2,"title":"🍀 SELinux 安全本文的修改","slug":"🍀-selinux-安全本文的修改","link":"#🍀-selinux-安全本文的修改","children":[{"level":3,"title":"使用 chcon 手动修改文件的 SELinux type","slug":"使用-chcon-手动修改文件的-selinux-type","link":"#使用-chcon-手动修改文件的-selinux-type","children":[]},{"level":3,"title":"使用 restorecon 让文件恢复正确的 SELinux type","slug":"使用-restorecon-让文件恢复正确的-selinux-type","link":"#使用-restorecon-让文件恢复正确的-selinux-type","children":[]},{"level":3,"title":"semanage 默认目录的安全性本文查询与修改","slug":"semanage-默认目录的安全性本文查询与修改","link":"#semanage-默认目录的安全性本文查询与修改","children":[]}]},{"level":2,"title":"🍀 一个网络服务案例及登录文件协助","slug":"🍀-一个网络服务案例及登录文件协助","link":"#🍀-一个网络服务案例及登录文件协助","children":[{"level":3,"title":"setroubleshoot：错误信息写入 /var/log/messages","slug":"setroubleshoot-错误信息写入-var-log-messages","link":"#setroubleshoot-错误信息写入-var-log-messages","children":[]},{"level":3,"title":"实例说明：通过 vsftpd 这个 FTP 服务器来存取系统上的文件","slug":"实例说明-通过-vsftpd-这个-ftp-服务器来存取系统上的文件","link":"#实例说明-通过-vsftpd-这个-ftp-服务器来存取系统上的文件","children":[]},{"level":3,"title":"匿名者无法下载的问题","slug":"匿名者无法下载的问题","link":"#匿名者无法下载的问题","children":[]},{"level":3,"title":"无法从家目录下载文件的问题分析与解决","slug":"无法从家目录下载文件的问题分析与解决","link":"#无法从家目录下载文件的问题分析与解决","children":[]},{"level":3,"title":"一般账户用户从非正规目录上传/下载文件","slug":"一般账户用户从非正规目录上传-下载文件","link":"#一般账户用户从非正规目录上传-下载文件","children":[]},{"level":3,"title":"无法变更 FTP 联机端口问题分析解决","slug":"无法变更-ftp-联机端口问题分析解决","link":"#无法变更-ftp-联机端口问题分析解决","children":[]}]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":36.99,"words":11096},"filePathRelative":"99-tools/Linux/16/05.md","localizedDate":"2024年5月16日","autoDesc":true}');export{e as data};