import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c,a as s,b as o,w as p,e as n,d as a}from"./app-CvlAI_tu.js";const d={},u=a(`<h1 id="其他-vim-使用注意事项" tabindex="-1"><a class="header-anchor" href="#其他-vim-使用注意事项" aria-hidden="true">#</a> 其他 vim 使用注意事项</h1><p>vim 功能很强大，但是上手不是那么容易，下面分享一些需要注意地方</p><h2 id="🍀-中文编码的问题" tabindex="-1"><a class="header-anchor" href="#🍀-中文编码的问题" aria-hidden="true">#</a> 🍀 中文编码的问题</h2><p>在 vim 里面无法显示中文，那么你需要考虑：</p><ol><li>Linux 系统默认支持的语系数据，与 /etc/locale.conf 有关</li><li>终端界面（bash）的语系；与 LANG、LC_ALL 几个参数有关</li><li>文件原本的编码</li><li>开机终端机的软件，例如在 GNOME 下的窗口</li></ol><p>上面最重要的是第 3 和 4 点，只要这两点编码一致，就能不乱码；</p><p>可以使用如下的方式来暂时修改 tty 的语系（前面都讲过的）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>zh_CN.UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-dos-与-linux-的断行字符" tabindex="-1"><a class="header-anchor" href="#🍀-dos-与-linux-的断行字符" aria-hidden="true">#</a> 🍀 DOS 与 Linux 的断行字符</h2>`,9),r=s("code",null,"^M$",-1),v=s("code",null,"$",-1),m=a(`<p>在 Linux 指令开始执行的时候，判断依据是 Enter 按键（也就是换行符，回车一下就会出现换行符），由于两个系统的换行符不一致，会导致 shell script 程序文件无法执行</p><p>可以使用 dos2unix 指令来一键转换，但是目前为止，虚拟机还没有网络，无法安装，笔者这里只记录用法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dos2unix <span class="token punctuation">[</span>-kn<span class="token punctuation">]</span> <span class="token function">file</span> <span class="token punctuation">[</span>newfile<span class="token punctuation">]</span>
unix2dos <span class="token punctuation">[</span>-kn<span class="token punctuation">]</span> <span class="token function">file</span> <span class="token punctuation">[</span>newfile<span class="token punctuation">]</span>

-k：保留该文件原本的 mtime 时间格式（不更新文件上次内容经过修订的时间）
-n：保留原本的旧文件，将转换后的内容输出到新文件，如：dos2unix <span class="token parameter variable">-n</span> old new
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 /etc/man_db_conf 重新复制到 /tmp/vitest 下，并将其修改为 dos 断行</span>
<span class="token builtin class-name">cd</span> /tmp/vitest
<span class="token function">cp</span> <span class="token parameter variable">-a</span> /etc/man_db_conf <span class="token builtin class-name">.</span>
ll man_db.conf
unix2dos <span class="token parameter variable">-k</span> man_db.conf

<span class="token comment"># 将上述的 man_db.conf 转成 linux 换行符，并保留旧文件，新文件防御 man_db.conf.linux</span>
dos2unix <span class="token parameter variable">-k</span> <span class="token parameter variable">-n</span> man_db.conf man_db.conf.linux
ll man_db.conf*
<span class="token function">file</span> man_db.conf*
man_db.conf:	ASCII text,with CRLF line terminators   <span class="token comment"># 说明了是 CRLF 换行</span>
man_db.conf.linux: ASCII text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-语系编码转换" tabindex="-1"><a class="header-anchor" href="#🍀-语系编码转换" aria-hidden="true">#</a> 🍀 语系编码转换</h2><p>文件编码转换，可以使用 iconv 指令来做，比如下面这一段文字内容（没有网络下载不了，直接粘贴复制保存把）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>每個系統管理員都應該至少要學會一種文字介面的文書處理器，以方便系統日常的管理行為。
在 Linux 上頭的文書處理軟體非常的多，不過，鳥哥還是建議使用 <span class="token function">vi</span> 這個正規的文書處理器。
這是因為 <span class="token function">vi</span> 幾乎在任何一個 Unix Like 的機器都存在，學會他，輕鬆很多啊！
而且後來的計畫也有推出 <span class="token function">vim</span> 這個 <span class="token function">vi</span> 的進階版本，可以用的額外功能更多了！
<span class="token function">vi</span> 是未來我們進行 shell script 程式的編寫與伺服器設定的重要工具喔！
而且是非常非常重要的工具，一定要學會才行啊！ ^_^

無論如何，要管理好 Linux 系統時，純文字的手工設定仍是需要的！那麼在 Linux 底下有哪些文書編輯器呢？
可多了～例如 vi, emacs, xemacs, joe, e3, xedit, kedit, pico <span class="token punctuation">..</span><span class="token punctuation">..</span> 多的很～
各家處理器各有其優缺點，您當然可以選擇任何一個您覺得適用的文書處理器來使用。不過，鳥哥還是比較建議使用 <span class="token function">vi</span> 
啦！這是因為 <span class="token function">vi</span> 是 Unix Like 的機器上面預設都有安裝的軟體，也就是說，您一定可以接觸到這個軟體就是了。
另外，在較新的 distributions 上，您也可以使用較新較先進的 <span class="token function">vim</span> 這個文書處理器！
<span class="token function">vim</span> 可以看做是 <span class="token function">vi</span> 的進階軟體，他可以具有顏色顯示，很方便程式開發人員在進行程式的撰寫呢！

簡單的來說， <span class="token function">vi</span> 是老式的文書處理器，不過功能已經很齊全了，但是還是有可以進步的地方。
<span class="token function">vim</span> 則可以說是程式開發者的一項很好用的工具，就連 <span class="token function">vim</span> 的官方網站 <span class="token punctuation">(</span>http://www.vim.org<span class="token punctuation">)</span> 
自己也說 <span class="token function">vim</span> 是一個『程式開發工具』而不是文書處理軟體～^_^。
因為 <span class="token function">vim</span> 裡面加入了很多額外的功能，例如支援正規表示法的搜尋架構、多檔案編輯、區塊複製等等。
這對於我們在 Linux 上面進行一些設定檔的修訂工作時，是很棒的一項功能呢！

底下鳥哥會先就簡單的 <span class="token function">vi</span> 做個介紹，然後再跟大家報告一下 <span class="token function">vim</span> 的額外功能與用法呢！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp/</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># vi big5.txt</span>
<span class="token comment"># 把上面的内容保存到该文件中，然后使用这个文件来练习</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">iconv</span> <span class="token parameter variable">--list</span>
<span class="token function">iconv</span> <span class="token parameter variable">-f</span> 原本编码 <span class="token parameter variable">-t</span> 新编码 filename <span class="token punctuation">[</span>-o newfile<span class="token punctuation">]</span>

--list：列出 <span class="token function">iconv</span> 支持的语系数据
-f：from 来源，原本的编码格式
-t：to，即要转换的编码格式
<span class="token parameter variable">-o</span> file：如果要保留原本的文件，使用 <span class="token parameter variable">-o</span> 新文件名，可以建立新编码文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实践练习</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看原本文件编码，这里由于刚刚终端机是 utf-8 的，保存后就是 utf-8 了</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># file big5.txt </span>
big5.txt: UTF-8 Unicode text
<span class="token comment"># 那么将 UTF8 转成 big5</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># iconv -f utf8 -t big5 big5.txt -o big5.txt.big5</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># file big5.*</span>
big5.txt:      UTF-8 Unicode text
big5.txt.big5: ISO-8859 text
<span class="token comment"># 不过笔者测试，由 utf8 转成 big5 会乱码，但是还可以转回来</span>

<span class="token comment"># 下面的指令可以将上面繁体中文，转为简体中文，并且还是 utf8 格式</span>
<span class="token comment"># 看指令是吧 utf8 转成 big5，再转成 gb2312，再转成 utf8</span>
<span class="token punctuation">[</span>root@study tmp<span class="token punctuation">]</span><span class="token comment"># iconv -f utf8 -t big5 big5.txt | \\</span>
<span class="token operator">&gt;</span> <span class="token function">iconv</span> <span class="token parameter variable">-f</span> big5 <span class="token parameter variable">-t</span> gb2312 <span class="token operator">|</span> <span class="token function">iconv</span> <span class="token parameter variable">-f</span> gb2312 <span class="token parameter variable">-t</span> utf8 <span class="token parameter variable">-o</span> vi.gb.utf8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function b(k,f){const e=t("RouterLink");return l(),c("div",null,[u,s("p",null,[o(e,{to:"/99-tools/Linux/06/03.html"},{default:p(()=>[n("cat 命令")]),_:1}),n(" 中讲解过 DOS（windows 系统）建立的文件的特殊格式，发现 DOS 为 "),r,n("，而 linux 是 "),v,n("，windows 是 CR（^M） 与 LF（$） 两个符号组成的，Linux 是 LF ；对于 Linux 的影响很大")]),m])}const g=i(d,[["render",b],["__file","04.html.vue"]]);export{g as default};
