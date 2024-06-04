const e=JSON.parse('{"key":"v-09d4cece","path":"/99-tools/Linux/13/01.html","title":"Linux 的账户与群组","lang":"zh-CN","frontmatter":{"category":"Tools","tag":"Linux","headerDepth":0,"description":"账户管理是管理员工作中相当重要的一环，并且所有一般用户的账户申请，都必须需要管理员的协助才可以，所以必须了解下如何管理好一个服务器主机账户。 在管理 Linux 主机的账户时，我们必须先来了解下 Linux 到底是如何辨别每一个使用者的 🍀 使用者标识符：UID 与 GID 登录使用的账户，但是账户与 ID 对应在 /etc/passwd 中，Lin...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/13/01.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"Linux 的账户与群组"}],["meta",{"property":"og:description","content":"账户管理是管理员工作中相当重要的一环，并且所有一般用户的账户申请，都必须需要管理员的协助才可以，所以必须了解下如何管理好一个服务器主机账户。 在管理 Linux 主机的账户时，我们必须先来了解下 Linux 到底是如何辨别每一个使用者的 🍀 使用者标识符：UID 与 GID 登录使用的账户，但是账户与 ID 对应在 /etc/passwd 中，Lin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.gxmnzl.cn/VueDoc/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Linux 的账户与群组"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 的账户与群组\\",\\"image\\":[\\"https://www.gxmnzl.cn/VueDoc/\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 使用者标识符：UID 与 GID","slug":"🍀-使用者标识符-uid-与-gid","link":"#🍀-使用者标识符-uid-与-gid","children":[]},{"level":2,"title":"🍀 使用者账户","slug":"🍀-使用者账户","link":"#🍀-使用者账户","children":[{"level":3,"title":"/etc/passwd 文件结构","slug":"etc-passwd-文件结构","link":"#etc-passwd-文件结构","children":[]}]},{"level":2,"title":"🍀  /etc/shadow 文件结构","slug":"🍀-etc-shadow-文件结构","link":"#🍀-etc-shadow-文件结构","children":[]},{"level":2,"title":"🍀 关于群组：有效与初始群组、groups、newgrp","slug":"🍀-关于群组-有效与初始群组、groups、newgrp","link":"#🍀-关于群组-有效与初始群组、groups、newgrp","children":[{"level":3,"title":"/etc/group 文件结构","slug":"etc-group-文件结构","link":"#etc-group-文件结构","children":[]},{"level":3,"title":"有效群组（effective group）与初始群组（inital group）","slug":"有效群组-effective-group-与初始群组-inital-group","link":"#有效群组-effective-group-与初始群组-inital-group","children":[]},{"level":3,"title":"groups：有效与支持群组的观察","slug":"groups-有效与支持群组的观察","link":"#groups-有效与支持群组的观察","children":[]},{"level":3,"title":"newgrp：有效群组的切换","slug":"newgrp-有效群组的切换","link":"#newgrp-有效群组的切换","children":[]},{"level":3,"title":"/etc/gshadow","slug":"etc-gshadow","link":"#etc-gshadow","children":[]}]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":13.8,"words":4139},"filePathRelative":"99-tools/Linux/13/01.md","localizedDate":"2024年5月16日","autoDesc":true}');export{e as data};
