import React, { useState } from 'react';
import { BulletListView } from './BulletListView';
import { SourceTable } from './SourceTable';
import {
  moduleThreeBullets,
  moduleThreeSources,
  monthlyRevenue2026H1,
  topAppRevenue2026H1,
  revenueConcentrationPie,
  chinaVsOverseasRevenue,
  countryRevenueShare,
  adCreativeTrend2026H1
} from '../data/researchData';
import { DollarSign, PieChart, BarChart3, TrendingUp, AlertOctagon, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';

export const ModuleThreeValueCapture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'concentration' | 'topApps' | 'financials' | 'valueFlow' | 'ads'>('concentration');

  return (
    <div className="space-y-8">
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border border-emerald-800/40 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-lg">
              ③
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">RESEARCH MODULE 03</div>
              <h2 className="text-xl md:text-2xl font-black text-white font-sans">
                模块③ 平台价值捕获（变现结构决定爆火沉淀在哪里）
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/50 text-emerald-200 border border-emerald-700/50">
            涵盖三部分结构：a.详细结论 / b.查询来源表 / c.对应可视化
          </span>
        </div>
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          核心实证命题：爆火的发生地与利润的沉淀地严重分离。平台同时在“可见性分发”与“变现分账”两端占位。自媒体口中的“前五占八成”张冠李戴，真实数据是前五占56.3%、前二十占79.2%；巨额买量与推广吞噬了收入（掌阅销售费用率64.1%），中小制作方万播分账仅5-10元，爆款属于极少数长尾幸存者。
        </p>
      </div>

      {/* Part a: 能力详细结论 bullet list */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
        <BulletListView
          bullets={moduleThreeBullets}
          moduleTitle="模块③ 平台价值捕获"
        />
      </section>

      {/* Part b: 查询来源对应表 */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
        <SourceTable
          sources={moduleThreeSources}
          moduleName="模块③ 平台价值捕获"
        />
      </section>

      {/* Part c: 对应可视化 */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white font-sans">模块③ 对应可视化组件集群 (Financial & Market Visualizations)</h3>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('concentration')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'concentration' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              市场集中度纠偏 (56.3% vs 79.2%)
            </button>
            <button
              onClick={() => setActiveTab('topApps')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'topApps' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              TOP20 APP 真实内购收入排行
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'financials' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              上市公司一手财报费用率审计
            </button>
            <button
              onClick={() => setActiveTab('valueFlow')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'valueFlow' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              商业价值分配流向 (Sankey流)
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'ads' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              买量素材激增 (+324%暴涨)
            </button>
          </div>
        </div>

        {/* Tab 1: Concentration & China Share */}
        {activeTab === 'concentration' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Correction Pie: 56.3% vs 79.2% */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-100">
                    2026H1 海外内购大盘集中度真实构成（纠偏二次转述）
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    DataEye Page 6 & 10
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  大盘总计 12.7 亿美元：TOP 1-5 合计 7.15 亿美元（占 56.3%），TOP 1-20 合计 10.06 亿美元（占 79.2%）。
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="38" fill="transparent" stroke="#1e293b" strokeWidth="16" />
                      {/* TOP 1-5: 56.3% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#3b82f6"
                        strokeWidth="16"
                        strokeDasharray={`${56.3 * 2.387} ${100 * 2.387}`}
                        strokeDashoffset="0"
                      />
                      {/* TOP 6-20: 22.9% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#6366f1"
                        strokeWidth="16"
                        strokeDasharray={`${22.9 * 2.387} ${100 * 2.387}`}
                        strokeDashoffset={`-${56.3 * 2.387}`}
                      />
                      {/* Rest: 20.8% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#64748b"
                        strokeWidth="16"
                        strokeDasharray={`${20.8 * 2.387} ${100 * 2.387}`}
                        strokeDashoffset={`-${(56.3 + 22.9) * 2.387}`}
                      />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-[10px] text-slate-400">前五大份额</div>
                      <div className="text-lg font-bold text-blue-400 font-mono">56.3%</div>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs font-sans">
                    {revenueConcentrationPie.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                        <span className="text-slate-300 font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* China 93% Dominance */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-100">
                    出海内购金额与下载量归属（中国厂商 vs 海外本土）
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                    DataEye Page 12 & 13
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  中国厂商以 11.82 亿美元占内购总额的 93%，以 12.21 亿次占总下载量的 85%，处于绝对主导统治地位。
                </p>

                <div className="space-y-5 py-2 font-sans">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-200 font-bold">2026H1 APP内购金额 (总计12.7亿美元)</span>
                      <span className="text-rose-400 font-mono font-bold">中国出海 93.07% ($11.82亿)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-6 rounded-lg overflow-hidden flex border border-slate-800">
                      <div className="bg-rose-500 h-full flex items-center justify-center text-[10px] text-white font-mono font-bold" style={{ width: '93%' }}>
                        中国出海 93%
                      </div>
                      <div className="bg-blue-500 h-full flex items-center justify-center text-[10px] text-white font-mono" style={{ width: '7%' }}>
                        7%
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>中国厂商: $11.82亿美元</span>
                      <span>海外本土厂商: $0.70亿美元 (7%)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-200 font-bold">2026H1 APP下载量 (总计14.41亿次)</span>
                      <span className="text-amber-400 font-mono font-bold">中国出海 84.73% (12.21亿次)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-6 rounded-lg overflow-hidden flex border border-slate-800">
                      <div className="bg-amber-500 h-full flex items-center justify-center text-[10px] text-slate-950 font-mono font-bold" style={{ width: '85%' }}>
                        中国出海 85%
                      </div>
                      <div className="bg-blue-500 h-full flex items-center justify-center text-[10px] text-white font-mono" style={{ width: '15%' }}>
                        15%
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>中国厂商: 12.21亿次</span>
                      <span>海外本土厂商 (印度为主): 2.17亿次 (15%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Top Apps Table & Bar Chart */}
        {activeTab === 'topApps' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-base font-bold text-slate-100 font-sans">
                  DataEye第10页实录：2026H1海外微短剧APP内购收入榜 TOP 12
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  点众DramaBox与中文在线ReelShort稳居前二（均近2亿美元），麦芽NetShort与昆仑万维DramaWave紧随其后。
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-mono">
                TOP 3 占超四成 ($5.12亿)
              </span>
            </div>

            <div className="space-y-2.5 font-sans">
              {topAppRevenue2026H1.map((app, idx) => {
                const maxVal = 20000;
                const pct = (app.value / maxVal) * 100;
                return (
                  <div key={idx} className="bg-slate-950/70 p-3 rounded-lg border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center gap-3 w-full md:w-1/3">
                      <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold ${
                        idx === 0 ? 'bg-amber-500 text-slate-950' : idx === 1 ? 'bg-slate-300 text-slate-950' : idx === 2 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {idx + 1}
                      </span>
                      <div>
                        <span className="font-bold text-slate-100 text-xs">{app.name}</span>
                        {app.note && <span className="ml-2 text-[10px] text-cyan-400 font-mono">({app.note})</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-2/3">
                      <div className="flex-1 bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${idx < 3 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-slate-600'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="text-right shrink-0 w-28">
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          ${(app.value / 100).toFixed(2)}M
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono ml-1.5">
                          ({app.percentage})
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Listed Company Financials Fact-Check */}
        {activeTab === 'financials' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 掌阅科技 Card */}
              <div className="bg-slate-900 border border-indigo-500/40 rounded-xl p-5 relative overflow-hidden shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-400" />
                    <div>
                      <h4 className="text-sm font-bold text-white">掌阅科技 (603533.SH)</h4>
                      <span className="text-[10px] text-slate-400">2025年年度报告全文核查</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    一手财报已核验
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400">2025全年营业收入：</span>
                    <span className="font-mono font-bold text-white">32.43 亿元</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400">2025全年销售费用：</span>
                    <span className="font-mono font-bold text-rose-400">20.79 亿元</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/60">
                    <span className="text-indigo-300 font-bold">全年销售费用率（核算比率）：</span>
                    <span className="font-mono font-black text-amber-400 text-sm">64.11%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                    <span className="text-slate-400">买量推广费用占比：</span>
                    <span className="font-semibold text-emerald-400 ml-1">超 95%</span> (流向海外流量巨头购买点击)
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                    <span className="text-amber-400 font-bold">辟谣纠偏：</span>网络传闻“销售费用率68%”系混淆了单季度激进投流期的数据。年报全年真实为64.11%，依然证明其收入绝大部分返还给了流量渠道。
                  </p>
                </div>
              </div>

              {/* 中文在线 Card */}
              <div className="bg-slate-900 border border-purple-500/40 rounded-xl p-5 relative overflow-hidden shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-400" />
                    <div>
                      <h4 className="text-sm font-bold text-white">中文在线 (300364.SZ)</h4>
                      <span className="text-[10px] text-slate-400">2026年第三季度报告核查</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    一手财报已核验
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400">2026前三季度营业收入：</span>
                    <span className="font-mono font-bold text-white">8.33 亿元</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400">2026前三季度销售费用：</span>
                    <span className="font-mono font-bold text-sky-400">3.84 亿元 (同比-41.84%)</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/60">
                    <span className="text-purple-300 font-bold">前三季度销售费用率（核算比率）：</span>
                    <span className="font-mono font-black text-amber-400 text-sm">46.10%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                    <span className="text-slate-400">营业成本变动：</span>
                    <span className="font-semibold text-emerald-400 ml-1">同比下降 32.91%</span> (部分转AI制作)
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                    <span className="text-amber-400 font-bold">辟谣纠偏：</span>早年报道声称“销售费用率常年65%以上”，最新2026Q3已骤降至46.10%，公司官方说明“海外业务推广费减少，AI短剧应用降低制作成本”。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Value Chain Distribution Flow */}
        {activeTab === 'valueFlow' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
            <div>
              <h4 className="text-base font-bold text-slate-100 font-sans">
                海外微短剧百元流水价值捕获模型（平台双端占位剖析）
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                为什么“爆火”发生在分发链路，而“利润”沉淀在平台与渠道？结构性拆解如下：
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 font-sans">
              <div className="bg-slate-950 p-4 rounded-xl border border-blue-900/40 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-blue-400 font-bold mb-1">STEP 01: 原始输入</div>
                  <h5 className="text-sm font-bold text-white mb-2">海外用户付费/充值</h5>
                  <div className="text-2xl font-black font-mono text-white mb-2">$100.00</div>
                  <p className="text-xs text-slate-400">
                    用户为了解锁悬念、观看剧集，通过应用商店单集付费或购买代币充值。
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-rose-900/40 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-rose-400 font-bold mb-1">STEP 02: 渠道与买量截取</div>
                  <h5 className="text-sm font-bold text-white mb-2">流量渠道/应用内购抽成</h5>
                  <div className="text-2xl font-black font-mono text-rose-400 mb-2">-$65 ~ $70</div>
                  <p className="text-xs text-slate-400">
                    Google/Apple抽成30%，Meta/TikTok/Google投流买量费占营收50%-65%（掌阅销售费率64.1%）。
                  </p>
                </div>
                <div className="mt-3 text-[11px] text-rose-300/80 bg-rose-950/40 p-2 rounded">
                  最大价值捕获者：底层流量巨头
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-amber-900/40 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-amber-400 font-bold mb-1">STEP 03: 平台运营沉淀</div>
                  <h5 className="text-sm font-bold text-white mb-2">出海短剧App平台留存</h5>
                  <div className="text-2xl font-black font-mono text-amber-400 mb-2">$20 ~ $25</div>
                  <p className="text-xs text-slate-400">
                    涵盖服务器、AI算力消耗、版权采购与本地化运营，以规模换取资本市场估值，净利润微薄或亏损。
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-400 font-bold mb-1">STEP 04: 尾部制作方</div>
                  <h5 className="text-sm font-bold text-white mb-2">制作团队分账收益</h5>
                  <div className="text-2xl font-black font-mono text-slate-400 mb-2">$5 ~ $10</div>
                  <p className="text-xs text-slate-400">
                    万播分账从30-100元跌至5-10元。5000万播放盈亏线达标率仅1.3%，超80%-90%中小制作方无法收回成本。
                  </p>
                </div>
                <div className="mt-3 text-[11px] text-amber-400 bg-amber-950/40 p-2 rounded">
                  长尾残酷性：千分之五爆款概率
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Ad Creative Surge (+324%) */}
        {activeTab === 'ads' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
            <div>
              <h4 className="text-base font-bold text-slate-100 font-sans">
                DataEye第23页实录：2026年上半年海外短剧买量投放素材量激增（同比暴涨324%）
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                累计素材投放量达到 1961万组，半年即超越2025全年1395.7万组的总量。昆仑万维DramaWave与DramaReels包揽前二。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3 font-sans">
                {adCreativeTrend2026H1.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-200 font-medium">{item.name}</span>
                      <span className="text-emerald-400 font-mono font-bold">
                        {item.value} 万组素材 {item.note && <span className="text-slate-400 font-normal">({item.note})</span>}
                      </span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${(item.value / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 text-xs font-sans">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <AlertOctagon className="w-4 h-4" />
                  <span>买量战白热化的三大根源驱动</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  1. <strong className="text-white">新玩家持续涌入：</strong>进入二季度，月均新增海外短剧APP超百款，直接推高大盘投放总量；
                </p>
                <p className="text-slate-300 leading-relaxed">
                  2. <strong className="text-white">国内产能外溢加码：</strong>国内短剧监管收紧与内卷，头部厂商将买量预算大幅倾斜至海外；
                </p>
                <p className="text-slate-300 leading-relaxed">
                  3. <strong className="text-white">AI制作拉低素材边际成本：</strong>AI自动生成上千组前3秒测试切片，导致素材投放规模指数级放量。
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
