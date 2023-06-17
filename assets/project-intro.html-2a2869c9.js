import{aS as t,W as r,X as n,Z as o}from"./framework-e810521c.js";const e={},s=o('<h2 id="背景现状" tabindex="-1"><a class="header-anchor" href="#背景现状" aria-hidden="true">#</a> 背景现状</h2><p>我国计算机专业当前所面临的较为突出的人才培养问题，主要体现在计算机应用开发人员数量相对饱和，而底层软硬件研发人才匮乏，<strong>特别是计算机处理器芯片设计人才严重不足</strong>。经统计，2008到2017十年间的ISCA（体系结构顶级会议）论文的第一作者，有20%为中国国籍（美国本土为25%）。但与之相对，<strong>这些作者中有85%选择在美国就业，仅有4%在中国就业</strong>。大量学生到国外学习处理器芯片设计，毕业后留在美国工作。中美两国在高水平处理器芯片人才方面的差距，固然与过去多年中国处理器芯片的产业环境有关，但同时也与国内高校的处理器芯片人才培养方式密切相关。</p><p>我国正在经历的处理器芯片设计人才危机直接导致国内IT人才结构失衡，使得中国庞大的IT产业建立在国外软硬件系统平台之上，很多关键技术被国外“卡脖子”，国家安全受到威胁。若要解决这个问题，<strong>就必须立足国家当前面临的紧迫问题和未来战略需求，超前布局处理器芯片这一关键领域紧缺人才的培养，创新培养模式</strong>。然而，由于高端处理器芯片设计和生产成本不断增加，相关技术难度不断加大，所以目前只有极少数条件较好的大学和科研机构能够从事这方面的研究并培养少量人才。这远不能满足国家对该领域高端人才的迫切需求。</p><p>针对上述情况，中国科学院大学（简称“国科大”）计算机科学与技术学院立足已有的理论课堂与实验教学，联合中国科学院计算技术研究所（简称“计算所”）的科研工程支撑团队，于2019年8月启动了“一生一芯”开源处理器芯片教学流片实践项目计划，<strong>至此形成了计算机系统方向理论课、实验研讨课与实践项目的有机衔接和贯通式实践训练</strong>。</p><div class="hint-container info"><p class="hint-container-title">扩展资料</p><p>20世纪80年代，全美上千所大学中只有不到100位教授和学生从事半导体相关的研究。为此，美国国防部高级研究计划署 (DARPA) 在1981年启动MOSIS 项目，资助大学开展处理器芯片研究，并提供流片服务，通过MPW模式大幅降低处理器芯片设计门槛。40余年来，MOSIS为大学和研究机构流了60000多款处理器芯片，培养了数十万名学生。由此可见，降低处理器芯片设计门槛，可大幅促进处理器芯片技术发展，同时提高人才培养效率。</p></div><h2 id="目标理念" tabindex="-1"><a class="header-anchor" href="#目标理念" aria-hidden="true">#</a> 目标理念</h2><p>为解决当前处理器芯片“卡脖子”问题，并面向未来计算机系统领域拔尖人才需求，<strong>“一生一芯”教学团队提出“计算机系统能力3.0”处理器芯片人才培养目标</strong>。即以开源处理器芯片为切入点，以处理器芯片敏捷开发方法为实验手段，将计算机科学（CS）与电子信息工程（EE）专业课程进行贯通式设计，突出科教融合与产学研融合特色，理论与实践并重，通过教学流片计划实现硅上处理器芯片教学，培养计算机系统领域全栈式拔尖人才。</p><p>“一生一芯”的核心理念，<strong>简单来说就是“让一个学生可以带着自己设计的一颗处理器芯片毕业”</strong>，希望能通过理论与实践并重的教学机制来降低处理器芯片设计门槛，让更多的学生能够全流程的参与到处理器芯片设计的每一个环节中。</p><p>“公益性”是“一生一芯&quot;的重要属性。“一生一芯”报名和学习是免费的，在校生和已毕业的都可以来参加“一生一芯”的学习，但是因为经费有限，免费流片只针对在校生。只要对处理器芯片学习有浓厚的兴趣，想在处理器芯片方向发展的同学，零基础都可以加入，<strong>不论年级，专业和学校，都可以来报名</strong>。</p><div class="hint-container info"><p class="hint-container-title">扩展资料</p><p>“计算机系统能力3.0”处理器芯片人才培养的理念是用开源技术、做开源处理器芯片、育处理器芯片人才。具体来讲，为培养具有计算机系统能力的“卡脖子”处理器芯片人才，贯通计算机（CS）本科阶段系统方向核心课程与实践内容，包括组成原理、体系结构、操作系统、编译等软硬件课程，并延展至电子信息（EE）专业，包括片上系统SoC与处理器芯片后端设计等课程。基于开源软硬件生态形成处理器芯片人才培养体系，探索“硅上做教学”。即学生自行设计处理器芯片，提交版图文件至处理器芯片代工厂（Foundry）进行流片，并在回片后进行测试调试和运行操作系统。</p></div><h2 id="总体介绍" tabindex="-1"><a class="header-anchor" href="#总体介绍" aria-hidden="true">#</a> 总体介绍</h2><p>在战略层面，“一生一芯”计划主要有三个目标。<strong>第一，打破教育资源不平衡的壁垒</strong>。让所有对处理器芯片设计感兴趣的学生，无论学校、年级、专业和基础，都有机会参与到处理器芯片的学习中，这对提升我国高校处理器芯片教育的普及有着非常重要且积极的意义。<strong>第二，突破传统课程的边界，尝试构建融合EE和CS的全栈人才培养方案。</strong>“一生一芯”计划的核心是构建一套软硬件协同、并打通前后端全链条的处理器芯片教学流程，让学生不仅懂得如何用代码设计处理器芯片，而且要理解程序如何在自己设计的处理器芯片上运行，同时还要了解处理器芯片的代码如何转变成可流片版图。<strong>第三，鼓励参加计划的学生进入软硬件开源社区和企业，努力攻克我国目前亟需解决的各个卡脖子领域</strong>。同时也将这些领域的成果沉淀到教学方案中，吸引更多学生参与“一生一芯”计划，实现良性的正向循环。</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/project-intro-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在教学层面，“一生一芯”计划<strong>首先是坡度低</strong>。项目团队按照处理器芯片教学的难度将培训流程划分为多个阶段，其中预学习阶段的引入将提升零基础学生的学习积极性，从而使他们能够相对平滑地过渡到处理器芯片的正式学习中，而且每个阶段均设置了相应的游戏运行目标，增加趣味性的同时也能激励学生去不断探索设计和实现功能更强大的处理器芯片。<strong>第二是高标准</strong>。不仅要求学生理解软件程序是如何一步步在硬件电路上运行的，还要锻炼学生独立解决未知问题的能力，助教只提供对关键节点的引导，鼓励主动探索找到问题的解决方案。</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/project-intro-2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',15),i=[s];function a(c,g){return r(),n("div",null,i)}const d=t(e,[["render",a],["__file","project-intro.html.vue"]]);export{d as default};
