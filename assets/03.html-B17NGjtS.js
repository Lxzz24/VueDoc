import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as i,a as n,e as s,b as p,w as o,d as c}from"./app-CvlAI_tu.js";const r={},d=n("h1",{id:"善用判断",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#善用判断","aria-hidden":"true"},"#"),s(" 善用判断")],-1),u=n("code",null,"$?",-1),m=n("code",null,"&& 和 ||",-1),v=c(`<p>在第十章中，判定一个目录是否存在，使用了 <code>ll 目录 &amp;&amp; 执行指令</code> 的方式来判定 xx 目录是否存在，从而决定后续指令是否执行，但是有更简单的方式进行条件判断，就是通过 test 指令</p><h2 id="🍀-使用-test-指令的测试功能" tabindex="-1"><a class="header-anchor" href="#🍀-使用-test-指令的测试功能" aria-hidden="true">#</a> 🍀 使用 test 指令的测试功能</h2><p>test 指令主要用于检测文件或相关属性时的指令和比较值，比如检查 /mrcode 是否存在时</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -e 是检测文件是否存在的选项</span>
<span class="token punctuation">[</span>root@cloud-08 script<span class="token punctuation">]</span><span class="token comment"># test -e /mrcode</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令没有任何输出值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@cloud-08 script<span class="token punctuation">]</span><span class="token comment"># test -e /mrcode &amp;&amp; echo &quot;exist&quot; || &quot;not exist&quot;</span>
exist
<span class="token comment"># 通过与 &amp;&amp; 或 || 可以知道是存在还是不存在了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要善用 man 查看该指令的信息，下面是整理翻译出来的其他选项</p><p>关于某个文件名的 <strong>文件类型</strong> 判断。如 <code>test -e filename</code> 标识是否存在</p><table><thead><tr><th style="text-align:center;">测试的标志</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-e</td><td style="text-align:left;">文件是否存在；<strong>常用</strong></td></tr><tr><td style="text-align:center;">-f</td><td style="text-align:left;">该文件是否存在且为文件（file）？<strong>常用</strong></td></tr><tr><td style="text-align:center;">-d</td><td style="text-align:left;">该文件是否存在且为目录（directory）？<strong>常用</strong></td></tr><tr><td style="text-align:center;">-b</td><td style="text-align:left;">该文件是否存在且为一个 block device 装置？</td></tr><tr><td style="text-align:center;">-c</td><td style="text-align:left;">该文件是否存在且为一个 character device 装置？</td></tr><tr><td style="text-align:center;">-S</td><td style="text-align:left;">该文件是否存在且为一个 Socket 文件？</td></tr><tr><td style="text-align:center;">-p</td><td style="text-align:left;">该文件是否存在且为一个 FIFO（pipe）文件？</td></tr><tr><td style="text-align:center;">-L</td><td style="text-align:left;">该文件是否存在且为一个连接文件？</td></tr></tbody></table><p>关于文件的 <strong>权限</strong> 判定。如 <code>test -r filename</code> 标识是否可读？（但 root 权限常有例外）</p><table><thead><tr><th style="text-align:center;">测试的标志</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-r</td><td style="text-align:left;">该文件是否存在且具有可读权限？</td></tr><tr><td style="text-align:center;">-w</td><td style="text-align:left;">该文件是否存在且具有可写权限？</td></tr><tr><td style="text-align:center;">-x</td><td style="text-align:left;">该文件是否存在且具有可执行权限？</td></tr><tr><td style="text-align:center;">-u</td><td style="text-align:left;">该文件是否存在且具有 SUID 属性？</td></tr><tr><td style="text-align:center;">-g</td><td style="text-align:left;">该文件是否存在且具有 SGID 属性？</td></tr><tr><td style="text-align:center;">-k</td><td style="text-align:left;">该文件是否存在且具有 Sticky bit 属性？</td></tr><tr><td style="text-align:center;">-s</td><td style="text-align:left;">该文件是否存在且为「非空白文件」？</td></tr></tbody></table><p>两个文件之间的比较。如 <code>test file1 -nt file2</code></p><table><thead><tr><th style="text-align:center;">测试的标志</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-nt</td><td style="text-align:left;">（newer than）判断 file1 是否比 file2 新</td></tr><tr><td style="text-align:center;">-ot</td><td style="text-align:left;">（older than）判断 file1 是否比 file2 旧</td></tr><tr><td style="text-align:center;">-ef</td><td style="text-align:left;">判断 file1 与 file2 是否是同一文件，可用在判断 hard link 的判定上。主要意义在判定两个文件是否均指向同一个 inode</td></tr></tbody></table><p>两个整数之间的判定。<code>test nl -eq n2</code></p><table><thead><tr><th style="text-align:center;">测试的标志</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-eq</td><td style="text-align:left;">两数值相等（equal）</td></tr><tr><td style="text-align:center;">-ne</td><td style="text-align:left;">不相等（not equal）</td></tr><tr><td style="text-align:center;">-gt</td><td style="text-align:left;">大于（greater than）</td></tr><tr><td style="text-align:center;">-lt</td><td style="text-align:left;">小于（less than）</td></tr><tr><td style="text-align:center;">-ge</td><td style="text-align:left;">大于等于（greater than or equal）</td></tr><tr><td style="text-align:center;">-le</td><td style="text-align:left;">小于等于（less than or equal）</td></tr></tbody></table><p>判定字符串的数据</p><table><thead><tr><th style="text-align:center;">测试的标志</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">test -z string</td><td style="text-align:left;">判定字符串是否为 0？若为空串，则为 true</td></tr><tr><td style="text-align:center;">test -n string</td><td style="text-align:left;">判定字符串是否不为 0？若为空串，则为 false；注意：-n 可省略</td></tr><tr><td style="text-align:center;">test str1 == str2</td><td style="text-align:left;">是否相等，相等则为 true</td></tr><tr><td style="text-align:center;">test str1 != str2</td><td style="text-align:left;">是否不相等，相等则为 false</td></tr></tbody></table><p>多重条件判断。比如 <code>test -r filename -a -x filename</code></p><table><thead><tr><th style="text-align:center;">测试的标志</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-a</td><td style="text-align:left;">（and）两状况同时成立；如：<code>test -r filename -a -x filename</code>，则 file 同时具有 r 与 x 权限时才为 true</td></tr><tr><td style="text-align:center;">-o</td><td style="text-align:left;">（or）任意一个成立。如：<code>test -r filename -o -x filename</code>，则 file 具有 r 或 x 权限时就为 true</td></tr><tr><td style="text-align:center;">!</td><td style="text-align:left;">反向状态。</td></tr></tbody></table><p>总结完这么多的判定，就可以来写几个简单的例子。让用户输入一个文件名，我们判断：</p><ol><li>该文件是否存在，若不存在则给予一个「Filename does not exist」 提示，并中断程序</li><li>若该文件存在，则判断是文件还是目录：文件输出「Filename is regular file」，目录输出 「Filename is directory」</li><li>判断执行者的身份对这个文件或目录所拥有的权限，并输出权限数据</li></ol><p>下面是笔者写的思路，代码组织方面有点糟糕。还有指令使用不太熟悉</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Program</span>
<span class="token comment"># </span>
<span class="token comment"># History</span>
<span class="token comment">#       2020/01/19              mrcode          first relese</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入一个文件名：&quot;</span> filename
<span class="token comment"># 判断是否输入了字符串</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-z</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;请输入一个有效的文件名！&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token parameter variable">-1</span>

<span class="token comment"># 判断该文件是否存在: 不存在输出提示信息并退出</span>
<span class="token comment"># 特别是这里的多条指令的执行，使用 || 会很难处理，只能转成 true</span>
<span class="token builtin class-name">test</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${filename}</span> does not exist&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token parameter variable">-1</span>

<span class="token comment"># 提示是文件还是目录</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-f</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${filename}</span> is regular file&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${filename}</span> is directory&quot;</span>

<span class="token comment"># 判断执行者的身份对这个文件拥有的权限，并输出</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-r</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${filename}</span> 可读&quot;</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-w</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${filename}</span> 可写&quot;</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-x</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${filename}</span> 可执行&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./file_perm.sh 
请输入一个文件名：ss
ss does not exist
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./file_perm.sh 
请输入一个文件名：/etc
/etc is directory
/etc 可读
/etc 可执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>书上代码如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> file_perm.sh
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program</span>
<span class="token comment">#   User input a filename,program will check the flowing:</span>
<span class="token comment">#	1.) exist?</span>
<span class="token comment">#	2.) file/directory?</span>
<span class="token comment">#	3.) file permissions</span>
<span class="token comment"># History</span>
<span class="token comment">#       2020/01/19              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Please input a filename,I will check the filename&#39;s type and permission. <span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Input a filename ：&quot;</span> filename
<span class="token comment"># 判断是否输入了字符串</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-z</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;You MUST input a filename. &quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># 判断该文件是否存在: 不存在输出提示信息并退出</span>
<span class="token builtin class-name">test</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;The filename <span class="token variable">\${filename}</span> does not exist&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># 开始判断文件类型与属性</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-f</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">filetype</span><span class="token operator">=</span><span class="token string">&quot;regulare file&quot;</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-d</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">filetype</span><span class="token operator">=</span><span class="token string">&quot;directory&quot;</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-r</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">perm</span><span class="token operator">=</span><span class="token string">&quot;readable&quot;</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-w</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">perm</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${perm}</span> writable&quot;</span>
<span class="token builtin class-name">test</span> <span class="token parameter variable">-x</span> <span class="token variable">\${filename}</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">perm</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${perm}</span> executable&quot;</span>

<span class="token comment"># 信息输出</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The filename: <span class="token variable">\${filename}</span> is a <span class="token variable">\${filetype}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;And the permissions for you are : <span class="token variable">\${perm}</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试输出如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./file_perm.sh 
Please input a filename,I will check the filename<span class="token string">&#39;s type and permission. 


Input a filename ：ss
The filename ss does not exist
[mrcode@study bin]$ ./file_perm.sh 
Please input a filename,I will check the filename&#39;</span>s <span class="token builtin class-name">type</span> and permission. 


Input a filename ：/etc
The filename: /etc is a directory
And the permissions <span class="token keyword">for</span> you are <span class="token builtin class-name">:</span> readable executable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自己写的脚本组织来看，除了不熟悉指令用法之外，对于程序结构的抽象不够好，对比书上的，发觉这个代码组织的不错</p><p>另外，该脚本检查权限的指令是针对运行该脚本的用户所反馈的，所以当使用 root 的时候，常常会发现与 ls -l 观察到的结果并不相同</p><h2 id="🍀-利用判断符号" tabindex="-1"><a class="header-anchor" href="#🍀-利用判断符号" aria-hidden="true">#</a> 🍀 利用判断符号 <code>[]</code></h2><p>除了 test 外，还可以使用中括号 <code>[]</code> 来判定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 判断 \${HOME} 这个变量是否为空</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用该种方式需要特别注意，因为中括号在很多地方都代表特殊符号，在 bash 的语法中作为 shell 判断时，必须要注意 <strong>中括号的两端需要有空格符来分隔</strong></p><ul><li>在中括号内的每个组件都需要有空格来分隔</li><li>在中括号内的变量，最好都以双引号括起来</li><li>在中括号内的常量，都好都以单或双引号括起来</li></ul><p>看一个例子，设置一个 name 变量，再用中括号方式判断</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;Mrcode Tset&quot;</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token punctuation">[</span> <span class="token variable">\${name}</span> <span class="token operator">==</span> <span class="token string">&quot;Mrcode&quot;</span> <span class="token punctuation">]</span>
-bash: <span class="token punctuation">[</span>: 参数太多
<span class="token comment"># 是因为，如果 \${name} 没有使用双引号括起来就会变成  [ Mrcode Test  == &quot;Mrcode&quot; ]</span>
<span class="token comment"># 中括号内的变量是以空格来分隔的，那么这里就出现了 Mrcode Test “Mrcode” 三个比较对象了</span>
<span class="token comment"># 那么使用 [ “\${name}” == &quot;Mrcode&quot; ] 就变成了 [ “Mrcode Test”  == &quot;Mrcode&quot; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了以上注意之外，中括号使用方式与 test 几乎一模一样，只是中括号比较常用在 <strong>条件判断 if...then..fi</strong> 的情况中。</p><p>实践范例需求如下：</p><ol><li>当执行一个程序的时候，要求用户选择 Y 或 N</li><li>如果用户输入 Y 或 y 时，就显示「Ok，continue」</li><li>如果用户输入 N 或 n 时，就显示「Oh，interrupt！」</li><li>如果不是以上规定字符，则显示「I don&#39;t know what your choice is」</li></ol><p>利用中括号、<code>&amp;&amp;</code>、<code>||</code> 来达成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> ans_yn.sh
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#	This program shows the user&#39;s choice</span>
<span class="token comment"># History:</span>
<span class="token comment">#	2020/01/20		mrcode		first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入 Y/N：&quot;</span> yn
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;Y&quot;</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;y&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Ok，continue&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;N&quot;</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">\${yn}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;n&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Oh，interrupt！&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I don&#39;t know what your choice is&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这里报错时因为 [ &quot;\${yn}&quot; == &quot;Y&quot; || &quot;\${yn}&quot; == &quot;y&quot; ]  中使用了 || 来达成条件判定</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./ans_yn.sh 
请输入 Y/N：n
./ans_yn.sh: 第 <span class="token number">10</span> 行:<span class="token punctuation">[</span>: 缺少 <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">]</span>&#39;
./ans_yn.sh:行10: n: 未找到命令
./ans_yn.sh: 第 <span class="token number">11</span> 行:<span class="token punctuation">[</span>: 缺少 <span class="token variable">\`</span></span><span class="token punctuation">]</span><span class="token string">&#39;
./ans_yn.sh:行11: n: 未找到命令
I don&#39;</span>t know what your choice is

<span class="token comment"># [ &quot;\${yn}&quot; == &quot;Y&quot; -o &quot;\${yn}&quot; == &quot;y&quot; ] 使用了 test 中的参数， -o 只要任意一个成立都算 true</span>
<span class="token comment"># 程序正常</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token function">vim</span> ans_yn.sh 
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./ans_yn.sh 
请输入 Y/N：n
Oh，interrupt！
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./ans_yn.sh 
请输入 Y/N：y
Ok，continue
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./ans_yn.sh 
请输入 Y/N：
I don&#39;t know what your choice is
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-shell-script-的默认变量-0-1" tabindex="-1"><a class="header-anchor" href="#🍀-shell-script-的默认变量-0-1" aria-hidden="true">#</a> 🍀 shell script 的默认变量 <code>$0,$1...</code></h2><p>指令可以带有选项与参数，如 <code>ls -la</code> 可以查看包含隐藏文件的所有属性。那么 script 也可以携带参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新启动系统的网络</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token function">file</span> /etc/init.d/network 
/etc/init.d/network: Bourne-Again shell script, ASCII text executable
<span class="token comment"># 利用 file 指令查询该文件，显示是个可执行的 shell script 文件</span>

<span class="token comment"># 这里携带 restart 参数，如果替换成 stop 参数就是关闭该服务了</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ /etc/init.d/network restart 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>read 是使用过程中需要手动输入，而参数是可以跟随在执行命令后的，这样就比较方便</p><p>script 针对参数已经设置好一些变量名称了，对应如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/path/to/scriptname		opt1	opt2	opt3	opt4
 		&amp;0				 &amp;1		 &amp;2		 &amp;3		 &amp;4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除了这些数字的变量参数外，还有一些较为特殊的变量可以使用</p><ul><li><code>$#</code>：代表后接的参数「个数」，以上表为例这里显示「4」</li><li><code>$@</code>：代表 「<code>&quot;&amp;1&quot; &quot;&amp;2&quot; &quot;&amp;3&quot; &quot;&amp;4&quot;</code>」 的意思，每个变量是独立的（用双引号括起来）</li><li><code>$*</code>：代表「<code>&quot;&amp;1c&amp;2c&amp;3c&amp;4&quot;</code>」，其中 c 为分隔符，默认为空格，所以本例中代表「<code>&quot;&amp;1 &amp;2 &amp;3 &amp;4&quot;</code>」</li></ul><p><code>$@ 与 $*</code> 基本上还是有所不同，一般使用 <code>$@</code> 较多。</p><p>范例需求：输出如下数据</p><ul><li>程序的文件名</li><li>共有几个参数</li><li>若参数小于 2 ，则告知使用者参数数量太少</li><li>全部的参数内容</li><li>第一个参数</li><li>第二个参数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> prit_info.sh
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       输出脚本文件名，与相关参数信息</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$#</span>
<span class="token comment"># 这样写，语法是错误的，要记得这里是使用 test 里面的语法</span>
<span class="token comment"># 并且，不能用 \${变量} 的方式来写</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${$<span class="token operator">#</span>}</span>&quot;</span> <span class="token operator">&lt;</span> <span class="token string">&quot;2&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;参数数量太少，比如大于等于 2 个&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$@</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./print_info.sh 
./print_info.sh
<span class="token number">0</span>
./print_info.sh:行11: <span class="token number">2</span>: 没有那个文件或目录



<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./print_info.sh a b
./print_info.sh
<span class="token number">2</span>
./print_info.sh:行11: <span class="token number">2</span>: 没有那个文件或目录
a b
a
b

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是书上的写法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> how_paras.sh
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       输出脚本文件名，与相关参数信息</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;The script name is			==&gt; <span class="token variable">$0</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Total parameter number is		==&gt; <span class="token variable">$#</span>&quot;</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$#</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;参数数量太少，比如大于等于 2 个&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your whole parameter is		==&gt; &#39;<span class="token variable">$@</span>&#39;&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The 1st parameter 			==&gt; <span class="token variable">$1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The 2nd parameter 			==&gt; <span class="token variable">$2</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./how_paras.sh 
The script name is			<span class="token operator">==</span><span class="token operator">&gt;</span> ./how_paras.sh
Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">0</span>
参数数量太少，比如大于等于 <span class="token number">2</span> 个

<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./how_paras.sh a b
The script name is			<span class="token operator">==</span><span class="token operator">&gt;</span> ./how_paras.sh
Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">2</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;a b&#39;</span>
The 1st parameter 			<span class="token operator">==</span><span class="token operator">&gt;</span> a
The 2nd parameter 			<span class="token operator">==</span><span class="token operator">&gt;</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-shift-造成参数变量位置偏移" tabindex="-1"><a class="header-anchor" href="#🍀-shift-造成参数变量位置偏移" aria-hidden="true">#</a> 🍀 shift：造成参数变量位置偏移</h2><p>先修改下上面的范例，<code>how_paras.sh</code> 先来看看效果什么是偏移</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> how_paras.sh
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># Program:</span>
<span class="token comment">#       Program shows the effect of shift function</span>
<span class="token comment"># History:</span>
<span class="token comment">#       2020/01/20              mrcode          first relese</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Total parameter number is		==&gt; <span class="token variable">$#</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Your whole parameter is		==&gt; &#39;<span class="token variable">$@</span>&#39; <span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token builtin class-name">shift</span>	<span class="token comment"># 进行第一次 一个变量的 shift</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Total parameter number is		==&gt; <span class="token variable">$#</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Your whole parameter is		==&gt; &#39;<span class="token variable">$@</span>&#39; <span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token builtin class-name">shift</span> <span class="token number">3</span>	<span class="token comment"># 进行第二次 三个变量的 shift</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Total parameter number is		==&gt; <span class="token variable">$#</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your whole parameter is		==&gt; &#39;<span class="token variable">$@</span>&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./how_paras.sh a b c d e f
Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">6</span>		<span class="token comment"># 位偏移的参数数量，是 6 个</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;a b c d e f&#39;</span>

Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">5</span>		<span class="token comment"># 偏移一次后，只剩下 5 个，并且第一个参数 a 不见了</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;b c d e f&#39;</span>

Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">2</span>		<span class="token comment"># 第二次偏移掉 3 个后，b c d 不见了</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;e f&#39;</span>

<span class="token comment"># 再来看看如果参数不够偏移会出现什么情况</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./how_paras.sh a b c	<span class="token comment"># 给 3 个参数</span>
Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">3</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;a b c&#39;</span> 

Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">2</span>		<span class="token comment"># 第一次偏移 1 个，只生效 2 个了</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;b c&#39;</span> 

Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">2</span>		<span class="token comment"># 第二次偏移 3 个，发现没有生效，不够偏移</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;b c&#39;</span>


<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ ./how_paras.sh a b c d		<span class="token comment"># 给 4 个参数</span>
Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">4</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;a b c d&#39;</span> 

Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">3</span>		<span class="token comment"># 第一次偏移 1 个，还剩下 3 个</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;b c d&#39;</span> 

Total parameter number is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">0</span>		<span class="token comment"># 第二次偏移 3 个，剩下 0 个</span>
Your whole parameter is		<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结如下：</p><ul><li>shift 可以忽略掉 n 个参数</li><li>shif 中的 n 必须要有足够的参数才会生效，否则不会偏移</li></ul>`,70);function b(k,h){const a=t("RouterLink");return l(),i("div",null,[d,n("p",null,[s("在 "),p(a,{to:"/99-tools/Linux/10/05.html#%E6%8C%87%E4%BB%A4%E5%9B%9E%E4%BC%A0%E5%80%BC-%E4%B8%8E-%E5%92%8C"},{default:o(()=>[s("第十章")]),_:1}),s(" 中，提到过 "),u,s(" 这个变量所代表的含义，以及通过 "),m,s(" 来判定前一个指令执行回传值对于后一个指令是否要进行的依据。")]),v])}const y=e(r,[["render",b],["__file","03.html.vue"]]);export{y as default};
