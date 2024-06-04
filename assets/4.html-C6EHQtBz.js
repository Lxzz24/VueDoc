import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as o,a as n,b as s,w as t,d as i,e}from"./app-CvlAI_tu.js";const u={},d={class:"hint-container details"},g=n("summary",null,"目录",-1),k={class:"table-of-contents"},r=i(`<p>我们在前面介绍了 Maven 的 lifecycle，phase 和 goal：使用 Maven 构建项目就是执行 lifecycle，执行到指定的 phase 为止。每个 phase 会执行自己默认的一个或多个 goal。goal 是最小任务单元。</p><p>我们以 <code>compile</code> 这个 phase 为例，如果执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn compile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Maven 将执行 <code>compile</code> 这个 phase，这个 phase 会调用 <code>compiler</code> 插件执行关联的 <code>compiler:compile</code> 这个 goal。</p><p>实际上，执行每个 phase，都是通过某个插件（plugin）来执行的，Maven 本身其实并不知道如何执行 <code>compile</code>，它只是负责找到对应的 <code>compiler</code> 插件，然后执行默认的 <code>compiler:compile</code> 这个 goal 来完成编译。</p><p>所以，使用 Maven，实际上就是配置好需要使用的插件，然后通过 phase 调用它们。</p><p>Maven 已经内置了一些常用的标准插件：</p><table><thead><tr><th style="text-align:left;">插件名称</th><th style="text-align:left;">对应执行的 phase</th></tr></thead><tbody><tr><td style="text-align:left;">clean</td><td style="text-align:left;">clean</td></tr><tr><td style="text-align:left;">compiler</td><td style="text-align:left;">compile</td></tr><tr><td style="text-align:left;">surefire</td><td style="text-align:left;">test</td></tr><tr><td style="text-align:left;">jar</td><td style="text-align:left;">package</td></tr></tbody></table><p>如果标准插件无法满足需求，我们还可以使用自定义插件。使用自定义插件的时候，需要声明。例如，使用 <code>maven-shade-plugin</code> 可以创建一个可执行的 jar，要使用这个插件，需要在 <code>pom.xml</code> 中声明它：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span><span class="token punctuation">&gt;</span></span>
    ...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-shade-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>shade<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                            ...
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义插件往往需要一些配置，例如，<code>maven-shade-plugin</code> 需要指定 Java 程序的入口，它的配置是：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transformers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transformer</span> <span class="token attr-name">implementation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.maven.plugins.shade.resource.ManifestResourceTransformer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mainClass</span><span class="token punctuation">&gt;</span></span>com.itranswarp.learnjava.Main<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mainClass</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transformer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transformers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，Maven 自带的标准插件例如 <code>compiler</code> 是无需声明的，只有引入其它的插件才需要声明。</p><p>下面列举了一些常用的插件：</p><ul><li>maven-shade-plugin：打包所有依赖包并生成可执行 jar；</li><li>cobertura-maven-plugin：生成单元测试覆盖率报告；</li><li>findbugs-maven-plugin：对 Java 源码进行静态分析以找出潜在问题。</li></ul><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><p>使用 maven-shade-plugin 创建可执行 jar</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>Maven 通过自定义插件可以执行项目构建时需要的额外功能，使用自定义插件必须在 pom.xml 中声明插件及配置；</p><p>插件会在某个 phase 被执行时执行；</p><p>插件的配置和用法需参考插件的官方文档。</p>`,21);function v(m,h){const a=l("router-link");return c(),o("div",null,[n("details",d,[g,n("nav",k,[n("ul",null,[n("li",null,[s(a,{to:"#🍀-练习"},{default:t(()=>[e("🍀 练习")]),_:1})]),n("li",null,[s(a,{to:"#🍀-小结"},{default:t(()=>[e("🍀 小结")]),_:1})])])])]),r])}const x=p(u,[["render",v],["__file","4.html.vue"]]);export{x as default};