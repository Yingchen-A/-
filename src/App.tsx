import React, { useState } from 'react';
import { ModuleOneSupply } from './components/ModuleOneSupply';
import { ModuleTwoDistribution } from './components/ModuleTwoDistribution';
import { ModuleThreeValueCapture } from './components/ModuleThreeValueCapture';
import { MethodologyAgentWorkflow } from './components/MethodologyAgentWorkflow';
import { PDFModalViewer } from './components/PDFModalViewer';
import { MarkdownExportModal } from './components/MarkdownExportModal';
import {
  FileText,
  Download,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  BarChart2,
  Share2,
  DollarSign,
  Cpu,
  Layers,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'all' | 'm1' | 'm2' | 'm3' | 'methodology'>('all');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white font-sans">
                  国产AI短剧海外爆火——实证研究与信息素养看板
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800">
                  最新审定版
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-400">
                基于学术三模型推导、DataEye 2026上半年海外短剧原报告与上市公司一手财报交叉核验
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-red-400" />
              <span className="hidden sm:inline">核验报告原件</span>
              <span className="sm:hidden">PDF</span>
            </button>

            <button
              onClick={() => setIsExportModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>导出最新全量报告</span>
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 flex overflow-x-auto gap-2 py-2 text-xs scrollbar-none">
          <button
            onClick={() => setCurrentTab('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
              currentTab === 'all'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            全景看板 (全部模块)
          </button>
          <button
            onClick={() => setCurrentTab('m1')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'm1'
                ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>模块① 工业化供给能力</span>
          </button>
          <button
            onClick={() => setCurrentTab('m2')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'm2'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>模块② 平台分发筛选</span>
          </button>
          <button
            onClick={() => setCurrentTab('m3')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'm3'
                ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>模块③ 平台价值捕获</span>
          </button>
          <button
            onClick={() => setCurrentTab('methodology')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'methodology'
                ? 'bg-amber-600/20 text-amber-300 border border-amber-500/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>方法论与人机协同纠偏</span>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Top Highlight Metric Cards (Stat Bar) */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] text-slate-400">2026H1海外App内购</span>
            <div className="text-lg font-bold font-mono text-emerald-400 mt-1">$12.7 亿</div>
            <span className="text-[10px] text-emerald-400 font-mono">同比增 13% (Page 6)</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] text-slate-400">2026H1海外App下载</span>
            <div className="text-lg font-bold font-mono text-sky-400 mt-1">14.41 亿次</div>
            <span className="text-[10px] text-sky-400 font-mono">同比大增 79% (Page 7)</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] text-slate-400">中国出海厂商内购占</span>
            <div className="text-lg font-bold font-mono text-rose-400 mt-1">93.07%</div>
            <span className="text-[10px] text-rose-400 font-mono">$11.82亿美元 (Page 12)</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] text-slate-400">本土剧在投供给份额</span>
            <div className="text-lg font-bold font-mono text-purple-400 mt-1">27% → 46%</div>
            <span className="text-[10px] text-purple-400 font-mono">换皮不换核 (Page 28)</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] text-slate-400">掌阅2025销售费用率</span>
            <div className="text-lg font-bold font-mono text-amber-400 mt-1">64.11%</div>
            <span className="text-[10px] text-amber-400 font-mono">核验纠偏原传闻68%</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] text-slate-400">TikTok短剧半年分账</span>
            <div className="text-lg font-bold font-mono text-cyan-400 mt-1">$8,200 万</div>
            <span className="text-[10px] text-cyan-400 font-mono">超5.5亿元 (Page 17)</span>
          </div>
        </section>

        {/* Dynamic Tab Views */}
        {currentTab === 'all' && (
          <div className="space-y-12">
            <ModuleOneSupply />
            <ModuleTwoDistribution />
            <ModuleThreeValueCapture />
            <MethodologyAgentWorkflow />
          </div>
        )}

        {currentTab === 'm1' && <ModuleOneSupply />}
        {currentTab === 'm2' && <ModuleTwoDistribution />}
        {currentTab === 'm3' && <ModuleThreeValueCapture />}
        {currentTab === 'methodology' && <MethodologyAgentWorkflow />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-400 font-medium">
              国产AI短剧出海实证研究看板 · 信息素养与实证核验闭环
            </p>
            <p>
              权威数据源：DataEye《2026上半年海外短剧AI剧数据报告》原件、掌阅科技与中文在线法定财报、TikTok Newsroom、自采409条短剧切片库
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              查验PDF原件 (32页)
            </button>
            <span>•</span>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              导出全量最新报告
            </button>
          </div>
        </div>
      </footer>

      {/* PDF Modal Viewer */}
      <PDFModalViewer
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        initialPage={6}
      />

      {/* Markdown Full Document Export Modal */}
      <MarkdownExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
