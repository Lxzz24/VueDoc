import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const i={},l=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><ul><li>一个可以被挂载的数据通常称为「文件系统 filesystem」而不是分区槽（partition）</li><li>基本上 Linux 的传统文件系统位 Ext2，该文件系统内的信息主要有： <ul><li>superblock：记录此 filesystem 的整体信息，包括 inode、block 的总量、使用量、剩余量，以及文件系统的格式与相关信息</li><li>inode：记录文件的属性，一个文件占用一个 inode，同时记录此文件的数据所在的 block 号码</li><li>block：实际记录文件的内容，若文件太大时，会占用多个 block</li></ul></li><li>Ext2 文件系统的数据存取为索引式文件系统（indexed allocation）</li><li>需要碎片整理的原因就是文件写入的 block 太过于离散了，此时文件读取的效能变得很差。可以通过碎片整理将同一个文件所属的 blocks 整理在一起</li><li>Ext 文件系统主要有：boot sector、superblock、inode bitmap、inode table、data block 等 6 大部分</li><li>data block 是用来放置文件内容数据的地方，在 ext2 文件系统中所支持的 block 大小有 1k、2k、4k 三种</li><li>inode 记录文件的属性、权限等数据，其他重要项目为：每个 inode 大小均为固定，有 128、256bytes 两种基本容量。每个文件都仅会占用一个 inode。因此文件系统能够建立的文件数量与 inode 的数量有关</li><li>文件的 block 在记录文件的实际数据，目录的 block 则在记录该目录下文件名与其 inode 号码的对照表</li><li>日志文件系统（journal）会多出一块记录区，随时记载文件系统的主要活动，可加快系统复原时间</li><li>Linux 文件系统位增加效能，会让主存储器作为大量的磁盘告诉缓存</li><li>实体链接只是多了一个文件名对该 inode 号码的连接</li><li>符号链接就类似 windows 的快捷方式功能</li><li>磁盘的使用必须经过：分区、格式化与挂载，分别惯用的指令为：gdisk、mkfs、mount 三个指令</li><li>分区时，应使用 parted 检查分区表格式，再判断使用 fdisk 或 gdisk 来分区，或直接使用 parted 分区</li><li>为了考虑效能，xfs 文件系统格式化时，可以考虑加上 agcount、su、sw、extsize 等参数</li><li>如果磁盘以无未分区的容量，可以考虑使用大型文件取代磁盘装置的处理方式，通过 dd 与格式化功能</li><li>开机自动挂载可参考 /etc/fstab 的设置，设置完后务必使用 mount -a 测试语法正确性</li></ul><h2 id="🍀-卸载挂载的分区练习" tabindex="-1"><a class="header-anchor" href="#🍀-卸载挂载的分区练习" aria-hidden="true">#</a> 🍀 卸载挂载的分区练习</h2><p>将本章挂载的几个挂载点全部卸载。并删除这些分区，回复到原本刚安装时的状态；</p><ul><li>目标：了解到删除分区槽需要注意的各项信息</li><li>前提：本章各项示例都有做过，才会拥有 /dev/sda4 ~ /dev/sda7 的分区出现</li><li>需求：熟悉 gdisk、parated、umount、sapoff 等指令</li></ul><ol><li><p>使用 free、swapon -s、mount 等指令查询要被处理的文件系统不可以被使用，如果有被使用则必须使用 umount 卸载文件系统。如果是 swap，则需要使用 swapon -s 找出被使用的分区槽再用 swapoff 卸载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># umount /data/ext4 /data/xfs /data/file /data/win</span>
umount: /data/ext4：未挂载
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># swapoff /dev/sda6 /tmp/swap</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>观察 /etc/fstab 将相关的配置删除或注释掉</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nano</span> /etc/fstab
<span class="token comment"># 将相关的都注释掉了</span>
<span class="token comment"># UUID=&quot;edfa7161-5847-4935-80e1-6e081be9ab77&quot; /data/xfs xfs defaults 0 0</span>
<span class="token comment"># /srv/loopdev /data/file xfs defaults 0 0</span>
<span class="token comment"># UUID=&quot;89727d5b-a222-4878-be50-19bbb61cabb0&quot; swap swap defaults 0 0</span>
<span class="token comment"># /tmp/swap swap swap defaults 0 0</span>
<span class="token comment"># UUID=&quot;72BE-0556&quot; /data/win vfat defaults 0 0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 gdisk 删除，也可以使用 parted 来删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># parted /dev/sda rm 7</span>
信息: You may need to update /etc/fstab.

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># parted /dev/sda rm 6</span>
信息: You may need to update /etc/fstab.

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># parted /dev/sda rm 5</span>
信息: You may need to update /etc/fstab.

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># parted /dev/sda rm 4</span>
信息: You may need to update /etc/fstab.
<span class="token comment"># 刷新分区表</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># partprobe                                                 </span>

<span class="token comment"># 确认下，确实只剩下三个了</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># parted /dev/sda print</span>
Model: ATA VBOX HARDDISK <span class="token punctuation">(</span>scsi<span class="token punctuation">)</span>
Disk /dev/sda: <span class="token number">43</span>.8GB
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: 512B/512B
Partition Table: gpt
Disk Flags: pmbr_boot

Number  Start   End     Size    File system  Name  标志
 <span class="token number">1</span>      1049kB  3146kB  2097kB                     bios_grub
 <span class="token number">2</span>      3146kB  1077MB  1074MB  xfs
 <span class="token number">3</span>      1077MB  <span class="token number">33</span>.3GB  <span class="token number">32</span>.2GB                     lvm

<span class="token comment"># 将相关文件删除</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># rm /tmp/swap /srv/loopdev</span>
rm：是否删除普通文件 <span class="token string">&quot;/tmp/swap&quot;</span>？y
rm：是否删除普通文件 <span class="token string">&quot;/srv/loopdev&quot;</span>？y

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6),t=[l];function d(o,c){return s(),a("div",null,t)}const r=n(i,[["render",d],["__file","07.html.vue"]]);export{r as default};
