import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,d as n}from"./app-CvlAI_tu.js";const o={},p=n(`<h1 id="什么是登录文件" tabindex="-1"><a class="header-anchor" href="#什么是登录文件" aria-hidden="true">#</a> 什么是登录文件</h1><p>记录系统在什么时候由哪个程序做了什么样的行为，发生了何种的事件。按笔者的理解就是日志文件</p><p>看完下面章节的 <strong>Linux 常见的登录文件</strong> ，这里笔者才理解这个登录文件其实就是各个服务的日志文件，不过系统上有大量的系统服务，一些常用的日志文件已经被公认所熟知而已</p><h2 id="🍀-centos7-登录文件简易说明" tabindex="-1"><a class="header-anchor" href="#🍀-centos7-登录文件简易说明" aria-hidden="true">#</a> 🍀 CentOS7 登录文件简易说明</h2><p>背景下又很多的 daemons 同时在工作，他们显示的一些信息最终会记录到登录文件中。记录这些重要的信息就是登录文件的工作</p><h3 id="登录文件的重要性" tabindex="-1"><a class="header-anchor" href="#登录文件的重要性" aria-hidden="true">#</a> 登录文件的重要性</h3><p>很重要，重要到系统管理员需要随时注意它，可以这样说：</p><ul><li><p>解决系统方面的错误</p><p>系统偶尔可能会出现一些错误，包括硬件检测不到或是某些系统服务无法运行的情况。很多信息都会记录到登录文件中，包括第 16 章中 SELinux 与登录文件的关系，查询登录文件可以克服一些系统问题</p></li><li><p>解决网络服务的问题</p><p>做完某些网络服务的设置后，却无法顺利启动该服务，此时也可以去查询登录文件。</p><p>比如：无法启动邮件服务器 postfix，可以查询 <code>/var/log/maillog</code> 通常可以找到问题所在</p></li><li><p>过往事件记录</p><p>例如：发现 httpd 软件在某个时刻流量特别大，可以去登录文件找出该时间段哪些 IP 在联机与查询的网页数据，就能知道原因了。还有你的主机被黑客当做跳板攻击其他的主机，那么登录文件就会记录攻击者的 IP，那么人家找到你，你协助人家继续追查来源</p></li></ul><p>所以在解决 Linux 的错误问题时，仔细观察屏幕上的错误信息 与 登录文件的错误信息，几乎上可以解决大部分的 Linux 问题</p><h3 id="linux-常见的登录文件" tabindex="-1"><a class="header-anchor" href="#linux-常见的登录文件" aria-hidden="true">#</a> Linux 常见的登录文件</h3><p>登录文件记录了很多的详细信息，因此一般权限设置为仅 root 能读取。常见的登录文件有：</p><ul><li><p><code>/var/log/boot.log</code></p><p>开机时系统核心侦测与启动硬件，接下来开始各种核心支持的功能启动等。这些流程都会记录在该文件中。且只记录当次开机启动的信息，老的信息不回保留下来</p></li><li><p><code>/varlog/cron</code></p><p>第 15 章的工作排程 crontab，有没有被实际执行过？执行过程中有没有发生错误？ <code>/etc/crontab</code> 是否编写正确，都可以检查该文件</p></li><li><p><code>/varlog/dmesg</code></p><p>记录系统再开机时核心侦测过程所产生的各项信息。CentOS 默认将开机时核心的硬件侦测过程取消显示，因此额外奖数据记录在该文件中</p></li><li><p><code>/varlog/lastog</code></p><p>记录系统上所有的账户最近一次登陆系统的相关信息。第 13 章讲到的 lastlog 指令就是利用该数据显示的</p></li><li><p><code>/varlog/maillog</code> 或 <code>/varlog/mail/*</code></p><p>记录邮件的往来信息，其实主要记录 postfix（SMTP 协议提供者） 与 dovecot（POP3 协议提供者）所产生的信息。postfix 和 dovecot 分别实现了 SMTP（发信） 与 POP3（收信） 的通信协议</p></li><li><p><code>/varlog/secure</code></p><p>基本上只要牵涉到需要输入账户密码的软件，当登陆时，不管登陆正确与错误，都会被记录在此文件中。</p></li><li><p><code>/varlog/wtmp</code> <code>/varlog/faillog</code></p><p>可以记录正确登陆的账户信息（wtmp）与错误登录时所使用的账户信息（faillog）。第 10 章中谈到的 last 就是读取 wtmp 来显示的，这对追踪一般账户的使用行为很有帮助</p></li><li><p><code>/varlog/httpd/*</code> <code>/varlog/samba/*</code></p><p>不同的网络服务会使用他们自己的登录文件来记载他们自己产生的各项信息。上述目录内则是个别服务的登录文件</p></li></ul><p>常见日志文件就这么几个，但是不同的 Linux distribution ，通常只是文件名不同（除了 <code>/etc/lgo/messages</code> 外）。所以需要查询你 Linux 上的日志文件设置数据，才能知道文件名是什么</p><h3 id="日志文件所需相关服务-daemon-与程序" tabindex="-1"><a class="header-anchor" href="#日志文件所需相关服务-daemon-与程序" aria-hidden="true">#</a> 日志文件所需相关服务 daemon 与程序</h3><p>日志文件的产生基本上有两种方式：</p><ul><li><p>由软件开发商自行定义写入的文件与相关格式</p></li><li><p>Linux distribution 提供的日志文件管理服务统一管理</p><p>只需要将信息丢给该服务后，会自己分类将各种信息放到相关的文件中去。CentOS 提供 rsyslog.service 来管理</p></li></ul><p>由于日志文件数据大，所以需要通过 logrotate（日志文件轮替）来自动化处理日志文件容量与更新的问题</p><p>logrotate 将旧文件更名，然后新建空白文件。完成备份的效果。如果旧的记录（大概几个月）保存了一段时间都没有问题，那么就可以让系统自动将旧文件删掉</p><p>总结：针对日志文件所需的功能，需要的服务于程序有：</p><ul><li><code>systemd-journald.service</code>：最主要的信息接收者，由 systemd 提供</li><li>rsyslog.service：主要登录系统与网络等服务的信息</li><li>logrotate：主要在进行日志文件的轮替功能</li></ul><h3 id="systemd-提供的-journalctl-日志管理" tabindex="-1"><a class="header-anchor" href="#systemd-提供的-journalctl-日志管理" aria-hidden="true">#</a> <code>systemd 提供的 journalctl</code> 日志管理</h3><p>CentOS 7 有 rsyslog.service，最上层还使用了 systemd 提供的 <code>systemd-journald.service</code> 的日志管理功能。</p><p>基本那个由 systemd 启动的服务，如果再启动或结束的过程中发生一些问题或则是正常的信息，就会将该信息由 <code>systemd-journald.service</code> 以二进制的方式记录下来，之后再将该信息发送给 rsyslog.service 做进一步的记载</p><p><code>systemd-journald.service</code> 的记录主要都放在内存中，可以通过 journalctl 以及 systemctl status unit.service 来查看各个不同服务的日志文件。好处就是日志文件可以随着个别服务让你查阅，在单一服务处理上，比去查询 <code>/var/log/message</code> 去大海捞针要方便得多</p><p>因为 <code>systemd-journald.service</code> 里面很多观念沿用 rsyslog.service 相关信息，所以本章先从 rsyslog.service 将其，再讲解 journalctl 并进一步了解 systemd 是怎么去记录日志文件的功能的</p><h2 id="🍀-日志内容的一般格式" tabindex="-1"><a class="header-anchor" href="#🍀-日志内容的一般格式" aria-hidden="true">#</a> 🍀 日志内容的一般格式</h2><p>每条信息均会记录以下几个重要数据：</p><ul><li>事件发生的日期与时间</li><li>发生此事件的主机名</li><li>启动此事件的服务名称（如 systemd）或指令函数名称（如 su）</li><li>该信息的实际数据内容</li></ul><p>还有就是信息的 <strong>详细度</strong> 是可以设置的，下面拿登录时一定会记录账户信息的 <code>/var/log/secure</code> 为例讲解</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study system<span class="token punctuation">]</span><span class="token comment"># cat /var/log/secure</span>
Mar <span class="token number">20</span> <span class="token number">16</span>:35:21 study sshd<span class="token punctuation">[</span><span class="token number">10579</span><span class="token punctuation">]</span>: pam_unix<span class="token punctuation">(</span>sshd:session<span class="token punctuation">)</span>: session closed <span class="token keyword">for</span> user root
Mar <span class="token number">20</span> <span class="token number">16</span>:35:22 study sshd<span class="token punctuation">[</span><span class="token number">23472</span><span class="token punctuation">]</span>: Accepted password <span class="token keyword">for</span> root from <span class="token number">192.168</span>.4.170 port <span class="token number">49517</span> ssh2
Mar <span class="token number">20</span> <span class="token number">16</span>:35:22 study sshd<span class="token punctuation">[</span><span class="token number">23472</span><span class="token punctuation">]</span>: pam_unix<span class="token punctuation">(</span>sshd:session<span class="token punctuation">)</span>: session opened <span class="token keyword">for</span> user root by <span class="token punctuation">(</span>uid<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment"># 日期时间	HOST	服务于相关函数		信息说明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拿上面第三行数据来说明，在 3月20日 16:35:22 在名为 study 的主机上，由 sshd 登录了，相关权限是通过 pam_unix 模块处理的</p><p>有很多信息可以查询，尤其是 <code>/var/log/messages</code> 的内容。 一个号的系统管理员，要常常检查日志文件内容，尤其是发生以下几种情况时：</p><ul><li>当你觉得系统不太正常时</li><li>某个 daemon 老是无法正常启动时</li><li>某个使用者老是无法登陆时</li><li>某个 daemon 执行过程中老是不顺畅时</li></ul><p>等等情况，记得要去查询日志文件</p><p>下面是作者的一个处理方式：当无法启动某个服务时，会再最后一次启动该服务后，立即检查日志文件，</p><ol><li>找到现在时间的日志信息（看第 1 字段）</li><li>找到想要查询哪个服务（看第 3 字段）</li><li>检查第 4 字段，来找到具体的错误信息</li><li>第 2 字段是主机名：可以把一台服务器做成一个日志文件服务器，可以收集来自其他服务器的日志文件数据</li></ol>`,36),l=[p];function t(i,c){return e(),a("div",null,l)}const u=s(o,[["render",t],["__file","01.html.vue"]]);export{u as default};
