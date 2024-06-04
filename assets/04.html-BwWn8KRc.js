import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as r,a as s,e as n,b as e,w as l,d as a}from"./app-CvlAI_tu.js";const u={},d=a(`<h1 id="srpm-的使用-rpmbuild" tabindex="-1"><a class="header-anchor" href="#srpm-的使用-rpmbuild" aria-hidden="true">#</a> SRPM 的使用：rpmbuild</h1><p>注意：默认为安装该软件，可通过 <code>yum install rpm-build</code> 安装</p><p>假如你有一个 SRPM 的文件，如何安装？如何修改 SPRM 里面的源码？如何重新编译？</p><h2 id="🍀-利用默认值安装-srpm-文件-rebuild-recompile" tabindex="-1"><a class="header-anchor" href="#🍀-利用默认值安装-srpm-文件-rebuild-recompile" aria-hidden="true">#</a> 🍀 利用默认值安装 SRPM 文件 (<code>--rebuild/--recompile</code>)</h2><p>假如你有一个 SRPM 文件，不想修改里面的源码文件，可以直接编译安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rpmbuild <span class="token parameter variable">--rebuild</span> xx.src.rpm
rpmbuild <span class="token parameter variable">--recompile</span> xx.src.rpm

主要选项有：
	--rebuild：仅执行「编译」与「打包」动作
	--recompile：执行「编译」「打包」「安装」动作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上两个选项都没有修改过 SRPM 内的设置，仅通过再次编译来产生 RPM 可安装软件文件。一般来说，如果编译顺利的话，那么编译过程所产生的中间暂存盘会被自动删除，如果发生任何错误，则中间文件会被保留在系统上，以供我们除错使用</p>`,7),m={href:"http://vault.centos.org/",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载软件</span>
<span class="token function">wget</span> http://vault.centos.org/7.0.1406/updates/Source/SPackages/ntp-4.2.6p5-19.el7.centos.src.rpm

<span class="token comment"># 尝试直接编译</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rpmbuild --rebuild /root/ntp-4.2.6p5-19.el7.centos.src.rpm </span>
warning: user mockbuild does not exist - using root
warning: group mockbuild does not exist - using root
<span class="token punctuation">..</span>.
error: Failed build dependencies:
        libcap-devel is needed by ntp-4.2.6p5-19.el7.x86_64
        openssl-devel is needed by ntp-4.2.6p5-19.el7.x86_64
        libedit-devel is needed by ntp-4.2.6p5-19.el7.x86_64
        pps-tools-devel is needed by ntp-4.2.6p5-19.el7.x86_64
        autogen is needed by ntp-4.2.6p5-19.el7.x86_64
        autogen-libopts-devel is needed by ntp-4.2.6p5-19.el7.x86_64
<span class="token comment"># 会告诉你有相依赖的软件未安装，</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum install libcap-devel openssl-devel libedit-devel pps-tools-devel autogen autogen-libopts-devel</span>

<span class="token comment"># 再次尝试编译</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rpmbuild --rebuild /root/ntp-4.2.6p5-19.el7.centos.src.rpm </span>
<span class="token comment"># 会经过一段漫长的时间进行编译</span>
<span class="token punctuation">..</span>.
Checking <span class="token keyword">for</span> unpackaged file<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: /usr/lib/rpm/check-files /root/rpmbuild/BUILDROOT/ntp-4.2.6p5-19.el7.centos.x86_64
Wrote: /root/rpmbuild/RPMS/x86_64/ntp-4.2.6p5-19.el7.x86_64.rpm
Wrote: /root/rpmbuild/RPMS/noarch/ntp-perl-4.2.6p5-19.el7.noarch.rpm
Wrote: /root/rpmbuild/RPMS/x86_64/ntpdate-4.2.6p5-19.el7.x86_64.rpm
Wrote: /root/rpmbuild/RPMS/x86_64/sntp-4.2.6p5-19.el7.x86_64.rpm
Wrote: /root/rpmbuild/RPMS/noarch/ntp-doc-4.2.6p5-19.el7.noarch.rpm
Wrote: /root/rpmbuild/RPMS/x86_64/ntp-debuginfo-4.2.6p5-19.el7.x86_64.rpm
Executing<span class="token punctuation">(</span>%clean<span class="token punctuation">)</span>: /bin/sh <span class="token parameter variable">-e</span> /var/tmp/rpm-tmp.8JAsU0
+ <span class="token builtin class-name">umask</span> 022
+ <span class="token builtin class-name">cd</span> /root/rpmbuild/BUILD
+ <span class="token builtin class-name">cd</span> ntp-4.2.6p5
+ /usr/bin/rm <span class="token parameter variable">-rf</span> /root/rpmbuild/BUILDROOT/ntp-4.2.6p5-19.el7.centos.x86_64
+ <span class="token builtin class-name">exit</span> <span class="token number">0</span>
Executing<span class="token punctuation">(</span>--clean<span class="token punctuation">)</span>: /bin/sh <span class="token parameter variable">-e</span> /var/tmp/rpm-tmp.Zz7sN6
+ <span class="token builtin class-name">umask</span> 022
+ <span class="token builtin class-name">cd</span> /root/rpmbuild/BUILD
+ <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ntp-4.2.6p5
+ <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token comment"># 可以看到上面输出了很多执行脚本和日志，包括输出到的目录</span>
<span class="token comment"># 编译好的软件就会放置到</span>
<span class="token punctuation">[</span>root@study rpmbuild<span class="token punctuation">]</span><span class="token comment"># ll /root/rpmbuild/RPMS/x86_64/</span>
total <span class="token number">2420</span>
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">552196</span> Apr <span class="token number">11</span> <span class="token number">22</span>:27 ntp-4.2.6p5-19.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1757652</span> Apr <span class="token number">11</span> <span class="token number">22</span>:27 ntp-debuginfo-4.2.6p5-19.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">83060</span> Apr <span class="token number">11</span> <span class="token number">22</span>:27 ntpdate-4.2.6p5-19.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">75392</span> Apr <span class="token number">11</span> <span class="token number">22</span>:27 sntp-4.2.6p5-19.el7.x86_64.rpm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式，一般来说，因为该编译可能会根据你的系统硬件而优化，所以可能效果会好一点点，但是，人类可能感受不到这种优化带来的效果，所以一般不建议使用 SRPM 安装。那么当你找不到你这个 distribution 版本的软件时间，去别的 distribution 下载 SRPM 来安装，这样也算个方向。</p><p>一般来说，如果你有需要用到 SRPM 的文件，大部分的原因就是，你需要重新修改里面的某些设置，比如加入某些特殊的功能等。此时就需要将 SRPM 拆开，编辑里面的配置文件，再重新编译。下面来练习这种方式</p><h2 id="🍀-srpm-使用的路径与需要的软件" tabindex="-1"><a class="header-anchor" href="#🍀-srpm-使用的路径与需要的软件" aria-hidden="true">#</a> 🍀 SRPM 使用的路径与需要的软件</h2><p>SRPM 含有 source code，那么其中必定有配置文件，所以需要知道 SRPM 在进行编译的时候会用到哪些目录？由于每个用户应该都有能力安装自己的软件，因此 SRPM 安装、设置、编译、最终结果所使用的目录与操作者家目录有关系。比如，你使用 root 的身份来进行 SRPM 的操作，那么应该会用到下列的目录</p><ul><li><p><code>/root/rpmbuild/SPECS/</code>：该软件的配置文件，例如软件的信息参数、设置项目等</p></li><li><p><code>/root/rpmbuild/SOURCES/</code>：软件的原始文件（<code>*.tar.gz 的文件</code>） 以及 config 配置文件</p></li><li><p><code>/root/rpmbuild/BUILD</code>/：在编译过程中，有些暂存的数据都会放置在该目录中</p></li><li><p><code>/root/rpmbuild/RPMS/</code>：经过编译之后，并且顺利编译成功之后，将打包完成的文件放在该目录中，包含了 x86_64，noarch... 等的次要目录</p></li><li><p><code>/root/rpmbuild/SRPMS/</code>：与 RPMS 目录相似，放置的是 SRPM 封装的文件</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>以前只有 root 身份才能使用编译行为，同时源码都会放到 <code>/usr/src/redhat/</code>，如今放置在 <code>/~username/rpmbuild/</code> 目录下</p></div><p>如果在编译过程中发生不明错误，会再 <code>/tmp</code> 下产生一个相对应的错误文件，可以根据该错误文件进行除错工作。如果编译成功，那么刚刚解压在上述几个目录中的文件都会被清理掉，只剩下<code>/root/rpmbuild/SRPMS/</code> 中编译好的文件了</p>`,8),b=a(`<p>实践练习：将上个练习下载的 ntp 的 SRPM 软件直接安装到系统中（不要先编译），然后查阅下所有用到的目录有哪些</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 这里使用 root 身份进行安装</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rpm -ivh ntp-4.2.6p5-19.el7.centos.src.rpm </span>
Updating / installing<span class="token punctuation">..</span>.
   <span class="token number">1</span>:ntp-4.2.6p5-19.el7.centos        <span class="token comment">################################# [100%]</span>
warning: user mockbuild does not exist - using root
warning: group mockbuild does not exist - using root
<span class="token comment"># 这里的操作，之后，就直接被安装了，可以找到如下的说明，但是和上面的对不上</span>
<span class="token comment"># 所以笔者这里有点疑惑，到底安装没有？</span>
<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep ntp</span>
ntpdate-4.2.6p5-29.el7.centos.x86_64


<span class="token comment"># 2. 查询 /root/rpmbuild 目录</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -l /root/rpmbuild/</span>
total <span class="token number">4</span>
drwxr-xr-x. <span class="token number">2</span> root root    <span class="token number">6</span> Apr <span class="token number">11</span> <span class="token number">22</span>:27 BUILD
drwxr-xr-x. <span class="token number">2</span> root root    <span class="token number">6</span> Apr <span class="token number">11</span> <span class="token number">22</span>:27 BUILDROOT
drwxr-xr-x. <span class="token number">4</span> root root   <span class="token number">34</span> Apr <span class="token number">11</span> <span class="token number">22</span>:27 RPMS
drwxr-xr-x. <span class="token number">2</span> root root <span class="token number">4096</span> Apr <span class="token number">11</span> <span class="token number">22</span>:32 SOURCES
drwxr-xr-x. <span class="token number">2</span> root root   <span class="token number">22</span> Apr <span class="token number">11</span> <span class="token number">22</span>:32 SPECS    <span class="token comment"># 它最重要</span>
drwxr-xr-x. <span class="token number">2</span> root root    <span class="token number">6</span> Apr <span class="token number">11</span> <span class="token number">22</span>:24 SRPMS

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -l /root/rpmbuild/{SOURCES,SPECS}</span>
/root/rpmbuild/SOURCES:
total <span class="token number">4324</span>
-rw-rw-r--. <span class="token number">1</span> root root     <span class="token number">559</span> Dec <span class="token number">20</span>  <span class="token number">2014</span> ntp-4.2.4p7-getprecision.patch
-rw-rw-r--. <span class="token number">1</span> root root     <span class="token number">661</span> Dec <span class="token number">20</span>  <span class="token number">2014</span> ntp-4.2.6p1-cmsgalign.patch
<span class="token punctuation">..</span>.

/root/rpmbuild/SPECS:
total <span class="token number">44</span>
-rw-rw-r--. <span class="token number">1</span> root root <span class="token number">41210</span> Dec <span class="token number">20</span>  <span class="token number">2014</span> ntp.spec		<span class="token comment"># 该文件是重点</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件的主要内容-spec" tabindex="-1"><a class="header-anchor" href="#配置文件的主要内容-spec" aria-hidden="true">#</a> 配置文件的主要内容 <code>*.spec</code></h3><p>前一个小节的练习，我们知道在 <code>/root.rembuild/SOURCES</code> 会放置原始文件 （tarball）以及相关的补丁文件（patch file），我们也知道编译需要的步骤大致是 <code>./configure,make,make check,make install</code> 等，那这些动作就写在 SPECS 目录中的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /root/rpmbuild/SPECS/</span>
<span class="token comment"># 1. 这个部分在介绍整个软件的基本相关信息，版本，释出次数等</span>

Summary: The NTP daemon and utilities		<span class="token comment"># 建议说明这个软件的功能</span>
Name: ntp																<span class="token comment"># 软件名称</span>
Version: <span class="token number">4.2</span>.6p5												<span class="token comment"># 软件版本</span>
Release: <span class="token number">19</span>%<span class="token punctuation">{</span>?dist<span class="token punctuation">}</span>											<span class="token comment"># 软件的释出次数</span>
<span class="token comment"># primary license (COPYRIGHT) : MIT			# 下面又很多 # 批注说明</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>
License: <span class="token punctuation">(</span>MIT and BSD and BSD with advertising<span class="token punctuation">)</span> and GPLv2
Group: System Environment/Daemons
Source0: http://www.eecis.udel.edu/~ntp/ntp_spool/ntp4/ntp-4.2/ntp-%<span class="token punctuation">{</span>version<span class="token punctuation">}</span>.tar.gz
Source1: ntp.conf												<span class="token comment"># 写 SourceN 的就是源码文件</span>
Source2: ntp.keys												<span class="token comment"># 源码与多个</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token comment"># ntpbz #802														# 下面是不定文件，就是 PatchN</span>
Patch1: ntp-4.2.6p1-sleep.patch
<span class="token comment"># add support for dropping root to ntpdate</span>
Patch2: ntp-4.2.6p4-droproot.patch
<span class="token punctuation">..</span><span class="token punctuation">..</span>.

<span class="token comment"># 2. 这部分则是设置相依属性需求的地方</span>

URL: http://www.ntp.org									<span class="token comment"># 下面说明这个软件的相依性</span>
Requires<span class="token punctuation">(</span>post<span class="token punctuation">)</span>: systemd-units						<span class="token comment"># 还有编译过程需要哪些软件等</span>
Requires<span class="token punctuation">(</span>preun<span class="token punctuation">)</span>: systemd-units
Requires<span class="token punctuation">(</span>postun<span class="token punctuation">)</span>: systemd-units
Requires: ntpdate <span class="token operator">=</span> %<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-%<span class="token punctuation">{</span>release<span class="token punctuation">}</span>
BuildRequires: libcap-devel openssl-devel libedit-devel perl-HTML-Parser
BuildRequires: pps-tools-devel autogen autogen-libopts-devel systemd-units
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
%package <span class="token parameter variable">-n</span> ntpdate											<span class="token comment"># 该软件包还包含很多次软件</span>
Summary: Utility to <span class="token builtin class-name">set</span> the <span class="token function">date</span> and <span class="token function">time</span> via NTP
Group: Applications/System
Requires<span class="token punctuation">(</span>pre<span class="token punctuation">)</span>: shadow-utils
Requires<span class="token punctuation">(</span>post<span class="token punctuation">)</span>: systemd-units
Requires<span class="token punctuation">(</span>preun<span class="token punctuation">)</span>: systemd-units
Requires<span class="token punctuation">(</span>postun<span class="token punctuation">)</span>: systemd-units
<span class="token punctuation">..</span><span class="token punctuation">..</span>.

<span class="token comment"># 3. 编译前的预处理，以及编译过程中所需要进行的指令，都写在这里</span>
<span class="token comment"># 尤其是 %build 下的数据，几乎就是 makefile 里面的信息</span>

%prep																	<span class="token comment"># 这部分大部分在处理补丁</span>
%setup <span class="token parameter variable">-q</span> <span class="token parameter variable">-a</span> <span class="token number">5</span>

%patch1 <span class="token parameter variable">-p1</span> <span class="token parameter variable">-b</span> .sleep									<span class="token comment"># 这些 patch 与前面的 PatchN 有关</span>
%patch2 <span class="token parameter variable">-p1</span> <span class="token parameter variable">-b</span> .droproot
%patch3 <span class="token parameter variable">-p1</span> <span class="token parameter variable">-b</span> .bcast
%patch4 <span class="token parameter variable">-p1</span> <span class="token parameter variable">-b</span> .cmsgalign
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

%build																<span class="token comment"># 其实就是 ./configure、make 等动作</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s|$CFLAGS -Wstrict-overflow|$CFLAGS|&#39;</span> configure sntp/configure
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CFLAGS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$RPM_OPT_FLAGS</span> -fPIE -fno-strict-aliasing -fno-strict-overflow&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-pie -Wl,-z,relro,-z,now&quot;</span>
%configure <span class="token punctuation">\\</span>													<span class="token comment"># ./configure 的意思</span>
        <span class="token parameter variable">--sysconfdir</span><span class="token operator">=</span>%<span class="token punctuation">{</span>_sysconfdir<span class="token punctuation">}</span>/ntp/crypto <span class="token punctuation">\\</span>
        --with-openssl-libdir<span class="token operator">=</span>%<span class="token punctuation">{</span>_libdir<span class="token punctuation">}</span> <span class="token punctuation">\\</span>
        --without-ntpsnmpd <span class="token punctuation">\\</span>
        --enable-all-clocks --enable-parse-clocks <span class="token punctuation">\\</span>
        --enable-ntp-signd<span class="token operator">=</span>%<span class="token punctuation">{</span>_localstatedir<span class="token punctuation">}</span>/run/ntp_signd <span class="token punctuation">\\</span>
        --disable-local-libopts
<span class="token builtin class-name">echo</span> <span class="token string">&#39;#define KEYFILE &quot;%{_sysconfdir}/ntp/keys&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ntpdate/ntpdate.h
<span class="token builtin class-name">echo</span> <span class="token string">&#39;#define NTP_VAR &quot;%{_localstatedir}/log/ntpstats/&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> config.h

<span class="token function">make</span> %<span class="token punctuation">{</span>?_smp_mflags<span class="token punctuation">}</span>								<span class="token comment"># make 的意思</span>

<span class="token punctuation">..</span><span class="token punctuation">..</span>.
%install														<span class="token comment"># 安装过程中所进行的各项动作了</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$RPM_BUILD_ROOT</span> <span class="token assign-left variable">bindir</span><span class="token operator">=</span>%<span class="token punctuation">{</span>_sbindir<span class="token punctuation">}</span> <span class="token function">install</span>

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$RPM_BUILD_ROOT</span>%<span class="token punctuation">{</span>_mandir<span class="token punctuation">}</span>/man<span class="token punctuation">{</span><span class="token number">5,8</span><span class="token punctuation">}</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/sntp\\.1/sntp\\.8/&#39;</span> <span class="token variable">$RPM_BUILD_ROOT</span>%<span class="token punctuation">{</span>_mandir<span class="token punctuation">}</span>/man1/sntp.1
<span class="token function">mv</span> <span class="token variable">$RPM_BUILD_ROOT</span>%<span class="token punctuation">{</span>_mandir<span class="token punctuation">}</span>/man<span class="token punctuation">{</span><span class="token number">1</span>/sntp.1,8/sntp.8<span class="token punctuation">}</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$RPM_BUILD_ROOT</span>%<span class="token punctuation">{</span>_mandir<span class="token punctuation">}</span>/man1

<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.

<span class="token comment"># 4. 这里列出，这个软件释出的文件有哪些的意思</span>

%files														<span class="token comment"># 这软件所属的文件有哪些</span>
%dir %<span class="token punctuation">{</span>ntpdocdir<span class="token punctuation">}</span>
%<span class="token punctuation">{</span>ntpdocdir<span class="token punctuation">}</span>/COPYRIGHT
%<span class="token punctuation">{</span>ntpdocdir<span class="token punctuation">}</span>/ChangeLog
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment"># 5. 列出这个软件的更改历史记录文件</span>

%changelog
* Fri Dec <span class="token number">19</span> <span class="token number">2014</span> CentOS Sources <span class="token operator">&lt;</span>bugs@centos.org<span class="token operator">&gt;</span> - <span class="token number">4.2</span>.6p5-19.el7.centos
- rebrand vendorzone

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要注意到的是 ntp.sepc 这个文件，这是主要的将 SRPM 编译成 RPM 的配置文件，它的基本规则可以这样看：</p><ol><li>整个文件的开头有 Summary 为开始，这部分的设置都是最基础的说明内容</li><li>然后每个不同的段落之间，都以 <code>%</code> 来做开头，例如 <code>%prep</code> 与 <code>%install</code> 等</li></ol><h3 id="系统整体信息方面" tabindex="-1"><a class="header-anchor" href="#系统整体信息方面" aria-hidden="true">#</a> 系统整体信息方面</h3><p>刚刚在 ntp.sepc 中看到的就有以下的重要信息：</p><ul><li>Summary：软件的主要说明，例如上表中说明了本软件是针对 NTP 的软件功能与工具等</li><li>Name：软件的名称（最终会是 RPM 文件的名称构成之一）</li><li>Version：软件的版本（也是 RPM 文件名构成之一）</li><li>Release：该版本打包的次数说明（也是 RPM 文件名构成之一）。由于我们想要修改下东西，所以将这里的 <code>19%{?dist}</code> 修改为 <code>20.mrcode</code></li><li>License：软件的授权模式，看起来涵盖了所有知名的 Open source 授权</li><li>Group：该软件在安装的时候，主要放置到哪一个软件群组中（yum grouplist 的特点）</li><li>URL：源码的主要官网</li><li>SourceN：软件的来源，如果是网络上下载的软件，通常这里一定会有这个信息来告诉大家这个原始文件的来源，此外，如果有多个软件来源，则会以 Source0、Source1... 开处理源码</li><li>PatchN：作为不定的 patch file，也是可以有多个</li><li>BuildRoot：作为编译时，该使用哪个目录来暂存中间文件（如果编译过程的目标文件、链接文件等）</li></ul><p>上述信息为必须存在的项目，下面的则为可使用的额外设置</p><ul><li>Requires：如果这个软件还需要其他的软件支持，就必须配置，则当你制作成 RPM 后，系统就会自动去检查，这就是相依属性的主要来源</li><li>BuildRequires：编译过程中所需要的软件。Requires 指的是<strong>安装时需要检查</strong>，因为与实际运行有关，而 BuildRequires 则是 <strong>编译时</strong> 所需要的软件，只有在 SRPM 编译为 RPM 时才会检查的项目</li></ul><p>根据上面的设置，最终的文件名会是 <code>{Name}-{Version}-{Release}.{Arch}.rpm</code> 的样式，以我们上面的设置来说，文件名应该会是 <code>ntp-4.2.6p5-20.mrcode.x86_64.rpm</code></p><ul><li><p><code>%description</code></p><p>将你的软件做一个简短的说明，这个也是必须的，在使用 <code>rpm -qi 软件名称</code> 出现的一些基础说明就包括这里的设置信息</p></li><li><p><code>%prep</code></p><p>pre 这个关键词本就有「在...之前」的含义，因此该项目指「尚未进行设置或安装之前，你要编译完成的 RPM 帮你实现做的事情」，就是 prepare 的简写，它的主要事项有：</p><ol><li>进行软件的补丁（patch）等相关工作</li><li>寻找软件所需要的目录是否已经存在？确认用的</li><li>事先建立你的软件所需要的目录，或则事先进行的任务</li><li>如果待安装的 Linux 系统内已经有安装的时候可能会被覆盖掉的文件时，那么久必须进行备份的工作</li></ol><p>在本例中，你会发现程序会使用 patch 去进行补丁的动作，所以程序的源码才会更新到最新</p></li><li><p><code>%build</code></p><p>该段落在配置 make 编译称为可执行的程序。会发现在此部分的程序代码，就是 <code>./configure,make</code> 等项目。一般来说，如果你会使用 SRPM 来进行重新编译的行为，<strong>通常就是要重新 <code>./configure</code> 并给予新的参数设置，于是这部分就可能会修改</strong></p></li><li><p><code>%install</code></p><p>编译完成后，就要安装了，也就是类似 Tarball 里面的 make install</p></li><li><p><code>%files</code></p><p>这个软件安装的文件都需要写到这里来，也包括目录，以备查验用。此外也可以指定每个文件的类型，包括帮助文件（<code>%doc 后面接的文件</code>） 与配置文件 <code>%config 后面接的文件</code></p></li><li><p><code>%changelog</code></p><p>主要记录该软件曾经的更新记录，星号 <code>*</code> 后面应该要以时间、修改者、email 与软件版本来作为说明，减号 <code>-</code> 后面则是你详细的说明，在这部分我们就新增了两行，内容如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>%changelog
<span class="token comment"># * 2020-04-11 mrcode &lt;mrcode@mail.mrcode.cn&gt; - 4.2.6p5-20.mrcode</span>
<span class="token comment"># 刚开始我如上写的，并没有按他们的规范写，在编译时间就报如下错误了</span>
<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># rpmbuild -ba ntp.spec </span>
error: bad <span class="token function">date</span> <span class="token keyword">in</span> %changelog: <span class="token number">2020</span>-04-11 mrcode <span class="token operator">&lt;</span>mrcode@mail.mrcode.cn<span class="token operator">&gt;</span> - <span class="token number">4.2</span>.6p5-20.mrcode

<span class="token comment"># 所以正确的写入如下</span>
* Sat Apr <span class="token number">11</span> <span class="token number">2020</span> Mrcode mrcode<span class="token operator">&lt;</span>mrcode@mail.mrcode.cn<span class="token operator">&gt;</span> - <span class="token number">4.2</span>.6p5-20.mrcode
- only rbuild this SRPM to RPM
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>修改到这里也差不多了，你也应该需要了解这个 ntp.spec 文件有多重要，当我们使用 rpm -q 查询一堆信息时，其实都是这里写入的。下面来了解如果将 SRPM 编译出来</p><h2 id="🍀-srpm-的编译指令-ba、-bb" tabindex="-1"><a class="header-anchor" href="#🍀-srpm-的编译指令-ba、-bb" aria-hidden="true">#</a> 🍀 SRPM 的编译指令（<code>-ba、-bb</code>）</h2><p>要将在 <code>/root/rpmbuild</code> 下的数据编译或则是单纯的打包为 RPM 或 SRPM 时，就需要 rpmbuild 指令与相关选项了，这里介绍两个常用选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rpmbuild <span class="token parameter variable">-ba</span> ntp.spec  <span class="token comment"># 仅编译并同时产生 RPM 与 SRPM 文件</span>
rpmbuild <span class="token parameter variable">-bb</span> ntp.spec  <span class="token comment"># 仅编译成 RPM 文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候，系统会这样做：</p><ol><li><p>先进入到 BUILD 目录，即 <code>/root/rpmbuild/BUILD</code></p></li><li><p>根据 <code>*.spec</code> 文件内的 Name 与 Version 定义出工作目录名称。</p><p>以上面的例子为例，那么系统就会在 BUILD 目录中先删除 ntp-4.2.6p5 的目录，在重新建立一个 ntp-4.2.6p5 的目录，并进入该目录</p></li><li><p>在新建的目录里面，针对 SOURCES 目录下的来源文件，也就是 <code>*.spec</code> 里面的 Source 设置的哪个文件，以 tar 进行解压缩</p><p>以我们这个例子来说，则会在 <code>/root/rpmbuild.BUILD/ntp-4.2.6p5</code> 中，将 <code>/root/rpmbuild/SOURCES/ntp-*</code> 等多个源码文件进行解压缩</p></li><li><p>在开始 <code>%build 和 %install</code> 的设置与编译</p></li><li><p>最后将完成打包的文件放置到该放置的地方去，如果你的系统是 x86_64 的话，那么最后编译成功的 rpm 文件则会被放置在 \`\`/root/rpmbuild/RPMS/x86_64\` 里面</p></li></ol><p>大概过程如上，最后的结果数据会放置在 RPMS 目录下，我们这个案例中，要同时打包 RPM 与 SRPM，则可以如下操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># cd /root/rpmbuild/SPECS/</span>
<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># rpmbuild -ba ntp.spec </span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>
Wrote: /root/rpmbuild/SRPMS/ntp-4.2.6p5-20.mrcode.src.rpm
Wrote: /root/rpmbuild/RPMS/x86_64/ntp-4.2.6p5-20.mrcode.x86_64.rpm
Wrote: /root/rpmbuild/RPMS/noarch/ntp-perl-4.2.6p5-20.mrcode.noarch.rpm
Wrote: /root/rpmbuild/RPMS/x86_64/ntpdate-4.2.6p5-20.mrcode.x86_64.rpm
Wrote: /root/rpmbuild/RPMS/x86_64/sntp-4.2.6p5-20.mrcode.x86_64.rpm
Wrote: /root/rpmbuild/RPMS/noarch/ntp-doc-4.2.6p5-20.mrcode.noarch.rpm
Wrote: /root/rpmbuild/RPMS/x86_64/ntp-debuginfo-4.2.6p5-20.mrcode.x86_64.rpm
Executing<span class="token punctuation">(</span>%clean<span class="token punctuation">)</span>: /bin/sh <span class="token parameter variable">-e</span> /var/tmp/rpm-tmp.D7ojeA
+ <span class="token builtin class-name">umask</span> 022
+ <span class="token builtin class-name">cd</span> /root/rpmbuild/BUILD
+ <span class="token builtin class-name">cd</span> ntp-4.2.6p5
+ /usr/bin/rm <span class="token parameter variable">-rf</span> /root/rpmbuild/BUILDROOT/ntp-4.2.6p5-20.mrcode.x86_64
+ <span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># find /root/rpmbuild/ -name &#39;ntp*rpm&#39;</span>
/root/rpmbuild/RPMS/x86_64/ntp-4.2.6p5-19.el7.x86_64.rpm
/root/rpmbuild/RPMS/x86_64/ntpdate-4.2.6p5-19.el7.x86_64.rpm
/root/rpmbuild/RPMS/x86_64/ntp-debuginfo-4.2.6p5-19.el7.x86_64.rpm
/root/rpmbuild/RPMS/x86_64/ntp-4.2.6p5-20.x86_64.rpm
/root/rpmbuild/RPMS/x86_64/ntpdate-4.2.6p5-20.x86_64.rpm
/root/rpmbuild/RPMS/x86_64/ntp-debuginfo-4.2.6p5-20.x86_64.rpm
/root/rpmbuild/RPMS/x86_64/ntp-4.2.6p5-20.mrcode.x86_64.rpm
/root/rpmbuild/RPMS/x86_64/ntpdate-4.2.6p5-20.mrcode.x86_64.rpm
/root/rpmbuild/RPMS/x86_64/ntp-debuginfo-4.2.6p5-20.mrcode.x86_64.rpm
/root/rpmbuild/RPMS/noarch/ntp-perl-4.2.6p5-19.el7.noarch.rpm
/root/rpmbuild/RPMS/noarch/ntp-doc-4.2.6p5-19.el7.noarch.rpm
/root/rpmbuild/RPMS/noarch/ntp-perl-4.2.6p5-20.noarch.rpm
/root/rpmbuild/RPMS/noarch/ntp-doc-4.2.6p5-20.noarch.rpm
/root/rpmbuild/RPMS/noarch/ntp-perl-4.2.6p5-20.mrcode.noarch.rpm
/root/rpmbuild/RPMS/noarch/ntp-doc-4.2.6p5-20.mrcode.noarch.rpm
/root/rpmbuild/SRPMS/ntp-4.2.6p5-20.src.rpm
/root/rpmbuild/SRPMS/ntp-4.2.6p5-20.mrcode.src.rpm

<span class="token comment"># 就看到一件出现了我们的 20.mrcode 版本的软件了</span>
<span class="token comment"># 有些文件软件是与硬件等级无关的，所以出现了 ntp-perl-4.2.6p5-20.mrcode.noarch.rpm 的 noarch 软件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-制作一个我们自己的-srpm-软件" tabindex="-1"><a class="header-anchor" href="#🍀-制作一个我们自己的-srpm-软件" aria-hidden="true">#</a> 🍀 制作一个我们自己的 SRPM 软件</h2>`,23),k=a(`<h3 id="制作源码文件-tarball-产生" tabindex="-1"><a class="header-anchor" href="#制作源码文件-tarball-产生" aria-hidden="true">#</a> 制作源码文件 tarball 产生</h3><p>我们提供了 main-0.1 版本的软件，并提供了一个 main-0.2 的补丁文件，那么需要这样做：</p><ul><li><code>main-0.1.tar.gz</code> 放在 <code>/root/rpmbuild/SOURCES/</code></li><li><code>main-0.1-to-0.2.patch</code> 放在 <code>/root/rpmbuild/SOURCES/</code></li><li><code>main.spec</code> 放在 <code>/root/rpmbuild/SPECS/</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 先来处理源码部分。假设你的 /root/rpmbuild/SOURCES/ 目录以及存在了</span>
<span class="token comment"># 注意，如果 patch 部分报错，建议直接在之前章节中的下载链接下载</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /root/</span>
<span class="token punctuation">[</span>root@study main-0.1<span class="token punctuation">]</span><span class="token comment"># tar -zcf main-0.1.tgz main-0.1</span>
<span class="token comment"># 记得需要将目录打包</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># tar -ztv -f main-0.1.tgz </span>
drwxr-xr-x root/root         <span class="token number">0</span> <span class="token number">2020</span>-04-12 <span class="token number">11</span>:28 main-0.1/
-r-------- root/root      <span class="token number">4482</span> <span class="token number">2020</span>-04-12 <span class="token number">11</span>:06 main-0.1/cos_value.c
-r-------- root/root       <span class="token number">101</span> <span class="token number">2009</span>-06-09 <span class="token number">22</span>:23 main-0.1/haha.c
-r-------- root/root       <span class="token number">318</span> <span class="token number">2020</span>-04-12 <span class="token number">10</span>:58 main-0.1/main.c
-r-------- root/root       <span class="token number">188</span> <span class="token number">2020</span>-04-12 <span class="token number">10</span>:58 main-0.1/Makefile
-r-------- root/root       <span class="token number">186</span> <span class="token number">2020</span>-04-12 <span class="token number">10</span>:58 main-0.1/sin_value.c

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cp main-0.1.tgz /root/rpmbuild/SOURCES/</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cp main-0.1-to-0.2.patch /root/rpmbuild/SOURCES/</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /root/rpmbuild/SOURCES/</span>
<span class="token punctuation">[</span>root@study SOURCES<span class="token punctuation">]</span><span class="token comment"># ll main-*</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">9273</span> <span class="token number">4</span>月  <span class="token number">12</span> <span class="token number">11</span>:07 main-0.1.tgz
-r--------. <span class="token number">1</span> root root <span class="token number">1538</span> <span class="token number">4</span>月  <span class="token number">12</span> <span class="token number">11</span>:07 main-0.1-to-0.2.patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建立-spec-的配置文件" tabindex="-1"><a class="header-anchor" href="#建立-spec-的配置文件" aria-hidden="true">#</a> 建立 <code>*.spec</code> 的配置文件</h3><p>这个文件的建立是所有 RPM 制作里面最重要的，需要认真编写。为了方便我们的制作，在 CentOS7 下，vim *.spec 的时候，如果该文件不存在，则会直接给我们一个模板</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study SOURCES<span class="token punctuation">]</span><span class="token comment"># cd /root/rpmbuild/SPECS/</span>
<span class="token comment"># 下面的内容就是给我们的模板信息</span>
<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># vim main.spec</span>
Name:
Version:
Release:        <span class="token number">1</span>%<span class="token punctuation">{</span>?dist<span class="token punctuation">}</span>
Summary:

Group:
License:
URL:
Source0:

BuildRequires:
Requires:

%description


%prep
%setup <span class="token parameter variable">-q</span>


%build
%configure
<span class="token function">make</span> %<span class="token punctuation">{</span>?_smp_mflags<span class="token punctuation">}</span>


%install
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span>%<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>
%files
%doc



%changelog

<span class="token comment"># 下面开始编写信息</span>
<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># vim main.spec</span>
Name: main
Version: <span class="token number">0.1</span>
Release:        <span class="token number">1</span>%<span class="token punctuation">{</span>?dist<span class="token punctuation">}</span>
Summary: Shows sin and cos value.

Group: Scientific Support
License: GPLv2
URL: http:/mrcode.cn/
Source0: main-0.1.tgz							<span class="token comment"># 文件名一定要正确</span>
Patch0: main-0.1-to-0.2.patch

<span class="token comment"># BuildRequires:		没有用到的一定要删掉，否则可能还是会识别到，并报错</span>

%description
This package will <span class="token builtin class-name">let</span> you input your name and calculate sin cos value

%prep
%setup <span class="token parameter variable">-q</span>
%patch0 <span class="token parameter variable">-p1</span>											<span class="token comment"># 要用来作为 patch 的动作</span>


%build
<span class="token function">make</span> clean main									<span class="token comment"># 编译，不要安装</span>

%install
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/bin
<span class="token function">install</span> <span class="token parameter variable">-m</span> <span class="token number">755</span> main %<span class="token punctuation">{</span>buildroot<span class="token punctuation">}</span>/usr/local/bin			<span class="token comment"># 顺利的安装行为</span>

%files
/usr/local/bin/main

%changelog
* Sat Apr <span class="token number">11</span> <span class="token number">2020</span> Mrcode mrcode<span class="token operator">&lt;</span>mrcode@mail.mrcode.cn<span class="token operator">&gt;</span> - <span class="token number">4.2</span>.6p5-20.mrcode
- build the program

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译成为-rpm-与-srpm" tabindex="-1"><a class="header-anchor" href="#编译成为-rpm-与-srpm" aria-hidden="true">#</a> 编译成为 RPM 与 SRPM</h3><p>前面的 spec 文件建立后，后续的动作就简单了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /root/rpmbuild/SPECS/</span>

<span class="token comment"># 上面的 spec 文件太重要了，我是搞了 2 个小时，差不多才搞好</span>
<span class="token comment"># 有写错命令的，有没有删除空配置项目的</span>

<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># rpmbuild -ba main.spec </span>
执行<span class="token punctuation">(</span>%prep<span class="token punctuation">)</span>: /bin/sh <span class="token parameter variable">-e</span> /var/tmp/rpm-tmp.pZIZNq
+ <span class="token builtin class-name">umask</span> 022
+ <span class="token builtin class-name">cd</span> /root/rpmbuild/BUILD
+ <span class="token builtin class-name">cd</span> /root/rpmbuild/BUILD
+ <span class="token function">rm</span> <span class="token parameter variable">-rf</span> main-0.1
+ /usr/bin/gzip <span class="token parameter variable">-dc</span> /root/rpmbuild/SOURCES/main-0.1.tgz
+ /usr/bin/tar <span class="token parameter variable">-xf</span> -
+ <span class="token assign-left variable">STATUS</span><span class="token operator">=</span><span class="token number">0</span>
+ <span class="token string">&#39;[&#39;</span> <span class="token number">0</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token string">&#39;]&#39;</span>
+ <span class="token builtin class-name">cd</span> main-0.1
+ /usr/bin/chmod <span class="token parameter variable">-Rf</span> a+rX,u+w,g-w,o-w <span class="token builtin class-name">.</span>
+ <span class="token builtin class-name">echo</span> <span class="token string">&#39;Patch #0 (main-0.1-to-0.2.patch):&#39;</span>
Patch <span class="token comment">#0 (main-0.1-to-0.2.patch):</span>
+ /usr/bin/patch <span class="token parameter variable">-p1</span> <span class="token parameter variable">--fuzz</span><span class="token operator">=</span><span class="token number">0</span>
+ /usr/bin/cat /root/rpmbuild/SOURCES/main-0.1-to-0.2.patch
patching <span class="token function">file</span> cos_value.c
patching <span class="token function">file</span> main.c
patching <span class="token function">file</span> Makefile
patching <span class="token function">file</span> sin_value.c
+ <span class="token builtin class-name">exit</span> <span class="token number">0</span>
执行<span class="token punctuation">(</span>%build<span class="token punctuation">)</span>: /bin/sh <span class="token parameter variable">-e</span> /var/tmp/rpm-tmp.TXvVHo
+ <span class="token builtin class-name">umask</span> 022
+ <span class="token builtin class-name">cd</span> /root/rpmbuild/BUILD
+ <span class="token builtin class-name">cd</span> main-0.1
+ <span class="token function">make</span> clean main
<span class="token function">rm</span> <span class="token parameter variable">-f</span> main main.o haha.o sin_value.o cos_value.o
cc    <span class="token parameter variable">-c</span> <span class="token parameter variable">-o</span> main.o main.c
cc    <span class="token parameter variable">-c</span> <span class="token parameter variable">-o</span> haha.o haha.c
cc    <span class="token parameter variable">-c</span> <span class="token parameter variable">-o</span> sin_value.o sin_value.c
cc    <span class="token parameter variable">-c</span> <span class="token parameter variable">-o</span> cos_value.o cos_value.c
gcc <span class="token parameter variable">-o</span> main main.o haha.o sin_value.o cos_value.o <span class="token parameter variable">-lm</span>
+ <span class="token builtin class-name">exit</span> <span class="token number">0</span>
执行<span class="token punctuation">(</span>%install<span class="token punctuation">)</span>: /bin/sh <span class="token parameter variable">-e</span> /var/tmp/rpm-tmp.S8b0Xm
+ <span class="token builtin class-name">umask</span> 022
+ <span class="token builtin class-name">cd</span> /root/rpmbuild/BUILD
+ <span class="token string">&#39;[&#39;</span> /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64 <span class="token string">&#39;!=&#39;</span> / <span class="token string">&#39;]&#39;</span>
+ <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64
++ <span class="token function">dirname</span> /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64
+ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /root/rpmbuild/BUILDROOT
+ <span class="token function">mkdir</span> /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64
+ <span class="token builtin class-name">cd</span> main-0.1
+ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64/usr/local/bin
+ <span class="token function">install</span> <span class="token parameter variable">-m</span> <span class="token number">755</span> main /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64/usr/local/bin
+ /usr/lib/rpm/find-debuginfo.sh --strict-build-id <span class="token parameter variable">-m</span> --run-dwz --dwz-low-mem-die-limit <span class="token number">10000000</span> --dwz-max-die-limit <span class="token number">110000000</span> /root/rpmbuild/BUILD/main-0.1
extracting debug info from /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64/usr/local/bin/main
dwz: Too few files <span class="token keyword">for</span> multifile optimization
/usr/lib/rpm/sepdebugcrcfix: Updated <span class="token number">0</span> CRC32s, <span class="token number">1</span> CRC32s did match.
+ /usr/lib/rpm/check-buildroot
+ /usr/lib/rpm/redhat/brp-compress
+ /usr/lib/rpm/redhat/brp-strip-static-archive /usr/bin/strip
+ /usr/lib/rpm/brp-python-bytecompile /usr/bin/python <span class="token number">1</span>
+ /usr/lib/rpm/redhat/brp-python-hardlink
+ /usr/lib/rpm/redhat/brp-java-repack-jars
处理文件：main-0.1-1.el7.x86_64
Provides: main <span class="token operator">=</span> <span class="token number">0.1</span>-1.el7 main<span class="token punctuation">(</span>x86-64<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0.1</span>-1.el7
Requires<span class="token punctuation">(</span>rpmlib<span class="token punctuation">)</span>: rpmlib<span class="token punctuation">(</span>CompressedFileNames<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">3.0</span>.4-1 rpmlib<span class="token punctuation">(</span>FileDigests<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">4.6</span>.0-1 rpmlib<span class="token punctuation">(</span>PayloadFilesHavePrefix<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">4.0</span>-1
Requires: libc.so.6<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> libc.so.6<span class="token punctuation">(</span>GLIBC_2.2.5<span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> libc.so.6<span class="token punctuation">(</span>GLIBC_2.7<span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> libm.so.6<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> libm.so.6<span class="token punctuation">(</span>GLIBC_2.2.5<span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span> rtld<span class="token punctuation">(</span>GNU_HASH<span class="token punctuation">)</span>
处理文件：main-debuginfo-0.1-1.el7.x86_64
Provides: main-debuginfo <span class="token operator">=</span> <span class="token number">0.1</span>-1.el7 main-debuginfo<span class="token punctuation">(</span>x86-64<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0.1</span>-1.el7
Requires<span class="token punctuation">(</span>rpmlib<span class="token punctuation">)</span>: rpmlib<span class="token punctuation">(</span>FileDigests<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">4.6</span>.0-1 rpmlib<span class="token punctuation">(</span>PayloadFilesHavePrefix<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">4.0</span>-1 rpmlib<span class="token punctuation">(</span>CompressedFileNames<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">3.0</span>.4-1
检查未打包文件：/usr/lib/rpm/check-files /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64
写道:/root/rpmbuild/SRPMS/main-0.1-1.el7.src.rpm
写道:/root/rpmbuild/RPMS/x86_64/main-0.1-1.el7.x86_64.rpm
写道:/root/rpmbuild/RPMS/x86_64/main-debuginfo-0.1-1.el7.x86_64.rpm
执行<span class="token punctuation">(</span>%clean<span class="token punctuation">)</span>: /bin/sh <span class="token parameter variable">-e</span> /var/tmp/rpm-tmp.oIpzDR
+ <span class="token builtin class-name">umask</span> 022
+ <span class="token builtin class-name">cd</span> /root/rpmbuild/BUILD
+ <span class="token builtin class-name">cd</span> main-0.1
+ /usr/bin/rm <span class="token parameter variable">-rf</span> /root/rpmbuild/BUILDROOT/main-0.1-1.el7.x86_64
+ <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token comment"># 这就编译好了</span>
<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># ll /root/rpmbuild/RPMS/x86_64/main-*</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">5428</span> <span class="token number">4</span>月  <span class="token number">12</span> <span class="token number">12</span>:25 /root/rpmbuild/RPMS/x86_64/main-0.1-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">4460</span> <span class="token number">4</span>月  <span class="token number">12</span> <span class="token number">12</span>:25 /root/rpmbuild/RPMS/x86_64/main-debuginfo-0.1-1.el7.x86_64.rpm

<span class="token punctuation">[</span>root@study SPECS<span class="token punctuation">]</span><span class="token comment"># ll /root/rpmbuild/SRPMS/main-*</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">3724</span> <span class="token number">4</span>月  <span class="token number">12</span> <span class="token number">12</span>:25 /root/rpmbuild/SRPMS/main-0.1-1.el7.src.rpm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装、测试、实际查询" tabindex="-1"><a class="header-anchor" href="#安装、测试、实际查询" aria-hidden="true">#</a> 安装、测试、实际查询</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum install /root/rpmbuild/RPMS/x86_64/main-0.1-1.el7.x86_64.rpm </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rpm -ql main </span>
/usr/local/bin/main

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rpm -qi main </span>
Name        <span class="token builtin class-name">:</span> main
Version     <span class="token builtin class-name">:</span> <span class="token number">0.1</span>
Release     <span class="token builtin class-name">:</span> <span class="token number">1</span>.el7
Architecture: x86_64
Install Date: Sun Apr <span class="token number">12</span> <span class="token number">12</span>:30:24 <span class="token number">2020</span>
Group       <span class="token builtin class-name">:</span> Scientific Support
Size        <span class="token builtin class-name">:</span> <span class="token number">7200</span>
License     <span class="token builtin class-name">:</span> GPLv2
Signature   <span class="token builtin class-name">:</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span>
Source RPM  <span class="token builtin class-name">:</span> main-0.1-1.el7.src.rpm
Build Date  <span class="token builtin class-name">:</span> Sun Apr <span class="token number">12</span> <span class="token number">12</span>:25:11 <span class="token number">2020</span>
Build Host  <span class="token builtin class-name">:</span> study.centos.mrcode
Relocations <span class="token builtin class-name">:</span> <span class="token punctuation">(</span>not relocatable<span class="token punctuation">)</span>
URL         <span class="token builtin class-name">:</span> http:/mrcode.cn/
Summary     <span class="token builtin class-name">:</span> Shows sin and cos value.
Description <span class="token builtin class-name">:</span>
This package will <span class="token builtin class-name">let</span> you input your name and calculate sin cos value

<span class="token comment"># 这就从打包、制作、出来一个自己的软件了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function h(S,g){const p=t("ExternalLinkIcon"),i=t("RouterLink");return o(),r("div",null,[d,s("p",null,[n("这里用 ntp 软件的 SRPM 来练习。在 "),s("a",m,[n("vault.centos.org"),e(p)]),n(" 中选择你正确的 CentOS 版本，然后在 updates 软件看中选择 ntp 软件 SRPM，我这里选择了 http://vault.centos.org/7.0.1406/updates/Source/SPackages/ntp-4.2.6p5-19.el7.centos.src.rpm 的软件下载")]),v,s("p",null,[n("由于 SRPM 需要重新编译，所以我们需要 "),e(i,{to:"/99-tools/Linux/21/04.html"},{default:l(()=>[n("第 21 章中源码所需基础软件")]),_:1}),n(" ，不要忘记安装")]),b,s("p",null,[n("在之前的小节中，我们 "),e(i,{to:"/99-tools/Linux/21/04.html"},{default:l(()=>[n("编写了软件 main-0.1")]),_:1}),n("，把它制作成 main-0.1-1.x86_64.rpm")]),k])}const _=c(u,[["render",h],["__file","04.html.vue"]]);export{_ as default};
