import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const p="/VueDoc/assets/markdown-img-paste-20191022221802204-BzWmsD9g.png",l="/VueDoc/assets/markdown-img-paste-20191022223136195-6oit7PGy.png",i="/VueDoc/assets/markdown-img-paste-20191022225353742-D9S72LyI.png",t={},c=e(`<p>本章讲解如何查询整体文件系统的总容量与每个目录所占用的容量。 此外前面谈到的文件类型中尚未将清楚的连接文档（link file）也会在这里介绍</p><h2 id="🍀-磁盘与目录的容量" tabindex="-1"><a class="header-anchor" href="#🍀-磁盘与目录的容量" aria-hidden="true">#</a> 🍀 磁盘与目录的容量</h2><p>磁盘整体数据是在 superblock 区块中，但是每个各别文件的容量则在 inode 中记载的。 可以使用如下指令查询：</p><ul><li>df：列出文件系统的整体磁盘使用量</li><li>du：评估文件系统的磁盘使用量（常用在预估目录所占容量）</li></ul><h3 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">df</span> <span class="token punctuation">[</span>-ahikHTm<span class="token punctuation">]</span> <span class="token punctuation">[</span>目录或文件名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>a：列出所有的文件系统，包括系统特有的 /proc 等文件系统</li><li>k：以 KBytes 的容量显示个文件系统</li><li>m：以 MBytes 的容量显示</li><li>h：以人类容易阅读的 GBytes、MBytes、KBytes 等格式自行显示</li><li>H：以 M=1000K 取代 M=1024k 的进位方式</li><li>T：连同该 partition 的 filesystem 名称（例如 xfs）也列出</li><li>i：不用磁盘容量，而已 inode 的数量来显示</li></ul><p>实践练习</p><p>将系统内所有的 filesystem 列出来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">df</span>
Filesystem              1K-blocks    Used Available Use% Mounted on
devtmpfs                   <span class="token number">578464</span>       <span class="token number">0</span>    <span class="token number">578464</span>   <span class="token number">0</span>% /dev
tmpfs                      <span class="token number">595476</span>       <span class="token number">0</span>    <span class="token number">595476</span>   <span class="token number">0</span>% /dev/shm
tmpfs                      <span class="token number">595476</span>    <span class="token number">8660</span>    <span class="token number">586816</span>   <span class="token number">2</span>% /run
tmpfs                      <span class="token number">595476</span>       <span class="token number">0</span>    <span class="token number">595476</span>   <span class="token number">0</span>% /sys/fs/cgroup
/dev/mapper/centos-root  <span class="token number">10475520</span> <span class="token number">4795672</span>   <span class="token number">5679848</span>  <span class="token number">46</span>% /
/dev/mapper/centos-home   <span class="token number">5232640</span>   <span class="token number">40552</span>   <span class="token number">5192088</span>   <span class="token number">1</span>% /home
/dev/sda2                 <span class="token number">1038336</span>  <span class="token number">174108</span>    <span class="token number">864228</span>  <span class="token number">17</span>% /boot
tmpfs                      <span class="token number">119096</span>      <span class="token number">12</span>    <span class="token number">119084</span>   <span class="token number">1</span>% /run/user/42
tmpfs                      <span class="token number">119096</span>       <span class="token number">0</span>    <span class="token number">119096</span>   <span class="token number">0</span>% /run/user/1000
<span class="token comment"># 不加任何选项，会默认将系统内所有的（不含特殊内存内的文件系统与 swap）都以 1 Kbytes 的容量列出来</span>
<span class="token comment"># /dev/shm 是与内存有关的挂载，可以先忽略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Filesystem：代表该文件系统是在哪个 partition</li><li>1k-block2：该列下的单位为 1kb，可以利用 -h 或 -m 来改变容量</li><li>Used：已使用掉的磁盘空间</li><li>Available：可用空间</li><li>Use%：磁盘使用率</li><li>Mounted on：磁盘挂载的目录（挂载点）</li></ul><p>将容量结果以容易阅读的容量格式显示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">df</span> <span class="token parameter variable">-h</span>
Filesystem               Size  Used Avail Use% Mounted on
devtmpfs                 565M     <span class="token number">0</span>  565M   <span class="token number">0</span>% /dev
tmpfs                    582M     <span class="token number">0</span>  582M   <span class="token number">0</span>% /dev/shm
tmpfs                    582M  <span class="token number">8</span>.5M  574M   <span class="token number">2</span>% /run
tmpfs                    582M     <span class="token number">0</span>  582M   <span class="token number">0</span>% /sys/fs/cgroup
/dev/mapper/centos-root   10G  <span class="token number">4</span>.6G  <span class="token number">5</span>.5G  <span class="token number">46</span>% /
/dev/mapper/centos-home  <span class="token number">5</span>.0G   40M  <span class="token number">5</span>.0G   <span class="token number">1</span>% /home
/dev/sda2               1014M  171M  844M  <span class="token number">17</span>% /boot
tmpfs                    117M   12K  117M   <span class="token number">1</span>% /run/user/42
tmpfs                    117M     <span class="token number">0</span>  117M   <span class="token number">0</span>% /run/user/1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将系统内的所有特殊文件格式及名称都列出来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">df</span> <span class="token parameter variable">-aT</span>
Filesystem              Type       1K-blocks    Used Available Use% Mounted on
sysfs                   sysfs              <span class="token number">0</span>       <span class="token number">0</span>         <span class="token number">0</span>    - /sys
proc                    proc               <span class="token number">0</span>       <span class="token number">0</span>         <span class="token number">0</span>    - /proc
devtmpfs                devtmpfs      <span class="token number">578464</span>       <span class="token number">0</span>    <span class="token number">578464</span>   <span class="token number">0</span>% /dev
securityfs              securityfs         <span class="token number">0</span>       <span class="token number">0</span>         <span class="token number">0</span>    - /sys/kernel/security
tmpfs                   tmpfs         <span class="token number">595476</span>       <span class="token number">0</span>    <span class="token number">595476</span>   <span class="token number">0</span>% /dev/shm

<span class="token comment"># 这里只是其中一部分，还有很多，几乎上都在内存中，例如 /proc 这个挂载点</span>
<span class="token comment"># 因此这些特殊的文件系统都不会占用磁盘空间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 /etc/ 下的可用的磁盘容量以易读格式显示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">df</span> <span class="token parameter variable">-h</span> /etc/
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   10G  <span class="token number">4</span>.6G  <span class="token number">5</span>.5G  <span class="token number">46</span>% /

<span class="token comment"># 在 df 后面加上目录或则是文件时，df 会自动分析该目录或文件所在的 partition，</span>
<span class="token comment"># 并将该 partition 容量显示出来，所以就可以知道该目录下又多少容量可用了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将目前各个 partition 当中可用的 inode 数量列出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">df</span> <span class="token parameter variable">-ih</span>
Filesystem              Inodes IUsed IFree IUse% Mounted on
devtmpfs                  142K   <span class="token number">382</span>  141K    <span class="token number">1</span>% /dev
tmpfs                     146K     <span class="token number">1</span>  146K    <span class="token number">1</span>% /dev/shm
tmpfs                     146K   <span class="token number">653</span>  145K    <span class="token number">1</span>% /run
tmpfs                     146K    <span class="token number">16</span>  146K    <span class="token number">1</span>% /sys/fs/cgroup
/dev/mapper/centos-root   <span class="token number">5</span>.0M  150K  <span class="token number">4</span>.9M    <span class="token number">3</span>% /
/dev/mapper/centos-home   <span class="token number">2</span>.5M   <span class="token number">237</span>  <span class="token number">2</span>.5M    <span class="token number">1</span>% /home
/dev/sda2                 512K   <span class="token number">340</span>  512K    <span class="token number">1</span>% /boot
tmpfs                     146K     <span class="token number">9</span>  146K    <span class="token number">1</span>% /run/user/42
tmpfs                     146K     <span class="token number">1</span>  146K    <span class="token number">1</span>% /run/user/1000

<span class="token comment"># -i 主要列出可用的 inode 剩余容量与总容量</span>
<span class="token comment"># 会发现，通常 inode 的数量剩余逗比 block 还要多</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 df 主要读取的数据几乎都是针对一整个文件系统，因此读取的范围主要是在 Superblock 内的信息，所以该指令显示结果速度非常快速。 在显示结果中，要特别留意根目录容量，因为我们所有的数据都是由根目录衍生出来的（这里应该说的是，当前这颗磁盘分区，没有额外的挂载，几乎上所有数据都放在了同一个分区上。</p><p>另外需要注意的是：如果使用 -a 参数时，系统会出现 /proc 这个挂载点，但是里面的东西 都是 0，不要紧张。 /proc 的东西都是 linux 系统所需要加载的系统数据， 而且是挂载在「内存中」的，所以不会占用磁盘空间</p><p>至于 /dev/shm/ 目录，其实是利用内存虚拟出来的磁盘空间，通常是总物理内存的一半。 由于是透过内存仿真出来的磁盘，在该目录下建立任何数据文件时，访问速度非常快。 只是 <strong>该目录下的东西不是持久性的，下次开机后就失效了</strong></p><h3 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">du</span> <span class="token punctuation">[</span>-ahskm<span class="token punctuation">]</span> 文件或目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>a：列出所有的文件与目录容量，默认仅统计目录下的文件量</li><li>h：以人类易读的容量格式显示</li><li>s：列出总量，而不列出每个各别的目录占用容量</li><li>S：不包括子目录下的总计，与 -s 有差别</li><li>k：以 KBytes 列出容量显示</li><li>m：以 MBytes 列出容量显示</li></ul><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出当前目录下的所有文件容量</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># du</span>
<span class="token number">4</span>       ./.cache/dconf
<span class="token number">4</span>       ./.cache/abrt
<span class="token number">8</span>       ./.cache
<span class="token number">4</span>       ./.dbus/session-bus
<span class="token number">4</span>       ./.dbus
<span class="token number">0</span>       ./.config/abrt
<span class="token number">0</span>       ./.config
<span class="token number">0</span>       ./.local/share
<span class="token number">0</span>       ./.local
<span class="token number">56</span>      <span class="token builtin class-name">.</span>
<span class="token comment"># 不加参数会默认当前目录下的文件与目录所占用的磁盘空间</span>
<span class="token comment"># 实际显示只显示了目录，不包含文件</span>
<span class="token comment"># 下面哪个 . 的总量为 56 K(默认是以 kbytes 显示的)，是 目录 + 文件占用的</span>
<span class="token comment"># 看这里的几个目录加起来肯定没有 56 这么大</span>

<span class="token comment"># 列出当前目录下所有文件容量（包括文件）</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># du -a</span>
<span class="token number">4</span>       ./.bash_logout
<span class="token number">4</span>       ./.bash_profile
<span class="token number">4</span>       ./.bashrc
<span class="token number">4</span>       ./.cshrc
<span class="token number">4</span>       ./.tcshrc
<span class="token number">4</span>       ./anaconda-ks.cfg  <span class="token comment"># 省略了很多显示结果，这里就是一个文件</span>
<span class="token number">4</span>       ./.cache/dconf/user
<span class="token number">56</span>      <span class="token builtin class-name">.</span>

<span class="token comment"># 检查根目录下每个目录所占用的容量</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># du -sm /*</span>
<span class="token number">0</span>       /bin
<span class="token number">138</span>     /boot
<span class="token number">0</span>       /dev
<span class="token number">42</span>      /etc
<span class="token number">8</span>       /home
<span class="token number">0</span>       /lib
<span class="token number">0</span>       /lib64
<span class="token number">0</span>       /media
<span class="token number">0</span>       /mnt
<span class="token number">0</span>       /opt
du: 无法访问<span class="token string">&quot;/proc/32240/task/32240/fd/3&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">&quot;/proc/32240/task/32240/fdinfo/3&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">&quot;/proc/32240/fd/3&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">&quot;/proc/32240/fdinfo/3&quot;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
<span class="token number">0</span>       /proc       <span class="token comment"># 不占用空间</span>
<span class="token number">1</span>       /root
<span class="token number">9</span>       /run
<span class="token number">0</span>       /sbin
<span class="token number">0</span>       /srv
<span class="token number">0</span>       /sys
<span class="token number">1</span>       /tmp
<span class="token number">4182</span>    /usr      <span class="token comment"># 可以看到系统初期最大的就是这个了</span>
<span class="token number">347</span>     /var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 df 不一样，du 指令会直接到文件系统内搜寻所有的文件数据，所以上述例子显示不是很快， 因为要搜寻文件数据。默认容量为 kb，可使用 -h 等参数来格式化容量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -s 与 -s 的区别，看总量</span>
<span class="token comment"># -s 为 56k 是包含了下面的所有子目录</span>
<span class="token comment"># -S 不包含子目录的 只有 44k</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># du -sh</span>
56K     <span class="token builtin class-name">.</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># du -Sh</span>
<span class="token number">4</span>.0K    ./.cache/dconf
<span class="token number">4</span>.0K    ./.cache/abrt
<span class="token number">0</span>       ./.cache
<span class="token number">4</span>.0K    ./.dbus/session-bus
<span class="token number">0</span>       ./.dbus
<span class="token number">0</span>       ./.config/abrt
<span class="token number">0</span>       ./.config
<span class="token number">0</span>       ./.local/share
<span class="token number">0</span>       ./.local
44K     <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-实体链接与符号链接-ln" tabindex="-1"><a class="header-anchor" href="#🍀-实体链接与符号链接-ln" aria-hidden="true">#</a> 🍀 实体链接与符号链接 ln</h2><p>link 链接在前面 Linux 文件属性 与 Linux 文件种类与扩展名 中简单讲解过。本章详细讲解</p><p>链接文档有两种：</p><ul><li>类似 windows 的快捷方式的文件</li><li>通过 inode 连接来产生新文档名，而不是产生新文件，<strong>称为实体链接</strong></li></ul><h3 id="hard-link-实体链接、硬式连结或实际连结" tabindex="-1"><a class="header-anchor" href="#hard-link-实体链接、硬式连结或实际连结" aria-hidden="true">#</a> Hard Link 实体链接、硬式连结或实际连结</h3><p>前面文件系统中了解到：</p><ul><li>每个文件都会占用一个 inode，文件内容由 inode 记录指向</li><li>想要读取该文件，必须要经过目录记录的文件名来指向到正确的 inode 号码才能读取</li></ul><p>也就是说，文件名只与目录有关，但是文件内容则与 inode 有关。 因此有没有可能：多个文档名对应到同一个 inode 号码呢？肯定有，这就是 Hard Link 的由来。</p><p>简单说：hard link 只是在某个目录下新增一个文件名链接到某个 inode 号码的关联记录而已</p><p>例如：假设 /root/crontab 是 /etc/crontab 的实体链接（他们两个文件名都对应到同一个 inode）， 这两个文件名的所有相关信息都会一模一样（除了文件名之外）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -i /etc/crontab</span>
<span class="token comment"># 查看文件属性与 inode 号码</span>
<span class="token number">17639161</span> -rw-r--r--. <span class="token number">1</span> root root <span class="token number">451</span> <span class="token number">6</span>月  <span class="token number">10</span> <span class="token number">2014</span> /etc/crontab
<span class="token comment"># 建立实体链接</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ln /etc/crontab .</span>
<span class="token comment"># 对比两个文件的属性</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -i /etc/crontab crontab</span>
<span class="token number">17639161</span> -rw-r--r--. <span class="token number">2</span> root root <span class="token number">451</span> <span class="token number">6</span>月  <span class="token number">10</span> <span class="token number">2014</span> <span class="token function">crontab</span>
<span class="token number">17639161</span> -rw-r--r--. <span class="token number">2</span> root root <span class="token number">451</span> <span class="token number">6</span>月  <span class="token number">10</span> <span class="token number">2014</span> /etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上面原始文件的 1 变成了 2，该字段称为「连结」，表示有多少个文件名链接到这个 inode 号码;</p><ul><li>这里将任意一个文件删除，其实 inode 与 block 都还是存在的。</li><li>无论通过哪一个文件来编辑内容，都会反应到 inode 与 block 中</li></ul><p>一般来说，使用 hard link 设置连接文件时，磁盘空间与 inode 的数目都不会改变。 除非遇到说，在目录中新增文件名时，刚好 block 满了，那么就会多出来一个 block 记录文件名</p><p>限制如下：</p><ul><li><p>不能跨 Filesystem ：不是同一个 indoe 号码了，肯定不能了</p></li><li><p>不能 link 目录：</p><p>如果使用 hard link 链接到目录时，链接的数据需要连同被链接目录下所有数据都建立连接。 当新建文件时需要建立该文件的 hard link，这对环境影响太大，所以不支持</p></li></ul><h2 id="🍀-symbolic-link-符号链接、快捷方式" tabindex="-1"><a class="header-anchor" href="#🍀-symbolic-link-符号链接、快捷方式" aria-hidden="true">#</a> 🍀 Symbolic Link 符号链接、快捷方式</h2><p>Symbolic 就是建立一个独立的文件，而这个文件会让数据的读取指向他 link 的那个文件名。 原始文件被删，该文件肯定也打不开了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 建立符号链接</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ln -s /etc/crontab crontab2</span>
<span class="token comment"># 对比</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -i /etc/crontab crontab crontab2</span>
<span class="token number">17639161</span> -rw-r--r--. <span class="token number">2</span> root root <span class="token number">451</span> <span class="token number">6</span>月  <span class="token number">10</span> <span class="token number">2014</span> <span class="token function">crontab</span>
<span class="token number">17639161</span> -rw-r--r--. <span class="token number">2</span> root root <span class="token number">451</span> <span class="token number">6</span>月  <span class="token number">10</span> <span class="token number">2014</span> /etc/crontab
<span class="token comment"># 可以看到上面两个一模一样，有一个 hard link 和原始文件。并且他们的 inode 是 2</span>
<span class="token comment"># 而下面这个符号链接的信息和上面的都不一样，唯独后面有一个连接指向了原始文件</span>
<span class="token number">25377009</span> lrwxrwxrwx. <span class="token number">1</span> root root  <span class="token number">12</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:00 crontab2 -<span class="token operator">&gt;</span> /etc/crontab

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token punctuation">[</span>-sf<span class="token punctuation">]</span> 来源文件 目标文件

-s：不加参数就是建立实体链接 hard link，加 <span class="token parameter variable">-s</span> 就是建立符号链接
-f：如果 目标文件 存在时，就主动的将目标文件直接移除后再建立
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 /etc/passwd 复制到 /tmp 并观察 inode 与 block</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp/</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp -a /etc/passwd .</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># du -sb; df -i</span>
<span class="token number">153266</span>  <span class="token builtin class-name">.</span>   <span class="token comment"># du -sb 计算 /tmp/ 下有多少 bytes 容量</span>
文件系统                  Inode 已用<span class="token punctuation">(</span>I<span class="token punctuation">)</span> 可用<span class="token punctuation">(</span>I<span class="token punctuation">)</span> 已用<span class="token punctuation">(</span>I<span class="token punctuation">)</span>% 挂载点
/dev/mapper/centos-root <span class="token number">5242880</span>  <span class="token number">153177</span> <span class="token number">5089703</span>       <span class="token number">3</span>% /
<span class="token comment"># df -i 显示 inode 的使用量</span>

<span class="token comment"># 将 /tmp/passwd 制作 hard link 称为 passwd-hd 文件，并观察文件与容量</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ln passwd passwd-hd</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># du -sb; df -i</span>
<span class="token number">153266</span>  <span class="token builtin class-name">.</span>
文件系统                  Inode 已用<span class="token punctuation">(</span>I<span class="token punctuation">)</span> 可用<span class="token punctuation">(</span>I<span class="token punctuation">)</span> 已用<span class="token punctuation">(</span>I<span class="token punctuation">)</span>% 挂载点
/dev/mapper/centos-root <span class="token number">5242880</span>  <span class="token number">153177</span> <span class="token number">5089703</span>       <span class="token number">3</span>% /
<span class="token comment"># 观察总容量 153266 没有改变</span>
<span class="token comment"># 观察已用的 inode 153177 没有改变</span>

<span class="token comment"># 将 /tmp/passwd 建立符号链接</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># du -sb; df -i</span>
<span class="token number">153272</span>  <span class="token builtin class-name">.</span>
文件系统                  Inode 已用<span class="token punctuation">(</span>I<span class="token punctuation">)</span> 可用<span class="token punctuation">(</span>I<span class="token punctuation">)</span> 已用<span class="token punctuation">(</span>I<span class="token punctuation">)</span>% 挂载点
/dev/mapper/centos-root <span class="token number">5242880</span>  <span class="token number">153178</span> <span class="token number">5089702</span>       <span class="token number">3</span>% /
<span class="token comment"># 观察总容量 153266 变成了 153272</span>
<span class="token comment"># 观察已用的 inode 153177 变成了 153178</span>

<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -li passwd*</span>
<span class="token number">16797769</span> -rw-r--r--. <span class="token number">2</span> root root <span class="token number">2323</span> <span class="token number">10</span>月  <span class="token number">4</span> <span class="token number">18</span>:31 <span class="token function">passwd</span>
<span class="token number">16797769</span> -rw-r--r--. <span class="token number">2</span> root root <span class="token number">2323</span> <span class="token number">10</span>月  <span class="token number">4</span> <span class="token number">18</span>:31 passwd-hd
<span class="token number">16807525</span> lrwxrwxrwx. <span class="token number">1</span> root root    <span class="token number">6</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:20 passwd-so -<span class="token operator">&gt;</span> <span class="token function">passwd</span>
<span class="token comment"># 可以看到这里的符号链接文件大小 6 kb，而上面 153272 - 153266 = 6</span>

<span class="token comment">## 🍀 删除源文件 passwd ，其他两个链接文件是否能打开？</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># rm passwd</span>
rm：是否删除普通文件 <span class="token string">&quot;passwd&quot;</span>？y
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cat passwd-hd</span>
<span class="token punctuation">..</span>. 正常显示
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cat passwd-so</span>
cat: passwd-so: 没有那个文件或目录

<span class="token comment"># 查看状态</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l passwd*</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2323</span> <span class="token number">10</span>月  <span class="token number">4</span> <span class="token number">18</span>:31 passwd-hd
<span class="token comment"># 这里后面的文件名在能链接到源文件的时候，会显示绿色，现在链接不到了就会显示红色了</span>
lrwxrwxrwx. <span class="token number">1</span> root root    <span class="token number">6</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:20 passwd-so -<span class="token operator">&gt;</span> <span class="token function">passwd</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果使用下面的命令，将 /bin/ 目录创建了一个符号链接（快捷方式）</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /bin /root/bin
<span class="token punctuation">[</span>root@study bin<span class="token punctuation">]</span><span class="token comment"># ll -l /root/</span>
lrwxrwxrwx. <span class="token number">1</span> root   root      <span class="token number">5</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:28 bin -<span class="token operator">&gt;</span> /bin/

<span class="token comment"># 那么这个时候如果你要执行下面的命令的话，</span>
<span class="token comment"># 这里千万不要执行，否则会将 bin 下的文件数据全部干掉的</span>
<span class="token builtin class-name">cd</span> /root/bin<span class="token punctuation">;</span> <span class="token function">rm</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 通过下面的方式查看，和硬链接一样，他们都连到了同一个 node</span>
<span class="token comment"># 所以这里与文件链接还不一样，上面看是单独的目录 -&gt; /bin/</span>
<span class="token comment"># 这里  cd 通过快捷方式进入到真正的目录下，所以操作等同于操作 bin 本身</span>
<span class="token punctuation">[</span>root@study bin<span class="token punctuation">]</span><span class="token comment"># ls -lid /bin/ /root/bin/</span>
<span class="token number">78</span> dr-xr-xr-x. <span class="token number">2</span> root root <span class="token number">57344</span> <span class="token number">10</span>月 <span class="token number">11</span> 05:03 /bin/
<span class="token number">78</span> dr-xr-xr-x. <span class="token number">2</span> root root <span class="token number">57344</span> <span class="token number">10</span>月 <span class="token number">11</span> 05:03 /root/bin/

<span class="token comment"># 使用命令删除刚刚那个目录链接文档</span>
<span class="token comment"># 注意这里的提示。带斜杠貌似是直接指向了连接的目录，不带才是符号链接本身</span>
<span class="token punctuation">[</span>root@study bin<span class="token punctuation">]</span><span class="token comment"># rm /root/bin/</span>
rm: 无法删除<span class="token string">&quot;/root/bin/&quot;</span><span class="token builtin class-name">:</span> 是一个目录
<span class="token punctuation">[</span>root@study bin<span class="token punctuation">]</span><span class="token comment"># rm /root/bin</span>
rm：是否删除符号链接 <span class="token string">&quot;/root/bin&quot;</span>？y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本上，符号链接的用途比较广。需要掌握</p><h3 id="关于目录的-link-数量" tabindex="-1"><a class="header-anchor" href="#关于目录的-link-数量" aria-hidden="true">#</a> 关于目录的 link 数量</h3><p>创建一个目录 link 会显示几？对于文件来说会显示 1.那么目录呢？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -ld /tmp/</span>
<span class="token comment"># link 数量为 40</span>
drwxrwxrwt. <span class="token number">40</span> root root <span class="token number">4096</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:43 /tmp/
<span class="token comment"># 创建目录</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># mkdir testing1</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -ld /tmp/</span>
<span class="token comment"># /tmp/ link +1 变成 41 了</span>
drwxrwxrwt. <span class="token number">41</span> root root <span class="token number">4096</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:44 /tmp/

<span class="token comment"># 看下该目录的 link 为 2，表示有两个,是为什么？</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -ld /tmp/testing1/</span>
drwxr-xr-x. <span class="token number">2</span> root root <span class="token number">6</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:44 /tmp/testing1/

<span class="token comment"># 新建立的一个目录下包含了当前目录</span>
<span class="token comment"># /tmp/testing1/ /temp/testing1/.  这两个路径都链接到同一个 inode，所以 link 为 2</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -al /tmp/testing1/</span>
总用量 <span class="token number">8</span>
drwxr-xr-x.  <span class="token number">2</span> root root    <span class="token number">6</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:44 <span class="token builtin class-name">.</span>
drwxrwxrwt. <span class="token number">41</span> root root <span class="token number">4096</span> <span class="token number">10</span>月 <span class="token number">22</span> 00:46 <span class="token punctuation">..</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59),o=[c];function u(r,d){return s(),a("div",null,o)}const v=n(t,[["render",u],["__file","02.html.vue"]]);export{v as default};
