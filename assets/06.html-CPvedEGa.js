import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t="/VueDoc/assets/image-20191204232521041-BF81NNrj.png",p={},i=e(`<h1 id="管线命令-pipe" tabindex="-1"><a class="header-anchor" href="#管线命令-pipe" aria-hidden="true">#</a> 管线命令（pipe）</h1><p>bash 命令执行的时候有输出数据，如果这群数据必须经过几道手续之后才能得到我们想要的格式，这就可以使用管线命令（pipe）来完成了</p><p>假设我们想知道 <code>/etc/</code> 下有多少文件，可以使用 <code>ls /etc/</code> 来查询，不过因为文件太多了，输出占满整个屏幕，导致最开始是什么文件看不到了，这就可以通过管线命令结合 less 指令来达成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">|</span> <span class="token function">less</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如此一来， <code>ls -al</code> 指令输出后的内容，能够被 less 读取，并且利用 less 的功能，可以前后翻动相关信息</p><p>管线命令<strong>仅能处理</strong>由前一个指令传来的<strong>正确信息</strong>（standard output），对于 standard error 没有直接处理的能力，整体管线命令可以使用下图表示</p><figure><img src="`+t+`" alt="image-20191204232521041" tabindex="0" loading="lazy"><figcaption>image-20191204232521041</figcaption></figure><p>在每个管线后面接的第一个数据必定是「指令」，而且这个指令必须能接受 standard input 的数据才可以，这样的指令则是「管线命令」，例如 less、more、head、tail 等都是可以接受 standard input 的管线命令。而 ls、cp、mv 等就不是管线命令了，因为他们不不会接受来自 stdin 的数据。管线命令主要有两个比较需要注意的地方：</p><ul><li>管线命令仅会处理 standard output ，对于 standard error output 会忽略</li><li>管线命令必须要能接受来自前一个指令的数据成为 standard input 继续处理才行</li></ul><p>如果硬要 standard error 可以被管线命令所使用可以使用如下方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>   让标准错误输出转成标准输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么下面来玩一些管线命令，以下知识点对系统管理费用有用</p><h2 id="🍀-截取命令-cut、grep" tabindex="-1"><a class="header-anchor" href="#🍀-截取命令-cut、grep" aria-hidden="true">#</a> 🍀 截取命令 cut、grep</h2><p>简单说：将一段时间经过分析后，取出我们想要的。或则是经过由分析关键词，取得我们所想要的那一行。一般来说，截取信息通常是针对一行一行来分析的。</p><h3 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;分割字符&#39;</span> <span class="token parameter variable">-f</span> fields  <span class="token comment"># 用于有特定分割字符</span>
<span class="token function">cut</span> <span class="token parameter variable">-c</span> 字符区间							 <span class="token comment"># 用于排列整齐的信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>d：后面接分割字符。与 <code>-f</code> 一起使用</li><li>f：依据 -d 的分割字符将一段信息分区成数段，用 -f 取出第几段的意思</li><li>c：以字符（characters）的单位取出固定字符区间</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：将 PATH 变量取出，我要找出第 5 个路径</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
/usr/lib64/qt-3.3/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/mrcode/.local/bin:/home/mrcode/bin
<span class="token comment"># 数量是从 1 开始，不是从 0 哟</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PATH</span>}</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">5</span>
/usr/sbin

<span class="token comment"># 取出第 5 个和第 6 个</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PATH</span>}</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">5,6</span>
/usr/sbin:/home/mrcode/.local/bin


<span class="token comment"># 范例 2 ：将 export 输出的信息，取得第 12 字符以后的所有字符串</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">export</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-x</span> <span class="token assign-left variable"><span class="token environment constant">HISTCONTROL</span></span><span class="token operator">=</span><span class="token string">&quot;ignoredups&quot;</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-x</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token string">&quot;1000&quot;</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-x</span> <span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span><span class="token string">&quot;/home/mrcode&quot;</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-x</span> <span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span><span class="token string">&quot;study.centos.mrcode&quot;</span>
<span class="token punctuation">..</span>.

<span class="token comment"># 以上数据每个都是排列整齐的，有着 declare -x 前缀</span>
<span class="token comment"># 那么想要把前缀去掉，就可以这样做</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">export</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">12</span>-
<span class="token assign-left variable"><span class="token environment constant">HISTCONTROL</span></span><span class="token operator">=</span><span class="token string">&quot;ignoredups&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token string">&quot;1000&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span><span class="token string">&quot;/home/mrcode&quot;</span>
<span class="token comment"># 使用 12-15 则是截取出这个区间的字符</span>
<span class="token comment"># 使用 12 则只截取 12 这个字符</span>

<span class="token comment"># 范例 3 ：用 last 将显示的登陆者信息，仅留下用户名</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last
<span class="token comment"># 账户 		终端机					登录 IP					日期时间						</span>
mrcode   pts/1        <span class="token number">192.168</span>.0.105    Mon Dec  <span class="token number">2</span> 01:25   still logged <span class="token keyword">in</span>   
mrcode   pts/0        <span class="token number">192.168</span>.0.105    Mon Dec  <span class="token number">2</span> 01:25   still logged <span class="token keyword">in</span>   
mrcode   pts/1        <span class="token number">192.168</span>.0.105    Mon Dec  <span class="token number">2</span> 00:21 - 01:12  <span class="token punctuation">(</span>00:51<span class="token punctuation">)</span>  
<span class="token comment"># 用空格分隔的数据，那么可以这样做</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>
mrcode
mrcode
mrcode
<span class="token comment"># 其实 账户和终端机之间的空格有好几个，并不是一个所以使用下面的命令并不能把 终端机一列也提取出来</span>
last <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1,2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cut 主要的用途：将同一行里面的数据进行分解</p><p>常使用在分析一些数据或文字数据的时候，因为有时候会以某些字符当做分区的参数，然后将数据切割，以取得我们所需要的数据，作者常常在分析 log 文件的时候，但是 cut 在处理多空格相连的数据时，就比较麻烦，所以某些常见可能需要使用下一章节要讲解的 awk 来取代</p><h3 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h3><p>cut 是将一行信息中，取出某部分我们想要的数据，而 grep 则是分析一堆信息，若一行当中有匹配的数据，则将这一行数据拿出来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>-acinv<span class="token punctuation">]</span> <span class="token punctuation">[</span>--color<span class="token operator">=</span>auto<span class="token punctuation">]</span> <span class="token string">&#39;搜索的字符串&#39;</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>a：将 binary 文件以 text 文件的方式搜索数据</li><li>c：计算找到「搜索字符」的次数</li><li>i：忽略大小写</li><li>n：输出行号</li><li>v：反向选择，显示出没有搜索字符串的那一行数据</li><li><code>--color</code>：可以将找到的关键词部分加上颜色显示</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：将 last 中，有出现 root 的那一行找出来</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;root&#39;</span>
root     tty3                          Sun Oct  <span class="token number">6</span> <span class="token number">23</span>:16 - crash  <span class="token punctuation">(</span><span class="token number">22</span>:40<span class="token punctuation">)</span>    
root     tty4                          Fri Oct  <span class="token number">4</span> <span class="token number">22</span>:48 - <span class="token number">22</span>:48  <span class="token punctuation">(</span>00:00<span class="token punctuation">)</span>  
<span class="token comment"># 会发现 root 被高亮颜色了，我们时候 type 命令查看，发现被自动加上了 color 参数</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">type</span> <span class="token function">grep</span>
<span class="token function">grep</span> is aliased to <span class="token string">&#39;grep --color=auto&#39;</span>

<span class="token comment"># 范例 2：与 范例 1 相反，不要 root 的数据</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;root&#39;</span>
mrcode   pts/1        <span class="token number">192.168</span>.0.105    Mon Dec  <span class="token number">2</span> 01:25   still logged <span class="token keyword">in</span>   
mrcode   pts/0        <span class="token number">192.168</span>.0.105    Mon Dec  <span class="token number">2</span> 01:25   still logged <span class="token keyword">in</span>   
mrcode   pts/1        <span class="token number">192.168</span>.0.105    Mon Dec  <span class="token number">2</span> 00:21 - 01:12  <span class="token punctuation">(</span>00:51<span class="token punctuation">)</span>
<span class="token function">reboot</span>   system boot  <span class="token number">3.10</span>.0-1062.el7. Fri Oct  <span class="token number">4</span> <span class="token number">18</span>:47 - 03:43  <span class="token punctuation">(</span>08:56<span class="token punctuation">)</span>

<span class="token comment"># 范例 3：在 last 的输出信息中，只要有 root 就取出，并且只取第一栏</span>
<span class="token comment"># 结合 cut 命令取出第一栏</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;root&#39;</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>
root
root

<span class="token comment"># 范例 4：取出 /etc/man_db.conf 内涵 MANPATH 的那几行</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">grep</span> <span class="token string">&#39;MANPATH&#39;</span> /etc/man_db.conf
<span class="token comment"># MANDATORY_MANPATH                     manpath_element</span>
<span class="token comment"># MANPATH_MAP           path_element    manpath_element</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>grep 支持的语法很多，用在正规表示法里，能够处理的数据太多。但是这里先不了解正规表示法，下一章再来讲解</p><p>这里只需要了解下，grep 可以解析一行文字，取得关键词，若改行有存在关键词，就会整行取出来</p><h2 id="🍀-排序命令-sort、wc、uniq" tabindex="-1"><a class="header-anchor" href="#🍀-排序命令-sort、wc、uniq" aria-hidden="true">#</a> 🍀 排序命令：sort、wc、uniq</h2><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h3><p>可以依据不同的数据形态来排序。例如数字与文字的排序不一样，另外，排序的字符与语系的编码有关，因此，如果需要排序时，建议使用 LANG=C 来让语系统一，数据排序比较好一些</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token punctuation">[</span>-fbMnrtuk<span class="token punctuation">]</span> <span class="token punctuation">[</span>file or stdin<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>f：忽略大小写的差异</li><li>b：忽略最前面的空格符</li><li>M：以月份的名字来排序，例如 JAN、DEC 等排序方法</li><li>n：使用纯数字进行排序，默认是以文字形态来排序</li><li>r：反向排序</li><li>u：uniq，相同的数据中，仅出现一行代表，也就是去重</li><li>t：分隔符，预设使用 「tab」来分割</li><li>k：以那个区间（field）来进行排序</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：个人账户都记录在 /etc/passwd 下，将账户进行排序</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">sort</span>
abrt:x:173:173::/etc/abrt:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
avahi:x:70:70:Avahi mDNS/DNS-SD Stack:/var/run/avahi-daemon:/sbin/nologin
bin:x:1:1:bin:/bin:/sbin/nologin
chrony:x:993:990::/var/lib/chrony:/sbin/nologin
<span class="token comment"># 可以看到按字符排序了</span>

<span class="token comment"># 范例 2：/etc/passwd 内容是以 : 来分割的，想使用第三栏进行排序</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-t</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-k</span> <span class="token number">3</span>
root:x:0:0:root:/root:/bin/bash
mrcode:x:1000:1000:mrcode:/home/mrcode:/bin/bash
qemu:x:107:107:qemu user:/:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
<span class="token comment"># 第三栏是数字，但是这里并没有按数字大小来排序，因为默认使用文字排序</span>
<span class="token comment"># 与数值大小进行排序</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-t</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-k</span> <span class="token number">3</span> <span class="token parameter variable">-n</span>
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin

<span class="token comment"># 范例 3：利用 last ，将输出的数据仅取账户，并排序</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">sort</span>

mrcode
mrcode

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq" aria-hidden="true">#</a> uniq</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uniq</span> <span class="token punctuation">[</span>-ic<span class="token punctuation">]</span>
- i：忽略大小写
- c：进行计数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1： 使用 last 将账户列出，仅取出账户，排序后去重</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span>

mrcode
<span class="token function">reboot</span>
root
wtmp

<span class="token comment"># 范例 2：以上题，统计每个账户登录的总次数</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
      <span class="token number">1</span>
    <span class="token number">136</span> mrcode
     <span class="token number">19</span> <span class="token function">reboot</span>
      <span class="token number">2</span> root
      <span class="token number">1</span> wtmp

<span class="token comment"># 第一行和 wtmp 是 last 的默认字符，可以忽略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wc" tabindex="-1"><a class="header-anchor" href="#wc" aria-hidden="true">#</a> wc</h3><p>wc 可以计算输出的信息。比如：/etc/man_db.conf 这个文件里面有多少字？多少行？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wc</span> <span class="token punctuation">[</span>-lwm<span class="token punctuation">]</span>

-l：仅列出行
-w：仅列出多少字（英文单字）
-m：多少字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：/etc/man_db.conf 这个文件里面有多少字</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span>  /etc/man_db.conf <span class="token operator">|</span> <span class="token function">wc</span>
	   行     字数	   字符数
    <span class="token number">131</span>     <span class="token number">723</span>    <span class="token number">5171</span>

<span class="token comment"># 范例 2：last 可以输出登陆者，但是 last 最后两行并非账户内容，那么该如何以一行指令取得登录系统的总人次？</span>
last <span class="token operator">|</span> <span class="token function">grep</span> <span class="token punctuation">[</span>a-zA-Z<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;wtmp&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;reboot&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;unknown&#39;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
<span class="token number">138</span>
<span class="token comment"># grep 正则匹配，排除了非英文字符的账户</span>
<span class="token comment"># grep -v 反向选择，相当于排除了指定的账户</span>
<span class="token comment"># 最后使用 wc 统计行数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-双向重导向-tee" tabindex="-1"><a class="header-anchor" href="#🍀-双向重导向-tee" aria-hidden="true">#</a> 🍀 双向重导向：tee</h2><p>前一节讲解到 &gt; 会将数据流整个栓送给文件或装置，因此除非去读取该文件或装置，那么如果想要将整个暑假流的处理过程中将某段信息存下来该怎么做？就可以使用 tree</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Standard input   ------<span class="token operator">&gt;</span> <span class="token function">tee</span> --------<span class="token operator">&gt;</span> Screen
												  ↓
												 <span class="token function">file</span>
<span class="token comment"># 流程如上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tee 会同时将数据流分送到文件与屏幕，而输出到屏幕的其实就是 stdout，那么就可以让指令继续处理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tee</span> <span class="token punctuation">[</span>-a<span class="token punctuation">]</span> <span class="token function">file</span>
- a：以累加（append）的方式，将数据加入 <span class="token function">file</span> 中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 last 内容输出到 last.list 文件中，并继续处理</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">tee</span> last.list <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>

<span class="token comment"># 将 ls 数据存一分到 ~/homefile 同时屏幕也输出信息</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /home/ <span class="token operator">|</span> <span class="token function">tee</span> ~/hoefile <span class="token operator">|</span> <span class="token function">more</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-字符转换命令-tr、col、join、paste、expand" tabindex="-1"><a class="header-anchor" href="#🍀-字符转换命令-tr、col、join、paste、expand" aria-hidden="true">#</a> 🍀 字符转换命令：tr、col、join、paste、expand</h2><p>在 vim 程序编辑器中提到过 DOS 换行符与 Unix 不一样，并且可以使用 dos2unix 与 unix2dos 来完成转换。</p><p>那么思考下，是否还有其他的字符转换命令，比如：将大写改成小写、将数据中的 tab 转成空格、如何将两篇信息整合成一篇？</p><h3 id="tr-正则替换或删除字符" tabindex="-1"><a class="header-anchor" href="#tr-正则替换或删除字符" aria-hidden="true">#</a> tr：正则替换或删除字符</h3><p>tr 可以用来删除一段信息中的文字，或则是进行文字信息的替换</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tr</span> <span class="token punctuation">[</span>-ds<span class="token punctuation">]</span> SET1 <span class="token punctuation">..</span>.

-d：删除信息当中的 SET1 这个字符串
-s：替换重复的字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：将 last 输出的信息中，原有的小写变成大写字符</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;[a-z]&#39;</span> <span class="token string">&#39;[A-Z]&#39;</span>
MRCODE   PTS/1        <span class="token number">192.168</span>.0.105    MON DEC  <span class="token number">2</span> 07:00   STILL LOGGED IN

<span class="token comment"># 范例 2：将 /etc/passwd 输出的信息中，将冒号 : 删除</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span>
rootx00root/root/bin/bash

<span class="token comment"># 范例 3：将 /etc/passwd 转成 dos 换行到 ~/passwd 中，再将 ^M 符号删除</span>
<span class="token comment"># 由于我这里没有安装 unix2dos 这里无法实际演示</span>
<span class="token function">cp</span> /etc/passwd ~/passwd <span class="token operator">&amp;&amp;</span> unix2dos ~/passwd
<span class="token function">file</span> /etc/passwd ~/passwd
<span class="token function">cat</span> ~/passwd <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\r&#39;</span> <span class="token operator">&gt;</span> ~/passwd.linux
<span class="token comment"># \\r 是 dos 的换行符</span>
ll /etc/passwd ~/passwd*
<span class="token comment"># 就会发现处理之后和源文件一样大小了</span>
<span class="token comment"># 本例子是：将 unix 转成 dos，/n 转成了 /r/n ，然后使用 tr 命令将 /r 删除了，相当于又还原了</span>

<span class="token comment">#那么经过上面的分析之后，其实转换程序就是转换了换行符，那么可以利用 tr 手动来完成转换</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cp</span> /etc/passwd ~/passwd
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">file</span> /etc/passwd ~/passwd
/etc/passwd:         ASCII text
/home/mrcode/passwd: ASCII text
<span class="token comment"># 将 unix 换行符 \\n 替换成 dos 换行符 \\r\\n</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> <span class="token function">passwd</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;\\n&#39;</span> <span class="token string">&#39;\\r\\n&#39;</span> <span class="token operator">&gt;</span> passwd.dos
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">file</span> passwd*
passwd:     ASCII text
passwd.dos: ASCII text, with CR line terminators		<span class="token comment"># 可以看到已经变了</span>
<span class="token comment"># 再将 \\r 删掉</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> <span class="token function">passwd</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\r&#39;</span> <span class="token operator">&gt;</span> passwd.linux
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">file</span> passwd*
passwd:       ASCII text
passwd.dos:   ASCII text, with CR line terminators
passwd.linux: ASCII text

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该指令也可以写在正规表示法里面，因为他也是由正规表示法的方式来取代数据的，比如上面使用 <code>[]</code> 来设置字符，通常用来取代文件中的怪异符号。</p><h3 id="col-将-tab-转换成对等的空格" tabindex="-1"><a class="header-anchor" href="#col-将-tab-转换成对等的空格" aria-hidden="true">#</a> col：将 tab 转换成对等的空格</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>col <span class="token punctuation">[</span>-xb<span class="token punctuation">]</span>

-x:将 tab 键转换成对等的空格键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 ： 利用 cat -A 显示出所有的特殊按键，最后以 col 将 tab 转成空白</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> <span class="token parameter variable">-A</span> /etc/man_db.conf
MANDATORY_MANPATH^I^I^Imanpath_element$		<span class="token comment"># ^I 的符号就是 tab</span>

<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/man_db.conf <span class="token operator">|</span> col <span class="token parameter variable">-x</span> <span class="token operator">|</span> <span class="token function">cat</span> <span class="token parameter variable">-A</span> <span class="token operator">|</span> <span class="token function">more</span>
MANDATORY_MANPATH                      /usr/src/pvm3/man$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然 col 有特殊的用途，但是很多时候可以用来简单的将 tab 取代为空格键，并且可以取代会对等宽度的空格</p><h3 id="join-合并两个文件中相同行的数据" tabindex="-1"><a class="header-anchor" href="#join-合并两个文件中相同行的数据" aria-hidden="true">#</a> join：合并两个文件中相同行的数据</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">join</span> <span class="token punctuation">[</span>-ti12<span class="token punctuation">]</span> file1 file2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>t：join 默认以空格符分割数据，并且比对「第一个字段」的数据，如果两个文件相同，则将两笔数据连城一行，且第一个字段放在第一个</li><li>i：忽略大小写</li><li>1：数值 1，代表「第一个文件要用哪个字段来分析」</li><li>2：数值 2，代表「第二个文件要用哪个字段来分析」</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：用 root 身份，将 /etc/passwd 与 /etc/shadow 相关数据整合成一栏</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># head -n 3 /etc/passwd /etc/shadow</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> /etc/passwd <span class="token operator">&lt;=</span><span class="token operator">=</span>
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin

<span class="token operator">==</span><span class="token operator">&gt;</span> /etc/shadow <span class="token operator">&lt;=</span><span class="token operator">=</span>
root:<span class="token variable">$6</span><span class="token variable">$oTg</span>/fYGfv9/GIl6h<span class="token variable">$UEcmYlRZacV757rHtXlvmu5xH5TWGfqd3eDOEotB3CAc5mcW5UEoMTSg0pDICd</span>/sYGrEScsHQY9tYZY0FGkKS1::0:99999:7:::
bin:*:17834:0:99999:7:::
daemon:*:17834:0:99999:7:::
<span class="token comment"># 输出的信息来看，最左边的的账户有相同的账户，且以 : 分割</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># join -t &#39;:&#39; /etc/passwd /etc/shadow | head -n 3</span>
<span class="token comment"># 看到了吗，作用就是将某个字段的数据合并成一段</span>
root:x:0:0:root:/root:/bin/bash:<span class="token variable">$6</span><span class="token variable">$oTg</span>/fYGfv9/GIl6h<span class="token variable">$UEcmYlRZacV757rHtXlvmu5xH5TWGfqd3eDOEotB3CAc5mcW5UEoMTSg0pDICd</span>/sYGrEScsHQY9tYZY0FGkKS1::0:99999:7:::
bin:x:1:1:bin:/bin:/sbin/nologin:*:17834:0:99999:7:::
daemon:x:2:2:daemon:/sbin:/sbin/nologin:*:17834:0:99999:7:::

<span class="token comment"># 范例 2：/etc/passwd 第四个字段是 GID，/etc.group 的第三个字段是 GID ,那么如何将两个文件合并？</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># head -n 3 /etc/passwd /etc/group</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> /etc/passwd <span class="token operator">&lt;=</span><span class="token operator">=</span>
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin

<span class="token operator">==</span><span class="token operator">&gt;</span> /etc/group <span class="token operator">&lt;=</span><span class="token operator">=</span>
root:x:0:
bin:x:1:
daemon:x:2:

<span class="token comment"># 下面两种写法一致</span>
<span class="token function">join</span> <span class="token parameter variable">-t</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-1</span> <span class="token number">4</span> <span class="token parameter variable">-2</span> <span class="token number">3</span> /etc/passwd /etc/group <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3</span>
<span class="token function">join</span> <span class="token parameter variable">-t</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-1</span> <span class="token number">4</span> /etc/passwd <span class="token parameter variable">-2</span> <span class="token number">3</span> /etc/group <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span>
<span class="token comment"># 报错了，提示没有排序过，所以在使用时要先对内容排序，这样才能合并两行数据</span>
join: /etc/passwd:6: is not sorted: sync:x:5:0:sync:/sbin:/bin/sync
join: /etc/group:11: is not sorted: wheel:x:10:mrcode
<span class="token comment"># 看下面被整合的内容</span>
<span class="token number">0</span>:root:x:0:root:/root:/bin/bash:root:x:
<span class="token number">1</span>:bin:x:1:bin:/bin:/sbin/nologin:bin:x:
<span class="token number">2</span>:daemon:x:2:daemon:/sbin:/sbin/nologin:daemon:x:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="paste-将两行贴在一起" tabindex="-1"><a class="header-anchor" href="#paste-将两行贴在一起" aria-hidden="true">#</a> paste：将两行贴在一起</h3><p>将两行贴在一起，且中间以 tab 隔开</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">paste</span> <span class="token punctuation">[</span>-d<span class="token punctuation">]</span> file1 file2

-d：后面可以接分割符。默认以 tab 来分割
- ：如果 <span class="token function">file</span> 部分写成 -，表示来自 standard input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：用 root 身份，将 /etc/passwd 与 /etc/shadow 同一行贴在一起</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># paste /etc/passwd /etc/shadow | head -n 3</span>
root:x:0:0:root:/root:/bin/bash root:<span class="token variable">$6</span><span class="token variable">$oTg</span>/fYGfv9/GIl6h<span class="token variable">$UEcmYlRZacV757rHtXlvmu5xH5TWGfqd3eDOEotB3CAc5mcW5UEoMTSg0pDICd</span>/sYGrEScsHQY9tYZY0FGkKS1::0:99999:7:::
bin:x:1:1:bin:/bin:/sbin/nologin        bin:*:17834:0:99999:7:::
daemon:x:2:2:daemon:/sbin:/sbin/nologin daemon:*:17834:0:99999:7:::

<span class="token comment"># 范例 2：先将 /etc/group 用 cat 读出，然后与范例 1 贴在一起，且仅取出前三行</span>
<span class="token comment"># paset 文件部分可以是多个，这里最后一个文件使用了 -，也就是 cat /cat/etc/group</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/group | paste /etc/passwd /etc/shadow - | head -n 3</span>
root:x:0:0:root:/root:/bin/bash root:<span class="token variable">$6</span><span class="token variable">$oTg</span>/fYGfv9/GIl6h<span class="token variable">$UEcmYlRZacV757rHtXlvmu5xH5TWGfqd3eDOEotB3CAc5mcW5UEoMTSg0pDICd</span>/sYGrEScsHQY9tYZY0FGkKS1::0:99999:7:::       root:x:0:
bin:x:1:1:bin:/bin:/sbin/nologin        bin:*:17834:0:99999:7:::        bin:x:1:
daemon:x:2:2:daemon:/sbin:/sbin/nologin daemon:*:17834:0:99999:7:::     daemon:x:2:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="expand-将-tab-转成空格" tabindex="-1"><a class="header-anchor" href="#expand-将-tab-转成空格" aria-hidden="true">#</a> expand：将 tab 转成空格</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">expand</span> <span class="token punctuation">[</span>-t<span class="token punctuation">]</span> <span class="token function">file</span>

-t：后面可以接数字。一般来说，一个 tab 可以用 <span class="token number">8</span> 个空格取代，这里自定义几个空格取代
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：将 /etc/man_db.conf 内行首为 MANPATH 的字样取出，仅取前三行</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;^MANPATH&#39; /etc/man_db.conf | head -n 3</span>
MANPATH_MAP     /bin                    /usr/share/man
MANPATH_MAP     /usr/bin                /usr/share/man
MANPATH_MAP     /sbin                   /usr/share/man
<span class="token comment"># 行首正则为 ^,下接讲解</span>

<span class="token comment"># 范例 2：承上，将所有的符号都列出来</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;^MANPATH&#39; /etc/man_db.conf | head -n 3 | cat -A</span>
MANPATH_MAP^I/bin^I^I^I/usr/share/man$
MANPATH_MAP^I/usr/bin^I^I/usr/share/man$
MANPATH_MAP^I/sbin^I^I^I/usr/share/man$
<span class="token comment"># ^I 是 tab</span>

<span class="token comment"># 范例 3：承上，将 tab 转成 6 个空格</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;^MANPATH&#39; /etc/man_db.conf | head -n 3 | expand -t 6 | cat -A</span>
MANPATH_MAP /bin              /usr/share/man$
MANPATH_MAP /usr/bin          /usr/share/man$
MANPATH_MAP /sbin             /usr/share/man$
<span class="token comment"># 可以看到 tab 被替换成空格了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有一个需要特别注意：tab 最大功能就是格式排列整齐，但是换成空格之后，就不一定是排列整齐的了，也可以参考一下 unexpand 这个将空白转成 tab 的指令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;^MANPATH&#39; /etc/man_db.conf | head -n 3 | expand -t 6 | unexpand -t 6 | cat -A</span>
MANPATH_MAP /bin^I^I^I/usr/share/man$
MANPATH_MAP /usr/bin^I^I/usr/share/man$
MANPATH_MAP /sbin^I^I^I/usr/share/man$
<span class="token comment"># 可以看到，范例 3 的还可以被 unexpand 给转换回来</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-分区命令-split" tabindex="-1"><a class="header-anchor" href="#🍀-分区命令-split" aria-hidden="true">#</a> 🍀 分区命令：split</h2><p>split 可以分割文件，按文件大小或行数来分割</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">split</span> <span class="token punctuation">[</span>-bl<span class="token punctuation">]</span> <span class="token function">file</span> PREFIX

-b：后面可接要分区的大小，可加单位，如 b、k、m 等
-l：以行数进行分区

PREFIX：表示分区文件命名前缀
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：/etc/services 有 600 多 k，若想要分成 300k 一个文件</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> /tmp<span class="token punctuation">;</span> <span class="token function">split</span> <span class="token parameter variable">-b</span> 300k /etc/services servers
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ ll servers*
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">307200</span> Dec  <span class="token number">2</span> 09:53 serversaa
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">307200</span> Dec  <span class="token number">2</span> 09:53 serversab
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode  <span class="token number">55893</span> Dec  <span class="token number">2</span> 09:53 serversac

<span class="token comment"># 范例 2：如何将上面三个文件合成一个文件？</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> serversa* <span class="token operator">&gt;</span> servicesback
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ ll serv*
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">307200</span> Dec  <span class="token number">2</span> 09:53 serversaa
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">307200</span> Dec  <span class="token number">2</span> 09:53 serversab
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode  <span class="token number">55893</span> Dec  <span class="token number">2</span> 09:53 serversac
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">670293</span> Dec  <span class="token number">2</span> 09:54 servicesback

<span class="token comment"># 范例 3：使用 ls -al / 输出的信息中，每 10 行记录成一个文件</span>
<span class="token comment"># 这里文件使用了 - ，表示使用标准输入，前面讲过的</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> / <span class="token operator">|</span> <span class="token function">split</span> <span class="token parameter variable">-l</span> <span class="token number">10</span> - lsroot
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ ll lsroot*
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">456</span> Dec  <span class="token number">2</span> 09:57 lsrootaa
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">523</span> Dec  <span class="token number">2</span> 09:57 lsrootab
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">192</span> Dec  <span class="token number">2</span> 09:57 lsrootac
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">wc</span> <span class="token parameter variable">-l</span> lsroot*
  <span class="token number">10</span> lsrootaa
  <span class="token number">10</span> lsrootab
   <span class="token number">4</span> lsrootac
  <span class="token number">24</span> total
<span class="token comment"># - 一般用在，指令 stdout/stdin 时，但偏偏又没有文件，就用 - 来表示 stdout/stdin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-参数代换-xargs" tabindex="-1"><a class="header-anchor" href="#🍀-参数代换-xargs" aria-hidden="true">#</a> 🍀 参数代换：xargs</h2><p>产生某个指令的参数。xargs 可以读入 stdin 的数据，并且以空格符或换行符号作为分辨，将 stdin 的数据分割成为 arguments。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">xargs</span> <span class="token punctuation">[</span>-0epn<span class="token punctuation">]</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>0：数值 0，如果输入的 stdin 含有特殊字符，例如 \`、\\、空格等时，可以将他转义为一个普通字符</li><li>e：EOF（end of file）。后面可以接一个字符串，当 xargs 分析到这个字符串时，会停止继续工作；注意：<code>-e&#39;sync&#39;</code> 选项与后面的 eof 字符中间没有空格</li><li>p：在执行每个指令的 argument 时，都会询问使用者</li><li>n：后面接次数，每次 command 指令执行时，要使用几个参数</li></ul><p>当 xargs 后面没有接任何指令时，默认是以 echo 来进行输出的</p><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：将 /etc/passwd 内第一栏取出，仅取三行，使用 id 这个指令将每个账户内容秀出来</span>
<span class="token comment"># id 可以查询用户的 UID/GID 等信息</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">id</span> root
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

<span class="token comment"># 通过之前的指令把前三行的第一栏用户名提取出来</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>
root
bin
daemon

<span class="token comment"># 通过 $(cmd) 可以预先取得参数，但可惜的时候，id 这个指令只能接收一个参数，导致报错了</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">id</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span><span class="token variable">)</span></span>
id: extra operand ‘bin’
Try <span class="token string">&#39;id --help&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information.

<span class="token comment"># 因为 ID 不是管线命令，管线前的输出都没有用，相当于只输出了 id 的内容</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">(</span>mrcode<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">(</span>mrcode<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">(</span>mrcode<span class="token punctuation">)</span>,10<span class="token punctuation">(</span>wheel<span class="token punctuation">)</span> <span class="token assign-left variable">context</span><span class="token operator">=</span>unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023

<span class="token comment"># xargs 将 3 个账户处理后给 id，一样的会报错</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">id</span>
id: extra operand ‘bin’
Try <span class="token string">&#39;id --help&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information.

<span class="token comment"># 通过 -n 来指定每次指令命令使用几个参数</span>
<span class="token comment"># 因为前面输出是三行，在 xargs 中会被当成 3 个参数</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token function">id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">(</span>daemon<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">(</span>daemon<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">(</span>daemon<span class="token punctuation">)</span>

<span class="token comment"># 范例 2：同上，但是每次执行 id 时，都要询问使用者是否动作</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">-p</span> <span class="token function">id</span>
<span class="token function">id</span> root ?<span class="token punctuation">..</span>.			<span class="token comment"># 这里没有输入 y 被判定为不执行了</span>
<span class="token function">id</span> bin ?<span class="token punctuation">..</span>.y
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span>
<span class="token function">id</span> daemon ?<span class="token punctuation">..</span>.

<span class="token comment"># 范例 3：将所有的 /etc/passwd 内的账户都以 id 查询，但差到 sync 就结束指令串</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">xargs</span> -e<span class="token string">&#39;sync&#39;</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token function">id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">(</span>bin<span class="token punctuation">)</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">(</span>daemon<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">(</span>daemon<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">(</span>daemon<span class="token punctuation">)</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">(</span>adm<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">(</span>adm<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">(</span>adm<span class="token punctuation">)</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">(</span>lp<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">(</span>lp<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">(</span>lp<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xargs 是一个非常好用的指令，一般使用它的原因是，很多指令其实并不支持管线命令，因此可以通过 xargs 来提供该指令引用 standard input 。如果还不太明白，下面在来看一个例子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 4：找出 /usr/sbin 下具有特殊权限的文件名，并使用 ls -l 列出详细属性</span>
<span class="token comment"># 但是 ls 不是管线命令</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">find</span> /usr/bin/ <span class="token parameter variable">-perm</span> /7000 <span class="token operator">|</span> <span class="token function">ls</span>
<span class="token comment"># 可以使用 $(cmd) 语法</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> /usr/bin/ <span class="token parameter variable">-perm</span> /7000<span class="token variable">)</span></span>

<span class="token comment"># 使用 xargs</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">find</span> /usr/bin/ <span class="token parameter variable">-perm</span> /7000 <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
-r-xr-sr-x. <span class="token number">1</span> root <span class="token function">tty</span> <span class="token number">15344</span> Jun <span class="token number">10</span>  <span class="token number">2014</span> /usr/bin/wall
-rwsr-xr-x. <span class="token number">1</span> root root <span class="token number">32096</span> Oct <span class="token number">31</span>  <span class="token number">2018</span> /usr/bin/fusermount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-关于减号-的用途" tabindex="-1"><a class="header-anchor" href="#🍀-关于减号-的用途" aria-hidden="true">#</a> 🍀 关于减号 <code>-</code> 的用途</h2><p>管线命令在 bash 的连续的处理程序中是相当重要的。另外，在 log file 的分析中也是很重要的一环。</p><p>另外，在管线命令中，常常会使用到前一个指令的 stdout 作为这次的 stdin，某些指令需要用到文件名（例如 tar）来进行处理时，该 stdin 与 stdout 可以利用减号 <code>-</code>来替代</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 /home 里的文件打包，但打包的数据不是记录到文件，而是传送到 stdout</span>
<span class="token comment"># 经过管线后，将 tar -cvf - /home 传送给后面的 tar -xvf - ，</span>
<span class="token comment"># 这里的 - 就是取用前一个指令的 stdout</span>
<span class="token function">mkdir</span> /tmp/homeback
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-cvf</span> - /home/ <span class="token operator">|</span> <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> - <span class="token parameter variable">-C</span> /tmp/homeback/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,93),l=[i];function o(c,r){return s(),a("div",null,l)}const m=n(p,[["render",o],["__file","06.html.vue"]]);export{m as default};
