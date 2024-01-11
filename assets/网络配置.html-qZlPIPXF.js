import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,e as d}from"./app-2rf537eJ.js";const s={},l=d(`<h2 id="_1-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-配置文件" aria-hidden="true">#</a> 1. 配置文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/hosts （本地主机 ip 地址映射, 可以有多个别名）。

/etc/services （端口号与标准服务之间的对应关系）。

/etc/sysconfig/network （设置主机名，网关，域名）。

HOSTANME=zjw.com （主机名）（需要重启计算机才有效）

GATEWAY=192.168.1.1 （网关）

/etc/rc.d/init.d/network restart （脚本服务启动）

service network restart （同上，是命令执行）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-和-dns-相关" tabindex="-1"><a class="header-anchor" href="#_2-和-dns-相关" aria-hidden="true">#</a> 2. 和 DNS 相关</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/host.conf

/etc/nsswitch.conf

/etc/resolv.conf（配置 dns）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-网卡配置文件" tabindex="-1"><a class="header-anchor" href="#_3-网卡配置文件" aria-hidden="true">#</a> 3. 网卡配置文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/sysconfig/network-scripts/ifcfg-eth0

DEVICE=eth0（哪张网卡）

ONBOOT=yes

BOOTPROTO=static（静态 ip 状态设置）

BOOTPROTO=dhcp（dhcp 获取）

IPADDR=192.168.1.8（静态 ip 地址）

NETMASK=255.255.255.0

GATEWAY=192.168.1.1（网关）（如果在此设置网关，则上面的无效）

MACADDR=00:0C:29:96:38:F8（修改 mac 地址）（永久有效）

/etc/rc.d/init.d/network restart（脚本启动）

service network restart（命令启动）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-ip-配置方法及自动获取-ip" tabindex="-1"><a class="header-anchor" href="#_4-ip-配置方法及自动获取-ip" aria-hidden="true">#</a> 4. IP 配置方法及自动获取 ip</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ifconfig eth0 192.168.0.10 将采用默认子网掩码

ifconfig eth0 192.168.0.10 netmask 255.255.255.252 （手动定义子网掩码）

ifconfig eth0 up（激活网卡）

/etc/sysconfig/network-scripts/ifup eth0（脚本激活网卡）或者

ifup eth0（指向 /sbin/ifup 的符号链接）。注：修改 mac 地址，用此好像无效，切记。

ifconfig eth0 down（关闭网卡）

/etc/sysconfig/netowrk-scripts/ifdown eth0（脚本关闭网卡）或者

ifdown eth0（指向 /sbin/ifdown 的符号链接）

netconfig

是文本窗口的形式设置 IP 的命令, 修改好之后用

service network restart （让配置参数生效）

ifconfig eth0 -dynamic（手动设置获取 dhcp ip 地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-修改-mac-地址" tabindex="-1"><a class="header-anchor" href="#_5-修改-mac-地址" aria-hidden="true">#</a> 5. 修改 MAC 地址</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ifconfig eth0 down

ifconfig eth0 hw ether 00:00:0c:12:34:56

/etc/rd.d/init.d/network（上面的修改可存储在此脚本中）

ifconfig eth0 up

＃上面这种方法是在内核中修改，下次开机将还原

要永久有效在网卡配置文件中加入以下这一条：

MACADDR=00:00:0c:12:34:56

/etc/sysconfig/network-scripts/ifcfg-eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-常用测试命令" tabindex="-1"><a class="header-anchor" href="#_6-常用测试命令" aria-hidden="true">#</a> 6. 常用测试命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ping -c 4 172.16.1.1

route （对内核的 ip 路由表进行操作，主要对己配置的接口的主机或网络设置静态路由，如通过 ifconfig 程序配）

route add -net 192.168.1.0 netmask 255.255.255.0 eth0 （添加一条到 192.168.1.0 网络的路由条目）

route del -net 192.168.1.0 netmask 255.255.255.0 （删除路由条目）

route -C 查看缓冲表

route -n 查看本地路由表

traceroute 路由跟踪
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：netconfig、ifconfig、route 三者结合使用, 不用重启系统及服务。</p></blockquote><h2 id="_7-创建-adsl-连接" tabindex="-1"><a class="header-anchor" href="#_7-创建-adsl-连接" aria-hidden="true">#</a> 7. 创建 ADSL 连接</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -qa |grep rp-pppoe

rpm -ivh rp-pppoe* （将光盘）

route del default（删除默认路由）

adsl-setup （设置连接）

adsl-start （连接测试）

adsl-status （查看状态）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),a=[l];function r(v,c){return i(),n("div",null,a)}const m=e(s,[["render",r],["__file","网络配置.html.vue"]]);export{m as default};
