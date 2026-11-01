import React, { useState } from 'react';
import { factCheckDiffs } from '../data/researchData';
import { GitCompare, Workflow, ShieldCheck, AlertTriangle, BookOpen, Brain, CheckCircle2, ArrowRight } from 'lucide-react';

export const MethodologyAgentWorkflow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deduction' | 'workflow' | 'factcheck'>('factcheck');
  const [selectedFactCheckIdx, setSelectedFactCheckIdx] = useState<number>(0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-indigo-400" />
            <h3 className="text-xl font-bold text-white font-sans">
              信息素养方法论与人机协同闭环（自上而下研究逻辑）
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            体现“为什么用这个工具、怎么用这个工具、用的结果如何批判性处理后服务于整体”
          </p>
        </div>

        <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('factcheck')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'factcheck' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            人机协同纠偏对照表 ({factCheckDiffs.length}项)
          </button>
          <button
            onClick={() => setActiveTab('deduction')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'deduction' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            六模块到三模块推导逻辑
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'workflow' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            带Validation的Agent架构
          </button>
        </div>
      </div>

      {/* Tab 1: Fact Check Diff Table (Downstream critical thinking) */}
      {activeTab === 'factcheck' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed font-sans">
              <span className="font-bold text-amber-300">下游人工批判性思维实战：</span>
              AI初稿与自媒体报道常因分母误读、口径错位或采信二手标题而产生严重事实偏差。本研究通过逐页核对《DataEye 2026上半年海外报告》原件与上市公司年报，强制纠偏了以下关键事实错误：
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* List on the left */}
            <div className="space-y-2">
              {factCheckDiffs.map((diff, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFactCheckIdx(idx)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                    selectedFactCheckIdx === idx
                      ? 'bg-indigo-950/70 border-indigo-500 text-white font-semibold shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-indigo-400">核验纠偏 0{idx + 1}</span>
                    <span className="text-[10px] text-amber-400 bg-amber-950/60 px-1.5 rounded">纠偏完成</span>
                  </div>
                  <div>{diff.subject}</div>
                </button>
              ))}
            </div>

            {/* Detailed Diff Inspector on the right */}
            {factCheckDiffs[selectedFactCheckIdx] && (
              <div className="md:col-span-2 bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 text-xs font-sans">
                <div className="border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-500 font-mono">核验主题：</span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    {factCheckDiffs[selectedFactCheckIdx].subject}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Erroneous Rumor */}
                  <div className="p-3.5 rounded-lg bg-rose-950/30 border border-rose-900/50 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>AI初稿与二手谣传</span>
                    </div>
                    <div className="text-sm font-semibold text-rose-200">
                      {factCheckDiffs[selectedFactCheckIdx].erroneousRumor}
                    </div>
                    <div className="text-[11px] text-slate-400 pt-1">
                      来源通道：{factCheckDiffs[selectedFactCheckIdx].rumorSource}
                    </div>
                  </div>

                  {/* Verified Fact */}
                  <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-900/50 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>一手核查证实事实</span>
                    </div>
                    <div className="text-sm font-semibold text-emerald-200">
                      {factCheckDiffs[selectedFactCheckIdx].verifiedData}
                    </div>
                    <div className="text-[11px] text-slate-400 pt-1">
                      权威出处：{factCheckDiffs[selectedFactCheckIdx].verifiedSource}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div>
                    <span className="text-amber-400 font-semibold">【分母错位与致误机理剖析】：</span>
                    <span className="text-slate-300 ml-1 leading-relaxed">
                      {factCheckDiffs[selectedFactCheckIdx].correctionReason}
                    </span>
                  </div>

                  <div>
                    <span className="text-indigo-400 font-semibold">【对最终研究结论的实质影响】：</span>
                    <span className="text-slate-300 ml-1 leading-relaxed">
                      {factCheckDiffs[selectedFactCheckIdx].impactOnConclusion}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: 6 Modules to 3 Modules Deduction */}
      {activeTab === 'deduction' && (
        <div className="space-y-5 font-sans">
          <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-indigo-300">为什么把LeapSpace文献推导的六模块压缩为三模块？</span>
            <p className="mt-1 text-slate-400">
              六模块（供给、分发、接受、转译、变现、治理）是文献层面的“元综合”，回答的是学术界认为哪些机制在起作用；但无法直接指导实证查证。必须按“可检验性”重组：将接受并入分发、转译并入供给、治理降为外部边界注释，最终沉淀出“供给—分发—变现”这条首尾咬合的实证因果链。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-blue-400">重构模块 01</div>
              <h5 className="text-sm font-bold text-white">① 工业化供给能力</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-slate-300 font-semibold">吸纳范围：</span>原【供给层】+ 原【转译层】。
                <br />
                <span className="text-slate-300 font-semibold">实证抓手：</span>国内真人成熟工业体系（成本降30%）+ AI极端降本（单分200-1000元）+ 本土化“换皮不换核”。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-purple-400">重构模块 02</div>
              <h5 className="text-sm font-bold text-white">② 平台分发筛选</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-slate-300 font-semibold">吸纳范围：</span>原【分发层】+ 原【接受层】。
                <br />
                <span className="text-slate-300 font-semibold">实证抓手：</span>受众不是被动接收端，其情绪解压需求产生的完播/互动信号是算法筛选原料；散点图证实高曝光下点赞率收敛。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-400">重构模块 03</div>
              <h5 className="text-sm font-bold text-white">③ 平台价值捕获</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-slate-300 font-semibold">吸纳范围：</span>原【变现层】+【治理约束】。
                <br />
                <span className="text-slate-300 font-semibold">实证抓手：</span>平台在分发与变现两端同时占位，买量吞噬64%营收，万播分账回落，爆款属于极少数长尾幸存者。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Agent Architecture with Validation Node */}
      {activeTab === 'workflow' && (
        <div className="space-y-4 font-sans text-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-slate-950 border border-indigo-900/40">
              <div className="text-indigo-400 font-mono font-bold mb-1">节点 1: 上游</div>
              <h5 className="text-sm font-bold text-white mb-2">文献专研智能体</h5>
              <p className="text-slate-400 leading-relaxed">
                调用直连学术库的LeapSpace，输入官方推荐提示词，输出带DOI文献与因果骨架，杜绝通用大模型无中生有。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-blue-900/40">
              <div className="text-blue-400 font-mono font-bold mb-1">节点 2: 中游</div>
              <h5 className="text-sm font-bold text-white mb-2">数据抓取与抽表智能体</h5>
              <p className="text-slate-400 leading-relaxed">
                向DataEye海外原报告PDF、上市公司财报抓取硬核数字，直接解析表格原件，拒绝采信带主观色彩的二次网络小作文。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-amber-900/50 bg-amber-950/10">
              <div className="text-amber-400 font-mono font-bold mb-1">节点 3: 核心枢纽</div>
              <h5 className="text-sm font-bold text-amber-300 mb-2">Validation 校验审查节点</h5>
              <p className="text-slate-300 leading-relaxed">
                设定分母核查规则（如TOP5与TOP20边界、单季度与全年财报区分），对无法溯源到一手报告的数据强制阻断驳回。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/40">
              <div className="text-emerald-400 font-mono font-bold mb-1">节点 4: 下游</div>
              <h5 className="text-sm font-bold text-white mb-2">人类专家批判性纠偏</h5>
              <p className="text-slate-400 leading-relaxed">
                人负责决定证据链权重与逻辑收束，驳回AI“点击等于商业成功”等片面初稿，形成经得起推敲的实证结论。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
