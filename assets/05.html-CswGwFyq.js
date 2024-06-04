import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const o={},p=e(`<h1 id="分析登录文件" tabindex="-1"><a class="header-anchor" href="#分析登录文件" aria-hidden="true">#</a> 分析登录文件</h1><p>日志文件的分析是很重要的，可以使用 vim 或则是 journalctl 查阅相关信息，还有之前提到过的 last、lastlog、dmesg 等软件。</p><p>不过数据非常的分散，所以提供了 logwatch 软件来帮助我们</p><h2 id="🍀-centos-预设提供的-logwatch" tabindex="-1"><a class="header-anchor" href="#🍀-centos-预设提供的-logwatch" aria-hidden="true">#</a> 🍀 CentOS 预设提供的 logwatch</h2><p>该工具每天分析一次日志文件，并将数据以 email 的格式寄送给 root。更详细的信息可以到 logwatch 官网 http://www.logwatch.org 查看</p><p>老样子，该工具默认未安装，拿出你的光盘挂载后，开始安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum install /mnt/Packages/perl-5.*.rpm  /mnt/Packages/perl-Date-Manip-*.rpm /mnt/Packages/perl-Sys-CPU-*.rpm /mnt/Packages/perl-Sys-MemInfo-*.rpm /mnt/Packages/logwatch-*.rpm</span>

<span class="token comment"># 需要安装 perl 依赖与软件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /etc/cron.daily/0logwatch </span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">434</span> Aug <span class="token number">16</span>  <span class="token number">2018</span> /etc/cron.daily/0logwatch
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># /etc/cron.daily/0logwatch </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成之后，它已经把脚本写到 cron 下面去了，一天会自动运行一次，然后通过邮件发送给 root；也可以直接运行 <code>/etc/cron.daily/0logwatch </code>，笔者看了下内容，内部直接运行了 <code>/usr/sbin/logwatch</code> 指令。手动运行之后，使用 root 账户去查看 email 就可以了。提示：手动运行的话，如果数据流很大当前终端机会阻塞，直到分析完成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mail</span>
Heirloom Mail version <span class="token number">12.5</span> <span class="token number">7</span>/5/10.  Type ? <span class="token keyword">for</span> help.
<span class="token string">&quot;/var/spool/mail/root&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span> message <span class="token number">1</span> new
<span class="token operator">&gt;</span>N  <span class="token number">1</span> logwatch@study.cento  Mon Mar <span class="token number">16</span> 04:07 <span class="token number">128</span>/4920  <span class="token string">&quot;Logwatch for study.centos.mrcode (Linux)&quot;</span>
<span class="token operator">&amp;</span> <span class="token number">1</span>
Message  <span class="token number">1</span>:
From root@study.centos.mrcode  Mon Mar <span class="token number">16</span> 04:07:23 <span class="token number">2020</span>
Return-Path: <span class="token operator">&lt;</span>root@study.centos.mrcode<span class="token operator">&gt;</span>
X-Original-To: root
Delivered-To: root@study.centos.mrcode
To: root@study.centos.mrcode
From: logwatch@study.centos.mrcode
Subject: Logwatch <span class="token keyword">for</span> study.centos.mrcode <span class="token punctuation">(</span>Linux<span class="token punctuation">)</span>
Auto-Submitted: auto-generated
Precedence: bulk
Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span><span class="token string">&quot;iso-8859-1&quot;</span>
Date: Mon, <span class="token number">16</span> Mar <span class="token number">2020</span> 04:07:22 +0800 <span class="token punctuation">(</span>CST<span class="token punctuation">)</span>
Status: R

 <span class="token comment"># 告知当前 logwatch 版本，当次分析的时间等信息</span>
 <span class="token comment">################### Logwatch 7.4.0 (03/01/11) #################### </span>
        Processing Initiated: Mon Mar <span class="token number">16</span> 04:07:22 <span class="token number">2020</span>
        Date Range Processed: yesterday
                              <span class="token punctuation">(</span> <span class="token number">2020</span>-Mar-15 <span class="token punctuation">)</span>
                              Period is day.
        Detail Level of Output: <span class="token number">0</span>
        Type of Output/Format: mail / text
        Logfiles <span class="token keyword">for</span> Host: study.centos.mrcode
 <span class="token comment">################################################################## </span>
 <span class="token comment"># 下面开始一项一项的分析</span>
 --------------------- Cron Begin ------------------------ 

 **Unmatched Entries**
 INFO <span class="token punctuation">(</span>RANDOM_DELAY will be scaled with factor <span class="token number">25</span>% <span class="token keyword">if</span> used.<span class="token punctuation">)</span>
 ---------------------- Cron End ------------------------- 

 
 --------------------- Kernel Begin ------------------------ 

 
 WARNING:  Kernel Errors Present
    <span class="token punctuation">[</span>drm:vmw_host_log <span class="token punctuation">[</span>vmwgfx<span class="token punctuation">]</span><span class="token punctuation">]</span> *ERROR* Failed to send  <span class="token punctuation">..</span>.:  <span class="token number">2</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 
 ---------------------- Kernel End ------------------------- 

 
 --------------------- pam_unix Begin ------------------------ 

 gdm-launch-environment:
    Unknown Entries:
       session opened <span class="token keyword">for</span> user gdm by <span class="token punctuation">(</span>uid<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>: <span class="token number">1</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 
 su-l:
    Sessions Opened:
       mrcode -<span class="token operator">&gt;</span> root: <span class="token number">3</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 <span class="token punctuation">..</span><span class="token punctuation">..</span>
 
 --------------------- SSHD Begin ------------------------ 

 
 SSHD Started: <span class="token number">2</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 
 Users logging <span class="token keyword">in</span> through sshd:
    mrcode:
       <span class="token number">192.168</span>.0.105: <span class="token number">4</span> <span class="token builtin class-name">times</span>
 
 **Unmatched Entries**
 error: no <span class="token function">more</span> sessions <span class="token builtin class-name">:</span> <span class="token number">8</span> time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 
 ---------------------- SSHD End ------------------------- 

 <span class="token comment"># 还有对磁盘的使用状态</span>
 --------------------- Disk Space Begin ------------------------ 

 Filesystem               Size  Used Avail Use% Mounted on
 devtmpfs                 565M     <span class="token number">0</span>  565M   <span class="token number">0</span>% /dev
 /dev/mapper/centos-root   10G  <span class="token number">5</span>.1G  <span class="token number">5</span>.0G  <span class="token number">51</span>% /
 /dev/sda2               1014M  181M  834M  <span class="token number">18</span>% /boot
 /dev/mapper/centos-home  <span class="token number">5</span>.0G  927M  <span class="token number">4</span>.1G  <span class="token number">19</span>% /home
 
 
 ---------------------- Disk Space End ------------------------- 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-作者写的文件分析工具" tabindex="-1"><a class="header-anchor" href="#🍀-作者写的文件分析工具" aria-hidden="true">#</a> 🍀 作者写的文件分析工具</h2><p>下载地址：http://linux.vbird.org//linux_basic/0570syslog//logfile_centos7.tar.gz</p><p>下载之后，在根目录解压，文件会进入相应的目录，包括定时任务的文件，每日 00:10 分析一次系统注册表文件，该工具只适用于 journalctl 的数据系统（CentOS 7.x）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># tar -zxvf logfile_centos7.tar.gz -C /</span>
etc/cron.d/vbirdlogfile
root/bin/logfile/
root/bin/logfile/function/
root/bin/logfile/function/samba
root/bin/logfile/function/dovecot
root/bin/logfile/function/sendmail
root/bin/logfile/function/proftp
root/bin/logfile/function/pop3
root/bin/logfile/function/procmail
root/bin/logfile/function/zzz.sh
root/bin/logfile/function/ssh
root/bin/logfile/function/ports
root/bin/logfile/function/postfix
root/bin/logfile/function/openwebmail
root/bin/logfile/function/wuftp
root/bin/logfile/logfile.sh
<span class="token comment"># 可以看到函数挺多的</span>
<span class="token comment"># 这个是定时任务的文件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/cron.d/vbirdlogfile </span>
<span class="token number">10</span> <span class="token number">0</span> * * * root /bin/bash /root/bin/logfile/logfile.sh <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token comment"># 手动执行</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># sh /root/bin/logfile/logfile.sh </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># sh /root/bin/logfile/logfile.sh </span>
/sbin/restorecon:  Warning no default label <span class="token keyword">for</span> /dev/shm/logfile/logfile_mail.txt

grep: /etc/postfix/body_checks: No such <span class="token function">file</span> or directory
cat: /dev/shm/logfile//postlog.1: No such <span class="token function">file</span> or directory

<span class="token comment"># 打开邮件，就看到有信息了</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mail</span>
Heirloom Mail version <span class="token number">12.5</span> <span class="token number">7</span>/5/10.  Type ? <span class="token keyword">for</span> help.
<span class="token string">&quot;/var/spool/mail/root&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span> messages <span class="token number">1</span> new
    <span class="token number">1</span> logwatch@study.cento  Mon Mar <span class="token number">16</span> 04:07 <span class="token number">129</span>/4931  <span class="token string">&quot;Logwatch for study.centos.mrcode (Linux)&quot;</span>
<span class="token operator">&gt;</span>N  <span class="token number">2</span> root                  Mon Mar <span class="token number">16</span> 04:24  <span class="token number">67</span>/3085  <span class="token string">&quot;study.centos.mrcode logfile analysis results&quot;</span>

<span class="token comment"># 查看内容，感觉还是可以的</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> system summary <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
Linux kernel  <span class="token builtin class-name">:</span>  Linux version <span class="token number">3.10</span>.0-1062.el7.x86_64 <span class="token punctuation">(</span>mockbuild@kbuilder.bsys.centos.org<span class="token punctuation">)</span>
CPU informatin:  <span class="token number">1</span> Intel<span class="token punctuation">(</span>R<span class="token punctuation">)</span> Core<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> i7-7820HQ CPU @ <span class="token number">2</span>.90GHz
CPU speed     <span class="token builtin class-name">:</span>  <span class="token number">2904.000</span> MHz
<span class="token function">hostname</span> is   <span class="token builtin class-name">:</span>  study.centos.mrcode
Network IP    <span class="token builtin class-name">:</span>  <span class="token number">192.168</span>.0.128 <span class="token number">192.168</span>.122.1
Check <span class="token function">time</span>    <span class="token builtin class-name">:</span>  <span class="token number">2020</span>/March/16 04:23:52 <span class="token punctuation">(</span> Monday <span class="token punctuation">)</span>
Summary <span class="token function">date</span>  <span class="token builtin class-name">:</span>  Mar <span class="token number">15</span>
Up <span class="token builtin class-name">times</span>      <span class="token builtin class-name">:</span>  <span class="token number">8</span>:10,
Filesystem summary: 
       Filesystem              Type      Size  Used Avail Use% Mounted on
       devtmpfs                devtmpfs  565M     <span class="token number">0</span>  565M   <span class="token number">0</span>% /dev
       tmpfs                   tmpfs     582M  144K  582M   <span class="token number">1</span>% /dev/shm
       tmpfs                   tmpfs     582M  <span class="token number">1</span>.3M  581M   <span class="token number">1</span>% /run
       tmpfs                   tmpfs     582M     <span class="token number">0</span>  582M   <span class="token number">0</span>% /sys/fs/cgroup
       /dev/mapper/centos-root xfs        10G  <span class="token number">5</span>.1G  <span class="token number">5</span>.0G  <span class="token number">51</span>% /
       /dev/sda2               xfs      1014M  181M  834M  <span class="token number">18</span>% /boot
       /dev/mapper/centos-home xfs       <span class="token number">5</span>.0G  927M  <span class="token number">4</span>.1G  <span class="token number">19</span>% /home
       tmpfs                   tmpfs     117M   12K  117M   <span class="token number">1</span>% /run/user/42
       tmpfs                   tmpfs     117M     <span class="token number">0</span>  117M   <span class="token number">0</span>% /run/user/1000
       /dev/sr0                iso9660   <span class="token number">4</span>.4G  <span class="token number">4</span>.4G     <span class="token number">0</span> <span class="token number">100</span>% /mnt
 
 
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Ports 的相關分析資訊 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
主機啟用的 port 與相關的 process owner：
對外部介面開放的 
   ports <span class="token punctuation">(</span>PID<span class="token operator">|</span>owner<span class="token operator">|</span><span class="token builtin class-name">command</span><span class="token punctuation">)</span>
       tcp <span class="token number">22</span><span class="token operator">|</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token operator">|</span>/usr/sbin/sshd <span class="token parameter variable">-D</span>
       tcp <span class="token number">25</span><span class="token operator">|</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token operator">|</span>/usr/libexec/postfix/master <span class="token parameter variable">-w</span>
       tcp <span class="token number">53</span><span class="token operator">|</span><span class="token punctuation">(</span>nobody<span class="token punctuation">)</span><span class="token operator">|</span>/usr/sbin/dnsmasq --conf-file<span class="token operator">=</span>/var/lib/libvirt/dnsmasq/de
       tcp <span class="token number">111</span><span class="token operator">|</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token operator">|</span>/usr/lib/systemd/systemd --switched-root <span class="token parameter variable">--system</span> <span class="token parameter variable">--deseri</span>
       tcp <span class="token number">514</span><span class="token operator">|</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token operator">|</span>/usr/sbin/rsyslogd <span class="token parameter variable">-n</span>
       tcp <span class="token number">631</span><span class="token operator">|</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token operator">|</span>/usr/sbin/cupsd <span class="token parameter variable">-f</span>
       udp <span class="token number">53</span><span class="token operator">|</span><span class="token punctuation">(</span>nobody<span class="token punctuation">)</span><span class="token operator">|</span>/usr/sbin/dnsmasq --conf-file<span class="token operator">=</span>/var/lib/libvirt/dnsmasq/de
       udp <span class="token number">67</span><span class="token operator">|</span><span class="token punctuation">(</span>nobody<span class="token punctuation">)</span><span class="token operator">|</span>/usr/sbin/dnsmasq --conf-file<span class="token operator">=</span>/var/lib/libvirt/dnsmasq/de
       udp <span class="token number">111</span><span class="token operator">|</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token operator">|</span>/usr/lib/systemd/systemd --switched-root <span class="token parameter variable">--system</span> <span class="token parameter variable">--deseri</span>
       udp <span class="token number">1008</span><span class="token operator">|</span><span class="token punctuation">(</span>rpc<span class="token punctuation">)</span><span class="token operator">|</span>/sbin/rpcbind <span class="token parameter variable">-w</span>
       udp <span class="token number">5353</span><span class="token operator">|</span><span class="token punctuation">(</span>avahi<span class="token punctuation">)</span><span class="token operator">|</span>avahi-daemon: running <span class="token punctuation">[</span>study.local<span class="token punctuation">]</span>
       udp <span class="token number">45105</span><span class="token operator">|</span><span class="token punctuation">(</span>avahi<span class="token punctuation">)</span><span class="token operator">|</span>avahi-daemon: running <span class="token punctuation">[</span>study.local<span class="token punctuation">]</span>

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> SSH 的登錄檔資訊彙整 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
一共成功登入的次數：   <span class="token number">4</span>
       帳號     來源位址    次數
       mrcode     <span class="token number">192.168</span>.0.105     <span class="token number">4</span>
 
 
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Postfix 的登錄檔資訊彙整 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
使用者信箱受信次數：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),t=[p];function l(i,c){return s(),a("div",null,t)}const d=n(o,[["render",l],["__file","05.html.vue"]]);export{d as default};
