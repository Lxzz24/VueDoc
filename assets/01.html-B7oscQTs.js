import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t={},i=e(`<h2 id="🍀-相对路径与绝对路径" tabindex="-1"><a class="header-anchor" href="#🍀-相对路径与绝对路径" aria-hidden="true">#</a> 🍀 相对路径与绝对路径</h2><ul><li>绝对路径：由根目录开头，如 /home/mrcode</li><li>相对路径：不是由根目录开头的，如 ./mrcode</li></ul><h2 id="🍀-目录的相关操作" tabindex="-1"><a class="header-anchor" href="#🍀-目录的相关操作" aria-hidden="true">#</a> 🍀 目录的相关操作</h2><p>以下的特殊目录需要着重了掌握</p><ul><li><code>.</code>：代表此层目录</li><li><code>..</code>：上一层目录</li><li><code>-</code>：前一个工作目录</li><li><code>~</code>：目前用户身份坐在的家目录</li><li><code>~account</code>：表示 account 这个用户的家目录（account 是个账户名称）</li></ul><p>需要特别注意的是，在所有目录下都会看到两个目录 <code>. 与 ..</code>，当前目录和上一层目录。</p><p>那么 linux 中，根目录有没有上层目录存在？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> /
<span class="token comment"># 可以看到这两个目录的属性一模一样，所以这两个目录其实都是同一个目录</span>
dr-xr-xr-x.  <span class="token number">17</span> root root  <span class="token number">224</span> Oct  <span class="token number">4</span> <span class="token number">18</span>:31 <span class="token builtin class-name">.</span>
dr-xr-xr-x.  <span class="token number">17</span> root root  <span class="token number">224</span> Oct  <span class="token number">4</span> <span class="token number">18</span>:31 <span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么下面讲解下几个常见的处理目录的指令：</p><ul><li>cd：变换目录</li><li>pwd：显示当前目录</li><li>mkdir：建立一个新的目录</li><li>rmdir：删除一个空的目录</li></ul><h3 id="cd-change-directory-变换目录" tabindex="-1"><a class="header-anchor" href="#cd-change-directory-变换目录" aria-hidden="true">#</a> cd（change directory）变换目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Last login: Fri Oct <span class="token number">11</span> 04:01:50 <span class="token number">2019</span> from <span class="token number">192.168</span>.0.105
<span class="token comment"># 登录 linux 后，每个账号都会在自己账号的家目录下</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/  <span class="token comment"># 注意看前面的符号 ~，这个表示在 家里</span>
<span class="token comment"># 上面使用 cd ../ 进入了上一层目录，那么这里 ~ 变成了 home。实际路径是  /home/账户家</span>
<span class="token comment"># 这里直接使用 cd 不带参数，会默认回到家目录中</span>
<span class="token punctuation">[</span>mrcode@study home<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span>  
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$
<span class="token comment"># 现在在家，返回前一个目录，也就是 /home 目录</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> -
/home
<span class="token comment"># 上次是从家出来的，这里再返回前一个目录，就又回到了家的目录中</span>
<span class="token punctuation">[</span>mrcode@study home<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> -
/home/mrcode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pwd-print-working-directory-显示当前所在目录" tabindex="-1"><a class="header-anchor" href="#pwd-print-working-directory-显示当前所在目录" aria-hidden="true">#</a> pwd（print Working Directory） 显示当前所在目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study mail<span class="token punctuation">]</span>$ <span class="token builtin class-name">pwd</span>
/var/mail
<span class="token comment"># 带参数 P 是显示真实的路径，而不是连接（link）路径，然而 /var/mail 就是一个连接路径</span>
<span class="token punctuation">[</span>mrcode@study mail<span class="token punctuation">]</span>$ <span class="token builtin class-name">pwd</span> <span class="token parameter variable">-P</span>
/var/spool/mail
<span class="token comment"># 通过命令也能看到，连接到了 spool/mail 目录中</span>
<span class="token punctuation">[</span>mrcode@study mail<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-ld</span> /var/mail
lrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">10</span> Oct  <span class="token number">4</span> <span class="token number">18</span>:21 /var/mail -<span class="token operator">&gt;</span> spool/mail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mkdir-建立新目录" tabindex="-1"><a class="header-anchor" href="#mkdir-建立新目录" aria-hidden="true">#</a> mkdir 建立新目录</h3><p>语法如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token punctuation">[</span>-mp<span class="token punctuation">]</span> 目录名称

-m：配置文件案的权限，直接设定，不需要看预设权限（umask）的脸色
-p：将该路径上所有的目录都创建出来（当然不存在的话）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入临时目录</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> /tmp/
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token comment"># 不带参数 -p 不能创建多级目录</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> test1/test2/test3/test4
mkdir: cannot create directory ‘test1/test2/test3/test4’: No such <span class="token function">file</span> or directory
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> test1/test2/test3/test4

<span class="token comment"># 创建目录时直接配置该目录的权限</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> <span class="token parameter variable">-m</span> <span class="token number">711</span> test2
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-ld</span> test*
<span class="token comment"># 这些是创建目录默认的权限</span>
drwxrwxr-x. <span class="token number">2</span> mrcode mrcode  <span class="token number">6</span> Oct <span class="token number">11</span> 04:32 <span class="token builtin class-name">test</span>
drwxrwxr-x. <span class="token number">3</span> mrcode mrcode <span class="token number">19</span> Oct <span class="token number">11</span> 04:33 test1
<span class="token comment"># 这个是创建目录时直接配置的权限</span>
drwx--x--x. <span class="token number">2</span> mrcode mrcode  <span class="token number">6</span> Oct <span class="token number">11</span> 04:35 test2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rmdir-删除空的目录" tabindex="-1"><a class="header-anchor" href="#rmdir-删除空的目录" aria-hidden="true">#</a> rmdir 删除空的目录</h3><p>语法如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rmdir</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> 目录名称

-p：「上层」的「空目录」也一起删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-ld</span> test*
drwxrwxr-x. <span class="token number">2</span> mrcode mrcode  <span class="token number">6</span> Oct <span class="token number">11</span> 04:32 <span class="token builtin class-name">test</span>
drwxrwxr-x. <span class="token number">3</span> mrcode mrcode <span class="token number">19</span> Oct <span class="token number">11</span> 04:33 test1
drwx--x--x. <span class="token number">2</span> mrcode mrcode  <span class="token number">6</span> Oct <span class="token number">11</span> 04:35 test2
<span class="token comment"># 该目录下无数据，可直接删除</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">rmdir</span> <span class="token builtin class-name">test</span>
<span class="token comment"># 该目录下由多个目录，就无法阐述了，会报错</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">rmdir</span> test1
rmdir: failed to remove ‘test1’: Directory not empty
<span class="token comment"># 这里使用 -p 删除最后一个目录，但是当再次查看的时候，test4 的上层空的目录都不在了</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">rmdir</span> <span class="token parameter variable">-p</span> test1/test2/test3/test4/
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-ld</span> test*
drwx--x--x. <span class="token number">2</span> mrcode mrcode <span class="token number">6</span> Oct <span class="token number">11</span> 04:35 test2

<span class="token comment"># -p 删除上级空目录是什么意思，下面再来体验下</span>

<span class="token comment"># 创建了多个目录</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> test1/test2/test3/test4
<span class="token comment"># 然后在 test1 中创建了一个 txt 文件</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">touch</span> test1/txt
<span class="token comment"># 删除的时候，就报错了，无法删除 test1，因为该目录下有 txt 文件</span>
<span class="token comment"># 但是注意，只是 test1 没有被删除， test2、test3、test4 还是被删除了的</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token function">rmdir</span> <span class="token parameter variable">-p</span> test1/test2/test3/test4/
rmdir: failed to remove directory ‘test1’: Directory not empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果想把该目录下所有的东西都删除呢？你可以使用指令 <code>rm -r test1</code> 就能全部删掉了， 相对来说，rmdir 没有这么危险</p><h2 id="🍀-关于执行文件路径的变量-path" tabindex="-1"><a class="header-anchor" href="#🍀-关于执行文件路径的变量-path" aria-hidden="true">#</a> 🍀 关于执行文件路径的变量：<code>$PATH</code></h2><p>前面讲解 FHS 后，我们知道 ls 指令完整文件名为 /bin/ls（这是绝对路径）， 那么为什么我们可以在任何地方执行 /bin/ls 这个指令呢？这是因为换了变量 PATH 的能力</p><p>当我们执行一个指令的时候，系统会按照 PATH 的设定去每个 PATH 定义的目录下搜索对应的可执行文件 （比如 ls），如果在 PATH 定义的目录中含有多个文件名为 ls 的可执行文件，那么先搜索到的被执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打印变量的信息，使用 echo ,「$」表示接一个变量</span>
<span class="token punctuation">[</span>mrcode@study tmp<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
/usr/lib64/qt-3.3/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/mrcode/.local/bin:/home/mrcode/bin

<span class="token comment"># 注意，每个账户的 path 值也是不一样的</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span>
/usr/lib64/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仔细看上面的输出，无论哪个账户都有 /bin 或 /usr/bin 在 PATH 变量内。所以可以在任何地方使用 ls 指令</p><p>下面来几个范例来让你了解 PATH 很重要！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先把 ls 移动到 /bin 目录之外去，再运行 ls 看能不能运行？</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mv /bin/ls ../</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
bash: ls: 未找到命令<span class="token punctuation">..</span>.
相似命令是： <span class="token string">&#39;lz&#39;</span>
<span class="token comment"># 现在已经报错找不到命令了，是因为 / 并不再 PATH 变量中</span>

<span class="token comment"># 但是可以通过路径来运行</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># /l</span>
lib/   lib64/ <span class="token function">ls</span>    <span class="token comment"># ls 的确被移动到 根目录下了</span>
<span class="token comment"># 这里直接通过绝对路径运行指令</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># /ls</span>
anaconda-ks.cfg  initial-setup-ks.cfg  initial-setup-ks-mrcode.cfg

<span class="token comment"># 要想不用绝对/相对路径也能使用 ls ，那么将 根目录加入到 PATH 中即可</span>
<span class="token comment"># 也可以使用 PATH=&quot;\${PATH}:/&quot;  来配置</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># PATH=&quot;$PATH:/&quot;</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg  initial-setup-ks.cfg  initial-setup-ks-mrcode.cfg

<span class="token comment"># 把 ls 移回原来的目录</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># mv /ls /bin/</span>
<span class="token comment"># 可能会出现找不到指令了，没有关系，可能是因为指令参数被快取得关系</span>
<span class="token comment"># 只要 exit 再登入 su -  就可以使用了</span>
<span class="token comment"># 另外说一句，刚刚在命令行中把根目录添加到 PATH 中，不是永久的，退出后，再登录就失效了</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
-bash: /ls: 没有那个文件或目录

<span class="token comment"># 假设 /usr/local/bin/ls 与 /bin/ls 两个指令，哪个先被执行？</span>
<span class="token comment"># 可以使用 echo $PATH 或则 \${PATH} 直接显示某一个变量</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># \${PATH}</span>
<span class="token comment"># 这里看哪一个目录在最前面，就是哪个目录下的 ls 先执行</span>
-bash: /usr/lib64/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin: 没有那个文件或目录
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># PATH</span>
bash: <span class="token environment constant">PATH</span><span class="token builtin class-name">:</span> 未找到命令<span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么不建议把 <code>.</code> 当前目录添加到 PATH 路径中？这其实是为了安全起见，不建议添加到 PATH 中， 比如在 /tmp 目录下，因为是大家都可以写的，有人搞破坏，写了一个 ls 的指令，但是里面写的是删除文件的， 这样就会先收到这个恶意的命令</p><p>由上面的示例，我们可以知道几件事情：</p><ul><li>不同身份使用者预设的 PATH 不同，默认能够随意执行的指令也不同（如 root 与 mrcode)</li><li>PATH 是可以修改的</li><li>使用绝对路径或相对路径直接指定某个指令文件名来执行，会比搜寻 PATH 来的正确</li><li>指令应该要放置到正确的目录下，执行才比较方便</li><li>当前目录「.」建议不要放到 PATH 中</li></ul><p>与 PATH 更详细的变量会在后续的 bash shell 中详细说明</p>`,36),c=[i];function l(p,o){return s(),a("div",null,c)}const u=n(t,[["render",l],["__file","01.html.vue"]]);export{u as default};
