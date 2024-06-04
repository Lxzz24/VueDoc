import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e}from"./app-CvlAI_tu.js";const t={},l=e(`<h1 id="循环-loop" tabindex="-1"><a class="header-anchor" href="#循环-loop" aria-hidden="true">#</a> 循环（loop）</h1><p>循环可以不断执行某个程序段楼，直到用户设定的条件达成为止。</p><h2 id="🍀-while-do-done、until-do-done-不定循环" tabindex="-1"><a class="header-anchor" href="#🍀-while-do-done、until-do-done-不定循环" aria-hidden="true">#</a> 🍀 while do done、until do done（不定循环）</h2><p>当条件成立时，执行循环体</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span>   <span class="token comment"># 中括号中条件判断</span>
<span class="token keyword">do</span>    <span class="token comment"># 循环开始</span>
  程序段落
<span class="token keyword">done</span>  <span class="token comment"># 循环结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种不定循环的方式，当条件成立时退出循环体</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">until</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    程序段落
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>范例：让使用者输入 yes 或则是 YES 才结束程序的执行，否则就一直告知用户输入字符串</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> yes_to_stop.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&#39;yes&#39;</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&#39;YES&#39;</span> <span class="token punctuation">]</span>
<span class="token comment"># 使用 until 则是如下</span>
<span class="token comment"># until [ &quot;\${yn}&quot; == &#39;yes&#39; -o &quot;\${yn}&quot; == &#39;YES&#39; ]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&#39;请输入 yes 或 YES 退出程序&#39;</span> yn
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;你输入了正确答案&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./yes_to_stop.sh
请输入 <span class="token function">yes</span> 或 YES 退出程序j
请输入 <span class="token function">yes</span> 或 YES 退出程序jj
请输入 <span class="token function">yes</span> 或 YES 退出程序yes
你输入了正确答案
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要计算 <code>1+2+3+..100</code>则如下写</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> cal_1_100.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       计算 1+2+3+..100 的结果</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">0</span>	<span class="token comment"># 计算结果</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>			<span class="token comment"># 当前数值</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${i}</span>&quot;</span> <span class="token operator">!=</span> <span class="token number">100</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
	<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$i<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>		<span class="token comment"># 每次增加 1</span>
	<span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$total<span class="token operator">+</span>$i<span class="token variable">))</span></span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1+2+3+..100 = <span class="token variable">\${total}</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-for-do-done-固定循环" tabindex="-1"><a class="header-anchor" href="#🍀-for-do-done-固定循环" aria-hidden="true">#</a> 🍀 <code>for...do...done</code> 固定循环</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> con1 con2 con3 <span class="token punctuation">..</span>.
<span class="token keyword">do</span>
	循环体
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>范例：假设有三种动物，分别是 dog、cat、elephant 三种，输出三行信息，如 <code>There are dogs...</code> 之类的信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> show_animal.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">animal</span> <span class="token keyword">in</span> dog <span class="token function">cat</span> elephant
<span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;There are <span class="token variable">\${animal}</span>s...&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/etc/passwd 中第一个字段存放了用户名，使用循环打印出每个用户名的 id 信息；可使用 cut 截取第一字段，使用 id指令获取用户名的信息（标识符与特殊参数）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> userid.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token assign-left variable">users</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f1</span> /etc/passwd<span class="token variable">)</span></span>		<span class="token comment"># 获取到所有的用户名</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">user</span> <span class="token keyword">in</span> <span class="token variable">\${users}</span>
<span class="token keyword">do</span>
	<span class="token function">id</span> <span class="token variable">\${user}</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然还可以使用数字来做循环项，比如需要执行 <code>ping 192.168.1.1~192.168.1.100</code> 也就是从 1 ping 到 100，但是不可能需要我们手动输入 100 个数字吧</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> pingip.sh


<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token string">&quot;192.168.0&quot;</span>			<span class="token comment"># 先定义一个网域的前部分</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">sitenu</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">100</span><span class="token variable">)</span></span>	<span class="token comment"># seq 为 sequence 连续的意思</span>
<span class="token keyword">do</span>
	<span class="token comment"># ping -c 1 -w 1 192.168.0.101 &amp;&gt; /dev/null &amp;&amp; echo &quot;1&quot; || echo &quot;0&quot;</span>
	<span class="token comment"># 不显示执行结果，并获取命令是否执行成功</span>
	<span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">1</span> <span class="token parameter variable">-w</span> <span class="token number">1</span> <span class="token variable">\${network}</span><span class="token builtin class-name">.</span><span class="token variable">\${sitenu}</span> <span class="token operator">&amp;&gt;</span> /dev/null <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">||</span> <span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token number">1</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${result}</span>&quot;</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${network}</span>.<span class="token variable">\${sitenu}</span> is up&quot;</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${network}</span>.<span class="token variable">\${sitenu}</span> is down&quot;</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./pingip.sh
<span class="token number">192.168</span>.0.1 is up
<span class="token number">192.168</span>.0.2 is down
<span class="token number">192.168</span>.0.3 is down
<span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code>$(seq 1 100)</code> 来说，还可以使用 bash 的内建机制 <code>{1..100}</code> 来代替，中间两个点表示连续的意思，比如想要输出 a~g 则可以使用 <code>a..g</code></p><p>最后一个范例：</p><ol><li>让用户输入一个目录</li><li>如果目录不存在，则提示并退出程序</li><li>如果目录存在，则获取该目录下第一级文件是否可读、可写、可执行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> dir_perm.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入一个目录，将会检测该目录是否可读、可写、可执行：&quot;</span> <span class="token function">dir</span>
<span class="token comment"># 判定输入不为空，并且目录存在</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${dir}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-o</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">\${dir}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;The <span class="token variable">\${dir}</span> is NOT exist in your system&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token comment"># 获取该目录下的文件权限信息</span>
<span class="token assign-left variable">filelist</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> $<span class="token punctuation">{</span>dir<span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">\${filelist}</span>
<span class="token keyword">do</span>
        <span class="token assign-left variable">perm</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">test</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;<span class="token variable">\${dir}</span>/<span class="token variable">\${file}</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">perm</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${perm}</span> readable&quot;</span>
        <span class="token builtin class-name">test</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;<span class="token variable">\${dir}</span>/<span class="token variable">\${file}</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">perm</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${perm}</span> writable&quot;</span>
        <span class="token builtin class-name">test</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;<span class="token variable">\${dir}</span>/<span class="token variable">\${file}</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">perm</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${perm}</span> executable&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;The file <span class="token variable">\${dir}</span>/<span class="token variable">\${file}</span>&#39;s permission is <span class="token variable">\${perm}</span>&quot;</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用这种方式，可以很轻易的来处理一些文件的特性</p><h2 id="🍀-for-do-done-数值处理" tabindex="-1"><a class="header-anchor" href="#🍀-for-do-done-数值处理" aria-hidden="true">#</a> 🍀 <code>for...do...done</code> 数值处理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> 初始值<span class="token punctuation">;</span> 限制值<span class="token punctuation">;</span> 执行步阶<span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
	循环体
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>初始值：某个变量在循环中的起始值，可以以 i=1 设置好初始值</li><li>限制值：当变量值在这个限制值范围内，则继续循环。例如 i&lt;=100</li><li>执行步阶：每执行一次循环时，变量的变化量。例如 i=i+1，如果是自增则可以使用 i++ 来替代</li></ul><p>范例：计算从 1 累加到指定数值的结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> cal_1_100-2.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入一个数值，将计算出从 1 累加到该数值的计算结果&quot;</span> nu

<span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>\${nu}<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
	<span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>\${total}<span class="token operator">+</span>\${i}<span class="token variable">))</span></span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;1+..+<span class="token variable">\${nu}</span> = <span class="token variable">\${total}</span>&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./cal_1_100-2.sh
请输入一个数值，将计算出从 <span class="token number">1</span> 累加到该数值的计算结果2
<span class="token number">1</span>+<span class="token punctuation">..</span>+2 <span class="token operator">=</span> <span class="token number">3</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./cal_1_100-2.sh
请输入一个数值，将计算出从 <span class="token number">1</span> 累加到该数值的计算结果100
<span class="token number">1</span>+<span class="token punctuation">..</span>+100 <span class="token operator">=</span> <span class="token number">5050</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-搭配随机数与数组的实验" tabindex="-1"><a class="header-anchor" href="#🍀-搭配随机数与数组的实验" aria-hidden="true">#</a> 🍀 搭配随机数与数组的实验</h2><p>现在大概已经能够掌握 shell script 了。</p><p>现在来做个有趣的小东西，今天中午吃啥？要完成这个脚本，首先需要将全部的店家输入到一组数组中，再通过随机数的处理，获得可能的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> what_to_eat.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token comment"># 定义你搜集到的店家信息</span>
eat<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;卖当当汉堡&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;肯爷爷炸鸡&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;彩虹日式便当&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;越油越好吃打呀&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;想不出吃什么&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;太师傅便当&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;池上便当&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;怀恋火车便当&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;一起吃泡面&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;太上皇&quot;</span>
<span class="token assign-left variable">eatnum</span><span class="token operator">=</span><span class="token number">10</span>		<span class="token comment"># 一共有几家可用的店铺</span>

<span class="token assign-left variable">check</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>\${RANDOM} <span class="token operator">*</span> \${eatnum} <span class="token operator">/</span> <span class="token number">32767</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;your may eat <span class="token variable">\${eat<span class="token punctuation">[</span>\${check}</span>]}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./what_to_eat.sh
your may eat 太上皇
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./what_to_eat.sh
your may eat 越油越好吃打呀
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./what_to_eat.sh
your may eat 想不出吃什么
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./what_to_eat.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继续深入，一次性输出 3 个选择，并且不能重复</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> what_to_eat-2.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       </span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/02/12              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token comment"># 定义你搜集到的店家信息</span>
eat<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;卖当当汉堡&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;肯爷爷炸鸡&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;彩虹日式便当&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;越油越好吃打呀&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;想不出吃什么&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;太师傅便当&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;池上便当&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;怀恋火车便当&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;一起吃泡面&quot;</span>
eat<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;太上皇&quot;</span>
<span class="token assign-left variable">eatnum</span><span class="token operator">=</span><span class="token number">10</span>		<span class="token comment"># 一共有几家可用的店铺</span>

<span class="token comment"># 其实就是需要轮询出来 3 个不同的索引结果</span>

<span class="token assign-left variable">eated</span><span class="token operator">=</span><span class="token number">0</span>	<span class="token comment"># 已选中数量</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${eated}</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">do</span>
	<span class="token assign-left variable">check</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>\${RANDOM} <span class="token operator">*</span> \${eatnum} <span class="token operator">/</span> <span class="token number">32767</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
	<span class="token assign-left variable">mycheck</span><span class="token operator">=</span><span class="token number">0</span>		<span class="token comment"># 当为 0 时，表示不重复</span>
	<span class="token comment"># 去重检查</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${eated}</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>			<span class="token comment"># 当已选中至少一个店铺的时候，才执行</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token number">1</span> $<span class="token punctuation">{</span>eated<span class="token punctuation">}</span><span class="token variable">)</span></span>
    <span class="token keyword">do</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${eatedcon<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token operator">==</span> <span class="token variable">$check</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">mycheck</span><span class="token operator">=</span><span class="token number">1</span>
      <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
  <span class="token keyword">fi</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${mycheck}</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;your may eat <span class="token variable">\${eat<span class="token punctuation">[</span>\${check}</span>]}&quot;</span>
		<span class="token assign-left variable">eated</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> \${eated} <span class="token operator">+</span> <span class="token number">1</span> <span class="token variable">))</span></span>
		eatedcon<span class="token punctuation">[</span><span class="token variable">\${eated}</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token variable">\${check}</span>		<span class="token comment"># 将已选中结果存储起来</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),p=[l];function i(o,c){return n(),a("div",null,p)}const u=s(t,[["render",i],["__file","05.html.vue"]]);export{u as default};
