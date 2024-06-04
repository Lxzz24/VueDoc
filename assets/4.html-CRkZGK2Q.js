import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as l,a as n,b as a,w as t,d as u,e as p}from"./app-CvlAI_tu.js";const i={},k={class:"hint-container details"},d=n("summary",null,"目录",-1),r={class:"table-of-contents"},m=u(`<p>我们前面讲到的 <code>(...)</code> 可以用来把一个子规则括起来，这样写 <code>learn\\s(java|php|go)</code> 就可以更方便地匹配长字符串了。</p><p>实际上 <code>(...)</code> 还有一个重要作用，就是分组匹配。</p><p>我们来看一下如何用正则匹配 <code>区号 - 电话号</code> 码这个规则。利用前面讲到的匹配规则，写出来很容易：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\d{3,4}\\-\\d{6,8}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>虽然这个正则匹配规则很简单，但是往往匹配成功后，下一步是提取区号和电话号码，分别存入数据库。于是问题来了：如何提取匹配的子串？</p><p>当然可以用 <code>String</code> 提供的 <code>indexOf()</code> 和 <code>substring()</code> 这些方法，但它们从正则匹配的字符串中提取子串没有通用性，下一次要提取 <code>learn\\s(java|php)</code> 还得改代码。</p><p>正确的方法是用 <code>(...)</code> 先把要提取的规则分组，把上述正则表达式变为 <code>(\\d{3,4})\\-(\\d{6,8})</code>。</p><p>现在问题又来了：匹配后，如何按括号提取子串？</p><p>现在我们没办法用 <code>String.matches()</code> 这样简单的判断方法了，必须引入 <code>java.util.regex</code> 包，用 <code>Pattern</code> 对象匹配，匹配后获得一个 <code>Matcher</code> 对象，如果匹配成功，就可以直接从 <code>Matcher.group(index)</code> 返回子串：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Pattern</span> p <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\d{3,4})\\\\-(\\\\d{7,8})&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Matcher</span> m <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345678&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> g1 <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> g2 <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>g1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>g2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;匹配失败!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码，会得到两个匹配上的子串 <code>010</code> 和 <code>12345678</code>。</p><p>要特别注意，<code>Matcher.group(index)</code> 方法的参数用 1 表示第一个子串，2 表示第二个子串。如果我们传入 0 会得到什么呢？答案是 <code>010-12345678</code>，即整个正则匹配到的字符串。</p><h2 id="🍀-pattern" tabindex="-1"><a class="header-anchor" href="#🍀-pattern" aria-hidden="true">#</a> 🍀 Pattern</h2><p>我们在前面的代码中用到的正则表达式代码是 <code>String.matches()</code> 方法，而我们在分组提取的代码中用的是 <code>java.util.regex</code> 包里面的 <code>Pattern</code> 类和 <code>Matcher</code> 类。实际上这两种代码本质上是一样的，因为 <code>String.matches()</code> 方法内部调用的就是 <code>Pattern</code> 和 <code>Matcher</code> 类的方法。</p><p>但是反复使用 <code>String.matches()</code> 对同一个正则表达式进行多次匹配效率较低，因为每次都会创建出一样的 <code>Pattern</code> 对象。完全可以先创建出一个 <code>Pattern</code> 对象，然后反复使用，就可以实现编译一次，多次匹配：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\d{3,4})\\\\-(\\\\d{7,8})&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345678&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;021-123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;022#1234567&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token comment">// 获得 Matcher 对象:</span>
        <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span><span class="token string">&quot;010-12345678&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> whole <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;010-12345678&quot;, 0 表示匹配的整个字符串</span>
            <span class="token class-name">String</span> area <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;010&quot;, 1 表示匹配的第 1 个子串</span>
            <span class="token class-name">String</span> tel <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;12345678&quot;, 2 表示匹配的第 2 个子串</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>Matcher</code> 时，必须首先调用 <code>matches()</code> 判断是否匹配成功，匹配成功后，才能调用 <code>group()</code> 提取子串。</p><p>利用提取子串的功能，我们轻松获得了区号和号码两部分。</p><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><p>利用分组匹配，从字符串 <code>&quot;23:01:59&quot;</code> 提取时、分、秒。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Matcher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Pattern</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Time</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * 从 &quot;21:05:19&quot; 中提取时，分，秒，否则抛出 IllegalArgumentException
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">parseTime</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// FIXME:</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>正则表达式用 <code>(...)</code> 分组可以通过 <code>Matcher</code> 对象快速提取子串：</p><ul><li><code>group(0)</code> 表示匹配的整个字符串；</li><li><code>group(1)</code> 表示第 1 个子串，<code>group(2)</code> 表示第 2 个子串，以此类推。</li></ul>`,24);function v(b,g){const s=c("router-link");return o(),l("div",null,[n("details",k,[d,n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#🍀-pattern"},{default:t(()=>[p("🍀 Pattern")]),_:1})]),n("li",null,[a(s,{to:"#🍀-练习"},{default:t(()=>[p("🍀 练习")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#小结"},{default:t(()=>[p("小结")]),_:1})])])])])])]),m])}const y=e(i,[["render",v],["__file","4.html.vue"]]);export{y as default};