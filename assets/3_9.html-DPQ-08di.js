import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as p}from"./app-CvlAI_tu.js";const t="/VueDoc/assets/image-20231220114317094-TjKJ3EEL.png",e={},c=p(`<blockquote><p>定义一系列的算法，把它们一个个封装起来，并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化。</p></blockquote><p>策略模式：<code>Strategy</code>，是指，定义一组算法，并把其封装到一个对象中。然后在运行时，可以灵活的使用其中的一个算法。</p><p>策略模式在 Java 标准库中应用非常广泛，我们以排序为例，看看如何通过 <code>Arrays.sort()</code> 实现忽略大小写排序：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token operator">::</span><span class="token function">compareToIgnoreCase</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想忽略大小写排序，就传入 <code>String::compareToIgnoreCase</code>，如果我们想倒序排序，就传入 <code>(s1, s2) -&gt; -s1.compareTo(s2)</code>，这个比较两个元素大小的算法就是策略。</p><p>我们观察 <code>Arrays.sort(T[] a, Comparator&lt;? super T&gt; c)</code> 这个排序方法，它在内部实现了 TimSort 排序，但是，排序算法在比较两个元素大小的时候，需要借助我们传入的 <code>Comparator</code> 对象，才能完成比较。因此，这里的策略是指比较两个元素大小的策略，可以是忽略大小写比较，可以是倒序比较，也可以根据字符串长度比较。</p><p>因此，上述排序使用到了策略模式，它实际上指，在一个方法中，流程是确定的，但是，某些关键步骤的算法依赖调用方传入的策略，这样，传入不同的策略，即可获得不同的结果，大大增强了系统的灵活性。</p><p>如果我们自己实现策略模式的排序，用冒泡法编写如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Pear&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token operator">::</span><span class="token function">compareToIgnoreCase</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 注意这里比较两个元素的大小依赖传入的策略</span>
                    <span class="token class-name">T</span> temp <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    a<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个完整的策略模式要定义策略以及使用策略的上下文。我们以购物车结算为例，假设网站针对普通会员、Prime 会员有不同的折扣，同时活动期间还有一个满 100 减 20 的活动，这些就可以作为策略实现。先定义打折策略接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DiscountStrategy</span> <span class="token punctuation">{</span>
    <span class="token comment">// 计算折扣额度:</span>
    <span class="token class-name">BigDecimal</span> <span class="token function">getDiscount</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> total<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，就是实现各种策略。普通用户策略如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDiscountStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">DiscountStrategy</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">BigDecimal</span> <span class="token function">getDiscount</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 普通会员打九折:</span>
        <span class="token keyword">return</span> total<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>满减策略如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverDiscountStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">DiscountStrategy</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">BigDecimal</span> <span class="token function">getDiscount</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 满 100 减 20 优惠:</span>
        <span class="token keyword">return</span> total<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，要应用策略，我们需要一个 <code>DiscountContext</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DiscountContext</span> <span class="token punctuation">{</span>
    <span class="token comment">// 持有某个策略:</span>
    <span class="token keyword">private</span> <span class="token class-name">DiscountStrategy</span> strategy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDiscountStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 允许客户端设置新策略:</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token class-name">DiscountStrategy</span> strategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BigDecimal</span> <span class="token function">calculatePrice</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> total<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">getDiscount</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方必须首先创建一个 DiscountContext，并指定一个策略（或者使用默认策略），即可获得折扣后的价格：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DiscountContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscountContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 默认使用普通会员折扣:</span>
<span class="token class-name">BigDecimal</span> pay1 <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">calculatePrice</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pay1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用满减折扣:</span>
ctx<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OverDiscountStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> pay2 <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">calculatePrice</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pay2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 Prime 会员折扣:</span>
ctx<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PrimeDiscountStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> pay3 <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">calculatePrice</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pay3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述完整的策略模式如下图所示：</p><figure><img src="`+t+'" alt="image-20231220114317094" tabindex="0" loading="lazy"><figcaption>image-20231220114317094</figcaption></figure><p>策略模式的核心思想是在一个计算方法中把容易变化的算法抽出来作为 “策略” 参数传进去，从而使得新增策略不必修改原有逻辑。</p><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><p>使用策略模式新增一种策略，允许在满 100 减 20 的基础上对 Prime 会员再打七折。</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>策略模式是为了允许调用方选择一个算法，从而通过不同策略实现不同的计算结果。</p><p>通过扩展策略，不必修改主逻辑，即可获得新策略的结果。</p>',27),o=[c];function l(i,u){return s(),a("div",null,o)}const d=n(e,[["render",l],["__file","3_9.html.vue"]]);export{d as default};