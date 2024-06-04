import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t={},i=e(`<h1 id="文件的格式化与相关处理" tabindex="-1"><a class="header-anchor" href="#文件的格式化与相关处理" aria-hidden="true">#</a> 文件的格式化与相关处理</h1><p>不需要通过 vim 去编辑，而是通过数据流重导向配置 printf 功能以及 awk 指令，可以对文字信息进行排版显示</p><h2 id="🍀-格式化打印-printf" tabindex="-1"><a class="header-anchor" href="#🍀-格式化打印-printf" aria-hidden="true">#</a> 🍀 格式化打印：printf</h2><p>比如将考试分数输出，姓名与科目及分数之间，稍微做个比较漂亮的版面，比如输出下面这样的表格</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Name		Chinese		Enlish		Math		Average
DmTsai		80				60				92			77.33
VBird			75				55				80			70.00
Ken				60				90				70			73.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上表数据主要分成 5 个字段，每个字段之间可以使用 tab 或空格进行分割。将上表存储到 printf.txt 文件中，后续会使用到这个文件进行练习。</p><p>由于每个字段的长度并不一样，所以要达到上表效果，就需要打印格式管理员 printf 来帮忙了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">printf</span> <span class="token string">&#39;打印格式&#39;</span> 实际类容
选项与参数：
 关于格式方面的几个特殊样式：
 		<span class="token punctuation">\\</span>a	警告剩余输出
 		<span class="token punctuation">\\</span>b	退格键（backspace）
 		<span class="token punctuation">\\</span>f	清楚屏幕（form feed）
 		<span class="token punctuation">\\</span>n 	输出新的一行
 		<span class="token punctuation">\\</span>r	Enter 按键，换行
 		<span class="token punctuation">\\</span>t	水平的 tab 按键
 		<span class="token punctuation">\\</span>v	垂直的 tab 按键
 		<span class="token punctuation">\\</span>xNN	NN 为两位数的数字，可以转换数字称为字符
 关于 C 程序语言内，常见的变量格式：
 		%ns		n 数字，s 表示 string，也就是多少个字符
 		%ni		n 数字，i 表示 integer，多少整数数字
 		%N.nf 	n 与 N 都是数字，f 表示 floating（浮点），如果有小数，比如共 <span class="token number">10</span> 个位数，小数点 <span class="token number">2</span> 位数，则写成 %10.2f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面进行练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：将上面存储的 printf.txt 内容仅列出姓名与成绩，并且用 tab 分割</span>
<span class="token comment"># 文件存储时，字段之间全部用 tab 隔开的，复制进去就变成下面展示这样了</span>
 <span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> printf.txt 
Name            Chinese         Enlish          Math            Average
DmTsai          <span class="token number">80</span>                              <span class="token number">60</span>                              <span class="token number">92</span>                      <span class="token number">77.33</span>
VBird                   <span class="token number">75</span>                              <span class="token number">55</span>                              <span class="token number">80</span>                      <span class="token number">70.00</span>
Ken                             <span class="token number">60</span>                              <span class="token number">90</span>                              <span class="token number">70</span>                      <span class="token number">73.33</span>
<span class="token comment"># 由于 printf 不是管线命令，需要通过 cat 先提取出来内容</span>
<span class="token comment"># %s 表示不固定长度的字符串，后面跟了一个空格，并使用横向制表符 \\t 来格式化</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token builtin class-name">printf</span> <span class="token string">&#39;%s \\t %s \\t %s \\t %s \\t %s \\t \\n &#39;</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> printf.txt<span class="token variable">)</span></span>
Name     Chinese         Enlish          Math    Average         
 DmTsai          <span class="token number">80</span>      <span class="token number">60</span>      <span class="token number">92</span>      <span class="token number">77.33</span>   
 VBird   <span class="token number">75</span>      <span class="token number">55</span>      <span class="token number">80</span>      <span class="token number">70.00</span>   
 Ken     <span class="token number">60</span>      <span class="token number">90</span>      <span class="token number">70</span>      <span class="token number">73.33</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到上述的效果虽然好多了，但是还是没有对齐。可能是由于 Chinese 比其他的长度要长，导致对不齐，那么下面来固定长度</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 2：将上述第二行以后，分别以字符串、整数、小数点来显示</span>
<span class="token comment"># grep -v Name 排除包含 Name 字符的行</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token builtin class-name">printf</span> <span class="token string">&#39;%10s %5i %5i %5i %8.2f \\n&#39;</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> printf.txt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> Name<span class="token variable">)</span></span>
    DmTsai    <span class="token number">80</span>    <span class="token number">60</span>    <span class="token number">92</span>    <span class="token number">77.33</span> 
     VBird    <span class="token number">75</span>    <span class="token number">55</span>    <span class="token number">80</span>    <span class="token number">70.00</span> 
       Ken    <span class="token number">60</span>    <span class="token number">90</span>    <span class="token number">70</span>    <span class="token number">73.33</span> 
<span class="token comment"># 由于这里是格式化数字，所以第一行无法使用这里的表达式，如果使用将得到数字 0 的展示</span>
<span class="token comment"># 展示效果好了很多</span>
 %10s：这一个字段永远显示 <span class="token number">10</span> 个字符宽度，不足的用空格补位
 %8.2f：表示 00000.00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>printf 除了可以格式化处理之外，还可以根据 ASCII 的数字与图形对应来显示数据，如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 3： 列出 16 进制 45 代表的字符是什么</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token builtin class-name">printf</span> <span class="token string">&#39;\\x45\\n&#39;</span>
E
<span class="token comment"># 可以将数值转换为字符，如果你会写 script 的话</span>
<span class="token comment"># 可以测试下，20~80 之间的数值表示的字符是什么</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>printf 使用相当广泛，包括后面提到的 awk 以及在 c 程序语言中使用的屏幕输出，都是利用 printf。</p><p>printf 使用场景就是格式化输出，如果你要写自己的软件，把信息漂亮的输出到屏幕的话，可是很有用的</p><h2 id="🍀-awk-好用的数据处理工具" tabindex="-1"><a class="header-anchor" href="#🍀-awk-好用的数据处理工具" aria-hidden="true">#</a> 🍀 awk：好用的数据处理工具</h2><ul><li>sed：常常用于一整行的处理</li><li>awk：倾向于将一行分成数个字段来处理</li></ul><p>因此，awk 适合处理小型的数据处理。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;条件类型1{动作1} 条件类型2{动作2} ...&#39;</span> filename

<span class="token function">awk</span> 后可以跟文件，也可以接受前个指令的 standard output
<span class="token function">awk</span> 主要处理每一行的字段内的数据，他默认的分隔符为「空格键」或「tab 键」
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例：使用 last 将登录者数据取出来</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ last <span class="token parameter variable">-n</span> <span class="token number">5</span>		<span class="token comment"># 取出前 5 行</span>
mrcode   pts/1        <span class="token number">192.168</span>.0.105    Wed Jan <span class="token number">15</span> <span class="token number">22</span>:20   still logged <span class="token keyword">in</span>   
mrcode   pts/0        <span class="token number">192.168</span>.0.105    Wed Jan <span class="token number">15</span> <span class="token number">22</span>:20   still logged <span class="token keyword">in</span>   
<span class="token function">reboot</span>   system boot  <span class="token number">3.10</span>.0-1062.el7. Wed Jan <span class="token number">15</span> <span class="token number">22</span>:19 - <span class="token number">23</span>:05  <span class="token punctuation">(</span>00:45<span class="token punctuation">)</span>    
mrcode   pts/1        <span class="token number">192.168</span>.0.105    Mon Jan <span class="token number">13</span> <span class="token number">22</span>:51 - <span class="token number">23</span>:13  <span class="token punctuation">(</span>00:22<span class="token punctuation">)</span>    
mrcode   pts/0        <span class="token number">192.168</span>.0.105    Mon Jan <span class="token number">13</span> <span class="token number">22</span>:51 - <span class="token number">23</span>:13  <span class="token punctuation">(</span>00:22<span class="token punctuation">)</span> 

<span class="token comment"># 若要取出账户与登录 IP ，且账户与 IP 之间以 tab 隔开，可以这样写</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ last <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1 &quot;\\t&quot; $3}&#39;</span>
mrcode  <span class="token number">192.168</span>.0.105
mrcode  <span class="token number">192.168</span>.0.105
<span class="token function">reboot</span>  boot
mrcode  <span class="token number">192.168</span>.0.105
mrcode  <span class="token number">192.168</span>.0.105
        
wtmp    Fri
<span class="token comment"># 由于每一行数据都需要处理，所以不需要有条件类型</span>
<span class="token comment"># 通过 print 功能将数据列出来</span>
<span class="token comment"># 第 3 行数据被误判了，第二个字段中包含了空格</span>
<span class="token comment"># 那么 $1 开始的变量表示哪一个字段，要注意的是：$0 表示整行数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面示例，awk 的处理流程是：</p><ol><li>读入第一行，并将第一行的内容填入 <code>$0、$1...</code> 变量中</li><li>依据 条件类型 的限制，判断是否需要进行后面的 动作</li><li>做完所有的动作与条件类型</li><li>若还有后续的「行」数据，则重复上面 1~3 步骤，直到所有数据都处理完为止</li></ol><p>awk 是「以行为一次处理的单位」而「以字段为最小的处理单位」，那么 awk 中还提供了以下变量信息</p><table><thead><tr><th style="text-align:center;">变量名称</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">NF</td><td style="text-align:center;">每一行（<code>$0</code>）拥有的字段总数</td></tr><tr><td style="text-align:center;">NR</td><td style="text-align:center;">目前 awk 所处理的是「第几行」数据</td></tr><tr><td style="text-align:center;">FS</td><td style="text-align:center;">目前的分割字符，默认是空格</td></tr></tbody></table><p>继续上面 last -n 5 的例子来做说明</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 想要列出每一行的账户：就是 $1</span>
<span class="token comment"># 列出目前处理的行数：NR 变量</span>
<span class="token comment"># 该行有多少字段：NF 变量</span>
<span class="token comment"># 注意：在 awk 的格式内使用 print 打印时，非变量部分需要用双引号引用起来，因为 awk 动作是以单引号的</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ last <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1 &quot;\\t lines:&quot; NR &quot;\\t columns:&quot; NF}&#39;</span>
mrcode   lines:1         columns:10
mrcode   lines:2         columns:10
<span class="token function">reboot</span>   lines:3         columns:11
mrcode   lines:4         columns:10
mrcode   lines:5         columns:10
         lines:6         columns:0
wtmp     lines:7         columns:7
<span class="token comment"># 注意 NF 等变量不需要有 $ 并且需要大写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="awk-的逻辑运算字符" tabindex="-1"><a class="header-anchor" href="#awk-的逻辑运算字符" aria-hidden="true">#</a> awk 的逻辑运算字符</h3><p>既然有「条件」，那么就有逻辑运算符号</p><table><thead><tr><th style="text-align:center;">运算单元</th><th style="text-align:center;">代表意义</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&gt;</code></td><td style="text-align:center;">大于</td></tr><tr><td style="text-align:center;"><code>&lt;</code></td><td style="text-align:center;">小于</td></tr><tr><td style="text-align:center;"><code>&gt;=</code></td><td style="text-align:center;">大于或等于</td></tr><tr><td style="text-align:center;"><code>&gt;=</code></td><td style="text-align:center;">小于或等于</td></tr><tr><td style="text-align:center;"><code>==</code></td><td style="text-align:center;"><strong>等于</strong></td></tr><tr><td style="text-align:center;"><code>!=</code></td><td style="text-align:center;">不等于</td></tr></tbody></table><p>范例：在 /etc/passwd 中是以冒号「:」来分割字段的，第一个字段为账户，第三字段则是 UID.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查阅 第三栏小于 10 以下的数据，并且仅列出账户与第三栏</span>
<span class="token comment"># FS 是字段分隔符</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{FS=&quot;:&quot;} $3 &lt; 10 {print $1 &quot;\\t&quot; $3}&#39;</span>
root:x:0:0:root:/root:/bin/bash 
bin     <span class="token number">1</span>
daemon  <span class="token number">2</span>
adm     <span class="token number">3</span>
lp      <span class="token number">4</span>
<span class="token function">sync</span>    <span class="token number">5</span>
<span class="token function">shutdown</span>        <span class="token number">6</span>
<span class="token function">halt</span>    <span class="token number">7</span>
mail    <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行，没有生效是为啥呢？在 awk 中，在上述定义中，FS 仅能在第二行开始，</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要使用关键字 BEGIN，对应的还有 END</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;BEGIN {FS=&quot;:&quot;} $3 &lt; 10 {print $1 &quot;\\t&quot; $3}&#39;</span>
root    <span class="token number">0</span>
bin     <span class="token number">1</span>
daemon  <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 awk 的计算功能，比如有如下的数据 pay.txt</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Name		1st		2nd		3th
Mrcode	2300	2400	2500
DMTsai	2100	2000	2300
Mrcode2	4300	4200	4100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 计算每个人的总额，而且还要格式化输出</span>
 - 第一行是说明，不需要计算，所以需要使用条件 <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">1</span> 时再处理
 - 第二行才开始计算，NR <span class="token operator">&gt;=</span><span class="token number">2</span> 才处理

<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> pay.txt <span class="token operator">|</span> 
<span class="token operator">&gt;</span> <span class="token function">awk</span> <span class="token string">&#39;NR==1 {printf &quot;%10s %10s %10s %10s %10s\\n&quot;,$1,$2,$3,$4,&quot;Total&quot; }
&gt; NR&gt;=2 {total = $2 + $3 + $4 ; printf &quot;%10s %10d %10d %10d %10.2f\\n&quot;,$1,$2,$3,$4,total}&#39;</span>
      Name        1st        2nd        3th      Total
    Mrcode       <span class="token number">2300</span>       <span class="token number">2400</span>       <span class="token number">2500</span>    <span class="token number">7200.00</span>
    DMTsai       <span class="token number">2100</span>       <span class="token number">2000</span>       <span class="token number">2300</span>    <span class="token number">6400.00</span>
   Mrcode2       <span class="token number">4300</span>       <span class="token number">4200</span>       <span class="token number">4100</span>   <span class="token number">12600.00</span>

为了方便复制，这里粘贴上完整的一行命令：cat pay.txt <span class="token operator">|</span>  <span class="token function">awk</span> <span class="token string">&#39;NR==1 {printf &quot;%10s %10s %10s %10s %10s\\n&quot;,$1,$2,$3,$4,&quot;Total&quot; } NR&gt;=2 {total = $2 + $3 + $4 ; printf &quot;%10s %10d %10d %10d %10.2f\\n&quot;,$1,$2,$3,$4,total}&#39;</span>

<span class="token comment"># 现在来分解上面指令</span>
<span class="token comment"># 1. 在 awk 中，非变量需要使用双引号引用起来</span>
<span class="token comment"># 2. 使用 printf 时，需要加上 \\n 才能换行</span>
<span class="token comment"># 下面的含义是，当是第一行的时候，执行打印个格式化，前面是格式化表达式</span>
<span class="token comment"># 后面用逗号分割，给出对应内容，这里给出了 1~4 个字段，并新增了一个 total 字段</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> pay.txt <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==1 {printf &quot;%10s %10s %10s %10s %10s\\n&quot;,$1,$2,$3,$4,&quot;total&quot;}&#39;</span>
      Name        1st        2nd        3th      total

<span class="token comment"># 对于计算的讲解</span>
<span class="token comment"># 1. 在{} 动作中可以设置变量，进行运算；这里设置了一个 total 变量，并把 1~3 个字段相加</span>
<span class="token comment"># 2. 由于这里有多个指令，所以需要使用冒号 「;」 进行分割</span>
<span class="token comment"># 3. 使用 printf 常规打印，第 5 个字段引用了动作内设置的变量 total，记住 awk 中引用变量不需要使用 % 符号</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">cat</span> pay.txt <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR&gt;=2 {total=$1+$2+$3 ; printf &quot;%10s %10d %10d %10d %10.2f\\n&quot;,$1,$2,$3,$4,total}&#39;</span>
    Mrcode       <span class="token number">2300</span>       <span class="token number">2400</span>       <span class="token number">2500</span>    <span class="token number">4700.00</span>
    DMTsai       <span class="token number">2100</span>       <span class="token number">2000</span>       <span class="token number">2300</span>    <span class="token number">4100.00</span>
   Mrcode2       <span class="token number">4300</span>       <span class="token number">4200</span>       <span class="token number">4100</span>    <span class="token number">8500.00</span>

<span class="token comment"># 那么上面两条是针对各自条件进行处理的，相当于 if 语句；多个条件动作之间使用空格分割；链接起来就完成了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 awk 可以帮助我们处理很多日常工作了，在 awk 的输出格式中，常常会以 printf 来辅助。另外在 {} 动作内，也支持 if(条件) 语句。那么上面的指令可以使用 if 来做，如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> pay.txt <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{if(NR==1) printf &quot;%10s %10s %10s %10s %10s\\n&quot;,$1,$2,$3,$4,&quot;Total&quot; } NR&gt;=2 {total = $2 + $3 + $4 ; printf &quot;%10s %10d %10d %10d %10.2f\\n&quot;,$1,$2,$3,$4,total}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>笔者没有感觉这个 if 有多方便啊？</p><p>另外，awk 还可以进行循环计算，不过这个属于比较进阶的单独课程了</p><h2 id="🍀-文件比对工具" tabindex="-1"><a class="header-anchor" href="#🍀-文件比对工具" aria-hidden="true">#</a> 🍀 文件比对工具</h2><p>通常会在同一个软件包的不同版本之间，比较配置文件与原始文件的差异的时候，就会用到文件对比。</p><p>很多时候所谓的对比，通常是用在 ASCII 纯文本的比对。常见的指令有 diff，还可以使用 cmp 来对比非纯文本。同时也可以使用 diff 建立分析文档，以处理补丁 patch 功能的文件</p><h3 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> diff</h3><p>diff 用在比对两个文件之间的差异，以行为单位来比对的。一般是用在 ASCII 纯文本文件的比对上。</p><p>比如：将 /etc/passwd 删除第 4 行，第 6 行则替换为「no six line」，新文件放置到 /tmp/test 里，该如何做？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建测试目录</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /tmp/testpw
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> /tmp/testpw/
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ <span class="token function">cp</span> /etc/passwd passwd.old 
<span class="token comment"># sed -e 直接在命令行模式上修改；d 是删除，c是替换；前面 sed 中有讲到过的</span>
<span class="token comment"># 这里把修改后的内容存到了 passwd.new 文件中</span>
<span class="token comment"># sed 中有超过两个以上的动作时需要加 -e</span>
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;4d&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;6c no six line&#39;</span> <span class="token operator">&gt;</span> passwd.new

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">diff</span> <span class="token punctuation">[</span>-bBi<span class="token punctuation">]</span> from-file to-file
选项与参数：

from-file：文件名，原始对比文件
to-file：文件名，目的比较文件
注意：两个文件，都可以使用 - 表示，- 代表 standard input

-b：忽略一行当中，仅有多个空白的差异；例如：“about me“ 与 “about         me” 视为相同
-B：忽略空白行的差异
-i：忽略大小写的不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：比对 passwd.old passwd.new 文件</span>
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ <span class="token function">diff</span> passwd.old passwd.new 
4d3						<span class="token comment"># 左边第 4 行被删除(d)掉了，基准是右边第 3 行</span>
<span class="token operator">&lt;</span> adm:x:3:4:adm:/var/adm:/sbin/nologin				<span class="token comment"># 列出了左边被删除的那一行内容</span>
6c5						<span class="token comment"># 左边第 6 行，被替换（c）成右边文件的第 5 行</span>
<span class="token operator">&lt;</span> sync:x:5:0:sync:/sbin:/bin/sync			<span class="token comment"># 左边文件第 6 行内容</span>
---	
<span class="token operator">&gt;</span> no six line								<span class="token comment"># 右边文件第 5 行内容</span>
<span class="token comment"># 注意这里的，左边第 4 行被删除意思是：左边文件是完整的，右边是修改之后的，右边与左边对比，原来的第 4 行被删除了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用 diff 去对比两个完全不相干的文件，是对比不出来什么的；另外 diff 还可以对比整个目录下的差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例：了解一下不同的开机执行等级（runlevel）内容有啥不同？假设你已经知道执行等级 0 与 5的启动脚本分别放置到 /etc/rc0.d 及 /etc/rc5.d 则可以对比下</span>
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ <span class="token function">diff</span> /etc/rc0.d/ /etc/rc5.d/
只在 /etc/rc0.d/ 存在：K90network
只在 /etc/rc5.d/ 存在：S10network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cmp" tabindex="-1"><a class="header-anchor" href="#cmp" aria-hidden="true">#</a> cmp</h3><p>cmp 主要也是对比两个文件，主要利用字节单位去对比</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cmp</span> <span class="token punctuation">[</span>-l<span class="token punctuation">]</span> file1 file2
-i：将所有的不同点的字节处都列出来。因为 <span class="token function">cmp</span> 预设仅会输出第一个发现的不同点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：用 cmp 比较 passwd.old 与 passwd.new</span>
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ <span class="token function">cmp</span> passwd.old passwd.new 
passwd.old passwd.new 不同：第 <span class="token number">106</span> 字节，第 <span class="token number">4</span> 行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="patch" tabindex="-1"><a class="header-anchor" href="#patch" aria-hidden="true">#</a> patch</h3><p>patch 与 diff 可配合使用，diff 比较出不同，而 patch 则可以将「旧文件升级为新的文件」。</p><ol><li>先比较新旧版本的差异</li><li>将差异制作成补丁文件</li><li>再由补丁文件更新旧文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：以 /tmp/testpw 内的 passwd.old 与 passwd.new 制作补丁文件</span>
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ <span class="token function">diff</span> <span class="token parameter variable">-Naur</span> passwd.old passwd.new <span class="token operator">&gt;</span> passwd.patch
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ <span class="token function">cat</span> passwd.patch 
--- passwd.old	<span class="token number">2020</span>-01-17 <span class="token number">15</span>:58:55.405462402 +0800			<span class="token comment"># 新旧文件的信息</span>
+++ passwd.new	<span class="token number">2020</span>-01-17 <span class="token number">16</span>:01:03.115462402 +0800
@@ -1,9 +1,8 @@		<span class="token comment"># 新旧文件要修改数据的界定范围，旧文件在 1-0 行，新文件在 1-8 行</span>
 root:x:0:0:root:/root:/bin/bash
 bin:x:1:1:bin:/bin:/sbin/nologin
 daemon:x:2:2:daemon:/sbin:/sbin/nologin
-adm:x:3:4:adm:/var/adm:/sbin/nologin			<span class="token comment"># 左侧文件删除</span>
 lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
-sync:x:5:0:sync:/sbin:/bin/sync				<span class="token comment"># 左侧文件删除</span>
+no six line									<span class="token comment"># 右侧新加入</span>
 shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
 halt:x:7:0:halt:/sbin:/sbin/halt
 mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
 
 <span class="token comment"># 这里怎么理解？ 可以理解为 old 文件是基准文件</span>
 <span class="token comment"># 根据这里的基准文件，看到 - 就剪掉，看到 + 就增加；执行完成后，则会得到 new 这个文件；</span>
 <span class="token comment"># 并且补丁中限制了行数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 passwd.old 同步为 passwd.new 相同的内容，</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 由于系统未预装 patch 软件，需要将之前的 iso 镜像文件挂载</span>
<span class="token comment"># 在虚拟机上找到顺序为 0 的控制器位置，选择 iso 文件，设备就能被 linux 找到了</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/sr0 /mnt/</span>
mount: /dev/sr0 写保护，将以只读方式挂载
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rpm -ivh /mnt/Packages/patch-2.*</span>
警告：/mnt/Packages/patch-2.7.1-11.el7.x86_64.rpm: 头V3 RSA/SHA256 Signature, 密钥 ID f4a80eb5: NOKEY
准备中<span class="token punctuation">..</span>.                          <span class="token comment">################################# [100%]</span>
正在升级/安装<span class="token punctuation">..</span>.
   <span class="token number">1</span>:patch-2.7.1-11.el7               <span class="token comment">################################# [100%]</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># umount /mnt/</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token comment"># 透过上述方式安装所需软件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>patch <span class="token parameter variable">-pN</span> <span class="token operator">&lt;</span> patch_file  <span class="token comment"># 更新</span>
patch <span class="token parameter variable">-R</span> <span class="token parameter variable">-pN</span> <span class="token operator">&lt;</span> patch_file  <span class="token comment"># 还原</span>

选项与参数：
-p：后面可以接 取消几层目录 的意思
-R：代表还原，将新的文件还原成原来的旧文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 2：将刚刚制作出来的 patch file 用来更新旧版本数据</span>
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ patch <span class="token parameter variable">-p0</span> <span class="token operator">&lt;</span> passwd.patch 
patching <span class="token function">file</span> passwd.old
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ ll passwd.*
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">2266</span> <span class="token number">1</span>月  <span class="token number">17</span> <span class="token number">16</span>:01 passwd.new
-rw-r--r--. <span class="token number">1</span> mrcode mrcode <span class="token number">2266</span> <span class="token number">1</span>月  <span class="token number">17</span> <span class="token number">16</span>:50 passwd.old	<span class="token comment"># 文件大小和new文件一样了</span>
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode  <span class="token number">480</span> <span class="token number">1</span>月  <span class="token number">17</span> <span class="token number">16</span>:38 passwd.patch

<span class="token comment"># 范例 3：恢复旧文件内容</span>
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ patch <span class="token parameter variable">-R</span> <span class="token parameter variable">-p0</span> <span class="token operator">&lt;</span> passwd.patch 
patching <span class="token function">file</span> passwd.old
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ ll passwd.*
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">2266</span> <span class="token number">1</span>月  <span class="token number">17</span> <span class="token number">16</span>:01 passwd.new
-rw-r--r--. <span class="token number">1</span> mrcode mrcode <span class="token number">2323</span> <span class="token number">1</span>月  <span class="token number">17</span> <span class="token number">16</span>:52 passwd.old
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里为什么会使用 <code>-p0</code> ？因为两个文件在同一个目录下，因此不需要减去目录。如果是整体目录比对（diff 旧目录 新目录）时，就要依据建立 patch 文件所在目录来进行目录删减</p><p>更详细的 patch 用法在后续的第二十章「原始码编译」</p><h3 id="文件打印准备-pr" tabindex="-1"><a class="header-anchor" href="#文件打印准备-pr" aria-hidden="true">#</a> 文件打印准备：pr</h3><p>在图形界面中的文字处理软件，打印时可以选择每一页的标头和页码，在文字界面下，可以使用 pr 来实现，由于 pr 参数实在太多了，这里使用最简单的方式来处理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打印 /etc/man_db.conf</span>
<span class="token punctuation">[</span>mrcode@study testpw<span class="token punctuation">]</span>$ <span class="token function">pr</span> /etc/man_db.conf 


<span class="token number">2018</span>-10-31 04:26                /etc/man_db.conf                 第 <span class="token number">1</span> 页


<span class="token comment"># </span>
<span class="token comment">#</span>
<span class="token comment"># This file is used by the man-db package to configure the man and cat paths.</span>
<span class="token comment"># It is also used to provide a manpath for those without one by examining</span>
<span class="token comment"># their PATH environment variable. For details see the manpath(5) man page.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最上面的一行就是 pr 处理之后的效果。依次是：文件时间、文件名、页码</p>`,71),l=[i];function p(c,d){return s(),a("div",null,l)}const u=n(t,[["render",p],["__file","04.html.vue"]]);export{u as default};
