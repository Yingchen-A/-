import React, { useState } from 'react';
import { Copy, Check, X, FileText, Download } from 'lucide-react';
import {
  moduleOneBullets,
  moduleOneSources,
  moduleTwoBullets,
  moduleTwoSources,
  moduleThreeBullets,
  moduleThreeSources,
  factCheckDiffs
} from '../data/researchData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const MarkdownExportModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Generate complete markdown document divided strictly into 3 parts per module
  const generateFullMarkdown = () => {
    return `# 国产AI短剧海外爆火——数字文化产业出口新方向？（实证查证与信息素养分析最新版报告）

> **核实原则与数据优先级：**
> 上市公司法定财报 / 平台一手官方规则 > DataEye《2026上半年海外短剧AI剧数据报告》原件 > 严格引用上述来源的二次专业报道。
> 坚决剔除网络二手自媒体营销号张冠李戴（如将“前二十占79.2%”误传为“前五占近八成”、将单季推广冲高“68%”误当全年财报等）。转引仅作为辅助补充。

---

## 一、模块① 工业化供给能力（真人成熟体系 + AI放大器 + 本土化转码）

### a. 能力详细结论 bullet list
${moduleOneBullets
  .map(
    (b, i) =>
      `${i + 1}. **【${b.category}】${b.title}**\n   - **核心实证阐述：** ${b.content}\n   - **核心指标：** ${b.coreMetrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}\n   - **证据等级：** \`${b.evidenceLevel}\``
  )
  .join('\n\n')}

### b. 查询来源对应表
| 序号 | 核心结论点 | 优先源头（一手/权威） | 类型 | 原报告定位 / 法律出处 | 转引/辅助说明 | 可信度与核查状态 | 批判性核查说明与分母澄清 |
|---|---|---|---|---|---|---|---|
${moduleOneSources
  .map(
    (s, i) =>
      `| ${i + 1} | ${s.conclusionPoint} | ${s.primarySource} | ${s.primarySourceType} | ${s.evidenceLocation} | ${s.secondarySource} | ${s.credibilityRating} (${s.verificationStatus}) | ${s.criticalNotes} |`
  )
  .join('\n')}

### c. 对应可视化 (Visualizations)
1. **三种制作模式成本与周期断崖式量化对比柱状图**
   - **北美真人实拍：** 单部 $150,000 ~ $200,000，制作周期 90-180天，单分成本 13,000-18,000元；
   - **来华拍摄模式：** 单部 $100,000 ~ $150,000，制作周期 7-15天（降本约30%），单分成本 8,000-12,000元；
   - **AI短剧生成模式：** 单部 8-15万元RMB（约$1.2-2.1万），制作周期 2-5天（降至实拍1/10），单分报价压至 200-1,000元。
2. **海外本土剧 vs 译制剧市场供给演变双环形图 (DataEye Page 28)**
   - 2025H1：本土剧占 27%，译制剧占 73%；
   - 2026H1：本土剧跃升至 46%（超10万部），译制剧回落至 54%（超12万部）；
   - **佐证图表 (Page 30)：** 热值总榜TOP20中，本土剧占19部，译制剧仅1部（《OMG! The butcher Son》位列第19）。
3. **AI短剧全流程人机分工与兜底节点全景流程图**
   - 选题（人工把关宗教文化禁忌）→ 剧本分镜（AI生成提示词，导演人工校正，初期还原度仅40%-70%）→ 视频生成（可灵/Seedance+LoRA一致性）→ 本土化配音（TTS生成，母语者逐字校准气口）→ 剪辑终审（人工审核付费卡点与合规标识）。
4. **自采近千部题材供给分布柱状图**
   - 都市情感 287部 (28.7%)，修仙神话 226部 (22.6%)，都市商战 184部 (18.4%)，西方奇幻 145部 (14.5%)，传统历史文化 仅52部 (5.2%)。

---

## 二、模块② 平台分发筛选（算法作为可见性守门人 + 受众情绪需求对位）

### a. 能力详细结论 bullet list
${moduleTwoBullets
  .map(
    (b, i) =>
      `${i + 1}. **【${b.category}】${b.title}**\n   - **核心实证阐述：** ${b.content}\n   - **核心指标：** ${b.coreMetrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}\n   - **证据等级：** \`${b.evidenceLevel}\``
  )
  .join('\n\n')}

### b. 查询来源对应表
| 序号 | 核心结论点 | 优先源头（一手/权威） | 类型 | 原报告定位 / 法律出处 | 转引/辅助说明 | 可信度与核查状态 | 批判性核查说明与分母澄清 |
|---|---|---|---|---|---|---|---|
${moduleTwoSources
  .map(
    (s, i) =>
      `| ${i + 1} | ${s.conclusionPoint} | ${s.primarySource} | ${s.primarySourceType} | ${s.evidenceLocation} | ${s.secondarySource} | ${s.credibilityRating} (${s.verificationStatus}) | ${s.criticalNotes} |`
  )
  .join('\n')}

### c. 对应可视化 (Visualizations)
1. **自采409条短剧切片：播放量 (对数轴) vs 点赞互动率 交互散点图**
   - **统计形态：** 10万-50万腰部区间点赞率在 3.0%-8.0% 宽幅离散；突破百万与千万播放区间后，点赞率迅速收敛至 **1.2% ~ 2.5%** 的狭窄下限；
   - **理论洞察：** 算法凭借前3秒强刺激与冲突钩子推高曝光，但看完不等于认同，受众消费的是多巴胺快感而非深度文化认同。
2. **TikTok短剧解说受众年龄构成甜甜圈图 (DataEye Page 21)**
   - ≥35岁 (成熟/家庭用户)：61.6%；
   - 25-34岁 (中青年群体)：24.8%；
   - 18-24岁 (年轻受众)：13.5%。
3. **TikTok短剧解说国别关注度柱状图 (DataEye Page 21)**
   - 巴西 600.22万人热度断崖领跑，德国 385.93万，英国 328.91万，美国 271.89万，韩国 134.36万。
4. **真人短剧 vs AI短剧受众画像与赛道差异对比表 (DataEye Page 18)**
   - 真人剧受众男女均衡覆盖25-55岁（主打甜宠逆袭真实代入）；AI剧女性占优、以18-35岁年轻群体为主（主打高颜值建模与西方奇幻视觉冲击）。
5. **TikTok热播剧TOP20同剧多剧场号矩阵图 (DataEye Page 19)**
   - 2026年6月TOP20增量26.85亿，《孕夫的華麗復仇》以The Lore Master (4.31亿) 与shape of desire (2.08亿) 双账号霸榜TOP2。

---

## 三、模块③ 平台价值捕获（变现结构决定爆火沉淀在哪里）

### a. 能力详细结论 bullet list
${moduleThreeBullets
  .map(
    (b, i) =>
      `${i + 1}. **【${b.category}】${b.title}**\n   - **核心实证阐述：** ${b.content}\n   - **核心指标：** ${b.coreMetrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}\n   - **证据等级：** \`${b.evidenceLevel}\``
  )
  .join('\n\n')}

### b. 查询来源对应表
| 序号 | 核心结论点 | 优先源头（一手/权威） | 类型 | 原报告定位 / 法律出处 | 转引/辅助说明 | 可信度与核查状态 | 批判性核查说明与分母澄清 |
|---|---|---|---|---|---|---|---|
${moduleThreeSources
  .map(
    (s, i) =>
      `| ${i + 1} | ${s.conclusionPoint} | ${s.primarySource} | ${s.primarySourceType} | ${s.evidenceLocation} | ${s.secondarySource} | ${s.credibilityRating} (${s.verificationStatus}) | ${s.criticalNotes} |`
  )
  .join('\n')}

### c. 对应可视化 (Visualizations)
1. **海外微短剧App市场集中度真实构成饼图 (DataEye Page 6 & 10 实录纠偏)**
   - 2026H1 大盘双端内购总额：12.7亿美元；
   - **头部 TOP 1-5 (合计7.15亿美元)：** 占大盘 **56.27%** (DramaBox 1.95亿, ReelShort 1.88亿, NetShort 1.28亿, DramaWave 1.05亿, GoodShort 0.98亿)；
   - **腰部 TOP 6-20 (合计2.91亿美元)：** 占大盘 **22.94%**；
   - **长尾应用 (合计2.64亿美元)：** 占大盘 **20.79%**；
   - *辟谣结论：收入榜前20贡献近8成（79.21%），而非前5占8成。*
2. **出海内购金额与下载量归属对比条形图 (DataEye Page 12 & 13)**
   - 内购金额：中国出海厂商 11.82亿美元 (93%) vs 海外本土 0.70亿美元 (7%)；
   - 下载量：中国出海厂商 12.21亿次 (85%) vs 海外本土 2.17亿次 (15%)。
3. **上市公司法定财报费用率核验看板**
   - **掌阅科技 (603533.SH) 2025年报：** 营收 32.43亿元，销售费用 20.79亿元，全年销售费用率精确为 **64.11%**（推广费用占销售费用95%以上）；
   - **中文在线 (300364.SZ) 2026三季报：** 营收 8.33亿元，销售费用 3.84亿元，销售费用率降至 **46.10%**（同比下降41.84%，海外推广费大幅收缩，部分短剧转AI制作降本）。
4. **买量广告素材月度暴涨走势图 (DataEye Page 23)**
   - 2026上半年累计投放 1961万组（同比暴涨 324%），半年超2025全年总和（1395.7万组）；昆仑万维DramaWave以320万组、DramaReels以280万组包揽前二。
5. **海外短剧商业百元流水价值捕获模型 (Sankey流向图)**
   - 海外用户支付 $100 → 应用商店与流量巨头（Google/Apple/Meta/TikTok）抽走 $65-$70 → 短剧App平台留存 $20-$25（高买量成本下规模换位）→ 制作方分账仅得 $5-$10（万播分账从30-100元跌至5-10元，盈亏线达标率仅1.3%）。

---

## 四、关键事实核查纠偏与人机批判性思维对比表
| 争议焦点 | AI初稿与网络谣传 | 权威核验证实事实 | 一手出处与页码 | 误读原因与分母澄清 | 实证对结论的影响 |
|---|---|---|---|---|---|
${factCheckDiffs
  .map(
    (d) =>
      `| **${d.subject}** | ${d.erroneousRumor} | **${d.verifiedData}** | ${d.verifiedSource} | ${d.correctionReason} | ${d.impactOnConclusion} |`
  )
  .join('\n')}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateFullMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generateFullMarkdown()], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = '国产AI短剧出海实证研究_三模块完整最新版报告.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="text-base font-bold text-white font-sans">
                导出完备实证报告（Markdown格式，严格按a/b/c三部分组织）
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                可直接复制用于学术答辩、演讲脚本附录、研究立项报告或图文汇报
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>下载 .md 文件</span>
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '已复制全文至剪贴板' : '一键复制全文 Markdown'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Textarea View */}
        <div className="flex-1 bg-slate-950 p-4 overflow-y-auto">
          <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
            {generateFullMarkdown()}
          </pre>
        </div>
      </div>
    </div>
  );
};
