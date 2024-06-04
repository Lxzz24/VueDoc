import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const l="/VueDoc/assets/image-20200322154057573-BMRwESzj.png",t={},o=e('<h1 id="登录文件的轮替-logrotate" tabindex="-1"><a class="header-anchor" href="#登录文件的轮替-logrotate" aria-hidden="true">#</a> 登录文件的轮替 logrotate</h1><p>轮替，就是定时的执行备份操作，可以查看 <code>/etc/cron.daily/logrotate</code> ，里面配置了文件轮替行为</p><h2 id="🍀-logrotate-的配置文件" tabindex="-1"><a class="header-anchor" href="#🍀-logrotate-的配置文件" aria-hidden="true">#</a> 🍀 logrotate 的配置文件</h2><p>配置文件如下：</p><ul><li><code>/etc/logrotate.conf</code>：配置文件</li><li><code>/etc/logrotate.d/</code>：该目录下是细化的分类，比如你有你自己的软件需要轮替操作，就可以放到该目录下</li></ul><p>logrotate 的主要功能是将旧的日志文件移动成旧文件，并且重新建立一个新的空的文件。它的执行结果如下图示意：</p><figure><img src="'+l+`" alt="image-20200322154057573" tabindex="0" loading="lazy"><figcaption>image-20200322154057573</figcaption></figure><p>上图是一个过程，后面的图示已经包含了前面的过程。</p><ul><li>第 1 次执行完 rotate 后：原本的 messages 文件变成了 messages.1，而且会制造一个空的 message 出来</li><li>第 2 次：messages.1 变成了 messages.2</li></ul><p>以此下去，如果我们设置值保留三个文件日志信息，那么当执行第 4 次的时候，则 messages.3 会被移除，也就是新的备份文件会将旧的给覆盖掉</p><p>那么多久执行一次 logrotate 呢？保留几个备份文件呢？这些都在 logrotate.conf 中配置的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/logrotate.conf </span>
<span class="token comment"># 下面是预设的默认值，如果某些文件又设置了其他的参数，那么就以它自己的设置为准</span>

<span class="token comment"># see &quot;man logrotate&quot; for details</span>
<span class="token comment"># rotate log files weekly</span>
weekly				<span class="token comment"># 每周进行一次</span>

<span class="token comment"># keep 4 weeks worth of backlogs</span>
rotate <span class="token number">4</span>			<span class="token comment"># 保留几个日志文件，这里预设是 4 个</span>

<span class="token comment"># create new (empty) log files after rotating old ones</span>
create				<span class="token comment"># 是否建立一个新的文件来继续存储新的数据</span>

<span class="token comment"># use date as a suffix of the rotated file</span>
dateext				<span class="token comment"># 是否为轮替的文件加上日期作为文件名</span>

<span class="token comment"># uncomment this if you want your log files compressed</span>
<span class="token comment">#compress			# 轮替的文件是否需要压缩</span>

<span class="token comment"># RPM packages drop log rotation information into this directory</span>
include /etc/logrotate.d		<span class="token comment"># 该目录中的所有文件都读进来执行 rotate 的工作</span>

<span class="token comment"># no packages own wtmp and btmp -- we&#39;ll rotate them here</span>
/var/log/wtmp <span class="token punctuation">{</span>		<span class="token comment"># 仅针对  /var/log/wtmp 所设置的参数</span>
    monthly									<span class="token comment"># 每个月一次</span>
    create 0664 root utmp		<span class="token comment"># 创建新文件的权限所属账户/群组</span>
    minsize 1M							<span class="token comment"># 文件容量超过 1M 后才进行 rotate</span>
    rotate <span class="token number">1</span>								<span class="token comment"># 仅保留一个，即只有 wtmp.1 </span>
<span class="token punctuation">}</span>
<span class="token comment"># wtmp 可记录登陆者与系统重新启动时的实际与来源主机以及登录期间的实际</span>
/var/log/btmp <span class="token punctuation">{</span>
    missingok
    monthly
    create 0600 root utmp
    rotate <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment"># system-specific logs may be also be configured here</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从配置文件中看到 <code>/etc/logrotate.d/</code> 目录是该配置文件的规范支持。用途就是方便添加自定义的配置文件，而不用把所有配置都写到主要的配置文件中。比如你开发了一个软件，有轮替日志文件的需求，就可以吧配置文件放到该目录下，就可以了</p><p>下面以 <code>rsyslog.service</code> 服务的文件，来设置它的 rotate</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 该文件是存在的，我们来修改与学习</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/logrotate.d/syslog </span>
/var/log/cron
/var/log/maillog
/var/log/messages
/var/log/secure
/var/log/spooler
<span class="token punctuation">{</span>
    missingok
    sharedscripts
    postrotate
        /bin/kill <span class="token parameter variable">-HUP</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/run/syslogd.pid <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null<span class="token variable">\`</span></span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null <span class="token operator">||</span> <span class="token boolean">true</span>
    endscript
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面来看看设置的语法</p><ul><li><p>文件名：可以用空格符号分割多个文件</p></li><li><p>参数：<code>{}</code> 中的配置</p></li><li><p>执行脚本：</p><p>可以调用外部指令来进行额外的命令，需要与 <code>sharedscripts...endscript</code> 的设置，可用环境含义：</p><ul><li><p>prerotate：在启动 logrotate 之前进行的指令，例如修改日志文件的属性等操作</p></li><li><p>postrotate：在做完 logrotate 之后启动的指令，例如重新启动（kill -HUP） 某个服务</p></li></ul></li></ul><p>​ 上面两个钩子在对于已加上特殊属性的文件处理上面，很重要方便</p><p>那么上述文件的配置含义为：</p><ul><li>该配置只对上述列出来的 5 个文件有效</li><li>每周一次、保留 4 个、且轮替下来的文件不进行压缩；这些都是默认值，并没有在该文件中配置</li><li>轮替完成后（postrotate）取得 syslog 的 PID 后，以 kill-HUP 方式重新启动 syslogd</li></ul><p>但是如果有特殊属性的话，比如使用了 <code>chattr +a</code>，那么该文件无法删除，也就是无法被更名，而 logrotate 的工作原理就是将当前的文件更名。这个时候就可以使用上面提供的两个钩子方法来解决这个问题</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/logrotate.d/syslog </span>
/var/log/cron
/var/log/maillog
/var/log/messages
/var/log/secure
/var/log/spooler
<span class="token punctuation">{</span>
	  sharedscripts
    prerotate
    	/usr/bin/chattr <span class="token parameter variable">-a</span> /var/log/messages
    endscript
    missingok
    sharedscripts
    postrotate
        /bin/kill <span class="token parameter variable">-HUP</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/run/syslogd.pid <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null<span class="token variable">\`</span></span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null <span class="token operator">||</span> <span class="token boolean">true</span>
				/usr/bin/chattr +a /var/log/messages   
   endscript
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示下：<code>kill -HUP</code> 指定的信号量含义是将 rsyslog.conf 资料重新读取一次，可以理解为 reload 操作</p><h2 id="🍀-实际测试-logrotate-动作" tabindex="-1"><a class="header-anchor" href="#🍀-实际测试-logrotate-动作" aria-hidden="true">#</a> 🍀 实际测试 logrotate 动作</h2><p>上述测试完成之后，测试下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">logrotate</span> <span class="token punctuation">[</span>-vf<span class="token punctuation">]</span> logfile

选项与参数：
	-v：启动显示模式，会显示 <span class="token function">logrotate</span> 运行的过程
	-f：无论是否符合配置文件的数据，强制每个日志文件都进行 rotate 的操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面执行一次看看整个流程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># logrotate -v /etc/logrotate.conf </span>
reading config <span class="token function">file</span> /etc/logrotate.conf		<span class="token comment"># 读取主要的配置文件</span>
including /etc/logrotate.d								<span class="token comment"># 读取模块化的外部配置文件</span>
reading config <span class="token function">file</span> bootlog
reading config <span class="token function">file</span> chrony
reading config <span class="token function">file</span> cups
<span class="token punctuation">..</span><span class="token punctuation">..</span>
Allocating <span class="token builtin class-name">hash</span> table <span class="token keyword">for</span> state file, size <span class="token number">15360</span> B

Handling <span class="token number">15</span> logs							<span class="token comment"># 共有 15 个日志文件</span>
<span class="token punctuation">..</span>.
rotating pattern: /var/log/cron
/var/log/maillog
/var/log/messages
/var/log/secure
/var/log/spooler
 weekly <span class="token punctuation">(</span><span class="token number">4</span> rotations<span class="token punctuation">)</span>
empty log files are rotated, old logs are removed
considering log /var/log/cron
  log does not need rotating <span class="token punctuation">(</span>log has been rotated at <span class="token number">2020</span>-3-15 <span class="token number">21</span>:37, that is not week ago yet<span class="token punctuation">)</span>
considering log /var/log/maillog
  log does not need rotating <span class="token punctuation">(</span>log has been rotated at <span class="token number">2020</span>-3-15 <span class="token number">21</span>:37, that is not week ago yet<span class="token punctuation">)</span>
considering log /var/log/messages		<span class="token comment"># 处理 messages 文件</span>
	<span class="token comment"># 由于时间未到，不需要操作</span>
  log does not need rotating <span class="token punctuation">(</span>log has been rotated at <span class="token number">2020</span>-3-15 <span class="token number">21</span>:37, that is not week ago yet<span class="token punctuation">)</span>
considering log /var/log/secure
  log does not need rotating <span class="token punctuation">(</span>log has been rotated at <span class="token number">2020</span>-3-15 <span class="token number">21</span>:37, that is not week ago yet<span class="token punctuation">)</span>
considering log /var/log/spooler
  log does not need rotating <span class="token punctuation">(</span>log has been rotated at <span class="token number">2020</span>-3-15 <span class="token number">21</span>:37, that is not week ago yet<span class="token punctuation">)</span>
not running postrotate script, since no logs were rotated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 2：强制 logrotate 操作</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># logrotate -v /etc/logrotate.conf </span>
rotating pattern: /var/log/cron
/var/log/maillog
/var/log/messages
/var/log/secure
/var/log/spooler
 forced from <span class="token builtin class-name">command</span> line <span class="token punctuation">(</span><span class="token number">4</span> rotations<span class="token punctuation">)</span>
empty log files are rotated, old logs are removed
considering log /var/log/cron
  log needs rotating
considering log /var/log/maillog
  log needs rotating
considering log /var/log/messages
  log needs rotating
considering log /var/log/secure
  log needs rotating
considering log /var/log/spooler
  log needs rotating
rotating log /var/log/cron, log-<span class="token operator">&gt;</span>rotateCount is <span class="token number">4</span>
dateext suffix <span class="token string">&#39;-20200316&#39;</span>
glob pattern <span class="token string">&#39;-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]&#39;</span>
rotating log /var/log/maillog, log-<span class="token operator">&gt;</span>rotateCount is <span class="token number">4</span>
dateext suffix <span class="token string">&#39;-20200316&#39;</span>
glob pattern <span class="token string">&#39;-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]&#39;</span>
rotating log /var/log/messages, log-<span class="token operator">&gt;</span>rotateCount is <span class="token number">4</span>
dateext suffix <span class="token string">&#39;-20200316&#39;</span>
glob pattern <span class="token string">&#39;-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]&#39;</span>
rotating log /var/log/secure, log-<span class="token operator">&gt;</span>rotateCount is <span class="token number">4</span>
glob pattern <span class="token string">&#39;-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]&#39;</span>
fscreate context <span class="token builtin class-name">set</span> to system_u:object_r:cron_log_t:s0
renaming /var/log/cron to /var/log/cron-20200316
creating new /var/log/cron mode <span class="token operator">=</span> 0600 uid <span class="token operator">=</span> <span class="token number">0</span> gid <span class="token operator">=</span> <span class="token number">0</span>
fscreate context <span class="token builtin class-name">set</span> to system_u:object_r:var_log_t:s0
renaming /var/log/maillog to /var/log/maillog-20200316
creating new /var/log/maillog mode <span class="token operator">=</span> 0600 uid <span class="token operator">=</span> <span class="token number">0</span> gid <span class="token operator">=</span> <span class="token number">0</span>
fscreate context <span class="token builtin class-name">set</span> to system_u:object_r:var_log_t:s0
<span class="token comment"># 重命名了文件，然后又创建了一个文件</span>
renaming /var/log/messages to /var/log/messages-20200316
creating new /var/log/messages mode <span class="token operator">=</span> 0600 uid <span class="token operator">=</span> <span class="token number">0</span> gid <span class="token operator">=</span> <span class="token number">0</span>
fscreate context <span class="token builtin class-name">set</span> to system_u:object_r:var_log_t:s0
renaming /var/log/secure to /var/log/secure-20200316
creating new /var/log/secure mode <span class="token operator">=</span> 0600 uid <span class="token operator">=</span> <span class="token number">0</span> gid <span class="token operator">=</span> <span class="token number">0</span>
fscreate context <span class="token builtin class-name">set</span> to system_u:object_r:var_log_t:s0
renaming /var/log/spooler to /var/log/spooler-20200316
creating new /var/log/spooler mode <span class="token operator">=</span> 0600 uid <span class="token operator">=</span> <span class="token number">0</span> gid <span class="token operator">=</span> <span class="token number">0</span>
running postrotate script
removing old log /var/log/cron-20200225
removing old log /var/log/maillog-20200225
removing old log /var/log/messages-20200225
removing old log /var/log/secure-20200225
removing old log /var/log/spooler-20200225

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /var/log/messages*; lsattr /var/log/messages</span>
-rw-------. <span class="token number">1</span> root root    <span class="token number">345</span> Mar <span class="token number">16</span> 00:01 /var/log/messages
-rw-------. <span class="token number">1</span> root root <span class="token number">756608</span> Mar  <span class="token number">1</span> <span class="token number">18</span>:30 /var/log/messages-20200301
-rw-------. <span class="token number">1</span> root root <span class="token number">270175</span> Mar  <span class="token number">8</span> <span class="token number">12</span>:23 /var/log/messages-20200308
-rw-------. <span class="token number">1</span> root root <span class="token number">187277</span> Mar <span class="token number">15</span> <span class="token number">21</span>:30 /var/log/messages-20200315
-rw-------. <span class="token number">1</span> root root  <span class="token number">12425</span> Mar <span class="token number">16</span> 00:00 /var/log/messages-20200316
-----a---------- /var/log/messages
<span class="token comment"># 上面我们配置的处理特殊属性的脚本生效了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 logrotate 已经加入到 crontab 里面了，只需要留意下 <code>/var/log/messages</code> 是否有类似如下的信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;www.rsyslog.com&#39; /var/log/messages</span>
Mar <span class="token number">16</span> 00:00:42 study rsyslogd: <span class="token punctuation">[</span>origin <span class="token assign-left variable">software</span><span class="token operator">=</span><span class="token string">&quot;rsyslogd&quot;</span> <span class="token assign-left variable">swVersion</span><span class="token operator">=</span><span class="token string">&quot;8.24.0-38.el7&quot;</span> x-pid<span class="token operator">=</span><span class="token string">&quot;7107&quot;</span> x-info<span class="token operator">=</span><span class="token string">&quot;http://www.rsyslog.com&quot;</span><span class="token punctuation">]</span> rsyslogd was HUPed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是 rsyslogd 重新启动的时间，（因为 <code>/etc/logrotate.d/syslog</code> 中配置了重新启动的）</p><h2 id="🍀-自定义日志文件的轮替功能" tabindex="-1"><a class="header-anchor" href="#🍀-自定义日志文件的轮替功能" aria-hidden="true">#</a> 🍀 自定义日志文件的轮替功能</h2><p>在前面章节总， 建立了一个 <code>/var/log/admin.log</code> 文件，需要配置如下需求</p><ul><li>添加 <code>+a</code> 属性</li><li>一个月轮替一次</li><li>当文件大于 10MB 时，则主动轮替，不需要考虑一个月的时间</li><li>保存 5 个备份文件</li><li>备份文件需要压缩</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 添加 a 属性，并测试是否有效</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># chattr +a /var/log/admin.log</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># lsattr /var/log/admin.log</span>
-----a---------- /var/log/admin.log
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rm /var/log/admin.log </span>
rm: remove regular <span class="token function">file</span> <span class="token string">&#39;/var/log/admin.log&#39;</span>? y
rm: cannot remove <span class="token string">&#39;/var/log/admin.log&#39;</span><span class="token builtin class-name">:</span> Operation not permitted
<span class="token comment"># 连 root 都无法删除</span>

<span class="token comment"># 2. 建立 logrotate 配置文件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/logrotate.d/admin</span>
/var/log/admin.log <span class="token punctuation">{</span>
  monthly		<span class="token comment"># 每个月一次</span>
  <span class="token assign-left variable">size</span><span class="token operator">=</span>10M	<span class="token comment"># 文件容量大于 10M 则开始处置</span>
  rotate <span class="token number">5</span>	<span class="token comment"># 保留 5 个</span>
  compress	<span class="token comment"># 压缩</span>
  sharedscripts
  prerotate
        /usr/bin/chattr <span class="token parameter variable">-a</span> /var/log/admin.log
  endscript
  sharedscripts
  postrotate
  			<span class="token comment"># 就是这里，每个都要重新启动啊？难该服务启动得有点频繁啊</span>
        /bin/kill <span class="token parameter variable">-HUP</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/run/syslogd.pid <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null<span class="token variable">\`</span></span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null <span class="token operator">||</span> <span class="token boolean">true</span>
        /usr/bin/chattr +a /var/log/admin.log
  endscript
<span class="token punctuation">}</span>

<span class="token comment"># 3. 测试下 logrotate 相关功能信息显示</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># logrotate -v /etc/logrotate.conf </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># logrotate -v /etc/logrotate.conf             </span>
reading config <span class="token function">file</span> /etc/logrotate.conf
including /etc/logrotate.d
reading config <span class="token function">file</span> admin		<span class="token comment"># 看到已经加载我们的配置文件了</span>
<span class="token punctuation">..</span>.
rotating pattern: /var/log/admin.log  <span class="token number">10485760</span> bytes <span class="token punctuation">(</span><span class="token number">5</span> rotations<span class="token punctuation">)</span>
empty log files are rotated, old logs are removed
considering log /var/log/admin.log
  log does not need rotating <span class="token punctuation">(</span>log size is below the <span class="token string">&#39;size&#39;</span> threshold<span class="token punctuation">)</span>
not running prerotate script, since no logs will be rotated
<span class="token comment"># 可以看到，检测到 size 不够，不用处理</span>

<span class="token comment"># 4. 强制执行 logrotate ，并查看相关信息</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># logrotate -vf /etc/logrotate.conf</span>
rotating pattern: /var/log/admin.log  forced from <span class="token builtin class-name">command</span> line <span class="token punctuation">(</span><span class="token number">5</span> rotations<span class="token punctuation">)</span>
empty log files are rotated, old logs are removed
considering log /var/log/admin.log
  log needs rotating
rotating log /var/log/admin.log, log-<span class="token operator">&gt;</span>rotateCount is <span class="token number">5</span>
dateext suffix <span class="token string">&#39;-20200316&#39;</span>
glob pattern <span class="token string">&#39;-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]&#39;</span>
glob finding old rotated logs failed
running prerotate script
fscreate context <span class="token builtin class-name">set</span> to system_u:object_r:var_log_t:s0
renaming /var/log/admin.log to /var/log/admin.log-20200316
creating new /var/log/admin.log mode <span class="token operator">=</span> 0600 uid <span class="token operator">=</span> <span class="token number">0</span> gid <span class="token operator">=</span> <span class="token number">0</span>
running postrotate script
compressing log with: /bin/gzip
<span class="token builtin class-name">set</span> default create context to system_u:object_r:var_log_t:s0

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># lsattr /var/log/admin.log*       </span>
-----a---------- /var/log/admin.log
---------------- /var/log/admin.log-20200316.gz
<span class="token comment"># 可以看到的确被压缩过，当前的 a 属性也正常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),i=[o];function r(c,p){return s(),a("div",null,i)}const m=n(t,[["render",r],["__file","03.html.vue"]]);export{m as default};
