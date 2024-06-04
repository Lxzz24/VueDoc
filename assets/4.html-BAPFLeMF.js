import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as d,a as n,b as a,w as e,e as s,d as l}from"./app-CvlAI_tu.js";const u="/VueDoc/assets/l-20231221154251203-DcfmwSsb.png",v="/VueDoc/assets/l-20231221154305694-By0QiYDX.png",m="/VueDoc/assets/l-20231221154335517-DV6b6lxY.png",k="/VueDoc/assets/l-20231221154348695-CAGU-_IH.png",g="/VueDoc/assets/l-20231221154348764-Cd7JmdrV.png",b="/VueDoc/assets/l-20231221154408761-DLyAcMRm.png",h="/VueDoc/assets/l-20231221154408728-BuwgORLM.png",S="/VueDoc/assets/l-20231221154445746-DI0k4xey.png",f="/VueDoc/assets/l-20231221154445845-CWFLLe2i.png",x="/VueDoc/assets/l-20231221154501285-Dt1VHgjy.png",w={},C={class:"hint-container details"},q=n("summary",null,"目录",-1),y={class:"table-of-contents"},M=n("ol",null,[n("li",null,"Servlet 规范定义了几种标准组件：Servlet、JSP、Filter 和 Listener；"),n("li",null,"Servlet 的标准组件总是运行在 Servlet 容器中，如 Tomcat、Jetty、WebLogic 等。")],-1),_=n("p",null,"直接使用 Servlet 进行 Web 开发好比直接在 JDBC 上操作数据库，比较繁琐，更好的方法是在 Servlet 基础上封装 MVC 框架，基于 MVC 开发 Web 应用，大部分时候，不需要接触 Servlet API，开发省时省力。",-1),R={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1266264917931808",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1337408645759009",target:"_blank",rel:"noopener noreferrer"},F=n("p",null,"因此，开发 Web 应用，首先要选择一个优秀的 MVC 框架。常用的 MVC 框架有：",-1),T={href:"https://struts.apache.org/",target:"_blank",rel:"noopener noreferrer"},H=n("li",null,"WebWork：一个比 Struts 设计更优秀的 MVC 框架，但不知道出于什么原因，从 2.0 开始把自己的代码全部塞给 Struts 2 了；",-1),V={href:"https://turbine.apache.org/",target:"_blank",rel:"noopener noreferrer"},L=n("li",null,"其他 100+MVC 框架……（略）",-1),W={href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html",target:"_blank",rel:"noopener noreferrer"},j=n("p",null,"本章我们会详细介绍如何基于 Spring MVC 开发 Web 应用。",-1),I=n("h2",{id:"🍀-使用-spring-mvc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🍀-使用-spring-mvc","aria-hidden":"true"},"#"),s(" 🍀 使用 Spring MVC")],-1),O={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1255945497738400",target:"_blank",rel:"noopener noreferrer"},P=n("ul",null,[n("li",null,"Servlet：能处理 HTTP 请求并将 HTTP 响应返回；"),n("li",null,"JSP：一种嵌套 Java 代码的 HTML，将被编译为 Servlet；"),n("li",null,"Filter：能过滤指定的 URL 以实现拦截功能；"),n("li",null,"Listener：监听指定的事件，如 ServletContext、HttpSession 的创建和销毁。")],-1),E=n("p",null,[s("此外，Servlet 容器为每个 Web 应用程序自动创建一个唯一的 "),n("code",null,"ServletContext"),s(" 实例，这个实例就代表了 Web 应用程序本身。")],-1),U={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1337408645759009",target:"_blank",rel:"noopener noreferrer"},B=l(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/register&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/signin&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">signin</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> email<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，Spring 提供的是一个 IoC 容器，所有的 Bean，包括 Controller，都在 Spring IoC 容器中被初始化，而 Servlet 容器由 JavaEE 服务器提供（如 Tomcat），Servlet 容器对 Spring 一无所知，他们之间到底依靠什么进行联系，又是以何种顺序初始化的？</p><p>在理解上述问题之前，我们先把基于 Spring MVC 开发的项目结构搭建起来。首先创建基于 Web 的 Maven 工程，引入如下依赖：</p><ul><li>org.springframework:spring-context:6.0.0</li><li>org.springframework:spring-webmvc:6.0.0</li><li>org.springframework:spring-jdbc:6.0.0</li><li>jakarta.annotation:jakarta.annotation-api:2.1.1</li><li>io.pebbletemplates:pebble-spring6:3.2.0</li><li>ch.qos.logback:logback-core:1.4.4</li><li>ch.qos.logback:logback-classic:1.4.4</li><li>com.zaxxer:HikariCP:5.0.1</li><li>org.hsqldb:hsqldb:2.7.0</li></ul><p>以及 <code>provided</code> 依赖：</p><ul><li>org.apache.tomcat.embed:tomcat-embed-core:10.1.1</li><li>org.apache.tomcat.embed:tomcat-embed-jasper:10.1.1</li></ul><p>这个标准的 Maven Web 工程目录结构如下：</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>spring-web-mvc
├── pom.xml
└── src
    └── main
        ├── java
        │   └── com
        │       └── itranswarp
        │           └── learnjava
        │               ├── AppConfig.java
        │               ├── DatabaseInitializer.java
        │               ├── entity
        │               │   └── User.java
        │               ├── service
        │               │   └── UserService.java
        │               └── web
        │                   └── UserController.java
        ├── resources
        │   ├── jdbc.properties
        │   └── logback.xml
        └── webapp
            ├── WEB-INF
            │   ├── templates
            │   │   ├── _base.html
            │   │   ├── index.html
            │   │   ├── profile.html
            │   │   ├── register.html
            │   │   └── signin.html
            │   └── web.xml
            └── static
                ├── css
                │   └── bootstrap.css
                └── js
                    └── jquery.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>src/main/webapp</code> 是标准 web 目录，<code>WEB-INF</code> 存放 <code>web.xml</code>，编译的 class，第三方 jar，以及不允许浏览器直接访问的 View 模版，<code>static</code> 目录存放所有静态文件。</p><p>在 <code>src/main/resources</code> 目录中存放的是 Java 程序读取的 classpath 资源文件，除了 JDBC 的配置文件 <code>jdbc.properties</code> 外，我们又新增了一个 <code>logback.xml</code>，这是 Logback 的默认查找的配置文件：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>STDOUT<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.ConsoleAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.classic.PatternLayout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pattern</span><span class="token punctuation">&gt;</span></span>%d{yyyy-MM-dd HH:mm:ss} %-5level %logger{36} - %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Pattern</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.itranswarp.learnjava<span class="token punctuation">&quot;</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">additivity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>STDOUT<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logger</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>STDOUT<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面给出了一个写入到标准输出的 Logback 配置，可以基于上述配置添加写入到文件的配置。</p><p>在 <code>src/main/java</code> 中就是我们编写的 Java 代码了。</p><h3 id="配置-spring-mvc" tabindex="-1"><a class="header-anchor" href="#配置-spring-mvc" aria-hidden="true">#</a> 配置 Spring MVC</h3><p>和普通 Spring 配置一样，我们编写正常的 <code>AppConfig</code> 后，只需加上 <code>@EnableWebMvc</code> 注解，就 “激活” 了 Spring MVC：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span>
<span class="token annotation punctuation">@EnableWebMvc</span> <span class="token comment">// 启用 Spring MVC</span>
<span class="token annotation punctuation">@EnableTransactionManagement</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/jdbc.properties&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了创建 <code>DataSource</code>、<code>JdbcTemplate</code>、<code>PlatformTransactionManager</code> 外，<code>AppConfig</code> 需要额外创建几个用于 Spring MVC 的 Bean：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token class-name">WebMvcConfigurer</span> <span class="token function">createWebMvcConfigurer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WebMvcConfigurer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/static/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;/static/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>WebMvcConfigurer</code> 并不是必须的，但我们在这里创建一个默认的 <code>WebMvcConfigurer</code>，只覆写 <code>addResourceHandlers()</code>，目的是让 Spring MVC 自动处理静态文件，并且映射路径为 <code>/static/**</code>。</p><p>另一个必须要创建的 Bean 是 <code>ViewResolver</code>，因为 Spring MVC 允许集成任何模板引擎，使用哪个模板引擎，就实例化一个对应的 <code>ViewResolver</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token class-name">ViewResolver</span> <span class="token function">createViewResolver</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span> <span class="token class-name">ServletContext</span> servletContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PebbleEngine<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">autoEscaping</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token comment">// cache:</span>
            <span class="token punctuation">.</span><span class="token function">cacheActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
            <span class="token comment">// loader:</span>
            <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Servlet5Loader</span><span class="token punctuation">(</span>servletContext<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> viewResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PebbleViewResolver</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
    viewResolver<span class="token punctuation">.</span><span class="token function">setPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;/WEB-INF/templates/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    viewResolver<span class="token punctuation">.</span><span class="token function">setSuffix</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> viewResolver<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ViewResolver</code> 通过指定 <code>prefix</code> 和 <code>suffix</code> 来确定如何查找 View。上述配置使用 Pebble 引擎，指定模板文件存放在 <code>/WEB-INF/templates/</code> 目录下。</p><p>剩下的 Bean 都是普通的 <code>@Component</code>，但 Controller 必须标记为 <code>@Controller</code>，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Controller 使用 @Controller 标记而不是 @Component:</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">// 正常使用 @Autowired 注入:</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token comment">// 处理一个 URL 映射:</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是普通的 Java 应用程序，我们通过 <code>main()</code> 方法可以很简单地创建一个 Spring 容器的实例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">AppConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是问题来了，现在是 Web 应用程序，而 Web 应用程序总是由 Servlet 容器创建，那么，Spring 容器应该由谁创建？在什么时候创建？Spring 容器中的 Controller 又是如何通过 Servlet 调用的？</p><p>在 Web 应用中启动 Spring 容器有很多种方法，可以通过 Listener 启动，也可以通过 Servlet 启动，可以使用 XML 配置，也可以使用注解配置。这里，我们只介绍一种 * 最简单 * 的启动 Spring 容器的方式。</p><p>第一步，我们在 <code>web.xml</code> 中配置 Spring MVC 提供的 <code>DispatcherServlet</code>：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>dispatcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>contextClass<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>org.springframework.web.context.support.AnnotationConfigWebApplicationContext<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>contextConfigLocation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>com.itranswarp.learnjava.AppConfig<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>dispatcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化参数 <code>contextClass</code> 指定使用注解配置的 <code>AnnotationConfigWebApplicationContext</code>，配置文件的位置参数 <code>contextConfigLocation</code> 指向 <code>AppConfig</code> 的完整类名，最后，把这个 Servlet 映射到 <code>/*</code>，即处理所有 URL。</p><p>上述配置可以看作一个样板配置，有了这个配置，Servlet 容器会首先初始化 Spring MVC 的 <code>DispatcherServlet</code>，在 <code>DispatcherServlet</code> 启动时，它根据配置 <code>AppConfig</code> 创建了一个类型是 <code>WebApplicationContext</code> 的 IoC 容器，完成所有 Bean 的初始化，并将容器绑到 <code>ServletContext</code> 上。</p><p>因为 <code>DispatcherServlet</code> 持有 IoC 容器，能从 IoC 容器中获取所有 <code>@Controller</code> 的 Bean，因此，<code>DispatcherServlet</code> 接收到所有 HTTP 请求后，根据 Controller 方法配置的路径，就可以正确地把请求转发到指定方法，并根据返回的 <code>ModelAndView</code> 决定如何渲染页面。</p><p>最后，我们在 <code>AppConfig</code> 中通过 <code>main()</code> 方法启动嵌入式 Tomcat：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">Tomcat</span> tomcat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tomcat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tomcat<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token string">&quot;port&quot;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tomcat<span class="token punctuation">.</span><span class="token function">getConnector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Context</span> ctx <span class="token operator">=</span> tomcat<span class="token punctuation">.</span><span class="token function">addWebapp</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;src/main/webapp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WebResourceRoot</span> resources <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StandardRoot</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    resources<span class="token punctuation">.</span><span class="token function">addPreResources</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">DirResourceSet</span><span class="token punctuation">(</span>resources<span class="token punctuation">,</span> <span class="token string">&quot;/WEB-INF/classes&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;target/classes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">setResources</span><span class="token punctuation">(</span>resources<span class="token punctuation">)</span><span class="token punctuation">;</span>
    tomcat<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tomcat<span class="token punctuation">.</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 Web 应用程序就是我们使用 Spring MVC 时的一个最小启动功能集。由于使用了 JDBC 和数据库，用户的注册、登录信息会被持久化：</p><figure><img src="`+u+`" alt="spring-mvc" tabindex="0" loading="lazy"><figcaption>spring-mvc</figcaption></figure><h3 id="编写-controller" tabindex="-1"><a class="header-anchor" href="#编写-controller" aria-hidden="true">#</a> 编写 Controller</h3><p>有了 Web 应用程序的最基本的结构，我们的重点就可以放在如何编写 Controller 上。Spring MVC 对 Controller 没有固定的要求，也不需要实现特定的接口。以 <code>UserController</code> 为例，编写 Controller 只需要遵循以下要点：</p><p>总是标记 <code>@Controller</code> 而不是 <code>@Component</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个方法对应一个 HTTP 请求路径，用 <code>@GetMapping</code> 或 <code>@PostMapping</code> 表示 GET 或 POST 请求：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/signin&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doSignin</span><span class="token punctuation">(</span>
        <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> email<span class="token punctuation">,</span>
        <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> password<span class="token punctuation">,</span>
        <span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要接收的 HTTP 参数以 <code>@RequestParam()</code> 标注，可以设置默认值。如果方法参数需要传入 <code>HttpServletRequest</code>、<code>HttpServletResponse</code> 或者 <code>HttpSession</code>，直接添加这个类型的参数即可，Spring MVC 会自动按类型传入。</p><p>返回的 ModelAndView 通常包含 View 的路径和一个 Map 作为 Model，但也可以没有 Model，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token string">&quot;signin.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 仅 View，没有 Model</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回重定向时既可以写 <code>new ModelAndView(&quot;redirect:/signin&quot;)</code>，也可以直接返回 String：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;redirect:/signin&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;redirect:/profile&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在方法内部直接操作 <code>HttpServletResponse</code> 发送响应，返回 <code>null</code> 表示无需进一步处理：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">OutputStream</span> output <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    output<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    output<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对 URL 进行分组，每组对应一个 Controller 是一种很好的组织形式，并可以在 Controller 的 class 定义出添加 URL 前缀，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意实际 URL 映射是 / user/profile</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/profile&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 注意实际 URL 映射是 / user/changePassword</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/changePassword&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">changePassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际方法的 URL 映射总是前缀 + 路径，这种形式还可以有效避免不小心导致的重复的 URL 映射。</p><p>可见，Spring MVC 允许我们编写既简单又灵活的 Controller 实现。</p><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h3><p>在注册、登录等功能的基础上增加一个修改口令的页面。</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>使用 Spring MVC 时，整个 Web 应用程序按如下顺序启动：</p><ol><li>启动 Tomcat 服务器；</li><li>Tomcat 读取 <code>web.xml</code> 并初始化 <code>DispatcherServlet</code>；</li><li><code>DispatcherServlet</code> 创建 IoC 容器并自动注册到 <code>ServletContext</code> 中。</li></ol><p>启动后，浏览器发出的 HTTP 请求全部由 <code>DispatcherServlet</code> 接收，并根据配置转发到指定 Controller 的指定方法处理。</p><h2 id="🍀-使用-rest" tabindex="-1"><a class="header-anchor" href="#🍀-使用-rest" aria-hidden="true">#</a> 🍀 使用 REST</h2><p>使用 Spring MVC 开发 Web 应用程序的主要工作就是编写 Controller 逻辑。在 Web 应用中，除了需要使用 MVC 给用户显示页面外，还有一类 API 接口，我们称之为 REST，通常输入输出都是 JSON，便于第三方调用或者使用页面 JavaScript 与之交互。</p><p>直接在 Controller 中处理 JSON 是可以的，因为 Spring MVC 的 <code>@GetMapping</code> 和 <code>@PostMapping</code> 都支持指定输入和输出的格式。如果我们想接收 JSON，输出 JSON，那么可以这样写：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/rest&quot;</span><span class="token punctuation">,</span>
             consumes <span class="token operator">=</span> <span class="token string">&quot;application/json;charset=UTF-8&quot;</span><span class="token punctuation">,</span>
             produces <span class="token operator">=</span> <span class="token string">&quot;application/json;charset=UTF-8&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">rest</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;{\\&quot;restSupport\\&quot;:true}&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的 Maven 工程需要加入 Jackson 这个依赖：<code>com.fasterxml.jackson.core:jackson-databind:2.14.0</code></p><p>注意到 <code>@PostMapping</code> 使用 <code>consumes</code> 声明能接收的类型，使用 <code>produces</code> 声明输出的类型，并且额外加了 <code>@ResponseBody</code> 表示返回的 <code>String</code> 无需额外处理，直接作为输出内容写入 <code>HttpServletResponse</code>。输入的 JSON 则根据注解 <code>@RequestBody</code> 直接被 Spring 反序列化为 <code>User</code> 这个 JavaBean。</p><p>使用 curl 命令测试一下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;email&quot;:&quot;bob@example.com&quot;}&#39;</span> http://localhost:8080/rest
<span class="token operator">&gt;</span> POST /rest HTTP/1.1
<span class="token operator">&gt;</span> Host: localhost:8080
<span class="token operator">&gt;</span> User-Agent: curl/7.64.1
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span> Content-Type: application/json
<span class="token operator">&gt;</span> Content-Length: <span class="token number">27</span>
<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">200</span>
<span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span><span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token operator">&lt;</span> Content-Length: <span class="token number">20</span>
<span class="token operator">&lt;</span> Date: Sun, <span class="token number">10</span> May <span class="token number">2020</span> 09:56:01 GMT
<span class="token operator">&lt;</span>
<span class="token punctuation">{</span><span class="token string">&quot;restSupport&quot;</span>:true<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出正是我们写入的字符串。</p><p>直接用 Spring 的 Controller 配合一大堆注解写 REST 太麻烦了，因此，Spring 还额外提供了一个 <code>@RestController</code> 注解，使用 <code>@RestController</code> 替代 <code>@Controller</code> 后，每个方法自动变成 API 接口方法。我们还是以实际代码举例，编写 <code>ApiController</code> 如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/api&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApiController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/users&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userService<span class="token punctuation">.</span><span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/users/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token keyword">long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userService<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/signin&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">signin</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">SignInRequest</span> signinRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">User</span> user <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">signin</span><span class="token punctuation">(</span>signinRequest<span class="token punctuation">.</span>email<span class="token punctuation">,</span> signinRequest<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;SIGNIN_FAILED&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SignInRequest</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写 REST 接口只需要定义 <code>@RestController</code>，然后，每个方法都是一个 API 接口，输入和输出只要能被 Jackson 序列化或反序列化为 JSON 就没有问题。我们用浏览器测试 GET 请求，可直接显示 JSON 响应：</p><figure><img src="`+v+`" alt="user-api" tabindex="0" loading="lazy"><figcaption>user-api</figcaption></figure><p>要测试 POST 请求，可以用 curl 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;email&quot;:&quot;bob@example.com&quot;,&quot;password&quot;:&quot;bob123&quot;}&#39;</span> http://localhost:8080/api/signin
<span class="token operator">&gt;</span> POST /api/signin HTTP/1.1
<span class="token operator">&gt;</span> Host: localhost:8080
<span class="token operator">&gt;</span> User-Agent: curl/7.64.1
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span> Content-Type: application/json
<span class="token operator">&gt;</span> Content-Length: <span class="token number">47</span>
<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">200</span>
<span class="token operator">&lt;</span> Content-Type: application/json
<span class="token operator">&lt;</span> Transfer-Encoding: chunked
<span class="token operator">&lt;</span> Date: Sun, <span class="token number">10</span> May <span class="token number">2020</span> 08:14:13 GMT
<span class="token operator">&lt;</span>
<span class="token punctuation">{</span><span class="token string">&quot;user&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span>:1,<span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;bob@example.com&quot;</span>,<span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;bob123&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Bob&quot;</span>,<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意观察上述 JSON 的输出，<code>User</code> 能被正确地序列化为 JSON，但暴露了 <code>password</code> 属性，这是我们不期望的。要避免输出 <code>password</code> 属性，可以把 <code>User</code> 复制到另一个 <code>UserBean</code> 对象，该对象只持有必要的属性，但这样做比较繁琐。另一种简单的方法是直接在 <code>User</code> 的 <code>password</code> 属性定义处加上 <code>@JsonIgnore</code> 表示完全忽略该属性：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token annotation punctuation">@JsonIgnore</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这样一来，如果写一个 <code>register(User user)</code> 方法，那么该方法的 User 对象也拿不到注册时用户传入的密码了。如果要允许输入 <code>password</code>，但不允许输出 <code>password</code>，即在 JSON 序列化和反序列化时，允许写属性，禁用读属性，可以更精细地控制如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token annotation punctuation">@JsonProperty</span><span class="token punctuation">(</span>access <span class="token operator">=</span> <span class="token class-name">Access</span><span class="token punctuation">.</span><span class="token constant">WRITE_ONLY</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，可以使用 <code>@JsonProperty(access = Access.READ_ONLY)</code> 允许输出，不允许输入。</p><h3 id="练习-1" tabindex="-1"><a class="header-anchor" href="#练习-1" aria-hidden="true">#</a> 练习</h3><h3 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1" aria-hidden="true">#</a> 小结</h3><p>使用 <code>@RestController</code> 可以方便地编写 REST 服务，Spring 默认使用 JSON 作为输入和输出。</p><p>要控制序列化和反序列化，可以使用 Jackson 提供的 <code>@JsonIgnore</code> 和 <code>@JsonProperty</code> 注解。</p><h2 id="🍀-集成-filter" tabindex="-1"><a class="header-anchor" href="#🍀-集成-filter" aria-hidden="true">#</a> 🍀 集成 Filter</h2><p>在 Spring MVC 中，<code>DispatcherServlet</code> 只需要固定配置到 <code>web.xml</code> 中，剩下的工作主要是专注于编写 Controller。</p>`,86),D={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1266264823560128",target:"_blank",rel:"noopener noreferrer"},J=n("code",null,"Filter",-1),N=l(`<p>有的童鞋在上一节的 Web 应用中可能发现了，如果注册时输入中文会导致乱码，因为 Servlet 默认按非 UTF-8 编码读取参数。为了修复这一问题，我们可以简单地使用一个 EncodingFilter，在全局范围类给 <code>HttpServletRequest</code> 和 <code>HttpServletResponse</code> 强制设置为 UTF-8 编码。</p><p>可以自己编写一个 EncodingFilter，也可以直接使用 Spring MVC 自带的一个 <code>CharacterEncodingFilter</code>。配置 Filter 时，只需在 <code>web.xml</code> 中声明即可：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>encodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.filter.CharacterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>encoding<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>forceEncoding<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>encodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为这种 Filter 和我们业务关系不大，注意到 <code>CharacterEncodingFilter</code> 其实和 Spring 的 IoC 容器没有任何关系，两者均互不知晓对方的存在，因此，配置这种 Filter 十分简单。</p><p>我们再考虑这样一个问题：如果允许用户使用 Basic 模式进行用户验证，即在 HTTP 请求中添加头 <code>Authorization: Basic email:password</code>，这个需求如何实现？</p><p>编写一个 <code>AuthFilter</code> 是最简单的实现方式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
        <span class="token class-name">HttpServletRequest</span> req <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> request<span class="token punctuation">;</span>
        <span class="token comment">// 获取 Authorization 头:</span>
        <span class="token class-name">String</span> authHeader <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>authHeader <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> authHeader<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Basic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 从 Header 中提取 email 和 password:</span>
            <span class="token class-name">String</span> email <span class="token operator">=</span> <span class="token function">prefixFrom</span><span class="token punctuation">(</span>authHeader<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token function">suffixFrom</span><span class="token punctuation">(</span>authHeader<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 登录:</span>
            <span class="token class-name">User</span> user <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">signin</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 放入 Session:</span>
            req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token class-name">UserController</span><span class="token punctuation">.</span><span class="token constant">KEY_USER</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 继续处理请求:</span>
        chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在问题来了：在 Spring 中创建的这个 <code>AuthFilter</code> 是一个普通 Bean，Servlet 容器并不知道，所以它不会起作用。</p><p>如果我们直接在 <code>web.xml</code> 中声明这个 <code>AuthFilter</code>，注意到 <code>AuthFilter</code> 的实例将由 Servlet 容器而不是 Spring 容器初始化，因此，<code>@Autowire</code> 根本不生效，用于登录的 <code>UserService</code> 成员变量永远是 <code>null</code>。</p><p>所以，得通过一种方式，让 Servlet 容器实例化的 Filter，间接引用 Spring 容器实例化的 <code>AuthFilter</code>。Spring MVC 提供了一个 <code>DelegatingFilterProxy</code>，专门来干这个事情：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>authFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.filter.DelegatingFilterProxy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>authFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来看实现原理：</p><ol><li>Servlet 容器从 <code>web.xml</code> 中读取配置，实例化 <code>DelegatingFilterProxy</code>，注意命名是 <code>authFilter</code>；</li><li>Spring 容器通过扫描 <code>@Component</code> 实例化 <code>AuthFilter</code>。</li></ol><p>当 <code>DelegatingFilterProxy</code> 生效后，它会自动查找注册在 <code>ServletContext</code> 上的 Spring 容器，再试图从容器中查找名为 <code>authFilter</code> 的 Bean，也就是我们用 <code>@Component</code> 声明的 <code>AuthFilter</code>。</p><p><code>DelegatingFilterProxy</code> 将请求代理给 <code>AuthFilter</code>，核心代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DelegatingFilterProxy</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Filter</span> delegate<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delegate <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            delegate <span class="token operator">=</span> <span class="token function">findBeanFromSpringContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        delegate<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">,</span> chain<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),z={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1281319432618017",target:"_blank",rel:"noopener noreferrer"},G=l(`<div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐ ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
  ┌─────────────────────┐        ┌───────────┐   │
│ │DelegatingFilterProxy│─│─│─ ─&gt;│AuthFilter │
  └─────────────────────┘        └───────────┘   │
│ ┌─────────────────────┐ │ │    ┌───────────┐
  │  DispatcherServlet  │─ ─ ─ ─&gt;│Controllers│   │
│ └─────────────────────┘ │ │    └───────────┘
                                                 │
│    Servlet Container    │ │  Spring Container
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在 <code>web.xml</code> 中配置的 Filter 名字和 Spring 容器的 Bean 的名字不一致，那么需要指定 Bean 的名字：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>basicAuthFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.filter.DelegatingFilterProxy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 指定 Bean 的名字 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>targetBeanName<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>authFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际应用时，尽量保持名字一致，以减少不必要的配置。</p><p>要使用 Basic 模式的用户认证，我们可以使用 curl 命令测试。例如，用户登录名是 <code>tom@example.com</code>，口令是 <code>tomcat</code>，那么先构造一个使用 URL 编码的 <code>用户名: 口令</code> 的字符串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tom%40example.com:tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对其进行 Base64 编码，最终构造出的 Header 如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Authorization: Basic dG9tJTQwZXhhbXBsZS5jb206dG9tY2F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用如下的 <code>curl</code> 命令并获得响应如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Authorization: Basic dG9tJTQwZXhhbXBsZS5jb206dG9tY2F0&#39;</span> http://localhost:8080/profile
<span class="token operator">&gt;</span> GET /profile HTTP/1.1
<span class="token operator">&gt;</span> Host: localhost:8080
<span class="token operator">&gt;</span> User-Agent: curl/7.64.1
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span> Authorization: Basic dG9tJTQwZXhhbXBsZS5jb206dG9tY2F0
<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">200</span>
<span class="token operator">&lt;</span> Set-Cookie: <span class="token assign-left variable">JSESSIONID</span><span class="token operator">=</span>CE0F4BFC394816F717443397D4FEABBE<span class="token punctuation">;</span> <span class="token assign-left variable">Path</span><span class="token operator">=</span>/<span class="token punctuation">;</span> HttpOnly
<span class="token operator">&lt;</span> Content-Type: text/html<span class="token punctuation">;</span><span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token operator">&lt;</span> Content-Language: en-CN
<span class="token operator">&lt;</span> Transfer-Encoding: chunked
<span class="token operator">&lt;</span> Date: Wed, <span class="token number">29</span> Apr <span class="token number">2020</span> 00:15:50 GMT
<span class="token operator">&lt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>doctype html<span class="token operator">&gt;</span>
<span class="token punctuation">..</span>.HTML 输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述响应说明 <code>AuthFilter</code> 已生效。</p><blockquote><p>注意：Basic 认证模式并不安全，本节只用来作为使用 Filter 的示例。</p></blockquote><h3 id="练习-2" tabindex="-1"><a class="header-anchor" href="#练习-2" aria-hidden="true">#</a> 练习</h3><h3 id="小结-2" tabindex="-1"><a class="header-anchor" href="#小结-2" aria-hidden="true">#</a> 小结</h3><p>当一个 Filter 作为 Spring 容器管理的 Bean 存在时，可以通过 <code>DelegatingFilterProxy</code> 间接地引用它并使其生效。</p><h2 id="🍀-使用-interceptor" tabindex="-1"><a class="header-anchor" href="#🍀-使用-interceptor" aria-hidden="true">#</a> 🍀 使用 Interceptor</h2><p>在 Web 程序中，注意到使用 Filter 的时候，Filter 由 Servlet 容器管理，它在 Spring MVC 的 Web 应用程序中作用范围如下：</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>         │   ▲
         ▼   │
       ┌───────┐
       │Filter1│
       └───────┘
         │   ▲
         ▼   │
       ┌───────┐
┌ ─ ─ ─│Filter2│─ ─ ─ ─ ─ ─ ─ ─ ┐
       └───────┘
│        │   ▲                  │
         ▼   │
│ ┌─────────────────┐           │
  │DispatcherServlet│&lt;───┐
│ └─────────────────┘    │      │
   │              ┌────────────┐
│  │              │ModelAndView││
   │              └────────────┘
│  │                     ▲      │
   │    ┌───────────┐    │
│  ├───&gt;│Controller1│────┤      │
   │    └───────────┘    │
│  │                     │      │
   │    ┌───────────┐    │
│  └───&gt;│Controller2│────┘      │
        └───────────┘
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上图虚线框就是 Filter2 的拦截范围，Filter 组件实际上并不知道后续内部处理是通过 Spring MVC 提供的 <code>DispatcherServlet</code> 还是其他 Servlet 组件，因为 Filter 是 Servlet 规范定义的标准组件，它可以应用在任何基于 Servlet 的程序中。</p><p>如果只基于 Spring MVC 开发应用程序，还可以使用 Spring MVC 提供的一种功能类似 Filter 的拦截器：Interceptor。和 Filter 相比，Interceptor 拦截范围不是后续整个处理流程，而是仅针对 Controller 拦截：</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>       │   ▲
       ▼   │
     ┌───────┐
     │Filter1│
     └───────┘
       │   ▲
       ▼   │
     ┌───────┐
     │Filter2│
     └───────┘
       │   ▲
       ▼   │
┌─────────────────┐
│DispatcherServlet│&lt;───┐
└─────────────────┘    │
 │ ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┼ ─ ─ ─ ┐
 │                     │
 │ │            ┌────────────┐ │
 │              │   Render   │
 │ │            └────────────┘ │
 │                     ▲
 │ │                   │       │
 │              ┌────────────┐
 │ │            │ModelAndView│ │
 │              └────────────┘
 │ │                   ▲       │
 │    ┌───────────┐    │
 ├─┼─&gt;│Controller1│────┤       │
 │    └───────────┘    │
 │ │                   │       │
 │    ┌───────────┐    │
 └─┼─&gt;│Controller2│────┘       │
      └───────────┘
   └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上图虚线框就是 Interceptor 的拦截范围，注意到 Controller 的处理方法一般都类似这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Controller
public class Controller1 {
    @GetMapping(&quot;/path/to/hello&quot;)
    ModelAndView hello() {
        ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，Interceptor 的拦截范围其实就是 Controller 方法，它实际上就相当于基于 AOP 的方法拦截。因为 Interceptor 只拦截 Controller 方法，所以要注意，返回 <code>ModelAndView</code> 并渲染后，后续处理就脱离了 Interceptor 的拦截范围。</p><p>使用 Interceptor 的好处是 Interceptor 本身是 Spring 管理的 Bean，因此注入任意 Bean 都非常简单。此外，可以应用多个 Interceptor，并通过简单的 <code>@Order</code> 指定顺序。我们先写一个 <code>LoggerInterceptor</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Order(1)
@Component
public class LoggerInterceptor implements HandlerInterceptor {

    final Logger logger = LoggerFactory.getLogger(getClass());

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        logger.info(&quot;preHandle {}...&quot;, request.getRequestURI());
        if (request.getParameter(&quot;debug&quot;) != null) {
            PrintWriter pw = response.getWriter();
            pw.write(&quot;&lt;p&gt;DEBUG MODE&lt;/p&gt;&quot;);
            pw.flush();
            return false;
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        logger.info(&quot;postHandle {}.&quot;, request.getRequestURI());
        if (modelAndView != null) {
            modelAndView.addObject(&quot;__time__&quot;, LocalDateTime.now());
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        logger.info(&quot;afterCompletion {}: exception = {}&quot;, request.getRequestURI(), ex);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 Interceptor 必须实现 <code>HandlerInterceptor</code> 接口，可以选择实现 <code>preHandle()</code>、<code>postHandle()</code> 和 <code>afterCompletion()</code> 方法。<code>preHandle()</code> 是 Controller 方法调用前执行，<code>postHandle()</code> 是 Controller 方法正常返回后执行，而 <code>afterCompletion()</code> 无论 Controller 方法是否抛异常都会执行，参数 <code>ex</code> 就是 Controller 方法抛出的异常（未抛出异常是 <code>null</code>）。</p><p>在 <code>preHandle()</code> 中，也可以直接处理响应，然后返回 <code>false</code> 表示无需调用 Controller 方法继续处理了，通常在认证或者安全检查失败时直接返回错误响应。在 <code>postHandle()</code> 中，因为捕获了 Controller 方法返回的 <code>ModelAndView</code>，所以可以继续往 <code>ModelAndView</code> 里添加一些通用数据，很多页面需要的全局数据如 Copyright 信息等都可以放到这里，无需在每个 Controller 方法中重复添加。</p><p>我们再继续添加一个 <code>AuthInterceptor</code>，用于替代上一节使用 <code>AuthFilter</code> 进行 Basic 认证的功能：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Order(2)
@Component
public class AuthInterceptor implements HandlerInterceptor {

    final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        logger.info(&quot;pre authenticate {}...&quot;, request.getRequestURI());
        try {
            authenticateByHeader(request);
        } catch (RuntimeException e) {
            logger.warn(&quot;login by authorization header failed.&quot;, e);
        }
        return true;
    }

    private void authenticateByHeader(HttpServletRequest req) {
        String authHeader = req.getHeader(&quot;Authorization&quot;);
        if (authHeader != null &amp;&amp; authHeader.startsWith(&quot;Basic&quot;)) {
            logger.info(&quot;try authenticate by authorization header...&quot;);
            String up = new String(Base64.getDecoder().decode(authHeader.substring(6)), StandardCharsets.UTF_8);
            int pos = up.indexOf(&#39;:&#39;);
            if (pos&gt; 0) {
                String email = URLDecoder.decode(up.substring(0, pos), StandardCharsets.UTF_8);
                String password = URLDecoder.decode(up.substring(pos + 1), StandardCharsets.UTF_8);
                User user = userService.signin(email, password);
                req.getSession().setAttribute(UserController.KEY_USER, user);
                logger.info(&quot;user {} login by authorization header ok.&quot;, email);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code>AuthInterceptor</code> 是由 Spring 容器直接管理的，因此注入 <code>UserService</code> 非常方便。</p><p>最后，要让拦截器生效，我们在 <code>WebMvcConfigurer</code> 中注册所有的 Interceptor：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean
WebMvcConfigurer createWebMvcConfigurer(@Autowired HandlerInterceptor[] interceptors) {
    return new WebMvcConfigurer() {
        public void addInterceptors(InterceptorRegistry registry) {
            for (var interceptor : interceptors) {
                registry.addInterceptor(interceptor);
            }
        }
        ...
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果拦截器没有生效，请检查是否忘了在 WebMvcConfigurer 中注册。</p><h3 id="处理异常" tabindex="-1"><a class="header-anchor" href="#处理异常" aria-hidden="true">#</a> 处理异常</h3><p>在 Controller 中，Spring MVC 还允许定义基于 <code>@ExceptionHandler</code> 注解的异常处理方法。我们来看具体的示例代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Controller
public class UserController {
    @ExceptionHandler(RuntimeException.class)
    public ModelAndView handleUnknowException(Exception ex) {
        return new ModelAndView(&quot;500.html&quot;, Map.of(&quot;error&quot;, ex.getClass().getSimpleName(), &quot;message&quot;, ex.getMessage()));
    }
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异常处理方法没有固定的方法签名，可以传入 <code>Exception</code>、<code>HttpServletRequest</code> 等，返回值可以是 <code>void</code>，也可以是 <code>ModelAndView</code>，上述代码通过 <code>@ExceptionHandler(RuntimeException.class)</code> 表示当发生 <code>RuntimeException</code> 的时候，就自动调用此方法处理。</p><p>注意到我们返回了一个新的 <code>ModelAndView</code>，这样在应用程序内部如果发生了预料之外的异常，可以给用户显示一个出错页面，而不是简单的 500 Internal Server Error 或 404 Not Found。例如 B 站的错误页：</p><figure><img src="`+m+'" alt="500" tabindex="0" loading="lazy"><figcaption>500</figcaption></figure><p>可以编写多个错误处理方法，每个方法针对特定的异常。例如，处理 <code>LoginException</code> 使得页面可以自动跳转到登录页。</p><p>使用 <code>ExceptionHandler</code> 时，要注意它仅作用于当前的 Controller，即 ControllerA 中定义的一个 <code>ExceptionHandler</code> 方法对 ControllerB 不起作用。如果我们有很多 Controller，每个 Controller 都需要处理一些通用的异常，例如 <code>LoginException</code>，思考一下应该怎么避免重复代码？</p><h3 id="练习-3" tabindex="-1"><a class="header-anchor" href="#练习-3" aria-hidden="true">#</a> 练习</h3><h3 id="小结-3" tabindex="-1"><a class="header-anchor" href="#小结-3" aria-hidden="true">#</a> 小结</h3><p>Spring MVC 提供了 Interceptor 组件来拦截 Controller 方法，使用时要注意 Interceptor 的作用范围。</p><h2 id="🍀-处理-cors" tabindex="-1"><a class="header-anchor" href="#🍀-处理-cors" aria-hidden="true">#</a> 🍀 处理 CORS</h2><p>在开发 REST 应用时，很多时候，是通过页面的 JavaScript 和后端的 REST API 交互。</p><p>在 JavaScript 与 REST 交互的时候，有很多安全限制。默认情况下，浏览器按同源策略放行 JavaScript 调用 API，即：</p><ul><li>如果 A 站在域名 <code>a.com</code> 页面的 JavaScript 调用 A 站自己的 API 时，没有问题；</li><li>如果 A 站在域名 <code>a.com</code> 页面的 JavaScript 调用 B 站 <code>b.com</code> 的 API 时，将被浏览器拒绝访问，因为不满足同源策略。</li></ul><p>同源要求域名要完全相同（<code>a.com</code> 和 <code>www.a.com</code> 不同），协议要相同（<code>http</code> 和 <code>https</code> 不同），端口要相同 。</p><p>那么，在域名 <code>a.com</code> 页面的 JavaScript 要调用 B 站 <code>b.com</code> 的 API 时，还有没有办法？</p><p>办法是有的，那就是 CORS，全称 Cross-Origin Resource Sharing，是 HTML5 规范定义的如何跨域访问资源。如果 A 站的 JavaScript 访问 B 站 API 的时候，B 站能够返回响应头 <code>Access-Control-Allow-Origin: http://a.com</code>，那么，浏览器就允许 A 站的 JavaScript 访问 B 站的 API。</p><p>注意到跨域访问能否成功，取决于 B 站是否愿意给 A 站返回一个正确的 <code>Access-Control-Allow-Origin</code> 响应头，所以决定权永远在提供 API 的服务方手中。</p>',53),Y={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"},Z=l(`<p>使用 Spring 的 <code>@RestController</code> 开发 REST 应用时，同样会面对跨域问题。如果我们允许指定的网站通过页面 JavaScript 访问这些 REST API，就必须正确地设置 CORS。</p><p>有好几种方法设置 CORS，我们来一一介绍。</p><h3 id="使用-crossorigin" tabindex="-1"><a class="header-anchor" href="#使用-crossorigin" aria-hidden="true">#</a> 使用 @CrossOrigin</h3><p>第一种方法是使用 <code>@CrossOrigin</code> 注解，可以在 <code>@RestController</code> 的 class 级别或方法级别定义一个 <code>@CrossOrigin</code>，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@CrossOrigin(origins = &quot;http://local.liaoxuefeng.com:8080&quot;)
@RestController
@RequestMapping(&quot;/api&quot;)
public class ApiController {
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述定义在 <code>ApiController</code> 处的 <code>@CrossOrigin</code> 指定了只允许来自 <code>local.liaoxuefeng.com</code> 跨域访问，允许多个域访问需要写成数组形式，例如 <code>origins = {&quot;http://a.com&quot;, &quot;https://www.b.com&quot;})</code>。如果要允许任何域访问，写成 <code>origins = &quot;*&quot;</code> 即可。</p><p>如果有多个 REST Controller 都需要使用 CORS，那么，每个 Controller 都必须标注 <code>@CrossOrigin</code> 注解。</p><h3 id="使用-corsregistry" tabindex="-1"><a class="header-anchor" href="#使用-corsregistry" aria-hidden="true">#</a> 使用 CorsRegistry</h3><p>第二种方法是在 <code>WebMvcConfigurer</code> 中定义一个全局 CORS 配置，下面是一个示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean
WebMvcConfigurer createWebMvcConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping(&quot;/api/**&quot;)
                    .allowedOrigins(&quot;http://local.liaoxuefeng.com:8080&quot;)
                    .allowedMethods(&quot;GET&quot;, &quot;POST&quot;)
                    .maxAge(3600);
            // 可以继续添加其他 URL 规则:
            // registry.addMapping(&quot;/rest/v2/**&quot;)...
        }
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式可以创建一个全局 CORS 配置，如果仔细地设计 URL 结构，那么可以一目了然地看到各个 URL 的 CORS 规则，推荐使用这种方式配置 CORS。</p><h3 id="使用-corsfilter" tabindex="-1"><a class="header-anchor" href="#使用-corsfilter" aria-hidden="true">#</a> 使用 CorsFilter</h3>`,12),X=n("code",null,"CorsFilter",-1),Q={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1282384114745378/",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"web.xml",-1),K=l(`<h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>当我们配置好 CORS 后，可以在浏览器中测试一下规则是否生效。</p><p>我们先用 <code>http://localhost:8080</code> 在 Chrome 浏览器中打开首页，然后打开 Chrome 的开发者工具，切换到 Console，输入一个 JavaScript 语句来跨域访问 API：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.getJSON(&quot;http://local.liaoxuefeng.com:8080/api/users&quot;, (data) =&gt; console.log(JSON.stringify(data)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述源站的域是 <code>http://localhost:8080</code>，跨域访问的是 <code>http://local.liaoxuefeng.com:8080</code>，因为配置的 CORS 不允许 <code>localhost</code> 访问，所以不出意外地得到一个错误：</p><figure><img src="`+k+`" alt="cors-deny" tabindex="0" loading="lazy"><figcaption>cors-deny</figcaption></figure><p>浏览题打印了错误原因就是 <code>been blocked by CORS policy</code>。</p><p>我们再用 <code>http://local.liaoxuefeng.com:8080</code> 在 Chrome 浏览器中打开首页，在 Console 中执行 JavaScript 访问 <code>localhost</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.getJSON(&quot;http://localhost:8080/api/users&quot;, (data) =&gt; console.log(JSON.stringify(data)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 CORS 规则允许来自 <code>http://local.liaoxuefeng.com:8080</code> 的访问，因此访问成功，打印出 API 的返回值：</p><figure><img src="`+g+`" alt="cors-ok" tabindex="0" loading="lazy"><figcaption>cors-ok</figcaption></figure><h3 id="练习-4" tabindex="-1"><a class="header-anchor" href="#练习-4" aria-hidden="true">#</a> 练习</h3><h3 id="小结-4" tabindex="-1"><a class="header-anchor" href="#小结-4" aria-hidden="true">#</a> 小结</h3><p>CORS 可以控制指定域的页面 JavaScript 能否访问 API。</p><h2 id="🍀-国际化" tabindex="-1"><a class="header-anchor" href="#🍀-国际化" aria-hidden="true">#</a> 🍀 国际化</h2><p>La</p><p>在开发应用程序的时候，经常会遇到支持多语言的需求，这种支持多语言的功能称之为国际化，英文是 internationalization，缩写为 i18n（因为首字母 i 和末字母 n 中间有 18 个字母）。</p><p>还有针对特定地区的本地化功能，英文是 localization，缩写为 L10n，本地化是指根据地区调整类似姓名、日期的显示等。</p><p>也有把上面两者合称为全球化，英文是 globalization，缩写为 g11n。</p><p>在 Java 中，支持多语言和本地化是通过 <code>MessageFormat</code> 配合 <code>Locale</code> 实现的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// MessageFormat
import java.text.MessageFormat;
import java.util.Locale;

public class Time {
    public static void main(String[] args) {
        double price = 123.5;
        int number = 10;
        Object[] arguments = { price, number};
        MessageFormat mfUS = new MessageFormat(&quot;Pay {0,number,currency} for {1} books.&quot;, Locale.US);
        System.out.println(mfUS.format(arguments));
        MessageFormat mfZH = new MessageFormat(&quot;{1} 本书一共 {0,number,currency}。&quot;, Locale.CHINA);
        System.out.println(mfZH.format(arguments));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 Web 应用程序，要实现国际化功能，主要是渲染 View 的时候，要把各种语言的资源文件提出来，这样，不同的用户访问同一个页面时，显示的语言就是不同的。</p><p>我们来看看在 Spring MVC 应用程序中如何实现国际化。</p><h3 id="获取-locale" tabindex="-1"><a class="header-anchor" href="#获取-locale" aria-hidden="true">#</a> 获取 Locale</h3><p>实现国际化的第一步是获取到用户的 <code>Locale</code>。在 Web 应用程序中，HTTP 规范规定了浏览器会在请求中携带 <code>Accept-Language</code> 头，用来指示用户浏览器设定的语言顺序，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Accept-Language: zh-CN,zh;q=0.8,en;q=0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述 HTTP 请求头表示优先选择简体中文，其次选择中文，最后选择英文。<code>q</code> 表示权重，解析后我们可获得一个根据优先级排序的语言列表，把它转换为 Java 的 <code>Locale</code>，即获得了用户的 <code>Locale</code>。大多数框架通常只返回权重最高的 <code>Locale</code>。</p><p>Spring MVC 通过 <code>LocaleResolver</code> 来自动从 <code>HttpServletRequest</code> 中获取 <code>Locale</code>。有多种 <code>LocaleResolver</code> 的实现类，其中最常用的是 <code>CookieLocaleResolver</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Primary
@Bean
LocaleResolver createLocaleResolver() {
    var clr = new CookieLocaleResolver();
    clr.setDefaultLocale(Locale.ENGLISH);
    clr.setDefaultTimeZone(TimeZone.getDefault());
    return clr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>CookieLocaleResolver</code> 从 <code>HttpServletRequest</code> 中获取 <code>Locale</code> 时，首先根据一个特定的 Cookie 判断是否指定了 <code>Locale</code>，如果没有，就从 HTTP 头获取，如果还没有，就返回默认的 <code>Locale</code>。</p><p>当用户第一次访问网站时，<code>CookieLocaleResolver</code> 只能从 HTTP 头获取 <code>Locale</code>，即使用浏览器的默认语言。通常网站也允许用户自己选择语言，此时，<code>CookieLocaleResolver</code> 就会把用户选择的语言存放到 Cookie 中，下一次访问时，就会返回用户上次选择的语言而不是浏览器默认语言。</p><h3 id="提取资源文件" tabindex="-1"><a class="header-anchor" href="#提取资源文件" aria-hidden="true">#</a> 提取资源文件</h3><p>第二步是把写死在模板中的字符串以资源文件的方式存储在外部。对于多语言，主文件名如果命名为 <code>messages</code>，那么资源文件必须按如下方式命名并放入 classpath 中：</p><ul><li>默认语言，文件名必须为 <code>messages.properties</code>；</li><li>简体中文，Locale 是 <code>zh_CN</code>，文件名必须为 <code>messages_zh_CN.properties</code>；</li><li>日文，Locale 是 <code>ja_JP</code>，文件名必须为 <code>messages_ja_JP.properties</code>；</li><li>其它更多语言……</li></ul><p>每个资源文件都有相同的 key，例如，默认语言是英文，文件 <code>messages.properties</code> 内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>language.select=Language
home=Home
signin=Sign In
copyright=Copyright©{0,number,#}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件 <code>messages_zh_CN.properties</code> 内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>language.select = 语言
home = 首页
signin = 登录
copyright = 版权所有 ©{0,number,#}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-messagesource" tabindex="-1"><a class="header-anchor" href="#创建-messagesource" aria-hidden="true">#</a> 创建 MessageSource</h3><p>第三步是创建一个 Spring 提供的 <code>MessageSource</code> 实例，它自动读取所有的 <code>.properties</code> 文件，并提供一个统一接口来实现 “翻译”：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// code, arguments, locale:
String text = messageSource.getMessage(&quot;signin&quot;, null, locale);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>signin</code> 是我们在 <code>.properties</code> 文件中定义的 key，第二个参数是 <code>Object[]</code> 数组作为格式化时传入的参数，最后一个参数就是获取的用户 <code>Locale</code> 实例。</p><p>创建 <code>MessageSource</code> 如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean(&quot;i18n&quot;)
MessageSource createMessageSource() {
    var messageSource = new ResourceBundleMessageSource();
    // 指定文件是 UTF-8 编码:
    messageSource.setDefaultEncoding(&quot;UTF-8&quot;);
    // 指定主文件名:
    messageSource.setBasename(&quot;messages&quot;);
    return messageSource;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到 <code>ResourceBundleMessageSource</code> 会自动根据主文件名自动把所有相关语言的资源文件都读进来。</p><p>再注意到 Spring 容器会创建不只一个 <code>MessageSource</code> 实例，我们自己创建的这个 <code>MessageSource</code> 是专门给页面国际化使用的，因此命名为 <code>i18n</code>，不会与其它 <code>MessageSource</code> 实例冲突。</p><h3 id="实现多语言" tabindex="-1"><a class="header-anchor" href="#实现多语言" aria-hidden="true">#</a> 实现多语言</h3><p>要在 View 中使用 <code>MessageSource</code> 加上 <code>Locale</code> 输出多语言，我们通过编写一个 <code>MvcInterceptor</code>，把相关资源注入到 <code>ModelAndView</code> 中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class MvcInterceptor implements HandlerInterceptor {
    @Autowired
    LocaleResolver localeResolver;

    // 注意注入的 MessageSource 名称是 i18n:
    @Autowired
    @Qualifier(&quot;i18n&quot;)
    MessageSource messageSource;

    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView != null // 返回了 ModelAndView
            &amp;&amp; modelAndView.getViewName() != null // 设置了 View
            &amp;&amp; !modelAndView.getViewName().startsWith(&quot;redirect:&quot;) // 不是重定向
        ) {
            // 解析用户的 Locale:
            Locale locale = localeResolver.resolveLocale(request);
            // 放入 Model:
            modelAndView.addObject(&quot;__messageSource__&quot;, messageSource);
            modelAndView.addObject(&quot;__locale__&quot;, locale);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不要忘了在 <code>WebMvcConfigurer</code> 中注册 <code>MvcInterceptor</code>。现在，就可以在 View 中调用 <code>MessageSource.getMessage()</code> 方法来实现多语言：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a href=&quot;/signin&quot;&gt;{{ __messageSource__.getMessage(&#39;signin&#39;, null, __locale__) }}&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述这种写法虽然可行，但格式太复杂了。使用 View 时，要根据每个特定的 View 引擎定制国际化函数。在 Pebble 中，我们可以封装一个国际化函数，名称就是下划线 <code>_</code>，改造一下创建 <code>ViewResolver</code> 的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean
ViewResolver createViewResolver(@Autowired ServletContext servletContext, @Autowired @Qualifier(&quot;i18n&quot;) MessageSource messageSource) {
    var engine = new PebbleEngine.Builder()
            .autoEscaping(true)
            .cacheActive(false)
            .loader(new Servlet5Loader(servletContext))
            // 添加扩展:
            .extension(createExtension(messageSource))
            .build();
    var viewResolver = new PebbleViewResolver();
    viewResolver.setPrefix(&quot;/WEB-INF/templates/&quot;);
    viewResolver.setSuffix(&quot;&quot;);
    viewResolver.setPebbleEngine(engine);
    return viewResolver;
}

private Extension createExtension(MessageSource messageSource) {
    return new AbstractExtension() {
        @Override
        public Map&lt;String, Function&gt; getFunctions() {
            return Map.of(&quot;_&quot;, new Function() {
                public Object execute(Map&lt;String, Object&gt; args, PebbleTemplate self, EvaluationContext context, int lineNumber) {
                    String key = (String) args.get(&quot;0&quot;);
                    List&lt;Object&gt; arguments = this.extractArguments(args);
                    Locale locale = (Locale) context.getVariable(&quot;__locale__&quot;);
                    return messageSource.getMessage(key, arguments.toArray(), &quot;???&quot; + key + &quot;???&quot;, locale);
                }
                private List&lt;Object&gt; extractArguments(Map&lt;String, Object&gt; args) {
                    int i = 1;
                    List&lt;Object&gt; arguments = new ArrayList&lt;&gt;();
                    while (args.containsKey(String.valueOf(i))) {
                        Object param = args.get(String.valueOf(i));
                        arguments.add(param);
                        i++;
                    }
                    return arguments;
                }
                public List&lt;String&gt; getArgumentNames() {
                    return null;
                }
            });
        }
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们可以把多语言页面改写为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a href=&quot;/signin&quot;&gt;{{ _(&#39;signin&#39;) }}&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是带参数的多语言，需要把参数传进去：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h5&gt;{{ _(&#39;copyright&#39;, 2020) }}&lt;/h5&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用其它 View 引擎时，也应当根据引擎接口实现更方便的语法。</p><h3 id="切换-locale" tabindex="-1"><a class="header-anchor" href="#切换-locale" aria-hidden="true">#</a> 切换 Locale</h3><p>最后，我们需要允许用户手动切换 <code>Locale</code>，编写一个 <code>LocaleController</code> 来实现该功能：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Controller
public class LocaleController {
    final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    LocaleResolver localeResolver;

    @GetMapping(&quot;/locale/{lo}&quot;)
    public String setLocale(@PathVariable(&quot;lo&quot;) String lo, HttpServletRequest request, HttpServletResponse response) {
        // 根据传入的 lo 创建 Locale 实例:
        Locale locale = null;
        int pos = lo.indexOf(&#39;_&#39;);
        if (pos&gt; 0) {
            String lang = lo.substring(0, pos);
            String country = lo.substring(pos + 1);
            locale = new Locale(lang, country);
        } else {
            locale = new Locale(lo);
        }
        // 设定此 Locale:
        localeResolver.setLocale(request, response, locale);
        logger.info(&quot;locale is set to {}.&quot;, locale);
        // 刷新页面:
        String referer = request.getHeader(&quot;Referer&quot;);
        return &quot;redirect:&quot; + (referer == null ? &quot;/&quot; : referer);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面设计中，通常在右上角给用户提供一个语言选择列表，来看看效果：</p><figure><img src="`+b+'" alt="i18n-en" tabindex="0" loading="lazy"><figcaption>i18n-en</figcaption></figure><p>切换到中文：</p><figure><img src="'+h+`" alt="i18n-zh-cn" tabindex="0" loading="lazy"><figcaption>i18n-zh-cn</figcaption></figure><h3 id="练习-5" tabindex="-1"><a class="header-anchor" href="#练习-5" aria-hidden="true">#</a> 练习</h3><h3 id="小结-5" tabindex="-1"><a class="header-anchor" href="#小结-5" aria-hidden="true">#</a> 小结</h3><p>多语言支持需要从 HTTP 请求中解析用户的 Locale，然后针对不同 Locale 显示不同的语言；</p><p>Spring MVC 应用程序通过 <code>MessageSource</code> 和 <code>LocaleResolver</code>，配合 View 实现国际化。</p><h2 id="🍀-异步处理" tabindex="-1"><a class="header-anchor" href="#🍀-异步处理" aria-hidden="true">#</a> 🍀 异步处理</h2><p>在 Servlet 模型中，每个请求都是由某个线程处理，然后，将响应写入 IO 流，发送给客户端。从开始处理请求，到写入响应完成，都是在同一个线程中处理的。</p><p>实现 Servlet 容器的时候，只要每处理一个请求，就创建一个新线程处理它，就能保证正确实现了 Servlet 线程模型。在实际产品中，例如 Tomcat，总是通过线程池来处理请求，它仍然符合一个请求从头到尾都由某一个线程处理。</p><p>这种线程模型非常重要，因为 Spring 的 JDBC 事务是基于 <code>ThreadLocal</code> 实现的，如果在处理过程中，一会由线程 A 处理，一会又由线程 B 处理，那事务就全乱套了。此外，很多安全认证，也是基于 <code>ThreadLocal</code> 实现的，可以保证在处理请求的过程中，各个线程互不影响。</p><p>但是，如果一个请求处理的时间较长，例如几秒钟甚至更长，那么，这种基于线程池的同步模型很快就会把所有线程耗尽，导致服务器无法响应新的请求。如果把长时间处理的请求改为异步处理，那么线程池的利用率就会大大提高。Servlet 从 3.0 规范开始添加了异步支持，允许对一个请求进行异步处理。</p><p>我们先来看看在 Spring MVC 中如何实现对请求进行异步处理的逻辑。首先建立一个 Web 工程，然后编辑 <code>web.xml</code> 文件如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;web-app&gt;
    &lt;display-name&gt;Archetype Created Web Application&lt;/display-name&gt;

    &lt;servlet&gt;
        &lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
        &lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
        &lt;init-param&gt;
            &lt;param-name&gt;contextClass&lt;/param-name&gt;
            &lt;param-value&gt;org.springframework.web.context.support.AnnotationConfigWebApplicationContext&lt;/param-value&gt;
        &lt;/init-param&gt;
        &lt;init-param&gt;
            &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
            &lt;param-value&gt;com.itranswarp.learnjava.AppConfig&lt;/param-value&gt;
        &lt;/init-param&gt;
        &lt;load-on-startup&gt;0&lt;/load-on-startup&gt;
        &lt;async-supported&gt;true&lt;/async-supported&gt;
    &lt;/servlet&gt;

    &lt;servlet-mapping&gt;
        &lt;servlet-name&gt;dispatcher&lt;/servlet-name&gt;
        &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
    &lt;/servlet-mapping&gt;
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和前面普通的 MVC 程序相比，这个 <code>web.xml</code> 主要对 <code>DispatcherServlet</code> 的配置多了一个 <code>&lt;async-supported&gt;</code>，默认值是 <code>false</code>，必须明确写成 <code>true</code>，这样 Servlet 容器才会支持 async 处理。</p><p>下一步就是在 Controller 中编写 async 处理逻辑。我们以 <code>ApiController</code> 为例，演示如何异步处理请求。</p><p>第一种 async 处理方式是返回一个 <code>Callable</code>，Spring MVC 自动把返回的 <code>Callable</code> 放入线程池执行，等待结果返回后再写入响应：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@GetMapping(&quot;/users&quot;)
public Callable&lt;List&lt;User&gt;&gt; users() {
    return () -&gt; {
        // 模拟 3 秒耗时:
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
        }
        return userService.getUsers();
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种 async 处理方式是返回一个 <code>DeferredResult</code> 对象，然后在另一个线程中，设置此对象的值并写入响应：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@GetMapping(&quot;/users/{id}&quot;)
public DeferredResult&lt;User&gt; user(@PathVariable(&quot;id&quot;) long id) {
    DeferredResult&lt;User&gt; result = new DeferredResult&lt;&gt;(3000L); // 3 秒超时
    new Thread(() -&gt; {
        // 等待 1 秒:
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        try {
            User user = userService.getUserById(id);
            // 设置正常结果并由 Spring MVC 写入 Response:
            result.setResult(user);
        } catch (Exception e) {
            // 设置错误结果并由 Spring MVC 写入 Response:
            result.setErrorResult(Map.of(&quot;error&quot;, e.getClass().getSimpleName(), &quot;message&quot;, e.getMessage()));
        }
    }).start();
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>DeferredResult</code> 时，可以设置超时，超时会自动返回超时错误响应。在另一个线程中，可以调用 <code>setResult()</code> 写入结果，也可以调用 <code>setErrorResult()</code> 写入一个错误结果。</p><p>运行程序，当我们访问 <code>http://localhost:8080/api/users/1</code> 时，假定用户存在，则浏览器在 1 秒后返回结果：</p><figure><img src="`+S+'" alt="deferred-result-ok" tabindex="0" loading="lazy"><figcaption>deferred-result-ok</figcaption></figure><p>访问一个不存在的 User ID，则等待 1 秒后返回错误结果：</p><figure><img src="'+f+`" alt="deferred-result-error" tabindex="0" loading="lazy"><figcaption>deferred-result-error</figcaption></figure><h3 id="使用-filter" tabindex="-1"><a class="header-anchor" href="#使用-filter" aria-hidden="true">#</a> 使用 Filter</h3><p>当我们使用 async 模式处理请求时，原有的 Filter 也可以工作，但我们必须在 <code>web.xml</code> 中添加 <code>&lt;async-supported&gt;</code> 并设置为 <code>true</code>。我们用两个 Filter：SyncFilter 和 AsyncFilter 分别测试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;web-app ...&gt;
    ...
    &lt;filter&gt;
        &lt;filter-name&gt;sync-filter&lt;/filter-name&gt;
        &lt;filter-class&gt;com.itranswarp.learnjava.web.SyncFilter&lt;/filter-class&gt;
    &lt;/filter&gt;

    &lt;filter&gt;
        &lt;filter-name&gt;async-filter&lt;/filter-name&gt;
        &lt;filter-class&gt;com.itranswarp.learnjava.web.AsyncFilter&lt;/filter-class&gt;
        &lt;async-supported&gt;true&lt;/async-supported&gt;
    &lt;/filter&gt;

    &lt;filter-mapping&gt;
        &lt;filter-name&gt;sync-filter&lt;/filter-name&gt;
        &lt;url-pattern&gt;/api/version&lt;/url-pattern&gt;
    &lt;/filter-mapping&gt;

    &lt;filter-mapping&gt;
        &lt;filter-name&gt;async-filter&lt;/filter-name&gt;
        &lt;url-pattern&gt;/api/*&lt;/url-pattern&gt;
    &lt;/filter-mapping&gt;
    ...
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个声明为支持 <code>&lt;async-supported&gt;</code> 的 Filter 既可以过滤 async 处理请求，也可以过滤正常的同步处理请求，而未声明 <code>&lt;async-supported&gt;</code> 的 Filter 无法支持 async 请求，如果一个普通的 Filter 遇到 async 请求时，会直接报错，因此，务必注意普通 Filter 的 <code>&lt;url-pattern&gt;</code> 不要匹配 async 请求路径。</p><p>在 <code>logback.xml</code> 配置文件中，我们把输出格式加上 <code>[%thread]</code>，可以输出当前线程的名称：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration&gt;
    &lt;appender name=&quot;STDOUT&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;layout class=&quot;ch.qos.logback.classic.PatternLayout&quot;&gt;
            &lt;Pattern&gt;%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n&lt;/Pattern&gt;
        &lt;/layout&gt;
    &lt;/appender&gt;
    ...
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于同步请求，例如 <code>/api/version</code>，我们可以看到如下输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2020-05-16 11:22:40 [http-nio-8080-exec-1] INFO  c.i.learnjava.web.SyncFilter - start SyncFilter...
2020-05-16 11:22:40 [http-nio-8080-exec-1] INFO  c.i.learnjava.web.AsyncFilter - start AsyncFilter...
2020-05-16 11:22:40 [http-nio-8080-exec-1] INFO  c.i.learnjava.web.ApiController - get version...
2020-05-16 11:22:40 [http-nio-8080-exec-1] INFO  c.i.learnjava.web.AsyncFilter - end AsyncFilter.
2020-05-16 11:22:40 [http-nio-8080-exec-1] INFO  c.i.learnjava.web.SyncFilter - end SyncFilter.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，每个 Filter 和 <code>ApiController</code> 都是由同一个线程执行。</p><p>对于异步请求，例如 <code>/api/users</code>，我们可以看到如下输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2020-05-16 11:23:49 [http-nio-8080-exec-4] INFO  c.i.learnjava.web.AsyncFilter - start AsyncFilter...
2020-05-16 11:23:49 [http-nio-8080-exec-4] INFO  c.i.learnjava.web.ApiController - get users...
2020-05-16 11:23:49 [http-nio-8080-exec-4] INFO  c.i.learnjava.web.AsyncFilter - end AsyncFilter.
2020-05-16 11:23:52 [MvcAsync1] INFO  c.i.learnjava.web.ApiController - return users...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，<code>AsyncFilter</code> 和 <code>ApiController</code> 是由同一个线程执行的，但是，返回响应的是另一个线程。</p><p>对 <code>DeferredResult</code> 测试，可以看到如下输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2020-05-16 11:25:24 [http-nio-8080-exec-8] INFO  c.i.learnjava.web.AsyncFilter - start AsyncFilter...
2020-05-16 11:25:24 [http-nio-8080-exec-8] INFO  c.i.learnjava.web.AsyncFilter - end AsyncFilter.
2020-05-16 11:25:25 [Thread-2] INFO  c.i.learnjava.web.ApiController - deferred result is set.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，返回响应的是另一个线程。</p><p>在实际使用时，经常用到的就是 <code>DeferredResult</code>，因为返回 <code>DeferredResult</code> 时，可以设置超时、正常结果和错误结果，易于编写比较灵活的逻辑。</p><p>使用 async 异步处理响应时，要时刻牢记，在另一个异步线程中的事务和 Controller 方法中执行的事务不是同一个事务，在 Controller 中绑定的 <code>ThreadLocal</code> 信息也无法在异步线程中获取。</p>`,104),nn=n("code",null,"java.nio",-1),sn={href:"https://netty.io/",target:"_blank",rel:"noopener noreferrer"},an=l(`<h3 id="练习-6" tabindex="-1"><a class="header-anchor" href="#练习-6" aria-hidden="true">#</a> 练习</h3><h3 id="小结-6" tabindex="-1"><a class="header-anchor" href="#小结-6" aria-hidden="true">#</a> 小结</h3><p>在 Spring MVC 中异步处理请求需要正确配置 <code>web.xml</code>，并返回 <code>Callable</code> 或 <code>DeferredResult</code> 对象。</p><h2 id="🍀-使用-websocket" tabindex="-1"><a class="header-anchor" href="#🍀-使用-websocket" aria-hidden="true">#</a> 🍀 使用 WebSocket</h2><p>WebSocket 是一种基于 HTTP 的长链接技术。传统的 HTTP 协议是一种请求 - 响应模型，如果浏览器不发送请求，那么服务器无法主动给浏览器推送数据。如果需要定期给浏览器推送数据，例如股票行情，或者不定期给浏览器推送数据，例如在线聊天，基于 HTTP 协议实现这类需求，只能依靠浏览器的 JavaScript 定时轮询，效率很低且实时性不高。</p><p>因为 HTTP 本身是基于 TCP 连接的，所以，WebSocket 在 HTTP 协议的基础上做了一个简单的升级，即建立 TCP 连接后，浏览器发送请求时，附带几个头：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /chat HTTP/1.1
Host: www.example.com
Upgrade: websocket
Connection: Upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就表示客户端希望升级连接，变成长连接的 WebSocket，服务器返回升级成功的响应：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>收到成功响应后表示 WebSocket“握手” 成功，这样，代表 WebSocket 的这个 TCP 连接将不会被服务器关闭，而是一直保持，服务器可随时向浏览器推送消息，浏览器也可随时向服务器推送消息。双方推送的消息既可以是文本消息，也可以是二进制消息，一般来说，绝大部分应用程序会推送基于 JSON 的文本消息。</p><p>现代浏览器都已经支持 WebSocket 协议，服务器则需要底层框架支持。Java 的 Servlet 规范从 3.1 开始支持 WebSocket，所以，必须选择支持 Servlet 3.1 或更高规范的 Servlet 容器，才能支持 WebSocket。最新版本的 Tomcat、Jetty 等开源服务器均支持 WebSocket。</p><p>我们以实际代码演示如何在 Spring MVC 中实现对 WebSocket 的支持。首先，我们需要在 <code>pom.xml</code> 中加入以下依赖：</p><ul><li>org.apache.tomcat.embed:tomcat-embed-websocket:10.1.1</li><li>org.springframework:spring-websocket:6.0.0</li></ul><p>第一项是嵌入式 Tomcat 支持 WebSocket 的组件，第二项是 Spring 封装的支持 WebSocket 的接口。</p><p>接下来，我们需要在 AppConfig 中加入 Spring Web 对 WebSocket 的配置，此处我们需要创建一个 <code>WebSocketConfigurer</code> 实例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean
WebSocketConfigurer createWebSocketConfigurer(
        @Autowired ChatHandler chatHandler,
        @Autowired ChatHandshakeInterceptor chatInterceptor)
{
    return new WebSocketConfigurer() {
        public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
            // 把 URL 与指定的 WebSocketHandler 关联，可关联多个:
            registry.addHandler(chatHandler, &quot;/chat&quot;).addInterceptors(chatInterceptor);
        }
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此实例在内部通过 <code>WebSocketHandlerRegistry</code> 注册能处理 WebSocket 的 <code>WebSocketHandler</code>，以及可选的 WebSocket 拦截器 <code>HandshakeInterceptor</code>。我们注入的这两个类都是自己编写的业务逻辑，后面我们详细讨论如何编写它们，这里只需关注浏览器连接到 WebSocket 的 URL 是 <code>/chat</code>。</p><h3 id="处理-websocket-连接" tabindex="-1"><a class="header-anchor" href="#处理-websocket-连接" aria-hidden="true">#</a> 处理 WebSocket 连接</h3><p>和处理普通 HTTP 请求不同，没法用一个方法处理一个 URL。Spring 提供了 <code>TextWebSocketHandler</code> 和 <code>BinaryWebSocketHandler</code> 分别处理文本消息和二进制消息，这里我们选择文本消息作为聊天室的协议，因此，<code>ChatHandler</code> 需要继承自 <code>TextWebSocketHandler</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class ChatHandler extends TextWebSocketHandler {
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当浏览器请求一个 WebSocket 连接后，如果成功建立连接，Spring 会自动调用 <code>afterConnectionEstablished()</code> 方法，任何原因导致 WebSocket 连接中断时，Spring 会自动调用 <code>afterConnectionClosed</code> 方法，因此，覆写这两个方法即可处理连接成功和结束后的业务逻辑：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class ChatHandler extends TextWebSocketHandler {
    // 保存所有 Client 的 WebSocket 会话实例:
    private Map&lt;String, WebSocketSession&gt; clients = new ConcurrentHashMap&lt;&gt;();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // 新会话根据 ID 放入 Map:
        clients.put(session.getId(), session);
        session.getAttributes().put(&quot;name&quot;, &quot;Guest1&quot;);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        clients.remove(session.getId());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个 WebSocket 会话以 <code>WebSocketSession</code> 表示，且已分配唯一 ID。和 WebSocket 相关的数据，例如用户名称等，均可放入关联的 <code>getAttributes()</code> 中。</p><p>用实例变量 <code>clients</code> 持有当前所有的 <code>WebSocketSession</code> 是为了广播，即向所有用户推送同一消息时，可以这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String json = ...
TextMessage message = new TextMessage(json);
for (String id : clients.keySet()) {
    WebSocketSession session = clients.get(id);
    session.sendMessage(message);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发送的消息是序列化后的 JSON，可以用 <code>ChatMessage</code> 表示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ChatMessage {
	public long timestamp;
	public String name;
    public String text;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每收到一个用户的消息后，我们就需要广播给所有用户：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class ChatHandler extends TextWebSocketHandler {
    ...
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String s = message.getPayload();
        String r = ... // 根据输入消息构造待发送消息
        broadcastMessage(r); // 推送给所有用户
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要推送给指定的几个用户，那就需要在 <code>clients</code> 中根据条件查找出某些 <code>WebSocketSession</code>，然后发送消息。</p><p>注意到我们在注册 WebSocket 时还传入了一个 <code>ChatHandshakeInterceptor</code>，这个类实际上可以从 <code>HttpSessionHandshakeInterceptor</code> 继承，它的主要作用是在 WebSocket 建立连接后，把 HttpSession 的一些属性复制到 WebSocketSession，例如，用户的登录信息等：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class ChatHandshakeInterceptor extends HttpSessionHandshakeInterceptor {
    public ChatHandshakeInterceptor() {
        // 指定从 HttpSession 复制属性到 WebSocketSession:
        super(List.of(UserController.KEY_USER));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，在 <code>ChatHandler</code> 中，可以从 <code>WebSocketSession.getAttributes()</code> 中获取到复制过来的属性。</p><h3 id="客户端开发" tabindex="-1"><a class="header-anchor" href="#客户端开发" aria-hidden="true">#</a> 客户端开发</h3><p>在完成了服务器端的开发后，我们还需要在页面编写一点 JavaScript 逻辑：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建 WebSocket 连接:
var ws = new WebSocket(&#39;ws://&#39; + location.host + &#39;/chat&#39;);
// 连接成功时:
ws.addEventListener(&#39;open&#39;, function (event) {
    console.log(&#39;websocket connected.&#39;);
});
// 收到消息时:
ws.addEventListener(&#39;message&#39;, function (event) {
    console.log(&#39;message:&#39; + event.data);
    var msgs = JSON.parse(event.data);
    // TODO:
});
// 连接关闭时:
ws.addEventListener(&#39;close&#39;, function () {
    console.log(&#39;websocket closed.&#39;);
});
// 绑定到全局变量:
window.chatWs = ws;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户可以在连接成功后任何时候给服务器发送消息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var inputText = &#39;Hello, WebSocket.&#39;;
window.chatWs.send(JSON.stringify({text: inputText}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，连调浏览器和服务器端，如果一切无误，可以开多个不同的浏览器测试 WebSocket 的推送和广播：</p><figure><img src="`+x+'" alt="chat" tabindex="0" loading="lazy"><figcaption>chat</figcaption></figure><p>和上一节我们介绍的异步处理类似，Servlet 的线程模型并不适合大规模的长链接。基于 NIO 的 Netty 等框架更适合处理 WebSocket 长链接，我们将在后面介绍。</p><h3 id="练习-7" tabindex="-1"><a class="header-anchor" href="#练习-7" aria-hidden="true">#</a> 练习</h3><h3 id="小结-7" tabindex="-1"><a class="header-anchor" href="#小结-7" aria-hidden="true">#</a> 小结</h3><p>在 Servlet 中使用 WebSocket 需要 3.1 及以上版本；</p><p>通过 <code>spring-websocket</code> 可以简化 WebSocket 的开发。</p>',45);function en(tn,ln){const t=o("router-link"),c=o("RouterLink"),i=o("ExternalLinkIcon");return r(),d("div",null,[n("details",C,[q,n("nav",y,[n("ul",null,[n("li",null,[a(t,{to:"#🍀-使用-spring-mvc"},{default:e(()=>[s("🍀 使用 Spring MVC")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#配置-spring-mvc"},{default:e(()=>[s("配置 Spring MVC")]),_:1})]),n("li",null,[a(t,{to:"#编写-controller"},{default:e(()=>[s("编写 Controller")]),_:1})]),n("li",null,[a(t,{to:"#练习"},{default:e(()=>[s("练习")]),_:1})]),n("li",null,[a(t,{to:"#小结"},{default:e(()=>[s("小结")]),_:1})])])]),n("li",null,[a(t,{to:"#🍀-使用-rest"},{default:e(()=>[s("🍀 使用 REST")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#练习-1"},{default:e(()=>[s("练习")]),_:1})]),n("li",null,[a(t,{to:"#小结-1"},{default:e(()=>[s("小结")]),_:1})])])]),n("li",null,[a(t,{to:"#🍀-集成-filter"},{default:e(()=>[s("🍀 集成 Filter")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#练习-2"},{default:e(()=>[s("练习")]),_:1})]),n("li",null,[a(t,{to:"#小结-2"},{default:e(()=>[s("小结")]),_:1})])])]),n("li",null,[a(t,{to:"#🍀-使用-interceptor"},{default:e(()=>[s("🍀 使用 Interceptor")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#处理异常"},{default:e(()=>[s("处理异常")]),_:1})]),n("li",null,[a(t,{to:"#练习-3"},{default:e(()=>[s("练习")]),_:1})]),n("li",null,[a(t,{to:"#小结-3"},{default:e(()=>[s("小结")]),_:1})])])]),n("li",null,[a(t,{to:"#🍀-处理-cors"},{default:e(()=>[s("🍀 处理 CORS")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#使用-crossorigin"},{default:e(()=>[s("使用 @CrossOrigin")]),_:1})]),n("li",null,[a(t,{to:"#使用-corsregistry"},{default:e(()=>[s("使用 CorsRegistry")]),_:1})]),n("li",null,[a(t,{to:"#使用-corsfilter"},{default:e(()=>[s("使用 CorsFilter")]),_:1})]),n("li",null,[a(t,{to:"#测试"},{default:e(()=>[s("测试")]),_:1})]),n("li",null,[a(t,{to:"#练习-4"},{default:e(()=>[s("练习")]),_:1})]),n("li",null,[a(t,{to:"#小结-4"},{default:e(()=>[s("小结")]),_:1})])])]),n("li",null,[a(t,{to:"#🍀-国际化"},{default:e(()=>[s("🍀 国际化")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#获取-locale"},{default:e(()=>[s("获取 Locale")]),_:1})]),n("li",null,[a(t,{to:"#提取资源文件"},{default:e(()=>[s("提取资源文件")]),_:1})]),n("li",null,[a(t,{to:"#创建-messagesource"},{default:e(()=>[s("创建 MessageSource")]),_:1})]),n("li",null,[a(t,{to:"#实现多语言"},{default:e(()=>[s("实现多语言")]),_:1})]),n("li",null,[a(t,{to:"#切换-locale"},{default:e(()=>[s("切换 Locale")]),_:1})]),n("li",null,[a(t,{to:"#练习-5"},{default:e(()=>[s("练习")]),_:1})]),n("li",null,[a(t,{to:"#小结-5"},{default:e(()=>[s("小结")]),_:1})])])]),n("li",null,[a(t,{to:"#🍀-异步处理"},{default:e(()=>[s("🍀 异步处理")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#使用-filter"},{default:e(()=>[s("使用 Filter")]),_:1})]),n("li",null,[a(t,{to:"#练习-6"},{default:e(()=>[s("练习")]),_:1})]),n("li",null,[a(t,{to:"#小结-6"},{default:e(()=>[s("小结")]),_:1})])])]),n("li",null,[a(t,{to:"#🍀-使用-websocket"},{default:e(()=>[s("🍀 使用 WebSocket")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#处理-websocket-连接"},{default:e(()=>[s("处理 WebSocket 连接")]),_:1})]),n("li",null,[a(t,{to:"#客户端开发"},{default:e(()=>[s("客户端开发")]),_:1})]),n("li",null,[a(t,{to:"#练习-7"},{default:e(()=>[s("练习")]),_:1})]),n("li",null,[a(t,{to:"#小结-7"},{default:e(()=>[s("小结")]),_:1})])])])])])]),n("p",null,[s("在 "),a(c,{to:"/1-Java/21_Spring%E5%BC%80%E5%8F%91/docs/1-Java/20_Web%E5%BC%80%E5%8F%91/"},{default:e(()=>[s("Web 开发")]),_:1}),s(" 一章中，我们已经详细介绍了 JavaEE 中 Web 开发的基础：Servlet。具体地说，有以下几点：")]),M,_,n("p",null,[s("我们在 "),n("a",R,[s("MVC 开发"),a(i)]),s(" 和"),n("a",A,[s("MVC 高级开发"),a(i)]),s("已经由浅入深地介绍了如何编写 MVC 框架。当然，自己写的 MVC 主要是理解原理，要实现一个功能全面的 MVC 需要大量的工作以及广泛的测试。")]),F,n("ul",null,[n("li",null,[n("a",T,[s("Struts"),a(i)]),s("：最古老的一个 MVC 框架，目前版本是 2，和 1.x 有很大的区别；")]),H,n("li",null,[n("a",V,[s("Turbine"),a(i)]),s("：一个重度使用 Velocity，强调布局的 MVC 框架；")]),L]),n("p",null,[s("Spring 虽然都可以集成任何 Web 框架，但是，Spring 本身也开发了一个 MVC 框架，就叫 "),n("a",W,[s("Spring MVC"),a(i)]),s("。这个 MVC 框架设计得足够优秀以至于我们已经不想再费劲去集成类似 Struts 这样的框架了。")]),j,I,n("p",null,[s("我们在前面介绍 "),n("a",O,[s("Web 开发"),a(i)]),s(" 时已经讲过了 Java Web 的基础：Servlet 容器，以及标准的 Servlet 组件：")]),P,E,n("p",null,[s("在 "),n("a",U,[s("MVC 高级开发"),a(i)]),s(" 中，我们手撸了一个 MVC 框架，接口和 Spring MVC 类似。如果直接使用 Spring MVC，我们写出来的代码类似：")]),B,n("p",null,[s("但是，在 Servlet 规范中，我们还可以 "),n("a",D,[s("使用 Filter"),a(i)]),s("。如果要在 Spring MVC 中使用 "),J,s("，应该怎么做？")]),N,n("p",null,[s("这就是一个 "),n("a",z,[s("代理模式"),a(i)]),s(" 的简单应用。我们画个图表示它们之间的引用关系如下：")]),G,n("p",null,[s("关于 CORS 的详细信息可以参考 "),n("a",Y,[s("MDN 文档"),a(i)]),s("，这里不再详述。")]),Z,n("p",null,[s("第三种方法是使用 Spring 提供的 "),X,s("，我们在 "),n("a",Q,[s("集成 Filter"),a(i)]),s(" 中详细介绍了将 Spring 容器内置的 Bean 暴露为 Servlet 容器的 Filter 的方法，由于这种配置方式需要修改 "),$,s("，也比较繁琐，所以推荐使用第二种方式。")]),K,n("p",null,[s("此外，Servlet 3.0 规范添加的异步支持是针对同步模型打了一个 “补丁”，虽然可以异步处理请求，但高并发异步请求时，它的处理效率并不高，因为这种异步模型并没有用到真正的“原生” 异步。Java 标准库提供了封装操作系统的异步 IO 包 "),nn,s("，是真正的多路复用 IO 模型，可以用少量线程支持大量并发。使用 NIO 编程复杂度比同步 IO 高很多，因此我们很少直接使用 NIO。相反，大部分需要高性能异步 IO 的应用程序会选择 "),n("a",sn,[s("Netty"),a(i)]),s(" 这样的框架，它基于 NIO 提供了更易于使用的 API，方便开发异步应用程序。")]),an])}const pn=p(w,[["render",en],["__file","4.html.vue"]]);export{pn as default};
