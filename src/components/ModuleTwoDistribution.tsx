import React, { useState } from 'react';
import { BulletListView } from './BulletListView';
import { SourceTable } from './SourceTable';
import { InteractiveScatterPlot } from './InteractiveScatterPlot';
import {
  moduleTwoBullets,
  moduleTwoSources,
  commentaryAudienceAge,
  commentaryCountryFocus
} from '../data/researchData';
import { Share2, Users, Eye, Filter, Sparkles, Globe2, BarChart2, CheckCircle2 } from 'lucide-react';

export const ModuleTwoDistribution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scatter' | 'audience' | 'funnel' | 'matrix'>('scatter');

  return (
    <div className="space-y-8">
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-800/40 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold text-lg">
              ②
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-purple-400">RESEARCH MODULE 02</div>
              <h2 className="text-xl md:text-2xl font-black text-white font-sans">
                模块② 平台分发筛选（算法可见性守门人 + 受众情绪需求对位）
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/50 text-purple-200 border border-purple-700/50">
            涵盖三部分结构：a.详细结论 / b.查询来源表 / c.对应可视化
          </span>
        </div>
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          核心实证命题：算法并非中立的内容评价者，而是根据受众在特定情绪解压驱动下产生的交互信号（尤其完播率与观看时长）进行机械放大的“可见性过滤器”。散点实证揭示高曝光下点赞率收敛，受众在消费多巴胺快感，并未同步沉淀文化认同。
        </p>
      </div>

      {/* Part a: 能力详细结论 bullet list */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
        <BulletListView
          bullets={moduleTwoBullets}
          moduleTitle="模块② 平台分发筛选"
        />
      </section>

      {/* Part b: 查询来源对应表 */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
        <SourceTable
          sources={moduleTwoSources}
          moduleName="模块② 平台分发筛选"
        />
      </section>

      {/* Part c: 对应可视化 */}
      <section className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white font-sans">模块② 对应可视化组件集群 (Distribution Visualizations)</h3>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('scatter')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'scatter' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              409条播放-点赞收敛散点图
            </button>
            <button
              onClick={() => setActiveTab('audience')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'audience' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              受众画像与国别关注度
            </button>
            <button
              onClick={() => setActiveTab('funnel')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'funnel' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              算法漏斗与冷启动信号
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'matrix' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              TikTok热播同剧多号矩阵
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Scatter Plot */}
        {activeTab === 'scatter' && (
          <div className="space-y-4">
            <InteractiveScatterPlot />
          </div>
        )}

        {/* Tab 2: Audience & Demographics */}
        {activeTab === 'audience' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Audience Age Donut */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-100">
                    短剧解说受众年龄构成 (DataEye第21页原件)
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                    TikTok for Business
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  数据证实：解说受众以成熟家庭群体为主，≥35岁人群断层占据61.6%，18-24岁仅占13.5%。
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="38" fill="transparent" stroke="#1e293b" strokeWidth="16" />
                      {/* >=35: 61.6% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#1e40af"
                        strokeWidth="16"
                        strokeDasharray={`${61.6 * 2.387} ${100 * 2.387}`}
                        strokeDashoffset="0"
                      />
                      {/* 25-34: 24.8% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#3b82f6"
                        strokeWidth="16"
                        strokeDasharray={`${24.8 * 2.387} ${100 * 2.387}`}
                        strokeDashoffset={`-${61.6 * 2.387}`}
                      />
                      {/* 18-24: 13.5% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#93c5fd"
                        strokeWidth="16"
                        strokeDasharray={`${13.6 * 2.387} ${100 * 2.387}`}
                        strokeDashoffset={`-${(61.6 + 24.8) * 2.387}`}
                      />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-[10px] text-slate-400">≥35岁占比</div>
                      <div className="text-base font-bold text-blue-400 font-mono">61.6%</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    {commentaryAudienceAge.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                        <span className="text-slate-300">{item.name}:</span>
                        <span className="font-mono font-bold text-white">{item.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Country Focus Bar Chart */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-100">
                    TikTok短剧解说国别关注度（万人关注热度）
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    DataEye Page 21
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  巴西以600.22万关注度断崖式领跑，大量价格敏感型新兴市场用户用“免费解说”替代“App充值”。
                </p>

                <div className="space-y-3 font-sans">
                  {commentaryCountryFocus.map((country, idx) => {
                    const maxVal = 650;
                    const pct = (country.value / maxVal) * 100;
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-200 font-medium">{country.name}</span>
                          <span className="font-mono font-bold text-emerald-400">
                            {country.value} 万人热度
                          </span>
                        </div>
                        <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${pct}%`, backgroundColor: country.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Persona Comparison Table (DataEye Page 18) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h4 className="text-sm font-bold text-slate-100 mb-3 font-sans">
                DataEye第18页实录：真人短剧 vs AI短剧用户画像及爆款逻辑深度对比
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3">对比维度</th>
                      <th className="py-2.5 px-3 text-sky-400">海外真人短剧</th>
                      <th className="py-2.5 px-3 text-purple-400">海外AI短剧</th>
                      <th className="py-2.5 px-3">信息素养实证研判</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-200">受众特征</td>
                      <td className="py-3 px-3">男女比例均衡，覆盖25-55岁全年龄层</td>
                      <td className="py-3 px-3 text-purple-300">女性用户占比更高，以18-35岁年轻群体为主</td>
                      <td className="py-3 px-3 text-slate-400">打破早前“单一35+女性”的泛化认知，AI剧明显更年轻化</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-200">核心特点</td>
                      <td className="py-3 px-3">受演员号召力影响大，现代审美真实感强，代入度高</td>
                      <td className="py-3 px-3 text-purple-300">高颜值建模、奇幻视觉冲击、本土化转译门槛极低</td>
                      <td className="py-3 px-3 text-slate-400">AI擅长超现实异世界与猎奇设定，真人剧擅长现实情感纠葛</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-200">爆款赛道</td>
                      <td className="py-3 px-3">甜宠、爱恨纠葛、“千金逆袭”、“身份桎梏”</td>
                      <td className="py-3 px-3 text-purple-300">西方奇幻、狼人吸血鬼、海马人异形、修仙降维打击</td>
                      <td className="py-3 px-3 text-slate-400">二者赛道分化，AI并非单纯替代真人剧，而是开辟了超现实增量</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Funnel & Cold Start */}
        {activeTab === 'funnel' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
            <div>
              <h4 className="text-base font-bold text-slate-100 font-sans">
                TikTok推荐机制与冷启动层级漏斗（官方说明 vs 行业实测）
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                信息素养提示：TikTok Newsroom官方强调“完播率、观看时长、转发”权重大于“同城/同语言”；冷启动300-1000人是创作者社群的行业实测经验。
              </p>
            </div>

            <div className="space-y-3 font-sans">
              {[
                {
                  tier: '层级 01: 初始冷启动池 (Seed Pool)',
                  traffic: '300 ~ 1,000 人 (行业经验测算)',
                  signals: '前3秒滑走率 / 完播率 (目标≥40%) / 是否静音',
                  verdict: 'AI短剧凭高饱和视觉与强烈开局冲突，极易快速通过初始池'
                },
                {
                  tier: '层级 02: 兴趣人群扩散池 (Expansion Pool)',
                  traffic: '5,000 ~ 20,000 播放',
                  signals: '完播率稳定度 / 收藏率 / 初步分享',
                  verdict: '算法根据第一集钩子筛选中长尾受众'
                },
                {
                  tier: '层级 03: 细分赛道泛化池 (Broad Genre Pool)',
                  traffic: '100,000 ~ 500,000 播放 (样本大部在此)',
                  signals: '深度互动：评论讨论度 / 剧场号关注率 / 跳转App下载意向',
                  verdict: '进入此阶段作品最多（自采样本409条中大半停在此处）'
                },
                {
                  tier: '层级 04: 公域流量爆发池 (Viral Surge Pool)',
                  traffic: '1,000,000 ~ 2,000万+ 播放 (仅极少数尾部)',
                  signals: '破圈完播 / 跨国家跨标签裂变 / UGC二次解说二创',
                  verdict: '点赞率急剧收敛至1.2%~2.5%，海量泛用户只看不赞，文化认同脱节'
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-800/60">
                        {step.tier}
                      </span>
                      <span className="text-xs text-emerald-400 font-mono font-semibold">
                        流量量级: {step.traffic}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300">
                      <span className="text-slate-400 font-semibold">考核信号：</span>
                      {step.signals}
                    </div>
                  </div>
                  <div className="text-xs text-amber-300/90 bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-900/40 md:max-w-xs">
                    {step.verdict}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: TikTok June 2026 Hits Matrix */}
        {activeTab === 'matrix' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-100 font-sans">
                  DataEye第19页实录：2026年6月TikTok热播剧TOP20（同剧多剧场号矩阵分发）
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  榜单总播放增量达26.85亿次，多剧场号分发成为出海标配，猎奇AI剧《孕夫的華麗復仇》霸榜前二。
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800 font-mono">
                破亿短剧 15部
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">排名</th>
                    <th className="py-2.5 px-3">剧名</th>
                    <th className="py-2.5 px-3">所属剧场号 / 分发矩阵</th>
                    <th className="py-2.5 px-3 text-right">单月播放增量（万次）</th>
                    <th className="py-2.5 px-3">分发特征</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans text-slate-300">
                  <tr className="bg-purple-950/30">
                    <td className="py-2.5 px-3 font-mono font-bold text-amber-400">01</td>
                    <td className="py-2.5 px-3 font-semibold text-white">孕夫的華麗復仇 (AI猎奇海马人)</td>
                    <td className="py-2.5 px-3 font-mono text-purple-300">The Lore Master</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-400">43,095 万 (4.31亿)</td>
                    <td className="py-2.5 px-3 text-xs text-purple-300">主剧场号爆发</td>
                  </tr>
                  <tr className="bg-purple-950/20">
                    <td className="py-2.5 px-3 font-mono font-bold text-amber-400">02</td>
                    <td className="py-2.5 px-3 font-semibold text-white">孕夫的華麗復仇 (同一剧集矩阵分发)</td>
                    <td className="py-2.5 px-3 font-mono text-purple-300">shape of desire x stories</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-400">20,808 万 (2.08亿)</td>
                    <td className="py-2.5 px-3 text-xs text-amber-300">矩阵剧场号多次上榜</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-400">03</td>
                    <td className="py-2.5 px-3">保姆的女兒霸佔我的豪宅</td>
                    <td className="py-2.5 px-3 font-mono text-slate-400">Shape of Desire</td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-200">17,238 万</td>
                    <td className="py-2.5 px-3 text-slate-400">真人家仇逆袭</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-400">04</td>
                    <td className="py-2.5 px-3">總裁的秘密萌寶</td>
                    <td className="py-2.5 px-3 font-mono text-slate-400">ShortDramaTime</td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-200">14,121 万</td>
                    <td className="py-2.5 px-3 text-slate-400">国内女频模板</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-400">05</td>
                    <td className="py-2.5 px-3">他出軌後我奪走一切</td>
                    <td className="py-2.5 px-3 font-mono text-slate-400">Shape of Desire</td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-200">13,952 万</td>
                    <td className="py-2.5 px-3 text-slate-400">复仇爽剧</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
