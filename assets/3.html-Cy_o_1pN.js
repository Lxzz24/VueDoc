import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as l,a as n,b as a,w as t,d as i,e}from"./app-CvlAI_tu.js";const u={},r={class:"hint-container details"},k=n("summary",null,"目录",-1),d={class:"table-of-contents"},m=i(`<p>使用 DOM 解析 XML 的优点是用起来省事，但它的主要缺点是内存占用太大。</p><p>另一种解析 XML 的方式是 SAX。SAX 是 Simple API for XML 的缩写，它是一种基于流的解析方式，边读取 XML 边解析，并以事件回调的方式让调用者获取数据。因为是一边读一边解析，所以无论 XML 有多大，占用的内存都很小。</p><p>SAX 解析会触发一系列事件：</p><ul><li>startDocument：开始读取 XML 文档；</li><li>startElement：读取到了一个元素，例如 <code>&lt;book&gt;</code>；</li><li>characters：读取到了字符；</li><li>endElement：读取到了一个结束的元素，例如 <code>&lt;/book&gt;</code>；</li><li>endDocument：读取 XML 文档结束。</li></ul><p>如果我们用 SAX API 解析 XML，Java 代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">InputStream</span> input <span class="token operator">=</span> <span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;/book.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SAXParserFactory</span> spf <span class="token operator">=</span> <span class="token class-name">SAXParserFactory</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SAXParser</span> saxParser <span class="token operator">=</span> spf<span class="token punctuation">.</span><span class="token function">newSAXParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
saxParser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键代码 <code>SAXParser.parse()</code> 除了需要传入一个 <code>InputStream</code> 外，还需要传入一个回调对象，这个对象要继承自 <code>DefaultHandler</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyHandler</span> <span class="token keyword">extends</span> <span class="token class-name">DefaultHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SAXException</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;start document&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">endDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SAXException</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;end document&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startElement</span><span class="token punctuation">(</span><span class="token class-name">String</span> uri<span class="token punctuation">,</span> <span class="token class-name">String</span> localName<span class="token punctuation">,</span> <span class="token class-name">String</span> qName<span class="token punctuation">,</span> <span class="token class-name">Attributes</span> attributes<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SAXException</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;start element:&quot;</span><span class="token punctuation">,</span> localName<span class="token punctuation">,</span> qName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">endElement</span><span class="token punctuation">(</span><span class="token class-name">String</span> uri<span class="token punctuation">,</span> <span class="token class-name">String</span> localName<span class="token punctuation">,</span> <span class="token class-name">String</span> qName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SAXException</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;end element:&quot;</span><span class="token punctuation">,</span> localName<span class="token punctuation">,</span> qName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">characters</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SAXException</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;characters:&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span> start<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">SAXParseException</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SAXException</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;error:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> objs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> obj <span class="token operator">:</span> objs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 SAX 解析代码，可以打印出下面的结果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start document
start element:  book
characters:

start element:  name
characters: Java 核心技术
end element:  name
characters:

start element:  author
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要读取 <code>&lt;name&gt;</code> 节点的文本，我们就必须在解析过程中根据 <code>startElement()</code> 和 <code>endElement()</code> 定位当前正在读取的节点，可以使用栈结构保存，每遇到一个 <code>startElement()</code> 入栈，每遇到一个 <code>endElement()</code> 出栈，这样，读到 <code>characters()</code> 时我们才知道当前读取的文本是哪个节点的。可见，使用 SAX API 仍然比较麻烦。</p><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><p>使用 SAX 解析 XML</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>SAX 是一种流式解析 XML 的 API；</p><p>SAX 通过事件触发，读取速度快，消耗内存少；</p><p>调用方必须通过回调方法获得解析过程中的数据。</p>`,17);function v(b,h){const s=c("router-link");return o(),l("div",null,[n("details",r,[k,n("nav",d,[n("ul",null,[n("li",null,[a(s,{to:"#🍀-练习"},{default:t(()=>[e("🍀 练习")]),_:1})]),n("li",null,[a(s,{to:"#🍀-小结"},{default:t(()=>[e("🍀 小结")]),_:1})])])])]),m])}const y=p(u,[["render",v],["__file","3.html.vue"]]);export{y as default};
