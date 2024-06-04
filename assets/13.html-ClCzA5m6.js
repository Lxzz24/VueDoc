import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as s,c as a,a as l,b as r,w as t,d as g,e as o}from"./app-CvlAI_tu.js";const u={},m={class:"hint-container details"},p=l("summary",null,"目录",-1),c={class:"table-of-contents"},d=g('<blockquote><p>2 分左右</p></blockquote><h2 id="🍀-防火墙-firewall" tabindex="-1"><a class="header-anchor" href="#🍀-防火墙-firewall" aria-hidden="true">#</a> 🍀 防火墙 Firewall</h2><p>防火墻（Firewall）是建立在内外网络边界上的<em>过滤封锁机制</em>，它认为<em>内部网络</em>是<strong>安全和可信赖的</strong>，而<em>外部网络</em>是<strong>不安全和不可信赖的</strong>。</p><p>防火墻的<strong>作用</strong>是防止不希望的、未经授权地进出被保护的内部网络，通过边界控制强化内部网络的安全策略。</p><p>防火墙作为网络安全体系的基础和核心控制设施，贯穿于受控网络通信主干线，对通过受控干线的任何通信行为进行安全处理，如 <strong>控制</strong>、<strong>审计</strong>、<strong>报警</strong> 和 <strong>反应</strong> 等，同时也承担着繁重的<em>通信任务</em>。由于其自身处于网络系统中的敏感位置，自身还要面对各种安全威胁，因此，选用一个安全、稳定和可靠的防火墻产品，其重要性不言而喻。</p><p>防火墙技术经历了<strong>包过滤</strong>、<strong>应用代理网关</strong>和<strong>状态检测技术</strong>三个发展阶段。</p><ol><li><u>包过滤防火墙</u><ul><li>一般有一个包检查块（包过滤器）。</li><li>数据包过滤可以根据数据包头中的各项信息来控制<em>站点与站点</em>、<em>站点与网络</em>、<em>网络与网络</em>之间的<strong>相互访问</strong>，但无法控制传输数据的内容（因为内容是<em>应用层数据</em>，而包过滤器处在网络 TCP 层和数据链路 IP 层之间，<em>对网络层的数据报文进行检查</em>）。</li><li><em>对用户完全透明</em>、速度较快，对包实行<strong>低水平控制</strong>，每个 IP 包的字段都被检查，如<em>源地址、目的地址、协议和端口</em>等。</li><li><strong>缺点</strong>：不能防范黑客攻击，因为网关不可能区分出可信网络与不可信网络的界限；不支持应用层协议，因为它不识别数据包中的应用层协议，访问控制粒度太粗糙；不能处理新的安全威胁。</li></ul></li><li><u>应用代理网关防火墙</u><ul><li><strong>彻底隔断内网与外网的直接通信</strong>，内网用户对外网的访问变成防火墙 对外网的访问，然后再由防火墙转发给内网用户。</li><li>所有通信都必须经应用层代理软件转发，访问者任何时候都不能与服务器建立直接的TCP 连接，应用层的协议会话过程必须符合代理的安全策略要求。</li><li><em>优点</em>：可以检查应用层、传输层和网络层的协议特征，对数据包的检测能力比较强。</li><li><strong>缺点</strong>：难以配置；处理速度非常慢。</li></ul></li><li><u>状态监测技术防火墙</u>* <ul><li>状态检测技术防火墙结合了代理防火墙的<strong>安全性</strong>和包过滤防火墙的<strong>高速度</strong>等优点，在不损失安全性的基础上，提高了代理防火墙的性能。</li><li>状态检测防火墙在防火墙的核心部分建立<strong>状态连接表</strong>，并将进出网络的数据当成一个个的会话，利用状态表跟踪每一个会话状态。状态监测对每一个包的检查不仅根据规则表，更考虑了数据包是否符合会话所处的状态，因此<em>提供了完整的对传输层的控制能力</em>，同时也<em>改进了流量处理速度</em>。因为它采用了一系列优化技术，使防火墻性能大幅度提升，能应用在各类网络环境中，尤其是在一些规则复杂的大型网络上。</li><li>一个防火墙系统通常是由<strong>过滤路由器</strong>和<strong>代理服务器</strong>组成。 <ul><li>过滤路由器是一个多端口的 IP 路由器，它能够拦截和检查所有出站和进站的数据。</li><li>代理服务器防火墙使用一个客户程序与特定的中间结点（防火墙）连接，然后中间结点与期望的服务器进行实际连接。</li></ul></li><li>这样，内部与外部网络之间不存在直接连接，因此，即使防火墙发生了问题，外部网络也无法获得与被保护的网络的连接。</li><li>典型防火墻的体系结构分为<strong>包过滤路由器</strong>、<strong>双宿主主机</strong>、<strong>屏蔽主机网关</strong>和<strong>被屏蔽子网</strong>等类型。</li></ul></li></ol><h2 id="🍀-病毒" tabindex="-1"><a class="header-anchor" href="#🍀-病毒" aria-hidden="true">#</a> 🍀 病毒</h2><p>计算机病毒的<em>特征</em>包括：传播性、隐蔽性、感染性、潜伏性、触发性、破坏性等</p><p>worm 表示蠕虫病毒、Trojan 表示特洛伊木马（<em>有未知程序试图建立网络连接</em>）、Backdoor 表示后门病毒、Macro 表示宏病毒</p><p><strong>宏病毒</strong>感染的对象主要是文本文档、电子表格等</p><p><strong>木马软件</strong>：冰河、X 卧底</p><p><strong>蠕虫病毒</strong>：欢乐时光、熊猫烧香、红色代码、爱虫病毒、震网</p><h2 id="🍀-网络攻击" tabindex="-1"><a class="header-anchor" href="#🍀-网络攻击" aria-hidden="true">#</a> 🍀 网络攻击</h2><ul><li><p><u><strong>拒绝服务攻击</strong>（Dos 攻击）</u>：</p><ul><li>目的是使计算机或网络无法提供正常的服务。</li><li>拒绝服务攻击是<em>不断向计算机发起请求</em>来实现的</li><li>DDoS 攻击、SYN Flooding 攻击</li></ul></li><li><p><u><strong>重放攻击</strong></u>：</p><ul><li>攻击者发送一个目的主机已经接受过的报文来达到攻击目的。</li><li>攻击者利用网络监听或者其他方式盗取认证凭据，之后再重新发送给认证服务器。</li><li>主要用于身份认证过程，目的是<em>破坏认证的正确性</em>。</li></ul></li><li><p><u>口令入侵攻击*</u>：使用某些合法用户的<em>账号</em>和<em>口令</em>登录到目的主机，然后再实施攻击活动。</p></li><li><p><u>特洛伊木马*</u>：被<em>伪装成程序或游戏</em>，当用户下载了带有木马的软件或附件时，这个程序就会向黑客发起连接请求，建立连接后黑客就实施攻击活动。</p></li><li><p><u>端口欺骗攻击*</u>：采用端口扫描找到系统漏洞从而实施攻击。</p></li><li><p><u>网络监听*</u>：攻击者可以接收某一网段在同一条物理通道上传输的所有信息，使用网络监听可以轻松截取包括账号和口令在内的信息资料。</p></li><li><p><u>IP 欺骗攻击*</u>：产生的 IP 数据包为伪造的源 IP 地址，以便冒充其他系统或发件人的身份。</p><ul><li>ARP 攻击，伪造 IP 地址和 MAC 地址，在网络中产生大量的 ARP 通信量使网络阻塞。ARP 攻击一般会将 MAC 地址改为发起 ARP 攻击的主机地址（<em>伪造网关 ARP 报文使得数据包无法发送到网关</em>），造成无法跨网段通信。</li></ul></li><li><p><u><strong>Sql 注入攻击</strong></u>：是黑客对数据库进行攻击的常用手段之一。</p><ul><li>没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。</li><li>攻击者可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，首先<strong>获取数据库的权限</strong>，就可获取用户账号和口令信息，以及对某些数据修改等。</li></ul></li><li><p><em>入侵检测技术</em>：专家系统、模型检测、简单匹配</p></li></ul><h2 id="🍀-网络安全" tabindex="-1"><a class="header-anchor" href="#🍀-网络安全" aria-hidden="true">#</a> 🍀 网络安全</h2><ul><li><p><strong>SSL</strong>（Secure Socket Layer，安全套接层，端口号 443）是 Netscape 于 1994 年开发的<strong>传输层</strong>安全协议，用于实现 Web 安全通信。1996 年发布的 SSL 3.0 协议草案已经成为一个事实上的 Web 安全标准。</p></li><li><p><strong>TLS</strong>（Transport Layer Security，传输层安全协议，端口号）是 IETF 制定的协议，它建立在 SSL 3.0 协议规范之上，是 SSL3.0 的后续版本。</p></li><li><p>终端设备与远程站点之间建立<strong>安全连接</strong>的协议是 <strong>SSH</strong>。SSH 为 Secure Shell 的缩写，是由 IETF 制定的建立在<em>应用层和传输层</em>基础上的安全协议。SSH 是专为<em>远程登录会话</em>和其他网络服务提供安全性的协议。利用 SSH 协议可以有效<strong>防止</strong>远程管理过程中的<strong>信息泄露</strong>问题。SSH 最初是 UNIX 上的程序，后来又迅速扩展到其他操作平台。</p></li><li><p><strong>HTTPS</strong>（Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的 HTTP 通道，即<em>使用 SSL 加密算法的 HTTP</em>。</p></li><li><p><strong>MIIME</strong>（Multipurpose Internet Mail Extensions，多用途互联网<strong>邮件</strong>扩展类型）是一个互联网标准，扩展了电子邮件标准，使其能够支持：非 ASCII 字符文本，非文本格式附件（二进制、声音、图像等），由多部分（multiple parts）组成的消息体，包含非 ASCII 字符的头信息（Header information）。</p></li><li><p><strong>PGP</strong> （Pretty Good Privacy，优良保密协议）是一个基于 <strong>RSA</strong> 公匙加密体系的<strong>邮件加密软件</strong>。可以用它对邮件保密以防止非授权者阅读，还能对邮件加上数字签名从而使收信人可以确认邮件的发送方。</p></li></ul><h2 id="🍀-杂题" tabindex="-1"><a class="header-anchor" href="#🍀-杂题" aria-hidden="true">#</a> 🍀 杂题</h2><ul><li>内部网关协议包括：RIP、OSPF、IS-IS、IGRP、EIGRP</li><li>外部网关协议包括：BGP</li><li>UDP是不可靠、无连接的协议</li></ul><p>信息安全包括 5 个基本要素：机密性（确保信息不暴露给未授权的实体/进程）、完整性（只有得到允许才能修改数据，并能判别数据是否被篡改）、可用性、可控性与可审查性。</p>',20);function h(S,_){const e=n("router-link");return s(),a("div",null,[l("details",m,[p,l("nav",c,[l("ul",null,[l("li",null,[r(e,{to:"#🍀-防火墙-firewall"},{default:t(()=>[o("🍀 防火墙 Firewall")]),_:1})]),l("li",null,[r(e,{to:"#🍀-病毒"},{default:t(()=>[o("🍀 病毒")]),_:1})]),l("li",null,[r(e,{to:"#🍀-网络攻击"},{default:t(()=>[o("🍀 网络攻击")]),_:1})]),l("li",null,[r(e,{to:"#🍀-网络安全"},{default:t(()=>[o("🍀 网络安全")]),_:1})]),l("li",null,[r(e,{to:"#🍀-杂题"},{default:t(()=>[o("🍀 杂题")]),_:1})])])])]),d])}const I=i(u,[["render",h],["__file","13.html.vue"]]);export{I as default};