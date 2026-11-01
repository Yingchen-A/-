import React, { useState } from 'react';
import { Eye, Heart, Info, CheckCircle2, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';
import { realViewsTierDistribution, realPlatformMilestoneData, totalViewsSamples } from '../data/researchData';

export const InteractiveScatterPlot: React.FC = () => {
  const [activeView, setActiveView] = useState<'scatter' | 'tiers' | 'platforms'>('scatter');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-2xl space-y-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-bold text-slate-100 font-sans">
              团队一手实采数据实证：播放量（对数轴） vs 点赞率双平台散点与播放分布
            </h4>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono font-semibold">
              同伴爬取一手原图核验 (杜绝算法拟合)
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            总样本量 <span className="text-white font-mono font-bold">661 条</span>（YouTube 548条、TikTok 111条、其他海外2条）。
            澄清：<span className="text-amber-400 font-bold font-mono">409</span> 是集中在「10万—100万」这一区间的精确条数（占大盘 61.9%），千万级仅 4 条！
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
          <button
            onClick={() => setActiveView('scatter')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeView === 'scatter' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            一手散点原图 (YouTube vs TikTok)
          </button>
          <button
            onClick={() => setActiveView('tiers')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeView === 'tiers' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            播放量分档分布 (661条)
          </button>
          <button
            onClick={() => setActiveView('platforms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeView === 'platforms' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            双平台破百万率对比
          </button>
        </div>
      </div>

      {/* Tab 1: Real Scatter Plot Image & In-Depth Scientific Analysis */}
      {activeView === 'scatter' && (
        <div className="space-y-4">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col lg:flex-row gap-6 items-center">
            {/* Real Original Image */}
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-white/5 p-2 shadow-inner w-full flex justify-center">
                <img
                  src="/assets/aistudio/image_951c89cc.png"
                  alt="播放量与点赞率真实散点图"
                  className="max-h-[380px] w-auto object-contain rounded"
                />
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-2 text-center">
                ▲ 图1：同伴实际抓取绘制的《播放量与点赞率》散点原图（蓝色圆点：YouTube，橙色三角：TikTok）
              </div>
            </div>

            {/* In-depth Analytical Cards directly interpreting the Real Scatter Plot */}
            <div className="w-full lg:w-80 space-y-3 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/50 space-y-1.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <span>YouTube 样本特征（548条）</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  点阵密集团聚在 <strong className="text-white">10万—100万</strong> 播放量区间，点赞率高度集中收敛在 <strong className="text-amber-400">0.5%—2.0%</strong> 窄幅带。
                  说明中长尾短剧被推荐系统推入观看流后，用户看完即划走，深度互动比例极低。
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/50 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <span className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-amber-400 inline-block" />
                  <span>TikTok 样本特征（111条）</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  散点从 100 到 100万+ 均有分布，在 1万—10万 阶段有少量样本因猎奇冲突冲上 6%—10% 点赞率；但一旦播放量迈过百万，点赞率同样不可避免地迅速向 1%—2% 回落。
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-900/50 space-y-1">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>信息素养核心洞察</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  双平台散点分布实证彻底击碎了“高播放等于高认同”的假想：算法能够机械筛选并分发即时情绪多巴胺，但并没有同步构建起对作品与文化的深度心理认同。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Views Tier Distribution (Exact 661 Samples) */}
      {activeView === 'tiers' && (
        <div className="space-y-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center">
            {/* Real Original Image */}
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-white/5 p-2 shadow-inner w-full flex justify-center">
                <img
                  src="/assets/aistudio/image_5d24d38a.png"
                  alt="播放量分布原图"
                  className="max-h-[340px] w-auto object-contain rounded"
                />
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-2 text-center">
                ▲ 图2：同伴实际抓取绘制的《播放量分布》柱状图原图（总样本 661 条）
              </div>
            </div>

            {/* Exact Breakdown Table */}
            <div className="w-full md:w-96 space-y-2 font-sans text-xs">
              <div className="text-slate-200 font-bold mb-2">白纸黑字真实分档数据明细：</div>
              {realViewsTierDistribution.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-lg border flex items-center justify-between ${
                    item.tier === '10万—100万'
                      ? 'bg-indigo-950/60 border-indigo-500/80 shadow-md'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span className={`font-semibold ${item.tier === '10万—100万' ? 'text-amber-300 font-bold' : 'text-slate-300'}`}>
                      {item.tier}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-white font-bold">{item.count} 条</span>
                    <span className="text-slate-400 text-[10px]">({item.percentage})</span>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-slate-800 flex justify-between text-slate-400 font-mono text-[11px]">
                <span>全量样本总计 (Sum)：</span>
                <span className="text-emerald-400 font-bold">661 条</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Dual-Platform Milestone (548 vs 111) */}
      {activeView === 'platforms' && (
        <div className="space-y-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center">
            {/* Real Original Image */}
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-white/5 p-2 shadow-inner w-full flex justify-center">
                <img
                  src="/assets/aistudio/image_4cc22c4e.png"
                  alt="平台样本与百万播放视频原图"
                  className="max-h-[340px] w-auto object-contain rounded"
                />
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-2 text-center">
                ▲ 图3：同伴实际抓取绘制的《平台样本与百万播放视频》原图
              </div>
            </div>

            {/* Explanation & Insight */}
            <div className="w-full md:w-96 space-y-3 font-sans text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h5 className="font-bold text-white text-sm">跨平台分发淘汰率实证：</h5>
                <div className="space-y-1.5">
                  <div className="flex justify-between p-2 rounded bg-slate-950">
                    <span className="text-slate-300 font-medium">YouTube 破百万率：</span>
                    <span className="font-mono font-bold text-emerald-400">113 / 548 (20.62%)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-950">
                    <span className="text-slate-300 font-medium">TikTok 破百万率：</span>
                    <span className="font-mono font-bold text-rose-400">7 / 111 (6.31%)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-950">
                    <span className="text-slate-300 font-medium">其他海外平台：</span>
                    <span className="font-mono text-slate-400">0 / 2 (0.00%)</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-900/50 text-slate-300 leading-relaxed text-[11px]">
                <strong className="text-indigo-300">算法冷启动机制印证：</strong>
                TikTok 的前 3 秒跳出率淘汰极其严苛，破百万率仅 6.3%；而 YouTube Shorts 依靠订阅与兴趣混合流，给了中腰部更平缓的爬坡窗口，破百万率达 20.6%。这与行业观察完全吻合！
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
