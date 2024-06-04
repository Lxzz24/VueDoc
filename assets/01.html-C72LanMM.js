import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const l={},p=e(`<p>文本模式登陆后取得的程序被称为壳（shell），linx 的壳程序就是厉害的 bash 这一支！关于 bash 后续会介绍</p><h2 id="🍀-开始下达指令" tabindex="-1"><a class="header-anchor" href="#🍀-开始下达指令" aria-hidden="true">#</a> 🍀 开始下达指令</h2><p>下面是几个重要概念</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">command</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> parameter1 parameter2
  指令      选项        参数1       参数2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>command：指令（command）或 可执行文件（如批次脚本 script）</p></li><li><p>command：是指令名称，例如变换工作目录的指令是 cd 等</p></li><li><p>中括号是可选配置参数</p><ul><li><code>-</code> 一个短横线，如 -h，这是选项的简写</li><li><code>--</code> 两个短横线，是选项的完整名称，如 --help</li></ul></li><li><p>指令、选项、参数等中间以空格来区分，不论空几格 shell 都视为一格，所以空格是很重要的特殊字符</p></li><li><p>按下 enter 按键后，就代表一行指令的开始启动</p></li><li><p>指令太长的时候，可以使用反斜杠 <code>\\</code> 来跳脱 enter 按键，使指令连续到下一行</p></li><li><p>严格区分英文大小写</p></li></ul><p>其他的介绍，后续 bash 时会详细讲解</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> ~
<span class="token function">ls</span>     <span class="token parameter variable">-al</span>  ~
<span class="token function">ls</span> <span class="token parameter variable">-a</span>   <span class="token parameter variable">-l</span> ~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上三条命令都是一样的结果，看明白规则了没</p><h3 id="语系的支持" tabindex="-1"><a class="header-anchor" href="#语系的支持" aria-hidden="true">#</a> 语系的支持</h3><p>很多时候，可能会发现，输入指令之后，显示的结果是乱码，是因为 linux 可以支持多国语系， 终端机在默认情况下，无法支持以中文编码输出数据的，可以更改为英文。</p><p>可以这样做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看目前支持的语系
[mrcode@study ~]$ locale
# 如果是中文的话，则是 LANG=zh_CN.UTF-8
LANG=en_US.UTF-8
LC_CTYPE=&quot;en_US.UTF-8&quot;
LC_NUMERIC=&quot;en_US.UTF-8&quot;
LC_TIME=&quot;en_US.UTF-8&quot;
LC_COLLATE=&quot;en_US.UTF-8&quot;
LC_MONETARY=&quot;en_US.UTF-8&quot;
LC_MESSAGES=&quot;en_US.UTF-8&quot;
LC_PAPER=&quot;en_US.UTF-8&quot;
LC_NAME=&quot;en_US.UTF-8&quot;
LC_ADDRESS=&quot;en_US.UTF-8&quot;
LC_TELEPHONE=&quot;en_US.UTF-8&quot;
LC_MEASUREMENT=&quot;en_US.UTF-8&quot;
LC_IDENTIFICATION=&quot;en_US.UTF-8&quot;
LC_ALL=

# LANG 的语系为 en_US.UTF-8，这已经是英文环境下的编码了
# 但是可以通过以下的方式临时来修改语系

# LANG 只与输出信息有关
[mrcode@study ~]$ LANG=en_US.utf8
# lc_all 则表示所有的都使用该语系
[mrcode@study ~]$ export LC_ALL=en_US.utf8

# 记得，上面的操作方式是临时的，注销 linux 后，就不生效了，后续会讲解这个

# 可以修改 \`/etc.local.conf\` 来达到持久化改变

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-基础指令的操作" tabindex="-1"><a class="header-anchor" href="#🍀-基础指令的操作" aria-hidden="true">#</a> 🍀 基础指令的操作</h2><ul><li>date：显示日期与时间</li><li>cal：显示日历</li><li>bc：简单好用的计算器</li></ul><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">date</span>
Fri Oct  <span class="token number">4</span> <span class="token number">23</span>:41:16 CST <span class="token number">2019</span>
<span class="token comment"># 格式化输出</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">date</span> +%Y/%m/%d
<span class="token number">2019</span>/10/04
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">date</span> +%H:%M
<span class="token number">23</span>:41
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面说到指令后面带选项一般是带 - 号，但是某些特殊情况下是带 + 号， 对于这里的格式化参数占位符，不用死记硬背，后面会告诉你</p><h3 id="cal-calendar-显示日历" tabindex="-1"><a class="header-anchor" href="#cal-calendar-显示日历" aria-hidden="true">#</a> cal（calendar） 显示日历</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前月</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cal</span>
    October <span class="token number">2019</span>    
Su Mo Tu We Th Fr Sa
       <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>  <span class="token number">4</span>  <span class="token number">5</span>
 <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span> <span class="token number">12</span>
<span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span>
<span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span> <span class="token number">25</span> <span class="token number">26</span>

<span class="token comment"># 显示整年，这里只贴出部分</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cal</span> <span class="token number">2019</span>
                               <span class="token number">2019</span>                               

       January               February                 March       
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
       <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>  <span class="token number">4</span>  <span class="token number">5</span>                   <span class="token number">1</span>  <span class="token number">2</span>                   <span class="token number">1</span>  <span class="token number">2</span>
 <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span> <span class="token number">12</span>    <span class="token number">3</span>  <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span>    <span class="token number">3</span>  <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span>
<span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span>   <span class="token number">10</span> <span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span>   <span class="token number">10</span> <span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span>
<span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span> <span class="token number">25</span> <span class="token number">26</span>   <span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span>   <span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span>
<span class="token number">27</span> <span class="token number">28</span> <span class="token number">29</span> <span class="token number">30</span> <span class="token number">31</span>         <span class="token number">24</span> <span class="token number">25</span> <span class="token number">26</span> <span class="token number">27</span> <span class="token number">28</span>         <span class="token number">24</span> <span class="token number">25</span> <span class="token number">26</span> <span class="token number">27</span> <span class="token number">28</span> <span class="token number">29</span> <span class="token number">30</span>
                                              <span class="token number">31</span>
        April                   May                   June        
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
    <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>  <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>             <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>  <span class="token number">4</span>                      <span class="token number">1</span>
 <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span>    <span class="token number">5</span>  <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span>    <span class="token number">2</span>  <span class="token number">3</span>  <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>
<span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span> <span class="token number">20</span>   <span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span> <span class="token number">18</span>    <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span>
<span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span> <span class="token number">25</span> <span class="token number">26</span> <span class="token number">27</span>   <span class="token number">19</span> <span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span> <span class="token number">25</span>   <span class="token number">16</span> <span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span>
<span class="token number">28</span> <span class="token number">29</span> <span class="token number">30</span>               <span class="token number">26</span> <span class="token number">27</span> <span class="token number">28</span> <span class="token number">29</span> <span class="token number">30</span> <span class="token number">31</span>      <span class="token number">23</span> <span class="token number">24</span> <span class="token number">25</span> <span class="token number">26</span> <span class="token number">27</span> <span class="token number">28</span> <span class="token number">29</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cal</span> <span class="token punctuation">[</span>month<span class="token punctuation">]</span> <span class="token punctuation">[</span>year<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如 2015 年 10 月</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cal</span> <span class="token number">10</span> <span class="token number">2015</span>
    October <span class="token number">2015</span>    
Su Mo Tu We Th Fr Sa
             <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>
 <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span> <span class="token number">10</span>
<span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span>
<span class="token number">18</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span>
<span class="token number">25</span> <span class="token number">26</span> <span class="token number">27</span> <span class="token number">28</span> <span class="token number">29</span> <span class="token number">30</span> <span class="token number">31</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bc-计算器" tabindex="-1"><a class="header-anchor" href="#bc-计算器" aria-hidden="true">#</a> bc 计算器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 进入 bc，会显示当前版本等信息
[mrcode@study ~]$ bc
bc 1.06.95
Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006 Free Software Foundation, Inc.
This is free software with ABSOLUTELY NO WARRANTY.
For details type \`warranty&#39;.

# 下面就可以输入你要计算的公式，按回车显示结果

1+2+3+4
10
7-8+3
2
10*52
520
10^2
100
10/100
0
10*2-1
19

# 离开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面计算发现了一个问题， 10 / 100 = 0，应该有小数才对，设置小数的语法如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 bc 环境中，使用 scale = 数值</span>
<span class="token comment"># 后面数值表示你需要几位小数</span>
<span class="token assign-left variable">scale</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token number">10</span>/100
.100

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-重要的几个热键-tab、ctrl-c、ctrl-d" tabindex="-1"><a class="header-anchor" href="#🍀-重要的几个热键-tab、ctrl-c、ctrl-d" aria-hidden="true">#</a> 🍀 重要的几个热键 <code>tab、ctrl+c、ctrl+d</code></h2><p>在 shell 中有很多的功能组合键，下面是一些重要的几个</p><h3 id="tab" tabindex="-1"><a class="header-anchor" href="#tab" aria-hidden="true">#</a> tab</h3><p>tab 算术 Linux 的 Bash shell 最棒的功能之一了，具有 <strong>命令补全</strong>、<strong>文件补齐</strong> 的功能， 但是在不同的地方输入有不一样的结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mrcode@study ~]$ ca   # 连续按两下 tab tab
# 出来了所有以 ca 开头的指令都出来了
cacertdir_rehash     cache_writeback      canberra-boot        case
cache_check          cairo-sphinx         canberra-gtk-play    cat
cache_dump           cal                  cancel               catchsegv
cache_metadata_size  ca-legacy            cancel.cups          catman
cache_repair         calibrate_ppa        capsh                
cache_restore        caller               captoinfo      

# 文件补齐      
[mrcode@study ~]$ ls -al ~/.bash
.bash_history  .bash_logout   .bash_profile  .bashrc

# 指令参数补齐       
[mrcode@study ~]$ date --
--date        --help        --reference=  --rfc-3339=   --universal   
--date=       --iso-8601    --rfc-2822    --set=        --version  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命令补全：</li><li>文件补齐：</li><li>选项/参数补齐：若安装了 bash-completion 在某些指令后面使用，可参数补全</li></ul><p>命令和文件笔者没有分清楚到底在什么情况下是什么，书上说了， 由于 CentOS 7 多了 bash-completion，就是有点分不清</p><h3 id="ctrl-c" tabindex="-1"><a class="header-anchor" href="#ctrl-c" aria-hidden="true">#</a> ctrl + c</h3><p>中断指令的，比如输错了指令，或则这个领了 <code>find /</code>，会刷屏好一会，这个时候就可以终端它</p><h3 id="ctrl-d" tabindex="-1"><a class="header-anchor" href="#ctrl-d" aria-hidden="true">#</a> ctrl + d</h3><p>通常代表键盘输入结束（end of file 或 end of Input）。</p><p>另外也可以用来取代 exit 的输入，例如在文字界面使用 ctrl + d 就能够直接离开了（相当于 exit）</p><h3 id="shift-page-up-page-down" tabindex="-1"><a class="header-anchor" href="#shift-page-up-page-down" aria-hidden="true">#</a> shift + Page UP/Page Down</h3><p>翻页功能，在文本界面执行某些指令时，输出的信息很长，导致前面的部分已不再当前屏幕中了， 就可以使用该按键来前后翻页</p><h2 id="🍀-错误信息查看" tabindex="-1"><a class="header-anchor" href="#🍀-错误信息查看" aria-hidden="true">#</a> 🍀 错误信息查看</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ DATE    <span class="token comment"># 故意输错了指令</span>
bash: DATE: <span class="token builtin class-name">command</span> not found<span class="token punctuation">..</span>.  <span class="token comment"># 显示错误信息，后续会详细讲解</span>
Similar <span class="token builtin class-name">command</span> is: <span class="token string">&#39;date&#39;</span> <span class="token comment"># 给了你一个可能的解决方案</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),c=[p];function i(r,t){return s(),a("div",null,c)}const o=n(l,[["render",i],["__file","01.html.vue"]]);export{o as default};
