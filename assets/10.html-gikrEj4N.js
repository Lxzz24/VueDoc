import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as i,a as n,b as a,w as e,e as l,d as t}from"./app-2rf537eJ.js";const u="/VueDoc/assets/image-20231221140740305-r-zDrIxj.png",r="/VueDoc/assets/image-20231221140837145-_22tkV-1.png",d={},k={class:"hint-container details"},v=n("summary",null,"目录",-1),m={class:"table-of-contents"},b=l('<p>对一个 Web 应用程序来说，除了 Servlet、Filter 这些逻辑组件，还需要 JSP 这样的视图文件，外加一堆静态资源文件，如 CSS、JS 等。</p><p>合理组织文件结构非常重要。我们以一个具体的 Web 应用程序为例：</p><figure><img src="'+u+`" alt="image-20231221140740305" tabindex="0" loading="lazy"><figcaption>image-20231221140740305</figcaption></figure><p>我们把所有的静态资源文件放入 <code>/static/</code> 目录，在开发阶段，有些 Web 服务器会自动为我们加一个专门负责处理静态文件的 Servlet，但如果 <code>IndexServlet</code> 映射路径为 <code>/</code>，会屏蔽掉处理静态文件的 Servlet 映射。因此，我们需要自己编写一个处理静态文件的 <code>FileServlet</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token string">&quot;/static/*&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServletContext</span> ctx <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// RequestURI 包含 ContextPath, 需要去掉:</span>
        <span class="token class-name">String</span> urlPath <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取真实文件路径:</span>
        <span class="token class-name">String</span> filepath <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span>urlPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>filepath <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 无法获取到路径:</span>
            resp<span class="token punctuation">.</span><span class="token function">sendError</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span><span class="token punctuation">.</span><span class="token constant">SC_NOT_FOUND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Path</span> path <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>path<span class="token punctuation">.</span><span class="token function">toFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 文件不存在:</span>
            resp<span class="token punctuation">.</span><span class="token function">sendError</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span><span class="token punctuation">.</span><span class="token constant">SC_NOT_FOUND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 根据文件名猜测 Content-Type:</span>
        <span class="token class-name">String</span> mime <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">probeContentType</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mime <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mime <span class="token operator">=</span> <span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span>mime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 读取文件并写入 Response:</span>
        <span class="token class-name">OutputStream</span> output <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">InputStream</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            input<span class="token punctuation">.</span><span class="token function">transferTo</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        output<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来，在开发阶段，我们就可以方便地高效开发。</p><p>类似 Tomcat 这样的 Web 服务器，运行的 Web 应用程序通常都是业务系统，因此，这类服务器也被称为应用服务器。应用服务器并不擅长处理静态文件，也不适合直接暴露给用户。通常，我们在生产环境部署时，总是使用类似 Nginx 这样的服务器充当反向代理和静态服务器，只有动态请求才会放行给应用服务器，所以，部署架构如下：</p><figure><img src="`+r+`" alt="image-20231221140837145" tabindex="0" loading="lazy"><figcaption>image-20231221140837145</figcaption></figure><p>实现上述功能的 Nginx 配置文件如下：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen 80;

    server_name www.local.liaoxuefeng.com;

    # 静态文件根目录:
    root /path/to/src/main/webapp;

    access_log /var/log/nginx/webapp_access_log;
    error_log  /var/log/nginx/webapp_error_log;

    # 处理静态文件请求:
    location /static {
    }

    # 处理静态文件请求:
    location /favicon.ico {
    }

    # 不允许请求 / WEB-INF:
    location /WEB-INF {
        return 404;
    }

    # 其他请求转发给 Tomcat:
    location / {
        proxy_pass       http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Nginx 配合 Tomcat 服务器，可以充分发挥 Nginx 作为网关的优势，既可以高效处理静态文件，也可以把 https、防火墙、限速、反爬虫等功能放到 Nginx 中，使得我们自己的 WebApp 能专注于业务逻辑。</p><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><p>使用 Nginx + Tomcat 部署</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>部署 Web 应用程序时，要设计合理的目录结构，同时考虑开发模式需要便捷性，生产模式需要高性能。</p>`,15);function f(g,_){const s=o("router-link");return c(),i("div",null,[n("details",k,[v,n("nav",m,[n("ul",null,[n("li",null,[a(s,{to:"#练习"},{default:e(()=>[t("练习")]),_:1})]),n("li",null,[a(s,{to:"#小结"},{default:e(()=>[t("小结")]),_:1})])])])]),b])}const w=p(d,[["render",f],["__file","10.html.vue"]]);export{w as default};
