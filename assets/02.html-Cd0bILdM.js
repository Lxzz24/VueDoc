import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CvlAI_tu.js";const t={},p=e(`<h2 id="🍀-文件与木的检视-ls" tabindex="-1"><a class="header-anchor" href="#🍀-文件与木的检视-ls" aria-hidden="true">#</a> 🍀 文件与木的检视 ls</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token punctuation">[</span>-aAdfFhilnrRSt<span class="token punctuation">]</span> 文件名或目录名称Â
<span class="token function">ls</span> <span class="token punctuation">[</span>--color<span class="token operator">=</span><span class="token punctuation">{</span>never,auto,always<span class="token punctuation">}</span><span class="token punctuation">]</span> 文件名或目录名称
<span class="token function">ls</span> <span class="token punctuation">[</span>--full-time<span class="token punctuation">]</span> 文件名或目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li><p><strong>a</strong>：全部的文件，连同隐藏文件（开头为 .）一起列出来（常用）</p></li><li><p>A：全部的文件，连同隐藏文件（不包括 . 和 .. 这两个目录)</p></li><li><p><strong>d</strong>：仅列出目录本身，而不是列出目录内的文件数据（常用）</p></li><li><p>f：直接列出结果，而不进行排序（ls 默认以文档名排序）</p></li><li><p>F：根据文件、目录等信息，给予附加数据结构</p><p>如：</p><ul><li><code>*</code> 代表可执行文件，</li><li><code>/</code> 代表目录</li><li><code>=</code> 代表 socket 文件</li><li><code>|</code> 代表 FIFO 文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如这样，会在文件名后面显示符号</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-F</span>
下载/  公共/  图片/  文档/  桌面/  模板/  视频/  音乐/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>h：将文件容量以人类较易读的方式（例如 GB、KB）列出来</p></li><li><p>i：列出 inode 号码，inode 的意义后续讲解</p></li><li><p><strong>l</strong>：长数据串输出，包含文件的属性与权限等数据（常用）</p></li><li><p>n：列出 UID 与 GID 而非使用者与群组的名称（UID 与 GID 会在账户管理中讲解）</p></li><li><p>r：将排序结果反向输出，例如原本文件名由小到大，反向则由大到小</p></li><li><p>R：连同子目录内容一起列出来，等于该目录下的所有文件都会显示出来</p></li><li><p>S：按文件容量大小排序</p></li><li><p>t：按时间排序</p></li><li><p>color 颜色配置</p><ul><li>never：不要依据文件特性给予颜色显示</li><li>always：显示颜色</li><li>auto：让系统自行依据设置来判断是否给予颜色</li></ul></li><li><p>full-time：以完整时间模式）包含年月日时分输出</p></li><li><p><code>time={atime，ctime}</code>：输出 access 时间或改变权限属性时间（ctime），而非内容变更时间</p></li></ul><p>在 linux 中 ls 指令可能是 最常用的，由于文件所记录的信息实在是太多了， 所以默认显示的只有：非隐藏文档、以文件名进行排序、文件名代表的颜色显示</p><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将家目录下的所有问价列出来，包含属性与隐藏文件</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> ~
total <span class="token number">40</span>
drwx------. <span class="token number">18</span> mrcode mrcode <span class="token number">4096</span> Oct  <span class="token number">8</span> <span class="token number">23</span>:15 <span class="token builtin class-name">.</span>   <span class="token comment"># 深蓝色</span>
drwxr-xr-x.  <span class="token number">4</span> root   root     <span class="token number">42</span> Oct  <span class="token number">8</span> <span class="token number">23</span>:01 <span class="token punctuation">..</span>  <span class="token comment"># 深蓝色</span>
-rw-------.  <span class="token number">1</span> mrcode mrcode <span class="token number">2927</span> Oct <span class="token number">11</span> 05:16 .bash_history
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode   <span class="token number">18</span> Aug  <span class="token number">8</span> <span class="token number">20</span>:06 .bash_logout
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode  <span class="token number">193</span> Aug  <span class="token number">8</span> <span class="token number">20</span>:06 .bash_profile
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode  <span class="token number">231</span> Aug  <span class="token number">8</span> <span class="token number">20</span>:06 .bashrc
drwx------. <span class="token number">16</span> mrcode mrcode <span class="token number">4096</span> Oct  <span class="token number">4</span> <span class="token number">21</span>:33 .cache <span class="token comment"># 深蓝色</span>

<span class="token comment"># 接上题，不显示颜色，但在文件名末尾显示该文件名代表的类型</span>
<span class="token comment"># 实际的终端中看，颜色就没显示了</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-alF</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>never ~
total <span class="token number">40</span>
drwx------. <span class="token number">18</span> mrcode mrcode <span class="token number">4096</span> Oct  <span class="token number">8</span> <span class="token number">23</span>:15 ./
drwxr-xr-x.  <span class="token number">4</span> root   root     <span class="token number">42</span> Oct  <span class="token number">8</span> <span class="token number">23</span>:01 <span class="token punctuation">..</span>/
-rw-------.  <span class="token number">1</span> mrcode mrcode <span class="token number">2927</span> Oct <span class="token number">11</span> 05:16 .bash_history
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode   <span class="token number">18</span> Aug  <span class="token number">8</span> <span class="token number">20</span>:06 .bash_logout
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode  <span class="token number">193</span> Aug  <span class="token number">8</span> <span class="token number">20</span>:06 .bash_profile
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode  <span class="token number">231</span> Aug  <span class="token number">8</span> <span class="token number">20</span>:06 .bashrc
drwx------. <span class="token number">16</span> mrcode mrcode <span class="token number">4096</span> Oct  <span class="token number">4</span> <span class="token number">21</span>:33 .cache/

<span class="token comment"># 显示完整的修改实践（modification time）</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> --full-time ~
total <span class="token number">40</span>
drwx------. <span class="token number">18</span> mrcode mrcode <span class="token number">4096</span> <span class="token number">2019</span>-10-08 <span class="token number">23</span>:15:44.109000000 +0800 <span class="token builtin class-name">.</span>
drwxr-xr-x.  <span class="token number">4</span> root   root     <span class="token number">42</span> <span class="token number">2019</span>-10-08 <span class="token number">23</span>:01:04.516000000 +0800 <span class="token punctuation">..</span>
-rw-------.  <span class="token number">1</span> mrcode mrcode <span class="token number">2927</span> <span class="token number">2019</span>-10-11 05:16:27.662000000 +0800 .bash_history
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode   <span class="token number">18</span> <span class="token number">2019</span>-08-08 <span class="token number">20</span>:06:55.000000000 +0800 .bash_logout
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode  <span class="token number">193</span> <span class="token number">2019</span>-08-08 <span class="token number">20</span>:06:55.000000000 +0800 .bash_profile
-rw-r--r--.  <span class="token number">1</span> mrcode mrcode  <span class="token number">231</span> <span class="token number">2019</span>-08-08 <span class="token number">20</span>:06:55.000000000 +0800 .bashrc
drwx------. <span class="token number">16</span> mrcode mrcode <span class="token number">4096</span> <span class="token number">2019</span>-10-04 <span class="token number">21</span>:33:12.075000000 +0800 .cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 ls 支持的功能很多，这些都是因为 linux 文件系统记录了很多有用的信息的缘故， 那么这些与权限、属性有关的数据放在 i-node 里面的。后续会深入讲解 i-node 的</p><p>另外，由于 ls -l 使用频率很高，为此，很多 distribution 在预设情况中已经将 ll 设定为 ls -l 的意思了。</p><h2 id="🍀-复制、删除与移动-cp、rm、mv" tabindex="-1"><a class="header-anchor" href="#🍀-复制、删除与移动-cp、rm、mv" aria-hidden="true">#</a> 🍀 复制、删除与移动：cp、rm、mv</h2><ul><li>cp：copy 复制文件，该指令还有其他功能，如建立连接档、比较亮文件的新旧而给予更新，复制整个目录等功能</li><li>mv：move 移动目录与文件，也可以直接拿来当做更名（rename）</li><li>rm：remove 移除文件</li></ul><h3 id="cp-复制文件或目录" tabindex="-1"><a class="header-anchor" href="#cp-复制文件或目录" aria-hidden="true">#</a> cp 复制文件或目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token punctuation">[</span>-adfilprsu<span class="token punctuation">]</span> 来源文件（source）目标文件（destination）
<span class="token function">cp</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> source1 source2 source3 <span class="token punctuation">..</span><span class="token punctuation">..</span> directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li><strong>a</strong>：相当于 -dr --preserve=all 的一是一，至于 dr 请参考下列说明；（常用）</li><li>d：若来源文件为链接文件的属性（link file），则复制链接文件属性而非文件本身</li><li>f：强制（force）的意思，若目标文件已经存在且无法开启，则移除后再尝试一次</li><li><strong>i</strong>：若目标文件已经存在时，在覆盖时会先询问动作的进行。（常用）</li><li>l：进行硬式链接（hard link）的链接档的建立，而非复制文件本身</li><li><strong>p</strong>：连同文件的属性（权限、用户、时间）一起复制过去，而非使用默认属性；（备份文件常用）</li><li><strong>r</strong>：递归持续复制，用于目录的复制行为。（常用）</li><li>s：复制称为符号链接文件（symbolic link）</li><li>u：destination 与 source 旧才更新 destination，或 destination 不存在的情况下才复制</li></ul><p><code>--preserve=all</code>：除了 -p 的权限相关参数外，还加入 SELinux 的属性，links、xattr 等也复制</p><p>最后需要注意的是：如果来源档有两个以上，则最后一个目的文件一定要是目录才行</p><p>而且不同身份者执行这个指令会有不同的结果产生，尤其是 -a、-p 的选项，对于不同身份来说， 差异则非常的大。</p><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 root 身份，将家目录下的 .bashrc 复制到 /tmp 下，并更名为 bashrc</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cp ~/.bashrc /tmp/bashrc</span>
<span class="token comment"># 加上 -i 属性，由于上面已经复制过一次了，所以 bashrc 文件已经存在</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cp -i ~/.bashrc /tmp/bashrc</span>
cp：是否覆盖<span class="token string">&quot;/tmp/bashrc&quot;</span>？ <span class="token comment"># n 不覆盖，y 覆盖</span>

<span class="token comment"># 变换目录到 /tmp ,并将 /var/log/wtmp 复制到 /tmp 且观察属性</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cd /tmp/</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp /var/log/wtmp .</span>
<span class="token comment"># ls 可以列出多个文档名，这里列出了两个，刚好可以对比他们的属性</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l /var/log/wtmp wtmp</span>
-rw-rw-r--. <span class="token number">1</span> root utmp <span class="token number">44160</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">14</span>:38 /var/log/wtmp
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">44160</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:42 wtmp
<span class="token comment"># 可以看到上面不加任何选项，被复制之后的某些属性或权限已经被改变了</span>
<span class="token comment"># 这是个很重要的特性，要注意，文件建立的时间也不一样</span>
<span class="token comment"># 下面将所有的属性权限都一起复制过来</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp -a /var/log/wtmp wtmp2</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l /var/log/wtmp wtmp2</span>
-rw-rw-r--. <span class="token number">1</span> root utmp <span class="token number">44160</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">14</span>:38 /var/log/wtmp
-rw-rw-r--. <span class="token number">1</span> root utmp <span class="token number">44160</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">14</span>:38 wtmp2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，不加任何选项会使用预设的配置，比如常常会复制别人的数据（当然需要有 read 权限）， 总是希望复制到的数据最后是我们自己的，所以上面示例才有由 utmp 变更为 root</p><p>由于具有这个特性，因此在进行备份的时候，需要特别注意的特殊权限文件，例如密码文件（/etc/shadow) 以及一些配置文件，就不能直接以 cp 来复制，需要将全部的属性都原样复制过来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 复制 etc 目录下的所有内容</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp /etc/ /tmp/</span>
cp: 略过目录<span class="token string">&quot;/etc/&quot;</span>  <span class="token comment"># 提示该目录不能直接复制，要加上 -r</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp -r /etc/ /tmp/</span>
<span class="token comment"># 再次强调，-r 只是能递归复制，但是文件权限等属性还是会更改</span>
<span class="token comment"># 因此可以使用 cp -a /etc/ /tmp/ 来复制，尤其是在备份的情况下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建符号链接与实体链接" tabindex="-1"><a class="header-anchor" href="#创建符号链接与实体链接" aria-hidden="true">#</a> 创建符号链接与实体链接</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将之前复制过来的 bashrc 建立一个链接档</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/tmp
<span class="token comment"># 先查看该文件的属性</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l bashrc</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">176</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:38 bashrc
<span class="token comment"># 分别建立 符号链接 和硬式链接</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp -s bashrc bashrc_link</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp -l bashrc bashrc_hlink</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l bashrc*</span>
<span class="token comment"># 注意看这里的数值，源文件是 1 这里变成了 2</span>
-rw-r--r--. <span class="token number">2</span> root root <span class="token number">176</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:38 bashrc
-rw-r--r--. <span class="token number">2</span> root root <span class="token number">176</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:38 bashrc_hlink
<span class="token comment"># 下面这条数据，在终端中，bashrc_link 会显示浅蓝色</span>
lrwxrwxrwx. <span class="token number">1</span> root root   <span class="token number">6</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:55 bashrc_link -<span class="token operator">&gt;</span> bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 -l 及 -s 都会建立连接档（link file），那么有什么不同呢?</p><ul><li>bashrc_link：使用 s 创建出来的，是符号链接（symbolic link），简单说是一个快捷方式，会链接到 bashrc 中去。有一个 -&gt; 的符号</li><li>bashrc_hlink：使用 l 创建出来的，是实体链接（hard link）</li></ul><p>实体链接与源文件的属性与权限一模一样，与尚未链接前的差异是 第二栏 的 link 由 1 变成了 2. 由于实体链接与 i-node 有关，这里先不深入了。后续文件系统部分再深入讲解</p><h4 id="备份常见下的复制" tabindex="-1"><a class="header-anchor" href="#备份常见下的复制" aria-hidden="true">#</a> 备份常见下的复制</h4><p>当源文件比目标新的时候才复制</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先查看两个文件的时间，可以看到源文件是 2013 年，比目标文件旧</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l ~/.bashrc /tmp/bashrc</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">176</span> <span class="token number">12</span>月 <span class="token number">29</span> <span class="token number">2013</span> /root/.bashrc
-rw-r--r--. <span class="token number">2</span> root root <span class="token number">176</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:38 /tmp/bashrc
<span class="token comment"># 这里使用 -u 复制后，没有任何提示</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp -u ~/.bashrc /tmp/bashrc</span>
<span class="token comment"># 再次查看，发现没有复制成功，当前时间是 16:14 了，如果成功，目标文件的时间也会变更</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l ~/.bashrc /tmp/bashrc</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">176</span> <span class="token number">12</span>月 <span class="token number">29</span> <span class="token number">2013</span> /root/.bashrc
-rw-r--r--. <span class="token number">2</span> root root <span class="token number">176</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:38 /tmp/bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="连接文档的复制" tabindex="-1"><a class="header-anchor" href="#连接文档的复制" aria-hidden="true">#</a> 连接文档的复制</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 该文件是一个符号链接文件</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l bashrc_link</span>
lrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">6</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:55 bashrc_link -<span class="token operator">&gt;</span> bashrc
<span class="token comment"># 这里使用不加参数复制和加参数复制</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp bashrc_link bashrc_link_1</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp -d bashrc_link bashrc_link_2</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># ls -l bashrc bashrc_link*</span>
-rw-r--r--. <span class="token number">2</span> root root <span class="token number">176</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:38 bashrc
lrwxrwxrwx. <span class="token number">1</span> root root   <span class="token number">6</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">15</span>:55 bashrc_link -<span class="token operator">&gt;</span> bashrc
<span class="token comment"># 可以看到，不加参数复制把源文件复制过来了</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">176</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">16</span>:16 bashrc_link_1
<span class="token comment"># 添加 -d 参数，只复制了链接文件本身</span>
lrwxrwxrwx. <span class="token number">1</span> root root   <span class="token number">6</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">16</span>:16 bashrc_link_2 -<span class="token operator">&gt;</span> bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个文件同时复制到通一个目录下" tabindex="-1"><a class="header-anchor" href="#多个文件同时复制到通一个目录下" aria-hidden="true">#</a> 多个文件同时复制到通一个目录下</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> ~/.bashrc ~/.bash_history /tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="身份不同执行-cp-指令表现不同" tabindex="-1"><a class="header-anchor" href="#身份不同执行-cp-指令表现不同" aria-hidden="true">#</a> 身份不同执行 cp 指令表现不同</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 mrcode 身份, -a 把文件原原本本的复制过来</span>
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">cp</span> <span class="token parameter variable">-a</span> /var/log/wtmp /tmp/mrcode_wtmp
<span class="token punctuation">[</span>mrcode@study ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /var/log/wtmp /tmp/mrcode_wtmp
-rw-rw-r--. <span class="token number">1</span> mrcode mrcode <span class="token number">44160</span> Oct <span class="token number">13</span> <span class="token number">14</span>:38 /tmp/mrcode_wtmp
-rw-rw-r--. <span class="token number">1</span> root   utmp   <span class="token number">44160</span> Oct <span class="token number">13</span> <span class="token number">14</span>:38 /var/log/wtmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>胡发现其他的都一样，但是拥有者和组没有复制过来，这是因为 mrcode 身份无法进行的动作</p><h4 id="小节" tabindex="-1"><a class="header-anchor" href="#小节" aria-hidden="true">#</a> 小节</h4><p>由于 cp 有种种的文件属性与权限的特性，所以在复制时，比必须要清楚的了解到</p><ul><li>是否需要完整的保留来源文件的信息？</li><li>来源文件是否为连接档（symbolic link file）？</li><li>来源档是否为特殊的文件，例如 FIFO、socket 等</li><li>来源文件是否为目录？</li></ul><h3 id="rm-语出文件或目录" tabindex="-1"><a class="header-anchor" href="#rm-语出文件或目录" aria-hidden="true">#</a> rm 语出文件或目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token punctuation">[</span>-fir<span class="token punctuation">]</span> 文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>f：force 强制的意思，忽略不存在的文件，不会出现警告信息</li><li>i：互动模式，在闪出去会询问使用者是否操作</li><li>r：递归删除</li></ul><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 互动模式删除</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp/</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># rm -i bashrc</span>
rm：是否删除普通文件 <span class="token string">&quot;bashrc&quot;</span>？y
<span class="token comment"># 删除的文件名还可以使用通配符， * 表示 0 个或多个</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># rm -i bashrc*</span>
rm：是否删除普通文件 <span class="token string">&quot;bashrc_hlink&quot;</span>？y
rm：是否删除符号链接 <span class="token string">&quot;bashrc_link&quot;</span>？y
rm：是否删除普通文件 <span class="token string">&quot;bashrc_link_1&quot;</span>？y
rm：是否删除符号链接 <span class="token string">&quot;bashrc_link_2&quot;</span>？y

<span class="token comment"># 删除一个目录， rmdir 无法删除非空目录</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># rmdir /tmp/etc/</span>
rmdir: 删除 <span class="token string">&quot;/tmp/etc/&quot;</span> 失败: 目录非空
<span class="token comment"># 这里使用 r 参数递归删除</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># rm -r /tmp/etc/</span>
<span class="token comment"># 但是出现了交互模式，是因为 root 身份预设加入了参数 -i</span>
rm：是否进入目录<span class="token string">&quot;/tmp/etc/&quot;</span>? y
rm：是否删除普通文件 <span class="token string">&quot;/tmp/etc/fstab&quot;</span>？y
rm：是否删除普通空文件 <span class="token string">&quot;/tmp/etc/crypttab&quot;</span>？y
rm：是否删除符号链接 <span class="token string">&quot;/tmp/etc/mtab&quot;</span>？y
rm：是否删除普通文件 <span class="token string">&quot;/tmp/etc/resolv.conf&quot;</span>？y
rm：是否进入目录<span class="token string">&quot;/tmp/etc/fonts&quot;</span>? ^C

<span class="token comment"># 在指令前添加反斜杠，可以忽略掉 alias 的指定选项，至于 alias 后续再 bash 章节详讲</span>
<span class="token punctuation">\\</span>rm <span class="token parameter variable">-r</span> /tmp/etc/

<span class="token comment"># 删除一个带有 - 开头的文件</span>
<span class="token comment"># 先使用 touch 建立一个空文件</span>
<span class="token function">touch</span> ./-aaa
<span class="token comment"># 注意：在 /tmp 下文件太多，常见好的文件就在最前面</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span>
<span class="token comment"># 看到文件大小是 0 ，这是一个空文件</span>
-rw-r--r--.  <span class="token number">1</span> root   root       <span class="token number">0</span> <span class="token number">10</span>月 <span class="token number">13</span> <span class="token number">19</span>:05 -aaa-

<span class="token comment"># 删除刚才创建的，肯定不会成功的，之前讲解过 - 是个特殊字符，表示选项</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># rm -aaa-</span>
rm：无效选项 -- a
Try <span class="token string">&#39;rm ./-aaa-&#39;</span> to remove the <span class="token function">file</span> <span class="token string">&quot;-aaa-&quot;</span><span class="token builtin class-name">.</span>  <span class="token comment"># 但是这里给出了建议，添加双引号删除</span>
Try <span class="token string">&#39;rm --help&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information.

<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># rm &quot;./-aaa-&quot;</span>
rm：是否删除普通空文件 <span class="token string">&quot;./-aaa-&quot;</span>？y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 root 的是天神，所以大部分 distribution 都默认添加了 -i 的选项，删除前请三思啊</p><h3 id="mv-移动文件与目录或更名" tabindex="-1"><a class="header-anchor" href="#mv-移动文件与目录或更名" aria-hidden="true">#</a> mv 移动文件与目录或更名</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> <span class="token punctuation">[</span>-fiu<span class="token punctuation">]</span>  <span class="token builtin class-name">source</span> destination
<span class="token function">mv</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> source1 source2 <span class="token punctuation">..</span>. directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>f：强制，如果目标文件已经存在，不会询问，直接覆盖</li><li>i：若目标文件已经存在时，就会询问是否覆盖</li><li>u：若目标已经存在，且 source 比较新，才会功更新该文件</li></ul><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cd /tmp/   </span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># cp ~/.bashrc bashrc</span>
<span class="token comment"># 创建目录</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># mkdir mvtest</span>
<span class="token comment"># 将刚刚拷贝的 bashrc 复制到目录中</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># mv bashrc mvtest/</span>
<span class="token comment"># 目录更名</span>
<span class="token comment"># 其实还有一个指令 rename，该指令专职进行多个文档名同时更名，并非针对单一文件更名</span>
<span class="token comment"># 与 mv 不同，详细请 man rename</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># mv mvtest/ mvtest2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取得路径的文件名与目录名称-basename、dirname" tabindex="-1"><a class="header-anchor" href="#取得路径的文件名与目录名称-basename、dirname" aria-hidden="true">#</a> 取得路径的文件名与目录名称，basename、dirname</h3><p>每个文件的完整文档名包含了前面的目录与最终的文件名，而每个文档名的长度都可达 255 个字符， 那么怎么区分哪个是文件名？哪个是目录名？可以使用斜线「/」来分辨</p><p>一般要获取文件名或目录名称，都是些程序的手来判断用，所以这部分指令可以用在后续的 shell scripts 里面。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /etc/sysconfig/network 比如这个路径</span>
<span class="token comment"># 可以使用指令分别获取到他的目录与文件名</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># basename /etc/sysconfig/network</span>
network
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># dirname /etc/sysconfig/network</span>
/etc/sysconfig

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),l=[p];function c(o,i){return s(),a("div",null,l)}const m=n(t,[["render",c],["__file","02.html.vue"]]);export{m as default};
