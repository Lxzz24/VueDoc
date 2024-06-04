import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as p,d as e}from"./app-CvlAI_tu.js";const c={},t=e("<ul><li><p>绝对路径：一定由根目录写起</p></li><li><p>特殊目录有：<code>.</code>、<code>..</code>、<code>-</code>、<code>~</code>、<code>~account</code> 需要注意</p></li><li><p>与目录相关的指令有：cd、mkdir、rmdir、pwd 等重要指令</p></li><li><p>rmdir 仅能删除空目录，要删除非空目录需使用 rm -f 指令</p></li><li><p>用户能使用的指令是依据 PATH 变量所规定的目录去查找的</p></li><li><p>ls 可以检视文件的属性，尤其 <code>-d、-a、-l</code> 等选项特别重要</p></li><li><p>文件的复制、删除、移动可以分别使用：cp、rm、mv 等指令</p></li><li><p>检查文件的内容（读文件）可使用的指令包括：cat、tac、nl、more、less、head、tail、od 等</p></li><li><p>cat -n 与 nl 均可显示行号，但默认的情况下，空白行会不会编号并不相同</p></li><li><p>touch 的目的在修改文件的时间参数，但是也可以用来创建空文件</p></li><li><p>一个文件记录的时间参数有三种：</p><ul><li>atime：access</li><li>ctime：status time</li><li>mtime：modification</li></ul><p>ls 默认显示的是 mtime</p></li><li><p>除了传统的 rwx 权限之外，在 ext2/3/4 、xfs 文件系统中，还可以使用 chattr 与 lsattr 设置和观察因此属性。常见的包括智能心情数据的 +a 与完全不能更动文件的 +i 属性</p></li><li><p>新建文件或目录时，新文件的预设权限使用 umask 来规范。默认目录完全权限为 drwxrwxrwx，文件则为 -rw-rw-rw-</p></li><li><p>文件具有 SUID 的特殊权限时，代表当用户执行此 binary 程序时，在执行过程中会暂时具有程序拥有者的权限</p></li><li><p>目录具有 SGID 的特殊权限时，代表用户在这个目录下创建的文件之群组都会与该目录的组名相同</p></li><li><p>目录具有 SBIT 的特殊权限时，代表在该目录下用户建立的文件只有自己与 root 能删除</p></li><li><p>观察文件的类型可以使用 file 指令</p></li><li><p>查找指令的完整文件名可用 which 或 type，他们都是通过 PATH 变量来查找的</p></li><li><p>查找文件的完整文件名可使用 whereis 找特定目录或 locate 到数据库查找，而不是实际在文件系统中全盘查找</p></li><li><p>利用 find 可以加入许多的选项来直接查询文件系统，以获得资金想要知道的文件名</p></li></ul>",1),o=[t];function r(d,a){return l(),p("div",null,o)}const n=i(c,[["render",r],["__file","07.html.vue"]]);export{n as default};
