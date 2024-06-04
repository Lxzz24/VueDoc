const e=JSON.parse('{"key":"v-1f5cbc28","path":"/1-Java/18_%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B/3.html","title":"使用 Stream","lang":"zh-CN","frontmatter":{"title":"使用 Stream","category":"Java 教程","tag":"Java","headerDepth":1,"description":"目录 [[toc]] Java 从 8 开始，不但引入了 Lambda 表达式，还引入了一个全新的流式 API：Stream API。它位于 java.util.stream 包中。 划重点：这个 Stream 不同于 java.io 的 InputStream 和 OutputStream，它代表的是任意 Java 对象的序列。两者对比如下： jav...","head":[["meta",{"property":"og:url","content":"https://www.gxmnzl.cn/VueDoc/1-Java/18_%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B/3.html"}],["meta",{"property":"og:site_name","content":"BLOG"}],["meta",{"property":"og:title","content":"使用 Stream"}],["meta",{"property":"og:description","content":"目录 [[toc]] Java 从 8 开始，不但引入了 Lambda 表达式，还引入了一个全新的流式 API：Stream API。它位于 java.util.stream 包中。 划重点：这个 Stream 不同于 java.io 的 InputStream 和 OutputStream，它代表的是任意 Java 对象的序列。两者对比如下： jav..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.gxmnzl.cn/VueDoc/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:34:11.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"使用 Stream"}],["meta",{"property":"article:author","content":"Lxzz24"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 Stream\\",\\"image\\":[\\"https://www.gxmnzl.cn/VueDoc/\\"],\\"dateModified\\":\\"2024-05-16T12:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lxzz24\\"}]}"]]},"headers":[{"level":2,"title":"🍀 创建 Stream","slug":"🍀-创建-stream","link":"#🍀-创建-stream","children":[{"level":3,"title":"Stream.of()","slug":"stream-of","link":"#stream-of","children":[]},{"level":3,"title":"基于数组或 Collection","slug":"基于数组或-collection","link":"#基于数组或-collection","children":[]},{"level":3,"title":"基于 Supplier","slug":"基于-supplier","link":"#基于-supplier","children":[]},{"level":3,"title":"其他方法","slug":"其他方法","link":"#其他方法","children":[]},{"level":3,"title":"基本类型","slug":"基本类型","link":"#基本类型","children":[]},{"level":3,"title":"练习","slug":"练习","link":"#练习","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"🍀 使用 map","slug":"🍀-使用-map","link":"#🍀-使用-map","children":[{"level":3,"title":"练习","slug":"练习-1","link":"#练习-1","children":[]},{"level":3,"title":"小结","slug":"小结-1","link":"#小结-1","children":[]}]},{"level":2,"title":"🍀 使用 filter","slug":"🍀-使用-filter","link":"#🍀-使用-filter","children":[{"level":3,"title":"练习","slug":"练习-2","link":"#练习-2","children":[]},{"level":3,"title":"小结","slug":"小结-2","link":"#小结-2","children":[]}]},{"level":2,"title":"🍀 使用 reduce","slug":"🍀-使用-reduce","link":"#🍀-使用-reduce","children":[{"level":3,"title":"小结","slug":"小结-3","link":"#小结-3","children":[]}]},{"level":2,"title":"🍀 输出集合","slug":"🍀-输出集合","link":"#🍀-输出集合","children":[{"level":3,"title":"输出为 List","slug":"输出为-list","link":"#输出为-list","children":[]},{"level":3,"title":"输出为数组","slug":"输出为数组","link":"#输出为数组","children":[]},{"level":3,"title":"输出为 Map","slug":"输出为-map","link":"#输出为-map","children":[]},{"level":3,"title":"分组输出","slug":"分组输出","link":"#分组输出","children":[]},{"level":3,"title":"小结","slug":"小结-4","link":"#小结-4","children":[]}]},{"level":2,"title":"🍀 其他操作","slug":"🍀-其他操作","link":"#🍀-其他操作","children":[{"level":3,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":3,"title":"去重","slug":"去重","link":"#去重","children":[]},{"level":3,"title":"截取","slug":"截取","link":"#截取","children":[]},{"level":3,"title":"合并","slug":"合并","link":"#合并","children":[]},{"level":3,"title":"flatMap","slug":"flatmap","link":"#flatmap","children":[]},{"level":3,"title":"并行","slug":"并行","link":"#并行","children":[]},{"level":3,"title":"其他聚合方法","slug":"其他聚合方法","link":"#其他聚合方法","children":[]},{"level":3,"title":"小结","slug":"小结-5","link":"#小结-5","children":[]}]}],"git":{"createdTime":1704354222000,"updatedTime":1715862851000,"contributors":[{"name":"Lxzz24","email":"lxzz108@gmail.com","commits":2}]},"readingTime":{"minutes":19.45,"words":5835},"filePathRelative":"1-Java/18_函数式编程/3.md","localizedDate":"2024年1月4日","autoDesc":true}');export{e as data};