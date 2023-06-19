import{aS as r,W as s,X as o,Y as e,af as i,ah as n,Z as a,J as c}from"./framework-3550b87c.js";const l={},d=a('<h2 id="开发入门" tabindex="-1"><a class="header-anchor" href="#开发入门" aria-hidden="true">#</a> 开发入门</h2><h3 id="开箱检查" tabindex="-1"><a class="header-anchor" href="#开箱检查" aria-hidden="true">#</a> 开箱检查</h3><p>同学们收到板卡后，请先按照下面的列表检查板卡和配件是否齐全：</p><ul><li>板卡包装盒 x1</li><li>开发板+FPGA核心板 <strong>(使用网格防静电袋包装)</strong></li><li>耗材 <strong>(使用硬质防静电袋包装)</strong><ul><li>正方形晶振 x2</li><li>W25Q128JVSIQ x2</li></ul></li><li>Type-C USB线缆 x1</li><li>FPGA JTAG烧写器和线缆 x1</li></ul><p>包装所有内容可以见下图：</p><h3 id="板卡介绍" tabindex="-1"><a class="header-anchor" href="#板卡介绍" aria-hidden="true">#</a> 板卡介绍</h3><p>主要介绍，先放一张图，然后依照图序分别展开介绍每个功能外设。</p><p>板卡正面.png</p><p>板卡反面.png</p><h3 id="上电测试" tabindex="-1"><a class="header-anchor" href="#上电测试" aria-hidden="true">#</a> 上电测试</h3><p>板卡在发放前已经提前烧录好了测试程序，可以用来检测硬件是否能够正常工作，以下wiki均采用 <strong>Win11专业版</strong> 作为测试平台，Win10 和 Win11 均可以。</p><ul><li>安装串口驱动</li></ul><p>我们三期板卡上用的串口芯片是CP2102，所以需要提前在电脑上安装CP2102串口的驱动，否则电脑无法识别出CP2102的串口。如果大家电脑上已经安装过该驱动，则不需要再次安装。具体检查方法如下：</p><p>同学们先将配件中的 Type-C USB 线缆的一头插入到三期PCB板卡的 USB 口中，另一头插入到电脑的 USB 口中，然后按下 <em><strong>WIN+X</strong></em> 组合键，在弹出的选项中点击 <em><strong>设备管理器</strong></em> 选项，如果 <em><strong>设备管理器---&gt;端口(COM和LPT)</strong></em> 中显示类似下图中带有 <code>CP210x</code> 字样的端口图标，则说明串口驱动已经安装成功，不需要再安装 CP2102 驱动：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-1.png" alt="设备管理器显示CP2102端口" tabindex="0" loading="lazy"><figcaption>设备管理器显示CP2102端口</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上图端口图标后圆括号中的 <strong><code>COMx</code></strong> 后接着的数字不一定是图中的 <strong><code>15</code></strong>，这个是电脑自动分配的，对测试没有影响。</p></div><p>如果在 <em><strong>其他设备</strong></em> 选项中出现类似下图中的黄色叹号图标，则说明电脑没有安装过CP2102的驱动，需要使用我们提供的软件包安装相应的CP2102驱动：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-2.png" alt="在其他设备中出现黄色叹号" tabindex="0" loading="lazy"><figcaption>在其他设备中出现黄色叹号</figcaption></figure><p>CP2102驱动的具体安装方法如下：同学们需要先进入 <code>ysyx3_pcb_software/cp2102 driver</code> 目录中，然后双击 <code>CP2102xVCPInstaller_x64.exe</code> 来安装64位驱动。同学们的电脑如果只支持32位的话，则双击 <code>CP2102xVCPInstaller_x86.exe</code> 来安装32位驱动：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-3.png" alt="安装CP2102驱动程序" tabindex="0" loading="lazy"><figcaption>安装CP2102驱动程序</figcaption></figure><p>之后按照安装程序引导界面来安装驱动。当驱动安装完成后，再次使用前面介绍的方法打开设备管理器，如果在 <em><strong>端口(COM和LPT)</strong></em> 中显示出CP2102的端口号，则说明驱动安装成功。</p><details class="hint-container details"><summary>CP2102 设备识别问题</summary><p>如果在 <em><strong>其他设备</strong></em> 选项中显示 <strong>Verifone USB to Printer</strong> 或者 <strong>Verifone USB to Modem</strong> ，则说明电脑已经安装过CP2102的驱动，但是没有被成功识别出来：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-1.png" alt="CP2102设备识别问题" tabindex="0" loading="lazy"><figcaption>CP2102设备识别问题</figcaption></figure><p>此时需要更新下驱动，具体方法如下：</p><ul><li>右键 <strong>Verifone USB to Printer</strong> 或者 <strong>Verifone USB to Modem</strong> 并点击更新驱动选项：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-2.png" alt="右键点击更新驱动" tabindex="0" loading="lazy"><figcaption>右键点击更新驱动</figcaption></figure><ul><li>然后在弹出的窗口中点击 <em><strong>让我从计算机上的可用驱动程序程序列表中选取</strong></em> ：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-3.png" alt="从电脑上选取驱动程序" tabindex="0" loading="lazy"><figcaption>从电脑上选取驱动程序</figcaption></figure><ul><li>在弹出的窗口中，选择显示 <em><strong>所有设备</strong></em> ，并点击 <em><strong>下一页</strong></em> ：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-4.png" alt="选择设备类型" tabindex="0" loading="lazy"><figcaption>选择设备类型</figcaption></figure><ul><li>在弹出的窗口的左边设备列表中选择 <em><strong>Silicon Labs</strong></em> ，然后在右边详细列表中选择第一个，然后点击 <em><strong>下一页</strong></em> ：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-5.png" alt="选择驱动程序" tabindex="0" loading="lazy"><figcaption>选择驱动程序</figcaption></figure><ul><li>在弹出的警告框中，点击 <em><strong>是</strong></em> ：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-6.png" alt="更新驱动" tabindex="0" loading="lazy"><figcaption>更新驱动</figcaption></figure><p>这样重新插入 USB 线缆后，就可以在设备管理器中显示出端口号了。</p></details><ul><li>安装串口调试软件</li></ul><p>当电脑能够成功识别出 CP2102 端口号后，需要使用串口调试软件来和板卡进行通信。目前市场上常用的串口调试软件有很多，比如Minicom、MobaXterm、Xshell、SecureCRT、Cutecom和WindTerm 等等，<strong>本wiki选择的串口调试软件是MobaXterm</strong>。</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-1.png" alt="MobaXterm软件" tabindex="0" loading="lazy"><figcaption>MobaXterm软件</figcaption></figure>',25),p={href:"https://mobaxterm.mobatek.net/",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="hint-container tip"><p class="hint-container-title">Implicit CR in every LF 选项含义</p><p>由于我们板卡上的测试程序是使用 <strong><code>&quot;\\n&quot;(LF)</code></strong> 进行换行的，但是Win下换行格式是 <strong><code>&quot;\\r\\n&quot;(CR LF)</code></strong> ，所以需要设置PuTTY在每次接收到 <strong><code>&quot;\\n&quot;(LF)</code></strong> 时在其前面隐式添加 <strong><code>&quot;\\r&quot;(CR)</code></strong> ，这样才能在 Win 下正确地显示换行。这个选项与 Win，Linux 和 Mac 系统下对换行的处理方式不同有关，感兴趣的同学们可以自行上网了解相关内容。</p></div><p>至此，板卡的硬件测试完成，下面将更加详细地介绍板卡。</p><div class="hint-container info"><p class="hint-container-title">板卡或者耗材损坏/缺失/丢失怎么办？</p><ul><li>每个板卡在发放给学生前都会进行硬件和软件测试，若自快递签收后一周内，板卡，FPGA损坏，或者耗材有缺失，可以联系项目组更换。</li><li>项目组会在板卡中额外提供若干耗材 (晶振和Flash)，若消耗完毕或丢失，项目组可提供参考网购链接，由同学们自行购买。</li></ul></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>板卡上的机械开关选用的是 1.27mm 间距的微动拨码开关。这种开关每一位拨码比较小，直接用手不好拨动，可以使用带尖头的拨动。</p></div><div class="hint-container danger"><p class="hint-container-title">调试注意事项</p><p>请同学们在实际操作板卡前仔细阅读并确认下面各个注意事项内容，尤其是之前没有嵌入式调试经历的同学，请务必遵守下面的各注意事项：</p></div><div class="hint-container danger"><p class="hint-container-title">机械开关切换</p><p>简单说的话，就是上电后，除了三期SoC板卡和黑金FPGA核心板上的复位按钮可以按动之外，板卡的机械开关和接插件都不要带电按动和插接。带电操作可能会导致板卡的电源网络出现较大的浪涌电流，影响板卡的工作稳定性，甚至会烧坏板卡，而非正确的热插拔操作可能会使得芯片出现闩锁效应，可能会损坏芯片。</p></div><div class="hint-container warning"><p class="hint-container-title">复位功能注意事项</p><ul><li>由于测试板卡上没有<strong>上电自动复位电路</strong>，所以需要同学们在板卡上电后按动复位开关执行<strong>一次手动复位</strong>。</li><li>由于复位开关是机械开关，且板卡<strong>没有设计去抖电路</strong>，另外FPGA板卡侧复位和SoC测试板卡侧复位是<strong>异步的</strong>，如果三期SoC板卡的复位在FPGA板卡复位之前完成，则会由于发送的访存请求得不到响应而卡死，进而导致串口只输出 <code>Loading program size ...</code> 。此时只需再次按动三期SoC板卡上的复位开关即可。但是强烈建议每次执行程序前先按一下FPGA核心板上的复位按钮，然后再按一下三期板卡上的复位开关，这样能够尽可能确保复位的正确性。另外复位开关的按动时间需要长一些。</li></ul></div><div class="hint-container danger"><p class="hint-container-title">Custom Title</p><p>A custom danger container with <code>code</code>, <a href="#demo">link</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="硬件设计" tabindex="-1"><a class="header-anchor" href="#硬件设计" aria-hidden="true">#</a> 硬件设计</h3><div class="hint-container info"><p class="hint-container-title">设计约束</p></div><div class="hint-container info"><p class="hint-container-title">设计插曲</p></div><h3 id="程序烧写和测试" tabindex="-1"><a class="header-anchor" href="#程序烧写和测试" aria-hidden="true">#</a> 程序烧写和测试</h3><h3 id="fpga板卡外设" tabindex="-1"><a class="header-anchor" href="#fpga板卡外设" aria-hidden="true">#</a> FPGA板卡外设</h3><h2 id="其他资源" tabindex="-1"><a class="header-anchor" href="#其他资源" aria-hidden="true">#</a> 其他资源</h2><p>对接PPT内容，你可以从这里获得。</p><h3 id="硅后测试" tabindex="-1"><a class="header-anchor" href="#硅后测试" aria-hidden="true">#</a> 硅后测试</h3><h2 id="文档勘误与致谢" tabindex="-1"><a class="header-anchor" href="#文档勘误与致谢" aria-hidden="true">#</a> 文档勘误与致谢</h2>`,17),h={href:"https://github.com/oscc-ysyx-web-project/ysyx-website/issues",target:"_blank",rel:"noopener noreferrer"},u=e("h3",{id:"致谢列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#致谢列表","aria-hidden":"true"},"#"),i(" 致谢列表")],-1),m=e("ul",null,[e("li",null,"感谢粟金伦同学在测试板卡时发现的板卡插接深度不够可能导致板卡信号断路问题，现在已经补充到相关注意事项中。"),e("li",null,"感谢粟金伦同学建议使用 PuTTY/MobaXterm 软件来做板卡测试流程演示用的串口上位机软件，本文档已经使用 MobaXterm 重写了有关章节。")],-1);function b(f,x){const t=c("ExternalLinkIcon");return s(),o("div",null,[d,e("p",null,[i("MobaXterm是一款面向Window平台的，支持 SSH、X11、VNC、FTP和SERIAL等多种协议的强大终端工具。可以访问 "),e("a",p,[i("MobaXterm的官网"),n(t)]),i(" 获得更加详细的信息。同学们需要从官网上下载。")]),g,e("p",null,[i("项目组鼓励和欢迎同学们对本文档提出宝贵的意见和反馈，目前项目组使用 "),e("a",h,[i("Github issue"),n(t)]),i(" 来追踪这些反馈，本wiki致力于遵守开源软件开发中公认的最佳实践，所以当你觉得有提出的必要时，请大胆地发起issue吧！😄")]),u,m])}const w=r(l,[["render",b],["__file","index.html.vue"]]);export{w as default};
