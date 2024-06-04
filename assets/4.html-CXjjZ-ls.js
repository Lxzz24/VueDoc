import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c as u,a as n,b as a,w as e,e as s,d as i}from"./app-CvlAI_tu.js";const k={},d={class:"hint-container details"},r=n("summary",null,"目录",-1),m={class:"table-of-contents"},v=i(`<p>前面我们介绍了 DOM 和 SAX 两种解析 XML 的标准接口。但是，无论是 DOM 还是 SAX，使用起来都不直观。</p><p>观察 XML 文档的结构：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Java 核心技术 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>author</span><span class="token punctuation">&gt;</span></span>Cay S. Horstmann<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>author</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>isbn</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1234567<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>isbn</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tags</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span><span class="token punctuation">&gt;</span></span>Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span><span class="token punctuation">&gt;</span></span>Network<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tags</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pubDate</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现，它完全可以对应到一个定义好的 JavaBean 中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> isbn<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tags<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> pubDate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果能直接从 XML 文档解析成一个 JavaBean，那比 DOM 或者 SAX 不知道容易到哪里去了。</p><p>幸运的是，一个名叫 Jackson 的开源的第三方库可以轻松做到 XML 到 JavaBean 的转换。我们要使用 Jackson，先添加一个 Maven 的依赖：</p><ul><li>com.fasterxml.jackson.dataformat:jackson-dataformat-xml:2.10.1</li></ul><p>然后，定义好 JavaBean，就可以用下面几行代码解析：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">InputStream</span> input <span class="token operator">=</span> <span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;/book.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JacksonXmlModule</span> <span class="token keyword">module</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JacksonXmlModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">XmlMapper</span> mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XmlMapper</span><span class="token punctuation">(</span><span class="token keyword">module</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Book</span> book <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token class-name">Book</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>isbn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>tags<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>pubDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到 <code>XmlMapper</code> 就是我们需要创建的核心对象，可以用 <code>readValue(InputStream, Class)</code> 直接读取 XML 并返回一个 JavaBean。运行上述代码，就可以直接从 Book 对象中拿到数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>
Java 核心技术
Cay S. Horstmann
<span class="token number">1234567</span>
<span class="token punctuation">[</span>Java, Network<span class="token punctuation">]</span>
null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),g={href:"https://github.com/FasterXML/jackson",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"🍀-练习",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🍀-练习","aria-hidden":"true"},"#"),s(" 🍀 练习")],-1),_=n("p",null,"使用 Jackson 解析 XML",-1),h=n("h2",{id:"🍀-小结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🍀-小结","aria-hidden":"true"},"#"),s(" 🍀 小结")],-1),f=n("p",null,"使用 Jackson 解析 XML，可以直接把 XML 解析为 JavaBean，十分方便。",-1);function y(w,x){const t=p("router-link"),o=p("ExternalLinkIcon");return l(),u("div",null,[n("details",d,[r,n("nav",m,[n("ul",null,[n("li",null,[a(t,{to:"#🍀-练习"},{default:e(()=>[s("🍀 练习")]),_:1})]),n("li",null,[a(t,{to:"#🍀-小结"},{default:e(()=>[s("🍀 小结")]),_:1})])])])]),v,n("p",null,[s("如果要解析的数据格式不是 Jackson 内置的标准格式，那么需要编写一点额外的扩展来告诉 Jackson 如何自定义解析。这里我们不做深入讨论，可以参考 Jackson 的 "),n("a",g,[s("官方文档"),a(o)]),s("。")]),b,_,h,f])}const M=c(k,[["render",y],["__file","4.html.vue"]]);export{M as default};