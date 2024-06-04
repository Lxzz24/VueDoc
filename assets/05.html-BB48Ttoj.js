import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const i="/VueDoc/assets/markdown-img-paste-20191017222127697-B5m15Dgx.png",l="/VueDoc/assets/markdown-img-paste-20191017230245150-BtLhGaXW.png",c={},t=e(`<p>很有用的功能之一，需要搜索某个文件在哪个位置，因为很多软件的配置文件名是不变的， 但是各 distribution 放置的目录则不同。要把位置找出来才能修改配置</p><h2 id="🍀-脚本文件名的搜索" tabindex="-1"><a class="header-anchor" href="#🍀-脚本文件名的搜索" aria-hidden="true">#</a> 🍀 脚本文件名的搜索</h2><p>我们已经知道在终端模式下，连续两次「tab」有指令补全的功能，能展示出想匹配的指令， 那么这些指令在哪里呢?</p><h3 id="which-搜索执行文档" tabindex="-1"><a class="header-anchor" href="#which-搜索执行文档" aria-hidden="true">#</a> which 搜索执行文档</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> <span class="token punctuation">[</span>-a<span class="token punctuation">]</span> <span class="token builtin class-name">command</span>

-a：将所有 <span class="token environment constant">PATH</span> 目录中可以找到的指令均累出，而不止第一个被找到的指令名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 搜索 ifconfig 这个指令完整文件名</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># which ifconfig</span>
/sbin/ifconfig

<span class="token comment"># 查看 which 在哪个位置</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># which which</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">which</span><span class="token operator">=</span><span class="token string">&#39;alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde&#39;</span>
        /bin/alias
        /usr/bin/which

<span class="token comment"># 这里发现了两个 which，其中一个是 alias</span>
<span class="token comment"># alias 是指令的别名，输入 which 后，就等于属于了等于后面的那一串指令</span>
<span class="token comment"># 更多的数据在后续的 bash 章节中讲解</span>

<span class="token comment"># 找出 history 指令的完整文档名</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># which history</span>
/usr/bin/which: no <span class="token function">history</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>/usr/lib64/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin<span class="token punctuation">)</span>
<span class="token comment"># 上面在列出的目录中没有找到</span>
<span class="token comment"># 下面报错没有 --help 这个选项</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># history --help</span>
-bash: history: --: 无效选项
history: 用法:history <span class="token punctuation">[</span>-c<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d 偏移量<span class="token punctuation">]</span> <span class="token punctuation">[</span>n<span class="token punctuation">]</span> 或 <span class="token function">history</span> <span class="token parameter variable">-anrw</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span> 或 <span class="token function">history</span> <span class="token parameter variable">-ps</span> 参数 <span class="token punctuation">[</span>参数<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面 history 为什么找不到？</p><ul><li>which 根据 PATH 环境变量中的目录来搜索的</li><li>只能找出执行文件</li><li>history 是 bash 内置的指令</li></ul><p>history 不在 PATH 内的目录中，是 bash <strong>内置的指令</strong>， 但是可以通过 type 指令，后续章节 bash 详解</p><h2 id="🍀-文件名的搜索" tabindex="-1"><a class="header-anchor" href="#🍀-文件名的搜索" aria-hidden="true">#</a> 🍀 文件名的搜索</h2><p>linux 中有许多搜索指令，通常 find 不很常用，因为速度慢，操硬盘（啥意思？）， 一般先用 whereis 或则是 locate 来检查，如果找不到，则用 find 来搜索。</p><ul><li>whereis 只找系统中某些特定目录下的文件，速度快</li><li>locate 则利用数据库来搜索文件名的，速度块</li><li>find 搜索全磁盘内的文件系统状态，耗时</li></ul><h3 id="whereis-由一些特定的目录中搜索文件名" tabindex="-1"><a class="header-anchor" href="#whereis-由一些特定的目录中搜索文件名" aria-hidden="true">#</a> whereis 由一些特定的目录中搜索文件名</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">whereis</span> <span class="token punctuation">[</span>-bmsu<span class="token punctuation">]</span> 文件或目录名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>l：列出 whereis 会去查询的几个主要目录</li><li>b：只找 binary 格式的文件</li><li>m：只找在说明文件 manual 路径下的文件</li><li>s：只找 source 来源文件</li><li>u：搜索不在上述三个选项中的其他特殊文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找到 ifconfig 文件名</span>
<span class="token comment"># 下面发现找到了两个包含 ifconfig 的</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># whereis ifconfig</span>
ifconfig: /usr/sbin/ifconfig /usr/share/man/man8/ifconfig.8.gz

<span class="token comment"># 找到与 passwd 有关的说明文件文件名（man page）</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># whereis passwd</span>
passwd: /usr/bin/passwd /etc/passwd /usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz

<span class="token comment"># 这里添加 -m 参数就只找说明文件了</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># whereis -m passwd</span>
passwd: /usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>whereis 主要是针对 /bin/sbin 下的执行文件、/usr/share/man 下的 man page 文件、和几个特定的目录，所以速度块很多，由于不是全盘查找，可能找不到你想要的文件，可以使用 whereis -l 来显示具体会找那些目录</p><h3 id="locate-updatedb" tabindex="-1"><a class="header-anchor" href="#locate-updatedb" aria-hidden="true">#</a> locate / updatedb</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">locate</span> <span class="token punctuation">[</span>-ir<span class="token punctuation">]</span> keyword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>i：忽略大小写的差异</li><li>c：不输出文件名，仅计算找到的文件数量</li><li>l：仅输出几行，例如输出五行则是 -l 5</li><li>S：输出 locate 所使用的数据库文件相关信息，包括该数据库记录的文件/目录数量等</li><li>r：后面可接正规表示法的显示方式</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找出系统中所有与 passwd 先关的文件名，且只列出 5 个</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># locate -l 5 passwd</span>
/etc/passwd
/etc/passwd-
/etc/pam.d/passwd
/etc/security/opasswd
/usr/bin/gpasswd
<span class="token comment"># 可以看到找到了 9 前多个相关的</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># locate -c 5 passwd</span>
<span class="token number">9863</span>

<span class="token comment"># 列出 locate 查询所使用的数据库文件与各数据数量</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># locate -S</span>
数据库 /var/lib/mlocate/mlocate.db:
        <span class="token number">11,623</span> 文件夹
        <span class="token number">153,170</span> 文件
        <span class="token number">7,466</span>,565 文件名中的字节数
        <span class="token number">3,468</span>,856 字节用于存储数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>locate 可以其实就是模糊搜索，只要包含关键词的文件名都会被匹配，他是他有一个限制， 查找的数据是已建立的数据库 /var/lib/mlocate 里面的数据来搜索的。</p><p>该数据库建立默认是每天执行一次（每个 distribution 不同，CentOS 7 是每天更新一次数据库）， 所以能搜索到的结果是有延迟的</p><p>可以手动触发数据库的更新，直接使用 updatedb 指令就可以</p><ul><li><p>updatedb</p><p>根据 /etc/updatedb.config 的设置去搜索系统盘内的文件名，并更新到 /var/lib/mlocate 数据库文件内</p></li><li><p>locate：从 /var/lib/mlcate 内的数据库中搜索关键词</p></li></ul><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token punctuation">[</span>action<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="与时间有关的参数" tabindex="-1"><a class="header-anchor" href="#与时间有关的参数" aria-hidden="true">#</a> 与时间有关的参数</h4><p>与时间有关的参数有 -atime、-ctime、-mtime，以 -mtime 说明：</p><ul><li>mtime n：在 n 天前的「一天之内」被修改过内容的文件</li><li>mtime +n：列出在 n 天之前（不含 n 本身）被修改过内容的文件</li><li>mtime -n：列出在 n 天之内（含 n 天本身）被修改过内容的文件</li><li>newer file：file 为一个存在的文件，列出比 file 还要新的文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将过去系统上 24 小时内有更动过内容（mtime）的文件列出</span>
<span class="token function">find</span> / <span class="token parameter variable">-mtime</span> <span class="token number">0</span>
<span class="token comment"># 0 表示当前时间，也就是当前时间开始往前 24 小时，也就是 24 小时内被修改过的文件</span>

<span class="token comment"># 3 天前，24 小时内，如下</span>
<span class="token function">find</span> / <span class="token parameter variable">-mtime</span> <span class="token number">3</span>

<span class="token comment"># 寻找 /etc 下的文件，如果文件日期比 /etc/passwd 新旧列出</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-newer</span> /etc/passwd

<span class="token comment"># 列出 4 天内被更动多的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-mtime</span> <span class="token parameter variable">-4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mtime 选项的 n 正负数差别表示不同的含义，图示如下</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>+4</code>：表示大于等于 5 天前的</li><li><code>-4</code>：表示小于等于 4 天内的</li><li>4：表示 4~5 哪一天的文件</li></ul><h4 id="与使用者或组名有关的参数" tabindex="-1"><a class="header-anchor" href="#与使用者或组名有关的参数" aria-hidden="true">#</a> 与使用者或组名有关的参数</h4><ul><li><p>uid n：n 为数字，是用户的账户 ID（UID)，UID 记录在 /etc/passwd 里面与账户名称对于的数字。后续介绍</p></li><li><p>gid n：n 为数字，是组名的 ID，记录在 /etc/group 文件中</p></li><li><p>user name：name 为使用者账户名称，如 mrcode</p></li><li><p>group name：name 为组名</p></li><li><p>nouser：寻找文件的拥有者不存在 /etc/passwd 的人</p></li><li><p>nogroup：寻找文件的拥有群组不存在 /etc/group 的文件</p><p>当你自行安装软件时，很可能该软件的属性当中并没有文件拥有者，这个时候就可以使用 nouser 与 nogroup</p></li></ul><p>实践与练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找 /home 下属于 mrcode 的文件</span>
<span class="token function">find</span> /home/ <span class="token parameter variable">-user</span> mrcode
<span class="token comment"># 比较有用，如找到一个用户在系统中的所有文件时</span>

<span class="token comment"># 查找系统中不属于任何人的文件</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># find / -nouser</span>
find: ‘/proc/19655/task/19655/fd/5’: 没有那个文件或目录
find: ‘/proc/19655/task/19655/fdinfo/5’: 没有那个文件或目录
find: ‘/proc/19655/fd/6’: 没有那个文件或目录
find: ‘/proc/19655/fdinfo/6’: 没有那个文件或目录
find: ‘/proc/19657’: 没有那个文件或目录
find: ‘/proc/19668’: 没有那个文件或目录
find: ‘/proc/19669’: 没有那个文件或目录
find: ‘/proc/19670’: 没有那个文件或目录

<span class="token comment"># 这里没有找出来，但是报错了一些目录不存在，不知道是啥原因</span>
<span class="token comment"># 透过这个指令，可以轻易的找出那些不太正常的文件，如果找到了，那么有可能是正常的，比如你以源码编译软件时</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nouser 和 nogroup 的选项，除了你自行由网络上面下载文件时会发生之外，如果你将系统里面某个账户删除了， 但是该账户以及在系统内建立了很多文件，那么就可能发生 nouser 和 nogroup 的文件</p><h4 id="与文件权限及名称有关的参数" tabindex="-1"><a class="header-anchor" href="#与文件权限及名称有关的参数" aria-hidden="true">#</a> 与文件权限及名称有关的参数</h4><ul><li><p>name filename：查找文件名为 filename 的文件</p></li><li><p>size [-+]SIZE：查找比 SIZE 还要大（+）或则小（-）的文件</p><p>SIZE 支持的单位有：</p><ul><li>c：byte</li><li>k：1024 byte</li></ul><p>所以要查找 比 50 KB 还要大的文件，指令为 <code>find /home/ -size +50ks</code></p></li><li><p>type TYPE：查找文件类型为 TYPE 的。主要有</p><ul><li>f：一般正规文件</li><li>b,c：装置文件</li><li>d：目录</li><li>l：连接</li><li>s：socket</li><li>p：FIFO</li></ul></li><li><p>perm mode：查找文件权限「刚好等于」mode 的文件，mode 为类似 chmod 的属性。</p><p>例如：-rwsr-xr-x 的属性为 4755</p></li><li><p>perm -mode：查找文件权限「必须要全部包括 mode 的权限」的文件</p><p>例如：查找 -rwxr--r-- ，即 0744 的文件，使用 -perm -0744</p></li><li><p>perm /mode：查找文件权限「包含任意 mode 的权限」的文件</p><p>例如：-rwxr-xr-x，即 -perm /755 时，但一个属性属性为 -rw------ 也会被列出来， 因为他有 -rw 的属性存在</p></li></ul><p>实践与练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找出文件名为 passwd 的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token function">passwd</span>

<span class="token comment"># 找出包含了 passwd 关键词的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot;*passwd*&quot;</span>

<span class="token comment"># 找出 /run 目录下，文件类型为 socket 的文件</span>
<span class="token function">find</span> /run <span class="token parameter variable">-type</span> s
<span class="token comment"># -type 属性也很有用，可以找出那些怪异的文件</span>
<span class="token comment"># 列入 socket 与 FIFO 文件，可以使用 find /run -type p 或 -type s 来找</span>

<span class="token comment"># 查找文件中含有 SGID 或 SUID 或 SBIT 的属性</span>
<span class="token function">find</span> / <span class="token parameter variable">-perm</span> /7000
<span class="token comment"># 7000 就是 ---s--s--t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面范例中比较有趣的是 -perm 可以找出特殊权限的文件，SUID 与 SGID 都可以设置在二进制文件上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找出 /usr/bin /usr/sbin 具有 SUID 或 SGID 的文件</span>
<span class="token function">find</span> /usr/bin /usr/sbin <span class="token parameter variable">-perm</span> /6000
<span class="token comment"># SUID=4、SGID=2、SBIT=1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="额外可以进行的动作" tabindex="-1"><a class="header-anchor" href="#额外可以进行的动作" aria-hidden="true">#</a> 额外可以进行的动作</h4><ul><li>exec command：command 为其他指令，-exec 后面可再接额外的指令来处理搜索到的结果</li><li>print：将结果打印到屏幕上，这个动作是预设的，不然不会看到结果</li></ul><p>实践与练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将上个范例找到的文件使用 ls -l 列出来</span>
<span class="token function">find</span> /usr/bin /usr/sbin <span class="token parameter variable">-perm</span> /6000 <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token comment"># -exec 后面的 ls -l 就是额外的指令，指令不支持命令别名</span>
<span class="token comment"># 所以只能使用 ls -l 而不能使用 ll</span>

<span class="token comment"># 找出系统中，大于 1MB 的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-size</span> +1M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>find 的特殊功能就是可以进行额外的动作（action），图解一个范例</p><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>{}</code>：表示由 find 找到的内容</li><li><code>-exec 开头到 \\; 结尾</code>：中间的表示指令额外动作</li><li><code>;</code>：在 bash 环境下又特殊意义的，用斜杠 <code>\\</code> 来跳脱</li></ul><p>说使用 find 在寻找数据的时候相当操硬盘是啥意思？耗费硬盘？所以能用 whereis 与 locate 操作的尽量用</p><h3 id="删除-n-天前的文件" tabindex="-1"><a class="header-anchor" href="#删除-n-天前的文件" aria-hidden="true">#</a> 删除 n 天前的文件</h3><p>笔者这里既然学习了 find 知识点，现在拿出之前在工作中经常用到删除 n 天前的指令来分析下， 看能不能看懂</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find /usr/local/backups -mtime +10 -name &quot;*.*&quot; -exec rm -rf {} \\;

-mtime ：表示文件修改时间
+10 ：表示 10 天前的（不含 10 哪一天）
name：查找文件名，后面使用了通配符，查找所有的文件
-exec rm -rf {} \\； 使用执行额外动作，将查找到的文件执行了 rm -rf 删除操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-常用命令收集" tabindex="-1"><a class="header-anchor" href="#find-常用命令收集" aria-hidden="true">#</a> find 常用命令收集</h3><p>以下收集一些常用的使用方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 搜索文件内容，并显示命中的文件 与 内容所在行</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.conf&quot;</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;8081&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,59),p=[t];function d(o,r){return s(),a("div",null,p)}const v=n(c,[["render",d],["__file","05.html.vue"]]);export{v as default};
