import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const o={},p=e(`<h2 id="🍀-dd" tabindex="-1"><a class="header-anchor" href="#🍀-dd" aria-hidden="true">#</a> 🍀 dd</h2><p>在前面 第七章中特殊 loop 装置挂载时使用过 dd 这个指令，dd 指令不只是制作一个文件，它最大的功效可能就是备份了，因为 dd 可以读取磁盘装置的内容（几乎是直接读取扇区 sector），然后将装置备份成一个文件，下面讲解几个比较重要的选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span><span class="token string">&quot;input_file&quot;</span> <span class="token assign-left variable">of</span><span class="token operator">=</span><span class="token string">&quot;output_file&quot;</span> <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token string">&quot;block_size&quot;</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token string">&quot;number&quot;</span>

if：输入文件，也可以是装置
of：输出文件，也可以是装置
bs：规划一个 block 的大小，若未指定则预设为 512bytes（一个 sector 大小）
count：多少个 bs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实践与练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 /etc/passwd 备份到 /tmp/passwd.back 中</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/etc/passwd of=/tmp/passwd.back</span>
记录了4+1 的读入
记录了4+1 的写出
<span class="token number">2323</span>字节<span class="token punctuation">(</span><span class="token number">2.3</span> kB<span class="token punctuation">)</span>已复制，0.000202909 秒，11.4 MB/秒
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /tmp/passwd.back /etc/passwd</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2323</span> <span class="token number">10</span>月  <span class="token number">4</span> <span class="token number">18</span>:31 /etc/passwd
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2323</span> <span class="token number">10</span>月 <span class="token number">29</span> 09:37 /tmp/passwd.back
<span class="token comment"># /etc/passwd 文件为 2323bytes</span>
<span class="token comment"># 没有设置 bs，默认为 512bytes，4+1 表示有 4 个完整的 512bytes</span>
<span class="token comment"># 以及一个未满 512bytes 的 block</span>

<span class="token comment"># 将刚刚刻录的光驱内容，再次备份下来称为映像文档</span>
 <span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/sr0 of=/tmp/system.iso</span>
记录了150708+0 的读入
记录了150708+0 的写出
<span class="token number">77162496</span>字节<span class="token punctuation">(</span><span class="token number">77</span> MB<span class="token punctuation">)</span>已复制，0.503923 秒，153 MB/秒
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /tmp/system.iso </span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">77162496</span> <span class="token number">10</span>月 <span class="token number">29</span> 09:41 /tmp/system.iso
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mount /tmp/system.iso /mnt/</span>
mount: /dev/loop1 写保护，将以只读方式挂载
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /mnt/</span>
总用量 <span class="token number">62742</span>
-r--r--r--. <span class="token number">1</span> root root      <span class="token number">763</span> <span class="token number">1</span>月  <span class="token number">22</span> <span class="token number">2019</span> AUTORUN.INF
-r-xr-xr-x. <span class="token number">1</span> root root     <span class="token number">6384</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:06 autorun.sh
dr-xr-xr-x. <span class="token number">2</span> root root      <span class="token number">792</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:13 cert
dr-xr-xr-x. <span class="token number">2</span> root root     <span class="token number">1824</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:13 NT3x
dr-xr-xr-x. <span class="token number">2</span> root root     <span class="token number">2652</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:13 OS2
-r-xr-xr-x. <span class="token number">1</span> root root     <span class="token number">4821</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:06 runasroot.sh
-r--r--r--. <span class="token number">1</span> root root      <span class="token number">547</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:13 TRANS.TBL
-r--r--r--. <span class="token number">1</span> root root  <span class="token number">3731646</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:05 VBoxDarwinAdditions.pkg
-r--r--r--. <span class="token number">1</span> root root     <span class="token number">3949</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:05 VBoxDarwinAdditionsUninstall.tool
-r-xr-xr-x. <span class="token number">1</span> root root  <span class="token number">8601012</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:07 VBoxLinuxAdditions.run
-r--r--r--. <span class="token number">1</span> root root <span class="token number">16584704</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:07 VBoxSolarisAdditions.pkg
-r-xr-xr-x. <span class="token number">1</span> root root <span class="token number">22909888</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:12 VBoxWindowsAdditions-amd64.exe
-r-xr-xr-x. <span class="token number">1</span> root root   <span class="token number">270104</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:07 VBoxWindowsAdditions.exe
-r-xr-xr-x. <span class="token number">1</span> root root <span class="token number">12125152</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:09 VBoxWindowsAdditions-x86.exe     
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># umount /mnt/</span>
<span class="token comment"># 本来是虚拟机，不应该有内容的把。看下文件内容，应该就是虚拟机的工具之类的</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /dev/sr0 </span>
brw-rw----+ <span class="token number">1</span> root cdrom <span class="token number">11</span>, <span class="token number">0</span> <span class="token number">10</span>月 <span class="token number">28</span> <span class="token number">21</span>:38 /dev/sr0
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/sr0 /mnt/</span>
mount: /dev/sr0 写保护，将以只读方式挂载
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /mnt/</span>
总用量 <span class="token number">62742</span>
-r--r--r--. <span class="token number">1</span> root root      <span class="token number">763</span> <span class="token number">1</span>月  <span class="token number">22</span> <span class="token number">2019</span> AUTORUN.INF
-r-xr-xr-x. <span class="token number">1</span> root root     <span class="token number">6384</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:06 autorun.sh
dr-xr-xr-x. <span class="token number">2</span> root root      <span class="token number">792</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:13 cert
dr-xr-xr-x. <span class="token number">2</span> root root     <span class="token number">1824</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:13 NT3x
dr-xr-xr-x. <span class="token number">2</span> root root     <span class="token number">2652</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:13 OS2
-r-xr-xr-x. <span class="token number">1</span> root root     <span class="token number">4821</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:06 runasroot.sh
-r--r--r--. <span class="token number">1</span> root root      <span class="token number">547</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:13 TRANS.TBL
-r--r--r--. <span class="token number">1</span> root root  <span class="token number">3731646</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:05 VBoxDarwinAdditions.pkg
-r--r--r--. <span class="token number">1</span> root root     <span class="token number">3949</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:05 VBoxDarwinAdditionsUninstall.tool
-r-xr-xr-x. <span class="token number">1</span> root root  <span class="token number">8601012</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:07 VBoxLinuxAdditions.run
-r--r--r--. <span class="token number">1</span> root root <span class="token number">16584704</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:07 VBoxSolarisAdditions.pkg
-r-xr-xr-x. <span class="token number">1</span> root root <span class="token number">22909888</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:12 VBoxWindowsAdditions-amd64.exe
-r-xr-xr-x. <span class="token number">1</span> root root   <span class="token number">270104</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:07 VBoxWindowsAdditions.exe
-r-xr-xr-x. <span class="token number">1</span> root root <span class="token number">12125152</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">17</span>:09 VBoxWindowsAdditions-x86.exe

<span class="token comment"># 这个实例是直接记录步骤，笔者没有 usb 的环境</span>
<span class="token comment"># 假设你的 usb 是 /dev/sda ，将上面的 image 刻录到 USB 磁盘中</span>
lsblk /dev/sda
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda   <span class="token number">8</span>:0    <span class="token number">0</span>   2G   <span class="token number">0</span> disk    				<span class="token comment"># 这里是 disk </span>

<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/tmp/system.iso <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda
<span class="token function">mount</span> /dev/sda /mnt
ll /mnt
<span class="token comment"># 有一个小技巧，可以使用这里的 dd 将 iso 文件写入 USB 磁盘</span>
<span class="token comment"># 那么久会变成可开机光盘一样的功能，可以让你用 USB 来安装 linux ，速度快很多（因为 DVD 刻录很慢）</span>

<span class="token comment"># 将你的 /boot 整个文件系统通过 dd 备份下来</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># df -h /boot/</span>
文件系统        容量  已用  可用 已用% 挂载点
/dev/sda2      1014M  181M  834M   <span class="token number">18</span>% /boot
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/sda2 of=/tmp/sda2.img</span>
记录了2097152+0 的读入
记录了2097152+0 的写出
<span class="token number">1073741824</span>字节<span class="token punctuation">(</span><span class="token number">1.1</span> GB<span class="token punctuation">)</span>已复制，5.96824 秒，180 MB/秒
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll -h /tmp/sda2.img </span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">1</span>.0G <span class="token number">10</span>月 <span class="token number">29</span> 09:52 /tmp/sda2.img

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 dd 来备份是无可奈何的情况，因为默认 dd 是一个一个扇区去读写的，而且即使没有用到的扇区也会写入备份档中，因此整个文件会变得与磁盘一模一样大。缺点即优点，因此不管是什么类容都可以备份和还原</p><h2 id="🍀-cpio" tabindex="-1"><a class="header-anchor" href="#🍀-cpio" aria-hidden="true">#</a> 🍀 cpio</h2><p>cpio 可以备份任何东西，包括装置设备文件。不过 cpio 有个大问题，不会主动找文件，被动接收，所以需要配合类似 find 等可以找到文件名的指令来使用，因此涉及到了后续才会讲解的数据流重导向。</p><p>这里如果不明白什么是数据流重导向，那么后续学习之后再回过头来看这里</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>备份：cpio <span class="token parameter variable">-ovcB</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span>file<span class="token operator">|</span>device<span class="token punctuation">]</span>
还原：cpio <span class="token parameter variable">-ivcdu</span> <span class="token operator">&lt;</span> <span class="token punctuation">[</span>file<span class="token operator">|</span>device<span class="token punctuation">]</span>
查看：cpio <span class="token parameter variable">-ivct</span> <span class="token operator">&lt;</span> <span class="token punctuation">[</span>file<span class="token operator">|</span>device<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备份选项参数：</p><ul><li>o：将数据 copy 输出到文件或装置上</li><li>B：让预设的 Blocks 可以增加至 5120bytes（预设是 512bytes），好处是：可以让大文件的存储速度加快许多（请参考 i-nodes 概念）</li></ul><p>还原选项参数：</p><ul><li>i：将数据从文件或装置中 copy 出来</li><li>d：自动建立目录，使用 cpio 所备份的数据内容不见得会在同一层目录中，因此必须要让 cpio 在还原时可以建立新目录</li><li>u：自动的将较新的文件覆盖旧文件</li><li>t：需要配合 -i 使用，可以用在查看以 cpio 建立的文件或装置的内容</li></ul><p>一些共享选项参数：</p><ul><li>v：输出处理的文件名</li><li>c：一种较新的 portable format 方式存储</li></ul><p>实践练习：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找出 /boot 下的所有文件，将其备份到 /tmp/boot.cpio </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /</span>
<span class="token punctuation">[</span>root@study /<span class="token punctuation">]</span><span class="token comment"># find boot -print</span>
boot
boot/efi
boot/efi/EFI
boot/efi/EFI/centos
boot/efi/EFI/centos/fw
<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token comment"># 通过 find 可以找到 boot 下存在的文件名包括文件与目录，但请千万不要是绝对路径</span>
<span class="token comment"># 如果是绝对路径，和之前解压缩时类似的问题</span>

<span class="token comment"># 这里就看明白了，上面语法中其实是没有指定需要备份的文件有哪些的</span>
<span class="token comment"># 这里使用管道符号把 find boot 找到的文件名传递给了后续的 cpio 处理</span>
<span class="token punctuation">[</span>root@study /<span class="token punctuation">]</span><span class="token comment"># find boot | cpio -ocvB &gt; /tmp/boot.cpio</span>
<span class="token punctuation">[</span>root@study /<span class="token punctuation">]</span><span class="token comment"># ll -h /tmp/boot.cpio </span>
-rw-r--r--. <span class="token number">1</span> root root 147M <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:29 /tmp/boot.cpio
<span class="token punctuation">[</span>root@study /<span class="token punctuation">]</span><span class="token comment"># file /tmp/boot.cpio </span>
/tmp/boot.cpio: ASCII cpio archive <span class="token punctuation">(</span>SVR4 with no CRC<span class="token punctuation">)</span>

<span class="token comment"># 将刚刚的文件在 /root 目录下解开</span>
<span class="token punctuation">[</span>root@study /<span class="token punctuation">]</span><span class="token comment"># cd ~</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cpio -idvc &lt; /tmp/boot.cpio </span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ll /root/boot/</span>
总用量 <span class="token number">135200</span>
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">152976</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 config-3.10.0-1062.el7.x86_64
drwx------. <span class="token number">3</span> root root       <span class="token number">17</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 efi
drwxr-xr-x. <span class="token number">2</span> root root       <span class="token number">27</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 grub
drwx------. <span class="token number">5</span> root root       <span class="token number">97</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 grub2
-rw-------. <span class="token number">1</span> root root <span class="token number">78606868</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 initramfs-0-rescue-f228ab37c368416c84c6b27971ba45a9.img
-rw-------. <span class="token number">1</span> root root <span class="token number">31799826</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 initramfs-3.10.0-1062.el7.x86_64.img
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">318717</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 symvers-3.10.0-1062.el7.x86_64.gz
-rw-------. <span class="token number">1</span> root root  <span class="token number">3594971</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 System.map-3.10.0-1062.el7.x86_64
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">10485760</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 testing.img
-rwxr-xr-x. <span class="token number">1</span> root root  <span class="token number">6734016</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 vmlinuz-0-rescue-f228ab37c368416c84c6b27971ba45a9
-rwxr-xr-x. <span class="token number">1</span> root root  <span class="token number">6734016</span> <span class="token number">10</span>月 <span class="token number">29</span> <span class="token number">10</span>:31 vmlinuz-3.10.0-1062.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cpio 可以将系统的数据完整的备份到磁带机上去：</p><ul><li>备份：<code>find / | cpio -ocvB &gt; /dev/st0</code></li><li>还原：<code>cpio -idvc &lt; /dev/sto</code></li></ul><p>虽然 cpio 不是特别的方便，但是备份可是利器，因为可以备份任何文件，包括 /dev/ 下的任何装置文件</p><p>其实系统中有一个使用 cpio 建立的文件 /boot/initramfs-xxx ，现在来解开他看看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先看下属于什么文件格式</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># file /boot/initramfs-3.10.0-1062.el7.x86_64.img </span>
/boot/initramfs-3.10.0-1062.el7.x86_64.img: <span class="token function">gzip</span> compressed data, from Unix, last modified: Fri Oct  <span class="token number">4</span> <span class="token number">18</span>:31:46 <span class="token number">2019</span>, max compression

<span class="token comment"># 完了，笔者的系统比书上的新，已经不是 cpio 的了</span>
<span class="token comment"># 那么下面只记录下解开步骤</span>
<span class="token function">mkdir</span> /tmp/initramfs
<span class="token builtin class-name">cd</span> /tmp/initramfs
cpio <span class="token parameter variable">-idvc</span> <span class="token operator">&lt;</span> /boot/initramfs-xx/img
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),t=[p];function l(r,c){return s(),a("div",null,t)}const m=n(o,[["render",l],["__file","06.html.vue"]]);export{m as default};
