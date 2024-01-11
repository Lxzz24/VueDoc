import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as d,c as o,f as s,a as n,d as e,b as i,e as a}from"./app-2rf537eJ.js";const p={},r=n("h1",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),u={id:"官方文档",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#官方文档","aria-hidden":"true"},"#",-1),b={href:"https://docsify.js.org/#/zh-cn/plugins",target:"_blank",rel:"noopener noreferrer"},m=n("h1",{id:"docsify-example-panels",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docsify-example-panels","aria-hidden":"true"},"#"),e(" docsify-example-panels")],-1),k={href:"https://vagnerdomingues.github.io/docsify-example-panels/#/",target:"_blank",rel:"noopener noreferrer"},g=n("h1",{id:"docsify-tabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docsify-tabs","aria-hidden":"true"},"#"),e(" docsify-tabs")],-1),h={href:"https://jhildenbiddle.github.io/docsify-tabs/#/",target:"_blank",rel:"noopener noreferrer"},f=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ol><li>在 <code>index.html</code> 文件中引用官方 js</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- docsify (latest v4.x.x)--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/docsify@4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- docsify-tabs (latest v1.x.x) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/docsify-tabs@1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">tabs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">persist</span>    <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>      <span class="token comment">// default 确定是否在页面刷新/重新访问后恢复选项卡选择。</span>
    <span class="token literal-property property">sync</span>       <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>      <span class="token comment">// default 确定选项卡选择是否将在具有匹配标签的选项卡之间同步。</span>
    <span class="token literal-property property">theme</span>      <span class="token operator">:</span> <span class="token string">&#39;classic&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default &#39;classic&#39;, &#39;material&#39;,false 设置选项卡主题。值false将指示不应应用任何主题。</span>
    <span class="token literal-property property">tabComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>      <span class="token comment">// default 确定是否可以使用选项卡注释定义选项卡集中的选项卡。见用法2</span>
    <span class="token literal-property property">tabHeadings</span><span class="token operator">:</span> <span class="token boolean">true</span>       <span class="token comment">// default 确定是否可以使用标题 + 粗体标记定义选项卡集中的选项卡。见用法1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>自定义主题属性</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--docsifytabs-border-color</span><span class="token punctuation">:</span> #ededed<span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-tab-highlight-color</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h3><ol><li>使用HTML 注释定义选项卡 <code>tabs:start</code> , <code>tabs:end</code></li><li>使用标题 + 粗体标记定义选项卡中的选项卡。</li></ol><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- tabs:start --&gt;</span>

<span class="token title important"><span class="token punctuation">####</span> **English**</span>

Hello!

<span class="token title important"><span class="token punctuation">####</span> **French**</span>

Bonjour!

<span class="token title important"><span class="token punctuation">####</span> **Italian**</span>

Ciao!

<span class="token comment">&lt;!-- tabs:end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下</p>`,12),y=a('<h4 id="english" tabindex="-1"><a class="header-anchor" href="#english" aria-hidden="true">#</a> <strong>English</strong></h4><p>Hello!</p><h4 id="french" tabindex="-1"><a class="header-anchor" href="#french" aria-hidden="true">#</a> <strong>French</strong></h4><p>Bonjour!</p><h4 id="italian" tabindex="-1"><a class="header-anchor" href="#italian" aria-hidden="true">#</a> <strong>Italian</strong></h4><p>Ciao!</p>',6),_=a(`<h3 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2</h3><p>使用 <code>tab:xxx</code> 标记定义选项卡中的选项卡，如下：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- tabs:start --&gt;</span>

<span class="token comment">&lt;!-- tab:English --&gt;</span>

Hello!

<span class="token comment">&lt;!-- tab:French --&gt;</span>

Bonjour!

<span class="token comment">&lt;!-- tab:Italian --&gt;</span>

Ciao!

<span class="token comment">&lt;!-- tabs:end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=n("p",null,"Hello!",-1),q=n("p",null,"Bonjour!",-1),w=n("p",null,"Ciao!",-1),S=a(`<h2 id="定制" tabindex="-1"><a class="header-anchor" href="#定制" aria-hidden="true">#</a> 定制</h2><h3 id="主题属性" tabindex="-1"><a class="header-anchor" href="#主题属性" aria-hidden="true">#</a> 主题属性</h3><p>主题属性允许您自定义选项卡样式，而无需编写复杂的 CSS。以下列表包含默认主题值。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Tab blocks */</span>
    <span class="token property">--docsifytabs-border-color</span>          <span class="token punctuation">:</span> #ededed<span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-border-px</span>             <span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-border-radius-px</span>      <span class="token punctuation">:</span> <span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-margin</span>                <span class="token punctuation">:</span> 1.5em 0<span class="token punctuation">;</span>

    <span class="token comment">/* Tabs */</span>
    <span class="token property">--docsifytabs-tab-background</span>        <span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-tab-background--active</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--docsifytabs-content-background<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-tab-color</span>             <span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-tab-color--active</span>     <span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-tab-highlight-px</span>      <span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-tab-highlight-color</span>   <span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-color<span class="token punctuation">,</span> currentColor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-tab-padding</span>           <span class="token punctuation">:</span> 0.6em 1em<span class="token punctuation">;</span>

    <span class="token comment">/* Tab content */</span>
    <span class="token property">--docsifytabs-content-background</span>    <span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
    <span class="token property">--docsifytabs-content-padding</span>       <span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义样式" tabindex="-1"><a class="header-anchor" href="#自定义样式" aria-hidden="true">#</a> 自定义样式</h3>`,5),C=a(`<h4 id="粗体" tabindex="-1"><a class="header-anchor" href="#粗体" aria-hidden="true">#</a> <strong><b>粗体</b></strong></h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- tabs:start --&gt;</span>

<span class="token title important"><span class="token punctuation">####</span> **&lt;b&gt;粗体&lt;/b&gt;**</span>

...

<span class="token comment">&lt;!-- tabs:end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="斜体" tabindex="-1"><a class="header-anchor" href="#斜体" aria-hidden="true">#</a> <strong><em>斜体</em></strong></h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- tabs:start --&gt;</span>

<span class="token title important"><span class="token punctuation">####</span> **&lt;em&gt;斜体&lt;/em&gt;**</span>

...

<span class="token comment">&lt;!-- tabs:end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="红色" tabindex="-1"><a class="header-anchor" href="#红色" aria-hidden="true">#</a> <strong><span style="color:red;">红色</span></strong></h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- tabs:start --&gt;</span>

<span class="token title important"><span class="token punctuation">####</span> **&lt;span style=&#39;color: red;&#39;&gt;Red&lt;/span&gt;**</span>

...

<span class="token comment">&lt;!-- tabs:end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="😀" tabindex="-1"><a class="header-anchor" href="#😀" aria-hidden="true">#</a> <strong>😀</strong></h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- tabs:start --&gt;</span>

<span class="token title important"><span class="token punctuation">####</span> **😀**</span>

...

<span class="token comment">&lt;!-- tabs:end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="badge-new" tabindex="-1"><a class="header-anchor" href="#badge-new" aria-hidden="true">#</a> <strong>Badge <span class="tab-badge">New!</span></strong></h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- tabs:start --&gt;</span>

<span class="token title important"><span class="token punctuation">####</span> **Badge &lt;span class=&#39;tab-badge&#39;&gt;New!&lt;/span&gt;**</span>

...

<span class="token comment">&lt;!-- tabs:end --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.tab-badge</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>35%<span class="token punctuation">,</span> -45%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0.25em 0.35em<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),T=a(`<h3 id="高级样式" tabindex="-1"><a class="header-anchor" href="#高级样式" aria-hidden="true">#</a> 高级样式</h3><p><button class="docsify-tabs__tab" data-tab="basic tab">Basic Tab</button></p><div class="docsify-tabs__content" data-tab-content="basic tab"><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;button class=&quot;docsify-tabs__tab&quot; data-tab=&quot;basic tab&quot;&gt;Basic Tab&lt;/button&gt;
&lt;div class=&quot;docsify-tabs__content&quot; data-tab-content=&quot;basic tab&quot;&gt;
  ...
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;button class=&quot;docsify-tabs__tab docsify-tabs__tab--active&quot; data-tab=&quot;basic tab&quot;&gt;Basic Tab&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p><button class="docsify-tabs__tab docsify-tabs__tab--active" data-tab="active state">Active State</button></p><div class="docsify-tabs__content" data-tab-content="active state"><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;button class=&quot;docsify-tabs__tab docsify-tabs__tab--active&quot; data-tab=&quot;active state&quot;&gt;Active State&lt;/button&gt;
&lt;div class=&quot;docsify-tabs__content&quot; data-tab-content=&quot;active state&quot;&gt;
  ...
&lt;/div&gt;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.docsify-tabs__tab--active[data-tab=&quot;active state&quot;] {
  box-shadow: none;
  background: #13547a;
  color: white;
}
.docsify-tabs__content[data-tab-content=&quot;active state&quot;] {
  background-image: linear-gradient(0deg, #80d0c7 0%, #13547a 100%);
}
.docsify-tabs__content[data-tab-content=&quot;active state&quot;] p strong {
  color: white;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p><button class="docsify-tabs__tab docsify-tabs__tab--active" data-tab="codepen">CodePen</button></p><div class="docsify-tabs__content" data-tab-content="codepen"><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;button class=&quot;docsify-tabs__tab docsify-tabs__tab--active&quot; data-tab=&quot;codepen&quot;&gt;CodePen&lt;/button&gt;
&lt;div class=&quot;docsify-tabs__content&quot; data-tab-content=&quot;codepen&quot;&gt;
  ...
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>[data-tab-content=&quot;codepen&quot;] .cp_embed_wrapper {
  position: relative;
  top: calc(0px - var(--docsifytabs-content-padding));
  left: calc(0px - var(--docsifytabs-content-padding));
  width: calc(100% + calc(var(--docsifytabs-content-padding) * 2));
  margin-bottom: calc(0px - var(--docsifytabs-content-padding));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,7),H=a(`<h4 id="badge" tabindex="-1"><a class="header-anchor" href="#badge" aria-hidden="true">#</a> <strong>Badge</strong></h4><div class="language-MARKDOWN line-numbers-mode" data-ext="MARKDOWN"><pre class="language-MARKDOWN"><code>#### **Badge**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>[data-tab=&quot;badge&quot;]:after {
  content: &#39;New!&#39;;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(35%, -45%);
  padding: 0.25em 0.35em;
  border-radius: 3px;
  background: red;
  color: white;
  font-family: sans-serif;
  font-size: 11px;
  font-weight: bold;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function M(L,B){const t=c("ExternalLinkIcon");return d(),o("div",null,[s(" docsify :ignore"),r,n("h1",u,[v,e(),n("a",b,[e("官方文档"),i(t)])]),m,n("p",null,[n("a",k,[e("docsify-example-panels"),i(t)])]),g,n("p",null,[n("a",h,[e("docsify-tabs"),i(t)])]),f,s(" tabs:start "),y,s(" tabs:end "),_,s(" tabs:start "),s(" tab:English "),x,s(" tab:French "),q,s(" tab:Italian "),w,s(" tabs:end "),S,s(" tabs:start "),C,s(" tabs:end "),T,s(" tabs:start "),H,s(" tabs:end ")])}const E=l(p,[["render",M],["__file","docsify插件用法.html.vue"]]);export{E as default};
