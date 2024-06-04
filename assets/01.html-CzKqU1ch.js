const t=JSON.parse('{"key":"v-f9212e58","path":"/99-tools/Linux/19/01.html","title":"Linux 的开机流程分析","lang":"zh-CN","frontmatter":{"category":"Tools","tag":"Linux","headerDepth":0,"description":"为什么要了解开机流程？下面又几个常见的场景： 如果想多重引导，怎么安全系统？; 如果你的 root 密码忘记了，如何救援？; 如果你的默认登录模式为图形界面，如果在开机时直接指定进入纯文本模式？; 如果因为 /etc/fstab 设置错误，导致无法顺利挂载根目录，如何修复 /etc/fstab 文件？; 笔者当时其实就因为 fstab 文件配置错误，导...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/19/01.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"Linux 的开机流程分析"}],["meta",{"property":"og:description","content":"为什么要了解开机流程？下面又几个常见的场景： 如果想多重引导，怎么安全系统？; 如果你的 root 密码忘记了，如何救援？; 如果你的默认登录模式为图形界面，如果在开机时直接指定进入纯文本模式？; 如果因为 /etc/fstab 设置错误，导致无法顺利挂载根目录，如何修复 /etc/fstab 文件？; 笔者当时其实就因为 fstab 文件配置错误，导..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.gxmnzl.cn/VueDoc/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Linux 的开机流程分析"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 的开机流程分析\\",\\"image\\":[\\"https://www.gxmnzl.cn/VueDoc/\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 开机流程一览","slug":"🍀-开机流程一览","link":"#🍀-开机流程一览","children":[]},{"level":2,"title":"🍀 BIOS、boot loader 与 kernel 载入","slug":"🍀-bios、boot-loader-与-kernel-载入","link":"#🍀-bios、boot-loader-与-kernel-载入","children":[{"level":3,"title":"BIOS 开机自我测试与 MBR/GPT","slug":"bios-开机自我测试与-mbr-gpt","link":"#bios-开机自我测试与-mbr-gpt","children":[]},{"level":3,"title":"Boot Loader 功能","slug":"boot-loader-功能","link":"#boot-loader-功能","children":[]},{"level":3,"title":"加载核心检查硬件与 initramfs 功能","slug":"加载核心检查硬件与-initramfs-功能","link":"#加载核心检查硬件与-initramfs-功能","children":[]}]},{"level":2,"title":"🍀 第一个程序 systemd 及使用 defaul.target 进入开机程序分析","slug":"🍀-第一个程序-systemd-及使用-defaul-target-进入开机程序分析","link":"#🍀-第一个程序-systemd-及使用-defaul-target-进入开机程序分析","children":[{"level":3,"title":"systemd 的处理流程","slug":"systemd-的处理流程","link":"#systemd-的处理流程","children":[]}]},{"level":2,"title":"🍀 systemd 执行 sysinit.target 初始化系统、bashic.target 准备系统","slug":"🍀-systemd-执行-sysinit-target-初始化系统、bashic-target-准备系统","link":"#🍀-systemd-执行-sysinit-target-初始化系统、bashic-target-准备系统","children":[]},{"level":2,"title":"🍀 systemd 启动 multi-user.target 下的服务","slug":"🍀-systemd-启动-multi-user-target-下的服务","link":"#🍀-systemd-启动-multi-user-target-下的服务","children":[{"level":3,"title":"相容 systemV 的 rc-local.service","slug":"相容-systemv-的-rc-local-service","link":"#相容-systemv-的-rc-local-service","children":[]},{"level":3,"title":"提供 tty 界面与登录的服务","slug":"提供-tty-界面与登录的服务","link":"#提供-tty-界面与登录的服务","children":[]}]},{"level":2,"title":"🍀 systemd 启动 graphical.target 下的服务","slug":"🍀-systemd-启动-graphical-target-下的服务","link":"#🍀-systemd-启动-graphical-target-下的服务","children":[]},{"level":2,"title":"🍀 开机过程会用到的主要配置文件","slug":"🍀-开机过程会用到的主要配置文件","link":"#🍀-开机过程会用到的主要配置文件","children":[{"level":3,"title":"关于模块 /etc/modprobe.d/*.conf 与 /etc/modules-load.d/*.conf","slug":"关于模块-etc-modprobe-d-conf-与-etc-modules-load-d-conf","link":"#关于模块-etc-modprobe-d-conf-与-etc-modules-load-d-conf","children":[]}]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":23.97,"words":7190},"filePathRelative":"99-tools/Linux/19/01.md","localizedDate":"2024年5月16日","autoDesc":true}');export{t as data};
