import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e}from"./app-CvlAI_tu.js";const t={},p=e(`<h1 id="centos-7-环境下大量建立账户的方法" tabindex="-1"><a class="header-anchor" href="#centos-7-环境下大量建立账户的方法" aria-hidden="true">#</a> CentOS 7 环境下大量建立账户的方法</h1><p>系统上如果有一堆账户，怎么判定某些账户是否存在一些问题？如何创建或删除大量账户？</p><p>这个肯定是需要用到 shell script 脚本的，下面一一介绍</p><h2 id="🍀-一些账户相关的检查工具" tabindex="-1"><a class="header-anchor" href="#🍀-一些账户相关的检查工具" aria-hidden="true">#</a> 🍀 一些账户相关的检查工具</h2><h3 id="pwck" tabindex="-1"><a class="header-anchor" href="#pwck" aria-hidden="true">#</a> pwck</h3><p>该指令会检查 <code>/etc/passwd</code> 账户配置文件内的信息，与实际的家目录是否存在，等信息、还可以比对 <code>/etc/passwd</code> 与 <code>/etc/shadow</code> 的信息是否一致、如果 <code>/etc/passwd</code> 内的数据字段错误时，会提示使用者。</p><p>一般来说，作者只是利用这个指令来检查输入是否正确</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># pwck</span>
user <span class="token string">&#39;ftp&#39;</span><span class="token builtin class-name">:</span> directory <span class="token string">&#39;/var/ftp&#39;</span> does not exist
user <span class="token string">&#39;saslauth&#39;</span><span class="token builtin class-name">:</span> directory <span class="token string">&#39;/run/saslauthd&#39;</span> does not exist
user <span class="token string">&#39;gluster&#39;</span><span class="token builtin class-name">:</span> directory <span class="token string">&#39;/run/gluster&#39;</span> does not exist
user <span class="token string">&#39;pulse&#39;</span><span class="token builtin class-name">:</span> directory <span class="token string">&#39;/var/run/pulse&#39;</span> does not exist
user <span class="token string">&#39;gnome-initial-setup&#39;</span><span class="token builtin class-name">:</span> directory <span class="token string">&#39;/run/gnome-initial-setup/&#39;</span> does not exist
pwck: no changes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面告知了这些账户没有家目录；仔细看由于大部分都是系统账户（的确不需要家目录）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 对应的群组检查</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># grpck</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pwconv" tabindex="-1"><a class="header-anchor" href="#pwconv" aria-hidden="true">#</a> pwconv</h3><p>该指令主要目的是将 <code>/etc/passwd</code> 账户与密码移动到 <code>/etc/shadow</code> 中。（早起的 Unix 中没有 shadow 文件，在 passwd 的第 2 字段）</p><p>使用 pwdconv 后：</p><ul><li><p>比对 <code>/etc/passwd</code> 和 <code>/etc/shadow</code></p><p>若 passwd 存在的账户并没有对应的 shadow 密码时，则 pwconv 会去 <code>/etc/login.defs</code> 获取相关的密码数据，并建立该账户的 shadow 数据</p></li><li><p>若 <code>/etc/passwd</code> 内存在加密后的密码数据时，则 pwconv 会将该密码栏移动到 <code>/etc/shadow</code> 中，并将原来的密码栏内容变更为 x</p></li></ul><p>所以该工具只是为了迁移早期的数据而存在的，对于现在几乎上没有啥用处了</p><h3 id="pwunconv" tabindex="-1"><a class="header-anchor" href="#pwunconv" aria-hidden="true">#</a> pwunconv</h3><p>该指令是将 <code>/etc/shadow</code> 内的密码栏数据写回 <code>/etc/passwd</code> 中，并且删除 <code>/etc/shadow</code> 文件</p><h3 id="chpasswd" tabindex="-1"><a class="header-anchor" href="#chpasswd" aria-hidden="true">#</a> chpasswd</h3><p>读取未加密前的密码，加密并将加密后的密码写入 <code>/etc/shadow</code></p><p>该指令可以用在大量建立账户的场景中，可以由 Standard input 读入数据，数据格式为 <code>username:password</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 比如：更新 mrcode3 账户的密码</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo &quot;mrcode3:123&quot; | chpasswd</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># grep mrcode3 /etc/shadow</span>
mrcode3:<span class="token variable">$6</span><span class="token variable">$v4wtD</span>/HDxmMD.F<span class="token variable">$tkpuAZ3Onx14Oa2YYqpD3CfZrexV0D18nolGGfl7cIcXG</span>/57r2S2S2oQzHjuiN4efmFYCOpHS.cK/.cVDk6zi/:18318::::::
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo &quot;mrcode3:123abv&quot; | chpasswd</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># grep mrcode3 /etc/shadow</span>
mrcode3:<span class="token variable">$6</span><span class="token variable">$kqggs</span>/OgGqR0ftc<span class="token variable">$zHF9FbcJqd0fWHNx4hGwWXcQgrjPosDcpDed7iH7</span>/LYb0tAOBerMvUzodNrX.K4UW5AUYs9S/DGaetJBD3xu6.:18318::::::
<span class="token comment"># 观察下密码栏的加密字符串，发现的确是被更新过了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它预设使用 <code>SHA512</code> 进行加密，想要更改就需要使用 <code>-c 和 -e</code> 选项来指定。不过从 CentOS 5.x 之后，passwd 指令已经添加了 <code>--stdin</code> 选项，可以说是替代了这里的功能</p><h2 id="🍀-大量建立账户模板-适用-passwd-stdin-选项" tabindex="-1"><a class="header-anchor" href="#🍀-大量建立账户模板-适用-passwd-stdin-选项" aria-hidden="true">#</a> 🍀 大量建立账户模板（适用 passwd --stdin 选项）</h2><p>下面是一个新站用户功能的脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> accountadd.sh

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># This shell script will create amount of linux login accounts for you.</span>
<span class="token comment"># 1. check the &quot;accountadd.txt&quot; file exist？ you must create that file manually</span>
<span class="token comment">#	one account name one line in the &quot;accountadd.txt&quot; file</span>
<span class="token comment"># 2. use openssl to create users password</span>
<span class="token comment"># 3. User must change his password in his first login</span>
<span class="token comment">#</span>
<span class="token comment"># 此命令行命令脚本将为您创建大量 Linux 登录。</span>
<span class="token comment"># 1.检查 &quot;accountadd.txt&quot; 文件是否存在？您必须手动创建该文件，一个账户一行</span>
<span class="token comment"># 2.使用 openssl 创建用户密码</span>
<span class="token comment"># 3.用户必须在首次登录时更改密码</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin

<span class="token comment"># 0. userinput</span>
<span class="token assign-left variable">usergroup</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>		<span class="token comment"># 如果你的账户需要次要组，在这里定义</span>
<span class="token assign-left variable">pwmech</span><span class="token operator">=</span><span class="token string">&quot;openssl&quot;</span>	<span class="token comment"># 如果是 openssl(生成随机数) 则使用 openssl 指令生成 base64 的 6 位数随机密码</span>
<span class="token assign-left variable">homeperm</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>		<span class="token comment"># 如果修改为 yes，则将该账户家目录权限修改为 711</span>

<span class="token comment"># 1. 检查 accountadd.txt 文件</span>
<span class="token assign-left variable">action</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${1}</span>&quot;</span>			<span class="token comment"># create 使用 useradd 指令、delete 使用 userdel 指令</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> accountadd.txt <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;accountadd.txt 文件不存在！&quot;</span>
	<span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token comment"># 如果有群组，则建立系统群组</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${usergroup}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">groupadd</span> <span class="token parameter variable">-r</span> <span class="token variable">\${usergroup}</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> outputpw.txt
<span class="token assign-left variable">usernames</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> accountadd.txt<span class="token variable">)</span></span>

<span class="token keyword">for</span> <span class="token for-or-select variable">username</span> <span class="token keyword">in</span> <span class="token variable">\${usernames}</span> 
<span class="token keyword">do</span>
	<span class="token keyword">case</span> <span class="token variable">\${action}</span> <span class="token keyword">in</span>
		<span class="token string">&quot;create&quot;</span><span class="token punctuation">)</span>
			<span class="token comment"># 存在组则拼接选项 -G 是为该用户添加次要群组</span>
			<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${usergroup}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">usegrp</span><span class="token operator">=</span><span class="token string">&quot; -G <span class="token variable">\${usergroup}</span> &quot;</span> <span class="token operator">||</span> <span class="token assign-left variable">usegrp</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
			<span class="token function">useradd</span> <span class="token variable">\${usegrp}</span> <span class="token variable">\${username}</span>	<span class="token comment"># 新增账户</span>
			<span class="token comment"># 如果没有值则使用用户名作为密码</span>
			<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${pwmech}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;openssl&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">usepw</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>openssl rand <span class="token parameter variable">-base64</span> <span class="token number">6</span><span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token assign-left variable">usepw</span><span class="token operator">=</span><span class="token variable">\${username}</span>
			<span class="token builtin class-name">echo</span> <span class="token variable">\${usepw}</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">\${username}</span>  <span class="token comment"># 创建密码</span>
			chage <span class="token parameter variable">-d</span> <span class="token number">0</span> <span class="token variable">\${username}</span>		<span class="token comment"># 配置首次登陆必须修改密码</span>
			<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${homeperm}</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;yes&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">711</span> /home/<span class="token variable">\${username}</span>
			<span class="token builtin class-name">echo</span> <span class="token string">&quot;username=<span class="token variable">\${username}</span>,password=<span class="token variable">\${usepw}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> outputpw.txt
		<span class="token punctuation">;</span><span class="token punctuation">;</span>
		<span class="token string">&quot;delete&quot;</span><span class="token punctuation">)</span>
			<span class="token builtin class-name">echo</span> <span class="token string">&quot;删除用户 <span class="token variable">\${username}</span>&quot;</span>
			<span class="token function">userdel</span> <span class="token parameter variable">-r</span> <span class="token variable">\${username}</span>			<span class="token comment"># -r 将用户家目录也删除</span>
		<span class="token punctuation">;</span><span class="token punctuation">;</span>
		*<span class="token punctuation">)</span>
			<span class="token builtin class-name">echo</span> <span class="token string">&quot;请使用：<span class="token variable">$0</span> [create|dellete]&quot;</span>
		<span class="token punctuation">;</span><span class="token punctuation">;</span>
	<span class="token keyword">esac</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本写好了，接下来进行测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> accountadd.txt

std01
std02
std03
std04
std05
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> accountadd.sh create
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># sh accountadd.sh create</span>
更改用户 std01 的密码 。
passwd：所有的身份验证令牌已经成功更新。
更改用户 std02 的密码 。
passwd：所有的身份验证令牌已经成功更新。
更改用户 std03 的密码 。
passwd：所有的身份验证令牌已经成功更新。
更改用户 std04 的密码 。
passwd：所有的身份验证令牌已经成功更新。
更改用户 std05 的密码 。
passwd：所有的身份验证令牌已经成功更新。

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cat outputpw.txt </span>
<span class="token assign-left variable">username</span><span class="token operator">=</span>std01,password<span class="token operator">=</span>s4j4jdwr
<span class="token assign-left variable">username</span><span class="token operator">=</span>std02,password<span class="token operator">=</span>G4iW/O6M
<span class="token assign-left variable">username</span><span class="token operator">=</span>std03,password<span class="token operator">=</span>HGO0rvI8
<span class="token assign-left variable">username</span><span class="token operator">=</span>std04,password<span class="token operator">=</span>17NAhvgS
<span class="token assign-left variable">username</span><span class="token operator">=</span>std05,password<span class="token operator">=</span>Q2CftODm

<span class="token comment"># 可以看到输出的账户和密码信息，你可以打印出来，一行一条裁剪，然后发给使用者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),o=[p];function c(l,i){return n(),a("div",null,o)}const u=s(t,[["render",c],["__file","07.html.vue"]]);export{u as default};