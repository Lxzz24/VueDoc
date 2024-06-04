const e=JSON.parse('{"key":"v-f24dcbdc","path":"/99-tools/Linux/19/03.html","title":"Boot Loader：Grub2","lang":"zh-CN","frontmatter":{"category":"Tools","tag":"Linux","headerDepth":0,"description":"前面知识点来看，boot loader 是载入核心的重要工具，来讲下 Linux 中最流行的 grub2 这个 boot loader 🍀 boot loader 的两个 stage 曾经讲到，在 BIOS 读完信息后，接下来会到第一个开机设备的 MBR 去读取 boot loader 。该 boot loader 可以具有选单功能、字节加载核心文件...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/19/03.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"Boot Loader：Grub2"}],["meta",{"property":"og:description","content":"前面知识点来看，boot loader 是载入核心的重要工具，来讲下 Linux 中最流行的 grub2 这个 boot loader 🍀 boot loader 的两个 stage 曾经讲到，在 BIOS 读完信息后，接下来会到第一个开机设备的 MBR 去读取 boot loader 。该 boot loader 可以具有选单功能、字节加载核心文件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.gxmnzl.cn/VueDoc/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Boot Loader：Grub2"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Boot Loader：Grub2\\",\\"image\\":[\\"https://www.gxmnzl.cn/VueDoc/\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 boot loader 的两个 stage","slug":"🍀-boot-loader-的两个-stage","link":"#🍀-boot-loader-的两个-stage","children":[]},{"level":2,"title":"🍀 grub2 的配置文件 /boot/grub2/grub.cfg 初探","slug":"🍀-grub2-的配置文件-boot-grub2-grub-cfg-初探","link":"#🍀-grub2-的配置文件-boot-grub2-grub-cfg-初探","children":[{"level":3,"title":"磁盘与分区槽在 grub2 中的代号","slug":"磁盘与分区槽在-grub2-中的代号","link":"#磁盘与分区槽在-grub2-中的代号","children":[]},{"level":3,"title":"/boot/grub2/grub.cfg 配置文件（重点了解，不要随意修改）！","slug":"boot-grub2-grub-cfg-配置文件-重点了解-不要随意修改","link":"#boot-grub2-grub-cfg-配置文件-重点了解-不要随意修改","children":[]}]},{"level":2,"title":"🍀 grub2 的配置文件维护 /etc/default/grub 与 /etc/grub.d","slug":"🍀-grub2-的配置文件维护-etc-default-grub-与-etc-grub-d","link":"#🍀-grub2-的配置文件维护-etc-default-grub-与-etc-grub-d","children":[{"level":3,"title":"/etc/default/grub 主要配置文件","slug":"etc-default-grub-主要配置文件","link":"#etc-default-grub-主要配置文件","children":[]},{"level":3,"title":"选单建立的脚本 /etc/grub.d/*","slug":"选单建立的脚本-etc-grub-d","link":"#选单建立的脚本-etc-grub-d","children":[]}]},{"level":2,"title":"🍀 测试与安装 grub2","slug":"🍀-测试与安装-grub2","link":"#🍀-测试与安装-grub2","children":[]},{"level":2,"title":"🍀 开机前的额外功能修改","slug":"🍀-开机前的额外功能修改","link":"#🍀-开机前的额外功能修改","children":[]},{"level":2,"title":"🍀 关于开机画面与终端机画面的图形显示方式","slug":"🍀-关于开机画面与终端机画面的图形显示方式","link":"#🍀-关于开机画面与终端机画面的图形显示方式","children":[]},{"level":2,"title":"🍀 为个别选单加上密码","slug":"🍀-为个别选单加上密码","link":"#🍀-为个别选单加上密码","children":[{"level":3,"title":"grub2 的账户、密码与选单设置","slug":"grub2-的账户、密码与选单设置","link":"#grub2-的账户、密码与选单设置","children":[]},{"level":3,"title":"grub2 密码设置的文件位置与加密密码","slug":"grub2-密码设置的文件位置与加密密码","link":"#grub2-密码设置的文件位置与加密密码","children":[]},{"level":3,"title":"为个别的选单设置账户密码的使用模式","slug":"为个别的选单设置账户密码的使用模式","link":"#为个别的选单设置账户密码的使用模式","children":[]},{"level":3,"title":"设置fallback模式","slug":"设置fallback模式","link":"#设置fallback模式","children":[]}]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":28.1,"words":8430},"filePathRelative":"99-tools/Linux/19/03.md","localizedDate":"2024年5月16日","autoDesc":true}');export{e as data};