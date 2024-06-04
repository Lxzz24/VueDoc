import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as e,c as p,a as n,b as o,w as c,d as l,e as i}from"./app-CvlAI_tu.js";const u={},d={class:"hint-container details"},r=n("summary",null,"目录",-1),k={class:"table-of-contents"},m=l(`<p>使用旧的 <code>Date</code> 对象时，我们用 <code>SimpleDateFormat</code> 进行格式化显示。使用新的 <code>LocalDateTime</code> 或 <code>ZonedDateTime</code> 时，我们要进行格式化显示，就要使用 <code>DateTimeFormatter</code> 。</p><p>和 <code>SimpleDateFormat</code> 不同的是，<code>DateTimeFormatter</code> 不但是不变对象，它还是线程安全的。线程的概念我们会在后面涉及到。现在我们只需要记住：因为 <code>SimpleDateFormat</code> 不是线程安全的，使用的时候，只能在方法内部创建新的局部变量。而 <code>DateTimeFormatter</code> 可以只创建一个实例，到处引用。</p><p>创建 <code>DateTimeFormatter</code> 时，我们仍然通过传入格式化字符串实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DateTimeFormatter</span> formatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>格式化字符串的使用方式与 <code>SimpleDateFormat</code> 完全一致。</p><p>另一种创建 <code>DateTimeFormatter</code> 的方法是，传入格式化字符串时，同时指定 <code>Locale</code> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DateTimeFormatter</span> formatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;E, yyyy-MMMM-dd HH:mm&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">US</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种方式可以按照 <code>Locale</code> 默认习惯格式化。我们来看实际效果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span>format<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Locale</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ZonedDateTime</span> zdt <span class="token operator">=</span> <span class="token class-name">ZonedDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> formatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&#39;T&#39;HH:mm ZZZZ&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>zdt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">var</span> zhFormatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy MMM dd EE HH:mm&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">CHINA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>zhFormatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>zdt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">var</span> usFormatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;E, MMMM/dd/yyyy HH:mm&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">US</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>usFormatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>zdt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在格式化字符串中，如果需要输出固定字符，可以用&#39;xxx&#39;表示。</p><p>运行上述代码，分别以默认方式、中国地区和美国地区对当前时间进行显示，结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2019-09-15T23:16 GMT+08:00
2019 9 月 15 周日 23:16
Sun, September/15/2019 23:16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们直接调用 <code>System.out.println()</code> 对一个 <code>ZonedDateTime</code> 或者 <code>LocalDateTime</code> 实例进行打印的时候，实际上，调用的是它们的 <code>toString()</code> 方法，默认的 <code>toString()</code> 方法显示的字符串就是按照 ISO 8601 格式显示的，我们可以通过 <code>DateTimeFormatter</code> 预定义的几个静态变量来引用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">var</span> ldt <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token constant">ISO_DATE</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>ldt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token constant">ISO_DATE_TIME</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>ldt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的输出和 <code>toString()</code> 类似：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2019-09-15
2019-09-15T23:16:51.56217
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>对 <code>ZonedDateTime</code> 或 <code>LocalDateTime</code> 进行格式化，需要使用 <code>DateTimeFormatter</code> 类；</p><p><code>DateTimeFormatter</code> 可以通过格式化字符串和 <code>Locale</code> 对日期和时间进行定制输出。</p>`,19);function v(b,f){const a=t("router-link");return e(),p("div",null,[n("details",d,[r,n("nav",k,[n("ul",null,[n("li",null,[o(a,{to:"#🍀-小结"},{default:c(()=>[i("🍀 小结")]),_:1})])])])]),m])}const T=s(u,[["render",v],["__file","5.html.vue"]]);export{T as default};