import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const i={},l=e(`<h1 id="本章习题" tabindex="-1"><a class="header-anchor" href="#本章习题" aria-hidden="true">#</a> 本章习题</h1><h2 id="🍀-情景模拟题" tabindex="-1"><a class="header-anchor" href="#🍀-情景模拟题" aria-hidden="true">#</a> 🍀 情景模拟题</h2><p>LVM 可以弹性调整 filesystem 的大小，但是缺点是可能没有加速与硬件备份（与快照不同）的功能。而磁盘阵列则具有效率与备份功能，但是无法提供类似 LVM 的优点。此例中结合两者的优势，在 RAID 上使用 LVM 的功能</p><ul><li>目标：测试在RAID 磁盘上面架构 LVM 系统</li><li>需求：需要具有磁盘管理的能力，包括 RAID 与 LVM</li><li>前提：会用到本章建立出来的 <code>/dev/vda{5,6,7}</code></li></ul><p>本章不实际操作了，笔者暂时不需要深入了解这里的知识点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 分出 3 个区出来，分完之后，如下</span>
gdisk <span class="token parameter variable">-l</span> /dev/vda
 <span class="token number">5</span>        <span class="token number">67123200</span>        <span class="token number">69220351</span>   <span class="token number">1024.0</span> MiB  FD00  Linux RAID
 <span class="token number">6</span>        <span class="token number">69220352</span>        <span class="token number">71317503</span>   <span class="token number">1024.0</span> MiB  FD00  Linux RAID
 <span class="token number">7</span>        <span class="token number">71317504</span>        <span class="token number">73414655</span>   <span class="token number">1024.0</span> MiB  FD00  Linux RAID
 
<span class="token comment"># 创建 RAID5 数组</span>
<span class="token function">mdadm</span> <span class="token parameter variable">--create</span> /dev/md0 <span class="token parameter variable">--auto</span><span class="token operator">=</span>yes <span class="token parameter variable">--level</span><span class="token operator">=</span><span class="token number">5</span> --raid-devices<span class="token operator">=</span><span class="token number">3</span> /dev/vda<span class="token punctuation">{</span><span class="token number">5,6</span>,7<span class="token punctuation">}</span>
	UUID:xxx1234
<span class="token function">vim</span> /etc/mdadm.conf
	ARRAY /dev/md0 <span class="token assign-left variable">UUID</span><span class="token operator">=</span>xxx1234

<span class="token comment"># 处理 LVM，这里使用默认参数</span>
pvcreate /dev/md0			<span class="token comment"># 创建 PV</span>
vgcreate raidvg /dev/md0	<span class="token comment"># 建立 VG</span>
lvcreate <span class="token parameter variable">-L</span> <span class="token number">1</span>.5G <span class="token parameter variable">-n</span> raidlv raidvg	<span class="token comment"># 建立 LVM</span>
lvscan
	ACTIVE ‘/dev/raidvg/raidlv’ <span class="token punctuation">[</span><span class="token number">1.50</span> GIB<span class="token punctuation">]</span> inherit

<span class="token comment"># 文件系统创建与挂载</span>
mkfs.xfs /dev/raidvg/raidlv
blkid /dev/raidvg/raidlv
	/dev/raidvg/raidlv:UUID<span class="token operator">=</span><span class="token string">&quot;xxx456&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;xfs&quot;</span>
<span class="token function">vim</span> /etc/fstab
	<span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;xxx456&quot;</span> /srv/raidlvm xfs	defaults <span class="token number">0</span> <span class="token number">0</span>

<span class="token function">mkdir</span> /srv/raidlvm
<span class="token function">mount</span> <span class="token parameter variable">-a</span>
<span class="token function">df</span> <span class="token parameter variable">-Th</span> /srv/raidlvm
	Filesystem				  Type  Size	Used	Avail	Use%	Mounted on	
	/dev/mapper/raidvg-raidlv  xfs  <span class="token number">1</span>.5G    33M      <span class="token number">1</span>.5G    <span class="token number">3</span>%	    /srv/raidlvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个过程与前面的一致，只不过是先创建了 RAID，然后再改 RAID 上面创建 LVM。至于其他的基本管理方式也是和之前的那些维护指令一样，包括 RAID 热插拨机制、LVM 放大缩小机制等</p><h2 id="🍀-简答题" tabindex="-1"><a class="header-anchor" href="#🍀-简答题" aria-hidden="true">#</a> 🍀 简答题</h2><ul><li><p>在前一章大量新增账户范例中，如果要让每个用户具有 <code>soft/hard</code> <code>40M/50M</code> 的容量，如何修改这个 script？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 要先对 /home 启动 Quota 的环境后，使用如下脚本</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim addaccount2.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token comment"># 使用脚本来创建 xfs 文件系统 Quota 实验的账户</span>
<span class="token function">groupadd</span> myquotagrp
<span class="token keyword">for</span> <span class="token for-or-select variable">username</span> <span class="token keyword">in</span> myquota1 myquota2 myquota3 myquota4 myquota5 
<span class="token keyword">do</span>
	<span class="token function">useradd</span> <span class="token parameter variable">-g</span> myquotagrp <span class="token variable">$username</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;123456&quot;</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">$username</span>
	<span class="token comment"># 在这里增加</span>
	xfs_quota <span class="token parameter variable">-x</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;limit -u bsoft=40M bhard=50M <span class="token variable">\${username}</span>&quot;</span> /home
<span class="token keyword">done</span>

<span class="token function">mkdir</span> /home/myquota
<span class="token function">chgrp</span> myquotagrp /home/myquota		<span class="token comment"># 改变该目录的所属群</span>
<span class="token function">chmod</span> <span class="token number">2770</span> /home/myquota		<span class="token comment"># 拥有者和群组有权限，这里加了个 SGID=2 的特殊权限，笔者暂时不理解是为什么</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>让 RAID 具有保护数据的功能，防止因为硬件损坏而导致数据的丢失，可以选的 RAID 等级有哪些？</p><p>具有备份数据的有：RAID-1、RAID-5、RAID-6</p></li><li><p>在预设的 LVM 设置中，LVM 能否具有 备份 功能？</p><p>可以通过快照（snopshot）功能进行数据的备份，注意需要对快照进行备份</p></li><li><p>如果你的主机提供 RAID0 功能，你将 3 块磁盘全部在 BIOS 阶段使用 RAID 芯片整合为一块大磁盘，则此磁盘在 Linux 系统中的文件名是什么？</p><p>因为磁盘阵列时再 BIOS 阶段完成的，因此 Linux 系统会捕捉到一块完整的 RAID 磁盘，文件名则是 <code>/dev/sda</code> ，但如果是 intel 的芯片组，则还是可能是 <code>/dev/md127</code> 类似的名称</p></li></ul>`,9),t=[l];function p(c,o){return s(),a("div",null,t)}const v=n(i,[["render",p],["__file","05.html.vue"]]);export{v as default};
