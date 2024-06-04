import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const i={},l=e(`<h1 id="shell-script-的追踪与-debug" tabindex="-1"><a class="header-anchor" href="#shell-script-的追踪与-debug" aria-hidden="true">#</a> Shell Script 的追踪与 debug</h1><p>scripts 在执行前，最怕出现语法错误问题了，可以通过 bash 相关参数来检测</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token punctuation">[</span>-nvx<span class="token punctuation">]</span> scripts.sh

选项与参数：
-n：不执行 script，仅检查语法问题
-v：执行 script 前，先将 scripts 内容输出到屏幕上
-x：将执行到的 script 内容显示到屏幕上，相当于 debug 了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 1：测试 dir_perm.sh 有无语法问题？</span>
<span class="token function">sh</span> <span class="token parameter variable">-n</span> dir_perm.sh
<span class="token comment"># 如果没有语法问题，则不会显示任何信息</span>
<span class="token comment"># 笔者实测，貌似语法检测效果并不强大</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 范例 2：将 show_animal.sh 的执行过程全部列出来</span>
<span class="token punctuation">[</span>mrcode@study bin<span class="token punctuation">]</span>$ <span class="token function">sh</span> <span class="token parameter variable">-x</span> show_animal.sh 
+ <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:/home/mrcode/bin
+ <span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>
+ <span class="token keyword">for</span> <span class="token for-or-select variable">animal</span> <span class="token keyword">in</span> dog <span class="token function">cat</span> elephant
+ <span class="token builtin class-name">echo</span> <span class="token string">&#39;There are dogs...&#39;</span>
There are dogs<span class="token punctuation">..</span>.
+ <span class="token keyword">for</span> <span class="token for-or-select variable">animal</span> <span class="token keyword">in</span> dog <span class="token function">cat</span> elephant
+ <span class="token builtin class-name">echo</span> <span class="token string">&#39;There are cats...&#39;</span>
There are cats<span class="token punctuation">..</span>.
+ <span class="token keyword">for</span> <span class="token for-or-select variable">animal</span> <span class="token keyword">in</span> dog <span class="token function">cat</span> elephant
+ <span class="token builtin class-name">echo</span> <span class="token string">&#39;There are elephants...&#39;</span>
There are elephants<span class="token punctuation">..</span>.

<span class="token comment"># 下面是原始脚本，方便对比</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">animal</span> <span class="token keyword">in</span> dog <span class="token function">cat</span> elephant
<span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;There are <span class="token variable">\${animal}</span>s...&quot;</span>
<span class="token keyword">done</span>
<span class="token comment"># 可以看到，每次循环执行，都打印出来了关键信息，</span>
<span class="token comment"># 该功能非常有用，可以当成 debug 来使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>熟悉 sh 的用法，可以使你在管理 Linux 的过程中得心应手，至于在 shell script 的学习方法上，需要多看、多模仿、并加以修改成自己的代码，是最快的学习手段了。网络有上相当多的有用的 scripts，你可以将其拿来进行修改成自己的代码</p><p>另外，Linux 系统本来就有很多的服务启动脚本，如果想要知道每个 script 所代表的功能是什么，直接 vim 进入该 script 查阅下，通常就知道了。比如说之前提到的 <code>/etc/init.d/netconsole</code> 是做什么的？直接查看他的前几行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/init.d/netconsole 


<span class="token comment">#!/bin/bash</span>
<span class="token comment"># </span>
<span class="token comment"># netconsole    This loads the netconsole module with the configured parameters.</span>
<span class="token comment">#</span>
<span class="token comment"># chkconfig: - 50 50</span>
<span class="token comment"># description: Initializes network console logging</span>
<span class="token comment"># config: /etc/sysconfig/netconsole</span>
<span class="token comment">#</span>
<span class="token comment">### BEGIN INIT INFO</span>
<span class="token comment"># Provides:          netconsole</span>
<span class="token comment"># Required-Start:    $network</span>
<span class="token comment"># Short-Description: Initializes network console logging</span>
<span class="token comment"># Description:       Initializes network console logging of kernel messages.</span>
<span class="token comment">### END INIT INFO</span>

<span class="token comment"># Copyright 2002 Red Hat, Inc.</span>
<span class="token comment">#</span>
<span class="token comment"># Based in part on a shell script by</span>
<span class="token comment"># Andreas Dilger &lt;adilger@turbolinux.com&gt;  Sep 26, 2001</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述的描述可以知道，在网络终端机来应付登录的意思，且配置文件在 /etc/sysconfig/netconsole</p>`,9),c=[l];function t(o,p){return s(),a("div",null,c)}const m=n(i,[["render",t],["__file","06.html.vue"]]);export{m as default};
