import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,d as e}from"./app-CvlAI_tu.js";const c={},o=e(`<h1 id="可唤醒停机期间的工作任务" tabindex="-1"><a class="header-anchor" href="#可唤醒停机期间的工作任务" aria-hidden="true">#</a> 可唤醒停机期间的工作任务</h1><p>考虑一个场景：你有一个定时任务，每周星期天凌晨 2 点 ，执行一次，但是很不幸，这个时间点停电了，等你上班周 1 去开机时，这个定时任务句错过了执行时机。</p><p>这种情况下，需要靠 anacron 指令：主动帮你进行时间到了但却没有执行的定时任务</p><h2 id="🍀-什么是-anacron" tabindex="-1"><a class="header-anchor" href="#🍀-什么是-anacron" aria-hidden="true">#</a> 🍀 什么是 anacron</h2><p>anacron：主动帮你进行时间到了但却没有执行的定时任务，不是来替代 crond 的</p><p>anacron 其实是前面谈到过的，每小时被 crond 执行一次，会去检测相关定时任务是否有执行，由于 anacron 预设以 每天、每周、每个月去检查未进行的 crontab 任务，因此对于某些特殊的使用环境非常有帮助</p><p>比如：你的主机，是共用的，周末 2 天没有人使用，需要关机，但是有一些任务在周日早上执行，而又关机了，那么重新开机的时候，就可以利用 anacron 的功能，执行没有执行的任务。</p><p>anacron 读取的时间记录文件（timestamps），分析现在的时间记录文件所记载的上次执行 anacron 的时间，两者比较后若发现有差异，那就是在某些时刻没有进行 crontab，此时就会开始执行未进行的 crontab 任务</p><p>简要说：anacron 的原理是，依赖每小时的执行一次的任务记录下时间，下一次执行时，对比当前时间的差异，如果中间有缺少执行，那么表示 crontab 任务在这期间没有被执行过（笔者有疑问就是，一小时，那么怎么知道每小时的 5 分钟到 59 分这个时间点的任务是否被执行过了呢？）</p><h2 id="🍀-anacron-与-etc-anacrontab" tabindex="-1"><a class="header-anchor" href="#🍀-anacron-与-etc-anacrontab" aria-hidden="true">#</a> 🍀 anacron 与 <code>/etc/anacrontab</code></h2><p>anacron 不是一个服务，是一个程序，每小时被主动执行一次，所以 anacron 的配置文件放置在 <code>/etc/cron.hourly/</code> 目录中的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/cron.hourly/   </span>
0anacron     mcelog.cron  
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/cron.hourly/0anacron </span>
<span class="token comment">#!/bin/sh</span>
<span class="token comment"># Check whether 0anacron was run today already</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-r</span> /var/spool/anacron/cron.daily<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">day</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/spool/anacron/cron.daily<span class="token variable">\`</span></span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d<span class="token variable">\`</span></span> <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">$day</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>
<span class="token comment"># 上面校验前一次执行 anacron 时间的时间戳 </span>

<span class="token comment"># Do not run jobs when on battery power</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-x</span> /usr/bin/on_ac_power<span class="token punctuation">;</span> <span class="token keyword">then</span>
    /usr/bin/on_ac_power <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
    <span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
/usr/sbin/anacron <span class="token parameter variable">-s</span>
<span class="token comment"># 经过了一些判断，然后执行了 anacron  -s 指令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>anacron <span class="token punctuation">[</span>-sfn<span class="token punctuation">]</span> <span class="token punctuation">[</span>job<span class="token punctuation">]</span><span class="token punctuation">..</span>
anacron <span class="token parameter variable">-u</span> <span class="token punctuation">[</span>job<span class="token punctuation">]</span><span class="token punctuation">..</span>.

选项与参数：
	-s：开始一连续的执行各项工作 job，会依据时间记录文件的数据判断是否进行
	-f：强制进行，而不去判断时间记录文件的时间戳
	-n：like进行未进行的任务，而不言辞（delay）等待时间
	-u：仅更新时间记录文件的时间戳，不进行任何工作
	job：由 /etc/anacrontab 定义的各项工作名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 CentOS 中，anacron 每小时都会执行一次，为了担心 anacron 误判时间参数，因此 <code>/etc/cron.hourly/</code> 中的 anacron 文件名前加了一个 <code>0(0anacron)</code>，让 anacron 最先执行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/anacrontab </span>
<span class="token comment"># /etc/anacrontab: configuration file for anacron</span>

<span class="token comment"># See anacron(8) and anacrontab(5) for details.</span>

<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/sh
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin:/bin:/usr/sbin:/usr/bin
<span class="token assign-left variable">MAILTO</span><span class="token operator">=</span>root
<span class="token comment"># the maximal random delay added to the base delay of the jobs</span>
<span class="token assign-left variable">RANDOM_DELAY</span><span class="token operator">=</span><span class="token number">45</span>			<span class="token comment"># 随机给予最大延迟时间，单位是分钟</span>
<span class="token comment"># the jobs will be started during the following hours only</span>
<span class="token assign-left variable">START_HOURS_RANGE</span><span class="token operator">=</span><span class="token number">3</span>-22		<span class="token comment"># 延迟多少个小时内应该要执行的任务时间</span>

<span class="token comment"># 天数	延迟时间	工作名称定义					 实际要执行的指令串</span>
<span class="token comment">#period in days   delay in minutes   job-identifier   command</span>
<span class="token number">1</span>       <span class="token number">5</span>       cron.daily              <span class="token function">nice</span> run-parts /etc/cron.daily
<span class="token number">7</span>       <span class="token number">25</span>      cron.weekly             <span class="token function">nice</span> run-parts /etc/cron.weekly
@monthly <span class="token number">45</span>     cron.monthly            <span class="token function">nice</span> run-parts /etc/cron.monthly

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># more /var/spool/anacron/*</span>
::::::::::::::
/var/spool/anacron/cron.daily
::::::::::::::
<span class="token number">20200308</span>
::::::::::::::
/var/spool/anacron/cron.monthly
::::::::::::::
<span class="token number">20200212</span>
::::::::::::::
/var/spool/anacron/cron.weekly
::::::::::::::
<span class="token number">20200308</span>

<span class="token comment"># 上面则是三个工作名称的时间记录文件以及记录的时间戳</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以 <code>/etc/cron.daily</code> 的设置来说明：</p><ul><li>天数：anacron 执行当前与时间戳（<code>/var/spool/anacron</code> 内时间记录文件）相差的天数，若超过此天数，就准备开始执行，若没有超过此天数，则不执行后续的指令</li><li>延迟时间：若确定超过天数导致要执行任务了，那么延迟执行的时间，因为担心立即启动会有其他资源冲突的问题</li><li>工作名称定义：无意义，只在 <code>/var/log/cron</code> 里记录的名称，通常与后续的目录资源名相同</li><li>实际要进行的指令串：与 0hourly 很细，通过 run-parts 来处理的</li></ul><p>根据上面的配置文件内容，大概知道 anacron 的执行流程应该如下（以 cron.daily 为例）:</p><ol><li>由 <code>/etc/anacrontab</code> 分析到 cron.daily 这项工作名称的天数为 1 天</li><li>由 <code>/var/spool/anacron/cron.daily</code> 取出最仅一次执行 anacron 的时间戳</li><li>又上个步骤与目前的时间比较，若相差 1 天以上（含 1 天），就准备进行指令</li><li>若准备进行指令，根据 <code>/etc/anacrontab</code> 的设置，将延迟 5 分钟 + 3 小时（看 START_HOURS_RANGE 的设置）</li><li>延迟时间后，开始执行后续指令，即 <code>run-parts /etc/cron.daily</code> 指令</li><li>执行完毕后，anacron 程序结束</li></ol><p>这也是为什么你的系统开机后，一小时左右会有一段时间忙碌，就是因为在执行上述的配置任务</p><h2 id="🍀-总结-crond-与-anacron-的关系" tabindex="-1"><a class="header-anchor" href="#🍀-总结-crond-与-anacron-的关系" aria-hidden="true">#</a> 🍀 总结：crond 与 anacron 的关系</h2><ol><li>crond 会主动读取 <code>/etc/crontab、/var/spool/cron/*、/etc/cron.d/*</code> 等配置文件，并依据设置的时间去执行任务</li><li>根据 <code>/etc/cron.d/0hourly</code> 的配置，主动去 <code>/etc/cron.hourly/</code> 目录下，执行所有在该目录下的执行文件</li><li>因为 <code>/etc/cron.houly/0anacron</code> 脚本文件的缘故，主动的每小时执行 anacron，并调用 <code>/etc/anacrontab</code> 的配置文件</li><li>根据 <code>/etc/anacrontab</code> 的配置，每天、每周、每月去分析 <code>/etc/cron.daily、/etc/cron.weekly、/etc/cron.monthly</code> 内的执行文件，进行固定周期所执行的指令</li></ol><p>也就是说，如果你每个周日所需要执行的配置是放置在 <code>/etc/crontab</code> 中的话，那么该动作只要过期了就过期了，而放在 <code>/etc/cron.weekly</code> 目录下，那么该工作就会定期，每周执行一次的频率，如果你关机超过一周，那么开机后的数个小时内，该工作就会主动的被执行</p>`,24),l=[o];function i(t,r){return a(),s("div",null,l)}const u=n(c,[["render",i],["__file","04.html.vue"]]);export{u as default};
