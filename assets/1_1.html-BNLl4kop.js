import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t="/VueDoc/assets/image-20231220093831139-C4-5XNWA.png",p={},c=e('<blockquote><p>定义一个用于创建对象的接口，让子类决定实例化哪一个类。Factory Method 使一个类的实例化延迟到其子类。</p></blockquote><p>工厂方法即 Factory Method，是一种对象创建型模式。</p><p>工厂方法的目的是使得创建对象和使用对象是分离的，并且客户端总是引用抽象工厂和抽象产品：</p><figure><img src="'+t+`" alt="image-20231220093831139" tabindex="0" loading="lazy"><figcaption>image-20231220093831139</figcaption></figure><p>我们以具体的例子来说：假设我们希望实现一个解析字符串到 <code>Number</code> 的 <code>Factory</code>，可以定义如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">NumberFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Number</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了工厂接口，再编写一个工厂的实现类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NumberFactoryImpl</span> <span class="token keyword">implements</span> <span class="token class-name">NumberFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Number</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而产品接口是 <code>Number</code>，<code>NumberFactoryImpl</code> 返回的实际产品是 <code>BigDecimal</code>。</p><p>那么客户端如何创建 <code>NumberFactoryImpl</code> 呢？通常我们会在接口 <code>Factory</code> 中定义一个静态方法 <code>getFactory()</code> 来返回真正的子类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">NumberFactory</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建方法:</span>
    <span class="token class-name">Number</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取工厂实例:</span>
    <span class="token keyword">static</span> <span class="token class-name">NumberFactory</span> <span class="token function">getFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> impl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token class-name">NumberFactory</span> impl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberFactoryImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端中，我们只需要和工厂接口 <code>NumberFactory</code> 以及抽象产品 <code>Number</code> 打交道：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">NumberFactory</span> factory <span class="token operator">=</span> <span class="token class-name">NumberFactory</span><span class="token punctuation">.</span><span class="token function">getFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Number</span> result <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;123.456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方可以完全忽略真正的工厂 <code>NumberFactoryImpl</code> 和实际的产品 <code>BigDecimal</code>，这样做的好处是允许创建产品的代码独立地变换，而不会影响到调用方。</p><p>有的童鞋会问：一个简单的 <code>parse()</code> 需要写这么复杂的工厂吗？实际上大多数情况下我们并不需要抽象工厂，而是通过静态方法直接返回产品，即：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NumberFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Number</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种简化的使用静态方法创建产品的方式称为静态工厂方法（Static Factory Method）。静态工厂方法广泛地应用在 Java 标准库中。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> n <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Integer</code> 既是产品又是静态工厂。它提供了静态方法 <code>valueOf()</code> 来创建 <code>Integer</code>。那么这种方式和直接写 <code>new Integer(100)</code> 有何区别呢？我们观察 <code>valueOf()</code> 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Integer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">&gt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的好处在于，<code>valueOf()</code> 内部可能会使用 <code>new</code> 创建一个新的 <code>Integer</code> 实例，但也可能直接返回一个缓存的 <code>Integer</code> 实例。对于调用方来说，没必要知道 <code>Integer</code> 创建的细节。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>工厂方法可以隐藏创建产品的细节，且不一定每次都会真正创建产品，完全可以返回缓存的产品，从而提升速度并减少内存消耗。</p></div><p>如果调用方直接使用 <code>Integer n = new Integer(100)</code>，那么就失去了使用缓存优化的可能性。</p><p>我们经常使用的另一个静态工厂方法是 <code>List.of()</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个静态工厂方法接收可变参数，然后返回 <code>List</code> 接口。需要注意的是，调用方获取的产品总是 <code>List</code> 接口，而且并不关心它的实际类型。即使调用方知道 <code>List</code> 产品的实际类型是 <code>java.util.ImmutableCollections$ListN</code>，也不要去强制转型为子类，因为静态工厂方法 <code>List.of()</code> 保证返回 <code>List</code>，但也完全可以修改为返回 <code>java.util.ArrayList</code>。这就是里氏替换原则：返回实现接口的任意子类都可以满足该方法的要求，且不影响调用方。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>总是引用接口而非实现类，能允许变换子类而不影响调用方，即尽可能面向抽象编程。</p></div><p>和 <code>List.of()</code> 类似，我们使用 <code>MessageDigest</code> 时，为了创建某个摘要算法，总是使用静态工厂方法 <code>getInstance(String)</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">MessageDigest</span> md5 <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;MD5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MessageDigest</span> sha1 <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;SHA-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方通过产品名称获得产品实例，不但调用简单，而且获得的引用仍然是 <code>MessageDigest</code> 这个抽象类。</p><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><p>使用静态工厂方法实现一个类似 <code>20200202</code> 的整数转换为 <code>LocalDate</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocalDateFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">LocalDate</span> <span class="token function">fromInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> yyyyMMdd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>工厂方法是指定义工厂接口和产品接口，但如何创建实际工厂和实际产品被推迟到子类实现，从而使调用方只和抽象工厂与抽象产品打交道。</p><p>实际更常用的是更简单的静态工厂方法，它允许工厂内部对创建产品进行优化。</p><p>调用方尽量持有接口或抽象类，避免持有具体类型的子类，以便工厂方法能随时切换不同的子类返回，却不影响调用方代码。</p>`,37),o=[c];function l(i,u){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","1_1.html.vue"]]);export{k as default};