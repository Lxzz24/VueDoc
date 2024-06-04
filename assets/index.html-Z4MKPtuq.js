import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,d as r}from"./app-CvlAI_tu.js";const l="/VueDoc/assets/20221123105753-Dk6alBpi.png",E={},h=r('<p>设计模式，即 Design Patterns，是指在软件设计中，被反复使用的一种代码设计经验。使用设计模式的目的是为了可重用代码，提高代码的可扩展性和可维护性。</p><p>设计模式这个术语是上个世纪 90 年代由 Erich Gamma、Richard Helm、Raplh Johnson 和 Jonhn Vlissides 四个人总结提炼出来的，并且写了一本 Design Patterns 的书。这四人也被称为四人帮（GoF）。</p><p>为什么要使用设计模式？根本原因还是软件开发要实现可维护、可扩展，就必须尽量复用代码，并且降低代码的耦合度。设计模式主要是基于 OOP 编程提炼的，它基于以下几个原则：</p><h2 id="🍀-开闭原则" tabindex="-1"><a class="header-anchor" href="#🍀-开闭原则" aria-hidden="true">#</a> 🍀 开闭原则</h2><p>由 Bertrand Meyer 提出的开闭原则（Open Closed Principle）是指，软件应该对扩展开放，而对修改关闭。这里的意思是在增加新功能的时候，能不改代码就尽量不要改，如果只增加代码就完成了新功能，那是最好的。</p><h2 id="🍀-里氏替换原则" tabindex="-1"><a class="header-anchor" href="#🍀-里氏替换原则" aria-hidden="true">#</a> 🍀 里氏替换原则</h2><p>里氏替换原则是 Barbara Liskov 提出的，这是一种面向对象的设计原则，即如果我们调用一个父类的方法可以成功，那么替换成子类调用也应该完全可以运行。</p><p>设计模式把一些常用的设计思想提炼出一个个模式，然后给每个模式命名，这样在使用的时候更方便交流。GoF 把 23 个常用模式分为创建型模式、结构型模式和行为型模式三类，我们后续会一一讲解。</p><p>学习设计模式，关键是学习设计思想，不能简单地生搬硬套，也不能为了使用设计模式而过度设计，要合理平衡设计的复杂度和灵活性，并意识到设计模式也并不是万能的。</p><figure><img src="'+l+'" alt="20221123105753" tabindex="0" loading="lazy"><figcaption>20221123105753</figcaption></figure><h2 id="🍀-创建型模式" tabindex="-1"><a class="header-anchor" href="#🍀-创建型模式" aria-hidden="true">#</a> 🍀 创建型模式</h2><p>创建型模式关注点是如何创建对象，其核心思想是要把对象的创建和使用相分离，这样使得两者能相对独立地变换。</p><p>创建型模式包括：</p><ul><li><a href="#%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95">☘️ 工厂方法</a> ：Factory Method</li><li><a href="#%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82">☘️ 抽象工厂</a> ：Abstract Factory</li><li><a href="#%E7%94%9F%E6%88%90%E5%99%A8">☘️ 生成器</a> ：Builder</li><li><a href="#%E5%8E%9F%E5%9E%8B">☘️ 原型</a> ：Prototype</li><li><a href="#%E5%8D%95%E4%BE%8B">☘️ 单例</a> ：Singleton</li></ul><h2 id="🍀-结构型模式" tabindex="-1"><a class="header-anchor" href="#🍀-结构型模式" aria-hidden="true">#</a> 🍀 结构型模式</h2><p>结构型模式主要涉及如何组合各种对象以便获得更好、更灵活的结构。虽然面向对象的继承机制提供了最基本的子类扩展父类的功能，但结构型模式不仅仅简单地使用继承，而更多地通过组合与运行期的动态组合来实现更灵活的功能。</p><p>结构型模式有：</p><ul><li><a href="#%E9%80%82%E9%85%8D%E5%99%A8">☘️ 适配器</a></li><li><a href="#%E6%A1%A5%E6%8E%A5">☘️ 桥接</a></li><li><a href="#%E7%BB%84%E5%90%88">☘️ 组合</a></li><li><a href="#%E8%A3%85%E9%A5%B0%E5%99%A8">☘️ 装饰器</a></li><li><a href="#%E5%A4%96%E8%A7%82">☘️ 外观</a></li><li><a href="#%E4%BA%AB%E5%85%83">☘️ 享元</a></li><li><a href="#%E4%BB%A3%E7%90%86">☘️ 代理</a></li></ul><h2 id="🍀-行为型模式" tabindex="-1"><a class="header-anchor" href="#🍀-行为型模式" aria-hidden="true">#</a> 🍀 行为型模式</h2><p>行为型模式主要涉及算法和对象间的职责分配。通过使用对象组合，行为型模式可以描述一组对象应该如何协作来完成一个整体任务。</p><p>行为型模式有：</p><ul><li><a href="#%E8%B4%A3%E4%BB%BB%E9%93%BE">责任链</a></li><li><a href="#%E5%91%BD%E4%BB%A4">命令</a></li><li><a href="#%E8%A7%A3%E9%87%8A%E5%99%A8">解释器</a></li><li><a href="#%E8%BF%AD%E4%BB%A3%E5%99%A8">迭代器</a></li><li><a href="#%E4%B8%AD%E4%BB%8B">中介</a></li><li><a href="#%E5%A4%87%E5%BF%98%E5%BD%95">备忘录</a></li><li><a href="#%E8%A7%82%E5%AF%9F%E8%80%85">观察者</a></li><li><a href="#%E7%8A%B6%E6%80%81">状态</a></li><li><a href="#%E7%AD%96%E7%95%A5">策略</a></li><li><a href="#%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95">模板方法</a></li><li><a href="#%E8%AE%BF%E9%97%AE%E8%80%85">访问者</a></li></ul>',22),t=[h];function n(B,d){return i(),e("div",null,t)}const f=a(E,[["render",n],["__file","index.html.vue"]]);export{f as default};