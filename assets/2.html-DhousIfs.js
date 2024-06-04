import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as l,a as n,b as s,w as e,d as i,e as t}from"./app-CvlAI_tu.js";const u={},d={class:"hint-container details"},r=n("summary",null,"目录",-1),k={class:"table-of-contents"},v=i(`<p>Java 语言使用 <code>@interface</code> 语法来定义注解（Annotation），它的格式如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">level</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解的参数类似无参数方法，可以用 <code>default</code> 设定一个默认值（强烈推荐）。最常用的参数应当命名为 <code>value</code> 。</p><h2 id="🍀-元注解" tabindex="-1"><a class="header-anchor" href="#🍀-元注解" aria-hidden="true">#</a> 🍀 元注解</h2><p>有一些注解可以修饰其他注解，这些注解就称为元注解（meta annotation）。Java 标准库已经定义了一些元注解，我们只需要使用元注解，通常不需要自己去编写元注解。</p><h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> @Target</h3><p>最常用的元注解是 <code>@Target</code> 。使用 <code>@Target</code> 可以定义 <code>Annotation</code> 能够被应用于源码的哪些位置：</p><ul><li>类或接口： <code>ElementType.TYPE</code> ；</li><li>字段： <code>ElementType.FIELD</code> ；</li><li>方法： <code>ElementType.METHOD</code> ；</li><li>构造方法： <code>ElementType.CONSTRUCTOR</code> ；</li><li>方法参数： <code>ElementType.PARAMETER</code> 。</li></ul><p>例如，定义注解 <code>@Report</code> 可用在方法上，我们必须添加一个 <code>@Target(ElementType.METHOD)</code> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">level</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义注解 <code>@Report</code> 可用在方法或字段上，可以把 <code>@Target</code> 注解参数变为数组 <code>{ElementType.METHOD, ElementType.FIELD}</code> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">,</span>
    <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上 <code>@Target</code> 定义的 <code>value</code> 是 <code>ElementType[]</code> 数组，只有一个元素时，可以省略数组的写法。</p><h3 id="retention" tabindex="-1"><a class="header-anchor" href="#retention" aria-hidden="true">#</a> @Retention</h3><p>另一个重要的元注解 <code>@Retention</code> 定义了 <code>Annotation</code> 的生命周期：</p><ul><li>仅编译期： <code>RetentionPolicy.SOURCE</code>；</li><li>仅 class 文件： <code>RetentionPolicy.CLASS</code>；</li><li>运行期： <code>RetentionPolicy.RUNTIME</code>。</li></ul><p>如果 <code>@Retention</code> 不存在，则该 <code>Annotation</code> 默认为 <code>CLASS</code> 。因为通常我们自定义的 <code>Annotation</code> 都是 <code>RUNTIME</code>，所以，务必要加上 <code>@Retention(RetentionPolicy.RUNTIME)</code> 这个元注解：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">level</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repeatable" tabindex="-1"><a class="header-anchor" href="#repeatable" aria-hidden="true">#</a> @Repeatable*</h3><p>使用 <code>@Repeatable</code> 这个元注解可以定义 <code>Annotation</code> 是否可重复。<s>这个注解应用不是特别广泛</s> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">Reports</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">level</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Reports</span> <span class="token punctuation">{</span>
    <span class="token class-name">Report</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过 <code>@Repeatable</code> 修饰后，在某个类型声明处，就可以添加多个 <code>@Report</code> 注解：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Report</span><span class="token punctuation">(</span>type<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> level<span class="token operator">=</span><span class="token string">&quot;debug&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Report</span><span class="token punctuation">(</span>type<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> level<span class="token operator">=</span><span class="token string">&quot;warning&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inherited" tabindex="-1"><a class="header-anchor" href="#inherited" aria-hidden="true">#</a> @Inherited</h3><p>使用 <code>@Inherited</code> 定义子类是否可继承父类定义的 <code>Annotation</code> 。<code>@Inherited</code> 仅针对 <code>@Target(ElementType.TYPE)</code> 类型的 <code>annotation</code> 有效，并且仅针对 <code>class</code> 的继承，对 <code>interface</code> 的继承无效：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">level</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用的时候，如果一个类用到了 <code>@Report</code> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Report</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则它的子类默认也定义了该注解：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-如何定义-annotation" tabindex="-1"><a class="header-anchor" href="#🍀-如何定义-annotation" aria-hidden="true">#</a> 🍀 如何定义 Annotation</h2><p>我们总结一下定义 <code>Annotation</code> 的步骤：</p><ol><li>第一步，用 <code>@interface</code> 定义注解：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>第二步，添加参数、默认值：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">level</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把最常用的参数定义为 <code>value()</code>，推荐所有参数都尽量设置默认值。</p><ol start="3"><li>第三步，用元注解配置注解：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Report</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">level</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，必须设置 <code>@Target</code> 和 <code>@Retention</code>，<code>@Retention</code> 一般设置为 <code>RUNTIME</code>，因为我们自定义的注解通常要求在运行期读取。一般情况下，不必写 <code>@Inherited</code> 和 <code>@Repeatable</code> 。</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>Java 使用 <code>@interface</code> 定义注解：</p><ul><li>可定义多个参数和默认值，核心参数使用 <code>value</code> 名称；</li><li>必须设置 <code>@Target</code> 来指定 <code>Annotation</code> 可以应用的范围；</li><li>应当设置 <code>@Retention(RetentionPolicy.RUNTIME)</code> 便于运行期读取该 <code>Annotation</code> 。</li></ul>`,43);function m(b,g){const a=p("router-link");return c(),l("div",null,[n("details",d,[r,n("nav",k,[n("ul",null,[n("li",null,[s(a,{to:"#🍀-元注解"},{default:e(()=>[t("🍀 元注解")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#target"},{default:e(()=>[t("@Target")]),_:1})]),n("li",null,[s(a,{to:"#retention"},{default:e(()=>[t("@Retention")]),_:1})]),n("li",null,[s(a,{to:"#repeatable"},{default:e(()=>[t("@Repeatable*")]),_:1})]),n("li",null,[s(a,{to:"#inherited"},{default:e(()=>[t("@Inherited")]),_:1})])])]),n("li",null,[s(a,{to:"#🍀-如何定义-annotation"},{default:e(()=>[t("🍀 如何定义 Annotation")]),_:1})]),n("li",null,[s(a,{to:"#🍀-小结"},{default:e(()=>[t("🍀 小结")]),_:1})])])])]),v])}const h=o(u,[["render",m],["__file","2.html.vue"]]);export{h as default};
