import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t={},i=e(`<h1 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断" aria-hidden="true">#</a> 条件判断</h1><p>在程序中，没有条件判断 <code>if then</code> 方式的话，在执行多条指令的时候，就会很麻烦。</p><h2 id="🍀-利用-if-then" tabindex="-1"><a class="header-anchor" href="#🍀-利用-if-then" aria-hidden="true">#</a> 🍀 利用 <code>if...then</code></h2><h3 id="单层、简单条件判断" tabindex="-1"><a class="header-anchor" href="#单层、简单条件判断" aria-hidden="true">#</a> 单层、简单条件判断</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 表达式 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	当条件成立时，可以进行的指令工作内容
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至于表达式的编码，与上一章的 test 一致，但是有一个特别的是，可以使用 <code>&amp;&amp;</code> 与 <code>||</code> 来连接多个中括号，在这里他们的含义就是表示 并且 和 或者 的意思</p><p>所以在使用中括号的时候， <code>&amp;&amp;</code> 和 <code>||</code> 与指令状态下的含义不同。比如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;Y&quot;</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;y&quot;</span> <span class="token punctuation">]</span>
可以替换为下面的方式
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;Y&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;y&quot;</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就很方便维护了，一个中括号一个表达式。那么将这个 script 修改为 <code>if...then</code> 的形式如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token function">vi</span> ans_yn.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       This program shows the user&#39;s choice</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入 Y/N：&quot;</span> yn
<span class="token comment"># [ &quot;\${yn}&quot; == &quot;Y&quot; -o &quot;\${yn}&quot; == &quot;y&quot; ] &amp;&amp; echo &quot;Ok，continue&quot; &amp;&amp; exit 0</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;Y&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;y&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Ok，continue&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token comment"># [ &quot;\${yn}&quot; == &quot;N&quot; -o &quot;\${yn}&quot; == &quot;n&quot; ] &amp;&amp; echo &quot;Oh，interrupt！&quot; &amp;&amp; exit 0</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;N&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;n&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Oh，interrupt！&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I don&#39;t know what your choice is&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此方式只是在代码组织上更偏向于笔者所学的 JAVA 语言了，对于变量的判定还可以使用如下的多重判断来达到效果</p><h3 id="多重、复杂条件判断" tabindex="-1"><a class="header-anchor" href="#多重、复杂条件判断" aria-hidden="true">#</a> 多重、复杂条件判断</h3><p>简单说，上述实例对于变量 <code>\${yn}</code> 使用了两次 if，那么可以使用如下方式简化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件表达式 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	做点啥
<span class="token keyword">else</span>
	做点啥
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更复杂的情况，增加 elseif ，如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件表达式 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	做点啥
<span class="token keyword">elif</span> <span class="token punctuation">[</span> 条件表达式 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	做点啥
<span class="token keyword">else</span>
	做点啥
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改写 <code>ans_yn.sh</code> 脚本如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       This program shows the user&#39;s choice</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入 Y/N：&quot;</span> yn
<span class="token comment"># [ &quot;\${yn}&quot; == &quot;Y&quot; -o &quot;\${yn}&quot; == &quot;y&quot; ] &amp;&amp; echo &quot;Ok，continue&quot; &amp;&amp; exit 0</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;Y&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;y&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Ok，continue&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Oh，interrupt！&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I don&#39;t know what your choice is&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>另一个范例知识，上一节提到参数功能（$1），让用户在下达指令的时候将参数带进去，让用户输入 hello 关键词，利用参数的方法可以如下设计：</p><ol><li>判断 <code>$1</code> 是否为 hello ，如果是，则显示「Hello, how ary you?」</li><li>如果无参数，则提示使用者必须要使用的参数下达方法</li><li>如果参数不是 hello，则提示使用者仅能使用 hello 为参数</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       直接携带参数提示</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello, how ary you?&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;请携带参数&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;只能携带参数 hello&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./hello-2.sh 
请携带参数
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./hello-2.sh hello
Hello, how ary you?
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./hello-2.sh hellox
只能携带参数 hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>书上例子如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       Chek $1 is equal to &quot;hello&quot;</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello, how ary you?&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;You MUST input parameters, ex&gt; {<span class="token variable">\${0}</span> someword}&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;The only parameter is &#39;hello&#39;, ex&gt; {<span class="token variable">\${0}</span> hello}&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>信息输出如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./hello-2.sh 
You MUST input parameters, ex<span class="token operator">&gt;</span> <span class="token punctuation">{</span>./hello-2.sh someword<span class="token punctuation">}</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./hello-2.sh hell
The only parameter is <span class="token string">&#39;hello&#39;</span>, ex<span class="token operator">&gt;</span> <span class="token punctuation">{</span>./hello-2.sh hello<span class="token punctuation">}</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./hello-2.sh hello
Hello, how ary you?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>笔者点评：这个显示很棒，错误提示告知了用户要怎么做</p><hr><p>那么深入练习。</p><p>在第十章学习了 grep 指令，现在多了解一个 netstat 指令，可以查询到目前主机有开启的网络服务端口（service ports），相关功能会在 <strong>服务器架设篇</strong> 继续介绍；这里只需要知道 <code>netstat -tuln</code>可以取得目前主机有启动的服务，而且取得的信息类似下面这样</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token function">netstat</span> <span class="token parameter variable">-tuln</span>
Active Internet connections <span class="token punctuation">(</span>only servers<span class="token punctuation">)</span>
<span class="token comment"># 封包格式			 本地 IP:端口			  远程 IP:端口				是否监听</span>
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:631           <span class="token number">0.0</span>.0.0:*               LISTEN     
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:25            <span class="token number">0.0</span>.0.0:*               LISTEN     
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:6010          <span class="token number">0.0</span>.0.0:*               LISTEN     
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:6011          <span class="token number">0.0</span>.0.0:*               LISTEN     
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:111             <span class="token number">0.0</span>.0.0:*               LISTEN     
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.122.1:53        <span class="token number">0.0</span>.0.0:*               LISTEN     
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:22              <span class="token number">0.0</span>.0.0:*               LISTEN     
tcp6       <span class="token number">0</span>      <span class="token number">0</span> ::1:631                 :::*                    LISTEN     
tcp6       <span class="token number">0</span>      <span class="token number">0</span> ::1:25                  :::*                    LISTEN     
tcp6       <span class="token number">0</span>      <span class="token number">0</span> ::1:6010                :::*                    LISTEN     
tcp6       <span class="token number">0</span>      <span class="token number">0</span> ::1:6011                :::*                    LISTEN     
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::111                  :::*                    LISTEN     
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::22                   :::*                    LISTEN     
udp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:48829           <span class="token number">0.0</span>.0.0:*                          
udp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.122.1:53        <span class="token number">0.0</span>.0.0:*                          
udp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:67              <span class="token number">0.0</span>.0.0:*                          
udp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:111             <span class="token number">0.0</span>.0.0:*                          
udp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:323           <span class="token number">0.0</span>.0.0:*                          
udp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:672             <span class="token number">0.0</span>.0.0:*                          
udp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:5353            <span class="token number">0.0</span>.0.0:*                          
udp6       <span class="token number">0</span>      <span class="token number">0</span> :::111                  :::*                               
udp6       <span class="token number">0</span>      <span class="token number">0</span> ::1:323                 :::*                               
udp6       <span class="token number">0</span>      <span class="token number">0</span> :::672                  :::*  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点关注 Local Address 字段（本地主机 IP 与端口对应），代表本机所启动的网络服务，<strong>127.0.0.1</strong> 则是针对本机开放，若是 <strong>0.0.0.0 或 :::</strong> 则代表对整个 Internet 开放。每个端口 port 都有其特定的网络服务，几个常见的 port 与网络服务的关系是：</p><ul><li>80：www</li><li>22：ssh</li><li>21：ftp</li><li>25：mail</li><li>111：RPC</li><li>631：CUPS（打印服务功能）</li></ul><p>假设我要检测常见端口 port 21、22、25、80 时，可以通过 netstat 检测主机是否有开启这四个主要的网络服务端口，由于每个服务的关键词都是接在冒号「:」后面，所以可以截取类似「:80」来检测。那么程序如下</p><p>下面是笔者写的脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> netstat.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;现在开始检测当前主机上的服务&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;www、ftp、mail、www 服务将被检测 <span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token comment"># 将 local Address 字段截取出来</span>
<span class="token assign-left variable">datas</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">netstat</span> <span class="token parameter variable">-tuln</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;:80&quot;</span> $<span class="token punctuation">{</span>datas<span class="token punctuation">}</span><span class="token variable">)</span></span> 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${testing}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;www&quot;</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;:22&quot;</span> $<span class="token punctuation">{</span>datas<span class="token punctuation">}</span><span class="token variable">)</span></span> 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${testing}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;ssh&quot;</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;:21&quot;</span> $<span class="token punctuation">{</span>datas<span class="token punctuation">}</span><span class="token variable">)</span></span> 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${testing}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;ftp&quot;</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;:25&quot;</span> $<span class="token punctuation">{</span>datas<span class="token punctuation">}</span><span class="token variable">)</span></span> 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${testing}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;mail&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过很遗憾，grep 后只能跟一个文件路径。那么正确的做法如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       Using netstat and grep to detect www⽀~Assh⽀~Aftp and mail services</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token comment"># 1. 佅~H佑~J潟¥彎¥䷾K彝¥襾A佁~Z亾@举H</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;潎°作¨廾@妾K梾@派K弾S佉~M主彜º䷾J潚~D彜~M佊¡&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;www⽀~Aftp⽀~Amail⽀~Awww 彜~M佊¡対F被梾@派K <span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token comment"># 2. 达[蠾L佈¤孾Z佒~L信彁¯轾S佇º </span>
<span class="token comment"># 対F local Address 嬾W段彈ª住~V佇º彝¥﻾L并潔~_彈~P彖~G件</span>
<span class="token assign-left variable">testfile</span><span class="token operator">=</span>/dev/shm/netstat_checking.txt
<span class="token function">netstat</span> <span class="token parameter variable">-tuln</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span> <span class="token operator">&gt;</span> <span class="token variable">\${testfile}</span>

<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;:80&quot;</span> $<span class="token punctuation">{</span>testfile<span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${testing}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;www is running in you system. &quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;:22&quot;</span> $<span class="token punctuation">{</span>testfile<span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${testing}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;ssh  is running in you system. &quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;:21&quot;</span> $<span class="token punctuation">{</span>testfile<span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${testing}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;ftp  is running in you system. &quot;</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;:25&quot;</span> $<span class="token punctuation">{</span>testfile<span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${testing}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;mail  is running in you system. &quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出信息如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./netstat.sh 
现在开始检测当前主机上的服务
www、ftp、mail、www 服务将被检测 

<span class="token function">ssh</span>  is running <span class="token keyword">in</span> you system. 
mail  is running <span class="token keyword">in</span> you system.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>条件判断还可以更复杂，比如：在台湾当兵是国民应尽的义务，不过，在当兵的时候总是很想退伍，那么写个脚本程序来实现：让用户输入他的退伍日期，计算出还有多少天才退伍？的功能</p><p>那么思路如下：</p><ol><li>用户输入自己的退伍日期</li><li>由现在的日期对比退伍日期</li><li>由两个日期的比较来显示「还需要几天」才能够退伍的字样</li></ol><p>温馨提示：日期可以使用 <code>date --date=&quot;YYYYMMDD&quot; +%s</code> 来取得指定日期的秒数，再利用秒数相减，再计算到天</p><p>笔者从现在开始，就不再贴出自己写的代码了，先自己写，然后对照书上的，最后部分修改成书上的展示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> cal_retired.sh
  
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       You input you demobilization date,I calculate how many days before you demobilize.</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token comment"># 1. 告知用户程序的用途，并且告知应该如何输入日期格式</span>
<span class="token comment"># 这个程序将尝试计算出，您的退伍日期还有多少天</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This program will try to calculate :&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;How many days before your demobilization date...&quot;</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Please input your demobilization date (YYYYMMDD ex&gt;20200112)：&quot;</span> date2

<span class="token comment"># 2. 测试判定，输入内容是否正确，使用正则表达式</span>
<span class="token assign-left variable">date_d</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>date2<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;[0-9]\\{8\\}&#39;</span><span class="token variable">)</span></span>             <span class="token comment"># 匹配 8 位数的字符串</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${date_d}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token comment"># 您输入了错误的日期格式</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;You input the wrong date format...&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token comment"># 3. 开始计算日期</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">date_dem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${date_d}</span>&quot;</span> +%s<span class="token variable">)</span></span>              <span class="token comment"># 退伍日期秒数</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">date_now</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>                                 <span class="token comment"># 当前日期秒数</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">date_total_s</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>\${date_dem}<span class="token operator">-</span>\${date_now}<span class="token variable">))</span></span>    		<span class="token comment"># 剩余秒数</span>
<span class="token comment"># 需要注意的是：这种嵌套执行的时候，括号一定要嵌套对位置</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">date_d</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>\${date_total_s}<span class="token operator">/</span><span class="token number">60</span><span class="token operator">/</span><span class="token number">60</span><span class="token operator">/</span><span class="token number">24</span><span class="token variable">))</span></span>                 <span class="token comment"># 转换为日</span>
<span class="token comment"># 中括号里面不能直接使用 &lt; 这种符号</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${date_total_s}</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token comment"># 这里是用 -1 乘，得到是正数，标识已经退伍多少天了</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;You had been demobilization before:  <span class="token variable"><span class="token variable">$((</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">*</span>\${date_d}<span class="token variable">))</span></span>  ago&quot;</span>
<span class="token keyword">else</span>
        <span class="token comment"># 这里使用 总秒数 - 转换为日的变量（这里只是转换为了天），剩余数据转成小时</span>
        <span class="token comment"># 则计算到 n 天 n 小时</span>
        <span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">date_h</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token variable">$((</span>\${date_total_s}<span class="token operator">-</span>\${date_d}<span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">24</span><span class="token variable">))</span></span>/60/60<span class="token punctuation">))</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;You will demobilize after <span class="token variable">\${date_d}</span> days and <span class="token variable">\${date_h}</span> hours.&quot;</span>
<span class="token keyword">fi</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./cal_retired.sh 
This program will try to calculate <span class="token builtin class-name">:</span>
How many days before your demobilization date<span class="token punctuation">..</span>.
Please input your demobilization <span class="token function">date</span> <span class="token punctuation">(</span>YYYYMMDD ex<span class="token operator">&gt;</span><span class="token number">20200112</span><span class="token punctuation">)</span>：20200120	<span class="token comment"># 输入当天</span>
You had been demobilization before:  <span class="token number">0</span>  ago

<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./cal_retired.sh 
This program will try to calculate <span class="token builtin class-name">:</span>
How many days before your demobilization date<span class="token punctuation">..</span>.
Please input your demobilization <span class="token function">date</span> <span class="token punctuation">(</span>YYYYMMDD ex<span class="token operator">&gt;</span><span class="token number">20200112</span><span class="token punctuation">)</span>：20200119	<span class="token comment"># 输入前一天</span>
You had been demobilization before:  <span class="token number">1</span>  ago

<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./cal_retired.sh 
This program will try to calculate <span class="token builtin class-name">:</span>
How many days before your demobilization date<span class="token punctuation">..</span>.
Please input your demobilization <span class="token function">date</span> <span class="token punctuation">(</span>YYYYMMDD ex<span class="token operator">&gt;</span><span class="token number">20200112</span><span class="token punctuation">)</span>：20200121	<span class="token comment"># 输入明天</span>
You will demobilize after <span class="token number">0</span> days and <span class="token number">8</span> hours.

<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./cal_retired.sh 
This program will try to calculate <span class="token builtin class-name">:</span>
How many days before your demobilization date<span class="token punctuation">..</span>.
Please input your demobilization <span class="token function">date</span> <span class="token punctuation">(</span>YYYYMMDD ex<span class="token operator">&gt;</span><span class="token number">20200112</span><span class="token punctuation">)</span>：2020^H^H3	<span class="token comment"># 输入错误的格式</span>
You input the wrong <span class="token function">date</span> format<span class="token punctuation">..</span>.

<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./cal_retired.sh 
This program will try to calculate <span class="token builtin class-name">:</span>
How many days before your demobilization date<span class="token punctuation">..</span>.
Please input your demobilization <span class="token function">date</span> <span class="token punctuation">(</span>YYYYMMDD ex<span class="token operator">&gt;</span><span class="token number">20200112</span><span class="token punctuation">)</span>：20300120	<span class="token comment"># 输入10 年后</span>
You will demobilize after <span class="token number">3652</span> days and <span class="token number">8</span> hours.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>笔者总结：</p><ul><li>本例结合了 grep 查找符合条件的参数，如果完全不符合，则为空白返回了</li><li>结合了 declare -i 定义整数变量</li><li>使用了 <code>$(($(())))</code> 嵌套指令执行语法</li><li>该范例还是有难度的，难点在于 用正则检查输入参数 和 计算 天 并计算小时</li></ul><h2 id="🍀-利用-case-esac-判断" tabindex="-1"><a class="header-anchor" href="#🍀-利用-case-esac-判断" aria-hidden="true">#</a> 🍀 利用 <code>case...esac</code> 判断</h2><p>作为 JAVA 程序员，这个不用多解释，直接看语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> $变量名称 <span class="token keyword">in</span>		<span class="token comment"># 关键词为 case 还有 变量前的 $ 符号</span>
	“变量内容 <span class="token number">1</span>”<span class="token punctuation">)</span>		<span class="token comment"># 每个变量内容建议用双引号括起来，关键词则为小括号</span>
	 	程序段
	 <span class="token punctuation">;</span><span class="token punctuation">;</span>				  <span class="token comment"># 使用两个连续的分号来结尾</span>
	“变量内容 <span class="token number">2</span>”<span class="token punctuation">)</span>
	 	程序段
	 <span class="token punctuation">;</span><span class="token punctuation">;</span>
	*<span class="token punctuation">)</span>			 	  <span class="token comment"># 最后一个变量内容需要用 * 来代表所有其他值</span>
		程序段
	 <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>				  <span class="token comment"># 最终的 case 结尾，就是反过来拼写的字符 esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面 <code>./hello-2.sh </code> 的例子使用该语法修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./hello-3.sh 

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       直接携带参数提示</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
	<span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello, how ary you?&quot;</span>
	<span class="token punctuation">;</span><span class="token punctuation">;</span>
	<span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;请携带参数&quot;</span>
	<span class="token punctuation">;</span><span class="token punctuation">;</span>
	*<span class="token punctuation">)</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;只能携带参数 hello&quot;</span>
	<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此种判定方式，针对于判定字符串时会更加的方便，CentOS6.x 以前系统很多服务的启动都是使用使用这种写法写的。虽然 CentOS7 已经使用 systemd ，不过任然有数个服务时放在 <code>/etc/init.d</code> 目录下的、比如有个名为 <code>netconsole</code> 的服务在该目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新启动该服务</span>
<span class="token comment"># 注意该服务需要使用 root 身份才行，一般账户可以执行，但是不会成功</span>
/etc/init.d/netconsole restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查阅该文件，找到文件末尾为发现以下的内容，这里就判定了输入的参数，使用的就是 case 语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    stop<span class="token punctuation">)</span> stop <span class="token punctuation">;</span><span class="token punctuation">;</span>
    status<span class="token punctuation">)</span> status <span class="token punctuation">;</span><span class="token punctuation">;</span>
    start<span class="token operator">|</span>restart<span class="token operator">|</span>reload<span class="token operator">|</span>force-reload<span class="token punctuation">)</span> restart <span class="token punctuation">;</span><span class="token punctuation">;</span>
    condrestart<span class="token punctuation">)</span> condrestart <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> usage <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以对于脚本的编写，可以参考这些已经有的，看看人家是怎么写的</p><p>一般来说，使用「<code>case $变量 in</code>」语法，那个变量大致有两种取得方式：</p><ul><li>直接下达：利用 <code>script.sh variable</code> 方式直接给 $1 变量，这也是在 <code>/etc/init.d</code> 目录下大多数程序的设计方式</li><li>交互式：通过 read 指令让用户输入变量内容</li></ul><p>下面来演示下：</p><ul><li>用户输入 <code>one、two、three</code> 并显示在屏幕上</li><li>如果不是以上变量，那么提示用户只有这三种选择</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> show123.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token comment"># 如需要让用户交互性输入，那么可以用这两行代替：case &quot;$1&quot; in</span>
<span class="token comment"># read -p &quot;请输入您的选择：&quot; choice</span>
<span class="token comment"># case &quot;\${choice}&quot; in</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
	<span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
	<span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
	<span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
	*<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;只能输入 one、two、three&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123.sh 
只能输入 one、two、three
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123.sh one
one
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123.sh two
two
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123.sh three
three
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123.sh three111
只能输入 one、two、three
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-利用-function-功能" tabindex="-1"><a class="header-anchor" href="#🍀-利用-function-功能" aria-hidden="true">#</a> 🍀 利用 function 功能</h2><p>函数功能，不用多说，可以被复用，优化程序结构，语法如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">fname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	程序段
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 shell script 执行方式是由上而下，由左而右，因此 function 的代码一定要在程序的最前面</p></div><p>下面将 show123.sh 改写成使用 function 方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> show123-2.sh
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token comment"># 如需要让用户交互性输入，那么可以用这两行代替：case &quot;$1&quot; in</span>
<span class="token comment"># read -p &quot;请输入您的选择：&quot; choice</span>
<span class="token comment"># case &quot;\${choice}&quot; in</span>

<span class="token keyword">function</span> <span class="token function-name function">printit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Your choice is &quot;</span> <span class="token comment"># -n 可以不断行连续在同一行显示</span>
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
	<span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span> printit<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
	<span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span> printit<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;a-z&#39;</span> <span class="token string">&#39;A-z&#39;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>  <span class="token comment"># 转换为大写</span>
	<span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span> printit<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
	*<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;只能输入 one、two、three&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123-2.sh one
Your choice is one
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token function">vim</span> show123-2.sh
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123-2.sh tow
只能输入 one、two、three
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123-2.sh two
Your choice is TWO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码，做了一个打印部分重复信息的功能，这个例子比较简单，当在程序中有大量重复，和大量逻辑的时候，就会体现出来了</p><p>同样，function 也可以有参数变量，改写成有参数调用函数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> show123-3.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token keyword">function</span> <span class="token function-name function">printit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your choice is <span class="token variable">\${1}</span>&quot;</span> <span class="token comment"># 在函数域中，的参数变量，与外部的不一致</span>
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
        <span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span> printit <span class="token number">1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span> printit <span class="token number">2</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span> printit <span class="token variable">$1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;只能输入 one、two、three&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123-3.sh one
Your choice is <span class="token number">1</span>			
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123-3.sh two
Your choice is <span class="token number">2</span> 	<span class="token comment"># 可以看到，这里给定参数 1，那么在里面获取 \${1}，的时候就获取到了</span>

<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123-3.sh three		
Your choice is three	<span class="token comment"># 在外部给定的是脚本中的变量 $1, 在内部也能获取到变量的具体内容</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./show123-3.sh threex
只能输入 one、two、three
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,83),p=[i];function l(o,c){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","04.html.vue"]]);export{d as default};
