import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t={},p=e(`<h1 id="仅执行一次的工作排程" tabindex="-1"><a class="header-anchor" href="#仅执行一次的工作排程" aria-hidden="true">#</a> 仅执行一次的工作排程</h1><h2 id="🍀-atd-的启动" tabindex="-1"><a class="header-anchor" href="#🍀-atd-的启动" aria-hidden="true">#</a> 🍀 atd 的启动</h2><p>atd 并非所有的 distribution 都会预设打开，因此掌握他的启动和关闭等方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart atd		<span class="token comment"># 重新启动 atd 服务</span>
systemctl <span class="token builtin class-name">enable</span> atd		<span class="token comment"># 开机自动启动</span>
systemctl status atd		<span class="token comment"># 查询 atd 状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># systemctl status atd</span>
● atd.service - Job spooling tools
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/atd.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since 五 <span class="token number">2020</span>-03-06 <span class="token number">13</span>:31:07 CST<span class="token punctuation">;</span> 25min ago
 Main PID: <span class="token number">1382</span> <span class="token punctuation">(</span>atd<span class="token punctuation">)</span>
    Tasks: <span class="token number">1</span>
   CGroup: /system.slice/atd.service
           └─1382 /usr/sbin/atd <span class="token parameter variable">-f</span>

<span class="token number">3</span>月 06 <span class="token number">13</span>:31:07 study.centos.mrcode systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started Job spooling tools.
<span class="token comment"># 上面显示 enabled 和 actice(running) 标识开机启动，和正在运行中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-at-的运行方式" tabindex="-1"><a class="header-anchor" href="#🍀-at-的运行方式" aria-hidden="true">#</a> 🍀 at 的运行方式</h2><p>使用 at 指令产生的工作，会以文本方式写入 <code>/var/spool/at/</code> 目录内，该工作等待 atd 这个服务的取用与执行</p><p>另外为了安全，不要随意吧 at 指令执行权限下发，否则有黑客会使用定时任务来收集数据等情况</p><p>可以利用 <code>/etc/at.allow</code> 和 <code>/etc/at.deny</code> 文件来进行 at 的使用限制，加上这两个文件后，at 的工作情况如下：</p><ol><li>先查找 <code>/etc/at.allow</code> 文件，在该文件中的使用者才能使用 at</li><li>如果 <code>/etc/at.allow</code> 不存在，就查找 <code>/etc/at.deny</code> 文件，写在这个 <code>at.deny</code> 中的使用者无法使用 at</li><li>如果两个文件都不存在，则只有 root 可以使用 at 指令</li></ol><p>那么两个文件的含义如下：</p><ul><li><code>at.allow</code>：严格限制，只有存在该文件中才能使用</li><li><code>at.deny</code>：宽松限制，不存在该文件中则可以使用，也就是说，如果该文件是一个空文件，并且没有 at.allow 文件，那么就表示任何人都可以使用 at 指令</li></ul><h2 id="🍀-at-语法" tabindex="-1"><a class="header-anchor" href="#🍀-at-语法" aria-hidden="true">#</a> 🍀 at 语法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>at <span class="token punctuation">[</span>-mldv<span class="token punctuation">]</span> TIME
at <span class="token parameter variable">-c</span> 工作号码

选项与参数：
	-m：当 at 工作完成后，即使没有输出信息，也以 email 通知使用者该工作已完成
	-l：at <span class="token parameter variable">-l</span> 相当于 atq，列出目前系统上的所有该用户的 at 排程
	-d：at <span class="token parameter variable">-d</span> 相当于 atrm，可以取消一个再 at 排程中的工作
	-v：可以使用较明显的时间格式列出 at 排程中的任务栏表
	-c：可以列出后面接的该项工作的实际指令内容
	
	TIME：时间格式，定义什么时候要进行 at 工作的时间，格式有：
		HH:MM	如 <span class="token number">4</span>:00，在今日 <span class="token number">4</span> 点执行，若该时刻已过，则在明天的 <span class="token number">4</span> 点执行
		HH:MM YYYY-MM-DD	如 <span class="token number">4</span>:00 <span class="token number">2020</span>-03-06 ，就在该时间点执行
		HH:MM<span class="token punctuation">[</span>am<span class="token operator">|</span>pm<span class="token punctuation">]</span> <span class="token punctuation">[</span>Month<span class="token punctuation">]</span> <span class="token punctuation">[</span>Date<span class="token punctuation">]</span>	如：04:00pm July <span class="token number">30</span>，就在该时刻执行
		HH:MM<span class="token punctuation">[</span>am<span class="token operator">|</span>pm<span class="token punctuation">]</span> + number <span class="token punctuation">[</span>minutes<span class="token operator">|</span>hours<span class="token operator">|</span>days<span class="token operator">|</span>weeks<span class="token punctuation">]</span>
			如：now + <span class="token number">5</span> minutes、04pm + <span class="token number">3</span> days
			在某个时间点再 + 几个时间后才执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，该指令的复杂的就是时间的指定了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1： 5 分钟后，将 /root/.bashrc 寄给 root 自己</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># at now + 5 minutes		# 按回车后，输入要执行的指令</span>
at<span class="token operator">&gt;</span> /bin/mail <span class="token parameter variable">-s</span> <span class="token string">&quot;testing at job&quot;</span> root <span class="token operator">&lt;</span> /root/.bashrc		
at<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>EOT<span class="token operator">&gt;</span>		<span class="token comment"># 需要使用 ctrl + d 结束输入</span>
job <span class="token number">3</span> at Fri Mar  <span class="token number">6</span> <span class="token number">14</span>:22:00 <span class="token number">2020</span>
<span class="token comment"># at 工作已经创建，他的 ID 是 3， 会在 2020-03-06 14:22:00 执行</span>

<span class="token comment"># 上面使用 at 指令会进入 at shell 环境，让你下达多重指令的运行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 2：将上述第 3 项工作内容查询出来</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># at -c 3</span>
<span class="token comment">#!/bin/sh			# 可以看出来是通过 bash shell 执行的</span>
<span class="token comment"># atrun uid=0 gid=0</span>
<span class="token comment"># mail mrcode 0</span>
<span class="token builtin class-name">umask</span> <span class="token number">22</span>
。。。。。
<span class="token builtin class-name">cd</span> /root <span class="token operator">||</span> <span class="token punctuation">{</span>
	 <span class="token builtin class-name">echo</span> <span class="token string">&#39;Execution directory inaccessible&#39;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
	 <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token variable">\${<span class="token environment constant">SHELL</span><span class="token operator">:-</span><span class="token operator">/</span>bin<span class="token operator">/</span>sh}</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;marcinDELIMITER4065fff8&#39;
# 下面这一行就是我们要执行的指令了
/bin/mail -s &quot;testing at job&quot; root &lt; /root/.bashrc

marcinDELIMITER4065fff8</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面没有写出来的很多类容，大部分是设置了很多环境变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 3：由于机房预计 2020-03-08 停电，想要在 2020-03-07 23:00 关机</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># at 23:00 2020-03-07</span>
at<span class="token operator">&gt;</span> /bin/sync
at<span class="token operator">&gt;</span> /bin/sync
at<span class="token operator">&gt;</span> /sbin/shutdown <span class="token parameter variable">-h</span> now
at<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>EOT<span class="token operator">&gt;</span>
job <span class="token number">5</span> at Sat Mar  <span class="token number">7</span> <span class="token number">23</span>:00:00 <span class="token number">2020</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于指令的下达与 PATH 变量有关，同时与当时的工作目录也有关联（如果涉及到文件），因此使用绝对路径来下达指令，比较不容易出问题，</p><p>举例说明：你在 /tmp 下达 <code>at now </code> 然后输入 <code>mail -s &quot;test&quot; root &lt; .bashrc</code> ，那么该文件的指向则是 <code>/tmp/.bashrc</code>，<strong>因为 at 在运行时，会跑到当时下达 at 指令的那个工作目录</strong></p><p>还有一个需要注意的，at 的执行与终端机环境无关，而所有 standard output/standard error output 都会传送到执行者的 mailbox 去，所以在 at 中执行 <code>echo &quot;Hello&quot;</code> ，并不会再终端机上看到该信息。有种方法可以达到显示在终端机上 <code>echo &quot;hello&quot; &gt; /dev/tty1</code> ，把输出信息定向给了具体的 tty 终端机，前提是你登录了该终端机</p><p>还记得 <code>-m</code> 指令吗，如果 at 执行后，没有输出任何信息，则不会发送 email 给执行者的，使用 -m 指定之后，无论有没有输出信息，都会发送</p><p>还有 at 是在背景执行的，与 bash 的 nohup（第 16 章）类似，系统会将该项 at 工作独立出你的 bash 环境中，直接交给系统的 atd 程序来接管，因此下达了 at 的工作后，就可以脱机了（你断开登录的 tty 之后，不会让 at 执行工作也失效）。</p><h2 id="🍀-at-工作的管理" tabindex="-1"><a class="header-anchor" href="#🍀-at-工作的管理" aria-hidden="true">#</a> 🍀 at 工作的管理</h2><p>可以对 at 的查询和移除等工作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>atq
atrm <span class="token punctuation">(</span>jobnumber<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：查询目前主机上有多少 at 工作排程</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token comment"># 编号	日期					谁下达的</span>
<span class="token number">5</span>	Sat Mar  <span class="token number">7</span> <span class="token number">23</span>:00:00 <span class="token number">2020</span> a root

<span class="token comment"># 这里看不出来内容，还可以利用上面的  at -c 5 来确认</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># at -c 5</span>
<span class="token variable">\${<span class="token environment constant">SHELL</span><span class="token operator">:-</span><span class="token operator">/</span>bin<span class="token operator">/</span>sh}</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;marcinDELIMITER464e26fe&#39;</span>
/bin/sync
/bin/sync
/sbin/shutdown <span class="token parameter variable">-h</span> now
<span class="token comment"># 这里就能看到，是上面关机的任务</span>

<span class="token comment"># 范例 2： 删除上面的任务</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># atrm 5</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token comment"># 没有信息输出，标识没有任务了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-batch-系统空闲时才进行背景任务" tabindex="-1"><a class="header-anchor" href="#🍀-batch-系统空闲时才进行背景任务" aria-hidden="true">#</a> 🍀 batch：系统空闲时才进行背景任务</h2><p>batch 会再 CPU 的工作负载小于 0.8 的时候，才进行 at 中的任务；</p><p>工作负载：CPU 在单一时间点所负责的工作数量，不是 CPU 使用率。比如：有一个程序需要一直使用 CPU 运算功能，那么 CPU 的使用率可能达到 100%，但是 CPU 的工作负载则是趋近于 1，如果有两个这样的程序，那么 CPU 使用率还是 100%，但是工作负载就变成了 2，也就是可以看成为多线程，CPU 同时为几个线程提供服务</p><p>所以 CPU 工作负载越大，CPU 越忙碌</p><p>CentOS 下的 batch 已经不再支持时间参数了，因此 batch 可以拿来作为判断是否要立刻执行背景程序的依据，为了模拟 CPU 较高的工作负载，使用 12 章里面的计算 PI 的脚本，连续执行 4 次这样的程序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo &quot;scale=100000; 4*a(1)&quot; | bc -lq &amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">4677</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo &quot;scale=100000; 4*a(1)&quot; | bc -lq &amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token number">4679</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo &quot;scale=100000; 4*a(1)&quot; | bc -lq &amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">4681</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo &quot;scale=100000; 4*a(1)&quot; | bc -lq &amp;</span>
<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token number">4683</span>
<span class="token comment"># uptime 查看负载</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># uptime</span>
 <span class="token number">17</span>:04:28 up  <span class="token number">3</span>:33,  <span class="token number">1</span> user,  load average: <span class="token number">0.47</span>, <span class="token number">0.11</span>, <span class="token number">0.08</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># uptime</span>
 <span class="token number">17</span>:04:33 up  <span class="token number">3</span>:33,  <span class="token number">1</span> user,  load average: <span class="token number">0.75</span>, <span class="token number">0.18</span>, <span class="token number">0.10</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># uptime</span>
 <span class="token number">17</span>:04:39 up  <span class="token number">3</span>:34,  <span class="token number">1</span> user,  load average: <span class="token number">1.33</span>, <span class="token number">0.32</span>, <span class="token number">0.15</span>
<span class="token comment"># 可以看到，平均负载飙升到 1.33 了</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># batch</span>
at<span class="token operator">&gt;</span> /usr/bin/updatedb
at<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>EOT<span class="token operator">&gt;</span>
job <span class="token number">6</span> at Fri Mar  <span class="token number">6</span> <span class="token number">17</span>:05:00 <span class="token number">2020</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># date;atq</span>
<span class="token number">2020</span>年 03月 06日 星期五 <span class="token number">17</span>:06:25 CST
<span class="token number">6</span>	Fri Mar  <span class="token number">6</span> <span class="token number">17</span>:05:00 <span class="token number">2020</span> b root
<span class="token comment"># 可以看到，时间已经过了，缺没有执行  at 任务</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>   Running                 <span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=100000; 4*a(1)&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span> <span class="token parameter variable">-lq</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>   Running                 <span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=100000; 4*a(1)&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span> <span class="token parameter variable">-lq</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>-  Running                 <span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=100000; 4*a(1)&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span> <span class="token parameter variable">-lq</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>+  Running                 <span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=100000; 4*a(1)&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span> <span class="token parameter variable">-lq</span> <span class="token operator">&amp;</span>
<span class="token comment"># 使用 jobs 找出背景功能，再使用 kill 删除掉 4 个背景工作后，等待工作负载的下降</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># kill -9 %1 %2 %3 %4</span>

<span class="token comment"># 需要等待工作负载降低到 0.8 以下</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># uptime; atq</span>
 <span class="token number">17</span>:09:32 up  <span class="token number">3</span>:38,  <span class="token number">1</span> user,  load average: <span class="token number">2.29</span>, <span class="token number">2.30</span>, <span class="token number">1.10</span>
<span class="token number">6</span>	Fri Mar  <span class="token number">6</span> <span class="token number">17</span>:05:00 <span class="token number">2020</span> b root
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># uptime; atq</span>
 <span class="token number">17</span>:09:38 up  <span class="token number">3</span>:39,  <span class="token number">1</span> user,  load average: <span class="token number">2.10</span>, <span class="token number">2.27</span>, <span class="token number">1.09</span>
<span class="token number">6</span>	Fri Mar  <span class="token number">6</span> <span class="token number">17</span>:05:00 <span class="token number">2020</span> b root
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># uptime; atq</span>
 <span class="token number">17</span>:11:20 up  <span class="token number">3</span>:40,  <span class="token number">1</span> user,  load average: <span class="token number">0.52</span>, <span class="token number">1.63</span>, <span class="token number">0.99</span>
<span class="token number">6</span>	Fri Mar  <span class="token number">6</span> <span class="token number">17</span>:05:00 <span class="token number">2020</span> <span class="token operator">=</span> root
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># uptime; atq</span>
 <span class="token number">17</span>:11:21 up  <span class="token number">3</span>:40,  <span class="token number">1</span> user,  load average: <span class="token number">0.52</span>, <span class="token number">1.63</span>, <span class="token number">0.99</span>
<span class="token comment"># 这里降低到 0.52 还能看到还没有执行，多等待下，就会发现不执行了，</span>
<span class="token comment"># 这个是因为指令的执行完成也需要一定时间的</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平均工作负载：是统计的 1 分钟内的平均值，当小于 0.8之后的「整分钟时间」，atd 会执行 batch 的工作</p><p>整分钟时间：无论 at 还是 crontab，他们最小的时间单位是分钟，所以基本上，他们工作是 <strong>每分钟检查一次</strong> ，就是整分（秒为 9 的时候）。另外 batch 也是使用 atq/atrm 来管理的</p>`,36),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","02.html.vue"]]);export{d as default};
