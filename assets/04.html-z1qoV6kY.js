import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e}from"./app-CvlAI_tu.js";const t={},l=e(`<p>手动处理 mount 后不是永久挂载的，就像上一节我的虚拟机软件崩溃了，重启之后挂载的都不在了。</p><h2 id="🍀-开机挂载-etc-fstab-及-etc-mtab" tabindex="-1"><a class="header-anchor" href="#🍀-开机挂载-etc-fstab-及-etc-mtab" aria-hidden="true">#</a> 🍀 开机挂载 /etc/fstab 及 /etc/mtab</h2><p>可以通过修改 /etc/fstab 文件来达到开机自动挂载，下面说一说系统挂载的限制</p><ul><li>根目录 / 是必须挂载的，而且一定要先于其他的 mount point 被挂载出来</li><li>其他 mount point 必须为已建立的目录，可任意指定，但一定要遵守必须的系统目录架构原则（FHS）</li><li>所有 mount point 在同一时间之内，只能挂载一次</li><li>所有 partition 在同一时间之内，只能挂载一次</li><li>若进行卸载，必须先将工作目录移到 mount point（及其子目录）之外</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/fstab

<span class="token comment">#</span>
<span class="token comment"># /etc/fstab</span>
<span class="token comment"># Created by anaconda on Fri Oct  4 18:20:52 2019</span>
<span class="token comment">#</span>
<span class="token comment"># Accessible filesystems, by reference, are maintained under &#39;/dev/disk&#39;</span>
<span class="token comment"># See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info</span>
<span class="token comment">#</span>
<span class="token comment"># device								Mount point				filesystem	 paramters		dump fsck</span>
/dev/mapper/centos-root /                       xfs     defaults        <span class="token number">0</span> <span class="token number">0</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>13d0663f-4cbd-412d-aa9f-975eb18da590 /boot                   xfs     defaults        <span class="token number">0</span> <span class="token number">0</span>
/dev/mapper/centos-home /home                   xfs     defaults        <span class="token number">0</span> <span class="token number">0</span>
/dev/mapper/centos-swap swap                    swap    defaults        <span class="token number">0</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/etc/fstab（filesystem table）将我们利用 mount 指令进行挂载时，将所有的选项与参数写入该文件。初次之外，/etc/fstab 还加入了 <em>dump</em> 这个备份用指令的支持。与开机时是否进行文件系统检验 <em>fsck</em> 等指令有关。该文件内容提供的 6 个字段很重要，需要背下来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>【装置/UUID等】【挂载点】【文件系统】【文件系统参数】【dump】【fsck】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>装置文件名/UUID/LABEL name：</p><p>可以填写的数据主要有三个项目</p><ul><li>文件系统或磁盘的装置文件名，如 /dev/sda 等</li><li>文件系统的 UUID 名称</li><li>文件系统的 LABEL name</li></ul><p>看你自己喜好选择填写哪一项。这里建议使用 UUID，可以使用 blkid 或 xfs_admin 来查询 UUID</p></li><li><p>挂载点 mount point：一定是目录</p></li><li><p>磁盘分区槽的文件系统：手动挂载时，可以让系统自动测试挂载，该文件中需要手动确定，包括 xfs、ext4、vfat、reiserfs、nfs 等</p></li><li><p>文件系统参数</p><p>前面讲解 mount 指令谈到很多特殊的文件系统参数，还有我们使用过的 <code>-o codepage=950</code>,这些参数就是写在这里的</p><table><thead><tr><th style="text-align:center;">参数</th><th>内容含义</th></tr></thead><tbody><tr><td style="text-align:center;">async/sync（异步/同步）</td><td>设置磁盘是否已异步允许方式，预设为 async</td></tr><tr><td style="text-align:center;">auto/noauto（自动/非自动）</td><td>当下达 mount -a 时，此文件系统是否被主动测试挂载。预设为 auto</td></tr><tr><td style="text-align:center;">rw/ro（可擦写/只读）</td><td>让该分区槽可以擦写或只读的形态挂载上来，当这里设置为只读之后，在文件系统中对文设置 w 权限，也不能写入</td></tr><tr><td style="text-align:center;">exec/noexec（可执行/不可执行</td><td>限制在此文件系统内是否可以进行「执行」的工作？如果纯粹用来存储数据的话，就可以设置为 noexec 比较安全。不过该参数不能随便使用，因为你不知道该目录下是否默认会有执行文档。比如：将 noexec 设置在 /var ，当某些软件将一些执行文件放置到该文件下时，那么这些软件就不能运行</td></tr><tr><td style="text-align:center;">user/nouser（允许/不允许使用者挂载）</td><td>是否允许用户使用 mount 指令来挂载</td></tr><tr><td style="text-align:center;">suid/nosuid（具有/不具有 suid 权限）</td><td>该文件系统是否允许 SUID 的存在？如果不是执行文件放置目录，也可以设置为 nosuid 来取消 SUID 的功能</td></tr><tr><td style="text-align:center;">defaults</td><td>同时具有 rw、suid、dev、exec、auto、nouser、async 等参数。基本上使用该参数即可</td></tr></tbody></table></li><li><p>内否被 dump 备份指令作用：dump 是用来做备份的指令，不过现在备份方案太多了，可以不关注该项目，直接输入 0 好了</p></li><li><p>是否已 fsck 检验扇区</p><p>早期开机的流程中，会有一段时间去检验本机的文件系统，看看文件系统是否完整（clean）。不过该方式使用的主要是通过 fsck 来做的。我们现在用 xfs 文件系统就没有办法适用了，因为 xfs 会自己进行检验，直接填写 0 即可</p></li></ul><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 /dev/sda4 每次开机都自动挂载到 /data/xfs</span>
<span class="token comment"># 查看 uuid</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># blkid /dev/sda4</span>
/dev/sda4: <span class="token assign-left variable">LABEL</span><span class="token operator">=</span><span class="token string">&quot;mrcode_xfs&quot;</span> <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;edfa7161-5847-4935-80e1-6e081be9ab77&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;xfs&quot;</span> <span class="token assign-left variable">PARTLABEL</span><span class="token operator">=</span><span class="token string">&quot;Linux filesystem&quot;</span> <span class="token assign-left variable">PARTUUID</span><span class="token operator">=</span><span class="token string">&quot;3819b115-2ab8-4fb6-8425-bb2ff8e797b7&quot;</span> 
<span class="token comment"># 使用 nano 将下面信息写入到 /etc/fstab 最后</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;edfa7161-5847-4935-80e1-6e081be9ab77&quot;</span> /data/xfs xfs defaults <span class="token number">0</span> <span class="token number">0</span>

<span class="token comment"># 检查是否已挂载</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># df</span>
文件系统                   1K-块    已用    可用 已用% 挂载点
/dev/sda4                <span class="token number">1038336</span>   <span class="token number">32896</span> <span class="token number">1005440</span>    <span class="token number">4</span>% /data/xfs
/dev/sda5                 <span class="token number">999320</span>    <span class="token number">2564</span>  <span class="token number">927944</span>    <span class="token number">1</span>% /data/ext4
<span class="token comment"># 可见已挂载了，先卸除它，我们再来测试，卸载之后自行使用 df 确认</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># umount /dev/sda4 </span>
<span class="token comment"># 再来挂载，这里使用了 -a 的参数，会默认加载 /etc/fstab 中的项挂载</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mount -a</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># df /data/xfs</span>
文件系统         1K-块  已用    可用 已用% 挂载点
/dev/sda4      <span class="token number">1038336</span> <span class="token number">32896</span> <span class="token number">1005440</span>    <span class="token number">4</span>% /data/xfs

<span class="token comment"># 重启系统后，再观察是否会自动挂载</span>
<span class="token function">reboot</span>
<span class="token comment"># 笔者实测可以被自动挂载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/etc/fstab 是开机时的配置文件，不过实际 filesystem 的挂载是记录到 <code>/etc/mtab</code> 与 <code>/proc/mounts</code> 文件中的。每次当我们更动 filesystem 的挂载时，也会同时更动这两个文件。但是万一发生你再 /etc/fstab 输入的数据错误，导致无法顺利开机成功，而进入单人维护模式当中，哪时候的 / 可是 read only 的状态，就无法修改 /etc/fstab ，也无法更新 /etc/mtab 怎么办？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新挂载下 / 就可以了修改了</span>
<span class="token function">mount</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-o</span> remount,rw /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-特殊装置-loop-挂载-印象档不刻录就挂载使用" tabindex="-1"><a class="header-anchor" href="#🍀-特殊装置-loop-挂载-印象档不刻录就挂载使用" aria-hidden="true">#</a> 🍀 特殊装置 loop 挂载（印象档不刻录就挂载使用）</h2><p>如果有有光盘映像文件，或则是使用文件作为磁盘的方式时，需要使用特别的方法将他挂载起来，不需要颗粒</p><h3 id="挂载光盘-dvd-映像文件" tabindex="-1"><a class="header-anchor" href="#挂载光盘-dvd-映像文件" aria-hidden="true">#</a> 挂载光盘/DVD 映像文件</h3><p>前面装系统时从网络上下载的 ISO 文件，不用刻录到光盘上再读取，可以通过 loop 来挂载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 笔者的虚拟机里面没有这个文件，上传也很慢，现在课程中也还未讲到网络配置等东西</span>
<span class="token comment"># 这里就不实践了，只记录下步骤</span>
ll <span class="token parameter variable">-h</span> /tmp/CentOS-7-DVD.iso
<span class="token function">mkdir</span> /data/centos_dvd
<span class="token comment"># 挂载</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> loop /tmp/CentOS-7-DVD.iso /data/centos_dvd
<span class="token function">df</span> /data/centos_dvd
<span class="token comment"># 挂载之后，就可以读取该目录下的内容了</span>
ll /data/centos_dev
<span class="token comment"># 当然这样挂载之后也是可以修改里面的文件的（前面讲解了修改挂载的参数支持写入，获取可以去尝试下）</span>
<span class="token comment"># 这也是为什么很多 iso 提供之后会有一个 MD5 给使用者来确认该文档没有被修改过</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建立大文件以知错-loop-装置文件" tabindex="-1"><a class="header-anchor" href="#建立大文件以知错-loop-装置文件" aria-hidden="true">#</a> 建立大文件以知错 loop 装置文件</h3><p>既然可以挂载 DVD 的映像文档，那么能不能制作一个大文件，然后将整个文件格式化后挂载？比如：如果当初在分区时，只分区出一个根目录，假设已经没有多余的容量可以进行额外的分区。偏偏根目录的容量还很大！此时就可以制作出一个大文件，然后将整个文件挂载！如此就感觉多了一个分区槽，用途非常的广泛</p><p>下面我们再 /srv 下建立一个 512MB 左右的大文件，然后将整个大文件格式化并且实际挂载来玩一下。</p><h4 id="建立大型文件" tabindex="-1"><a class="header-anchor" href="#建立大型文件" aria-hidden="true">#</a> 建立大型文件</h4><p>可以使用 dd 指令来建立空文件（后续会详细讲解）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=/srv/loopdev bs=1M count=512</span>
记录了512+0 的读入
记录了512+0 的写出
<span class="token number">536870912</span>字节<span class="token punctuation">(</span><span class="token number">537</span> MB<span class="token punctuation">)</span>已复制，0.519957 秒，1.0 GB/秒

<span class="token comment"># 该指令含义如下</span>
if：是 input <span class="token function">file</span> 输入文件，/dev/zero 是会一直输出 <span class="token number">0</span> 的装置
of：是 output file，将一堆 <span class="token number">0</span> 写入到后面接的文件中
bs：每个 block 大小
count：总共几个 bs。所以 bs * count <span class="token operator">=</span> 该文件容量

<span class="token comment"># 查看该文件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -h /srv/loopdev </span>
-rw-r--r--. <span class="token number">1</span> root root 512M <span class="token number">10</span>月 <span class="token number">27</span> <span class="token number">20</span>:39 /srv/loopdev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="大型文件格式化" tabindex="-1"><a class="header-anchor" href="#大型文件格式化" aria-hidden="true">#</a> 大型文件格式化</h4><p>预设 xfs 不能够格式化文件，所以要格式化文件需要使用特别的参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用参数 -f 强制格式化</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mkfs.xfs -f /srv/loopdev </span>
meta-data<span class="token operator">=</span>/srv/loopdev           <span class="token assign-left variable">isize</span><span class="token operator">=</span><span class="token number">512</span>    <span class="token assign-left variable">agcount</span><span class="token operator">=</span><span class="token number">4</span>, <span class="token assign-left variable">agsize</span><span class="token operator">=</span><span class="token number">32768</span> blks
         <span class="token operator">=</span>                       <span class="token assign-left variable">sectsz</span><span class="token operator">=</span><span class="token number">512</span>   <span class="token assign-left variable">attr</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">projid32bit</span><span class="token operator">=</span><span class="token number">1</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">crc</span><span class="token operator">=</span><span class="token number">1</span>        <span class="token assign-left variable">finobt</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">sparse</span><span class="token operator">=</span><span class="token number">0</span>
data     <span class="token operator">=</span>                       <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">131072</span>, <span class="token assign-left variable">imaxpct</span><span class="token operator">=</span><span class="token number">25</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">sunit</span><span class="token operator">=</span><span class="token number">0</span>      <span class="token assign-left variable">swidth</span><span class="token operator">=</span><span class="token number">0</span> blks
naming   <span class="token operator">=</span>version <span class="token number">2</span>              <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   ascii-ci<span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ftype</span><span class="token operator">=</span><span class="token number">1</span>
log      <span class="token operator">=</span>internal log           <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">855</span>, <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token number">2</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">sectsz</span><span class="token operator">=</span><span class="token number">512</span>   <span class="token assign-left variable">sunit</span><span class="token operator">=</span><span class="token number">0</span> blks, lazy-count<span class="token operator">=</span><span class="token number">1</span>
realtime <span class="token operator">=</span>none                   <span class="token assign-left variable">extsz</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">rtextents</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># blkid /srv/loopdev </span>
<span class="token comment"># 注意这里的 UUID 后续会用到</span>
/srv/loopdev: <span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;fc6e332b-343f-4a08-921c-9801e3caeb66&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;xfs&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="挂载" tabindex="-1"><a class="header-anchor" href="#挂载" aria-hidden="true">#</a> 挂载</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mount -o loop UUID=&quot;fc6e332b-343f-4a08-921c-9801e3caeb66&quot; /mnt</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># df /mnt/</span>
文件系统        1K-块  已用   可用 已用% 挂载点
/dev/loop0     <span class="token number">520868</span> <span class="token number">26436</span> <span class="token number">494432</span>    <span class="token number">6</span>% /mnt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个简单的方法，感觉上可以在原本的分区槽在不更改原有的环境下制作出想要的分区槽了，非常好用，尤其是想要玩 linux 上面的「虚拟机」的话，也就是以一部 Linux 主机再切割成为数个独立的主机系统时，类似 VMware 这类的软件，在 Linux 上使用 xen 这个软件，他就可以配合这种 loop device 的文件类型来进行根目录的挂载，真的非常有用</p><p>比较特别的是，Centos7.x 越来越智能了，现在不需要使用 -o loop 选项与参数，统一可以被挂载上来，直接输入 blkid 都会列出这个文件内部的文件系统（为了考虑兼容性，还是建议加上 loop 比较妥当），现在将该文件系统永远的自动挂载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nano /etc/fstab</span>
<span class="token comment"># 在该文件中写入下面一行的数据</span>
<span class="token comment"># 注意这里挂载到了 /data/file 中</span>
<span class="token comment"># UUID=&quot;fc6e332b-343f-4a08-921c-9801e3caeb66&quot; /data/file xfs defaults 0 0</span>
<span class="token comment"># 这里还是使用文件档名来挂载，毕竟系统大多仅查询 block device 去找 UUID，因此使用文件建立的 filesystem 使用文件名比较不容易出错</span>
/srv/loopdev /data/file xfs defaults <span class="token number">0</span> <span class="token number">0</span>

<span class="token comment"># 卸载原来的 mnt，以及建立对应的目录</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># umount /mnt</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mkdir /data/file</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mount -a</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># df /data/file</span>
文件系统        1K-块  已用   可用 已用% 挂载点
/dev/loop0     <span class="token number">520868</span> <span class="token number">26436</span> <span class="token number">494432</span>    <span class="token number">6</span>% /data/file


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),p=[l];function o(i,c){return n(),a("div",null,p)}const u=s(t,[["render",o],["__file","04.html.vue"]]);export{u as default};
