import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as p,c as l,a as n,b as s,w as e,d as i,e as t}from"./app-CvlAI_tu.js";const u={},d={class:"hint-container details"},r=n("summary",null,"目录",-1),k={class:"table-of-contents"},v=i(`<h2 id="🍀-什么是注解-annotation" tabindex="-1"><a class="header-anchor" href="#🍀-什么是注解-annotation" aria-hidden="true">#</a> 🍀 什么是注解（Annotation）？</h2><p>注解是放在 Java 源码的类、方法、字段、参数前的一种特殊 “注释”：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// this is a component:</span>
<span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Inject</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释会被编译器直接忽略，注解则可以被编译器打包进入 <code>class</code> 文件，因此，注解是一种用作标注的 “元数据”。</p><h2 id="🍀-注解的作用" tabindex="-1"><a class="header-anchor" href="#🍀-注解的作用" aria-hidden="true">#</a> 🍀 注解的作用</h2><p>从 JVM 的角度看，注解本身对代码逻辑没有任何影响，如何使用注解完全由工具决定。</p><p>Java 的注解可以分为三类：</p><p><u>第一类</u></p><p>是由编译器使用的注解，例如：</p><ul><li><code>@Override</code> ：让编译器检查该方法是否正确地实现了覆写；</li><li><code>@SuppressWarnings</code> ：告诉编译器忽略此处代码产生的警告。</li></ul><p>这类注解不会被编译进入 <code>.class</code> 文件，它们在编译后就被编译器扔掉了。</p><p><u>第二类</u></p><p>是由工具处理 <code>.class</code> 文件使用的注解，比如有些工具会在加载 class 的时候，对 class 做动态修改，实现一些特殊的功能。这类注解会被编译进入 <code>.class</code> 文件，但加载结束后并不会存在于内存中。这类注解只被一些底层库使用，一般我们不必自己处理。</p><p><u>第三类</u></p><p>是在程序运行期能够读取的注解，它们在加载后一直存在于 JVM 中，这也是最常用的注解。例如，一个配置了 <code>@PostConstruct</code> 的方法会在调用构造方法后自动被调用（这是 Java 代码读取该注解实现的功能，JVM 并不会识别该注解）。</p><hr><p>定义一个注解时，还可以定义配置参数。配置参数可以包括：</p><ul><li>所有基本类型；</li><li>String；</li><li>枚举类型；</li><li>基本类型、String、Class 以及枚举的数组。</li></ul><p>因为配置参数必须是常量，所以，上述限制保证了注解在定义时就已经确定了每个参数的值。</p><p>注解的配置参数可以有默认值，缺少某个配置参数时将使用默认值。</p><p>此外，大部分注解会有一个名为 <code>value</code> 的配置参数，对此参数赋值，可以只写常量，相当于省略了 <code>value</code> 参数。</p><p>如果只写注解，相当于全部使用默认值。</p><p>举个栗子，对以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Check</span><span class="token punctuation">(</span>min<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> max<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">55</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> n<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Check</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> p<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Check</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span> <span class="token comment">// @Check(value=99)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Check</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Check</code> 就是一个注解。第一个 <code>@Check(min=0, max=100, value=55)</code> 明确定义了三个参数，第二个 <code>@Check(value=99)</code> 只定义了一个 <code>value</code> 参数，它实际上和 <code>@Check(99)</code> 是完全一样的。最后一个 <code>@Check</code> 表示所有参数都使用默认值。</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><ul><li>注解（Annotation）是 Java 语言用于工具处理的标注：</li><li>注解可以配置参数，没有指定配置的参数使用默认值；</li><li>如果参数名称是 <code>value</code>，且只有一个参数，那么可以省略参数名称。</li></ul>`,27);function m(b,h){const a=c("router-link");return p(),l("div",null,[n("details",d,[r,n("nav",k,[n("ul",null,[n("li",null,[s(a,{to:"#🍀-什么是注解-annotation"},{default:e(()=>[t("🍀 什么是注解（Annotation）？")]),_:1})]),n("li",null,[s(a,{to:"#🍀-注解的作用"},{default:e(()=>[t("🍀 注解的作用")]),_:1})]),n("li",null,[s(a,{to:"#🍀-小结"},{default:e(()=>[t("🍀 小结")]),_:1})])])])]),v])}const w=o(u,[["render",m],["__file","1.html.vue"]]);export{w as default};
