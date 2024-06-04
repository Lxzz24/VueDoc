import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,d as a}from"./app-CvlAI_tu.js";const i={},t=a(`<p>使用 tar 通常是针对目录树系统来进行备份的工作，如果是针对整个文件系统来进行备份与还原。在 CentOS 7 中可以使用 xfsdump 与 xfsrestore 指令来进行</p><h2 id="🍀-xfs-文件系统备份-xfsdump" tabindex="-1"><a class="header-anchor" href="#🍀-xfs-文件系统备份-xfsdump" aria-hidden="true">#</a> 🍀 XFS 文件系统备份 xfsdump</h2><p>支持的功能：</p><ul><li><p>全量备份：完整备份文件系统（full backup）</p></li><li><p>增量备份：Incremental backup</p><p>第一次全量备份之后，就可以选择增量备份了</p><p>增量备份的差异文件存放在 /var/lib/xfsdump/inventory 中</p></li></ul><p>xfsdump 有如下限制：</p><ul><li>不支持没有挂载的文件系统备份，所以只能备份已挂载的</li><li>必须使用 root 的权限才能操作，涉及文件系统的关系</li><li>只能备份 XFS 文件系统</li><li>备份下来的数据（文件或存储媒体）只能让 xfsrestore 解析</li><li>是通过文件系统的 UUID 来分辨各个备份档的，因此不能备份两个具有相同 UUID 的文件系统</li></ul><p>简单操作时的语法如下（完整的选项非常复杂）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xfsdump <span class="token punctuation">[</span>-L S_label<span class="token punctuation">]</span><span class="token punctuation">[</span>-M M_label<span class="token punctuation">]</span><span class="token punctuation">[</span>-l <span class="token comment">#][-f 备份档] 带备份资料</span>
xfsdump <span class="token parameter variable">-I</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>L：xfsdump 会记录每次备份的 session 标头，这里可以填写针对此文件系统的建议说明</li><li>M：xfsdump 可以记录存储媒体的标头，这里可以填写此媒体的建议说明</li><li>l：小写的 L，指定等级。有 0~9 共 10 个等级，预设为 0 完整备份</li><li>f：有点类似 tar，后面接产生的文件，例如 /dev/st0 装置文件名或其他一般文件名等</li><li>I：从 /var/lib/xfsdump/inventory 列出目前备份的信息状态</li></ul><p>注意：xfsdump 预设仅支持文件系统的备份，并不支持目录的备份。如 /etc 不是一个独立的文件系统</p><h3 id="用-xfsdump-备份完整的文件系统" tabindex="-1"><a class="header-anchor" href="#用-xfsdump-备份完整的文件系统" aria-hidden="true">#</a> 用 xfsdump 备份完整的文件系统</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 先确定 /boot 是独立的问价系统</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">df</span> <span class="token parameter variable">-h</span> /boot/
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda2      1014M  171M  844M  <span class="token number">17</span>% /boot
<span class="token comment"># 挂载点是 /boot 文件系统是 /dev/sda2 装置，是独立的文件系统</span>

<span class="token comment"># 2. 将完整备份的文件名记录为 /srv/boot.dump</span>
<span class="token comment"># 指定了一个等级0，后面 lm 都是说明，后面是要保存的文件地址，最后是要备份的装置</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsdump -l 0 -L boot_all -M boot_all -f /srv/boot.dump /boot</span>
xfsdump: using <span class="token function">file</span> dump <span class="token punctuation">(</span>drive_simple<span class="token punctuation">)</span> strategy
xfsdump: version <span class="token number">3.1</span>.7 <span class="token punctuation">(</span>dump <span class="token function">format</span> <span class="token number">3.0</span><span class="token punctuation">)</span> - <span class="token builtin class-name">type</span> ^C <span class="token keyword">for</span> status and control
xfsdump: level <span class="token number">0</span> dump of study.centos.mrcode:/boot	<span class="token comment"># level 0 开始备份本机 /boot 系统	</span>
xfsdump: dump date: Tue Oct <span class="token number">29</span> 03:03:50 <span class="token number">2019</span>  <span class="token comment"># 备份时间</span>
xfsdump: session id: 49ac1ac5-c63b-4778-9b87-f77f3b1d703a <span class="token comment"># dump 的 ID</span>
xfsdump: session label: <span class="token string">&quot;boot_all&quot;</span>	<span class="token comment"># 上面写的说明</span>
xfsdump: ino map phase <span class="token number">1</span>: constructing initial dump list <span class="token comment"># 开始备份</span>
xfsdump: ino map phase <span class="token number">2</span>: skipping <span class="token punctuation">(</span>no pruning necessary<span class="token punctuation">)</span>
xfsdump: ino map phase <span class="token number">3</span>: skipping <span class="token punctuation">(</span>only one dump stream<span class="token punctuation">)</span>
xfsdump: ino map construction complete
xfsdump: estimated dump size: <span class="token number">144381568</span> bytes
xfsdump: /var/lib/xfsdump/inventory created
xfsdump: creating dump session media <span class="token function">file</span> <span class="token number">0</span> <span class="token punctuation">(</span>media <span class="token number">0</span>, <span class="token function">file</span> <span class="token number">0</span><span class="token punctuation">)</span>
xfsdump: dumping ino map
xfsdump: dumping directories
xfsdump: dumping non-directory files
xfsdump: ending media <span class="token function">file</span>
xfsdump: media <span class="token function">file</span> size <span class="token number">144048736</span> bytes
xfsdump: dump size <span class="token punctuation">(</span>non-dir files<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> <span class="token number">143807160</span> bytes
xfsdump: dump complete: <span class="token number">1</span> seconds elapsed
xfsdump: Dump Summary:
xfsdump:   stream <span class="token number">0</span> /srv/boot.dump OK <span class="token punctuation">(</span>success<span class="token punctuation">)</span>
xfsdump: Dump Status: SUCCESS
<span class="token comment"># 如果不在指令中增加 -L 和 -M 会进入互动模式，让你手动填写确认后才会开始备份</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /srv/boot.dump </span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">144048736</span> <span class="token number">10</span>月 <span class="token number">29</span> 03:03 /srv/boot.dump

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /var/lib/xfsdump/inventory/</span>
总用量 <span class="token number">16</span>
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">312</span> <span class="token number">10</span>月 <span class="token number">29</span> 03:03 13d0663f-4cbd-412d-aa9f-975eb18da590.InvIndex
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">5080</span> <span class="token number">10</span>月 <span class="token number">29</span> 03:03 6ad3d9fa-9c06-4968-9250-c1a70b5629ed.StObj
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">576</span> <span class="token number">10</span>月 <span class="token number">29</span> 03:03 fstab

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-xfsdump-进行增量备份-incremental-backups" tabindex="-1"><a class="header-anchor" href="#用-xfsdump-进行增量备份-incremental-backups" aria-hidden="true">#</a> 用 xfsdump 进行增量备份（Incremental backups）</h3><p>增量是在全量的基础上，也就是至少有 level 0 ，才能够几区有其他的增量备份（1~9）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 xfsdump 信息</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsdump -I</span>
<span class="token function">file</span> system <span class="token number">0</span>:
        fs id:          13d0663f-4cbd-412d-aa9f-975eb18da590
        session <span class="token number">0</span>:
                <span class="token function">mount</span> point:    study.centos.mrcode:/boot
                device:         study.centos.mrcode:/dev/sda2
                time:           Tue Oct <span class="token number">29</span> 03:03:50 <span class="token number">2019</span>
                session label:  <span class="token string">&quot;boot_all&quot;</span>
                session id:     49ac1ac5-c63b-4778-9b87-f77f3b1d703a
                level:          <span class="token number">0</span>
                resumed:        NO
                subtree:        NO
                streams:        <span class="token number">1</span>
                stream <span class="token number">0</span>:
                        pathname:       /srv/boot.dump
                        start:          ino <span class="token number">69</span> offset <span class="token number">0</span>
                        end:            ino <span class="token number">1577745</span> offset <span class="token number">0</span>
                        interrupted:    NO
                        media files:    <span class="token number">1</span>
                        media <span class="token function">file</span> <span class="token number">0</span>:
                                mfile index:    <span class="token number">0</span>
                                mfile type:     data
                                mfile size:     <span class="token number">144048736</span>
                                mfile start:    ino <span class="token number">69</span> offset <span class="token number">0</span>
                                mfile end:      ino <span class="token number">1577745</span> offset <span class="token number">0</span>
                                media label:    <span class="token string">&quot;boot_all&quot;</span>
                                media id:       da10035c-1c0b-4773-a56e-409a17fe9913
xfsdump: Dump Status: SUCCESS

<span class="token comment"># 可以看到，有一个 level 0</span>
<span class="token comment"># 下面先在 boot 中建立一个大约 10MB 的文件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=/boot/testing.img bs=1M count=10</span>
记录了10+0 的读入
记录了10+0 的写出
<span class="token number">10485760</span>字节<span class="token punctuation">(</span><span class="token number">10</span> MB<span class="token punctuation">)</span>已复制，0.00396854 秒，2.6 GB/秒

<span class="token comment"># 2. 建立差异备份，这里使用 -l 1 指定了 level 1 的被增量备份</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=/boot/testing.img bs=1M count=10</span>
记录了10+0 的读入
记录了10+0 的写出
<span class="token number">10485760</span>字节<span class="token punctuation">(</span><span class="token number">10</span> MB<span class="token punctuation">)</span>已复制，0.00396854 秒，2.6 GB/秒
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsdump -l 1 -L boot_2 -M boot_2 -f /srv/boot.dump1 /boot</span>
xfsdump: using <span class="token function">file</span> dump <span class="token punctuation">(</span>drive_simple<span class="token punctuation">)</span> strategy
xfsdump: version <span class="token number">3.1</span>.7 <span class="token punctuation">(</span>dump <span class="token function">format</span> <span class="token number">3.0</span><span class="token punctuation">)</span> - <span class="token builtin class-name">type</span> ^C <span class="token keyword">for</span> status and control
xfsdump: level <span class="token number">1</span> incremental dump of study.centos.mrcode:/boot based on level <span class="token number">0</span> dump begun Tue Oct <span class="token number">29</span> 03:03:50 <span class="token number">2019</span>
xfsdump: dump date: Tue Oct <span class="token number">29</span> 03:11:00 <span class="token number">2019</span>
xfsdump: session id: 8a8a1680-2a91-4292-943d-0d0a51fa2d67
xfsdump: session label: <span class="token string">&quot;boot_2&quot;</span>
xfsdump: ino map phase <span class="token number">1</span>: constructing initial dump list
xfsdump: ino map phase <span class="token number">2</span>: pruning unneeded subtrees
xfsdump: ino map phase <span class="token number">3</span>: skipping <span class="token punctuation">(</span>only one dump stream<span class="token punctuation">)</span>
xfsdump: ino map construction complete
xfsdump: estimated dump size: <span class="token number">10506880</span> bytes
xfsdump: creating dump session media <span class="token function">file</span> <span class="token number">0</span> <span class="token punctuation">(</span>media <span class="token number">0</span>, <span class="token function">file</span> <span class="token number">0</span><span class="token punctuation">)</span>
xfsdump: dumping ino map
xfsdump: dumping directories
xfsdump: dumping non-directory files
xfsdump: ending media <span class="token function">file</span>
xfsdump: media <span class="token function">file</span> size <span class="token number">10510952</span> bytes
xfsdump: dump size <span class="token punctuation">(</span>non-dir files<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> <span class="token number">10488408</span> bytes
xfsdump: dump complete: <span class="token number">0</span> seconds elapsed
xfsdump: Dump Summary:
xfsdump:   stream <span class="token number">0</span> /srv/boot.dump1 OK <span class="token punctuation">(</span>success<span class="token punctuation">)</span>
xfsdump: Dump Status: SUCCESS

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -h /srv/boot*</span>
-rw-r--r--. <span class="token number">1</span> root root 138M <span class="token number">10</span>月 <span class="token number">29</span> 03:03 /srv/boot.dump
-rw-r--r--. <span class="token number">1</span> root root  11M <span class="token number">10</span>月 <span class="token number">29</span> 03:11 /srv/boot.dump1

<span class="token comment"># 3. 最后再观察下备份情况</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsdump -I</span>
<span class="token function">file</span> system <span class="token number">0</span>:
        fs id:          13d0663f-4cbd-412d-aa9f-975eb18da590
        session <span class="token number">0</span>:
                <span class="token function">mount</span> point:    study.centos.mrcode:/boot
                device:         study.centos.mrcode:/dev/sda2
                time:           Tue Oct <span class="token number">29</span> 03:03:50 <span class="token number">2019</span>
                session label:  <span class="token string">&quot;boot_all&quot;</span>
                session id:     49ac1ac5-c63b-4778-9b87-f77f3b1d703a
                level:          <span class="token number">0</span>
                resumed:        NO
                subtree:        NO
                streams:        <span class="token number">1</span>
                stream <span class="token number">0</span>:
                        pathname:       /srv/boot.dump
                        start:          ino <span class="token number">69</span> offset <span class="token number">0</span>
                        end:            ino <span class="token number">1577745</span> offset <span class="token number">0</span>
                        interrupted:    NO
                        media files:    <span class="token number">1</span>
                        media <span class="token function">file</span> <span class="token number">0</span>:
                                mfile index:    <span class="token number">0</span>
                                mfile type:     data
                                mfile size:     <span class="token number">144048736</span>
                                mfile start:    ino <span class="token number">69</span> offset <span class="token number">0</span>
                                mfile end:      ino <span class="token number">1577745</span> offset <span class="token number">0</span>
                                media label:    <span class="token string">&quot;boot_all&quot;</span>
                                media id:       da10035c-1c0b-4773-a56e-409a17fe9913
        session <span class="token number">1</span>:
                <span class="token function">mount</span> point:    study.centos.mrcode:/boot
                device:         study.centos.mrcode:/dev/sda2
                time:           Tue Oct <span class="token number">29</span> 03:11:00 <span class="token number">2019</span>
                session label:  <span class="token string">&quot;boot_2&quot;</span>
                session id:     8a8a1680-2a91-4292-943d-0d0a51fa2d67
                level:          <span class="token number">1</span>
                resumed:        NO
                subtree:        NO
                streams:        <span class="token number">1</span>
                stream <span class="token number">0</span>:
                        pathname:       /srv/boot.dump1
                        start:          ino <span class="token number">113</span> offset <span class="token number">0</span>
                        end:            ino <span class="token number">114</span> offset <span class="token number">0</span>
                        interrupted:    NO
                        media files:    <span class="token number">1</span>
                        media <span class="token function">file</span> <span class="token number">0</span>:
                                mfile index:    <span class="token number">0</span>
                                mfile type:     data
                                mfile size:     <span class="token number">10510952</span>
                                mfile start:    ino <span class="token number">113</span> offset <span class="token number">0</span>
                                mfile end:      ino <span class="token number">114</span> offset <span class="token number">0</span>
                                media label:    <span class="token string">&quot;boot_2&quot;</span>
                                media id:       2c0d4e02-11cd-45a4-b131-8bc6505403fe
xfsdump: Dump Status: SUCCESS
<span class="token comment"># 可以看到上面出现了 session 1 和 level 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-xfs-文件系统还原-xfsrestore" tabindex="-1"><a class="header-anchor" href="#🍀-xfs-文件系统还原-xfsrestore" aria-hidden="true">#</a> 🍀 XFS 文件系统还原 xfsrestore</h2><p>备份文件就是在急用时可以还原系统的重要数据，用 xfsdump 备份的数据可以使用 xfsresotre 来还原</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xfsrestore <span class="token parameter variable">-I</span>	<span class="token comment"># 观察备份文件资料</span>
xfsrestore <span class="token punctuation">[</span>-f 备份文件名<span class="token punctuation">]</span><span class="token punctuation">[</span>-L S_label<span class="token punctuation">]</span><span class="token punctuation">[</span>-s<span class="token punctuation">]</span> 待复原的目录  <span class="token comment"># 单一文件全系统复原</span>
xfsrestore <span class="token punctuation">[</span>-f 备份文件名<span class="token punctuation">]</span> <span class="token parameter variable">-r</span> 待复原目录	<span class="token comment"># 通过增量备份文件复原系统</span>
xfsrestore <span class="token punctuation">[</span>-f 备份文件名<span class="token punctuation">]</span> <span class="token parameter variable">-i</span> 待复原目录	<span class="token comment"># 进入互动模式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>I：与 xfsdump 相同的输出</li><li>f：后面接的就是备份的文件，企业界可能会接 /dev/st0 等磁带机，我们这里接文件名</li><li>L：session 的 label name ，就是在 -I 输出中查询到的数据</li><li>s：需要接特定目录，复原某一个文件或目录的意思</li><li>r：如果是用文件来存储备份数据，这个选项就不需要使用。如果是一个磁带内有多个文件，需要这东西来达成增量复原</li><li>i：进入互动模式，进阶管理员使用的，一般我们不太需要操作它</li></ul><h3 id="用-xfsrestore-观察-xfsdump-后的备份数据内容" tabindex="-1"><a class="header-anchor" href="#用-xfsrestore-观察-xfsdump-后的备份数据内容" aria-hidden="true">#</a> 用 xfsrestore 观察 xfsdump 后的备份数据内容</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsrestore -I</span>
<span class="token function">file</span> system <span class="token number">0</span>:
        fs id:          13d0663f-4cbd-412d-aa9f-975eb18da590
        session <span class="token number">0</span>:
                <span class="token function">mount</span> point:    study.centos.mrcode:/boot
                device:         study.centos.mrcode:/dev/sda2
                time:           Tue Oct <span class="token number">29</span> 03:03:50 <span class="token number">2019</span>
                session label:  <span class="token string">&quot;boot_all&quot;</span>
                session id:     49ac1ac5-c63b-4778-9b87-f77f3b1d703a
                level:          <span class="token number">0</span>
                resumed:        NO
                subtree:        NO
                streams:        <span class="token number">1</span>
                stream <span class="token number">0</span>:
                        pathname:       /srv/boot.dump
                        start:          ino <span class="token number">69</span> offset <span class="token number">0</span>
                        end:            ino <span class="token number">1577745</span> offset <span class="token number">0</span>
                        interrupted:    NO
                        media files:    <span class="token number">1</span>
                        media <span class="token function">file</span> <span class="token number">0</span>:
                                mfile index:    <span class="token number">0</span>
                                mfile type:     data
                                mfile size:     <span class="token number">144048736</span>
                                mfile start:    ino <span class="token number">69</span> offset <span class="token number">0</span>
                                mfile end:      ino <span class="token number">1577745</span> offset <span class="token number">0</span>
                                media label:    <span class="token string">&quot;boot_all&quot;</span>
                                media id:       da10035c-1c0b-4773-a56e-409a17fe9913
        session <span class="token number">1</span>:
								<span class="token function">mount</span> point:    study.centos.mrcode:/boot
                device:         study.centos.mrcode:/dev/sda2
                time:           Tue Oct <span class="token number">29</span> 03:11:00 <span class="token number">2019</span>
                session label:  <span class="token string">&quot;boot_2&quot;</span>
                session id:     8a8a1680-2a91-4292-943d-0d0a51fa2d67
                level:          <span class="token number">1</span>
                resumed:        NO
                subtree:        NO
                streams:        <span class="token number">1</span>
                stream <span class="token number">0</span>:
                        pathname:       /srv/boot.dump1
                        start:          ino <span class="token number">113</span> offset <span class="token number">0</span>
                        end:            ino <span class="token number">114</span> offset <span class="token number">0</span>
                        interrupted:    NO
                        media files:    <span class="token number">1</span>
                        media <span class="token function">file</span> <span class="token number">0</span>:
                                mfile index:    <span class="token number">0</span>
                                mfile type:     data
                                mfile size:     <span class="token number">10510952</span>
                                mfile start:    ino <span class="token number">113</span> offset <span class="token number">0</span>
                                mfile end:      ino <span class="token number">114</span> offset <span class="token number">0</span>
                                media label:    <span class="token string">&quot;boot_2&quot;</span>
                                media id:       2c0d4e02-11cd-45a4-b131-8bc6505403fe
xfsrestore: Restore Status: SUCCESS
<span class="token comment"># 和前面输出的一样</span>
<span class="token comment"># 这里重点是看到这个文件系统是 /boot 挂载点，有两个备份 level 0 和 level 1</span>
<span class="token comment"># 可以看到这两个备份文件的大小，更重要的是 session label</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单复原-level-0-的文件系统" tabindex="-1"><a class="header-anchor" href="#简单复原-level-0-的文件系统" aria-hidden="true">#</a> 简单复原 level 0 的文件系统</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 直接将数据覆盖回去即可</span>
<span class="token comment"># 这里使用了 -L 就是那个 session label</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsrestore -f /srv/boot.dump -L boot_all /boot</span>
xfsrestore: using <span class="token function">file</span> dump <span class="token punctuation">(</span>drive_simple<span class="token punctuation">)</span> strategy
xfsrestore: version <span class="token number">3.1</span>.7 <span class="token punctuation">(</span>dump <span class="token function">format</span> <span class="token number">3.0</span><span class="token punctuation">)</span> - <span class="token builtin class-name">type</span> ^C <span class="token keyword">for</span> status and control
xfsrestore: using online session inventory
xfsrestore: searching media <span class="token keyword">for</span> directory dump
xfsrestore: examining media <span class="token function">file</span> <span class="token number">0</span>
xfsrestore: reading directories
xfsrestore: <span class="token number">11</span> directories and <span class="token number">337</span> entries processed
xfsrestore: directory post-processing
xfsrestore: restoring non-directory files
xfsrestore: restore complete: <span class="token number">0</span> seconds elapsed
xfsrestore: Restore Summary:
xfsrestore:   stream <span class="token number">0</span> /srv/boot.dump OK <span class="token punctuation">(</span>success<span class="token punctuation">)</span>
xfsrestore: Restore Status: SUCCESS

<span class="token comment"># 2. 将备份资料在 /tmp/boot 下解开</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mkdir /tmp/boot</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsrestore -f /srv/boot.dump -L boot_all /tmp/boot/</span>
xfsrestore: using <span class="token function">file</span> dump <span class="token punctuation">(</span>drive_simple<span class="token punctuation">)</span> strategy
xfsrestore: version <span class="token number">3.1</span>.7 <span class="token punctuation">(</span>dump <span class="token function">format</span> <span class="token number">3.0</span><span class="token punctuation">)</span> - <span class="token builtin class-name">type</span> ^C <span class="token keyword">for</span> status and control
xfsrestore: using online session inventory
xfsrestore: searching media <span class="token keyword">for</span> directory dump
xfsrestore: examining media <span class="token function">file</span> <span class="token number">0</span>
xfsrestore: reading directories
xfsrestore: <span class="token number">11</span> directories and <span class="token number">337</span> entries processed
xfsrestore: directory post-processing
xfsrestore: restoring non-directory files
xfsrestore: restore complete: <span class="token number">0</span> seconds elapsed
xfsrestore: Restore Summary:
xfsrestore:   stream <span class="token number">0</span> /srv/boot.dump OK <span class="token punctuation">(</span>success<span class="token punctuation">)</span>
xfsrestore: Restore Status: SUCCESS

<span class="token comment"># 看到两个大小不一致</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># du -sm /boot/ /tmp/boot/</span>
<span class="token number">148</span>     /boot/
<span class="token number">138</span>     /tmp/boot/

<span class="token comment"># 对比下发现 /boot 下多了一个 testing.img</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># diff -r /boot/ /tmp/boot/</span>
只在 /boot/ 存在：testing.img
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里注意了，笔者以为这样复原之后，会完全还原到复原之前的内容的，这里的规则是：<strong>同名的文件被覆盖，其他系统内的新的问价会被保留</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 3. 仅复原备份档内的 grub2 到 /tmp/boot2 里面去</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mkdir /tmp/boot2</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsrestore -f /srv/boot.dump -L boot_all -s grub2 /tmp/boot2</span>
xfsrestore: using <span class="token function">file</span> dump <span class="token punctuation">(</span>drive_simple<span class="token punctuation">)</span> strategy
xfsrestore: version <span class="token number">3.1</span>.7 <span class="token punctuation">(</span>dump <span class="token function">format</span> <span class="token number">3.0</span><span class="token punctuation">)</span> - <span class="token builtin class-name">type</span> ^C <span class="token keyword">for</span> status and control
xfsrestore: using online session inventory
xfsrestore: searching media <span class="token keyword">for</span> directory dump
xfsrestore: examining media <span class="token function">file</span> <span class="token number">0</span>
xfsrestore: reading directories
xfsrestore: <span class="token number">11</span> directories and <span class="token number">337</span> entries processed
xfsrestore: directory post-processing
xfsrestore: restoring non-directory files
xfsrestore: restore complete: <span class="token number">0</span> seconds elapsed
xfsrestore: Restore Summary:
xfsrestore:   stream <span class="token number">0</span> /srv/boot.dump OK <span class="token punctuation">(</span>success<span class="token punctuation">)</span>
xfsrestore: Restore Status: SUCCESS
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -h /tmp/boot2/</span>
总用量 <span class="token number">0</span>
drwx------. <span class="token number">5</span> root root <span class="token number">97</span> <span class="token number">10</span>月  <span class="token number">4</span> <span class="token number">18</span>:32 grub2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-复原增量备份资料" tabindex="-1"><a class="header-anchor" href="#🍀-复原增量备份资料" aria-hidden="true">#</a> 🍀 复原增量备份资料</h2><p>增量还原有顺序，比如由 level 0 -&gt; level1 -&gt; level2 那么还原的时候，也需要按照这个顺序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsrestore -f /srv/boot.dump1 /tmp/boot</span>
xfsrestore: using <span class="token function">file</span> dump <span class="token punctuation">(</span>drive_simple<span class="token punctuation">)</span> strategy
xfsrestore: version <span class="token number">3.1</span>.7 <span class="token punctuation">(</span>dump <span class="token function">format</span> <span class="token number">3.0</span><span class="token punctuation">)</span> - <span class="token builtin class-name">type</span> ^C <span class="token keyword">for</span> status and control
xfsrestore: searching media <span class="token keyword">for</span> dump
xfsrestore: examining media <span class="token function">file</span> <span class="token number">0</span>
xfsrestore: dump description: 
xfsrestore: hostname: study.centos.mrcode
xfsrestore: <span class="token function">mount</span> point: /boot
xfsrestore: volume: /dev/sda2
xfsrestore: session time: Tue Oct <span class="token number">29</span> 03:11:00 <span class="token number">2019</span>
xfsrestore: level: <span class="token number">1</span>
xfsrestore: session label: <span class="token string">&quot;boot_2&quot;</span>
xfsrestore: media label: <span class="token string">&quot;boot_2&quot;</span>
xfsrestore: <span class="token function">file</span> system id: 13d0663f-4cbd-412d-aa9f-975eb18da590
xfsrestore: session id: 8a8a1680-2a91-4292-943d-0d0a51fa2d67
xfsrestore: media id: 2c0d4e02-11cd-45a4-b131-8bc6505403fe
xfsrestore: using online session inventory
xfsrestore: searching media <span class="token keyword">for</span> directory dump
xfsrestore: reading directories
xfsrestore: <span class="token number">1</span> directories and <span class="token number">12</span> entries processed
xfsrestore: directory post-processing
xfsrestore: restoring non-directory files
xfsrestore: restore complete: <span class="token number">0</span> seconds elapsed
xfsrestore: Restore Summary:
xfsrestore:   stream <span class="token number">0</span> /srv/boot.dump1 OK <span class="token punctuation">(</span>success<span class="token punctuation">)</span>
xfsrestore: Restore Status: SUCCESS

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="仅还原部分文件的-xfsrestore-互动模式" tabindex="-1"><a class="header-anchor" href="#仅还原部分文件的-xfsrestore-互动模式" aria-hidden="true">#</a> 仅还原部分文件的 xfsrestore 互动模式</h3><p>使用 -s 参数可以接部分数据来还原，当文件太多时，又不知道里面有哪些文件，可以使用互动模式，比如想要知道 level0 的备份数据里面有哪些东西</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># xfsrestore -f /srv/boot.dump -i /tmp/boot3</span>
xfsrestore: using <span class="token function">file</span> dump <span class="token punctuation">(</span>drive_simple<span class="token punctuation">)</span> strategy
xfsrestore: version <span class="token number">3.1</span>.7 <span class="token punctuation">(</span>dump <span class="token function">format</span> <span class="token number">3.0</span><span class="token punctuation">)</span> - <span class="token builtin class-name">type</span> ^C <span class="token keyword">for</span> status and control
xfsrestore: searching media <span class="token keyword">for</span> dump
xfsrestore: examining media <span class="token function">file</span> <span class="token number">0</span>
xfsrestore: dump description: 
xfsrestore: hostname: study.centos.mrcode
xfsrestore: <span class="token function">mount</span> point: /boot
xfsrestore: volume: /dev/sda2
xfsrestore: session time: Tue Oct <span class="token number">29</span> 03:03:50 <span class="token number">2019</span>
xfsrestore: level: <span class="token number">0</span>
xfsrestore: session label: <span class="token string">&quot;boot_all&quot;</span>
xfsrestore: media label: <span class="token string">&quot;boot_all&quot;</span>
xfsrestore: <span class="token function">file</span> system id: 13d0663f-4cbd-412d-aa9f-975eb18da590
xfsrestore: session id: 49ac1ac5-c63b-4778-9b87-f77f3b1d703a
xfsrestore: media id: da10035c-1c0b-4773-a56e-409a17fe9913
xfsrestore: using online session inventory
xfsrestore: searching media <span class="token keyword">for</span> directory dump
xfsrestore: reading directories
xfsrestore: <span class="token number">11</span> directories and <span class="token number">337</span> entries processed
xfsrestore: directory post-processing

 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> subtree selection dialog <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>

the following commands are available:
        <span class="token builtin class-name">pwd</span> 
        <span class="token function">ls</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">]</span>
        <span class="token builtin class-name">cd</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">]</span>
        <span class="token function">add</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">]</span>		<span class="token comment"># 可以加入还原文件列表中</span>
        delete <span class="token punctuation">[</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">]</span> <span class="token comment"># 从还原列表中删除文件，不是删除，只是从列表中移出去</span>
        extract 	<span class="token comment"># 开始还原动作</span>
        quit 
        <span class="token builtin class-name">help</span> 

-<span class="token operator">&gt;</span> <span class="token function">ls</span>		<span class="token comment"># ls 查看有哪些文档</span>
              <span class="token number">75</span> initramfs-3.10.0-1062.el7.x86_64.img 
              <span class="token number">77</span> vmlinuz-0-rescue-f228ab37c368416c84c6b27971ba45a9 
              <span class="token number">76</span> initramfs-0-rescue-f228ab37c368416c84c6b27971ba45a9.img 
              <span class="token number">74</span> vmlinuz-3.10.0-1062.el7.x86_64 
              <span class="token number">73</span> symvers-3.10.0-1062.el7.x86_64.gz 
              <span class="token number">72</span> config-3.10.0-1062.el7.x86_64 
              <span class="token number">71</span> System.map-3.10.0-1062.el7.x86_64 
              <span class="token number">70</span> .vmlinuz-3.10.0-1062.el7.x86_64.hmac 
              <span class="token number">68</span> grub/
         <span class="token number">1572928</span> grub2/
              <span class="token number">67</span> efi/

 -<span class="token operator">&gt;</span> <span class="token function">add</span> grub/

 -<span class="token operator">&gt;</span> <span class="token function">add</span> grub2/

 -<span class="token operator">&gt;</span> <span class="token function">add</span> config-3.10.0-229.el7.x86_64
config-3.10.0-229.el7.x86_64 not found			<span class="token comment"># 这个里面不能按退格键，我输出了，不过提示未找到</span>

 -<span class="token operator">&gt;</span> extract
 --------------------------------- end dialog ---------------------------------

xfsrestore: restoring non-directory files
xfsrestore: restore complete: <span class="token number">182</span> seconds elapsed
xfsrestore: Restore Summary:
xfsrestore:   stream <span class="token number">0</span> /srv/boot.dump OK <span class="token punctuation">(</span>success<span class="token punctuation">)</span>
xfsrestore: Restore Status: SUCCESS

<span class="token comment"># 查看还原的目录下，的确只有我们需要的两个</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ls -l /tmp/boot3</span>
总用量 <span class="token number">0</span>
drwxr-xr-x. <span class="token number">2</span> root root <span class="token number">27</span> <span class="token number">10</span>月  <span class="token number">4</span> <span class="token number">18</span>:22 grub
drwx------. <span class="token number">5</span> root root <span class="token number">97</span> <span class="token number">10</span>月  <span class="token number">4</span> <span class="token number">18</span>:32 grub2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),l=[t];function o(p,c){return n(),e("div",null,l)}const u=s(i,[["render",o],["__file","04.html.vue"]]);export{u as default};
