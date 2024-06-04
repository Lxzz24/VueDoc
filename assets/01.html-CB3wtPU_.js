import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t={},o=e(`<h1 id="磁盘配额-quota-的应用于实践" tabindex="-1"><a class="header-anchor" href="#磁盘配额-quota-的应用于实践" aria-hidden="true">#</a> 磁盘配额（Quota）的应用于实践</h1><p>Quota 字面意思是「限额」，对于磁盘来说就是限制容量的使用</p><h2 id="🍀-什么是-quota" tabindex="-1"><a class="header-anchor" href="#🍀-什么是-quota" aria-hidden="true">#</a> 🍀 什么是 Quota？</h2><p>就是限制用户对磁盘容量的使用，不至于让其中某一个用户使用了大量的硬盘容量，导致其他用户不够用的情况</p><h3 id="quota-的一般用途" tabindex="-1"><a class="header-anchor" href="#quota-的一般用途" aria-hidden="true">#</a> Quota 的一般用途</h3><p>针对网络服务的设计，比较常用的情况是：</p><ul><li>针对 www server，如：每个人的网页空间的容量限制</li><li>针对 mail server，如：每个人的邮件空间限制</li><li>针对 file server，如：每个人最大的可用网络磁盘空间（教学环境中最常见）</li></ul><p>针对 Linux 系统主机上面的使用者有如下常用情况：</p><ul><li><p>使用群组限制：限制某一群组所能使用的最大磁盘配额</p></li><li><p>使用用户限制：限制某一用户的最大磁盘配额</p></li><li><p>限制某一目录的最大磁盘配额</p><p>在 EXT 家族文件系统的磁盘配额主要是针对整个文件系统来处理，所以大多针对挂载点进行设计。</p><p>新的 xfs 可以使用 project 模式，可以针对个别的目录（非文件系统）来设计磁盘配额</p></li></ul><p>基本上 qutoa 让管理员知道磁盘使用率以及管理磁盘使用情况的一个工具。比较特别的是 XFS 的 quota 是整合到文件系统内，并不是其他外挂程序来管理的。所以通过 quota 来直接回报磁盘使用率，要比 unix 工具快速。如 <code>du</code>会重新计算目录下的磁盘使用率，但 xfs 可以通过 xfs_quota 直接获得各个目录的使用率，速度要快很多</p><h3 id="quota-的使用限制" tabindex="-1"><a class="header-anchor" href="#quota-的使用限制" aria-hidden="true">#</a> Quota 的使用限制</h3><ul><li><p>EXT 文件系统家族只能针对整个 filesystem，xfs 可以使用 project 模式来为不同目录磁盘配额</p></li><li><p>核心必须支持 quota</p><p>Linux 核心必须有支持 quota 功能，CentOS7.x 预设支持 quota 功能</p></li><li><p>只对一般身份使用者有效</p><p>root 不能设置 quota，因为整个服务器数据都是他的</p></li><li><p>若启用 SELinux，非所有目录均可设置 quota</p><p>新版 CentOS 预设启用 SELinux 功能，该功能加强了某些细部的权限控制，所以预设情况下，只能针对 <code>/home/</code>进行配置 quota</p><p>如果要针对其他目录配置 quota，后续章节会讲解怎么解开 SELinux 限制的方法</p></li></ul><p>不同文件系统 quota 的处理不太一样，在 quota 前，先确认你的文件系统</p><h3 id="quota-的规范设置项目" tabindex="-1"><a class="header-anchor" href="#quota-的规范设置项目" aria-hidden="true">#</a> Quota 的规范设置项目</h3><p>针对 XFS filesystem 的限制项目主要分为以下几部分：</p><ul><li><p>分别针对用户 user、群组 group、个别目录 project</p><p>quota 的限制中，主要针对以上项进行磁盘使用率的限制</p></li><li><p>容量限制 block 或文件数量 inode 限制</p><p>第 7 章中说到，文件系统主要规划为存放属性的 inode 与实际文件数据的 block 区块。</p><ul><li>限制 inode 用量：限制可以建立的 文件数量</li><li>限制 block 用量：管理用户磁盘容量限制，较常见该方式</li></ul></li><li><p>柔性 soft 劝导与硬性 hard 规定</p><p>inode 和 block 限制值有两个：soft 与 hard，通常 hard 值比 soft 高。</p><p>如：限制项目为 block，可以限制 hard 为 500MBytes ，soft 为 400MBytes。</p><ul><li>hard：表示使用者绝对不会超过该值。</li><li>soft：表示使用者在地狱 soft 限制时，可以正常使用磁盘，但若超过 soft 且低于 hard 值，每次用户登录系统时，系统会主动发出磁盘即将爆满的警告信息，且会给予一个宽限时间（grace time），如果在宽限时间内降低到了 soft 限制下，则宽限时间会停止</li></ul></li><li><p>会倒计时的宽限时间（grace time）</p><p>只有用户的磁盘用量介于 soft 到 hard 之间时，才会出现倒计时，由于达到 hard 值时，用户的磁盘使用权可能会被锁住。为了担心用户没有注意到磁盘配额问题，因此涉及了 soft，相当于预警机制，一般预设的宽限时间为 7 天，<strong>如果 7 天内你还不进行容量降低动作，那么 soft 限制会立刻取代 hard 值来做为 quota 的限制</strong></p></li></ul><h2 id="🍀-一个-xfs-文件系统的-quota-实验" tabindex="-1"><a class="header-anchor" href="#🍀-一个-xfs-文件系统的-quota-实验" aria-hidden="true">#</a> 🍀 一个 XFS 文件系统的 Quota 实验</h2><p>一个场景来实践，如下是需求描述</p><ul><li><p>目的与账户</p><p>让 5 个专题生为一组，账户是 myquota1、myquota2、myquota3、myquota4、myquota5 ，密码都是 123456，初始群组都是 myquotagrp。其他属性都为默认值</p></li><li><p>账户的磁盘容量限制</p><p>5 个用户都能使用 300MBytes 的磁盘使用量（hard），文件数量不限制。此外，只要容量使用超过 250MBytes，则警告（soft）</p></li><li><p>群组限额（option 1）</p><p>由于该系统还有其他用户存在，因此 myquotagrp 群组最多可用使用 1GBytes 的容量。也就是说 myquota1~3 都用了 280Mbytes，那么剩下两人最多只能使用 1000MB - 280x3 = 160MB 的磁盘容量。这就是使用者与群组同时设置时会产生的后果</p></li><li><p>共享目录限额（option 2）</p><p>另一种设置方式是：每个用户具有自己的独立容量上限，他们的专题共享目录在 <code>/home/myquota</code> 该目录设置为其他人没有任何权限的共享空间，只有 myquotagrp 群组拥有全部的权限。且该目录最多只能使用 500MB 的磁盘容量。<strong>群组 group 的限制与目录 （directory/project）无法同时设置</strong></p></li><li><p>宽限时间限制：每个使用者在超过 soft 限制值之后，有 14 天的宽限时间</p></li></ul><p>接下来一步一步实现以上需求</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 多账户创建，可以使用之前的批量账户创建脚本来实现，这里使用简化版的定制脚本来实现</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim addaccount2.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># 使用脚本来创建 xfs 文件系统 Quota 实验的账户</span>
<span class="token function">groupadd</span> myquotagrp
<span class="token keyword">for</span> <span class="token for-or-select variable">username</span> <span class="token keyword">in</span> myquota1 myquota2 myquota3 myquota4 myquota5 
<span class="token keyword">do</span>
	<span class="token function">useradd</span> <span class="token parameter variable">-g</span> myquotagrp <span class="token variable">$username</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;123456&quot;</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">$username</span>
<span class="token keyword">done</span>

<span class="token function">mkdir</span> /home/myquota
<span class="token function">chgrp</span> myquotagrp /home/myquota		<span class="token comment"># 改变该目录的所属群</span>
<span class="token function">chmod</span> <span class="token number">2770</span> /home/myquota		<span class="token comment"># 拥有者和群组有权限，这里加了个 SGID=2 的特殊权限，笔者暂时不理解是为什么</span>


<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># sh addaccount2.sh </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-实验流程-1-文件系统的支持与观察" tabindex="-1"><a class="header-anchor" href="#🍀-实验流程-1-文件系统的支持与观察" aria-hidden="true">#</a> 🍀 实验流程 1：文件系统的支持与观察</h2><p>XFS 默认支持 Quota，Ext 则请自行百度。另外 <strong>不要在根目录下进行 quota，因为文件系统会变得太复杂</strong>，下面以 <code>/home</code> 这个 xfs 文件系统为例，如何启动 quota 功能</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看文件系统</span>
<span class="token comment"># -h 格式化容量单位，-T 显示 type 字段</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># df -hT /home</span>
Filesystem                    Type  Size  Used Avail Use% Mounted on
/dev/mapper/centos_study-root xfs    35G  <span class="token number">4</span>.4G   31G  <span class="token number">13</span>% /
<span class="token comment"># 可以看到上面的挂载点是 / 根目录，这里是由于该指令不是在最初我们搭建分区的哪台学习机上操作的</span>
<span class="token comment"># 所以最好还是切换到我们的学习机上面去实验；目前由于在外面，暂时没有环境</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在过去的版本中，管理员可以通过 <code>mount -o remount</code> 机制来重新挂载启动 quota 的功能，不过当前的 XFS 文件系统在挂载之初就声明了，因此无法使用 remount 来重新启动 quota 功能，一定要写入 <code>/etc/fstab</code> 中，或者是在初始挂载过程中加入这个项目，否则不会生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/fstab</span>
/dev/mapper/centos_study-root   /    xfs     defaults,usrquota,grpquota        <span class="token number">0</span> <span class="token number">0</span>
<span class="token comment"># 第一字端对应 df -hT /home 中出现的第一字段。这里只增加了第 4 字段的这部分内容 ,usrquota,grpquota</span>

<span class="token comment"># 卸载根目录，肯定会提示忙碌；这里只有重启让自动挂载了</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># umount /       </span>
umount: /: target is busy.
        <span class="token punctuation">(</span>In some cases useful info about processes that use
         the device is found by lsof<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> or fuser<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">))</span>
<span class="token comment"># 这里尝试使用根目录来启用 quota 功能，配置，重启之后，也没有被开启，这里我放弃了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，回到了最开始学习分好区那台学习机上了，下面再来做这个实验</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span>$ <span class="token function">df</span> <span class="token parameter variable">-hT</span> /home
Filesystem              Type  Size  Used Avail Use% Mounted on
/dev/mapper/centos-home xfs   <span class="token number">5</span>.0G  128M  <span class="token number">4</span>.9G   <span class="token number">3</span>% /home

<span class="token comment"># 先看看该目录提供的服务</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span>$ <span class="token function">mount</span> <span class="token operator">|</span> <span class="token function">grep</span> home
/dev/mapper/centos-home on /home <span class="token builtin class-name">type</span> xfs <span class="token punctuation">(</span>rw,relatime,seclabel,attr2,inode64,noquota<span class="token punctuation">)</span>

<span class="token comment"># 增加挂载时提供的服务 ,usrquota,grpquota </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/fstab</span>
/dev/mapper/centos-home /home                   xfs     defaults,usrquota,grpquota        <span class="token number">0</span> <span class="token number">0</span>
<span class="token comment"># 还是提示繁忙，这里只能用重启代替，下面的2个步骤</span>
<span class="token comment"># 原因是有 home 下面的账户在登录，因此无法卸载掉</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># umount /home</span>
umount: /home: target is busy.
        <span class="token punctuation">(</span>In some cases useful info about processes that use
         the device is found by lsof<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> or fuser<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">))</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mount -a	# 挂载</span>
<span class="token comment"># 仔细看下面的信息，证明已经启动了</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">mount</span> <span class="token operator">|</span> <span class="token function">grep</span> home
/dev/mapper/centos-home on /home <span class="token builtin class-name">type</span> xfs <span class="token punctuation">(</span>rw,relatime,seclabel,attr2,inode64,usrquota,grpquota<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本个，针对 quota 限制的项目主要有三项：</p><ul><li><code>uquota/usrquota/quota</code>：针对使用者账户的设置</li><li><code>gquota/grpquota</code>：针对群组的设置</li><li><code>pquota/prjquota</code>：针对单一目录的设置，不可与 grpquota 同时存在</li></ul><p>务必小心 修改<code>/etc/fstab</code>文件内容，发生错误的话，有可能导致无法开机</p><h2 id="🍀-实验流程-2-观察-quota-报告资料" tabindex="-1"><a class="header-anchor" href="#🍀-实验流程-2-观察-quota-报告资料" aria-hidden="true">#</a> 🍀 实验流程 2：观察 Quota 报告资料</h2><p>可以使用 xfs_quota 指令来查阅相关信息，该指令参数较多，先来了解简单查询的参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xfs_quota <span class="token parameter variable">-x</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;指令&quot;</span> <span class="token punctuation">[</span>挂载点<span class="token punctuation">]</span>

选项与参数：
	-x：专家模式，后续才能够加入 <span class="token parameter variable">-c</span> 的指令参数
	-c：后面接指令，本小节先讲解数据回报的指令
指令：
	print：单纯的列出目前主机内的文件系统参数等信息
	df：与原本的  <span class="token function">df</span> 功能一样，可以加上 -b<span class="token punctuation">(</span>block<span class="token punctuation">)</span>  -i<span class="token punctuation">(</span>inode<span class="token punctuation">)</span> -h（格式化单位）等
	report：列出目前的 <span class="token function">quota</span> 项目，有 -ugr（user/group/project） 和 <span class="token parameter variable">-bi</span> 等信息
	state：列出目前支持 <span class="token function">quota</span> 的文件系统信息，有无启动相关项目等信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：列出目前系统的各个文件系统，以及文件系统的 quota 挂载参数支持</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span>$ xfs_quota <span class="token parameter variable">-x</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;print&quot;</span>
Filesystem          Pathname
/                   /dev/mapper/centos-root
/boot               /dev/sda2
/home               /dev/mapper/centos-home <span class="token punctuation">(</span>uquota, gquota<span class="token punctuation">)</span>		<span class="token comment"># 这里显示支持</span>

<span class="token comment"># 范例 2：列出目前 /home 支持 quota 的挂载点文件系统使用情况</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span>$ xfs_quota <span class="token parameter variable">-x</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;df -h&quot;</span> /home
Filesystem     Size   Used  Avail Use% Pathname
/dev/mapper/centos-home
               <span class="token number">5</span>.0G <span class="token number">127</span>.7M   <span class="token number">4</span>.9G   <span class="token number">2</span>% /home
<span class="token comment"># 和 df -h 类似，只是更准确了 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 3： 列出目前 /home 的所有用户的  quota 限制值</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -ubih&quot; /home</span>
User <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks                            Inodes              
User ID      Used   Soft   Hard Warn/Grace     Used   Soft   Hard Warn/Grace  
---------- --------------------------------- --------------------------------- 
root            <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">8</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode       <span class="token number">7</span>.4M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>    <span class="token number">260</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode1     <span class="token number">87</span>.9M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>     <span class="token number">16</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota1      12K      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota2      12K      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota3      12K      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota4      12K      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota5      12K      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>

<span class="token comment"># Blocks 是容量限制</span>
<span class="token comment"># Inodes 是文件数量限制</span>
<span class="token comment"># soft/hard 为 0 则表示没有限制</span>

默认情况下， report 会将支持的 user/group/prject 相关数据都列出来；上面加了 <span class="token parameter variable">-u</span> 参数，所以只列出了 user 的相关数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 4：列出目前支持的 quota 文件系统是否有启动了 quota 功能</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;state&quot; </span>
User <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: ON		<span class="token comment"># 是否启用计算功能； ON 是，OFF 否</span>
  Enforcement: ON		<span class="token comment"># 是否有实际 quota 管制功能</span>
  Inode: <span class="token comment">#1605 (2 blocks, 2 extents)</span>
Group <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: ON
  Enforcement: ON
  Inode: <span class="token comment">#1606 (2 blocks, 2 extents)</span>
Project <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>	<span class="token comment"># project 并未开启</span>
  Accounting: OFF	
  Enforcement: OFF
  Inode: <span class="token comment">#1606 (2 blocks, 2 extents)</span>
Blocks grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>		<span class="token comment"># 下面是 grace timec 的项目，宽限时间</span>
Inodes grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>
Realtime Blocks grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-实验流程-3-限制值设置方式" tabindex="-1"><a class="header-anchor" href="#🍀-实验流程-3-限制值设置方式" aria-hidden="true">#</a> 🍀 实验流程 3：限制值设置方式</h2><p>启动支持并能查询到相关状态，那么进行实验的限制操作：每个用户 250/300MB 容量限制、群组供 950M/1G 容量限制、宽限时间（grace time）14 天</p><p>语法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xfs_quota <span class="token parameter variable">-x</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;limit [-ug] b[soft|hard]=N name&quot;</span>
xfs_quota <span class="token parameter variable">-x</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;timer [-ug] [bir] Ndays&quot;</span>

选项与参数：
limit： 实际限制的项目，可以针对 user/group 限制，项目有：
	bsoft/bhard：block 的 soft/hard 限制值，可以加单位
	isoft/ihard：inode 的 soft/hard 限制值
	name：用户/群组名称
	
timer：设置 grace <span class="token function">time</span> 项目，可以针对 user/group 以及 block/inode 设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：设置用户的 block 限制值（需求中没有说限制文件数量 inode）</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;limit -u bsoft=250M bhard=300M myquota1&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;limit -u bsoft=250M bhard=300M myquota2&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;limit -u bsoft=250M bhard=300M myquota3&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;limit -u bsoft=250M bhard=300M myquota4&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;limit -u bsoft=250M bhard=300M myquota5&quot; /home</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -ubih&quot; /home</span>
User <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks                            Inodes              
User ID      Used   Soft   Hard Warn/Grace     Used   Soft   Hard Warn/Grace  
---------- --------------------------------- --------------------------------- 
root            <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">8</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode       <span class="token number">7</span>.4M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>    <span class="token number">260</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode1     <span class="token number">87</span>.9M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>     <span class="token number">16</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota1      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota2      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota3      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota4      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota5      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
<span class="token comment"># 可以看到  5 个账户的设置以及生效了，在 Blocks 这边</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 2：设置 myqutarp 的 block 限制值</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;limit -g bsoft=950M bhard=1G myquotagrp&quot; /home</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -gbih&quot; /home</span>
Group <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks                            Inodes              
Group ID     Used   Soft   Hard Warn/Grace     Used   Soft   Hard Warn/Grace  
---------- --------------------------------- --------------------------------- 
root            <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode       <span class="token number">7</span>.4M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>    <span class="token number">260</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode1     <span class="token number">87</span>.9M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>     <span class="token number">16</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquotagrp    60K   950M     1G  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>     <span class="token number">36</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 3： 设置 grace time 为 14 天</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;timer -u -b 14days&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;timer -g -b 14days&quot; /home</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;state&quot; /home</span>
User <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: ON
  Enforcement: ON
  Inode: <span class="token comment">#1605 (2 blocks, 2 extents)</span>
Group <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: ON
  Enforcement: ON
  Inode: <span class="token comment">#1606 (2 blocks, 2 extents)</span>
Project <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: OFF
  Enforcement: OFF
  Inode: <span class="token comment">#1606 (2 blocks, 2 extents)</span>
Blocks grace time: <span class="token punctuation">[</span><span class="token number">14</span> days<span class="token punctuation">]</span>		<span class="token comment"># 这里变成了 14 天</span>
Inodes grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>
Realtime Blocks grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 4：以 myquota1 的用户测试 quota 是否真的有限制效果</span>
<span class="token function">su</span> <span class="token parameter variable">-l</span> myquotal
<span class="token punctuation">[</span>myquota1@study ~<span class="token punctuation">]</span>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span><span class="token number">123</span>.img <span class="token assign-left variable">bs</span><span class="token operator">=</span>1M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">310</span>
dd: 写入<span class="token string">&quot;123.img&quot;</span> 出错: 超出磁盘限额
记录了300+0 的读入
记录了299+0 的写出
<span class="token number">313524224</span>字节<span class="token punctuation">(</span><span class="token number">314</span> MB<span class="token punctuation">)</span>已复制，0.386459 秒，811 MB/秒
<span class="token comment"># 英文版本</span>
<span class="token punctuation">[</span>myquota1@study ~<span class="token punctuation">]</span>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span><span class="token number">123</span>.img <span class="token assign-left variable">bs</span><span class="token operator">=</span>1M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">310</span>
dd: error writing <span class="token string">&#39;123.img&#39;</span><span class="token builtin class-name">:</span> Disk <span class="token function">quota</span> exceeded
<span class="token number">300</span>+0 records <span class="token keyword">in</span>
<span class="token number">299</span>+0 records out
<span class="token number">313524224</span> bytes <span class="token punctuation">(</span><span class="token number">314</span> MB<span class="token punctuation">)</span> copied, <span class="token number">0.175228</span> s, <span class="token number">1.8</span> GB/s

<span class="token comment"># 查看状态</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -ubih&quot; /home</span>
User <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks                            Inodes              
User ID      Used   Soft   Hard Warn/Grace     Used   Soft   Hard Warn/Grace  
---------- --------------------------------- --------------------------------- 
root            <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span><span class="token number">0</span> days<span class="token punctuation">]</span>      <span class="token number">8</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode       <span class="token number">7</span>.4M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>    <span class="token number">260</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode1     <span class="token number">87</span>.9M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>     <span class="token number">16</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota1   <span class="token number">299</span>.0M   250M   300M  00 <span class="token punctuation">[</span><span class="token number">13</span> days<span class="token punctuation">]</span>     <span class="token number">16</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota2      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota3      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota4      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota5      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">7</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
<span class="token comment"># 会发现 myquota1 使用量已经满了，并且宽限时间还有 13 天</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-实验流程-4-project-的限制-针对目录-可选" tabindex="-1"><a class="header-anchor" href="#🍀-实验流程-4-project-的限制-针对目录-可选" aria-hidden="true">#</a> 🍀 实验流程 4：project 的限制（针对目录）- 可选</h2><p>注意：这里是针对 /home/myquota 这个目录，而不是针对 myquotagrp 这个群组。上面配置过 myquotagrp 这个组的限制</p><p>另外：上述 myquota1 已经使用了 300M 的容量，他是在他自己家的目录做的 dd 指令，因此 <code>/home/myquota</code> 这个目录目前还未使用，但是</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -h&quot; /home</span>
User <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks              
User ID      Used   Soft   Hard Warn/Grace   
---------- --------------------------------- 
root            <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span><span class="token number">0</span> days<span class="token punctuation">]</span>
mrcode       <span class="token number">7</span>.4M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode1     <span class="token number">87</span>.9M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota1   <span class="token number">299</span>.0M   250M   300M  00 <span class="token punctuation">[</span><span class="token number">13</span> days<span class="token punctuation">]</span>
myquota2      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota3      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota4      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota5      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>

Group <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks              
Group ID     Used   Soft   Hard Warn/Grace   
---------- --------------------------------- 
root            <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span><span class="token number">0</span> days<span class="token punctuation">]</span>
mrcode       <span class="token number">7</span>.4M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode1     <span class="token number">87</span>.9M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquotagrp <span class="token number">299</span>.1M   950M     1G  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现，myquotagrp 这个群组的容量已经用掉了 300M，对于目录的限制来说，就不会有效果了</p><p>还因为 project 不能与 group 同时设置，所以需要取消掉 group 的设置，并加入 project 才可以</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改 /etc/fstab 内的文件系统支持参数</span>
<span class="token comment"># 把 grpquota 去掉，加入 prjquota</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/fstab </span>

/dev/mapper/centos-home /home                   xfs     defaults,usrquota,prjquota        <span class="token number">0</span> <span class="token number">0</span>

<span class="token comment"># 卸载 /home, 并重新加载</span>
<span class="token comment"># 这里还是老问题，远程登录笔者用 mrcode 为入口的，所以 /home 目录卸载在使用（虽然使用 su 切换到了 root）</span>
<span class="token comment"># 这里还是使用重启机器来自动挂载</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># umount /home/</span>
umount: /home: target is busy.
        <span class="token punctuation">(</span>In some cases useful info about processes that use
         the device is found by lsof<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> or fuser<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">))</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mount -a</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;state&quot;</span>
User <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: ON
  Enforcement: ON
  Inode: <span class="token comment">#1605 (2 blocks, 2 extents)</span>
Group <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: OFF				<span class="token comment"># 已经关闭了</span>
  Enforcement: OFF
  Inode: <span class="token comment">#1606 (2 blocks, 2 extents)</span>
Project <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: ON		<span class="token comment"># 已经启动了</span>
  Enforcement: ON
  Inode: <span class="token comment">#1606 (2 blocks, 2 extents)</span>
Blocks grace time: <span class="token punctuation">[</span><span class="token number">14</span> days<span class="token punctuation">]</span>
Inodes grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>
Realtime Blocks grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>

<span class="token comment"># 这里还没有配置任何项目的限制的哈。除了第一行哪个 #0</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -h&quot; /home</span>
User <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks              
User ID      Used   Soft   Hard Warn/Grace   
---------- --------------------------------- 
root            <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode       <span class="token number">7</span>.4M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
mrcode1     <span class="token number">87</span>.9M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota1   <span class="token number">299</span>.0M   250M   300M  00 <span class="token punctuation">[</span><span class="token number">13</span> days<span class="token punctuation">]</span>
myquota2      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota3      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota4      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
myquota5      12K   250M   300M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>

Project <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks              
Project ID   Used   Soft   Hard Warn/Grace   
---------- --------------------------------- 
<span class="token comment">#0         394.3M      0      0  00 [------]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>规范目录、项目名称和项目 ID</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定项目表伺服与目录的对应;</span>
<span class="token comment"># 语法可以看成是：别名:目录；这里别名设置的是数字 11</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo &quot;11:/home/myquota&quot; &gt;&gt; /etc/projects</span>
<span class="token comment"># 规范项目名称；</span>
<span class="token comment"># 语法是：项目名称:目录别名</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;myquotaproject:11&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/projid

<span class="token comment"># 这个语法感觉很奇怪，需要先个目录取个别名，然后再取个别名取关联这个别名</span>
<span class="token comment"># 不过笔者看目录名称：可以这样来理解：</span>
<span class="token comment"># projects 目录给目标目录取了一个  别名</span>
<span class="token comment"># projid 用自定义的 ID，关联了别名</span>
<span class="token comment"># 这个应该是解耦配置之类的考虑吧</span>

<span class="token comment"># 初始化专案名称</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;project -s myquotaproject&quot;</span>
Setting up project myquotaproject <span class="token punctuation">(</span>path /home/myquota<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Processed <span class="token number">1</span> <span class="token punctuation">(</span>/etc/projects and cmdline<span class="token punctuation">)</span> paths <span class="token keyword">for</span> project myquotaproject with recursion depth infinite <span class="token punctuation">(</span>-1<span class="token punctuation">)</span>.
Setting up project myquotaproject <span class="token punctuation">(</span>path /home/myquota<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Processed <span class="token number">1</span> <span class="token punctuation">(</span>/etc/projects and cmdline<span class="token punctuation">)</span> paths <span class="token keyword">for</span> project myquotaproject with recursion depth infinite <span class="token punctuation">(</span>-1<span class="token punctuation">)</span>.
Setting up project myquotaproject <span class="token punctuation">(</span>path /home/myquota<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Processed <span class="token number">1</span> <span class="token punctuation">(</span>/etc/projects and cmdline<span class="token punctuation">)</span> paths <span class="token keyword">for</span> project myquotaproject with recursion depth infinite <span class="token punctuation">(</span>-1<span class="token punctuation">)</span>.

<span class="token comment"># 就可以看到完整的文件系统各项支持，与 project 的目录对应</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;print &quot; /home</span>
Filesystem          Pathname
/home               /dev/mapper/centos-home <span class="token punctuation">(</span>uquota, pquota<span class="token punctuation">)</span>
/home/myquota       /dev/mapper/centos-home <span class="token punctuation">(</span>project <span class="token number">11</span>, myquotaproject<span class="token punctuation">)</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -pbih &quot; /home</span>
Project <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks                            Inodes              
Project ID   Used   Soft   Hard Warn/Grace     Used   Soft   Hard Warn/Grace  
---------- --------------------------------- --------------------------------- 
<span class="token comment">#0         394.3M      0      0  00 [------]    327      0      0  00 [------]</span>
myquotaproject      <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">1</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
<span class="token comment"># 第二行，是我们刚刚配置的项目 ID，各个使用都还是 0 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试与观察</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 测试与观察</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;limit -p bsoft=450M bhard=500M myquotaproject&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -pbih &quot; /home</span>
Project <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks                            Inodes              
Project ID   Used   Soft   Hard Warn/Grace     Used   Soft   Hard Warn/Grace  
---------- --------------------------------- --------------------------------- 
<span class="token comment">#0         394.3M      0      0  00 [------]    327      0      0  00 [------]</span>
myquotaproject      <span class="token number">0</span>   450M   500M  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>      <span class="token number">1</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
<span class="token comment"># 可以看到一件配置上 450 和 500 m 的限制了</span>
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/home/myquota/123/img <span class="token assign-left variable">bs</span><span class="token operator">=</span>1M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">510</span>

<span class="token comment"># 测试是否有效</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=/home/myquota/123.img bs=1M count=510</span>
dd: error writing <span class="token string">&#39;/home/myquota/123.img&#39;</span><span class="token builtin class-name">:</span> No space left on device
<span class="token number">501</span>+0 records <span class="token keyword">in</span>
<span class="token number">500</span>+0 records out
<span class="token number">524288000</span> bytes <span class="token punctuation">(</span><span class="token number">524</span> MB<span class="token punctuation">)</span> copied, <span class="token number">0.491772</span> s, <span class="token number">1.1</span> GB/s
<span class="token comment"># 使用 root 对该目录写入，超过限制也被提示了，这个才是完整的针对目录的规范</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小节：</p><ul><li><code>/etc/projects</code>：给具体的目录建立别名</li><li><code>/etc/projid</code>：给目录别名建立 projid</li></ul><p>这样就可以针对目录来限制了。</p><p>有如下一个常见，就能满足使用限制目录的需求：在 www 服务中，要针对某些目录进行容量限制，但是因为容量之前仅针对用户进行限制，但是由于 www 服务都是一个名为 httpd 的账户管理的，因此该 www 服务所产生的文件数据都属于 httpd 账户，就无法针对某些特定的目录进行限制了，有了 project 之后，就可以针对不同的目录做容量限制，而不用管在里面建立文件的文件拥有者</p><h2 id="🍀-xfs-quota-的管理与额外指令对照表" tabindex="-1"><a class="header-anchor" href="#🍀-xfs-quota-的管理与额外指令对照表" aria-hidden="true">#</a> 🍀 XFS quota 的管理与额外指令对照表</h2><p>这里讲解稍微完讲解常用的 quota 维护指令</p><ul><li><p>disable：暂时取消 quota 的限制，但其实同还是在计算 quota，只是暂时不对限制做任何操作</p></li><li><p>enable：恢复 quota 的限制</p></li><li><p>off：完全关闭 quota 的限制</p><p>该选项只能通过卸载重新挂载才能重新开启 quota 的限制哟</p></li><li><p>remov：必须要在 off 状态下才能执行该指令，移除 quota 的限制配置</p><p>比如要移除 project 的限制配置，只需要 <code>remove -p</code> 就可以了，而不需要重新设置限制值为 0</p></li></ul><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 暂时关闭 XFS 文件系统的 quota 限制功能</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;disable -up&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;state &quot; /home</span>
User <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: ON
  Enforcement: OFF		<span class="token comment"># 已经变成 OFF 了</span>
  Inode: <span class="token comment">#1605 (2 blocks, 2 extents)</span>
Group <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: OFF
  Enforcement: OFF
  Inode: <span class="token comment">#1606 (2 blocks, 2 extents)</span>
Project <span class="token function">quota</span> state on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
  Accounting: ON
  Enforcement: OFF
  Inode: <span class="token comment">#1606 (2 blocks, 2 extents)</span>
Blocks grace time: <span class="token punctuation">[</span><span class="token number">14</span> days<span class="token punctuation">]</span>
Inodes grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>
Realtime Blocks grace time: <span class="token punctuation">[</span><span class="token number">7</span> days<span class="token punctuation">]</span>

<span class="token comment"># 测试写入大于限制值的文件到 目录</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=/home/myquota/123.img bs=1M count=510</span>
<span class="token number">510</span>+0 records <span class="token keyword">in</span>
<span class="token number">510</span>+0 records out
<span class="token number">534773760</span> bytes <span class="token punctuation">(</span><span class="token number">535</span> MB<span class="token punctuation">)</span> copied, <span class="token number">0.365973</span> s, <span class="token number">1.5</span> GB/s
<span class="token comment"># 发现没有限制了</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -pbih &quot; /home</span>
Project <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks                            Inodes              
Project ID   Used   Soft   Hard Warn/Grace     Used   Soft   Hard Warn/Grace  
---------- --------------------------------- --------------------------------- 
<span class="token comment">#0         394.3M      0      0  00 [------]    327      0      0  00 [------]</span>
myquotaproject   510M   450M   500M  00 <span class="token punctuation">[</span>-none-<span class="token punctuation">]</span>      <span class="token number">2</span>      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>
<span class="token comment"># 会发现有统计，只是没有限制</span>

<span class="token comment"># 开启限制</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;enable -up&quot; /home</span>

<span class="token comment"># 再次写入，限制出现了</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=/home/myquota/123.img bs=1M count=510</span>
dd: error writing <span class="token string">&#39;/home/myquota/123.img&#39;</span><span class="token builtin class-name">:</span> No space left on device
<span class="token number">501</span>+0 records <span class="token keyword">in</span>
<span class="token number">500</span>+0 records out
<span class="token number">524288000</span> bytes <span class="token punctuation">(</span><span class="token number">524</span> MB<span class="token punctuation">)</span> copied, <span class="token number">0.400271</span> s, <span class="token number">1.3</span> GB/s

<span class="token comment"># 关闭了 quota 限制行为，再尝试开启，会发现不能开启</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;off -up&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;enable -up&quot; /home</span>
XFS_QUOTAON: Function not implemented
<span class="token comment"># 通过 off 之后，需要重新卸载挂载  umount/mount 才可以重新开启</span>

<span class="token comment"># 笔者这里还是使用重启来替代者两个命令</span>
<span class="token function">umount</span> /home<span class="token punctuation">;</span> <span class="token function">mount</span> -a<span class="token punctuation">;</span>

<span class="token comment"># 移除所有的限制</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment">#xfs_quota -x -c &quot;off -up&quot; /homee</span>
<span class="token comment"># 移除项目的配置</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;remove -p&quot; /home</span>

<span class="token comment"># 关闭后，不重新挂载，没有任何信息</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;state&quot; /home</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;state&quot;      </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -pbh&quot; /home</span>
<span class="token comment"># 重新挂载后，查看，项目的限制配置就没有了</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfs_quota -x -c &quot;report -pbh&quot; /home</span>
Project <span class="token function">quota</span> on /home <span class="token punctuation">(</span>/dev/mapper/centos-home<span class="token punctuation">)</span>
                        Blocks              
Project ID   Used   Soft   Hard Warn/Grace   
---------- --------------------------------- 
<span class="token comment">#0         394.3M      0      0  00 [------]</span>
myquotaproject   500M      <span class="token number">0</span>      <span class="token number">0</span>  00 <span class="token punctuation">[</span>------<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是 EXT 家族与 XFS 系统的相关命令，可以尝试使用以下命令来维护</p><table><thead><tr><th>设定流程项目</th><th>XFS 文件系统</th><th>EXT 家族</th></tr></thead><tbody><tr><td><code>/etc/fstab</code> 参数设置</td><td>usrquota/grpquota/prjquota</td><td>usrquota/grpquota</td></tr><tr><td>quota 配置文件</td><td>不需要</td><td>quotacheck</td></tr><tr><td>设置用户/群组限制值</td><td><code>xfs_quota -x -c &quot;limit &quot;</code></td><td>edquota 或 setquota</td></tr><tr><td>设置 grace time</td><td><code>xfs_quota -x -c &quot;timer &quot;</code></td><td>edquota</td></tr><tr><td>设置目录限制值</td><td><code>xfs_quota -x -c &quot;limit &quot;</code></td><td>无</td></tr><tr><td>观察报告</td><td><code>xfs_quota -x -c &quot;report &quot;</code></td><td>repquota 或 quota</td></tr><tr><td>启动与关闭 quota 限制</td><td>\`xfs_quota -x -c &quot;[disable</td><td>enable] &quot;\`</td></tr><tr><td>发送警告给用户</td><td>目前版本尚未支持</td><td>warnquota</td></tr></tbody></table><h2 id="🍀-不修改现有系统的-quota" tabindex="-1"><a class="header-anchor" href="#🍀-不修改现有系统的-quota" aria-hidden="true">#</a> 🍀 不修改现有系统的 quota</h2><p>有这样一种情况：之前分区时，没有规划邮件信箱目录 <code>/var/spool/mail/</code> 是一个独立的 partition，现在主机也没有办法新增或分区出任何新的分区槽了。</p><p>那么在这样的情况下，quota 的支持与文件系统有关，无法夸文件系统来设计 quota 的 project 功能</p><p>那么此时，那么想要使用的邮件信箱与家目录的总体磁盘使用量为固定，要怎么做？由于 <code>/home/</code>和 <code>/var/spool/mail</code> 根本不可能是同一个 filesystem（除非是都不分区，使用根目录，才有肯可能整合在一起），所以这样的情况怎么进行 quota 的限制？</p><p>假设。你有 /home 这个独立的分区槽了，你只需要：</p><ol><li>将 <code>/var/spool/mail</code>这个目录完整的移动到 <code>/home</code> 下</li><li>利用 <code>ln -s /home/mail /var/spool/mail</code> 来建立链接</li><li>将 <code>/home</code> 进行 quota 的限制配置</li></ol><p>还可以依据不同的使用者与群组来设置 quota，让后以同样的方式来进行 link</p>`,74),p=[o];function c(u,i){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","01.html.vue"]]);export{r as default};