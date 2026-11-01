import React, { useState } from 'react';
import { BulletListView } from './BulletListView';
import { SourceTable } from './SourceTable';
import {
  moduleOneBullets,
  moduleOneSources,
  productionModeComparison,
  localVsDubbedTrend,
  realGenreDistribution,
  totalGenreSamples
} from '../data/researchData';
import { Layers, DollarSign, Clock, Users, Sparkles, BarChart3, PieChart as PieIcon, Cpu, RefreshCw } from 'lucide-react';

export const ModuleOneSupply: React.FC = () => {
  const [activeVisTab, setActiveVisTab] = useState<'cost' | 'localization' | 'pipeline' | 'genres'>('cost');

  return (
    <div className="space-y-8">
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-800/40 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-lg">
              ①
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400">RESEARCH MODULE 01</div>
              <h2 className="text-xl md:text-2xl font-black text-white font-sans">
                模块① 工业化供给能力（真人成熟工业体系 + AI放大器 + 本土化转码）
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/50 text-blue-200 border border-blue-700/50">
            涵盖三部分结构：a.详细结论 / b.查询来源表 / c.对应可视化
          </span>
        </div>
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          核心实证命题：出海爆火的底层不是“AI孤立创造了奇迹”，而是国内历经5年高频内卷验证的真人短剧工业体系（降本底座），被AI视频大模型在置景与渲染端再次加速坍缩，并通过“中国爽点内核+目标市场文化外壳”的转码机制，实现了低成本批量试错与规模供给。
        </p>
      </div>

      {/* Part a: 能力详细结论 bullet list */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
        <BulletListView
          bullets={moduleOneBullets}
          moduleTitle="模块① 工业化供给能力"
        />
      </section>

      {/* Part b: 查询来源对应表 */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
        <SourceTable
          sources={moduleOneSources}
          moduleName="模块① 工业化供给能力"
        />
      </section>

      {/* Part c: 对应可视化 */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white font-sans">模块① 对应可视化组件集群 (Interactive Visualizations)</h3>
          </div>

          {/* Sub-tabs for Visualizations */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveVisTab('cost')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeVisTab === 'cost' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              三种生产模式成本/周期对比
            </button>
            <button
              onClick={() => setActiveVisTab('localization')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeVisTab === 'localization' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              本土剧vs译制剧演进 (DataEye原件)
            </button>
            <button
              onClick={() => setActiveVisTab('pipeline')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeVisTab === 'pipeline' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              AI工作流与人机兜底全景
            </button>
            <button
              onClick={() => setActiveVisTab('genres')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeVisTab === 'genres' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              自采千部题材供给分布
            </button>
          </div>
        </div>

        {/* Visualization 1: Cost & Cycle Comparison */}
        {activeVisTab === 'cost' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {productionModeComparison.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl p-5 border transition-all ${
                    idx === 2
                      ? 'bg-gradient-to-b from-indigo-950/70 to-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      模式 {idx + 1}
                    </span>
                    {idx === 2 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        当前颠覆核心
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white mb-4">{item.mode}</h4>

                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                        <span>单部整体制作成本</span>
                      </div>
                      <div className="text-sm font-bold font-mono text-emerald-400">{item.costDisplay}</div>
                    </div>

                    <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <Clock className="w-3.5 h-3.5 text-sky-400" />
                        <span>制作周期全流程</span>
                      </div>
                      <div className="text-sm font-bold font-mono text-sky-400">{item.cycleDisplay}</div>
                    </div>

                    <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <Users className="w-3.5 h-3.5 text-purple-400" />
                        <span>剧组协同与人员规模</span>
                      </div>
                      <div className="text-xs font-mono text-slate-300">{item.teamSize}</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                      <span className="text-slate-400">单分钟制作成本：</span>
                      <span className="font-mono font-bold text-amber-300 ml-1">{item.perMinuteCost}</span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-normal pt-1">
                      {item.culturalFit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Bar Comparison Chart */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h5 className="text-sm font-bold text-slate-200 mb-4">成本断崖与周期坍缩量化对比（标准化基准）</h5>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">北美真人实拍 (好莱坞基准)</span>
                    <span className="text-slate-400 font-mono">100% 成本 ($180,000) / 120天</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">来华拍摄模式 (国内工业底座协同)</span>
                    <span className="text-emerald-400 font-mono">降本 30% ($125,000) / 15天</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">AI短剧模式 (可灵/Seedance+ComfyUI)</span>
                    <span className="text-indigo-400 font-mono">断崖降至 8.3% ($15,000) / 3天</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '8.3%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visualization 2: Localization vs Dubbed Evolution */}
        {activeVisTab === 'localization' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
            <div>
              <h4 className="text-base font-bold text-slate-100 font-sans">
                DataEye原报告第28页实录：海外本土剧与译制剧市场供给结构演进 (2025H1 vs 2026H1)
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                数据原件证实：本土剧份额从27%强势攀升至46%（突破10万部）；译制剧由73%回落至54%。“单纯翻译中文剧”被证明无法破圈，“换皮不换核”成为出海胜负手。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* 2025H1 Ring */}
              <div className="flex flex-col items-center bg-slate-950/70 p-6 rounded-xl border border-slate-800">
                <div className="text-sm font-bold text-slate-300 mb-4">2025年上半年（出海早期摸索阶段）</div>
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#334155" strokeWidth="16" />
                    {/* Dubbed 73% (orange) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#f97316"
                      strokeWidth="16"
                      strokeDasharray={`${73 * 2.387} ${100 * 2.387}`}
                      strokeDashoffset="0"
                    />
                    {/* Local 27% (blue) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#3b82f6"
                      strokeWidth="16"
                      strokeDasharray={`${27 * 2.387} ${100 * 2.387}`}
                      strokeDashoffset={`-${73 * 2.387}`}
                    />
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-xs text-slate-400">译制剧主导</div>
                    <div className="text-lg font-bold text-orange-400 font-mono">73%</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs font-sans">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-slate-300">本土剧: 27%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-slate-300">译制剧: 73%</span>
                  </div>
                </div>
              </div>

              {/* 2026H1 Ring */}
              <div className="flex flex-col items-center bg-slate-950/70 p-6 rounded-xl border border-blue-900/40 shadow-lg shadow-blue-950/30">
                <div className="text-sm font-bold text-blue-300 mb-4">2026年上半年（AI赋能本土化爆发）</div>
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" fill="transparent" stroke="#334155" strokeWidth="16" />
                    {/* Dubbed 54% (orange) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#f97316"
                      strokeWidth="16"
                      strokeDasharray={`${54 * 2.387} ${100 * 2.387}`}
                      strokeDashoffset="0"
                    />
                    {/* Local 46% (blue) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#3b82f6"
                      strokeWidth="16"
                      strokeDasharray={`${46 * 2.387} ${100 * 2.387}`}
                      strokeDashoffset={`-${54 * 2.387}`}
                    />
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-xs text-slate-400">本土剧剧增</div>
                    <div className="text-lg font-bold text-blue-400 font-mono">46%</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs font-sans">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-slate-300 font-semibold">本土剧: 46% (超10万部)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-slate-300">译制剧: 54% (超12万部)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total 20 Top Hits Proof */}
            <div className="p-4 rounded-lg bg-indigo-950/30 border border-indigo-900/50 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed font-sans">
                <span className="font-bold text-indigo-300">DataEye第30页热值总榜TOP20佐证：</span>
                在2026年上半年全平台热值总榜前20名中，本土剧多达19部，译制剧仅有1部（《我凭一把屠刀问鼎江湖》译制版位列第19）。这表明：真正能在海外吸金与引爆流量的，都是贴合当地狼人、黑帮、契约婚恋审美的本土化换皮剧。
              </div>
            </div>
          </div>
        )}

        {/* Visualization 3: Human-in-the-Loop Pipeline */}
        {activeVisTab === 'pipeline' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
            <div>
              <h4 className="text-base font-bold text-slate-100 font-sans">
                AI短剧工业化管线人机分工全景拆解（杭州一线调研纪要）
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                流程证实：“AI生成 + 程序自动化调度 + 资深导演与母语者人工审核”是当前实际工业形态。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-sans">
              {[
                {
                  stage: '1. 题材选题与网文提炼',
                  aiRole: '抓取海外网文榜单关键词、提炼多语种爽点大纲',
                  humanRole: '【人工决策】评估目标国宗教文化红线、决定换皮题材（狼人/黑手党）',
                  isHumanHeavy: true
                },
                {
                  stage: '2. 剧本分镜与Prompt工程',
                  aiRole: '自动化生成分镜脚本描述、批量生成提示词',
                  humanRole: '【人工兜底】分镜还原度初期仅40%-70%，导演逐镜调整景别与视线引导',
                  isHumanHeavy: true
                },
                {
                  stage: '3. 画面渲染与视频生成',
                  aiRole: '可灵/Seedance批量生成图生视频、LoRA保持人物一致性',
                  humanRole: '【程序调度】自动过滤崩坏肢体帧，抽检关键动作连续性',
                  isHumanHeavy: false
                },
                {
                  stage: '4. 本土化配音与音效',
                  aiRole: 'TTS多语种配音（英语、西语、泰语等10+语言）',
                  humanRole: '【母语者人工校准】修正俚语发音、调整情绪冲突的气口和重音',
                  isHumanHeavy: true
                },
                {
                  stage: '5. 剪辑卡点与投放过审',
                  aiRole: '智能卡点剪辑、自动生成前3秒吸睛切片素材',
                  humanRole: '【终审品控】确认平台合规标识（AI生成标）、审核第一集付费卡点',
                  isHumanHeavy: true
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-400 font-bold">
                        环节 0{idx + 1}
                      </span>
                      {step.isHumanHeavy ? (
                        <span className="text-[10px] text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-900/50">
                          必须人兜底
                        </span>
                      ) : (
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900/50">
                          AI高效主导
                        </span>
                      )}
                    </div>
                    <h5 className="text-sm font-bold text-white mb-2">{step.stage}</h5>
                    <div className="space-y-2 text-xs">
                      <div className="text-slate-400">
                        <span className="text-cyan-400 font-semibold">AI交付：</span>
                        {step.aiRole}
                      </div>
                      <div className="text-slate-300">
                        <span className="text-amber-400 font-semibold">人机兜底：</span>
                        {step.humanRole}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Visualization 4: Genres Sample Distribution (Teammate's Real Crawled Data) */}
        {activeVisTab === 'genres' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h4 className="text-base font-bold text-slate-100 font-sans">
                  同伴爬取一手实证原图：视频题材分布与中华文化占比（总样本 973 部）
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  100% 真实统计图核验（杜绝拟合与编造）：包含「视频总数量」与「包含中华文化视频数量」双层对照。
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 shrink-0">
                真实抓取 N = 973
              </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center bg-slate-950 p-4 rounded-xl border border-slate-800">
              {/* Real Chart Image */}
              <div className="flex-1 w-full flex flex-col items-center">
                <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-white/5 p-2 shadow-inner w-full flex justify-center">
                  <img
                    src="/assets/aistudio/image_10378299.png"
                    alt="视频题材分布与中华文化占比真实柱状图"
                    className="max-h-[340px] w-auto object-contain rounded"
                  />
                </div>
                <div className="text-[11px] text-slate-500 font-mono mt-2 text-center">
                  ▲ 图4：同伴实际抓取绘制的《视频题材分布》柱状原图（蓝色：视频总数，橙色：包含中华文化数）
                </div>
              </div>

              {/* Exact Data Breakdown List */}
              <div className="w-full lg:w-96 space-y-2.5 font-sans text-xs">
                {[
                  { name: '情感与家庭', total: 287, culture: 102, pct: '29.5%', cultPct: '35.5%' },
                  { name: '穿越、修仙与神话', total: 226, culture: 146, pct: '23.2%', cultPct: '64.6%' },
                  { name: '都市与身份逆袭', total: 149, culture: 83, pct: '15.3%', cultPct: '55.7%' },
                  { name: '其他与特殊题材', total: 140, culture: 3, pct: '14.4%', cultPct: '2.1%' },
                  { name: '动作、科幻与惊悚', total: 119, culture: 10, pct: '12.2%', cultPct: '8.4%' },
                  { name: '历史与传统文化', total: 52, culture: 50, pct: '5.3%', cultPct: '96.2%' },
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-200">{item.name}</span>
                      <span className="font-mono text-indigo-400 font-bold">{item.total} 部 ({item.pct})</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                      <span>包含中华文化元素：</span>
                      <span className="text-amber-400 font-semibold">{item.culture} 部 ({item.cultPct})</span>
                    </div>
                  </div>
                ))}

                <div className="p-3 bg-indigo-950/40 rounded-lg border border-indigo-900/50 text-[11px] text-slate-300 leading-relaxed">
                  <strong className="text-indigo-300">实证洞察：</strong>
                  历史文化仅占 52 部（5.3%），而情感家庭（287部）与修仙神话（226部）合计过半。这证明出海供给是以“高密度情绪爽点”为主体，而非盲目输出传统正剧。
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
