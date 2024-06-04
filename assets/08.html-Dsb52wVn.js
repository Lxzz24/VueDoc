import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const i={},t=e(`<h1 id="本章习题" tabindex="-1"><a class="header-anchor" href="#本章习题" aria-hidden="true">#</a> 本章习题</h1><p>请按照以下的方式来建立你的系统重要文件指纹膜，并每日对比此重要工作</p><ol><li><p>将 <code>/etc/{passwd,shadow,group}</code> 以及系统上所有的 SUID/SGID 文件建立文件列表，命名为 important.file</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># ls /etc/{passwd,shadow,group} &gt; important.file</span>
<span class="token comment"># 将 SUID/SGID 文件追加写入到文件中</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># find /usr/sbin/ /usr/bin -perm /6000 &gt;&gt; important.file </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过这个文档名列表，建立 md5.checkfile.sh 脚本，并将该指纹码文件 finger1.file 设置为不可修改属性</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim md5.checkfile.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">filename</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /root/important.file<span class="token variable">)</span></span>
<span class="token keyword">do</span>
	md5sum <span class="token variable">$filename</span> <span class="token operator">&gt;&gt;</span> finger1.file
<span class="token keyword">done</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># sh md5.checkfile.sh</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># chattr +i finger1.file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过相同的机制去建立后续的分析数据为 <code>finger_new.file</code> ，并将两者进行对比，若有问题则提供 email 给 root 查询</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim md5.checkfile.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&quot;new&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">filename</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /root/important.file<span class="token variable">)</span></span>
  <span class="token keyword">do</span>
    md5sum <span class="token variable">$filename</span> <span class="token operator">&gt;&gt;</span> finger1.file
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;New file finger1.file is created.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> finger1.file <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;file: finger1.file NOT exist.&quot;</span>
	<span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> finger_new.file <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> finger_new.file
<span class="token keyword">for</span> <span class="token for-or-select variable">filename</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /root/important.file<span class="token variable">)</span></span>
  <span class="token keyword">do</span>
    md5sum <span class="token variable">$filename</span> <span class="token operator">&gt;&gt;</span> finger_new.file
  <span class="token keyword">done</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">diff</span> finger1.file finger_new.file<span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$testing</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token function">diff</span> finger1.file finger_new.file <span class="token operator">|</span> mail <span class="token parameter variable">-s</span> <span class="token string">&#39;finger trouble..&#39;</span> root
<span class="token keyword">fi</span>

<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/crontab</span>
<span class="token number">30</span> <span class="token number">2</span> * * * root <span class="token builtin class-name">cd</span> /root<span class="token punctuation">;</span> <span class="token function">sh</span> md5.checkfile.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上脚本则可以自动分析这些文件是否有改动</p></li></ol>`,3),l=[t];function o(p,c){return s(),a("div",null,l)}const u=n(i,[["render",o],["__file","08.html.vue"]]);export{u as default};
