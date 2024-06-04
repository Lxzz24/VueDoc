import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-CvlAI_tu.js";const p="/VueDoc/assets/image-20240104153806571-A1qlY8np.png",e="/VueDoc/assets/image-20231220110514683-DEImhKFY.png",c="/VueDoc/assets/image-20231220110530400-Cf7_aFYN.png",o="/VueDoc/assets/l-20231220105234509-C1iy2aJx.png",l={},i=t('<blockquote><p>用一个中介对象来封装一系列的对象交互。中介者使各个对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。</p></blockquote><p>中介模式（Mediator）又称调停者模式，它的目的是把多方会谈变成双方会谈，从而实现多方的松耦合。</p><p>有些童鞋听到中介立刻想到房产中介，立刻气不打一处来。这个中介模式与房产中介还真有点像，所以消消气，先看例子。</p><p>考虑一个简单的点餐输入：</p><figure><img src="'+p+'" alt="image-20240104153806571" tabindex="0" loading="lazy"><figcaption>image-20240104153806571</figcaption></figure><p>这个小系统有 4 个参与对象：</p><ul><li>多选框；</li><li>“选择全部” 按钮；</li><li>“取消所有” 按钮；</li><li>“反选” 按钮。</li></ul><p>它的复杂性在于，当多选框变化时，它会影响 “选择全部” 和“取消所有”按钮的状态（是否可点击），当用户点击某个按钮时，例如 “反选”，除了会影响多选框的状态，它又可能影响“选择全部” 和“取消所有”按钮的状态。</p><p>所以这是一个多方会谈，逻辑写起来很复杂：</p><figure><img src="'+e+'" alt="image-20231220110514683" tabindex="0" loading="lazy"><figcaption>image-20231220110514683</figcaption></figure><p>如果我们引入一个中介，把多方会谈变成多个双方会谈，虽然多了一个对象，但对象之间的关系就变简单了：</p><figure><img src="'+c+`" alt="image-20231220110530400" tabindex="0" loading="lazy"><figcaption>image-20231220110530400</figcaption></figure><p>下面我们用中介模式来实现各个 UI 组件的交互。首先把 UI 组件给画出来：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">OrderFrame</span><span class="token punctuation">(</span><span class="token string">&quot;Hanburger&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Nugget&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Chip&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Coffee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OrderFrame</span> <span class="token keyword">extends</span> <span class="token class-name">JFrame</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">OrderFrame</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;Order&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setSize</span><span class="token punctuation">(</span><span class="token number">460</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setDefaultCloseOperation</span><span class="token punctuation">(</span><span class="token class-name">JFrame</span><span class="token punctuation">.</span><span class="token constant">EXIT_ON_CLOSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Container</span> c <span class="token operator">=</span> <span class="token function">getContentPane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">setLayout</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FlowLayout</span><span class="token punctuation">(</span><span class="token class-name">FlowLayout</span><span class="token punctuation">.</span><span class="token constant">LEADING</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;Use Mediator Pattern&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">JCheckBox</span><span class="token punctuation">&gt;</span></span> checkboxList <span class="token operator">=</span> <span class="token function">addCheckBox</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JButton</span> selectAll <span class="token operator">=</span> <span class="token function">addButton</span><span class="token punctuation">(</span><span class="token string">&quot;Select All&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JButton</span> selectNone <span class="token operator">=</span> <span class="token function">addButton</span><span class="token punctuation">(</span><span class="token string">&quot;Select None&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        selectNone<span class="token punctuation">.</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JButton</span> selectInverse <span class="token operator">=</span> <span class="token function">addButton</span><span class="token punctuation">(</span><span class="token string">&quot;Inverse Select&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Mediator</span><span class="token punctuation">(</span>checkBoxList<span class="token punctuation">,</span> selectAll<span class="token punctuation">,</span> selectNone<span class="token punctuation">,</span> selectInverse<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">JCheckBox</span><span class="token punctuation">&gt;</span></span> <span class="token function">addCheckBox</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JPanel</span> panel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        panel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;Menu:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">JCheckBox</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token operator">:</span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">JCheckBox</span> checkbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JCheckBox</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>checkbox<span class="token punctuation">)</span><span class="token punctuation">;</span>
            panel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>checkbox<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">getContentPane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>panel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">JButton</span> <span class="token function">addButton</span><span class="token punctuation">(</span><span class="token class-name">String</span> label<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JButton</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JButton</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getContentPane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> button<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们设计一个 Mediator 类，它引用 4 个 UI 组件，并负责跟它们交互：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token comment">// 引用 UI 组件:</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">JCheckBox</span><span class="token punctuation">&gt;</span></span> checkBoxList<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JButton</span> selectAll<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JButton</span> selectNone<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JButton</span> selectInverse<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Mediator</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">JCheckBox</span><span class="token punctuation">&gt;</span></span> checkBoxList<span class="token punctuation">,</span> <span class="token class-name">JButton</span> selectAll<span class="token punctuation">,</span> <span class="token class-name">JButton</span> selectNone<span class="token punctuation">,</span> <span class="token class-name">JButton</span> selectInverse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>checkBoxList <span class="token operator">=</span> checkBoxList<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectAll <span class="token operator">=</span> selectAll<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectNone <span class="token operator">=</span> selectNone<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectInverse <span class="token operator">=</span> selectInverse<span class="token punctuation">;</span>
        <span class="token comment">// 绑定事件:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>checkBoxList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>checkBox <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            checkBox<span class="token punctuation">.</span><span class="token function">addChangeListener</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">::</span><span class="token function">onCheckBoxChanged</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectAll<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">::</span><span class="token function">onSelectAllClicked</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectNone<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">::</span><span class="token function">onSelectNoneClicked</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectInverse<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">::</span><span class="token function">onSelectInverseClicked</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 当 checkbox 有变化时:</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onCheckBoxChanged</span><span class="token punctuation">(</span><span class="token class-name">ChangeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> allChecked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> allUnchecked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> checkBox <span class="token operator">:</span> checkBoxList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>checkBox<span class="token punctuation">.</span><span class="token function">isSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                allUnchecked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                allChecked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        selectAll<span class="token punctuation">.</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token operator">!</span>allChecked<span class="token punctuation">)</span><span class="token punctuation">;</span>
        selectNone<span class="token punctuation">.</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token operator">!</span>allUnchecked<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 当点击 select all:</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onSelectAllClicked</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        checkBoxList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>checkBox <span class="token operator">-&gt;</span> checkBox<span class="token punctuation">.</span><span class="token function">setSelected</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        selectAll<span class="token punctuation">.</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        selectNone<span class="token punctuation">.</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 当点击 select none:</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onSelectNoneClicked</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        checkBoxList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>checkBox <span class="token operator">-&gt;</span> checkBox<span class="token punctuation">.</span><span class="token function">setSelected</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        selectAll<span class="token punctuation">.</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        selectNone<span class="token punctuation">.</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 当点击 select inverse:</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onSelectInverseClicked</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        checkBoxList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>checkBox <span class="token operator">-&gt;</span> checkBox<span class="token punctuation">.</span><span class="token function">setSelected</span><span class="token punctuation">(</span><span class="token operator">!</span>checkBox<span class="token punctuation">.</span><span class="token function">isSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">onCheckBoxChanged</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行一下看看效果：</p><figure><img src="`+o+'" alt="mediator" tabindex="0" loading="lazy"><figcaption>mediator</figcaption></figure><p>使用 Mediator 模式后，我们得到了以下好处：</p><ul><li>各个 UI 组件互不引用，这样就减少了组件之间的耦合关系；</li><li>Mediator 用于当一个组件发生状态变化时，根据当前所有组件的状态决定更新某些组件；</li><li>如果新增一个 UI 组件，我们只需要修改 Mediator 更新状态的逻辑，现有的其他 UI 组件代码不变。</li></ul><p>Mediator 模式经常用在有众多交互组件的 UI 上。为了简化 UI 程序，MVC 模式以及 MVVM 模式都可以看作是 Mediator 模式的扩展。</p><h2 id="🍀-练习" tabindex="-1"><a class="header-anchor" href="#🍀-练习" aria-hidden="true">#</a> 🍀 练习</h2><p>使用 Mediator 模式</p><h2 id="🍀-小结" tabindex="-1"><a class="header-anchor" href="#🍀-小结" aria-hidden="true">#</a> 🍀 小结</h2><p>中介模式是通过引入一个中介对象，把多边关系变成多个双边关系，从而简化系统组件的交互耦合度。</p>',25),u=[i];function k(d,r){return s(),a("div",null,u)}const b=n(l,[["render",k],["__file","3_5.html.vue"]]);export{b as default};