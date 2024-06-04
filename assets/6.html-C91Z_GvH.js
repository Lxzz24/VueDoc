import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as d,a as l,b as e,w as t,e as i,d as n}from"./app-CvlAI_tu.js";const h="/VueDoc/assets/1-4RRdaaae.png",c="/VueDoc/assets/2-Dhd5hoBz.png",m={},p={class:"hint-container details"},g=l("summary",null,"目录",-1),_={class:"table-of-contents"},f=n('<blockquote><p>数据流图</p></blockquote><h2 id="🍀-模块独立" tabindex="-1"><a class="header-anchor" href="#🍀-模块独立" aria-hidden="true">#</a> 🍀 模块独立</h2><h3 id="耦合" tabindex="-1"><a class="header-anchor" href="#耦合" aria-hidden="true">#</a> 耦合</h3><p>耦合是<strong>模块之间</strong>的<em>相对独立性</em>（互相连接的紧密程度）的度量。</p><p>耦合取决于各个模块之间接口的<em>复杂程度</em>、<em>调用模块的方式</em>以及<em>通过接口的信息类型</em>等。</p><figure><img src="'+h+'" alt="耦合的种类（背）" tabindex="0" loading="lazy"><figcaption>耦合的种类（背）</figcaption></figure><ul><li><u>无直接耦合</u>：指两个模块之间<strong>没有直接</strong>的关系，属于不同模块</li><li><u>数据耦合</u>：指两个模块之间有调用关系，传递的是<strong>简单的数据值</strong></li><li><u>标记耦合</u>：指两个模块之间传递的是<strong>数据结构</strong></li><li><u>控制耦合</u>：指一个模块调用另一个模块时，传递的是<strong>控制变量</strong></li><li><u>外部耦合</u>：模块间通过软件之外的<strong>环境</strong>联结</li><li><u>公共耦合</u>：通过一个<strong>公共数据环境</strong>相互作用</li><li><u>内容耦合</u>：当一个模块直接使用另一个模块的内部数据，或通过非正常入口转入另一个模块内部</li></ul><h3 id="内聚" tabindex="-1"><a class="header-anchor" href="#内聚" aria-hidden="true">#</a> 内聚</h3><p>内聚是对一个<strong>模块内部</strong><em>各个元素彼此结合的紧密程度</em>的度量。</p><figure><img src="'+c+'" alt="内聚的种类（背）" tabindex="0" loading="lazy"><figcaption>内聚的种类（背）</figcaption></figure><ul><li><u>偶然内聚</u>（巧合内聚）：各处理元素之间<strong>没有任何联系</strong></li><li><u>逻辑内聚</u>：模块内执行若干个<strong>逻辑上</strong>相似的功能</li><li><u>时间内聚</u>：把需要<strong>同时执行的动作</strong>组合在一起</li><li><u>过程内聚</u>：一个模块完成<em>多个任务</em>，这些任务必须按指定的<strong>过程</strong>执行</li><li><u>通信内聚</u>：模块内的所有处理元素都在<strong>同一个数据结构</strong>上操作</li><li><u>顺序内聚</u>：指一个模块中的各个处理元素都密切相关于<em>同一功能</em>且必须<strong>顺序执行</strong>，前一功能元素的输出就是下一功能元素的输入</li><li><u>功能内聚</u>：最强的内聚，指模块内的所有元素<strong>共同作用完成一个功能</strong>，缺一不可。</li></ul><div class="hint-container tip"><p class="hint-container-title">总结</p><p>耦合性和内聚性是模块独立性的两个定性标准，在将软件系统划分模块时，应尽量做到<strong>高内聚、低耦合</strong>，提高模块的独立性。</p></div><h2 id="🍀-系统结构设计原则" tabindex="-1"><a class="header-anchor" href="#🍀-系统结构设计原则" aria-hidden="true">#</a> 🍀 系统结构设计原则</h2><ol><li>分解——协调原则 <s>（考的少）</s></li><li>自顶向下的原则 <s>（考的少）</s></li><li>信息隐蔽、抽象的原则 <s>（考的少）</s></li><li>一致性原则：统一的规范、统一的标准和统一的文件模式。</li><li><strong>明确性原则</strong>：<em>功能明确</em>、<em>接口明确</em>、<em>消除多重功能和无用接口</em>、<em>避免病态连接</em>、<em>降低接口复杂度</em>。</li><li>模块之间的耦合尽可能小，模块的内聚度尽可能高。<strong>（高内聚、低耦合）</strong></li><li>模块的扇入系数和扇出系数要合理。（扇入扇出适中）</li><li>模块的规模适当。</li><li><em>模块的作用范围应该在其控制范围之内</em>。</li></ol><h2 id="🍀-系统文档" tabindex="-1"><a class="header-anchor" href="#🍀-系统文档" aria-hidden="true">#</a> 🍀 系统文档</h2><blockquote><p>只考过 1、2</p></blockquote><ol><li><p><em>用户</em>与<em>系统分析人员</em>在系统规划和系统分析阶段通过文档进行沟通。这里的文档主要包括：</p><ul><li>可行性研究报告</li><li>总体规划报告</li><li>系统开发合同</li><li>系统方案说明书</li></ul></li><li><p><em>系统开发人员</em>与<em>项目管理人员</em>通过文档在项目期内进行沟通。这里的文档是指<u>项目管理文件</u>，主要有：</p><ul><li>系统开发计划（工作任务分解表、PERT 图、甘特图、预算分配表等）</li><li>系统开发月报</li><li>系统开发总结报告</li></ul><blockquote><p>有了这些文档可以：</p><ul><li>不同阶段开发人员工作的顺利交接；</li><li>降低因为人员流动带来的风险。</li></ul></blockquote></li><li><p><em>系统测试人员</em>与<em>系统开发人员</em>通过文档进行沟通。</p><ul><li>系统方案说明书</li><li>系统开发合同</li><li>系统设计说明书</li><li>测试计划</li></ul><blockquote><p>系统测试人员再将评估结果撰写成<strong>系统测试报告</strong>。</p></blockquote></li><li><p><em>系统开发人员</em>与<em>用户</em>在系统运行期间进行沟通。</p><ul><li>用户手册</li><li>操作指南</li></ul></li><li><p><em>系统开发人员</em>与<em>系统维护人员</em>通过文档进行沟通。</p><ul><li>系统开发总结报告</li><li>系统设计说明书</li></ul></li><li><p><em>用户</em>与<em>维修人员</em>在运行维护期间进行沟通。</p><ol><li>用户在使用信息系统的过程中，将运行过程中的问题进行记载，形成： <ul><li>系统运行报告</li><li>维护修改建议</li></ul></li><li>系统维护人员根据以下文档对系统进行维护和升级： <ul><li>维护修改建议</li><li>系统开发人员留下的技术手册等文档</li></ul></li></ol></li></ol><h2 id="🍀-数据流图" tabindex="-1"><a class="header-anchor" href="#🍀-数据流图" aria-hidden="true">#</a> 🍀 数据流图</h2>',18),b=n('<div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>数据建模：E-R</li><li>功能建模：DFD</li><li>行为建模：UML</li></ul></div><h2 id="🍀-数据字典" tabindex="-1"><a class="header-anchor" href="#🍀-数据字典" aria-hidden="true">#</a> 🍀 数据字典</h2><p>数据字典（DD）是为数据流图中的以下成分<strong>做出说明</strong>：</p><ul><li>数据</li><li>文件</li><li>加工：对加工的描述称为 “小说明” 或 “加工逻辑说明</li><li>组成数据流或文件的<strong>数据项</strong>。</li></ul><h3 id="数据字典的条目" tabindex="-1"><a class="header-anchor" href="#数据字典的条目" aria-hidden="true">#</a> 数据字典的条目</h3><ol><li><u>数据流</u>条目：对 DFD 中数据流的定义，通常列出该数据流的各组成数据项。</li><li><u>数据项</u>条目：<em>组成数据流和数据存储的最小元素</em>，是不可再分解的数据单位。</li><li><u>数据存储</u>条目：对 DFD 中数据存储的定义。</li><li><u>基本加工</u>条目：用来说明 DFD 中（下层）基本加工的处理逻辑（加工逻辑）。</li></ol><blockquote><p>外部实体不包括在数据字典的条目中</p></blockquote><h3 id="加工逻辑的描述" tabindex="-1"><a class="header-anchor" href="#加工逻辑的描述" aria-hidden="true">#</a> 加工逻辑的描述</h3><p>加工逻辑也称为 “小说明”。加工逻辑描述方法有<em>结构化语言</em>、<em>判定表（决策表）<em>和</em>判定树</em>。</p><blockquote><p>考点内容补充：</p><ol><li>对数据流图的每一个基本加工，必须有一个基本加工逻辑说明</li><li>基本加工逻辑说明必须描述基本加工如何把输入数据流变换为输出数据流的加工规则</li><li>加工逻辑说明必须描述加工实现的策略而<em>不是实现加工的细节</em></li><li>加工逻辑说明中包含的信息是充足的，完备的，有用的，无冗余的。</li></ol></blockquote><h2 id="🍀-杂题知识点补充" tabindex="-1"><a class="header-anchor" href="#🍀-杂题知识点补充" aria-hidden="true">#</a> 🍀 杂题知识点补充</h2><h3 id="结构化设计主要包括" tabindex="-1"><a class="header-anchor" href="#结构化设计主要包括" aria-hidden="true">#</a> 结构化设计主要包括：</h3><ol><li>体系结构设计：定义软件的主要结构元素及其关系。</li><li>数据设计：基于实体联系图确定软件涉及的文件系统的结构及数据库的表结构。</li><li>接口设计：描述用户界面，软件和其他硬件设备、其他软件系统及使用人员的外部接口，以及各种构件之间的内部接口。</li><li>过程设计：确定软件各个组成部分内的算法及内部数据结构，并选定某种过程的表达形式来描述各种算法。</li></ol><p>结构化方法的分析结果的组成：</p><ul><li>一套分层的数据流图</li><li>一本数据字典（词典）</li><li>一组小说明（加工逻辑说明）</li><li>补充材料（实体联系图）</li></ul><h3 id="结构图的基本成分包括" tabindex="-1"><a class="header-anchor" href="#结构图的基本成分包括" aria-hidden="true">#</a> 结构图的基本成分包括：</h3><p><strong>模块</strong>、<strong>调用</strong>和<strong>数据</strong></p><p><em>黄金准则</em>：用户操纵控制、减轻用户的记忆负担、保持界面一致</p><p>软件系统的可维护性评价指标包括：可理解性、可测试性、可修改性、可靠性、可移植性、可使用性和效率。</p><p>构造分层 DFD 时需要注意：</p><ul><li>适当命名</li><li>画数据流而不是控制流</li><li>避免一个加工有过多的数据流</li><li>分解尽量均匀</li><li>先考虑确定状态，忽略琐碎的细节</li><li>随时准备重画</li></ul>',21);function x(k,D){const o=a("router-link"),r=a("RouterLink");return s(),d("div",null,[l("details",p,[g,l("nav",_,[l("ul",null,[l("li",null,[e(o,{to:"#🍀-模块独立"},{default:t(()=>[i("🍀 模块独立")]),_:1}),l("ul",null,[l("li",null,[e(o,{to:"#耦合"},{default:t(()=>[i("耦合")]),_:1})]),l("li",null,[e(o,{to:"#内聚"},{default:t(()=>[i("内聚")]),_:1})])])]),l("li",null,[e(o,{to:"#🍀-系统结构设计原则"},{default:t(()=>[i("🍀 系统结构设计原则")]),_:1})]),l("li",null,[e(o,{to:"#🍀-系统文档"},{default:t(()=>[i("🍀 系统文档")]),_:1})]),l("li",null,[e(o,{to:"#🍀-数据流图"},{default:t(()=>[i("🍀 数据流图")]),_:1})]),l("li",null,[e(o,{to:"#🍀-数据字典"},{default:t(()=>[i("🍀 数据字典")]),_:1}),l("ul",null,[l("li",null,[e(o,{to:"#数据字典的条目"},{default:t(()=>[i("数据字典的条目")]),_:1})]),l("li",null,[e(o,{to:"#加工逻辑的描述"},{default:t(()=>[i("加工逻辑的描述")]),_:1})])])]),l("li",null,[e(o,{to:"#🍀-杂题知识点补充"},{default:t(()=>[i("🍀 杂题知识点补充")]),_:1}),l("ul",null,[l("li",null,[e(o,{to:"#结构化设计主要包括"},{default:t(()=>[i("结构化设计主要包括：")]),_:1})]),l("li",null,[e(o,{to:"#结构图的基本成分包括"},{default:t(()=>[i("结构图的基本成分包括：")]),_:1})])])])])])]),f,l("p",null,[i("详见 "),e(r,{to:"/2-%E8%BD%AF%E8%80%83/%E4%B8%8B%E5%8D%88%E9%A2%98/1.html"},{default:t(()=>[i("下午题 1")]),_:1})]),b])}const E=u(m,[["render",x],["__file","6.html.vue"]]);export{E as default};