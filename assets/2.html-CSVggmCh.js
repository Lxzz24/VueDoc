import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as i,a as n,b as a,w as t,d as l,e}from"./app-CvlAI_tu.js";const u="/VueDoc/assets/image-20231220171947674-CG9MOUPB.png",k="/VueDoc/assets/l-20231220171655657-BL2qO-aa.jpeg",r="/VueDoc/assets/image-20231220172005588-DojMW4oV.png",d="/VueDoc/assets/l-20231220171655613-U-XJDgIo.jpeg",v={},m={class:"hint-container details"},g=n("summary",null,"目录",-1),b={class:"table-of-contents"},S=l(`<p>在 Web 应用程序中，我们经常要跟踪用户身份。当一个用户登录成功后，如果他继续访问其他页面，Web 程序如何才能识别出该用户身份？</p><p>因为 HTTP 协议是一个无状态协议，即 Web 应用程序无法区分收到的两个 HTTP 请求是否是同一个浏览器发出的。为了跟踪用户状态，服务器可以向浏览器分配一个唯一 ID，并以 Cookie 的形式发送到浏览器，浏览器在后续访问时总是附带此 Cookie，这样，服务器就可以识别用户身份。</p><h2 id="🍀-session" tabindex="-1"><a class="header-anchor" href="#🍀-session" aria-hidden="true">#</a> 🍀 Session</h2><p>我们把这种基于唯一 ID 识别用户身份的机制称为 Session。每个用户第一次访问服务器后，会自动获得一个 Session ID。如果用户在一段时间内没有访问服务器，那么 Session 会自动失效，下次即使带着上次分配的 Session ID 访问，服务器也认为这是一个新用户，会分配新的 Session ID。</p><p>JavaEE 的 Servlet 机制内建了对 Session 的支持。我们以登录为例，当一个用户登录成功后，我们就可以把这个用户的名字放入一个 <code>HttpSession</code> 对象，以便后续访问其他页面的时候，能直接从 <code>HttpSession</code> 取出用户名：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/signin&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SignInServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token comment">// 模拟一个数据库:</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bob123&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alice123&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tomcat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// GET 请求时显示登录页:</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> pw <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;Sign In&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;form action=\\&quot;/signin\\&quot;method=\\&quot;post\\&quot;&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;p&gt;Username: &lt;input name=\\&quot;username\\&quot;&gt;&lt;/p&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;p&gt;Password: &lt;input name=\\&quot;password\\&quot;type=\\&quot;password\\&quot;&gt;&lt;/p&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;p&gt;&lt;button type=\\&quot;submit\\&quot;&gt;Sign In&lt;/button&gt; &lt;a href=\\&quot;/\\&quot;&gt;Cancel&lt;/a&gt;&lt;/p&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;/form&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// POST 请求时处理用户登录:</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> expectedPassword <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>expectedPassword <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> expectedPassword<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 登录成功:</span>
            req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            resp<span class="token punctuation">.</span><span class="token function">sendError</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span><span class="token punctuation">.</span><span class="token constant">SC_FORBIDDEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 <code>SignInServlet</code> 在判断用户登录成功后，立刻将用户名放入当前 <code>HttpSession</code> 中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HttpSession</span> session <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>IndexServlet</code> 中，可以从 <code>HttpSession</code> 取出用户名：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 从 HttpSession 获取当前用户名:</span>
        <span class="token class-name">String</span> user <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;X-Powered-By&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JavaEE Servlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrintWriter</span> pw <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;Welcome,&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> user <span class="token operator">:</span> <span class="token string">&quot;Guest&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 未登录，显示登录链接:</span>
            pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;p&gt;&lt;a href=\\&quot;/signin\\&quot;&gt;Sign In&lt;/a&gt;&lt;/p&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 已登录，显示登出链接:</span>
            pw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;p&gt;&lt;a href=\\&quot;/signout\\&quot;&gt;Sign Out&lt;/a&gt;&lt;/p&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pw<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户已登录，可以通过访问 <code>/signout</code> 登出。登出逻辑就是从 <code>HttpSession</code> 中移除用户相关信息：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/signout&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SignOutServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 从 HttpSession 移除用户名:</span>
        req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 Web 应用程序来说，我们总是通过 <code>HttpSession</code> 这个高级接口访问当前 Session。如果要深入理解 Session 原理，可以认为 Web 服务器在内存中自动维护了一个 ID 到 <code>HttpSession</code> 的映射表，我们可以用下图表示：</p><figure><img src="`+u+'" alt="image-20231220171947674" tabindex="0" loading="lazy"><figcaption>image-20231220171947674</figcaption></figure><p>而服务器识别 Session 的关键就是依靠一个名为 <code>JSESSIONID</code> 的 Cookie。在 Servlet 中第一次调用 <code>req.getSession()</code> 时，Servlet 容器自动创建一个 Session ID，然后通过一个名为 <code>JSESSIONID</code> 的 Cookie 发送给浏览器：</p><figure><img src="'+k+`" alt="session" tabindex="0" loading="lazy"><figcaption>session</figcaption></figure><p>这里要注意的几点是：</p><ul><li><code>JSESSIONID</code> 是由 Servlet 容器自动创建的，目的是维护一个浏览器会话，它和我们的登录逻辑没有关系；</li><li>登录和登出的业务逻辑是我们自己根据 <code>HttpSession</code> 是否存在一个 <code>&quot;user&quot;</code> 的 Key 判断的，登出后，Session ID 并不会改变；</li><li>即使没有登录功能，仍然可以使用 <code>HttpSession</code> 追踪用户，例如，放入一些用户配置信息等。</li></ul><p>除了使用 Cookie 机制可以实现 Session 外，还可以通过隐藏表单、URL 末尾附加 ID 来追踪 Session。这些机制很少使用，最常用的 Session 机制仍然是 Cookie。</p><p>使用 Session 时，由于服务器把所有用户的 Session 都存储在内存中，如果遇到内存不足的情况，就需要把部分不活动的 Session 序列化到磁盘上，这会大大降低服务器的运行效率，因此，放入 Session 的对象要小，通常我们放入一个简单的 <code>User</code> 对象就足够了：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span> <span class="token comment">// 唯一标识</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用多台服务器构成集群时，使用 Session 会遇到一些额外的问题。通常，多台服务器集群使用反向代理作为网站入口：</p><figure><img src="`+r+`" alt="image-20231220172005588" tabindex="0" loading="lazy"><figcaption>image-20231220172005588</figcaption></figure><p>如果多台 Web Server 采用无状态集群，那么反向代理总是以轮询方式将请求依次转发给每台 Web Server，这会造成一个用户在 Web Server 1 存储的 Session 信息，在 Web Server 2 和 3 上并不存在，即从 Web Server 1 登录后，如果后续请求被转发到 Web Server 2 或 3，那么用户看到的仍然是未登录状态。</p><p>要解决这个问题，方案一是在所有 Web Server 之间进行 Session 复制，但这样会严重消耗网络带宽，并且，每个 Web Server 的内存均存储所有用户的 Session，内存使用率很低。</p><p>另一个方案是采用粘滞会话（Sticky Session）机制，即反向代理在转发请求的时候，总是根据 JSESSIONID 的值判断，相同的 JSESSIONID 总是转发到固定的 Web Server，但这需要反向代理的支持。</p><p>无论采用何种方案，使用 Session 机制，会使得 Web Server 的集群很难扩展，因此，Session 适用于中小型 Web 应用程序。对于大型 Web 应用程序来说，通常需要避免使用 Session 机制。</p><h2 id="🍀-cookie" tabindex="-1"><a class="header-anchor" href="#🍀-cookie" aria-hidden="true">#</a> 🍀 Cookie</h2><p>实际上，Servlet 提供的 <code>HttpSession</code> 本质上就是通过一个名为 <code>JSESSIONID</code> 的 Cookie 来跟踪用户会话的。除了这个名称外，其他名称的 Cookie 我们可以任意使用。</p><p>如果我们想要设置一个 Cookie，例如，记录用户选择的语言，可以编写一个 <code>LanguageServlet</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/pref&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LanguageServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token constant">LANGUAGES</span> <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> lang <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;lang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">LANGUAGES</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 创建一个新的 Cookie:</span>
            <span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">&quot;lang&quot;</span><span class="token punctuation">,</span> lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 该 Cookie 生效的路径范围:</span>
            cookie<span class="token punctuation">.</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 该 Cookie 有效期:</span>
            cookie<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">8640000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8640000 秒 = 100 天</span>
            <span class="token comment">// 将该 Cookie 添加到响应:</span>
            resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个新 Cookie 时，除了指定名称和值以外，通常需要设置 <code>setPath(&quot;/&quot;)</code>，浏览器根据此前缀决定是否发送 Cookie。如果一个 Cookie 调用了 <code>setPath(&quot;/user/&quot;)</code>，那么浏览器只有在请求以 <code>/user/</code> 开头的路径时才会附加此 Cookie。通过 <code>setMaxAge()</code> 设置 Cookie 的有效期，单位为秒，最后通过 <code>resp.addCookie()</code> 把它添加到响应。</p><p>如果访问的是 https 网页，还需要调用 <code>setSecure(true)</code>，否则浏览器不会发送该 Cookie。</p><p>因此，务必注意：浏览器在请求某个 URL 时，是否携带指定的 Cookie，取决于 Cookie 是否满足以下所有要求：</p><ul><li>URL 前缀是设置 Cookie 时的 Path；</li><li>Cookie 在有效期内；</li><li>Cookie 设置了 secure 时必须以 https 访问。</li></ul><p>我们可以在浏览器看到服务器发送的 Cookie：</p><figure><img src="`+d+`" alt="cookie" tabindex="0" loading="lazy"><figcaption>cookie</figcaption></figure><p>如果我们要读取 Cookie，例如，在 <code>IndexServlet</code> 中，读取名为 <code>lang</code> 的 Cookie 以获取用户设置的语言，可以写一个方法如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">parseLanguageFromCookie</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取请求附带的所有 Cookie:</span>
    <span class="token class-name">Cookie</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cookies <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果获取到 Cookie:</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cookies <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 循环每个 Cookie:</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Cookie</span> cookie <span class="token operator">:</span> cookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果 Cookie 名称为 lang:</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;lang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 返回 Cookie 的值:</span>
                <span class="token keyword">return</span> cookie<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回默认值:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，读取 Cookie 主要依靠遍历 <code>HttpServletRequest</code> 附带的所有 Cookie。</p><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>Servlet 容器提供了 Session 机制以跟踪用户；</p><p>默认的 Session 机制是以 Cookie 形式实现的，Cookie 名称为 <code>JSESSIONID</code>；</p><p>通过读写 Cookie 可以在客户端设置用户偏好等。</p>`,45);function q(f,w){const s=o("router-link");return c(),i("div",null,[n("details",m,[g,n("nav",b,[n("ul",null,[n("li",null,[a(s,{to:"#🍀-session"},{default:t(()=>[e("🍀 Session")]),_:1})]),n("li",null,[a(s,{to:"#🍀-cookie"},{default:t(()=>[e("🍀 Cookie")]),_:1})]),n("li",null,[a(s,{to:"#🍀-练习"},{default:t(()=>[e("🍀 练习")]),_:1})]),n("li",null,[a(s,{to:"#🍀-小结"},{default:t(()=>[e("🍀 小结")]),_:1})])])])]),S])}const C=p(v,[["render",q],["__file","2.html.vue"]]);export{C as default};