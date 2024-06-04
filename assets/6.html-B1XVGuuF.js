import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,a as n,b as a,w as t,d as i,e as p}from"./app-CvlAI_tu.js";const u="/VueDoc/assets/image-20231219150745719-IMdZN9cC.png",k="/VueDoc/assets/image-20231219150818681-jMLTUztB.png",d="/VueDoc/assets/image-20231219150841348-D3bEXK4W.png",r={},m={class:"hint-container details"},v=n("summary",null,"目录",-1),T={class:"table-of-contents"},g=i('<p>什么是 HTTP？HTTP 就是目前使用最广泛的 Web 应用程序使用的基础协议，例如，浏览器访问网站，手机 App 访问后台服务器，都是通过 HTTP 协议实现的。</p><p>HTTP 是 HyperText Transfer Protocol 的缩写，翻译为超文本传输协议，它是基于 TCP 协议之上的一种请求 - 响应协议。</p><p>我们来看一下浏览器请求访问某个网站时发送的 HTTP 请求 - 响应。当浏览器希望访问某个网站时，浏览器和网站服务器之间首先建立 TCP 连接，且服务器总是使用 <code>80</code> 端口和加密端口 <code>443</code>，然后，浏览器向服务器发送一个 HTTP 请求，服务器收到后，返回一个 HTTP 响应，并且在响应中包含了 HTML 的网页内容，这样，浏览器解析 HTML 后就可以给用户显示网页了。一个完整的 HTTP 请求 - 响应如下：</p><figure><img src="'+u+`" alt="image-20231219150745719" tabindex="0" loading="lazy"><figcaption>image-20231219150745719</figcaption></figure><p>HTTP 请求的格式是固定的，它由 HTTP Header 和 HTTP Body 两部分构成。第一行总是 <code>请求方法 路径 HTTP 版本</code>，例如，<code>GET / HTTP/1.1</code> 表示使用 <code>GET</code> 请求，路径是 <code>/</code>，版本是 <code>HTTP/1.1</code>。</p><p>后续的每一行都是固定的 <code>Header: Value</code> 格式，我们称为 HTTP Header，服务器依靠某些特定的 Header 来识别客户端请求，例如：</p><ul><li>Host：表示请求的域名，因为一台服务器上可能有多个网站，因此有必要依靠 Host 来识别请求是发给哪个网站的；</li><li>User-Agent：表示客户端自身标识信息，不同的浏览器有不同的标识，服务器依靠 User-Agent 判断客户端类型是 IE 还是 Chrome，是 Firefox 还是一个 Python 爬虫；</li><li>Accept：表示客户端能处理的 HTTP 响应格式，<code>*/*</code> 表示任意格式，<code>text/*</code> 表示任意文本，<code>image/png</code> 表示 PNG 格式的图片；</li><li>Accept-Language：表示客户端接收的语言，多种语言按优先级排序，服务器依靠该字段给用户返回特定语言的网页版本。</li></ul><p>如果是 <code>GET</code> 请求，那么该 HTTP 请求只有 HTTP Header，没有 HTTP Body。如果是 <code>POST</code> 请求，那么该 HTTP 请求带有 Body，以一个空行分隔。一个典型的带 Body 的 HTTP 请求如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /login HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 30

username=hello&amp;password=123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>POST</code> 请求通常要设置 <code>Content-Type</code> 表示 Body 的类型，<code>Content-Length</code> 表示 Body 的长度，这样服务器就可以根据请求的 Header 和 Body 做出正确的响应。</p><p>此外，<code>GET</code> 请求的参数必须附加在 URL 上，并以 URLEncode 方式编码，例如：<code>http://www.example.com/?a=1&amp;b=K%26R</code>，参数分别是 <code>a=1</code> 和 <code>b=K&amp;R</code>。因为 URL 的长度限制，<code>GET</code> 请求的参数不能太多，而 <code>POST</code> 请求的参数就没有长度限制，因为 <code>POST</code> 请求的参数必须放到 Body 中。并且，<code>POST</code> 请求的参数不一定是 URL 编码，可以按任意格式编码，只需要在 <code>Content-Type</code> 中正确设置即可。常见的发送 JSON 的 <code>POST</code> 请求如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /login HTTP/1.1
Content-Type: application/json
Content-Length: 38

{&quot;username&quot;:&quot;bob&quot;,&quot;password&quot;:&quot;123456&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTTP 响应也是由 Header 和 Body 两部分组成，一个典型的 HTTP 响应如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 133251

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应的第一行总是 <code>HTTP 版本 响应代码 响应说明 </code>，例如，<code>HTTP/1.1 200 OK</code> 表示版本是 <code>HTTP/1.1</code>，响应代码是 <code>200</code>，响应说明是 <code>OK</code>。客户端只依赖响应代码判断 HTTP 响应是否成功。HTTP 有固定的响应代码：</p><ul><li>1xx：表示一个提示性响应，例如 101 表示将切换协议，常见于 WebSocket 连接；</li><li>2xx：表示一个成功的响应，例如 200 表示成功，206 表示只发送了部分内容；</li><li>3xx：表示一个重定向的响应，例如 301 表示永久重定向，303 表示客户端应该按指定路径重新发送请求；</li><li>4xx：表示一个因为客户端问题导致的错误响应，例如 400 表示因为 Content-Type 等各种原因导致的无效请求，404 表示指定的路径不存在；</li><li>5xx：表示一个因为服务器问题导致的错误响应，例如 500 表示服务器内部故障，503 表示服务器暂时无法响应。</li></ul><p>当浏览器收到第一个 HTTP 响应后，它解析 HTML 后，又会发送一系列 HTTP 请求，例如，<code>GET /logo.jpg HTTP/1.1</code> 请求一个图片，服务器响应图片请求后，会直接把二进制内容的图片发送给浏览器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
Content-Type: image/jpeg
Content-Length: 18391

????JFIFHH??XExifMM?i&amp;??X?...(二进制的 JPEG 图片)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，服务器总是被动地接收客户端的一个 HTTP 请求，然后响应它。客户端则根据需要发送若干个 HTTP 请求。</p><p>对于最早期的 HTTP/1.0 协议，每次发送一个 HTTP 请求，客户端都需要先创建一个新的 TCP 连接，然后，收到服务器响应后，关闭这个 TCP 连接。由于建立 TCP 连接就比较耗时，因此，为了提高效率，HTTP/1.1 协议允许在一个 TCP 连接中反复发送 - 响应，这样就能大大提高效率：</p><figure><img src="`+k+'" alt="image-20231219150818681" tabindex="0" loading="lazy"><figcaption>image-20231219150818681</figcaption></figure><p>因为 HTTP 协议是一个请求 - 响应协议，客户端在发送了一个 HTTP 请求后，必须等待服务器响应后，才能发送下一个请求，这样一来，如果某个响应太慢，它就会堵住后面的请求。</p><p>所以，为了进一步提速，HTTP/2.0 允许客户端在没有收到响应的时候，发送多个 HTTP 请求，服务器返回响应的时候，不一定按顺序返回，只要双方能识别出哪个响应对应哪个请求，就可以做到并行发送和接收：</p><figure><img src="'+d+`" alt="image-20231219150841348" tabindex="0" loading="lazy"><figcaption>image-20231219150841348</figcaption></figure><p>可见，HTTP/2.0 进一步提高了效率。</p><h2 id="🍀-http-编程" tabindex="-1"><a class="header-anchor" href="#🍀-http-编程" aria-hidden="true">#</a> 🍀 HTTP 编程</h2><p>既然 HTTP 涉及到客户端和服务器端，和 TCP 类似，我们也需要针对客户端编程和针对服务器端编程。</p><p>本节我们不讨论服务器端的 HTTP 编程，因为服务器端的 HTTP 编程本质上就是编写 Web 服务器，这是一个非常复杂的体系，也是 JavaEE 开发的核心内容，我们在后面的章节再仔细研究。</p><p>本节我们只讨论作为客户端的 HTTP 编程。</p><p>因为浏览器也是一种 HTTP 客户端，所以，客户端的 HTTP 编程，它的行为本质上和浏览器是一样的，即发送一个 HTTP 请求，接收服务器响应后，获得响应内容。只不过浏览器进一步把响应内容解析后渲染并展示给了用户，而我们使用 Java 进行 HTTP 客户端编程仅限于获得响应内容。</p><p>我们来看一下 Java 如何使用 HTTP 客户端编程。</p><p>Java 标准库提供了基于 HTTP 的包，但是要注意，早期的 JDK 版本是通过 <code>HttpURLConnection</code> 访问 HTTP，典型代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.example.com/path/to/target?a=1&amp;b=2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HttpURLConnection</span> conn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpURLConnection</span><span class="token punctuation">)</span> url<span class="token punctuation">.</span><span class="token function">openConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
conn<span class="token punctuation">.</span><span class="token function">setRequestMethod</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
conn<span class="token punctuation">.</span><span class="token function">setUseCaches</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
conn<span class="token punctuation">.</span><span class="token function">setConnectTimeout</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 请求超时 5 秒</span>
<span class="token comment">// 设置 HTTP 头:</span>
conn<span class="token punctuation">.</span><span class="token function">setRequestProperty</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
conn<span class="token punctuation">.</span><span class="token function">setRequestProperty</span><span class="token punctuation">(</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mozilla/5.0 (compatible; MSIE 11; Windows NT 5.1)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 连接并发送 HTTP 请求:</span>
conn<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 判断 HTTP 响应是否 200:</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>conn<span class="token punctuation">.</span><span class="token function">getResponseCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;bad response&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 获取所有响应 Header:</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">getHeaderFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 获取响应内容:</span>
<span class="token class-name">InputStream</span> input <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码编写比较繁琐，并且需要手动处理 <code>InputStream</code>，所以用起来很麻烦。</p><p>从 Java 11 开始，引入了新的 <code>HttpClient</code>，它使用链式调用的 API，能大大简化 HTTP 的处理。</p><p>我们来看一下如何使用新版的 <code>HttpClient</code>。首先需要创建一个全局 <code>HttpClient</code> 实例，因为 <code>HttpClient</code> 内部使用线程池优化多个 HTTP 连接，可以复用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">HttpClient</span> httpClient <span class="token operator">=</span> <span class="token class-name">HttpClient</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>GET</code> 请求获取文本内容代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URI</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpClient</span><span class="token punctuation">.</span><span class="token class-name">Version</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">Duration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token comment">// 全局 HttpClient:</span>
    <span class="token keyword">static</span> <span class="token class-name">HttpClient</span> httpClient <span class="token operator">=</span> <span class="token class-name">HttpClient</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;https://www.sina.com.cn/&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpRequest</span> request <span class="token operator">=</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URI</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置 Header:</span>
            <span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java HttpClient&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置超时:</span>
            <span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofSeconds</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 设置版本:</span>
            <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token class-name">Version</span><span class="token punctuation">.</span><span class="token constant">HTTP_2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> response <span class="token operator">=</span> httpClient<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">HttpResponse<span class="token punctuation">.</span>BodyHandlers</span><span class="token punctuation">.</span><span class="token function">ofString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// HTTP 允许重复的 Header，因此一个 Header 可对应多个 Value:</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> headers <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> header <span class="token operator">:</span> headers<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>header <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要获取图片这样的二进制内容，只需要把 <code>HttpResponse.BodyHandlers.ofString()</code> 换成 <code>HttpResponse.BodyHandlers.ofByteArray()</code>，就可以获得一个 <code>HttpResponse&lt;byte[]&gt;</code> 对象。如果响应的内容很大，不希望一次性全部加载到内存，可以使用 <code>HttpResponse.BodyHandlers.ofInputStream()</code> 获取一个 <code>InputStream</code> 流。</p><p>要使用 <code>POST</code> 请求，我们要准备好发送的 Body 数据并正确设置 <code>Content-Type</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://www.example.com/login&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> body <span class="token operator">=</span> <span class="token string">&quot;username=bob&amp;password=123456&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">HttpRequest</span> request <span class="token operator">=</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URI</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 设置 Header:</span>
    <span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 设置超时:</span>
    <span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofSeconds</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 设置版本:</span>
    <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token class-name">Version</span><span class="token punctuation">.</span><span class="token constant">HTTP_2</span><span class="token punctuation">)</span>
    <span class="token comment">// 使用 POST 并设置 Body:</span>
    <span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token class-name">BodyPublishers</span><span class="token punctuation">.</span><span class="token function">ofString</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HttpResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> response <span class="token operator">=</span> httpClient<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">HttpResponse<span class="token punctuation">.</span>BodyHandlers</span><span class="token punctuation">.</span><span class="token function">ofString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见发送 <code>POST</code> 数据也十分简单。</p><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><p>使用 HttpClient</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>Java 提供了 <code>HttpClient</code> 作为新的 HTTP 客户端编程接口用于取代老的 <code>HttpURLConnection</code> 接口；</p><p><code>HttpClient</code> 使用链式调用并通过内置的 <code>BodyPublishers</code> 和 <code>BodyHandlers</code> 来更方便地处理数据。</p>`,48);function b(H,P){const s=o("router-link");return c(),l("div",null,[n("details",m,[v,n("nav",T,[n("ul",null,[n("li",null,[a(s,{to:"#🍀-http-编程"},{default:t(()=>[p("🍀 HTTP 编程")]),_:1})]),n("li",null,[a(s,{to:"#🍀-练习"},{default:t(()=>[p("🍀 练习")]),_:1})]),n("li",null,[a(s,{to:"#🍀-小结"},{default:t(()=>[p("🍀 小结")]),_:1})])])])]),g])}const y=e(r,[["render",b],["__file","6.html.vue"]]);export{y as default};
