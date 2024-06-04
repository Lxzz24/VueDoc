import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t={},c=e(`<h1 id="主机的细部权限规划-acl-的使用" tabindex="-1"><a class="header-anchor" href="#主机的细部权限规划-acl-的使用" aria-hidden="true">#</a> 主机的细部权限规划：ACL 的使用</h1><p>从第 5 章开始，在强调 Linux 的权限概念非常重要，传统的权限仅有三种身份（owner、group、others）搭配三种权限（r、w、x），无法单纯的针对某一个使用者或某一个群组来设置设置特殊的权限需求，那么此时就需要使用 ACl 这个机制了</p><h2 id="🍀-什么是-acl-与如何支持启动-acl" tabindex="-1"><a class="header-anchor" href="#🍀-什么是-acl-与如何支持启动-acl" aria-hidden="true">#</a> 🍀 什么是 ACl 与如何支持启动 ACl</h2><p>ACl （Access Control List），主要目的是提供传统的 owner、group、others 的 read、write、execute 权限之外的特殊权限需求设置。ACL 可以针对单一使用者、单一文件或目录来进行 r、w、x 的权限规范，对于需要特殊权限的使用状况非常有帮助</p><p>ACl 主要针对以下方面来控制权限：</p><ul><li>使用者 user</li><li>群组 group</li><li>默认属性 mask：针对在该目录下在建立新文件/目录时，规范新数据的默认权限</li></ul><p>简单说，有一个目录，给一堆人使用，每个人或每个群组所需要的权限并不相同，使用传统 Linux 三种身份的三种权限是无法达到的，因此基本上，传统的 Linux 权限只能针对一个用户、一个群组以及非此群组的其他人设置权限。无法针对单一用户或个人来设计权限。</p><h3 id="如何启动-acl" tabindex="-1"><a class="header-anchor" href="#如何启动-acl" aria-hidden="true">#</a> 如何启动 ACl</h3><p>原本 ACL 是 unix-like 操作系统额外支持的项目，因为近年来对权限需求日益增大，因此目前 ACl 几乎已经预设加入所有场景的 Linux 文件系统的挂载参数中（ext2\\3\\4、xfs 等），所以无需任何操作。可以通过如下方式来检测是否支持 ACL</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study mrcode<span class="token punctuation">]</span><span class="token comment"># dmesg | grep -i acl</span>
<span class="token comment"># 这里 +ACl</span>
<span class="token punctuation">[</span>    <span class="token number">1.329361</span><span class="token punctuation">]</span> systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: systemd <span class="token number">219</span> running <span class="token keyword">in</span> system mode. <span class="token punctuation">(</span>+PAM +AUDIT +SELINUX +IMA <span class="token parameter variable">-APPARMOR</span> +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ +LZ4 <span class="token parameter variable">-SECCOMP</span> +BLKID +ELFUTILS +KMOD +IDN<span class="token punctuation">)</span>
<span class="token comment"># 这里 SGI XFS with ACLs</span>
<span class="token punctuation">[</span>    <span class="token number">2.978756</span><span class="token punctuation">]</span> SGI XFS with ACLs, security attributes, no debug enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>笔者疑问：怎么确定 xfs 支持？难道是因为我自己知道是在 xfs 系统上？</p><h2 id="🍀-acl-的设置技巧-getfacl、setfacl" tabindex="-1"><a class="header-anchor" href="#🍀-acl-的设置技巧-getfacl、setfacl" aria-hidden="true">#</a> 🍀 ACL 的设置技巧：getfacl、setfacl</h2><ul><li>getfacl：取得某个文件/目录的 ACL 设置信息</li><li>setfacl：设置某个文件/目录的 ACl</li></ul><h3 id="setfacl-指令用法介绍以及最简单的-u-账户-权限-设置" tabindex="-1"><a class="header-anchor" href="#setfacl-指令用法介绍以及最简单的-u-账户-权限-设置" aria-hidden="true">#</a> setfacl 指令用法介绍以及最简单的 <code>u:账户:权限</code> 设置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setfacl <span class="token punctuation">[</span>-bkRd<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>-ml -x<span class="token punctuation">}</span> acl 参数<span class="token punctuation">]</span> 目标文件名

选项与参数：
	-m：设置后续的 acl 参数给文件使用，不可与 <span class="token parameter variable">-x</span> 合用
	-x：删除后续的 acl 参数，不可与 <span class="token parameter variable">-m</span> 合用
	-b：移除 所有的 ACL 设置参数
	-k：移除 预设的 ACL 参数；（关于所谓的预设参数后续介绍）
	-R：递归设置 acl，包括此目录也会被设置
	-d：设置 「预设 acl 参数」的意思，只对目录有效，在该目录新建的数据会引用此默认值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是 acl 的选项功能，下面来介绍一些特殊权限的设置方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 针对特定使用者的方式</span>
<span class="token comment"># 设置规范：「u:[使用者账户列表]:[rwx]」</span>
<span class="token comment"># 例如 针对 mrcode1 的权限设置为 rx</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># touch acl_test1</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll acl_test1 </span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">2</span>月  <span class="token number">24</span> <span class="token number">16</span>:47 acl_test1
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># setfacl -m u:mrcode1:rx acl_test1 </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll acl_test1 </span>
-rw-r-xr--+ <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">2</span>月  <span class="token number">24</span> <span class="token number">16</span>:47 acl_test1
<span class="token comment"># 权限部分多了一个 +，且与原本的权限 644 看起来差异很大。</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># setfacl -m u::rwx acl_test1 </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll acl_test1 </span>
-rwxr-xr--+ <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">2</span>月  <span class="token number">24</span> <span class="token number">16</span>:47 acl_test1
<span class="token comment"># 设置 u 后面无使用者列表，代表设置该文件拥有者，所以上线显示 root 的全文为 rwx 了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是设置，权限部分会多出一个 + 号，传统的 ll 是不知道设置了什么的，可以通过 getfacl 来查阅</p><h3 id="getfacl-指令用法" tabindex="-1"><a class="header-anchor" href="#getfacl-指令用法" aria-hidden="true">#</a> getfacl 指令用法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getfacl filename

选项与参数：几乎与 setfacl 相同，这里不贴了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出刚刚设置的 acl_test1 的权限内容</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># getfacl acl_test1 </span>
<span class="token comment"># file: acl_test1			# 文件名</span>
<span class="token comment"># owner: root				# 拥有者，ls -l 看到的第 3 字段</span>
<span class="token comment"># group: root				# 该文件所属群组，ls -l 看到的第 4 字段</span>
user::rwx					<span class="token comment"># 使用者列表栏是空的，标识该权限设置针对的是文件的拥有者</span>
user:mrcode1:r-x			<span class="token comment"># 针对 mrcode1 的权限设置为 rx，与拥有者不同</span>
group::r--					<span class="token comment"># 群组的设置</span>
mask::r-x					<span class="token comment"># 此文件预设的有效权限 mask</span>
other::r--					<span class="token comment"># 其他人拥有的权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特定的单一群组的权限设置-g-群组名-权限" tabindex="-1"><a class="header-anchor" href="#特定的单一群组的权限设置-g-群组名-权限" aria-hidden="true">#</a> 特定的单一群组的权限设置：<code>g:群组名:权限</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 2. 针对特定群组的方式</span>
<span class="token comment"># 设置规范：「g:[群组列表]:[rwx]」</span>
<span class="token comment"># 针对 mygroup1 的权限设置为 rx</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># setfacl -m g:mygroup1:rx acl_test1 </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># getfacl acl_test1 </span>
<span class="token comment"># file: acl_test1</span>
<span class="token comment"># owner: root</span>
<span class="token comment"># group: root</span>
user::rwx
user:mrcode1:r-x
group::r--
group:mygroup1:r-x				<span class="token comment"># 多了这个权限设置</span>
mask::r-x
other::r--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="针对有效权限设置-m-权限" tabindex="-1"><a class="header-anchor" href="#针对有效权限设置-m-权限" aria-hidden="true">#</a> 针对有效权限设置：<code>m:权限</code></h3><p>群组与使用者设置类似，但是那个 mask 有点像是「有效权限」的意思：使用者或群组所设置的权限必须要存在与 mask 的权限设置范围内才会生效，也就是有效权限 effective permission</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 3. 针对有效全是 mask 的设置方式</span>
<span class="token comment"># 设置规范：「m:[rwx]」</span>
<span class="token comment"># 针对刚刚的文件规范仅有 r</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># setfacl -m m:r acl_test1 </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># getfacl acl_test1 </span>
<span class="token comment"># file: acl_test1</span>
<span class="token comment"># owner: root</span>
<span class="token comment"># group: root</span>
user::rwx
user:mrcode1:r-x		<span class="token comment">#effective:r--		# 有效权限只有 r</span>
group::r--
group:mygroup1:r-x		<span class="token comment">#effective:r--</span>
mask::r--
other::r--

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该功能可以通过 mask 来规范最大允许的权限，就能避免不小心开放某些权限给其他使用者或者群组了。不过，通常都是将 mask 设置为 rwx，再分别依据不同的使用者、群组去规范他们的权限</p><h3 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1： 将前一小节任务二中 /srv/projecta 目录，让 myuser1 可以进入查阅，但是 myuser1 不具有修改的权限</span>
<span class="token comment"># 由于 myuser1 是独立的使用者与群组，因此无法使用传统的 Linux 权限设置，此时应该使用 ACL 的设置</span>

<span class="token comment"># 1. 先测试使用 myuser1 能否进入该目录</span>
<span class="token punctuation">[</span>myuser1@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> /srv/projecta/
-bash: cd: /srv/projecta/: Permission denied

<span class="token comment"># 2. 修改 ACL 权限为读和执行</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># setfacl -m u:myuser1:rx /srv/projecta/</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># getfacl /srv/projecta/</span>
getfacl: Removing leading <span class="token string">&#39;/&#39;</span> from absolute path names
<span class="token comment"># file: srv/projecta/</span>
<span class="token comment"># owner: root</span>
<span class="token comment"># group: projecta</span>
<span class="token comment"># flags: -s-</span>
user::rwx
user:myuser1:r-x		<span class="token comment"># 设置了权限</span>
group::rwx
mask::rwx
other::---

<span class="token comment"># 3. 测试是否成功进入</span>
<span class="token punctuation">[</span>myuser1@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> /srv/projecta/
<span class="token punctuation">[</span>myuser1@study projecta<span class="token punctuation">]</span>$ ll <span class="token parameter variable">-a</span>
total <span class="token number">0</span>
drwxrws---+ <span class="token number">2</span> root projecta  <span class="token number">6</span> Feb <span class="token number">24</span> <span class="token number">15</span>:04 <span class="token builtin class-name">.</span>
drwxr-xr-x. <span class="token number">3</span> root root     <span class="token number">22</span> Feb <span class="token number">24</span> <span class="token number">15</span>:04 <span class="token punctuation">..</span>
<span class="token comment"># 测试写入，缺少不可写入</span>
<span class="token punctuation">[</span>myuser1@study projecta<span class="token punctuation">]</span>$ <span class="token function">touch</span> testing
touch: cannot <span class="token function">touch</span> <span class="token string">&#39;testing&#39;</span><span class="token builtin class-name">:</span> Permission denied

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子完成了之前任务二的后续需求，下面来介绍下默认权限，也就是创建新文件是否能继承 ACl 设置？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 root 账户取创建目录可文件，查看是否有继承 acl 设置</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># touch abc1</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># mkdir abc2</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># ll -d abc*;</span>
-rw-r--r--. <span class="token number">1</span> root projecta <span class="token number">0</span> Feb <span class="token number">25</span> 09:32 abc1
drwxr-sr-x. <span class="token number">2</span> root projecta <span class="token number">6</span> Feb <span class="token number">25</span> 09:32 abc2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到权限后面没有 <code>+</code> 号出现，标识这个 acl 属性没有被继承</p><h3 id="使用默认权限设置目录未来文件的-acl-权限继承-d-u-g-user-group-权限" tabindex="-1"><a class="header-anchor" href="#使用默认权限设置目录未来文件的-acl-权限继承-d-u-g-user-group-权限" aria-hidden="true">#</a> 使用默认权限设置目录未来文件的 ACL 权限继承 <code>d:[u|g]:[user|group]:权限</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置规范：d:[u|g]:[user|group 使用者列表]:[权限 rwx]</span>
<span class="token comment"># 让 myuser1 在 /srv/projeecta 目录下一直具有 rx 的预设权限</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># setfacl -m d:myuser1:rx /srv/projecta/</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># getfacl /srv/projecta</span>
getfacl: Removing leading <span class="token string">&#39;/&#39;</span> from absolute path names
<span class="token comment"># file: srv/projecta</span>
<span class="token comment"># owner: root</span>
<span class="token comment"># group: projecta</span>
<span class="token comment"># flags: -s-</span>
user::rwx
user:myuser1:r-x
group::rwx
mask::rwx
other::---
default:user::rwx
default:user:myuser1:r-x			<span class="token comment"># 可以看到这里已经被设置上了</span>
default:group::rwx
default:mask::rwx
default:other::---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置之后，还出现了其他针对拥有者的 default 配置。所以这里再次使用 root 账户取创建，也能看到继承效果了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># touch abc1</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># mkdir abc2</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># ll -d abc*</span>
-rw-rw----+ <span class="token number">1</span> root projecta <span class="token number">0</span> Feb <span class="token number">25</span> 09:40 abc1
drwxrws---+ <span class="token number">2</span> root projecta <span class="token number">6</span> Feb <span class="token number">25</span> 09:40 abc2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要让 ACL 属性全部消失，可以通过 <code>setfacl -b 文件名</code> 达到效果</p><h3 id="例题练习" tabindex="-1"><a class="header-anchor" href="#例题练习" aria-hidden="true">#</a> 例题练习</h3><h4 id="第一题" tabindex="-1"><a class="header-anchor" href="#第一题" aria-hidden="true">#</a> 第一题</h4><p>针对 <code>/srv/projecta</code> 目录的权限设置中，需要满足以下需求：</p><ol><li>取消 myuser1 的设置（包括默认值）</li><li>不能让 pro3 这个用户使用该目录，也就是 pro3 在该目录下没有任何权限</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 取消 myuser1 的设置和默认值</span>
<span class="token comment"># 先查询到配置了哪些属性</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># getfacl /srv/projecta/ | grep myuser1</span>
getfacl: Removing leading <span class="token string">&#39;/&#39;</span> from absolute path names
user:myuser1:r-x
default:user:myuser1:r-x
<span class="token comment"># 通过 -x 参数来取消，取消的时候，不需要写权限，直接写前面定位部位</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># setfacl -x u:myuser1 /srv/projecta/</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># setfacl -x d:myuser1 /srv/projecta/</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># getfacl /srv/projecta/ | grep myuser1</span>


<span class="token comment"># 2.让 pro3 这个用户无法使用该目录</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># setfacl -m u:pro3:- /srv/projecta/</span>
<span class="token punctuation">[</span>root@study projecta<span class="token punctuation">]</span><span class="token comment"># getfacl /srv/projecta/ | grep pro3   </span>
getfacl: Removing leading <span class="token string">&#39;/&#39;</span> from absolute path names
user:pro3:---			<span class="token comment"># 这样一来就没有任何权限了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),l=[c];function i(o,p){return s(),a("div",null,l)}const u=n(t,[["render",i],["__file","03.html.vue"]]);export{u as default};
