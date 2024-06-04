import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,a as n,b as a,w as e,d as i,e as t}from"./app-CvlAI_tu.js";const u={},d={class:"hint-container details"},r=n("summary",null,"目录",-1),k={class:"table-of-contents"},v=i(`<h2 id="🍀-runtimeexception" tabindex="-1"><a class="header-anchor" href="#🍀-runtimeexception" aria-hidden="true">#</a> 🍀 RuntimeException</h2><p>在所有的 <code>RuntimeException</code> 异常中，Java 程序员最熟悉的恐怕就是 <code>NullPointerException</code> 了。</p><p><code>NullPointerException</code> 即空指针异常，俗称 NPE。如果一个对象为 <code>null</code>，调用其方法或访问其字段就会产生 <code>NullPointerException</code>，这个异常通常是由 JVM 抛出的，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指针这个概念实际上源自 C 语言，Java 语言中并无指针。我们定义的变量实际上是引用，Null Pointer 更确切地说是 Null Reference ，不过两者区别不大。</p><h2 id="🍀-处理-nullpointerexception" tabindex="-1"><a class="header-anchor" href="#🍀-处理-nullpointerexception" aria-hidden="true">#</a> 🍀 处理 NullPointerException</h2><p>如果遇到 <code>NullPointerException</code>，我们应该如何处理？首先，必须明确，<strong><em><code>NullPointerException</code> 是一种代码逻辑错误</em></strong> ，遇到 <code>NullPointerException</code>，遵循原则是早暴露，早修复，<strong>严禁使用 <code>catch</code> 来隐藏这种编码错误</strong> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 错误示例: 捕获 NullPointerException</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">transferMoney</span><span class="token punctuation">(</span>from<span class="token punctuation">,</span> <span class="token keyword">to</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NullPointerException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好的编码习惯可以极大地降低 <code>NullPointerException</code> 的产生，例如：</p><ul><li><em>成员变量在定义时初始化</em> ：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用空字符串 <code>&quot;&quot;</code> 而不是默认的 <code>null</code> 可避免很多 <code>NullPointerException</code>，编写业务逻辑时，用空字符串 <code>&quot;&quot;</code> 表示未填写比 <code>null</code> 安全得多。</p><ul><li><em>返回空字符串 <code>&quot;&quot;</code>、空数组而不是 <code>null</code></em> ：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">readLinesFromFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getFileSize</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 返回空数组而不是 null:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以使得调用方无需检查结果是否为 <code>null</code> 。</p><p>如果调用方一定要根据 <code>null</code> 判断，比如返回 <code>null</code> 表示文件不存在，那么考虑返回 <code>Optional&lt;T&gt;</code> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">readFromFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">fileExist</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样调用方必须通过 <code>Optional.isPresent()</code> 判断是否有结果。</p><h2 id="🍀-定位-nullpointerexception" tabindex="-1"><a class="header-anchor" href="#🍀-定位-nullpointerexception" aria-hidden="true">#</a> 🍀 定位 NullPointerException</h2><p>如果产生了 <code>NullPointerException</code>，例如，调用 <code>a.b.c.x()</code> 时产生了 <code>NullPointerException</code>，原因可能是：</p><ul><li><code>a</code> 是 <code>null</code> ；</li><li><code>a.b</code> 是 <code>null</code> ；</li><li><code>a.b.c</code> 是 <code>null</code> ；</li></ul><p>确定到底是哪个对象是 <code>null</code> 以前只能打印这样的日志：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>System.out.println(a);
System.out.println(a.b);
System.out.println(a.b.c);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 Java 14 开始，如果产生了 <code>NullPointerException</code>，JVM 可以给出详细的信息告诉我们 <code>null</code> 对象到底是谁。我们来看例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">Address</span> address <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Address</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> city<span class="token punctuation">;</span>
    <span class="token class-name">String</span> street<span class="token punctuation">;</span>
    <span class="token class-name">String</span> zipcode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在 <code>NullPointerException</code> 的详细信息中看到类似 <code>... because &quot;&lt;local1&gt;.address.city&quot; is null</code>，意思是 <code>city</code> 字段为 <code>null</code>，这样我们就能快速定位问题所在。</p><p>这种增强的 <code>NullPointerException</code> 详细信息是 Java 14 新增的功能。</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p><code>NullPointerException</code> 是 Java 代码常见的逻辑错误，应当早暴露，早修复；</p><p>可以启用 Java 14 的增强异常信息来查看 <code>NullPointerException</code> 的详细错误信息。</p>`,30);function m(b,g){const s=o("router-link");return c(),l("div",null,[n("details",d,[r,n("nav",k,[n("ul",null,[n("li",null,[a(s,{to:"#🍀-runtimeexception"},{default:e(()=>[t("🍀 RuntimeException")]),_:1})]),n("li",null,[a(s,{to:"#🍀-处理-nullpointerexception"},{default:e(()=>[t("🍀 处理 NullPointerException")]),_:1})]),n("li",null,[a(s,{to:"#🍀-定位-nullpointerexception"},{default:e(()=>[t("🍀 定位 NullPointerException")]),_:1})]),n("li",null,[a(s,{to:"#🍀-小结"},{default:e(()=>[t("🍀 小结")]),_:1})])])])]),v])}const y=p(u,[["render",m],["__file","5.html.vue"]]);export{y as default};
