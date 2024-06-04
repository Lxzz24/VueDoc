import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as l,a as n,b as s,w as t,d as u,e as p}from"./app-CvlAI_tu.js";const i={},k={class:"hint-container details"},d=n("summary",null,"目录",-1),r={class:"table-of-contents"},m=u(`<p>和 TCP 编程相比，UDP 编程就简单得多，因为 UDP 没有创建连接，数据包也是一次收发一个，所以没有流的概念。</p><p>在 Java 中使用 UDP 编程，仍然需要使用 Socket，因为应用程序在使用 UDP 时必须指定网络接口（IP）和端口号。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>UDP 端口和 TCP 端口虽然都使用 0 ~ 65535，但他们是两套独立的端口，即一个应用程序用 TCP 占用了端口 1234，不影响另一个应用程序用 UDP 占用端口 1234。</p></div><h2 id="🍀-服务器端" tabindex="-1"><a class="header-anchor" href="#🍀-服务器端" aria-hidden="true">#</a> 🍀 服务器端</h2><p>在服务器端，使用 UDP 也需要监听指定的端口。Java 提供了 <code>DatagramSocket</code> 来实现这个功能，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DatagramSocket</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 监听指定端口</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 无限循环</span>
    <span class="token comment">// 数据缓冲区:</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> buffer<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ds<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 收取一个 UDP 数据包</span>
    <span class="token comment">// 收取到的数据存储在 buffer 中，由 packet.getOffset(), packet.getLength() 指定起始位置和长度</span>
    <span class="token comment">// 将其按 UTF-8 编码转换为 String:</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>packet<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> packet<span class="token punctuation">.</span><span class="token function">getOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> packet<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 发送数据:</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token string">&quot;ACK&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    packet<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ds<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器端首先使用如下语句在指定的端口监听 UDP 数据包：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DatagramSocket</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有其他应用程序占据这个端口，那么监听成功，我们就使用一个无限循环来处理收到的 UDP 数据包：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要接收一个 UDP 数据包，需要准备一个 <code>byte[]</code> 缓冲区，并通过 <code>DatagramPacket</code> 实现接收：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> buffer<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们收取到的是一个 <code>String</code>，那么，通过 <code>DatagramPacket</code> 返回的 <code>packet.getOffset()</code> 和 <code>packet.getLength()</code> 确定数据在缓冲区的起止位置：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>packet<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> packet<span class="token punctuation">.</span><span class="token function">getOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> packet<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当服务器收到一个 DatagramPacket 后，通常必须立刻回复一个或多个 UDP 包，因为客户端地址在 DatagramPacket 中，每次收到的 DatagramPacket 可能是不同的客户端，如果不回复，客户端就收不到任何 UDP 包。</p><p>发送 UDP 包也是通过 <code>DatagramPacket</code> 实现的，发送代码非常简单：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
packet<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-客户端" tabindex="-1"><a class="header-anchor" href="#🍀-客户端" aria-hidden="true">#</a> 🍀 客户端</h2><p>和服务器端相比，客户端使用 UDP 时，只需要直接向服务器端发送 UDP 包，然后接收返回的 UDP 包：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DatagramSocket</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">setSoTimeout</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 连接指定服务器和端口</span>
<span class="token comment">// 发送:</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 接收:</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> buffer<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> resp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>packet<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> packet<span class="token punctuation">.</span><span class="token function">getOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> packet<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 关闭:</span>
ds<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端打开一个 <code>DatagramSocket</code> 使用以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DatagramSocket</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">setSoTimeout</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端创建 <code>DatagramSocket</code> 实例时并不需要指定端口，而是由操作系统自动指定一个当前未使用的端口。紧接着，调用 <code>setSoTimeout(1000)</code> 设定超时 1 秒，意思是后续接收 UDP 包时，等待时间最多不会超过 1 秒，否则在没有收到 UDP 包时，客户端会无限等待下去。这一点和服务器端不一样，服务器端可以无限等待，因为它本来就被设计成长时间运行。</p><p>注意到客户端的 <code>DatagramSocket</code> 还调用了一个 <code>connect()</code> 方法 “连接” 到指定的服务器端。不是说 UDP 是无连接的协议吗？为啥这里需要 <code>connect()</code>？</p><p>这个 <code>connect()</code> 方法不是真连接，它是为了在客户端的 <code>DatagramSocket</code> 实例中保存服务器端的 IP 和端口号，确保这个 <code>DatagramSocket</code> 实例只能往指定的地址和端口发送 UDP 包，不能往其他地址和端口发送。这么做不是 UDP 的限制，而是 Java 内置了安全检查。</p><p>后续的收发数据和服务器端是一致的。通常来说，客户端必须先发 UDP 包，因为客户端不发 UDP 包，服务器端就根本不知道客户端的地址和端口号。</p><p>如果客户端认为通信结束，就可以调用 <code>disconnect()</code> 断开连接：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>ds<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意到 <code>disconnect()</code> 也不是真正地断开连接，它只是清除了客户端 <code>DatagramSocket</code> 实例记录的远程服务器地址和端口号，这样，<code>DatagramSocket</code> 实例就可以连接另一个服务器端。</p><p>如果客户端希望向两个不同的服务器发送 UDP 包，有两种方法：</p><ol><li>客户端可以创建两个 <code>DatagramSocket</code> 实例，用 <code>connect()</code> 连接到不同的服务器；</li><li>客户端也可以不调用 <code>connect()</code> 方法，而是在创建 <code>DatagramPacket</code> 的时候指定服务器地址，这样可以用一个 <code>DatagramSocket</code> 实例发送 <code>DatagramPacket</code> 到不同的服务器。</li></ol><p>不调用 <code>connect()</code> 方法的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DatagramSocket</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">setSoTimeout</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 发送到 localhost:6666:</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data1 <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> packet1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">6666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 发送到 localhost:8888:</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data2 <span class="token operator">=</span> <span class="token string">&quot;Hi&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> packet2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>data2<span class="token punctuation">,</span> data2<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 关闭:</span>
ds<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><p>使用 UDP 实现服务器和客户端通信</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>使用 UDP 协议通信时，服务器和客户端双方无需建立连接：</p><ul><li>服务器端用 <code>DatagramSocket(port)</code> 监听端口；</li><li>客户端使用 <code>DatagramSocket.connect()</code> 指定远程地址和端口；</li><li>双方通过 <code>receive()</code> 和 <code>send()</code> 读写数据；</li><li><code>DatagramSocket</code> 没有 IO 流接口，数据被直接写入 <code>byte[]</code> 缓冲区。</li></ul>`,38);function v(g,b){const a=c("router-link");return o(),l("div",null,[n("details",k,[d,n("nav",r,[n("ul",null,[n("li",null,[s(a,{to:"#🍀-服务器端"},{default:t(()=>[p("🍀 服务器端")]),_:1})]),n("li",null,[s(a,{to:"#🍀-客户端"},{default:t(()=>[p("🍀 客户端")]),_:1})]),n("li",null,[s(a,{to:"#🍀-练习"},{default:t(()=>[p("🍀 练习")]),_:1})]),n("li",null,[s(a,{to:"#🍀-小结"},{default:t(()=>[p("🍀 小结")]),_:1})])])])]),m])}const h=e(i,[["render",v],["__file","3.html.vue"]]);export{h as default};
