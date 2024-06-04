import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as l,a as n,b as a,w as p,d as i,e as t}from"./app-CvlAI_tu.js";const u={},k={class:"hint-container details"},d=n("summary",null,"目录",-1),m={class:"table-of-contents"},r=i(`<p>和 <code>BigInteger</code> 类似，<code>BigDecimal</code> 可以 <strong><em>表示一个任意大小且精度完全准确的浮点数</em></strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigDecimal</span> bd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.4567&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>bd<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 15241.55677489</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>BigDecimal</code> 用 <code>scale()</code> 表示小数位数，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigDecimal</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.45&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.4500&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> d3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;1234500&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2, 两位小数</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d2<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d3<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>BigDecimal</code> 的 <code>stripTrailingZeros()</code> 方法，可以将一个 <code>BigDecimal</code> 格式化为一个相等的，但去掉了末尾 <code>0</code> 的 <code>BigDecimal</code> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigDecimal</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.4500&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> d2 <span class="token operator">=</span> d1<span class="token punctuation">.</span><span class="token function">stripTrailingZeros</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d2<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2, 因为去掉了 00</span>

<span class="token class-name">BigDecimal</span> d3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;1234500&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> d4 <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">stripTrailingZeros</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d3<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d4<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个 <code>BigDecimal</code> 的 <code>scale()</code> 返回负数，例如，<code>-2</code>，表示这个数是个整数，并且末尾有 2 个 <code>0</code> 。</p><p>可以对一个 <code>BigDecimal</code> 设置它的 <code>scale</code>，如果精度比原始值低，那么按照指定的方法进行四舍五入或者直接截断：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">RoundingMode</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.456789&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> d2 <span class="token operator">=</span> d1<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">HALF_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 四舍五入，123.4568</span>
        <span class="token class-name">BigDecimal</span> d3 <span class="token operator">=</span> d1<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接截断，123.4567</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对 <code>BigDecimal</code> 做加、减、乘时，精度不会丢失，但是做除法时，存在无法除尽的情况，这时，就必须指定精度以及如何进行截断：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigDecimal</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;23.456789&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> d3 <span class="token operator">=</span> d1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>d2<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">HALF_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保留 10 位小数并四舍五入</span>
<span class="token class-name">BigDecimal</span> d4 <span class="token operator">=</span> d1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错：ArithmeticException，因为除不尽</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以对 <code>BigDecimal</code> 做除法的同时求余数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;12.345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.12&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dr <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">divideAndRemainder</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 102</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.105</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code>divideAndRemainder()</code> 方法时，返回的数组包含两个 <code>BigDecimal</code>，分别是商和余数，其中商总是整数，余数不会大于除数。我们可以利用这个方法判断两个 <code>BigDecimal</code> 是否是整数倍数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigDecimal</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;12.75&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.15&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dr <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">divideAndRemainder</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>dr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">signum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// n 是 m 的整数倍</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-比较-bigdecimal" tabindex="-1"><a class="header-anchor" href="#🍀-比较-bigdecimal" aria-hidden="true">#</a> 🍀 比较 BigDecimal</h2><p>在比较两个 <code>BigDecimal</code> 的值是否相等时，要特别注意，<strong><em>使用 <code>equals()</code> 方法不但要求两个 <code>BigDecimal</code> 的值相等，还要求它们的 <code>scale()</code> 相等</em></strong> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigDecimal</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.45600&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false, 因为 scale 不同</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>d2<span class="token punctuation">.</span><span class="token function">stripTrailingZeros</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true, 因为 d2 去除尾部 0 后 scale 变为 2</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>必须使用 <code>compareTo()</code> 方法来比较，它根据两个值的大小分别返回负数、正数和 <code>0</code>，分别表示小于、大于和等于。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>总是使用 <code>compareTo()</code> 比较两个 <code>BigDecimal</code> 的值，不要使用 <code>equals()</code>！</p></div><p>如果查看 <code>BigDecimal</code> 的源码，可以发现，实际上一个 <code>BigDecimal</code> 是通过一个 <code>BigInteger</code> 和一个 <code>scale</code> 来表示的，即 <code>BigInteger</code> 表示一个完整的整数，而 <code>scale</code> 表示小数位数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigDecimal</span> <span class="token keyword">extends</span> <span class="token class-name">Number</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BigDecimal</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">BigInteger</span> intVal<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> scale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>BigDecimal</code> 也是从 <code>Number</code> 继承的，也是不可变对象。</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><ul><li><code>BigDecimal</code> 用于表示精确的小数，常用于财务计算；</li><li>比较 <code>BigDecimal</code> 的值是否相等，必须使用 <code>compareTo()</code> 而不能使用 <code>equals()</code> 。</li></ul>`,25);function v(g,b){const s=c("router-link");return o(),l("div",null,[n("details",k,[d,n("nav",m,[n("ul",null,[n("li",null,[a(s,{to:"#🍀-比较-bigdecimal"},{default:p(()=>[t("🍀 比较 BigDecimal")]),_:1})]),n("li",null,[a(s,{to:"#🍀-小结"},{default:p(()=>[t("🍀 小结")]),_:1})])])])]),r])}const f=e(u,[["render",v],["__file","9.html.vue"]]);export{f as default};
