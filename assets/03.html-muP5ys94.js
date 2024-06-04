import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e}from"./app-CvlAI_tu.js";const p={},o=e(`<h1 id="yum-在线升级机制" tabindex="-1"><a class="header-anchor" href="#yum-在线升级机制" aria-hidden="true">#</a> YUM 在线升级机制</h1><p>yum 是通过分析 RPM 的标头资料后，根据各软件的相关性制作出属性相依时的解决方案，然后可以自动处理软件的相依属性问题，以解决软件安装或移除或升级的问题</p><p>由于 distribution 必须要先释出软件，然后将软件放置于 yum 服务器上，提供客户端的使用。因此我们想要使用 yum 的功能时，必须要先找到适合的 yum server 才行，而每个 yum server 可能都会提供许多不同的软件功能，这就是「软件库」。因此，你必须要前往 yum server 查询到相关的软件库网址后，再继续后续的设置</p><p>事实上，CentOS 在释出软件时已经制作出多个映像站（mirror site）提供全世界的软件更新使用。所以，理论上不需要处理任何设置，只要能够连上 internet ，就可以使用 yum</p><h2 id="🍀-使用-yum-进行查询、安装、升级、与移除" tabindex="-1"><a class="header-anchor" href="#🍀-使用-yum-进行查询、安装、升级、与移除" aria-hidden="true">#</a> 🍀 使用 yum 进行查询、安装、升级、与移除</h2><h3 id="查询功能-yum-list-info-search-provides-whatprovides-参数" tabindex="-1"><a class="header-anchor" href="#查询功能-yum-list-info-search-provides-whatprovides-参数" aria-hidden="true">#</a> 查询功能：<code>yum [list|info|search|provides|whatprovides] </code> 参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token punctuation">[</span>查询工作项目<span class="token punctuation">]</span> <span class="token punctuation">[</span>相关参数<span class="token punctuation">]</span>

选项与参数：
<span class="token punctuation">[</span>option<span class="token punctuation">]</span>：主要选项有：
	-y：当 yum 要等待用户输入时，自动提供 <span class="token function">yes</span> 的响应
	<span class="token parameter variable">--installroot</span><span class="token operator">=</span>/some/path：将该软件安装在 /some/path 路径下，而不是使用默认的路径
<span class="token punctuation">[</span>查询工作项目<span class="token punctuation">]</span> <span class="token punctuation">[</span>相关参数<span class="token punctuation">]</span>：
	search：搜索某个软件名称或则是描述（description）的重要关键字
	list：列出目前 yum 所管理的所有的软件名称与版本，类似 <span class="token function">rpm</span> <span class="token parameter variable">-qa</span>
	info：同上，不过类似 <span class="token function">rpm</span> <span class="token parameter variable">-qai</span> 的执行结果
	provides：从文件去搜索软件，类似 <span class="token function">rpm</span> <span class="token parameter variable">-qf</span> 的功能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：搜索磁盘阵列 raid 相关软件有哪些？</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum search raid</span>
Loaded plugins: fastestmirror, langpacks		<span class="token comment"># yum 系统自己找出最近的 yum server</span>
Loading mirror speeds from cached hostfile	<span class="token comment"># 找出速度最快的哪一部 yum server</span>
 * base: mirrors.huaweicloud.com						<span class="token comment"># 下面的三个软件库，且来源为该服务器</span>
 * extras: mirrors.huaweicloud.com
 * updates: mirrors.huaweicloud.com
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> N/S matched: raid <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
dmraid.i686 <span class="token builtin class-name">:</span> dmraid <span class="token punctuation">(</span>Device-mapper RAID tool and library<span class="token punctuation">)</span>
dmraid.x86_64 <span class="token builtin class-name">:</span> dmraid <span class="token punctuation">(</span>Device-mapper RAID tool and library<span class="token punctuation">)</span>
dmraid-devel.x86_64 <span class="token builtin class-name">:</span> Development libraries and headers <span class="token keyword">for</span> dmraid.
dmraid-events-logwatch.x86_64 <span class="token builtin class-name">:</span> dmraid logwatch-based email reporting
libblockdev-mdraid.i686 <span class="token builtin class-name">:</span> The MD RAID plugin <span class="token keyword">for</span> the libblockdev library
libblockdev-mdraid.x86_64 <span class="token builtin class-name">:</span> The MD RAID plugin <span class="token keyword">for</span> the libblockdev library
libblockdev-mdraid-devel.i686 <span class="token builtin class-name">:</span> Development files <span class="token keyword">for</span> the libblockdev-mdraid plugin/library
libblockdev-mdraid-devel.x86_64 <span class="token builtin class-name">:</span> Development files <span class="token keyword">for</span> the libblockdev-mdraid plugin/library
libstoragemgmt-megaraid-plugin.noarch <span class="token builtin class-name">:</span> Files <span class="token keyword">for</span> LSI MegaRAID support <span class="token keyword">for</span> libstoragemgmt
dmraid-events.x86_64 <span class="token builtin class-name">:</span> dmevent_tool <span class="token punctuation">(</span>Device-mapper event tool<span class="token punctuation">)</span> and DSO
iprutils.x86_64 <span class="token builtin class-name">:</span> Utilities <span class="token keyword">for</span> the IBM Power Linux RAID adapters
mdadm.x86_64 <span class="token builtin class-name">:</span> The <span class="token function">mdadm</span> program controls Linux md devices <span class="token punctuation">(</span>software RAID arrays<span class="token punctuation">)</span>

  Name and summary matches only, use <span class="token string">&quot;search all&quot;</span> <span class="token keyword">for</span> everything.
<span class="token comment"># 上述找到了好多软件，冒号「:」左边的是软件名称，右边的则是 RPM 内的 name 设置（软件名）</span>

<span class="token comment"># 范例 2：找出 mdadm 软件的功能</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum info mdadm</span>
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirrors.huaweicloud.com
 * extras: mirrors.huaweicloud.com
 * updates: mirrors.huaweicloud.com
Installed Packages			<span class="token comment"># 这说明该软件已经安装到系统上了</span>
Name        <span class="token builtin class-name">:</span> <span class="token function">mdadm</span>			<span class="token comment"># 软件名</span>
Arch        <span class="token builtin class-name">:</span> x86_64		<span class="token comment"># 编译架构</span>
Version     <span class="token builtin class-name">:</span> <span class="token number">4.1</span>				<span class="token comment"># 软件版本</span>
Release     <span class="token builtin class-name">:</span> <span class="token number">1</span>.el7			<span class="token comment"># 释出的版本</span>
Size        <span class="token builtin class-name">:</span> <span class="token number">1.0</span> M			<span class="token comment"># 此软件的文件总大小</span>
Repo        <span class="token builtin class-name">:</span> installed	<span class="token comment"># 软件库回应说已安装的</span>
From repo   <span class="token builtin class-name">:</span> anaconda
Summary     <span class="token builtin class-name">:</span> The <span class="token function">mdadm</span> program controls Linux md devices <span class="token punctuation">(</span>software RAID arrays<span class="token punctuation">)</span>
URL         <span class="token builtin class-name">:</span> http://www.kernel.org/pub/linux/utils/raid/mdadm/
License     <span class="token builtin class-name">:</span> GPLv2+
Description <span class="token builtin class-name">:</span> The <span class="token function">mdadm</span> program is used to create, manage, and monitor Linux MD <span class="token punctuation">(</span>software
            <span class="token builtin class-name">:</span> RAID<span class="token punctuation">)</span> devices.  As such, it provides similar functionality to the raidtools
            <span class="token builtin class-name">:</span> package.  However, <span class="token function">mdadm</span> is a single program, and it can perform
            <span class="token builtin class-name">:</span> almost all functions without a configuration file, though a configuration
            <span class="token builtin class-name">:</span> <span class="token function">file</span> can be used to <span class="token builtin class-name">help</span> with some common tasks.
<span class="token comment"># 其他的信息则自己翻译下吧</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 3：列出 yum 服务器上提供的所有软件名称</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum list</span>
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirror.bit.edu.cn
 * extras: mirror.bit.edu.cn
 * updates: mirror.bit.edu.cn
Installed Packages			<span class="token comment"># 已安装的软件</span>
GConf2.x86_64                                           <span class="token number">3.2</span>.6-8.el7                          @anaconda
GeoIP.x86_64                                            <span class="token number">1.5</span>.0-14.el7                         @anaconda
LibRaw.x86_64                                           <span class="token number">0.19</span>.2-1.el7                         @anaconda
<span class="token punctuation">..</span>.
Available Packages		<span class="token comment"># 还可以安装的其他软件</span>
<span class="token punctuation">..</span>.

<span class="token comment"># 软件列表数据含义： 软件名称   版本  在哪个软件库</span>



<span class="token comment"># 范例 4：列出目前服务器上可供本机进行升级的软件有哪些</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum list updates</span>
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirror.bit.edu.cn
 * extras: mirror.bit.edu.cn
 * updates: mirror.bit.edu.cn
base                                                                                                                   <span class="token operator">|</span> <span class="token number">3.6</span> kB  00:00:00     
extras                                                                                                                 <span class="token operator">|</span> <span class="token number">2.9</span> kB  00:00:00     
updates                                                                                                                <span class="token operator">|</span> <span class="token number">2.9</span> kB  00:00:00     
Updated Packages
NetworkManager.x86_64                                                         <span class="token number">1</span>:1.18.0-5.el7_7.2                                       updates
NetworkManager-adsl.x86_64                                                    <span class="token number">1</span>:1.18.0-5.el7_7.2                                       updates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 5：列出提供 passwd 这个文件的软件有哪些</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum provides passwd</span>
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirrors.huaweicloud.com
 * extras: mirrors.huaweicloud.com
 * updates: mirrors.huaweicloud.com
passwd-0.79-5.el7.x86_64 <span class="token builtin class-name">:</span> An utility <span class="token keyword">for</span> setting or changing passwords using PAM
Repo        <span class="token builtin class-name">:</span> base



passwd-0.79-5.el7.x86_64 <span class="token builtin class-name">:</span> An utility <span class="token keyword">for</span> setting or changing passwords using PAM
Repo        <span class="token builtin class-name">:</span> @anaconda
<span class="token comment"># 就是上面这个软件提供了 passwd 这个程序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的演示，大概知道 yum 如何用在查询上了，下面实际来应用一下</p><p>例题：利用 yum 的功能，找出以 pam 开头的软件名称有哪些，而其中尚未安装的有哪些</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum list pam*</span>
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirrors.huaweicloud.com
 * extras: mirrors.huaweicloud.com
 * updates: mirrors.huaweicloud.com
Installed Packages		<span class="token comment"># 已安装的</span>
pam.x86_64                                                             <span class="token number">1.1</span>.8-22.el7                                                  @anaconda
Available Packages		<span class="token comment"># 下面是可升级或未安装的，显示 updates 的话则是可升级的</span>
pam.i686                                                               <span class="token number">1.1</span>.8-22.el7                                                  base     
pam-devel.i686                                                         <span class="token number">1.1</span>.8-22.el7                                                  base     
pam-devel.x86_64                                                       <span class="token number">1.1</span>.8-22.el7                                                  base     
pam_krb5.i686                                                          <span class="token number">2.4</span>.8-6.el7                                                   base     
pam_krb5.x86_64                                                        <span class="token number">2.4</span>.8-6.el7                                                   base     
pam_pkcs11.i686                                                        <span class="token number">0.6</span>.2-30.el7                                                  base     
pam_pkcs11.x86_64                                                      <span class="token number">0.6</span>.2-30.el7                                                  base     
pam_snapper.i686                                                       <span class="token number">0.2</span>.8-4.el7                                                   base     
pam_snapper.x86_64                                                     <span class="token number">0.2</span>.8-4.el7                                                   base     
pam_ssh_agent_auth.i686                                                <span class="token number">0.10</span>.3-2.21.el7                                               base     
pam_ssh_agent_auth.x86_64                                              <span class="token number">0.10</span>.3-2.21.el7                                               base
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-升级功能-yum-install-update-软件" tabindex="-1"><a class="header-anchor" href="#安装-升级功能-yum-install-update-软件" aria-hidden="true">#</a> 安装/升级功能：yum [install|update] 软件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token punctuation">[</span>安装与升级的工作项目<span class="token punctuation">]</span> <span class="token punctuation">[</span>相关参数<span class="token punctuation">]</span>

install：接要安装的软件
update：接要升级的软件，若要整个系统都升级，直接 update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：将前一个练习找到的未安装的 pam-delvel 安装</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum install pam-devel</span>
Loaded plugins: fastestmirror, langpacks  <span class="token comment"># 前 5 行找出最快的 yum server</span>
Loading mirror speeds from cached hostfile
 * base: mirrors.huaweicloud.com
 * extras: mirrors.huaweicloud.com
 * updates: mirrors.huaweicloud.com
Resolving Dependencies		<span class="token comment"># 处理依赖软件</span>
--<span class="token operator">&gt;</span> Running transaction check
---<span class="token operator">&gt;</span> Package pam-devel.x86_64 <span class="token number">0</span>:1.1.8-22.el7 will be installed
--<span class="token operator">&gt;</span> Finished Dependency Resolution
<span class="token comment"># 下表是一个总结性的显示</span>
Dependencies Resolved

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
 Package                        Arch                        Version                           Repository                 Size
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
Installing:
 pam-devel                      x86_64                      <span class="token number">1.1</span>.8-22.el7                      base                      <span class="token number">184</span> k

Transaction Summary
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
Install  <span class="token number">1</span> Package		<span class="token comment"># 需要安装一个软件</span>

Total download size: <span class="token number">184</span> k
Installed size: <span class="token number">528</span> k
Is this ok <span class="token punctuation">[</span>y/d/N<span class="token punctuation">]</span>: y
Downloading packages:
pam-devel-1.1.8-22.el7.x86_64.rpm                                                                      <span class="token operator">|</span> <span class="token number">184</span> kB  00:00:00     
Running transaction check
Running transaction <span class="token builtin class-name">test</span>
Transaction <span class="token builtin class-name">test</span> succeeded
Running transaction
  Installing <span class="token builtin class-name">:</span> pam-devel-1.1.8-22.el7.x86_64                                                                              <span class="token number">1</span>/1 
  Verifying  <span class="token builtin class-name">:</span> pam-devel-1.1.8-22.el7.x86_64                                                                              <span class="token number">1</span>/1 

Installed:
  pam-devel.x86_64 <span class="token number">0</span>:1.1.8-22.el7                                                                                             

Complete<span class="token operator">!</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移除软件-remove" tabindex="-1"><a class="header-anchor" href="#移除软件-remove" aria-hidden="true">#</a> 移除软件 remove</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 移除刚刚安装的软件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum remove pam-devel</span>
Loaded plugins: fastestmirror, langpacks
Resolving Dependencies
--<span class="token operator">&gt;</span> Running transaction check
---<span class="token operator">&gt;</span> Package pam-devel.x86_64 <span class="token number">0</span>:1.1.8-22.el7 will be erased
--<span class="token operator">&gt;</span> Finished Dependency Resolution

Dependencies Resolved

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
 Package                       Arch                       Version                             Repository                 Size
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
Removing:
 pam-devel                     x86_64                     <span class="token number">1.1</span>.8-22.el7                        @base                     <span class="token number">528</span> k

Transaction Summary
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
Remove  <span class="token number">1</span> Package

Installed size: <span class="token number">528</span> k
Is this ok <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>: 
Is this ok <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>: y
Downloading packages:
Running transaction check
Running transaction <span class="token builtin class-name">test</span>
Transaction <span class="token builtin class-name">test</span> succeeded
Running transaction
  Erasing    <span class="token builtin class-name">:</span> pam-devel-1.1.8-22.el7.x86_64                                                                              <span class="token number">1</span>/1 
  Verifying  <span class="token builtin class-name">:</span> pam-devel-1.1.8-22.el7.x86_64                                                                              <span class="token number">1</span>/1 

Removed:
  pam-devel.x86_64 <span class="token number">0</span>:1.1.8-22.el7                                                                                             

Complete<span class="token operator">!</span>
<span class="token comment"># 由于没有依赖软件，只移除一个软件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-yum-的配置文件" tabindex="-1"><a class="header-anchor" href="#🍀-yum-的配置文件" aria-hidden="true">#</a> 🍀 yum 的配置文件</h2><p>yum 由于有映像站软件库的 yum server，有可能会选择错误，所以可以手动修改 yum 的配置文件。</p><p>比如下面就有两个网址：</p><ul><li>http://ftp.twaren.net/Linux/CentOS/7/</li><li>http://ftp.ksu.edu.tw/FTP/CentOS/7/</li></ul><p>打开之后，有一堆的链接，这些链接就是这个 yum 服务器所提供的软件库了。</p><p>由于我们的测试机是 x86_64 的，点击一个 os 的软件库，再选择 x86_64 ，这个页面地址就是提供安装的网址： http://ftp.ksu.edu.tw/FTP/CentOS/7/os/x86_64/。 最重要的是 <code>repodata</code> http://ftp.ksu.edu.tw/FTP/CentOS/7/os/x86_64/repodata/ 这个目录，该目录是分析 RPM 软件后产生的软件属性相依属性，因此，当你找软件库所在网址时，<strong>最重要的是确定该网址下一定要有一个名为 repodata 的目录存在</strong>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/yum.repos.d/CentOS-Base.repo </span>
<span class="token punctuation">[</span>base<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>CentOS-<span class="token variable">$releasever</span> - Base
<span class="token assign-left variable">mirrorlist</span><span class="token operator">=</span>http://mirrorlist.centos.org/?release<span class="token operator">=</span><span class="token variable">$releasever</span><span class="token operator">&amp;</span><span class="token assign-left variable">arch</span><span class="token operator">=</span><span class="token variable">$basearch</span><span class="token operator">&amp;</span><span class="token assign-left variable">repo</span><span class="token operator">=</span>os<span class="token operator">&amp;</span><span class="token assign-left variable">infra</span><span class="token operator">=</span><span class="token variable">$infra</span>
<span class="token comment">#baseurl=http://mirror.centos.org/centos/$releasever/os/$basearch/</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所述，有一个 base 软件库，个字段含义如下：</p><ul><li><code>[bash]</code>：达标软件库的名字，里面的名称可以随意取。但是需要名称唯一</li><li>name：只是说明这个软件库的意义</li><li><code>mirrorlist</code>：该软件库可以使用的站点，如果不想用，可以注释掉</li><li><code>baseurl</code>：最重要的配置，因为后面是软件库的实际地址。 mirrorlist 是由 yum 程序自动选择的站点，而 baseurl 则是指定固定的一个软件库网址，可以将刚刚找到的网址替换掉这里</li><li><code>enable=1</code>：软件库被启用。设置为 0 则不启用</li><li><code>gpgcheck=1</code>：RPM 的数字签名，是否需要查询 RPM 文件内的数字签名</li><li><code>gpgkey</code>：数字签名的公钥文件所在位置，使用默认值即可</li></ul><p>在这里我想起来了，笔者在安装某些软件的时候，需要特别安装他们的公钥文件，就是因为这里不同软件库释放出来的软件，公钥不一致的问题</p><p>下面修改为我们选择的高速软件仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/yum.repos.d/CentOS-Base.repo</span>
<span class="token punctuation">[</span>base<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>CentOS-<span class="token variable">$releasever</span> - Base
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://ftp.ksu.edu.tw/FTP/CentOS/7/os/x86_64/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

<span class="token comment">#released updates </span>
<span class="token punctuation">[</span>updates<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>CentOS-<span class="token variable">$releasever</span> - Updates
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://ftp.ksu.edu.tw/FTP/CentOS/7/updates/x86_64/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

<span class="token comment">#additional packages that may be useful</span>
<span class="token punctuation">[</span>extras<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>CentOS-<span class="token variable">$releasever</span> - Extras
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://ftp.ksu.edu.tw/FTP/CentOS/7/extras/x86_64/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

<span class="token comment"># 默认情况下，只有这三个仓库被启用，这里只修改这三个</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面来测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1： 列出目前 yum server 所使用的软件库有哪些</span>
<span class="token punctuation">[</span>root@study yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum repolist all</span>
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
repo <span class="token function">id</span>                                                repo name                                                status
C7.0.1406-base/x86_64                                  CentOS-7.0.1406 - Base                                   disabled
C7.0.1406-centosplus/x86_64                            CentOS-7.0.1406 - CentOSPlus                             disabled
<span class="token punctuation">..</span>.
base                                                   CentOS-7 - Base                                          enabled: <span class="token number">10097</span>
base-debuginfo/x86_64                                  CentOS-7 - Debuginfo                                     disabled
base-source/7                                          CentOS-7 - Base Sources                                  disabled
c7-media                                               CentOS-7 - Media                                         disabled
centosplus/7/x86_64                                    CentOS-7 - Plus                                          disabled
centosplus-source/7                                    CentOS-7 - Plus Sources                                  disabled
cr/7/x86_64                                            CentOS-7 - cr                                            disabled
extras                                                 CentOS-7 - Extras                                        enabled:   <span class="token number">341</span>
extras-source/7                                        CentOS-7 - Extras Sources                                disabled
fasttrack/7/x86_64                                     CentOS-7 - fasttrack                                     disabled
updates                                                CentOS-7 - Updates                                       enabled:  <span class="token number">1787</span>
updates-source/7                                       CentOS-7 - Updates Sources                               disabled
<span class="token punctuation">..</span>.

<span class="token comment"># 右边写着 enabled 的才是有激活的。</span>
<span class="token comment"># 会发现有其他的软件库，是因为由多个配置文件的原因</span>

<span class="token comment"># 可以看到，再次安装的时候，则会走固定的软件库了</span>
<span class="token punctuation">[</span>root@study yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum install pam-devel</span>
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
base                                                                                                   <span class="token operator">|</span> <span class="token number">3.6</span> kB  00:00:00     
extras                                                                                                 <span class="token operator">|</span> <span class="token number">2.9</span> kB  00:00:00     
updates                                                                                                <span class="token operator">|</span> <span class="token number">2.9</span> kB  00:00:00 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改软件库产生的问题与解决之道" tabindex="-1"><a class="header-anchor" href="#修改软件库产生的问题与解决之道" aria-hidden="true">#</a> 修改软件库产生的问题与解决之道</h4><p>由于我们是修改的系统默认的配置文件，事实上，我们应该在 <code>/etc/yum.repos.d/</code> 下新建一个扩展名为 <code>.repo</code> 的文件。</p><p>由于我们指定了特定的软件库，而不是其他软件开发商提供的软件库，因此才修改系统默认配置文件，但是可能由于使用的软件库版本有新旧之分，而 yum 会先下载软件库的清单到本机的 <code>/var/cache/yum</code> 中，我们只修改了网址，却没有修改软件库名称（中括号里面的名称），就有可能造成本机的列表与 yum 服务器的列表不同步，此时就会出现无法更新的问题了</p><p>出现这样的情况，只要清空本机缓存即可，可以手工，也可以通过 yum 的 clean 指令来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum clean <span class="token punctuation">[</span>packages<span class="token operator">|</span>headers<span class="token operator">|</span>all<span class="token punctuation">]</span>

packages：将已下载的软件文件删除
headers：将下载的软件文件头删除
all：将所有软件库数据都删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这里删除已下载过的所有软件库的相关数据（含软件本身与列表）</span>
<span class="token punctuation">[</span>root@study yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum clean all</span>
Loaded plugins: fastestmirror, langpacks
Cleaning repos: base extras updates
Cleaning up list of fastest mirrors

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="国内镜像站-仓库源" tabindex="-1"><a class="header-anchor" href="#国内镜像站-仓库源" aria-hidden="true">#</a> 国内镜像站（仓库源）</h3><p>一般使用国内的镜像站，可以选择上面两种方式中的其中一种，根据你自己的喜好选择</p><ul><li>网易镜像站：http://mirrors.163.com/.help/centos.html</li><li>清华大学镜像站：https://mirrors.tuna.tsinghua.edu.cn/help/centos/</li></ul><h2 id="🍀-yum-的软件群组功能" tabindex="-1"><a class="header-anchor" href="#🍀-yum-的软件群组功能" aria-hidden="true">#</a> 🍀 yum 的软件群组功能</h2><p>通过 yum 在线安装一个软件是很简单的，如果需要安装一个大型项目，比如测试机安装系统的时候，只选择了 GNOME 这个窗口管理员，此时想安装 KDE 呢，不需要重新安装，可以通过 yum 的软件群组功能</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token punctuation">[</span>群组功能<span class="token punctuation">]</span> <span class="token punctuation">[</span>软件群组<span class="token punctuation">]</span>

选项与参数：
	grouplist：列出所有可使用的  软件群组组，例如 Development Tools 之类的
	groupinfo：后面接 group_name，则可了解该 group 内含的所有软件名
	groupinstall：可以安装一整组的软件群组，非常好用
	groupremove：移除某个软件群组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：查询目前软件库与本机上课用于安装过的软件群组有哪些？</span>
<span class="token punctuation">[</span>root@study yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum grouplist</span>
Loaded plugins: fastestmirror, langpacks
There is no installed <span class="token function">groups</span> file.
Maybe run: yum <span class="token function">groups</span> mark convert <span class="token punctuation">(</span>see <span class="token function">man</span> yum<span class="token punctuation">)</span>
Loading mirror speeds from cached hostfile
 * base: mirrors.huaweicloud.com
 * extras: mirrors.huaweicloud.com
 * updates: mirrors.huaweicloud.com
<span class="token comment"># 如果有已安装过系统环境群组</span>
<span class="token comment"># Installed environment groups：</span>
<span class="token comment">#	xxxxx</span>
Available Environment Groups:		<span class="token comment"># 还可以安装的系统环境软件群组</span>
   Minimal Install
   Compute Node
   Infrastructure Server
   File and Print Server
   Basic Web Server
   Virtualization Host
   Server with GUI
   GNOME Desktop
   KDE Plasma Workspaces
   Development and Creative Workstation
<span class="token comment"># 如果有已安装过的群组。则由下面这一项</span>
<span class="token comment"># Installed groups：</span>
<span class="token comment">#  xxx</span>
Available Groups:			<span class="token comment"># 还可以安装的软件群组</span>
   Compatibility Libraries
   Console Internet Tools
   Development Tools
   Graphical Administration Tools
   Legacy UNIX Compatibility
   Scientific Support
   Security Tools
   Smart Card Support
   System Administration Tools
   System Management
Done

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 Available Groups 中有一个 Scientific Support，想知道这个是什么，可以查看他的信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum groupinfo &quot;Scientific Support&quot;</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>
Group: Scientific Support
 Group-Id: scientific
 Description: Tools <span class="token keyword">for</span> mathematical and scientific computations, and parallel computing.
 Optional Packages:
   atlas
   fftw
   fftw-devel
<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>描述中说了，提供 用于数学和科学计算的工具，以及并行计算的工具，下面则是有许多的软件，在安装该群组时，会被一起安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装这个群组</span>
<span class="token punctuation">[</span>root@study yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum groupinstall &quot;Scientific Support&quot;</span>
Loaded plugins: fastestmirror, langpacks
There is no installed <span class="token function">groups</span> file.
Maybe run: yum <span class="token function">groups</span> mark convert <span class="token punctuation">(</span>see <span class="token function">man</span> yum<span class="token punctuation">)</span>
Loading mirror speeds from cached hostfile
 * base: mirrors.huaweicloud.com
 * extras: mirrors.huaweicloud.com
 * updates: mirrors.huaweicloud.com
Warning: Group scientific does not have any packages to install.
Maybe run: yum <span class="token function">groups</span> mark <span class="token function">install</span> <span class="token punctuation">(</span>see <span class="token function">man</span> yum<span class="token punctuation">)</span>
No packages <span class="token keyword">in</span> any requested group available to <span class="token function">install</span> or update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正常情况下，会安装好各项软件，但是这个群组里面的软件都是可选择的 「Optional Packages:」（在查看 groupinfo 里面有这个项目），而不是主要的「mandatory」，所以默认情况下，该群组软件不会安装任何软件，你可以使用 <code>yum install atlas fftw ...</code> 一个一个写进去安装，如果想要 groupinstall 默认安装好所有的 optional 软件，就需要修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/yum.conf </span>
<span class="token comment"># 增加下面这一行的设置</span>
<span class="token assign-left variable">group_package_types</span><span class="token operator">=</span>default,mandatory,optional
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-epel-elrepo-外挂软件以及自定义配置文件" tabindex="-1"><a class="header-anchor" href="#🍀-epel-elrepo-外挂软件以及自定义配置文件" aria-hidden="true">#</a> 🍀 EPEL/ELRepo 外挂软件以及自定义配置文件</h2><p>有很多时候，可能我们要使用的软件没有纳入 CentOS 的软件库内，就无法使用 yum 来进行安装，但是我们可以使用 Tarball 去编译，当然这个又变麻烦了，好在有网友提供了预先编译版本了</p><p>在Fedora 基金会里面发展了一个外加软件计划（Extra Packages for Enterprise Linux，EPEL），该计划主要针对 Red Hat Enterprise Linux 的版本来开发的，刚好 CentOS 也是针对 RHEL 的版本处理的，所以也能支持该软件库的相关软件相依环境了，主页地址为：https://fedoraproject.org/wiki/EPEL，CentOS 7 主要可以使用的软件仓库为 ：https://dl.fedoraproject.org/pub/epel/7/x86_64/</p><p>除了上述的 Fedora 计划所提供的额外软件仓库外，社群里面也针对 CentOS 与 EPEL 的不足而提供的许多软件仓库，当时作者需要处理 PCI passthrough 虚拟化而用到的 ELRepo 软件仓库，下面是提供给 CentOS 7.x 的网址：</p><ul><li>http://elrepo.org/tiki/tiki-index.php</li><li>http://elrepo.org/linux/elrepo/el7/x86_64</li><li>http://elrepo.org/linux/kernel/el7/x86_64</li></ul><p>该软件库与其他软件库比较不同的地方在于该软件库提供的数据大多是核心、核心模块与虚拟化相关软件有关。例如 NVidia 的驱动程序也在里面，尤其提供了最小的核心（取名为 kernel-ml，就是 Linux 的核心）。</p><p>当然还有其他机构提供的软件仓库，这个就需要我们自己去寻找了。</p><p>那么我们怎么通过 EPEL 计划来安装 NetCDF 以及 R 软件呢？</p><ol><li><p>先针对 epel 进行 yum 配置文件处理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 我们新建一个文件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/yum.repos.d/epel.repo</span>
<span class="token punctuation">[</span>epel<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>epel packages
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://dl.fedoraproject.org/pub/epel/7/x86_64/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里默认是不启用该仓库的，只是未来有需要的时候才进行安装。</p></li><li><p>使用该仓库来进行安装 netcdf 和 R 软件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum --enablerepo=epel install netcdf R</span>

<span class="token comment"># 未来当你不加上 --enablerepo=epel 时，这个 EPEL 的软件并不会更新</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="使用本机的原版光盘" tabindex="-1"><a class="header-anchor" href="#使用本机的原版光盘" aria-hidden="true">#</a> 使用本机的原版光盘</h3><p>比如你的主机没有网络，但是却有很多软件要安装，你的系统也都还没有任何升级的动作，这个时候，就可以使用本机的光盘作为软件来源。</p><p>首先，将你的光盘挂载到某个目录。这里假设挂载到 <code>/mnt</code> 了。如下编写配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/yum.repos.d/cdrom.repo</span>
<span class="token punctuation">[</span>mycdrom<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>mycdrom
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>file:///mnt
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum --enablerepo=mycdrom install software_name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-全系统自动升级" tabindex="-1"><a class="header-anchor" href="#🍀-全系统自动升级" aria-hidden="true">#</a> 🍀 全系统自动升级</h2><p>我们在安装软件的时候，都需要我们手动选择 yes/no 来决定是否升级，其实也可以使用 <code>-y</code> 参数自动应答 <code>yum -y update</code>，再配合 crontab 来达到系统自动升级软件的需求</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo &#39;10 1 * * * root /usr/bin/yum -y --enablerepo=epel update&#39; &gt; /etc/cron.d/yumupdate</span>
<span class="token comment"># 每天 1 点 10 分开始升级软件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-管理的选择-rpm-还是-tarball" tabindex="-1"><a class="header-anchor" href="#🍀-管理的选择-rpm-还是-tarball" aria-hidden="true">#</a> 🍀 管理的选择：RPM 还是 Tarball</h2><p>这一直是一个有趣的问题：如果我要升级，或则是全新安装一个新的软件，选择 RPM 还是 Tarball 来安装？</p><p>这个问题考虑的因素有很多，作者通常是这样建议：</p><ol><li><p>优先选择原厂的 RPM 功能</p><p>由于原厂释出的软件通常具有一段时间的维护期。</p><p>比如：RHEL 与 CetnOS 每一个版本至少提供 5 年以上的更新期限，这对于我们的系统安全性来说，是在是非常棒。加上 yum 自动升级，易于安装、移除、升级等特点</p></li><li><p>选择软件官网释出的 RPM 或则是提供的软件库</p><p>软件太多，原厂并不会都包含，比如 CentOS 就没有提供 NTFS 的相关模块，此时你可以到官网去查询，看看有没有提供 RPM 文件，如果提供了软件库网址，就更方便了</p></li><li><p>利用 Tarball 安装特殊软件</p><p>某些特殊用途的软件并不会特别帮你制作 RPM 文件的，此时也不建议你自行制作 SRPM 来转成 RPM，因为太耗时。如果你的确有很多主机需要安装，那么将源码制作成 RPM 就很有价值了。</p></li><li><p>用 Tarball 测试新版软件</p><p>你可能想尝鲜或则使用新软件，但是原本厂商并没有提供新版的 RPM 包，此时你就可以使用 Tarball 安装到 <code>/usr/local</code> 下，而且大多数软件安装不同版本在系统上也不会有干扰。</p></li></ol><h2 id="🍀-基础服务管理-以-apache-为例" tabindex="-1"><a class="header-anchor" href="#🍀-基础服务管理-以-apache-为例" aria-hidden="true">#</a> 🍀 基础服务管理：以 Apache 为例</h2><p>在第 17 章谈到 systemd 的服务管理，那时仅使用 vsftpd 这个比较简单的服务来做示例。如今网络已经配置好，且有 yum 了，这里使用 www 服务的 httpd 来实践下</p><p>在默认的情况下，你无需修改服务的配置文件，通过默认值来处理你的服务即可，那么可以通过以下的流程来安装服务软件：</p><ol><li>安装：yum install 你的软件</li><li>启动：systemctl start 你的软件</li><li>开机启动：systemctl enable 你的软件</li><li>防火墙 <code>firewall-cmd --add-service=&quot;你的服务&quot;; firewall-cmd --permanent --add-service=&quot;你的服务&quot;</code></li><li>测试：用软件去查阅你的服务是否正常</li></ol><p>下面进行实践，一般来说 www 网站服务器需要有 www 服务器软件 + 网页程序语言 + 数据库系统 + 程序语言与数据库的链接软件等。在 CentOS 上，我们需要的软件就有 httpd + php + mariadb-server + php-mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 0. 先检查软件是否有安装</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rpm -q httpd php mariadb-server php-mysql</span>
package httpd is not installed
package php is not installed
mariadb-server-5.5.64-1.el7.x86_64  <span class="token comment"># 这个安装好了，其他三个没有安装</span>
package php-mysql is not installed

<span class="token comment"># 1. 安装所需要的软件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># yum install httpd php mariadb-server php-mysql </span>

<span class="token comment"># 2.3 启动与开机启动</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># systemctl daemon-reload </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># systemctl start httpd         </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># systemctl enable httpd</span>
Created symlink from /etc/systemd/system/multi-user.target.wants/httpd.service to /usr/lib/systemd/system/httpd.service.
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># systemctl status httpd</span>
* httpd.service - The Apache HTTP Server
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/httpd.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Thu <span class="token number">2020</span>-04-09 <span class="token number">23</span>:03:04 CST<span class="token punctuation">;</span> 21s ago
     Docs: man:httpd<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
           man:apachectl<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
 Main PID: <span class="token number">16641</span> <span class="token punctuation">(</span>httpd<span class="token punctuation">)</span>
   Status: <span class="token string">&quot;Total requests: 0; Current requests/sec: 0; Current traffic:   0 B/sec&quot;</span>
   CGroup: /system.slice/httpd.service
           <span class="token operator">|</span>-16641 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           <span class="token operator">|</span>-19479 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           <span class="token operator">|</span>-19480 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           <span class="token operator">|</span>-19481 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           <span class="token operator">|</span>-19482 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           \`-19483 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>

Apr 09 <span class="token number">23</span>:02:20 study.centos.mrcode systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting The Apache HTTP Server<span class="token punctuation">..</span>.
Apr 09 <span class="token number">23</span>:03:04 study.centos.mrcode systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started The Apache HTTP Server.

<span class="token comment"># 4. 防火墙</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: enp0s3 enp0s8
  sources: 
  services: dhcpv6-client <span class="token function">ssh</span>			<span class="token comment"># 这里还没有 http 的服务</span>
  ports: 
  protocols: 
  masquerade: no
  forward-ports: 
  source-ports: 
  icmp-blocks: 
  rich rules: 
<span class="token comment"># 下面开始配置  </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-service=&quot;http&quot;; </span>
success
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --permanent --add-service=&quot;http&quot;</span>
success
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-all</span>
public <span class="token punctuation">(</span>active<span class="token punctuation">)</span>
  target: default
  icmp-block-inversion: no
  interfaces: enp0s3 enp0s8
  sources: 
  services: dhcpv6-client http <span class="token function">ssh</span>		<span class="token comment"># 就出现在这里了</span>
  ports: 
  protocols: 
  masquerade: no
  forward-ports: 
  source-ports: 
  icmp-blocks: 
  rich rules: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候，在你的图形界面中浏览器中访问：http://localhost 就能看到一个网页了，也可以通过在宿主机中的浏览器访问虚拟机的 IP 地址，因为防火墙已经放行该服务了，通过 IP 也能访问到</p>`,78),t=[o];function l(i,r){return n(),a("div",null,t)}const u=s(p,[["render",l],["__file","03.html.vue"]]);export{u as default};
