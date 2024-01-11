import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,a as n,d as s,b as a,e as t}from"./app-2rf537eJ.js";const r={},u=n("h2",{id:"解决-github-访问慢-无法访问",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解决-github-访问慢-无法访问","aria-hidden":"true"},"#"),s(" 解决 GitHub 访问慢/无法访问")],-1),d={href:"https://guozh.net/accelerate-access-to-github/",target:"_blank",rel:"noopener noreferrer"},b=t('<p>Github 有很多优质资源，甚至有些开源免费的资源，比付费的还好用。</p><p>我今天快速分享几个方法，希望能帮你解决这个问题。</p><p>第一种方法是修改 host 文件，</p><p>像 Github 这种国际性大公司，肯定全球各个国家都部署了服务，虽然全球不同国家的用户都是访问同一个域名 ，比如，日本和澳大利亚的网友都访问 github.com，但背后访问的服务器不是同一个，为了提高访问速度，肯定优先访问本地服务器的服务。日本访问日本节点的服务器，澳大利亚访问澳大利亚。</p><p>这里实现的方式就是利用 DNS 域名解析服务器，这个解析服务器相当一个中间件一样，记录这域名和 IP 的映射关系。</p><p>本来是很正常的，但国内因为一些原因，大家都懂得，Github 并没有中国的节点，所以，DNS 域名解析服务器会将域名解析到海外服务器去了。这就导致国内用户访问 Github 很慢。</p><p>但海外国家很多，我们可以挑选一些离我们近的国家，访问 Github 部署在他们国家的服务器，这样访问速度可能会快点。</p><p>这里我们需要做两步，第一，找出国内访问 Github 的哪个节点速度会比较块，第二，将找到的节点 IP 在 Host把文件修改，确定域名和 IP 的映射关系。这样，域名就能直接访问到 IP 对应的服务器。</p><h2 id="github520" tabindex="-1"><a class="header-anchor" href="#github520" aria-hidden="true">#</a> Github520</h2>',9),p={href:"https://github.com/521xueweihan/GitHub520",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>复制如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># GitHub520 Host Start</span>
<span class="token number">140.82</span>.112.25                 alive.github.com
<span class="token number">140.82</span>.112.25                 live.github.com
<span class="token number">185.199</span>.108.154               github.githubassets.com
<span class="token number">140.82</span>.114.21                 central.github.com
<span class="token number">185.199</span>.108.133               desktop.githubusercontent.com
<span class="token number">185.199</span>.108.153               assets-cdn.github.com
<span class="token number">185.199</span>.108.133               camo.githubusercontent.com
<span class="token number">185.199</span>.108.133               github.map.fastly.net
<span class="token number">199.232</span>.69.194                github.global.ssl.fastly.net
<span class="token number">140.82</span>.112.4                  gist.github.com
<span class="token number">185.199</span>.108.153               github.io
<span class="token number">140.82</span>.113.3                  github.com
<span class="token number">192.0</span>.66.2                    github.blog
<span class="token number">140.82</span>.114.5                  api.github.com
<span class="token number">185.199</span>.108.133               raw.githubusercontent.com
<span class="token number">185.199</span>.108.133               user-images.githubusercontent.com
<span class="token number">185.199</span>.108.133               favicons.githubusercontent.com
<span class="token number">185.199</span>.108.133               avatars5.githubusercontent.com
<span class="token number">185.199</span>.108.133               avatars4.githubusercontent.com
<span class="token number">185.199</span>.108.133               avatars3.githubusercontent.com
<span class="token number">185.199</span>.108.133               avatars2.githubusercontent.com
<span class="token number">185.199</span>.108.133               avatars1.githubusercontent.com
<span class="token number">185.199</span>.108.133               avatars0.githubusercontent.com
<span class="token number">185.199</span>.108.133               avatars.githubusercontent.com
<span class="token number">140.82</span>.114.9                  codeload.github.com
<span class="token number">54.231</span>.200.129                github-cloud.s3.amazonaws.com
<span class="token number">52.217</span>.33.196                 github-com.s3.amazonaws.com
<span class="token number">52.216</span>.93.147                 github-production-release-asset-2e65be.s3.amazonaws.com
<span class="token number">52.216</span>.93.147                 github-production-user-asset-6210df.s3.amazonaws.com
<span class="token number">52.217</span>.207.33                 github-production-repository-file-5c1aeb.s3.amazonaws.com
<span class="token number">185.199</span>.108.153               githubstatus.com
<span class="token number">64.71</span>.144.211                 github.community
<span class="token number">23.100</span>.27.125                 github.dev
<span class="token number">140.82</span>.113.21                 collector.github.com
<span class="token number">13.107</span>.42.16                  pipelines.actions.githubusercontent.com
<span class="token number">185.199</span>.108.133               media.githubusercontent.com
<span class="token number">185.199</span>.108.133               cloud.githubusercontent.com
<span class="token number">185.199</span>.108.133               objects.githubusercontent.com
<span class="token comment"># Update time: 2022-06-04T08:20:22+08:00</span>
<span class="token comment"># Update url: https://raw.hellogithub.com/hosts</span>
<span class="token comment"># Star me: https://github.com/521xueweihan/GitHub520</span>
<span class="token comment"># GitHub520 Host End</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找到电脑上 hosts 文件地址。</p><p>Windows：<code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></p><p>Mac：<code>/etc/hosts</code></p><p>接着以管理员身份用文本编辑器打开 hosts 文件，如果右键目录里没管理员身份运行选项，那就修改 hosts 文件权限。</p><p><em><strong>右键-属性-安全-编辑</strong></em> ，选择登录电脑的用户名，将权限修改成完全控制，也就是获取读写权限。</p><p>修改完成再用文本编辑器打开，将上面 Github 的映射 IP 都复制粘贴到最后面。</p><p>最后再刷新 DNS 缓存，使用 CMD 打开 DOSS 界面，输入命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipconfig /flushdns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mac 用户使用如下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo killall -HUP mDNSResponder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>OK，各位可以再打开 Github 看看，访问速度是否有提高。</p><p>刚才这是手动的方式，这种方式的弊端就是解析 IP 有更新，我们又得复制粘贴，修改 hosts 内容。作者也提供自动方式。</p><p>先下载管理 hosts 文件的软件，如果你的电脑上有这样的软件，可以跳过下载安装软件这一步。</p>`,15),h={href:"https://github.com/oldj/SwitchHosts",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/oldj/SwitchHosts/releases",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SwitchHosts_installer_4.1.1.6077.exe 普通 Windows64 位
SwitchHosts_mac_universal_4.1.1.6077.dmg Mac 通用版
SwitchHosts_mac_arm64_4.1.1.6077.dmg Mac ARM 芯片版本（猜测）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载安装到电脑上，添加一个远程类型 hosts 解析规则。</p>`,2),_={href:"https://raw.hellogithub.com/hosts",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"https://raw.hellogithub.com/hosts",-1),f=n("p",null,"这样，每次作者更新 IP 后，都会自动更新到这个地址，我们都能加载获取最新的 IP。",-1),x=n("h2",{id:"fastgithub",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fastgithub","aria-hidden":"true"},"#"),s(" FastGithub")],-1),G={href:"https://github.com/dotnetcore/FastGithub",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/dotnetcore/FastGithub/releases",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,"下载解压到本地，双击打开。",-1),H=n("p",null,"打开 Doss 命令窗，软件作用就生效，能加速访问 Github，使用期间不要关闭窗口。",-1);function I(P,M){const e=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",d,[s("来源"),a(e)])]),b,n("p",null,[s("第一步不用我们做了，有网友维护了 Github 最新、最好的节点。当然，这个作者也将它们开源到 "),n("a",p,[s("Github"),a(e)]),s("。")]),m,n("p",null,[s("如果没有，作者推荐使用 "),n("a",h,[s("SwitchHosts"),a(e)]),s(" 工具，这同样也是一个开源免费的软件。支持 Windows、Mac、Linux。")]),n("p",null,[s("在"),n("a",v,[s("下载页面"),a(e)]),s("，找到符合你电脑操作系统的软件。")]),g,n("p",null,[s("这是 "),n("a",_,[s("URL"),a(e)]),s(" : "),k]),f,x,n("p",null,[s("第二种方案更加简单，只要下载软件就行了。这个项目叫 "),n("a",G,[s("Github 加速神器"),a(e)]),s("，解决 Github 打不开、用户头像无法加载、releases 无法上传下载、git-clone、git-pull、git-push 失败等问题。")]),n("p",null,[s("在"),n("a",w,[s("下载页面"),a(e)]),s("下载你需要的软件，同样支持 Mac、Windows、Linux。")]),S,H])}const z=i(r,[["render",I],["__file","Github访问慢.html.vue"]]);export{z as default};
