const t=JSON.parse('{"key":"v-03698c1c","path":"/99-tools/Linux/08/03.html","title":"打包指令：tar","lang":"zh-CN","frontmatter":{"title":"打包指令：tar","category":"Tools","tag":"Linux","headerDepth":0,"description":"前面讲解的 gzip、bzip2、xz 也能够针对目录进行压缩，但是是将目录内所有文件 分别 压缩的。而在 windows 下可以使用 winRAR 之类的压缩文件，将好多数据包成一个文件的样式。 这种将多个文件或目录包成一个大文件的指令功能，就可以称呼为 打包指令，tar 就是这样一个功能的打包指令，同时还可以通过压缩指令将该文件进行压缩。windo...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/99-tools/Linux/08/03.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"打包指令：tar"}],["meta",{"property":"og:description","content":"前面讲解的 gzip、bzip2、xz 也能够针对目录进行压缩，但是是将目录内所有文件 分别 压缩的。而在 windows 下可以使用 winRAR 之类的压缩文件，将好多数据包成一个文件的样式。 这种将多个文件或目录包成一个大文件的指令功能，就可以称呼为 打包指令，tar 就是这样一个功能的打包指令，同时还可以通过压缩指令将该文件进行压缩。windo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打包指令：tar\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 使用 tar 加入 -z、-j 或 -J 的参数备份 /etc/ 目录","slug":"🍀-使用-tar-加入-z、-j-或-j-的参数备份-etc-目录","link":"#🍀-使用-tar-加入-z、-j-或-j-的参数备份-etc-目录","children":[]},{"level":2,"title":"🍀 查阅 tar 文件的数据内容（可查看文件名）与备份文件名是否有根目录的意义","slug":"🍀-查阅-tar-文件的数据内容-可查看文件名-与备份文件名是否有根目录的意义","link":"#🍀-查阅-tar-文件的数据内容-可查看文件名-与备份文件名是否有根目录的意义","children":[]},{"level":2,"title":"🍀 将备份的数据解压缩，并考虑指定目录压缩（-C 选项的应用）","slug":"🍀-将备份的数据解压缩-并考虑指定目录压缩-c-选项的应用","link":"#🍀-将备份的数据解压缩-并考虑指定目录压缩-c-选项的应用","children":[]},{"level":2,"title":"🍀 仅解开单一文件","slug":"🍀-仅解开单一文件","link":"#🍀-仅解开单一文件","children":[]},{"level":2,"title":"🍀 打包某目录，但不包含该目录下的某些文件","slug":"🍀-打包某目录-但不包含该目录下的某些文件","link":"#🍀-打包某目录-但不包含该目录下的某些文件","children":[]},{"level":2,"title":"🍀 仅备份比某个时刻还要新的文件","slug":"🍀-仅备份比某个时刻还要新的文件","link":"#🍀-仅备份比某个时刻还要新的文件","children":[]},{"level":2,"title":"🍀 基本名称：tarfile、tarball？","slug":"🍀-基本名称-tarfile、tarball","link":"#🍀-基本名称-tarfile、tarball","children":[]},{"level":2,"title":"🍀 特殊应用：利用管线命令与数据流","slug":"🍀-特殊应用-利用管线命令与数据流","link":"#🍀-特殊应用-利用管线命令与数据流","children":[]},{"level":2,"title":"🍀 解压缩后的 SELinux 课题","slug":"🍀-解压缩后的-selinux-课题","link":"#🍀-解压缩后的-selinux-课题","children":[]}],"git":{"createdTime":1715862851000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":1}]},"readingTime":{"minutes":8.88,"words":2664},"filePathRelative":"99-tools/Linux/08/03.md","localizedDate":"2024年5月16日","autoDesc":true}');export{t as data};
