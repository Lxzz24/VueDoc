import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as o,a as n,e as s,b as e,d as t}from"./app-CvlAI_tu.js";const p="/VueDoc/assets/image-20200402103104786-B41ekBQz.png",d="/VueDoc/assets/image-20200403131250864-DAFXuWxL.png",u="/VueDoc/assets/image-20200403132310377-DwIaiQsk.png",r="/VueDoc/assets/image-20200403132610040-BDqwfS4g.png",m="/VueDoc/assets/image-20200403133234683-CpSd7j4a.png",v="/VueDoc/assets/image-20200403133531975-BiflMJjD.png",b={},k=n("h1",{id:"系统基本设置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#系统基本设置","aria-hidden":"true"},"#"),s(" 系统基本设置")],-1),h=n("p",null,"CentOS 7 系统其实有许多东西需要来设置，包括之前谈到过的语系、日期、时间、网络等。以前有一个 setup 的软件将许多的设置做成图形界面，连防火墙都可以搞定，不过在 7.x 推出了 bash-complete 的功能，配合很多软件的指令下达设置，就还比较方便的",-1),g=n("h2",{id:"🍀-网络设置-手动设置与-dhcp-自动获取",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🍀-网络设置-手动设置与-dhcp-自动获取","aria-hidden":"true"},"#"),s(" 🍀 网络设置（手动设置与 DHCP 自动获取）")],-1),f={href:"http://linux.vbird.org/linux_server/0110network_basic.php",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>本章仅介绍一部单机 LInux 客户端，并非服务器，所以你需要的各项网络参数，只需要找到网络管理员或则是找到你的 ISP（Internet Service Provider），询问到网络参数的获取方式或实际的网络参数即可；通常网络参数的获取方式有如下几种：</p><ul><li><p>手动设置固定 IP</p><p>常用于学术网络的服务器、公司内特定工位，此种方式必须取得如下几个网络参数：</p><ul><li>IP</li><li>子网掩码（netmask）</li><li>网关（gateway）</li><li>DNS：在百度搜下公用的 DNS 就知道了</li></ul></li><li><p>网络参数可自动取得（dhcp 协议自动获取）</p><p>常见于 IP 分享器后端的主机，或则是利用在线网？（cable modem），或则是学校宿舍的网络环境等。此种网络参数获取方式就被称为 dhcp，只需要设置上网方式为 dhcp 即可</p></li><li><p>ASDL 宽带拨号</p><p>无论你的 IP 是固定的还是每次拨号都不相同（被称为浮动式 IP），只要通过光钎或宽带调制解调器拨号上网的，就是使用这种方式。拨号上网虽然还是使用网卡链接到调制调节器上，不过，系统最终会产生一个替代调制调节器的网络接口（ppp0，一个实体网络接口）</p><p>这种方式，找你的移动运营商就可以了</p></li></ul><p>获得网络参数后，还需要知道通过什么硬件连上 Internet？其实就是网卡。目前的驻留网卡使用以太网络协议所开发出来的以太网卡（Ethernet），因此在 Linux 上这种网卡接口为 ethN（N 为数值）。比如我的测试机上有一张以太网卡，因此这主机的网络接口是 eth0（第一张卡为 0 开始）</p><p>不过新的 CentOS 7 开始对网卡的编号有另一套规则，网卡的接口代号与网卡的来源有关，基本上的网卡名称会是这样分类：</p><ul><li>eno1：代表由主板 BISO 内置网卡</li><li>ens1：代表由主板 BIOS 内置的 PCI-E 接口的网卡</li><li>enp2s0：代表 PCI-E 接口的独立网卡，可能有多个插孔，因此会有s0、s1.... 等编号</li><li>eth0：如果上述名称都不适用，则回到原本的预设网卡编号</li></ul><p>可以通过 <code>ifconfig -a</code> 列出你主机上的所有网卡，另外 CentOS 7 不建议直接手动修改配置文件，而是通过 nmcli 指令来设置网络参数</p><h3 id="手动设置-ip-网络参数" tabindex="-1"><a class="header-anchor" href="#手动设置-ip-网络参数" aria-hidden="true">#</a> 手动设置 IP 网络参数</h3><p>如果你已经获取到网络参数，基本上的网络参数需要这些数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>method: manual # 手动设置
IP: 172.16.1.1
netmask: 255.255.0.0
gateway: 172.16.200.254
DNS: 172.162.200.254
hostname: study.centos.mrcode  # 暂时不用理会
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cmcli 是通过一个名为「联机代号」的名称来设置是否要上网，每个「联机代号」会有一个「网卡号」，这两个通常设置为相同值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nmcli connection show <span class="token punctuation">[</span>网卡代号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询系统上的联机代号</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nmcli connection show</span>
NAME    UUID                                  TYPE      DEVICE
enp0s3  402f740a-d5a9-4a18-8837-21df7c6771fa  ethernet  enp0s3
virbr0  e2eb3b9d-bbc2-4b8d-b73a-94183164cc47  bridge    virbr0

<span class="token comment"># NAME 联机代号、通常与后面的网卡 DEVICE 一样</span>
<span class="token comment"># UUID：特殊设备识别号</span>
<span class="token comment"># TYPE：网卡类型，通常是以太网卡</span>
<span class="token comment"># DEVICE：网卡名称</span>

<span class="token comment"># 从上面知道我们其实有两个网卡代号。可以查询这个联机代号的设置数据</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nmcli connection show enp0s3</span>
connection.id:                          enp0s3
connection.uuid:                        402f740a-d5a9-4a18-8837-21df7c6771fa
connection.stable-id:                   --
connection.type:                        <span class="token number">802</span>-3-ethernet
connection.interface-name:              enp0s3
connection.autoconnect:                 <span class="token function">yes</span>
<span class="token punctuation">..</span>.
ipv4.method:                            manual
ipv4.dns:                               --
ipv4.dns-search:                        --
ipv4.dns-options:                       <span class="token string">&quot;&quot;</span>
ipv4.dns-priority:                      <span class="token number">0</span>
ipv4.addresses:                         <span class="token number">192.168</span>.4.223/24
ipv4.gateway:                           --
<span class="token punctuation">..</span>.
IP4.ADDRESS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>:                         <span class="token number">192.168</span>.4.223/24
IP4.GATEWAY:                            --
IP4.ROUTE<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>:                           dst <span class="token operator">=</span> <span class="token number">192.168</span>.4.0/24, nh <span class="token operator">=</span> <span class="token number">0.0</span>.0.0, mt <span class="token operator">=</span> <span class="token number">100</span>
IP6.ADDRESS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>:                         fe80::3513:3436:21d:f327/64
IP6.GATEWAY:                            --
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面信息大写的 IP4、IP6 是目前的实际使用的网络参数，最上面的 connection 部分则是联机的状态，比较重要的参数含义如下：</p><ul><li><code>connection.autoconnect [yes|no]</code>：是否开机时启动这个联机，通常预设为 yes</li><li><code>ipv4.method [auto|manual]</code>：自动还是手动设置网络参数</li><li><code>ipv4.dns</code>：DNS IP 地址</li><li><code>ipv4.addresses [IP/Netmask]</code>： IP 与 netmask 的集合</li><li><code>ipv4.gateway</code>： gateway 的 IP 地址</li></ul><p>根据上面的设置项目，将我们的网络参数设置好</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nmcli connection modify enp0s3 \\</span>
connection.autoconnect <span class="token function">yes</span> <span class="token punctuation">\\</span>
ipv4.method manual <span class="token punctuation">\\</span>
ipv4.addresses <span class="token number">192.168</span>.110.10/24 <span class="token punctuation">\\</span>
ipv4.gateway <span class="token number">192.168</span>.110.1
<span class="token comment"># ipv4.dns 8.8.8.8</span>

<span class="token comment"># 上面只是修改了配置文件，还需实际生效才可以</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nmcli connection up enp0s3</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nmcli connection show enp0s3</span>
IP4.ADDRESS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>:                         <span class="token number">192.168</span>.110.10/24
IP4.GATEWAY:                            <span class="token number">192.168</span>.110.1
IP4.ROUTE<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>:                           dst <span class="token operator">=</span> <span class="token number">192.168</span>.111.0/24, nh <span class="token operator">=</span> <span class="token number">0.0</span>.0.0, mt <span class="token operator">=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),y={href:"https://zq99299.github.io/note-book/_posts/virtualbox/#%E7%BD%91%E7%BB%9C%E7%AF%87-host-only%EF%BC%88win10%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},C=t(`<h3 id="自动获取-ip-参数" tabindex="-1"><a class="header-anchor" href="#自动获取-ip-参数" aria-hidden="true">#</a> 自动获取 IP 参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nmcli connection modify enp0s3 \\</span>
connection.autoconnect <span class="token function">yes</span> <span class="token punctuation">\\</span>
ipv4.method auto

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nmcli connection up enp0s3</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># nmcli connection show enp0s3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动的就是使用了 dhcp 服务获取的参数配置</p><h3 id="修改主机名" tabindex="-1"><a class="header-anchor" href="#修改主机名" aria-hidden="true">#</a> 修改主机名</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hostnamectl <span class="token punctuation">[</span>set-hostname 你的主机名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 显示当前的主机名</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># hostnamectl</span>
   Static hostname: study.centos.mrcode				<span class="token comment"># 主机名</span>
         Icon name: computer-vm
           Chassis: vm
        Machine ID: e4a1acbeffac4762b2c9ed13daf9a493
           Boot ID: da0fdf95ea7f43e69ba5fd4d33c1a1b3
    Virtualization: kvm
  Operating System: CentOS Linux <span class="token number">7</span> <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>			<span class="token comment"># 操作系统名称</span>
       CPE OS Name: cpe:/o:centos:centos:7
            Kernel: Linux <span class="token number">3.10</span>.0-1062.el7.x86_64	<span class="token comment"># 核心版本</span>
      Architecture: x86-64							<span class="token comment"># 硬件版本</span>

<span class="token comment"># 2. 尝试修改主机名为 www.centos.mrcode ，之后再修改回来</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># hostnamectl set-hostname www.centos.mrcode</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/hostname</span>
www.centos.mrcode
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># hostnamectl set-hostname study.centos.mrcode</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-日期与时间设置" tabindex="-1"><a class="header-anchor" href="#🍀-日期与时间设置" aria-hidden="true">#</a> 🍀 日期与时间设置</h2><p>第 4 章中的 date 指令，可以进行日期、时间的设置。不过怎么修改时区呢？下次开机还会是正确的时间吗？如果有网络的话，如何进行网络校时</p><h3 id="时区的显示与设置" tabindex="-1"><a class="header-anchor" href="#时区的显示与设置" aria-hidden="true">#</a> 时区的显示与设置</h3><p>因为地球是圆的，每个时刻每个地区的时间可能都不一样。为了统治时间，有个 GMT 格林威治时间（时区）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>timedatectl <span class="token punctuation">[</span>commamd<span class="token punctuation">]</span>

选项与参数：
	list-timezones：列出系统上所有支持的时区名称
	set-timezone：设置时区
	set-time：设置时间
	set-ntp：设置网络校时系统
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 显示目前的时区与时间等信息</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># timedatectl</span>
      Local time: Wed <span class="token number">2020</span>-04-01 <span class="token number">17</span>:32:12 CST		<span class="token comment"># 本地时间</span>
  Universal time: Wed <span class="token number">2020</span>-04-01 09:32:12 UTC		<span class="token comment"># URC 时间，可称为格林威治时间</span>
        RTC time: Wed <span class="token number">2020</span>-04-01 09:32:12
       Time zone: Asia/Shanghai <span class="token punctuation">(</span>CST, +0800<span class="token punctuation">)</span>		<span class="token comment"># 时区</span>
     NTP enabled: no
NTP synchronized: no
 RTC <span class="token keyword">in</span> <span class="token builtin class-name">local</span> TZ: no
      DST active: n/a

<span class="token comment"># 2. 显示出是否有 New_York 时区，若有，则将目前的时区更新</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># timedatectl list-timezones | grep -i new</span>
America/New_York
America/North_Dakota/New_Salem

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># timedatectl set-timezone America/New_York</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># timedatectl</span>
      Local time: Wed <span class="token number">2020</span>-04-01 05:35:41 EDT
  Universal time: Wed <span class="token number">2020</span>-04-01 09:35:41 UTC
        RTC time: Wed <span class="token number">2020</span>-04-01 09:35:41
       Time zone: America/New_York <span class="token punctuation">(</span>EDT, -0400<span class="token punctuation">)</span>
     NTP enabled: no
NTP synchronized: no
 RTC <span class="token keyword">in</span> <span class="token builtin class-name">local</span> TZ: no
      DST active: <span class="token function">yes</span>
 Last DST change: DST began at
                  Sun <span class="token number">2020</span>-03-08 01:59:59 EST
                  Sun <span class="token number">2020</span>-03-08 03:00:00 EDT
 Next DST change: DST ends <span class="token punctuation">(</span>the clock jumps one hour backwards<span class="token punctuation">)</span> at
                  Sun <span class="token number">2020</span>-11-01 01:59:59 EDT
                  Sun <span class="token number">2020</span>-11-01 01:00:00 EST

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># timedatectl set-timezone Asia/Shanghai</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间调整" tabindex="-1"><a class="header-anchor" href="#时间调整" aria-hidden="true">#</a> 时间调整</h3><p>调整时间的格式可以是 <code>yyyy-mm-dd HH:MM</code> 格式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将时间调整到正确的时间上</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># timedatectl set-time &quot;2020-04-01 17:38&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以前使用 date 去修改日期后，还需要使用 hwclock 去修改 BIOS 记录的时间，现在通过该指令就简单多了</p><h3 id="用-ntpdate-手动网络校时" tabindex="-1"><a class="header-anchor" href="#用-ntpdate-手动网络校时" aria-hidden="true">#</a> 用 ntpdate 手动网络校时</h3><p>使用系统默认的自动校时功能，会启动 NTP 协议相关的软件，会多开好几个 port，所以有些人也喜欢吧校正指令写入 crontab 中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ntpdate tock.stdtime.gov.tw</span>
 <span class="token number">1</span> Apr <span class="token number">17</span>:42:48 ntpdate<span class="token punctuation">[</span><span class="token number">2754</span><span class="token punctuation">]</span>: step <span class="token function">time</span> server <span class="token number">211.22</span>.103.157 offset <span class="token number">2.937308</span> sec

<span class="token comment"># 将时间刷入 BIOS</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># hwclock -w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 <code>tock.stdtime.gov.tw</code> 是某一个 NTP 服务器提供的服务，也可以百度下目前常用的 NTP 服务器地址</p><h3 id="语系设置" tabindex="-1"><a class="header-anchor" href="#语系设置" aria-hidden="true">#</a> 语系设置</h3><p>在第 4 章中讲到过 LANG 与 locale 指令能够查询目前的语系数据与变量，也知道 <code>/etc/locale.conf</code> 其实就是语系的配置文件。</p><p>另外，系统的语系与你目前软件的语系数据可能是不一样的。还可以使用 localectl 来查询系统语系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># localectl</span>
   System Locale: <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8			<span class="token comment"># 语系系统</span>
       VC Keymap: cn
      X11 Layout: cn

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># locale</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8				<span class="token comment"># 下面的规则则是当前这个软件的语系数据</span>
<span class="token assign-left variable">LC_CTYPE</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_NUMERIC</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_TIME</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable">LC_COLLATE</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_MONETARY</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable">LC_MESSAGES</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_PAPER</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_NAME</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_ADDRESS</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_TELEPHONE</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_MEASUREMENT</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_IDENTIFICATION</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，一个是系统的语系，一个是当前这个 bash 的语系，可以通过如下方式修改系统语系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># localectl set-locale LANG=en_US.utf8</span>
<span class="token comment"># 之前讲过的这个是切换到文本模式</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># systemctl isolate multi-user.target</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># systemctl isolate graphical.target</span>
<span class="token comment"># 这里需要注意的是：虽然有时候看到的语言是 zh_CN.UTF-8，但是其实后面是没有斜杠的</span>
<span class="token comment"># 比如这里要换成中文的，那么就要设置成 zh_CN.utf8  才可以，不然看着设置成功了，但是图形界面还是英文的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启后，从感官上在终端模式你可能感受不到什么变化，但是你进入图形化界面，就会发现整个环境都变成英文的了</p><h2 id="🍀-防火墙简易设置" tabindex="-1"><a class="header-anchor" href="#🍀-防火墙简易设置" aria-hidden="true">#</a> 🍀 防火墙简易设置</h2><p>有网络没有防火墙是有点危险</p><p>防火墙其实是一种网络数据的过滤方式，它可以根据服务器启动的服务来设置是否放行，也能够针对你信任的用户来放行。这部分应该要对网络有点概念之后才来讨论比较好，所以详细的数据会写在服务器篇的内容。</p><p>目前 CentOS 7 的预设防火墙机制为 firewalld，它的管理主要是通过 firewall-cmd 指令，但是目前我们没有学习更多的防火墙与网络规则，想要了解 firewall-cmd 有点难，所以本小节仅适用图形界面来介绍防火墙的相关数据</p><figure><img src="`+p+'" alt="image-20200402103104786" tabindex="0" loading="lazy"><figcaption>image-20200402103104786</figcaption></figure><figure><img src="'+d+'" alt="image-20200403131250864" tabindex="0" loading="lazy"><figcaption>image-20200403131250864</figcaption></figure><ul><li><p>配置：「运行时」与「永久」的差异</p><p>基本上防火墙的规则大概有两种情况，暂时用来执行的规则与永久记录的规则。一般来说，刚刚启动防火墙时，这两种规则会一模一样。如果在运行时中你加上了几条规则测试后，没有写入永久记录里面的话，那么下次重新启动防火墙时，该规则就会消失</p></li><li><p>区域：根据不同的环境所设计的网络区域</p><p>玩过网络后，你可能会听说过所谓的本机网络、NAT 与 DMZ 等网域，同时可能还有可信任的（trusted）网域，或则是应该被抵挡（drop/block）的网域等等。这些网域各有特点，早期的 iptables 防火墙服务，所有的规则都需要你自己手动来编写，然后规则的细分需要自己去规划，所以很可能会导致一堆无法理解的规则</p><p>新的 firewalld 服务就预先设计这些可能会被用到的网络环境，里面的规则除了 public（公开网域）外，其他的区域则暂时为没有启动的状态</p><p>在本章只需要考虑 public 这个区域即可，其他的等你学习了服务器篇再讨论</p></li><li><p>相关设置项目</p><p>防火墙规则通常需要设置的地方有：</p><ul><li>服务：一般来说，如果是作为 internet 的服务器，提供的是比较一般的服务，只需要处理该项即可。默认你的服务器已经提供了 ssh 与 dhcpv6-client 的服务端口</li><li>端口：如果你提供的服务所启用的端口并不是正规的端口，比如为了玩 systemd 与 SELinux，我们曾经将 ssh 的端口调整到 222，那么如果你想过要让人家连进来，除了「服务」外，还需要对「端口调整」。另外如果某些比较特别的服务时 CentOS 预设没有提供的，所以在 「服务」中也是不存在的，这时可以直接通过端口来搞定</li><li>富规则：如果你有整个网域需要放行或者是拒绝的时候，那么前两个项目就无法适用了。</li><li>接口：该区域针对哪一个网卡来做限制。</li></ul><p>至于伪装、端口转发、ICMP 过滤器、来源等这里不介绍，这属于网络的概念知识，基础篇不讲解。</p></li></ul><p>下面进行练习示例：</p><ul><li>要作为 ssh、www、ftp、https 等正规端口的服务</li><li>同时与前几章搭配，需要放行 port 222 与 port 555</li><li>局域网络 192.168.1.0/24 这一段想要直接放行这段网域对我们服务器的联机</li></ul><p>以上需求需要怎么配置？因为需要永久生效，所以需要在永久里面去修改才行，同时因为永久设置比较重要，在进入时需要先进行授权（弹框让你输入密码）</p><figure><img src="'+u+'" alt="image-20200403132310377" tabindex="0" loading="lazy"><figcaption>image-20200403132310377</figcaption></figure><p>勾选上 ftp、http、https、ssh，勾选即生效了</p><p>下面进行端口的配置</p><figure><img src="'+r+`" alt="image-20200403132610040" tabindex="0" loading="lazy"><figcaption>image-20200403132610040</figcaption></figure><p>添加上 222 与 555 端口。</p><p>下面开始处理局域网络的放行，由于书上说是在富规则里面配置的，但是这个 UI 配置有点问题？所以使用命令来配置的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --permanent --add-rich-rule=&#39;rule family=&quot;ipv4&quot; source address=&quot;192.168.1.0/24&quot; accept&#39;</span>
success
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --reload</span>
success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命令之后，在界面上出现了配置，如下 <img src="`+m+'" alt="image-20200403133234683" loading="lazy"></p><figure><img src="'+v+'" alt="image-20200403133531975" tabindex="0" loading="lazy"><figcaption>image-20200403133531975</figcaption></figure>',46);function T(N,S){const a=l("ExternalLinkIcon");return c(),o("div",null,[k,h,g,n("p",null,[s("网络其实是很复杂的，要设置网络服务器，需要先了解 "),n("a",f,[s("网络基础"),e(a)]),s(" ，因为没有人愿意自己的服务器老是被攻击或则是网络问题层出不穷")]),_,n("p",null,[s("笔者是虚拟机，使用 "),n("a",y,[s("Host Only 方式与主机共享外网"),e(a)]),s(" ，上面获取到的网络参数也是从这个网络管理器里面设置的。这样就可以让你的虚拟机上网了")]),C])}const I=i(b,[["render",T],["__file","01.html.vue"]]);export{I as default};
