import{aS as r,W as s,X as a,Y as t,af as e,ah as o,Z as n,J as c}from"./framework-3550b87c.js";const l={},g=n('<h2 id="开发入门" tabindex="-1"><a class="header-anchor" href="#开发入门" aria-hidden="true">#</a> 开发入门</h2><h3 id="开箱检查" tabindex="-1"><a class="header-anchor" href="#开箱检查" aria-hidden="true">#</a> 开箱检查</h3><p>同学们收到板卡后，请先按照下面的列表检查板卡和配件是否齐全：</p><ul><li>板卡包装盒 x1</li><li>开发板+FPGA核心板 <strong>(使用网格防静电袋包装)</strong></li><li>耗材 <strong>(使用硬质防静电袋包装)</strong><ul><li>正方形晶振 x2</li><li>W25Q128JVSIQ x2</li></ul></li><li>Type-C USB线缆 x1</li><li>FPGA JTAG烧写器和线缆 x1</li></ul><p>包装所有内容可以见下图：</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>包装中配发的Type-C USB线缆可能对于某些同学来说不够长，可以选用更长线材长度的Type-C线，但是需要自行确认Type-C线材的质量符合板卡的通信和供电能力。</p></div><h3 id="板卡介绍" tabindex="-1"><a class="header-anchor" href="#板卡介绍" aria-hidden="true">#</a> 板卡介绍</h3><p>星空开发板采用的是SoC底板+FPGA核心板的设计，具体板载资源如下图所示：</p><p>板卡正面.png</p><p>板卡反面.png</p><ul><li>系统 <ul><li>1个红色电源指示LED</li><li>1个PS功能复位按键，1个PS调试复位按键</li><li>1个FPGA启动模式切换开关</li><li>1个FPGA JTAG调试接口</li><li>1个板载烧写器(HFPLink)</li></ul></li><li>PS侧外设 <ul><li>1个UART接口，使用CP2102芯片</li><li>1个SDIO接口，SD能启动PetaLinux，eMMC可以固化程序</li><li>1个SDIO WIFI，使用AP6212模组，支持独立电源控制</li><li>1个CAN接口，CAN使用TJA1050芯片</li><li>1个USB Host，使用USB3320C芯片</li><li>2个用户自定义按键</li><li>2个用户自定义蓝色LED</li><li>4个WS2812C LED炫彩灯珠</li></ul></li><li>PL侧外设 <ul><li>1个VGA接口，使用电阻网络实现DAC</li><li>1个PS/2接口</li><li>1个RTC时钟，使用PCF8563芯片</li><li>1个EEPROM，使用AT24C64芯片</li><li>1个SPI Flash，使用W25Q128JVSIQ芯片</li><li>1个I2S接口，使用WM8960芯片，支持音频输入/输出，支持使用MIC录音</li><li>1个用户自定义按键</li><li>1个用户自定义蓝色LED</li><li>4个WS2812C LED炫彩灯珠</li></ul></li><li>1个SO-DIMM 204P接口，用于连接ZYNQ7010/7020 FPGA核心板</li></ul><p>星空开发板设计上的主要特点如下：</p><ul><li>星空开发板的外形尺寸为<strong>110X84mm</strong>，面积约为标准信用卡大小的<strong>2倍</strong>。</li><li>重新设计电源网络，将供电能力从1.2A电流提高到2A，支持外置5V<strong>电源适配器</strong>供电，支持多路电源管理。</li><li>FPGA采用SO-DIMM 204P接口的核心板设计，硬件规格为：<strong>XC7Z010-1CLG400C + 512MB DDR3 + 8GB eMMC</strong>。</li><li>板载NOR Flash烧写器 <strong>(HFPLink)</strong>，实现了拖拽式烧录功能，烧写器支持固件升级 <strong>(USB接口)</strong>。</li><li>使用多路<strong>模拟开关</strong>实现FPGA侧PL端口IO的复用，以挂载尽可能多的外设。</li><li>设计上将处理器核切换和频率选择开关分开，并使用<strong>正选通逻辑</strong>，方便拨码。</li><li>充分考虑几何约束关系，按键开关选择低压力克数器件 <strong>(160gf)</strong>，提升硬件操作体验。</li></ul><div class="hint-container danger"><p class="hint-container-title">供电负载说明</p><p>目前星空开发板正常运行程序的电流负载约为<strong>400~450mA</strong>，使用笔记本或台式机的标准USB口取电基本都能满足供电要求，不需要额外供电通路支持。当然为了满足某些特定的需求，星空开发板也支持使用Type-C接口的外置5V/2A电源适配器供电，但是在配件中并没有提供该适配器，需要同学们自行准备。一般电源适配器是直接和市电相连的，供电电压和电流都比较高，存在一定危险性，<strong>如果同学们确实需要使用电源适配器，请选取符合安全标准的适配器并注意用电安全</strong>。</p></div><h3 id="上电测试" tabindex="-1"><a class="header-anchor" href="#上电测试" aria-hidden="true">#</a> 上电测试</h3><div class="hint-container warning"><p class="hint-container-title">调试注意事项</p><p>请同学们在实际操作板卡前仔细阅读并确认下面各个注意事项内容，尤其是之前没有嵌入式调试经历的同学，请务必遵守下面的各注意事项：</p><ul><li>接触板卡和其他物料前请确认双手已经保持干燥。</li><li>接触板卡之前，先找一个金属物体摸一下，以释放人体上可能带有的静电。</li><li>拿取板卡时，请拿电路板的板边，而不要捏着芯片，以防止人体多余的静电传导到芯片上。</li><li>使用Type-C线缆供电时，请优先使用PC的USB3.0接口，以尽可能保证供电稳定。</li><li>板卡上有电源选择开关和滑动开关，上电前请确认它们都被正确拨动到某一侧，而非中间位置。</li><li>SoC板卡和FPGA核心板不要在带电情况下插接，以防止这种非正确的热插拔操作导致的栓锁效应，损坏芯片。</li><li>微动拨码开关不要在带电情况下拨动。</li><li>电源一经接通，若观察到有如冒烟、异常气味、放电的声光、元器件发烫等异常现象时，尤其当听到“滋滋滋”的<strong>噪声啸叫</strong>时，请立即<strong>切断电源</strong>。</li></ul></div><div class="hint-container info"><p class="hint-container-title">噪声啸叫</p><p>噪声啸叫英文为Acoustic Noise，常分为电感啸叫和电容啸叫。其中电感啸叫最常见，电感啸叫多是由于未正确选择器件参数，负载不稳定或轻载过载等导致的，而<strong>负载不稳定</strong>往往是主因，这意味着板卡上某个地方可能存在短路。</p></div><h4 id="硬件操作" tabindex="-1"><a class="header-anchor" href="#硬件操作" aria-hidden="true">#</a> 硬件操作</h4><p>首先，同学们需要从<strong>网格防静电袋</strong>中拿出板卡，并从<strong>硬质防静电袋</strong>中取出一个25MHz的晶振，然后将晶振按照正确方向插入到三期板卡的晶振插座中。晶振管脚要比插座的插槽深度要长一些，当发现用手插入晶振时稍用力已无法再进一步插入后即可，插入的方向和深度见下图：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/osc-1.png" alt="晶振正确插入时方向" tabindex="0" loading="lazy"><figcaption>晶振正确插入时方向</figcaption></figure><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/osc-2.png" alt="晶振正确插入时深度" tabindex="0" loading="lazy"><figcaption>晶振正确插入时深度</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>不要将晶振的方向插反了，<strong>这个上电前同学们需要再确认下</strong>。</li><li>可以用手直接取出和插拔晶振，但是要注意手尽量不要触碰到晶振的管脚。</li><li>推荐通过抓住晶振的金属外壳来取出和插拔晶振。</li></ul></div><p>晶振正确插入后，硬件上还需要使用微动拨码开关正确设置SoC芯片的工作状态，具体来说需要两步：</p><ul><li>使能PLL输出，选择PLL输出核时钟的频率。</li><li>选通特定学号的处理器核。</li></ul>',24),d={href:"https://oscc-ysyx-web-project.github.io/ysyx-website/board/official/",target:"_blank",rel:"noopener noreferrer"},p=t("code",null,"ysyx_210000",-1),u=t("code",null,"1",-1),m=n('<p>现在解释下拨码开关的每个位的定义和功能，板卡上共有两个拨码开关，左边的拨码开关有4位拨码，是用来<strong>设置时钟输出状态的</strong>。右边的拨码开关有6位拨码，是用来<strong>设置核选通状态的</strong>。</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-1.png" alt="拨码开关位功能定义" tabindex="0" loading="lazy"><figcaption>拨码开关位功能定义</figcaption></figure><p>4位拨码开关功能定义(从左到右)：</p><ul><li>PLL时钟使能位(1位)</li><li>PLL输出时钟频率选择位(3位)</li></ul><p>6位拨码开关功能定义(从左到右)：</p><ul><li>未定义(1位)</li><li>处理器核选择位(5位)</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>6位拨码开关的最高位 <strong>(左边数第一个)</strong> 没有定义功能。</p></div><p>拨码开关设置分成两部分，第一部分是设置PLL时钟使能位和PLL输出核的时钟频率，我们建议<strong>先将PLL输出核时钟频率设置成25MHz，并先从低频率开始测试</strong>。当同学们的核能够在25MHz核时钟下跑通我们提供的所有测试程序后，可以再去尝试逐步提高处理器核时钟频率。现在介绍下拨码开关位和SoC上信号的对应关系，其中三期SoC的RCG(全局时钟复位模块)如下图所示：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/rcg-intro.png" alt="三期SoC的RCG模块" tabindex="0" loading="lazy"><figcaption>三期SoC的RCG模块</figcaption></figure><p>其中拨码开关的PLL时钟使能位对应于上图左上角红框中的<code>clk_sel</code>，当使能该位后，处理器核时钟<code>clk_core</code>使用PLL的输出时钟，此时需要将拨码开关上的PLL时钟使能位设置为<code>ON</code>。失能该位时，<code>clk_core</code>直接使用外部晶振时钟，此时需要将拨码开关上的PLL时钟使能位设置为<code>OFF</code>。PLL输出时钟频率选择位对应于上图左上角红框中的<code>pll_cfg[2:0]</code>，用于设置PLL输出时钟的频率，也就是处理器核时钟频率。<strong>拨码开关位和PLL输出核时钟频率对应</strong>关系如下表格所示：</p><div class="freq_table_center"><table><thead><tr><th style="text-align:center;">PLL输出时钟频率选择位(0表示OFF档位, 1表示ON档位)</th><th style="text-align:center;">处理器核时钟频率</th></tr></thead><tbody><tr><td style="text-align:center;">3&#39;b000</td><td style="text-align:center;">25MHz</td></tr><tr><td style="text-align:center;">3&#39;b001</td><td style="text-align:center;">50MHz</td></tr><tr><td style="text-align:center;">3&#39;b010</td><td style="text-align:center;">100MHz</td></tr><tr><td style="text-align:center;">3&#39;b011</td><td style="text-align:center;">150MHz</td></tr><tr><td style="text-align:center;">3&#39;b100</td><td style="text-align:center;">200MHz</td></tr><tr><td style="text-align:center;">3&#39;b101</td><td style="text-align:center;">250MHz</td></tr><tr><td style="text-align:center;">3&#39;b110</td><td style="text-align:center;">300MHz</td></tr><tr><td style="text-align:center;">3&#39;b111</td><td style="text-align:center;">350MHz</td></tr></tbody></table></div><p>比如当PLL输出位拨码调整到<code>OFF-OFF-OFF</code>时，表示此时PLL输出核时钟频率为25MHz，事实上 <em><strong>拨码开关位功能定义</strong></em> 一图中的时钟设置就恰好是25MHz。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上面 <em><strong>拨码开关位和核时钟频率对应表</strong></em> 中拨PLL输出时钟频率选择位<strong>设置的最低位对应于板子上拨码开关的4号位</strong>。所以如果要将PLL输出时钟频率倍频到200MHz，则需要将PLL输出时钟选择位拨码调整到ON-OFF-OFF(对应拨码开关的2位-3位-4位)，如下图所示：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-2.png" alt="使能PLL并将PLL倍频到200MHz的拨码开关设置" tabindex="0" loading="lazy"><figcaption>使能PLL并将PLL倍频到200MHz的拨码开关设置</figcaption></figure></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>拨码开关上面<strong>如果</strong>带有<strong>黄色防尘薄膜</strong>，需要先撕下来。</li><li>板卡上的机械开关选用的是 1.27mm 间距的微动拨码开关。这种开关每一位拨码比较小，直接用手不好拨动，可以使用镊子，曲别针等带尖头的物品拨动，<strong>当使用尖头物品请注意使用安全</strong>。</li></ul></div><p>拨码开关设置的第二部分是选通自己的处理器核，一生一芯三期将多个同学们的核集成到一个SoC中，并使用外部信号线的高低电平来选通不同的核，该外部信号线由拨码开关上的<strong>处理器核选择位</strong>实现，<strong>处理器核选择位</strong>对应于下面三期SoC架构图中左边红框中的<code>core_dip[4:0]</code>：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/soc-intro.png" alt="三期SoC架构图" tabindex="0" loading="lazy"><figcaption>三期SoC架构图</figcaption></figure><p>处理器核选择位的拨码仍然采用的是<strong>正逻辑</strong>。结合下图例子更方便理解，比如同学们要选择序号为3的核，此时拨码开关应该设置成下图中的样子：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-3.png" alt="拨码开关与序号对应关系" tabindex="0" loading="lazy"><figcaption>拨码开关与序号对应关系</figcaption></figure><p>选通核的五位拨码开关从左到右<strong>位权</strong>依次为<code>16, 8, 4, 2, 1</code>。这样选择序号为<code>1</code>的核，则其对应的编码为<code>5&#39;b00001</code>。由于是<strong>正逻辑</strong>，所以对应拨码位设置从左到右依次为<code>OFF-OFF-OFF-OFF-ON</code>。如果要选择序号为<code>6</code>的核，则其对应的编码为<code>5&#39;b00110</code>，对应拨码位设置从左到右依次为<code>OFF-OFF-ON-ON-OFF</code>。</p><p>再举个完整拨码开关设置的例子，比如要选择核序号为<code>7</code>的核进行测试，并希望处理器核时钟工作在25MHz，则拨码开关的设置应如下图所示：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-4.png" alt="使能PLL，PLL输出核时钟为25MHz，选择核序号为7的拨码开关设置" tabindex="0" loading="lazy"><figcaption>使能PLL，PLL输出核时钟为25MHz，选择核序号为7的拨码开关设置</figcaption></figure><div class="hint-container danger"><p class="hint-container-title">拨码开关切换</p><ul><li>拨码开关也需要和滑动开关一样上电前被正确拨动到某一侧，而非中间位置（机械死区），以防止拨码状态电平的不稳定。</li><li>不要带电拨动拨码开关，带电操作可能会导致板卡电源网络出现较大的浪涌电流，影响板卡的工作稳定性，甚至会烧坏板卡。</li></ul></div><p>至此已经介绍完所有的硬件操作内容，下面蒋介绍软件工具的使用。板卡在发放给同学们前已经提前烧录好了测试程序，可以用来检测板卡和SoC芯片是否能够正常工作，文档以下均采用 <strong>Win11专业版</strong> 作为软件测试平台。</p><h4 id="安装串口驱动" tabindex="-1"><a class="header-anchor" href="#安装串口驱动" aria-hidden="true">#</a> 安装串口驱动</h4><p>我们三期板卡上用的串口芯片是CP2102，所以需要提前在电脑上安装CP2102串口的驱动，否则电脑无法识别出CP2102的串口。如果大家电脑上已经安装过该驱动，则不需要再次安装。具体检查方法如下：</p><p>同学们先将配件中的 Type-C USB 线缆的一头插入到SoC板卡的 <strong><code>VBUS1</code></strong> 口中，另一头插入到电脑的 USB 口中，确认滑动开关 <strong><code>SW1</code></strong> 和 <strong><code>SW2</code></strong> 拨动到了上侧，而 <strong><code>HFP-MODE</code></strong> 拨动到了右侧：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-1.png" alt="滑动开关设置" tabindex="0" loading="lazy"><figcaption>滑动开关设置</figcaption></figure><p>然后按下 <strong><code>PWR</code></strong> 自锁开关给板卡供电，当正确供电时，板卡上 <strong><code>SW2</code></strong> 上侧的红色 <strong><code>LED</code></strong> 会被点亮：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-2.png" alt="给板卡供电" tabindex="0" loading="lazy"><figcaption>给板卡供电</figcaption></figure><p>接着 <em><strong>WIN+X</strong></em> 组合键，在弹出的选项中点击 <em><strong>设备管理器</strong></em> 选项，如果 <em><strong>设备管理器---&gt;端口(COM和LPT)</strong></em> 中显示类似下图中带有 <code>CP210x</code> 字样的端口图标，则说明串口驱动已经安装成功，不需要再安装 CP2102 驱动：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-1.png" alt="设备管理器显示CP2102端口" tabindex="0" loading="lazy"><figcaption>设备管理器显示CP2102端口</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上图端口图标后圆括号中的 <strong><code>COMx</code></strong> 后接着的数字不一定是图中的 <strong><code>15</code></strong>，这个是电脑自动分配的，对测试没有影响。</p></div><p>如果在 <em><strong>其他设备</strong></em> 选项中出现类似下图中的黄色叹号图标，则说明电脑没有安装过CP2102的驱动，需要使用我们提供的软件包安装相应的CP2102驱动：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-2.png" alt="在其他设备中出现黄色叹号" tabindex="0" loading="lazy"><figcaption>在其他设备中出现黄色叹号</figcaption></figure><p>CP2102驱动的具体安装方法如下：同学们需要先进入 <code>ysyx3_pcb_software/cp2102 driver</code> 目录中，然后双击 <code>CP2102xVCPInstaller_x64.exe</code> 来安装64位驱动。同学们的电脑如果只支持32位的话，则双击 <code>CP2102xVCPInstaller_x86.exe</code> 来安装32位驱动：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-3.png" alt="安装CP2102驱动程序" tabindex="0" loading="lazy"><figcaption>安装CP2102驱动程序</figcaption></figure><p>之后按照安装程序引导界面来安装驱动。当驱动安装完成后，再次使用前面介绍的方法打开设备管理器，如果在 <em><strong>端口(COM和LPT)</strong></em> 中显示出CP2102的端口号，则说明驱动安装成功。</p><details class="hint-container details"><summary>CP2102 设备识别问题</summary><p>如果在 <em><strong>其他设备</strong></em> 选项中显示 <strong>Verifone USB to Printer</strong> 或者 <strong>Verifone USB to Modem</strong> ，则说明电脑已经安装过CP2102的驱动，但是没有被成功识别出来：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-1.png" alt="CP2102设备识别问题" tabindex="0" loading="lazy"><figcaption>CP2102设备识别问题</figcaption></figure><p>此时需要更新下驱动，具体方法如下：</p><ul><li>右键 <strong>Verifone USB to Printer</strong> 或者 <strong>Verifone USB to Modem</strong> 并点击更新驱动选项：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-2.png" alt="右键点击更新驱动" tabindex="0" loading="lazy"><figcaption>右键点击更新驱动</figcaption></figure><ul><li>然后在弹出的窗口中点击 <em><strong>让我从计算机上的可用驱动程序程序列表中选取</strong></em> ：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-3.png" alt="从电脑上选取驱动程序" tabindex="0" loading="lazy"><figcaption>从电脑上选取驱动程序</figcaption></figure><ul><li>在弹出的窗口中，选择显示 <em><strong>所有设备</strong></em> ，并点击 <em><strong>下一页</strong></em> ：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-4.png" alt="选择设备类型" tabindex="0" loading="lazy"><figcaption>选择设备类型</figcaption></figure><ul><li>在弹出的窗口的左边设备列表中选择 <em><strong>Silicon Labs</strong></em> ，然后在右边详细列表中选择第一个，然后点击 <em><strong>下一页</strong></em> ：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-5.png" alt="选择驱动程序" tabindex="0" loading="lazy"><figcaption>选择驱动程序</figcaption></figure><ul><li>在弹出的警告框中，点击 <em><strong>是</strong></em> ：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-6.png" alt="更新驱动" tabindex="0" loading="lazy"><figcaption>更新驱动</figcaption></figure><p>这样重新插入 USB 线缆后，就可以在设备管理器中显示出端口号了。</p></details><h4 id="安装串口调试软件" tabindex="-1"><a class="header-anchor" href="#安装串口调试软件" aria-hidden="true">#</a> 安装串口调试软件</h4><p>当电脑能够成功识别出 CP2102 端口号后，需要使用串口调试软件来和板卡进行通信。目前市场上常用的串口调试软件有很多，比如Minicom、MobaXterm、Xshell、SecureCRT、Cutecom和WindTerm 等等，<strong>本文档选择的串口调试软件是MobaXterm</strong>。</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-1.png" alt="MobaXterm软件" tabindex="0" loading="lazy"><figcaption>MobaXterm软件</figcaption></figure>',41),h={href:"https://mobaxterm.mobatek.net/",target:"_blank",rel:"noopener noreferrer"},b=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"串口调试软件选择"),t("p",null,"推荐同学们使用MobaXterm软件，但是同学们也可以自行选择其他串口调试软件使用。")],-1),y={href:"https://putty.org/",target:"_blank",rel:"noopener noreferrer"},f=n('<figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-2.png" alt="MobaXterm软件" tabindex="0" loading="lazy"><figcaption>MobaXterm软件</figcaption></figure><p>然后需要按照下图创建一个串口会话(Serial Session)，具体步骤如下：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-3.png" alt="新建串口会话" tabindex="0" loading="lazy"><figcaption>新建串口会话</figcaption></figure><ol><li>点击MobaXterm工具栏第一个的 <em><strong>Session</strong></em>。</li><li>然后在弹出的窗口中选择 <em><strong>Serial</strong></em>。</li><li>在 <em><strong>Basic Serial settings</strong></em> 中的 <em><strong>Serial port</strong></em> 下拉框中选择前面识别出的带有 <em><strong>Silicon Labs CP210x USB to UART xxx</strong></em> 字样的串口。</li><li>在 <em><strong>Speed(bps)</strong></em> 下拉框中设置波特率为 <em><strong>115200</strong></em>。</li><li>在下面 <em><strong>Advanced Serial settings</strong></em> 的确认参数为： <ol><li><em><strong>Data bits:</strong></em> 8</li><li><em><strong>Stop bits:</strong></em> 1</li><li><em><strong>Parity:</strong></em> None</li><li><em><strong>Flow control:</strong></em> None</li></ol></li></ol><p>将板卡用Type-C线缆和电脑相连，然后使用上面介绍的方法打开已经配置过的串口Session，如果没问题，则会打开黑色背景的窗口：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-3-1.png" alt="正确打开串口Session" tabindex="0" loading="lazy"><figcaption>正确打开串口Session</figcaption></figure><p>至此串口Session配置完成，但为了能够<strong>在窗口中正确地显示换行</strong>，还需要对会话进行设置，具体步骤如下图所示：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-4.png" alt="修改串口换行显示1" tabindex="0" loading="lazy"><figcaption>修改串口换行显示1</figcaption></figure><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-5.png" alt="修改串口换行显示2" tabindex="0" loading="lazy"><figcaption>修改串口换行显示2</figcaption></figure><ol><li>在打开的窗口中任意地方鼠标右击，在弹出的选项中点击 <em><strong>Change terminal settings...</strong></em> 。</li><li>然后在弹出的窗口中勾选 <em><strong>Implicit CR in every LF</strong></em> 复选框。</li></ol><div class="hint-container tip"><p class="hint-container-title">Implicit CR in every LF 选项含义</p><p>由于我们板卡上的测试程序是使用 <strong><code>&quot;\\n&quot;(LF)</code></strong> 进行换行的，但是Win下换行格式是 <strong><code>&quot;\\r\\n&quot;(CR LF)</code></strong> ，所以需要设置PuTTY在每次接收到 <strong><code>&quot;\\n&quot;(LF)</code></strong> 时在其前面隐式添加 <strong><code>&quot;\\r&quot;(CR)</code></strong> ，这样才能在 Win 下正确地显示换行。这个选项与 Win，Linux 和 Mac 系统下对换行的处理方式不同有关，感兴趣的同学们可以自行上网了解相关内容。</p></div><p>当能够正确使用MobaXterm打开串口Session后，请先按动电源开关 <strong><code>PWR</code></strong> 以关闭电源，然后确认FPGA核心板的启动模式选择拨码开关 <strong><code>FPGA-BOOT</code></strong> 拨到了 <strong><code>FLASH</code></strong> 档位，表示此时FPGA核心板从自己板载的Flash中加载硬件系统，因为FPGA板卡在发给同学们之前已经将访存必须的FPGA侧的硬件系统固化在了核心板板载的Flash上，所以需要将档位设置到 <strong><code>FLASH</code></strong>。具体档位含义在拨码开关右侧的白色丝印上：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-3.png" alt="FPGA核心板启动模式设置" tabindex="0" loading="lazy"><figcaption>FPGA核心板启动模式设置</figcaption></figure><ul><li>板卡复位 确认完FPGA启动模式后，按照上面介绍的步骤启动板卡电源，并正确打开串口Session窗口。然后按动开关 <strong><code>CORE-RESET</code></strong> 对SoC板卡执行一次复位：</li></ul><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-4.png" alt="按动复位按键执行SoC复位" tabindex="0" loading="lazy"><figcaption>按动复位按键执行SoC复位</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">复位功能注意事项</p><ul><li>由于SoC板卡上没有<strong>上电自动复位电路</strong>，所以需要同学们在板卡上电后按动复位按键执行<strong>一次手动复位</strong>。</li><li>复位信号是通过机械开关产生的，<strong>没有设计去抖电路</strong>，而且FPGA核心板侧复位<strong>异步于</strong>SoC板卡侧复位，如果SoC板卡的复位在FPGA核心板复位之前完成，则会由于访存请求得不到响应而卡死，现象是串口只输出 <code>Loading program size ...</code> 。<strong>此时只需再次按动板卡上的复位按键即可</strong>。</li><li>复位按键的按动时间可以长一些，以产生稳定的低电平复位信号。</li></ul></div><p>当复位按键被按下后，如果一切设置都正确，串口会打印出Rt-Thread测试程序的加载和执行过程。串口打印出 <strong><code>msh /&gt;</code></strong> 之后会停止，并开始接受用户的输入。同学们可以直接使用键盘在窗口中键入命令。比如输入 <strong><code>help</code></strong> 会打印Rt-Thread支持的命令，输入 <strong><code>list_timer</code></strong> 则会打印Rt-Thread正在运行中的所有定时器。和其他shell一样，<strong><code>msh</code></strong> 在键入命令时也是支持 <strong><code>tab</code></strong> 补全的：</p><figure><img src="https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/rtthread.png" alt="运行RT-Thread测试程序" tabindex="0" loading="lazy"><figcaption>运行RT-Thread测试程序</figcaption></figure><p>至此，板卡的硬件测试完成，下面将更加详细地介绍板卡。</p><div class="hint-container info"><p class="hint-container-title">板卡或者耗材损坏/缺失/丢失怎么办？</p><ul><li>每个板卡在发放给学生前都会进行硬件和软件测试，若自快递签收后一周内，板卡，FPGA损坏，或者耗材有缺失，可以联系项目组更换。</li><li>项目组会在板卡中额外提供若干耗材 (晶振和Flash)，若消耗完毕或丢失，项目组可提供参考网购链接，由同学们自行购买。</li></ul></div>',20),x={class:"hint-container info"},P=t("p",{class:"hint-container-title"},"安装/拆卸FPGA核心板",-1),w={href:"https://en.wikipedia.org/wiki/System_on_module",target:"_blank",rel:"noopener noreferrer"},S=t("figure",null,[t("img",{src:"https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sodimm-1.png",alt:"安装FPGA核心板",tabindex:"0",loading:"lazy"}),t("figcaption",null,"安装FPGA核心板")],-1),C=t("p",null,[e("安装FPGA核心板时把FPGA核心板以30度倾角插入到插槽中，"),t("strong",null,"并确保所有金手指插入的深度都一致"),e("，然后两手同时抓住两边往下按，直到两边被压到插槽的"),t("strong",null,"固定簧片"),e("之下，听到“卡塔”一声就可以了。拆卸核心板过程则相反，轻轻向两侧拨动固定簧片，FPGA核心板会自动弹起，然后向外取出即可。")],-1),L=n('<h3 id="硬件设计" tabindex="-1"><a class="header-anchor" href="#硬件设计" aria-hidden="true">#</a> 硬件设计</h3><p>现在介绍星空V1.2版本的硬件设计，其主要特点如下：</p><ul><li>使用Cadence Orcad/Allegro设计 <strong>(三周)</strong>，采用<strong>六层</strong>层叠设计 <strong>(TOP-GND02-ART03-PWR04-GND05-BOT)</strong> 和沉金表面工艺，并完成四线低阻测试。</li><li>板卡等长设置：ChipLink走线分别参照<strong>tx_clk</strong>和<strong>rx_clk</strong>做<strong>0/50mil</strong>组内等长，2个SDIO参照clk做<strong>0/30mil</strong>组内等长，USB2.0参照clk做<strong>0/50mil</strong>组内等长，5对USB差分信号按照<strong>0/25mil</strong>做对内等长。</li><li>SDIO WIFI的IPEX天线两侧按<strong>30mil</strong>间距打地过孔，功率电感PAD间做了<strong>挖空处理</strong>。</li><li>VGA和所有晶振时钟输出端做了<strong>包地处理</strong>，远离高频和模拟信号，并均参考了完整地。</li><li>模拟地做了<strong>单点隔离</strong>，各芯片均做了完备的电源滤波，电源网络使用覆铜连接，保证电源供电稳定，并打了足量的<strong>回流地过孔</strong>。</li></ul><div class="hint-container info"><p class="hint-container-title">设计插曲</p></div><h3 id="程序烧写和测试" tabindex="-1"><a class="header-anchor" href="#程序烧写和测试" aria-hidden="true">#</a> 程序烧写和测试</h3><p>主要介绍如何下载程序到板载Flash。</p><div class="hint-container info"><p class="hint-container-title">更新板载烧写器固件</p></div><h3 id="fpga板卡外设" tabindex="-1"><a class="header-anchor" href="#fpga板卡外设" aria-hidden="true">#</a> FPGA板卡外设</h3><h2 id="其他资源" tabindex="-1"><a class="header-anchor" href="#其他资源" aria-hidden="true">#</a> 其他资源</h2><p>对接PPT内容，你可以从这里获得。</p><h3 id="硅后测试" tabindex="-1"><a class="header-anchor" href="#硅后测试" aria-hidden="true">#</a> 硅后测试</h3><h2 id="文档勘误与致谢" tabindex="-1"><a class="header-anchor" href="#文档勘误与致谢" aria-hidden="true">#</a> 文档勘误与致谢</h2>',12),_={href:"https://github.com/oscc-ysyx-web-project/ysyx-website/issues",target:"_blank",rel:"noopener noreferrer"},F=t("h3",{id:"致谢列表",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#致谢列表","aria-hidden":"true"},"#"),e(" 致谢列表")],-1),M=t("ul",null,[t("li",null,"感谢粟金伦同学在测试板卡时发现的板卡插接深度不够可能导致板卡信号断路问题，现在已经补充到相关注意事项中。"),t("li",null,"感谢粟金伦同学建议使用 PuTTY/MobaXterm 软件来做板卡测试流程演示用的串口上位机软件，本文档已经使用 MobaXterm 重写了有关章节。")],-1);function A(z,v){const i=c("ExternalLinkIcon");return s(),a("div",null,[g,t("p",null,[e("在做三期SoC的后端集成时，我们给每个同学的核都分配了一个序号，可以通过这个序号选通到同学们自己的核。首选请同学们先打开 "),t("a",d,[e("三期处理器核序号和学号对应表"),o(i)]),e("，然后按照自己的学号来查找核序号是多少，比如学号为"),p,e("的核序号为"),u,e("。")]),m,t("p",null,[e("MobaXterm是一款面向Window平台的，支持 SSH、X11、VNC、FTP和SERIAL等多种协议的强大终端工具。可以访问 "),t("a",h,[e("MobaXterm的官网"),o(i)]),e(" 获得更加详细的信息。")]),b,t("p",null,[e("首先，同学们需要访问MobaXterm的"),t("a",y,[e("官网"),o(i)]),e(" 并下载符合自己电脑版本的安装包，并按照指引成功安装完MobaXterm。当安装完MobaXterm后，打开该软件，会显示类似下图的界面：")]),f,t("div",x,[P,t("p",null,[e("本SoC配套的FPGA核心板是一种 "),t("a",w,[e("SoM(System on Module)"),o(i)]),e("，采用的是SODIMM 204P接口(DDR3兼容标准接口)。这种接口常用于笔记本电脑内存模组，默认FPGA核心板已经插入到插槽中，一般不需要拆卸，如果确有需要，需要同学们自己操作，具体方法如下：")]),S,C]),L,t("p",null,[e("项目组鼓励和欢迎同学们对本文档提出宝贵的意见和反馈，目前项目组使用 "),t("a",_,[e("Github issue"),o(i)]),e(" 来追踪这些反馈，本文档致力于遵守开源软件开发中公认的最佳实践，所以当你觉得有提出的必要时，请大胆地发起issue吧！😄")]),F,M])}const O=r(l,[["render",A],["__file","index.html.vue"]]);export{O as default};
