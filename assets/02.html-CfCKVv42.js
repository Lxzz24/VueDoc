import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t={},c=e(`<h1 id="使用传统程序语言进行编译的简单范例" tabindex="-1"><a class="header-anchor" href="#使用传统程序语言进行编译的简单范例" aria-hidden="true">#</a> 使用传统程序语言进行编译的简单范例</h1><p>通过上面的介绍之后，差不多能清楚一点概念了，本章以一个简单的程序范例来说明整个编译的过程</p><h2 id="🍀-单一程序-打印-hello-world" tabindex="-1"><a class="header-anchor" href="#🍀-单一程序-打印-hello-world" aria-hidden="true">#</a> 🍀 单一程序：打印 Hello World</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请确保你的 Linux 已经安装了 gcc，如果没有安装先参考后续章节的 RPM 或则 yum 方式安装</p></div><h3 id="编写程序代码" tabindex="-1"><a class="header-anchor" href="#编写程序代码" aria-hidden="true">#</a> 编写程序代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim hello.c</span>
<span class="token comment">#include &lt;stdio.h&gt;</span>

int main<span class="token punctuation">(</span>void<span class="token punctuation">)</span><span class="token punctuation">{</span>
 printf<span class="token punctuation">(</span><span class="token string">&quot;Hello word<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是用 C 语言的语法写成的一个程序文件，第一行的是声明信息</p><h3 id="开始编译与测试执行" tabindex="-1"><a class="header-anchor" href="#开始编译与测试执行" aria-hidden="true">#</a> 开始编译与测试执行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># gcc hello.c </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll hello.c a.out </span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">8360</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:24 a.out		<span class="token comment"># 产生这个文件名</span>
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">63</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:24 hello.c

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment">#./a.out </span>
Hello word
<span class="token comment"># 执行成功了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在默认情况下，以 gcc 编译源码，没有加任何参数的情况下，执行文件的名称会以 a.out 名称出现。a.out 就是编译成功的可执行的 binary program</p><p>如果想要产生目标文件（object file）来进行其他的动作，而且自定义执行文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># gcc -c hello.c </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll hello*</span>
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">63</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:24 hello.c
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1496</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:27 hello.o  <span class="token comment"># 产生的目标文件</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll hello*</span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">8360</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:28 hello		<span class="token comment"># 自定义文件名的可执行文件 -o </span>
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">63</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:24 hello.c
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1496</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:27 hello.o

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span>./hello 
Hello word
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-主、子程序连接-子程序的编译" tabindex="-1"><a class="header-anchor" href="#🍀-主、子程序连接-子程序的编译" aria-hidden="true">#</a> 🍀 主、子程序连接：子程序的编译</h2><p>如果我们在一个主程序里面又调用了另一个字程序呢？下面的例子中以 thans.c 这个主程序去调用 thanks_2.c 这个子程序</p><h3 id="编写主、子程序代码" tabindex="-1"><a class="header-anchor" href="#编写主、子程序代码" aria-hidden="true">#</a> 编写主、子程序代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 编写主程序</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim thanks.c</span>
<span class="token comment">#include &lt;stdio.h&gt;</span>

int main<span class="token punctuation">(</span>void<span class="token punctuation">)</span><span class="token punctuation">{</span>
 printf<span class="token punctuation">(</span><span class="token string">&quot;Hello word<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 thanks_2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 2. 编写子程序</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim thanks_2.c</span>
<span class="token comment">#include &lt;stdio.h&gt;</span>

int thanks_2<span class="token punctuation">(</span>void<span class="token punctuation">)</span><span class="token punctuation">{</span>
 printf<span class="token punctuation">(</span><span class="token string">&quot;Thank you!<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="程序的编译与连接-link" tabindex="-1"><a class="header-anchor" href="#程序的编译与连接-link" aria-hidden="true">#</a> 程序的编译与连接 Link</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 2. 将源码编译为颗执行的 binary file</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># gcc -c thanks.c thanks_2.c </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll thanks*</span>
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">76</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:33 thanks.c
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1560</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:35 thanks.o
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">67</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:34 thanks_2.c
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1504</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:35 thanks_2.o
<span class="token comment"># *.o 文件是编译产生的</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># gcc -o thanks thanks.o thanks_2.o </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll thanks*</span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">8424</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:36 thanks
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">76</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:33 thanks.c
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1560</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:35 thanks.o
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">67</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:34 thanks_2.c
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1504</span> Apr  <span class="token number">5</span> <span class="token number">16</span>:35 thanks_2.o

<span class="token comment"># 3. 执行</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ./thanks </span>
Hello word
Thank you<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里你就明白了，为什么要先制作出目标文件了，由于我们的源码文件有时并非只有一个文件，所以无法直接进行编译。这个时候就需要先产生目标文件，再以连结制作为 binary 可执行文件</p><p>另外，如果有一天，你更新了 thanks_2.c 这个文件的内容，则你只需要重新编译 thanks_2.c 来产生新的 thanks_2.o ，然后再以连结制作出新的 binary 可执行文件即可。这功能对于庞大的软件功能源码来说会很有用，节省很多的时间</p><p>此外，想要程序再执行的时候有比较好的效率，或则是其他的除错功能时，可以在编译的过程里加入适当的参数，如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -O 产生优化的参数</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># gcc -O -c thanks.c thanks_2.c</span>

<span class="token comment"># -Wall 产生更详细的编译过程信息</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># gcc -Wall -c thanks.c thanks_2.c</span>
thanks.c: In <span class="token keyword">function</span> <span class="token string">&#39;main&#39;</span><span class="token builtin class-name">:</span>
thanks.c:5:2: warning: implicit declaration of <span class="token keyword">function</span> <span class="token string">&#39;thanks_2&#39;</span> <span class="token punctuation">[</span>-Wimplicit-function-declaration<span class="token punctuation">]</span>
  thanks_2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ^
thanks.c:6:1: warning: control reaches end of non-void <span class="token keyword">function</span> <span class="token punctuation">[</span>-Wreturn-type<span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
 ^
thanks_2.c: In <span class="token keyword">function</span> <span class="token string">&#39;thanks_2&#39;</span><span class="token builtin class-name">:</span>
thanks_2.c:5:1: warning: control reaches end of non-void <span class="token keyword">function</span> <span class="token punctuation">[</span>-Wreturn-type<span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
 ^
<span class="token comment"># 上面的信息为 warning 信息，所以可以忽略也没有关系</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至于更多的 gcc 额外参数功能，请自行 <code>man gcc</code></p><h2 id="🍀-调用外部函数库-加入连结的函数库" tabindex="-1"><a class="header-anchor" href="#🍀-调用外部函数库-加入连结的函数库" aria-hidden="true">#</a> 🍀 调用外部函数库：加入连结的函数库</h2><p>比如要计算数学公式，计算三角函数里面的 sin(90 度角)。要注意的是，大多数程序语言都是使用径度，而不是一般我们计算的角度，180 度角约等于 3.14 径度</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim sin.c</span>
<span class="token comment"># include &lt;stdio.h&gt;</span>
<span class="token comment"># include &lt;math.h&gt;</span>

int main<span class="token punctuation">(</span>void<span class="token punctuation">)</span><span class="token punctuation">{</span>
	float value<span class="token punctuation">;</span>
	value <span class="token operator">=</span> sin<span class="token punctuation">(</span><span class="token number">3.14</span> / <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	printf<span class="token punctuation">(</span><span class="token string">&quot;%f<span class="token entity" title="\\n">\\n</span>&quot;</span>,value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 编译</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># gcc sin.c </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新版的 GCC 会主动将你所需要的函数库抓进来编译，所以不会出现错误信息，事实上数据函数库使用的是 libm.so 这个函数库，最好在编译的时候将整个函数库链接进来比较好。</p><p>函数库放置的地方是系统默认会去找 <code>/lib</code>、<code>/lib64</code> ，所以无须使用 <code>-L</code> 加入搜索的目录，而 libm.so 在编译的写法上，使用的是 <code>-lm (lib 简写为 l)</code>，</p><h3 id="编译时加入额外的函数库连结方式" tabindex="-1"><a class="header-anchor" href="#编译时加入额外的函数库连结方式" aria-hidden="true">#</a> 编译时加入额外的函数库连结方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># gcc sin.c -lm -L/lib64</span>
<span class="token comment"># 重点在 -lm，后面的 -L 是指定搜索的目录</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment">#./a.out </span>
<span class="token number">1.000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-lm</code> 是有意义的，可以拆开成两部分来看：</p><ul><li><code>-l</code>：加入某个函数库（library）</li><li><code>m</code>：libm.so 这个函数库，其中 lib 与扩展名 （.a 或 .so ）不需要写</li></ul><p>对于第一行的 <code>stdio.sh</code> 则是放在 <code>/usr/include/stdio.sh</code> ，如果不在这里的位置，那么久需要指明在哪里</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc sin.c <span class="token parameter variable">-lm</span> -I/usr/include
<span class="token comment"># include 的路径指明格式为：-I/path</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上范例，对 gcc 与源码有一定程度的认识了，下面整理下 gcc 的简易使用方法</p><h2 id="🍀-gcc-的简易用法-编译、参数与连结" tabindex="-1"><a class="header-anchor" href="#🍀-gcc-的简易用法-编译、参数与连结" aria-hidden="true">#</a> 🍀 gcc 的简易用法（编译、参数与连结）</h2><p>下面列举几个常用的 gcc 常见的参数用法（详情请 man gcc）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 仅将源码编译为目标文件，并不制作连结等功能</span>
gcc <span class="token parameter variable">-c</span> hello.c
<span class="token comment"># 会自动产生 hello.o 文件，但是并不会产生 binary 执行文件</span>

<span class="token comment"># 在编译时，根据作业环境给予优化执行速度</span>
gcc <span class="token parameter variable">-O</span> hello.c <span class="token parameter variable">-c</span>
<span class="token comment"># 会自动产生 hello.o 文件，并进行优化</span>

<span class="token comment"># 在进行 binary file 制作时，将连结的函数库与相关的路径填入</span>
gcc sin.c <span class="token parameter variable">-lm</span> -L/lib -I/usr/include
<span class="token comment"># 该指令常下达在最终连结成 binary file 的时候</span>
<span class="token comment"># -lm 指 libm.so 或 libm.a 这个函数库文件</span>
<span class="token comment"># -L 后面接的路径是刚刚那个函数库的搜索目录</span>
<span class="token comment"># -I 后面接的是源码内的 include 文件所在目录</span>

<span class="token comment"># 将编译的结果输出到某个特定的文件</span>
gcc <span class="token parameter variable">-o</span> hello hello.c
<span class="token comment"># -o 后面接的是要输出的 binary file 文件名</span>

<span class="token comment"># 在编译的时候，输出较多的信息说明</span>
gcc <span class="token parameter variable">-o</span> hello hello.c <span class="token parameter variable">-Wall</span>
<span class="token comment"># -Wall，程序的编译会变得较为严谨一点，所以警告信息也会显示出来</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较常用的如上，另外，通常称 <code>-Wall</code> 或 <code>-O</code> 这些非必要的参数为旗标 （FLAGS），因为使用的是 C 语言，所以有时候也会简称这些旗标为 CFLAGS，这些变量偶尔会被使用。</p><p>在后面的 make 相关用法时，用得较多</p>`,40),l=[c];function i(o,p){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","02.html.vue"]]);export{d as default};
