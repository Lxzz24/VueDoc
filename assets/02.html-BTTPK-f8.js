import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as p,a as s,e as n,b as o,w as c,d as a}from"./app-CvlAI_tu.js";const r={},d=a(`<h1 id="服务器硬件数据收集" tabindex="-1"><a class="header-anchor" href="#服务器硬件数据收集" aria-hidden="true">#</a> 服务器硬件数据收集</h1><p>如果不想拆机的话，可以通过软件来收集到你的硬件信息</p><h2 id="🍀-用系统内置-dmidecode-解析硬件设备" tabindex="-1"><a class="header-anchor" href="#🍀-用系统内置-dmidecode-解析硬件设备" aria-hidden="true">#</a> 🍀 用系统内置 dmidecode 解析硬件设备</h2><p>dmidecode 可以解析 CPU 型号、主板型号、内存相关型号等信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dmidecode <span class="token parameter variable">-t</span> <span class="token builtin class-name">type</span>

选项与参数：详细 <span class="token builtin class-name">type</span> 使用 <span class="token function">man</span> dmidecode 查阅，这里列出比较常用的
	<span class="token number">1</span>：详细的系统数据，包含主板型号与硬件基础数据
	<span class="token number">4</span>：CPU 相关数据，包括倍频、外频、核心数等
	<span class="token number">9</span>：系统相关插槽格式，包括 PCI、PCI-E 等
	<span class="token number">17</span>：每一个内存插槽的规格，若该插槽有内存，则列出该内存的容量与型号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：显示整个系统硬件信息</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dmidecode -t 1</span>
<span class="token comment"># dmidecode 3.2</span>
Getting SMBIOS data from sysfs.
SMBIOS <span class="token number">2.5</span> present.

Handle 0x0001, DMI <span class="token builtin class-name">type</span> <span class="token number">1</span>, <span class="token number">27</span> bytes
System Information
	Manufacturer: innotek GmbH
	Product Name: VirtualBox
	Version: <span class="token number">1.2</span>
	Serial Number: <span class="token number">0</span>
	UUID: e4a1acbe-ffac-4762-b2c9-ed13daf9a493
	Wake-up Type: Power Switch
	SKU Number: Not Specified
	Family: Virtual Machine

<span class="token comment"># 范例 2：内存相关数据</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dmidecode -t 17</span>
<span class="token comment"># dmidecode 3.2</span>
Getting SMBIOS data from sysfs.
SMBIOS <span class="token number">2.5</span> present.
<span class="token comment"># 笔者这用的 VirtualBox 的虚拟机，不知道为啥获取不到内存的信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-硬件资源的收集与分析" tabindex="-1"><a class="header-anchor" href="#🍀-硬件资源的收集与分析" aria-hidden="true">#</a> 🍀 硬件资源的收集与分析</h2>`,7),u=s("code",null,"/proc/ 与 /sys/ ",-1),m=s("code",null,"/proc/cpuinfo",-1),v=s("code",null,"/proc/paritions",-1),b=s("code",null,"/proc/interrupts",-1),k=s("code",null,"/proc",-1),h=a(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>核心检测到的硬件可能并非完全正确，因为它仅是使用最适当的模块来驱动这个硬件，所以由概率会误判。</p><p>你可能想要以最新最正确的模块来驱动你的硬件，此时，重新编译核心是其中一条可以达到的方向。</p></div><p>除了直接查看 <code>/proc</code> 下的文件内容之外，Linux 提供了几个简单的指令来讲核心所检测到的硬件信息调用出来，常见的指令有：</p><ul><li>gdisk：第 7 章中用过，gdisk -l 将分区表列出</li><li>dmesg：第 16 章中用过，观察核心运行过程中所显示的各项信息</li><li>vmstat：第 16 章中用过，可分析系统（CPU、RAM、IO）目前的状态</li><li>lspci：列出整个 PC 系统的 PCI 接口设备</li><li>lsusb：列出各个 USB 端口的状态，与链接的 USB 设备</li><li>iostat：与 vmstat 类似，可实时列出整个 CPU 与接口设备的 Input/Output 状态</li></ul><h3 id="lspci" tabindex="-1"><a class="header-anchor" href="#lspci" aria-hidden="true">#</a> lspci</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lspci <span class="token punctuation">[</span>-vvn<span class="token punctuation">]</span>

-v：显示更多的 PCI 接口设备的详细信息
-vv：比 <span class="token parameter variable">-v</span> 还要更详细的信息
-n：直接观察 PCI 的 ID 而不是厂商名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1： 查询 PCI 总线相关设备</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># lspci</span>
00:00.0 Host bridge: Intel Corporation 440FX - 82441FX PMC <span class="token punctuation">[</span>Natoma<span class="token punctuation">]</span> <span class="token punctuation">(</span>rev 02<span class="token punctuation">)</span>
00:01.0 ISA bridge: Intel Corporation 82371SB PIIX3 ISA <span class="token punctuation">[</span>Natoma/Triton II<span class="token punctuation">]</span>
00:01.1 IDE interface: Intel Corporation 82371AB/EB/MB PIIX4 IDE <span class="token punctuation">(</span>rev 01<span class="token punctuation">)</span>
00:02.0 VGA compatible controller: VMware SVGA II Adapter
00:03.0 Ethernet controller: Intel Corporation 82540EM Gigabit Ethernet Controller <span class="token punctuation">(</span>rev 02<span class="token punctuation">)</span>
00:04.0 System peripheral: InnoTek Systemberatung GmbH VirtualBox Guest Service
00:05.0 Multimedia audio controller: Intel Corporation 82801AA AC <span class="token number">97</span> Audio Controller <span class="token punctuation">(</span>rev 01<span class="token punctuation">)</span>
00:06.0 USB controller: Apple Inc. KeyLargo/Intrepid USB
00:07.0 Bridge: Intel Corporation 82371AB/EB/MB PIIX4 ACPI <span class="token punctuation">(</span>rev 08<span class="token punctuation">)</span>
00:08.0 Ethernet controller: Intel Corporation 82540EM Gigabit Ethernet Controller <span class="token punctuation">(</span>rev 02<span class="token punctuation">)</span>
00:0d.0 SATA controller: Intel Corporation 82801HM/HEM <span class="token punctuation">(</span>ICH8M/ICH8M-E<span class="token punctuation">)</span> SATA Controller <span class="token punctuation">[</span>AHCI mode<span class="token punctuation">]</span> <span class="token punctuation">(</span>rev 02<span class="token punctuation">)</span>

<span class="token comment"># 如果想要了解更详细的信息</span>
<span class="token comment"># 下面这个是什么，不清楚，笔者的虚拟机与作者的不一样</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># lspci -s 00:03.0 -vv</span>
00:03.0 Ethernet controller: Intel Corporation 82540EM Gigabit Ethernet Controller <span class="token punctuation">(</span>rev 02<span class="token punctuation">)</span>
	Subsystem: Intel Corporation PRO/1000 MT Desktop Adapter
	Control: I/O+ Mem+ BusMaster+ SpecCycle- MemWINV- VGASnoop- ParErr- Stepping- SERR- FastB2B- DisINTx-
	Status: Cap+ 66MHz+ UDF- FastB2B- ParErr- <span class="token assign-left variable">DEVSEL</span><span class="token operator">=</span>medium <span class="token operator">&gt;</span>TAbort- <span class="token operator">&lt;</span>TAbort- <span class="token operator">&lt;</span>MAbort- <span class="token operator">&gt;</span>SERR- <span class="token operator">&lt;</span>PERR- INTx-
	Latency: <span class="token number">64</span> <span class="token punctuation">(</span>63750ns min<span class="token punctuation">)</span>
	Interrupt: pin A routed to IRQ <span class="token number">19</span>
	Region <span class="token number">0</span>: Memory at f4200000 <span class="token punctuation">(</span><span class="token number">32</span>-bit, non-prefetchable<span class="token punctuation">)</span> <span class="token punctuation">[</span>size<span class="token operator">=</span>128K<span class="token punctuation">]</span>
	Region <span class="token number">2</span>: I/O ports at d020 <span class="token punctuation">[</span>size<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">]</span>
	Capabilities: <span class="token punctuation">[</span>dc<span class="token punctuation">]</span> Power Management version <span class="token number">2</span>
		Flags: PMEClk- DSI+ D1- D2- <span class="token assign-left variable">AuxCurrent</span><span class="token operator">=</span>0mA PME<span class="token punctuation">(</span>D0-,D1-,D2-,D3hot-,D3cold-<span class="token punctuation">)</span>
		Status: D0 NoSoftRst- PME-Enable- <span class="token assign-left variable">DSel</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">DScale</span><span class="token operator">=</span><span class="token number">0</span> PME-
	Capabilities: <span class="token punctuation">[</span>e4<span class="token punctuation">]</span> PCI-X non-bridge device
		Command: DPERE- ERO+ <span class="token assign-left variable">RBC</span><span class="token operator">=</span><span class="token number">512</span> <span class="token assign-left variable">OST</span><span class="token operator">=</span><span class="token number">1</span>
		Status: <span class="token assign-left variable">Dev</span><span class="token operator">=</span>ff:1f.0 64bit- 133MHz- SCD- USC- <span class="token assign-left variable">DC</span><span class="token operator">=</span>simple <span class="token assign-left variable">DMMRBC</span><span class="token operator">=</span><span class="token number">2048</span> <span class="token assign-left variable">DMOST</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">DMCRS</span><span class="token operator">=</span><span class="token number">8</span> RSCEM- 266MHz- 533MHz-
	Kernel driver <span class="token keyword">in</span> use: e1000
	Kernel modules: e1000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-s</code> 后面是每个设备总线、插槽与相关函数的功能，它是硬件检测所得到的数据，可以通过 <code>/usr/share/hwdata/pci.ids</code> 来了解这些数据串的含义</p><p>pci.ids 文件是 PCI 的标准 ID 与厂牌名称对应表，另外 <code>lspci</code> 指令的数据是从 <code>/proc/bus/pci</code> 目录下取出来的，由于硬件发展太过快速，你的 pci.ids 文件有可能落伍了，可通过如下方式在线更新</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>update-pciids
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="lsusb" tabindex="-1"><a class="header-anchor" href="#lsusb" aria-hidden="true">#</a> lsusb</h3><p>usb 设备数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lsusb <span class="token punctuation">[</span>-t<span class="token punctuation">]</span>

-t：使用类似树状目录来显示各个 USB 端口的相关性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：列出当前主机上 USB 各端口状态</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># lsusb</span>
Bus 001 Device 001: ID 1d6b:0001 Linux Foundation <span class="token number">1.1</span> root hub
<span class="token comment"># 笔者这里没有连接设备到 USB 上，就是显示上面那个箱子</span>
<span class="token comment"># 书上有连接的，数据大概如下</span>
<span class="token comment"># Bus 001 Device 001: ID 1d6b:0001 Adomax Technology Co., LTd</span>
<span class="token comment"># 那么设备 ID 就是 1d6b:0001，对应的厂商与产品为 Adomax</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 ID 与厂商型号对应表在 <code>/usr/share/hwdata/pci.ids</code> 中</p><h3 id="iostat" tabindex="-1"><a class="header-anchor" href="#iostat" aria-hidden="true">#</a> iostat</h3><p>磁盘开机到现在，已经存取多少数据了？就可以通过 iostat 指令来查询（如果该软件未安装，可通过 <code>yum install sysstat</code> 安装）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iostat <span class="token punctuation">[</span>-c<span class="token operator">|</span>-d<span class="token punctuation">]</span> <span class="token punctuation">[</span>-k<span class="token operator">|</span>-m<span class="token punctuation">]</span> <span class="token punctuation">[</span>-t<span class="token punctuation">]</span> <span class="token punctuation">[</span>间隔秒数<span class="token punctuation">]</span> <span class="token punctuation">[</span>检测次数<span class="token punctuation">]</span>

-c：仅显示 CPU 的状态
-d：仅显示存储设备的状态，不可与 <span class="token parameter variable">-c</span> 一起使用
-k：默认显示的是 block，可以改成 k bytes 的大小来显示
-m：改成 MB 单位显示
-t：显示日期
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：显示当前系统 CPU 与存储设备的状态</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># iostat</span>
Linux <span class="token number">3.10</span>.0-1062.el7.x86_64 <span class="token punctuation">(</span>study.centos.mrcode<span class="token punctuation">)</span> 	<span class="token number">2020</span>年04月03日 	_x86_64_	<span class="token punctuation">(</span><span class="token number">1</span> CPU<span class="token punctuation">)</span>

<span class="token comment"># CPU 信息</span>
avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           <span class="token number">1.07</span>    <span class="token number">0.03</span>    <span class="token number">0.22</span>    <span class="token number">0.29</span>    <span class="token number">0.00</span>   <span class="token number">98.38</span>

<span class="token comment"># 磁盘信息</span>
Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
sda               <span class="token number">1.35</span>        <span class="token number">62.23</span>         <span class="token number">3.98</span>     <span class="token number">828738</span>      <span class="token number">52981</span>
dm-0              <span class="token number">1.17</span>        <span class="token number">59.80</span>         <span class="token number">3.82</span>     <span class="token number">796302</span>      <span class="token number">50933</span>

<span class="token comment"># 含义如下</span>
tps：平均每秒传送次数，与数据传输「次数」有关，非容量
kB_read/： 开机到现在，平均的读取单位
kB_wrtn/s：开机到现在，平均的写入单位
kB_read：  开机到现在，总共读出来的文件单位
kB_wrtn：  开机到现在，总共写入的文件单位

<span class="token comment"># 范例 2：仅针对 sda ，每 2 秒监测一次，总共监测 3 次</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># iostat -d 2 3 sda</span>
Linux <span class="token number">3.10</span>.0-1062.el7.x86_64 <span class="token punctuation">(</span>study.centos.mrcode<span class="token punctuation">)</span> 	<span class="token number">2020</span>年04月03日 	_x86_64_	<span class="token punctuation">(</span><span class="token number">1</span> CPU<span class="token punctuation">)</span>

Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
sda               <span class="token number">1.31</span>        <span class="token number">60.39</span>         <span class="token number">3.88</span>     <span class="token number">828746</span>      <span class="token number">53191</span>

Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
sda               <span class="token number">0.00</span>         <span class="token number">0.00</span>         <span class="token number">0.00</span>          <span class="token number">0</span>          <span class="token number">0</span>

Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
sda               <span class="token number">0.00</span>         <span class="token number">0.00</span>         <span class="token number">0.00</span>          <span class="token number">0</span>          <span class="token number">0</span>

<span class="token comment"># 需要注意的是：第一次是开机到现在的数据</span>
<span class="token comment"># 第 2 次则是两次直接的系统传输值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-了解磁盘的健康状态" tabindex="-1"><a class="header-anchor" href="#🍀-了解磁盘的健康状态" aria-hidden="true">#</a> 🍀 了解磁盘的健康状态</h2><p>在服务器上，最重要的就是「数据安全」，数据是放在磁盘中的，那么对于磁盘的健康状况则是你需要关注的。</p><p>可以通过 smartd 指令来达成，SMART（Self-Monitoring，Analysis and Reporting Technology System）的缩写，主要用来监测目前常见的 ATA 与 SCSI 接口的磁盘。前提是，被监测的磁盘也必须要 <strong>支持 SMART 协议</strong>。</p><p>不过虚拟机磁盘不支持 smart 协议，无法进行测试。</p><p>比如笔者使用指令来监测虚拟机磁盘</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># smartctl -a /dev/sda</span>
smartctl <span class="token number">7.0</span> <span class="token number">2018</span>-12-30 r4883 <span class="token punctuation">[</span>x86_64-linux-3.10.0-1062.el7.x86_64<span class="token punctuation">]</span> <span class="token punctuation">(</span>local build<span class="token punctuation">)</span>
Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2002</span>-18, Bruce Allen, Christian Franke, www.smartmontools.org

<span class="token operator">==</span><span class="token operator">=</span> START OF INFORMATION SECTION <span class="token operator">==</span><span class="token operator">=</span>
Device Model:     VBOX HARDDISK
Serial Number:    VBa19abe2f-1d5f9384
Firmware Version: <span class="token number">1.0</span>
User Capacity:    <span class="token number">42,949</span>,672,960 bytes <span class="token punctuation">[</span><span class="token number">42.9</span> GB<span class="token punctuation">]</span>
Sector Size:      <span class="token number">512</span> bytes logical/physical
Device is:        Not <span class="token keyword">in</span> smartctl database <span class="token punctuation">[</span>for details use: <span class="token parameter variable">-P</span> showall<span class="token punctuation">]</span>
ATA Version is:   ATA/ATAPI-6 published, ANSI INCITS <span class="token number">361</span>-2002
Local Time is:    Fri Apr  <span class="token number">3</span> <span class="token number">16</span>:04:40 <span class="token number">2020</span> CST
SMART support is: Unavailable - device lacks SMART capability.

A mandatory SMART <span class="token builtin class-name">command</span> failed: exiting. To continue, <span class="token function">add</span> one or <span class="token function">more</span> <span class="token string">&#39;-T permissive&#39;</span> options.
<span class="token comment"># 这里就报错了，没有继续下去</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面直接用书上的信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 用 smartctl 来显示完整的 /dev/sda 的信息</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># smartctl -a /dev/sda</span>
smartctl <span class="token number">6.2</span> <span class="token number">2013</span>-07-26 r3841 <span class="token punctuation">[</span>x86_64-linux-3.10.0-229.el7.x86_64<span class="token punctuation">]</span> <span class="token punctuation">(</span>local build<span class="token punctuation">)</span>
Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2002</span>-13, Bruce Allen, Christian Franke, www.smartmontools.org

<span class="token comment"># 首先来输出一下这部磁盘的整体信息状况！包括制造商、序号、格式、 SMART 支持度等等！</span>
<span class="token operator">==</span><span class="token operator">=</span> START OF INFORMATION SECTION <span class="token operator">==</span><span class="token operator">=</span>
Device Model: QEMU HARDDISK
Serial Number: QM00002
Firmware Version: <span class="token number">0.12</span>.1
User Capacity: <span class="token number">2,148</span>,073,472 bytes <span class="token punctuation">[</span><span class="token number">2.14</span> GB<span class="token punctuation">]</span>
Sector Size: <span class="token number">512</span> bytes logical/physical
Device is: Not <span class="token keyword">in</span> smartctl database <span class="token punctuation">[</span>for details use: <span class="token parameter variable">-P</span> showall<span class="token punctuation">]</span>
ATA Version is: ATA/ATAPI-7, ATA/ATAPI-5 published, ANSI NCITS <span class="token number">340</span>-2000
Local Time is: Wed Sep <span class="token number">2</span> <span class="token number">18</span>:10:38 <span class="token number">2015</span> CST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled
<span class="token operator">==</span><span class="token operator">=</span> START OF READ SMART DATA SECTION <span class="token operator">==</span><span class="token operator">=</span>
SMART overall-health self-assessment <span class="token builtin class-name">test</span> result: PASSED

<span class="token comment"># 接下来则是一堆基础说明！ 鸟哥这里先略过这段资料喔！</span>
General SMART Values:
Offline data collection status: <span class="token punctuation">(</span>0x82<span class="token punctuation">)</span> Offline data collection activity
was completed without error.
Auto Offline Data Collection: Enabled.
<span class="token punctuation">..</span><span class="token punctuation">..</span>.<span class="token punctuation">(</span>中间省略<span class="token punctuation">)</span>

<span class="token comment"># 再来则是有没有曾经发生过磁盘错乱的问题登录！</span>
SMART Error Log Version: <span class="token number">1</span>
No Errors Logged

<span class="token comment"># 当你下达过磁盘自我检测的过程，就会被记录在这里了！</span>
SMART Self-test log structure revision number <span class="token number">1</span>
Num Test_Description Status Remaining LifeTime<span class="token punctuation">(</span>hours<span class="token punctuation">)</span> LBA_of_first_error
<span class="token comment"># 1 Short offline Completed without error 00% 4660 -</span>
<span class="token comment"># 2 Short offline Completed without error 00% 4660 -</span>


<span class="token comment"># 2. 命令磁盘进行一次自我检测的动作，然后再次观察磁盘状态！</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># smartctl -t short /dev/sda</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># smartctl -a /dev/sda</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>.<span class="token punctuation">(</span>前面省略<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.
<span class="token comment"># 底下会多出一个第三笔的测试信息！看一下 Status 的状态， 没有问题就是好消息！</span>
SMART Self-test log structure revision number <span class="token number">1</span>
Num Test_Description Status Remaining LifeTime<span class="token punctuation">(</span>hours<span class="token punctuation">)</span> LBA_of_first_error
<span class="token comment"># 1 Short offline Completed without error 00% 4660 -</span>
<span class="token comment"># 2 Short offline Completed without error 00% 4660 -</span>
<span class="token comment"># 3 Short offline Completed without error 00% 4660</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特别强调：磁盘自检，可能磁盘的 I/O 状态会比较频繁，因此不建议在系统忙碌时进行</p>`,27);function S(g,A){const e=i("RouterLink");return l(),p("div",null,[d,s("p",null,[n("系统硬件是由操作系统核心所管理的，从低第 19 章的开机流程分析中了解到，内核在开机时就能够检测主机硬件并加载适当的模块来驱动硬件。而核心所检测到的各项硬件配置，会被记录在 "),u,n(" 中，包括 "),m,n("、"),v,n("、"),b,n("。至于更多的 "),k,n(" 内容，可以前往 "),o(e,{to:"/99-tools/Linux/16/04.html#proc-%E4%BB%A3%E8%A1%A8%E7%9A%84%E6%84%8F%E4%B9%89"},{default:c(()=>[n("第 16 章回顾")]),_:1})]),h])}const C=t(r,[["render",S],["__file","02.html.vue"]]);export{C as default};
