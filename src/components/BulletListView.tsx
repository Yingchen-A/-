import React from 'react';
import { BulletPoint } from '../types/research';
import { CheckCircle, TrendingUp, TrendingDown, Minus, ShieldCheck } from 'lucide-react';

interface Props {
  bullets: BulletPoint[];
  moduleTitle: string;
}

export const BulletListView: React.FC<Props> = ({ bullets, moduleTitle }) => {
  return (
    <div className="space-y-4 my-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <h3 className="text-lg font-bold text-white font-sans">{moduleTitle} —— 能力详细结论 Bullet List</h3>
        </div>
        <span className="text-xs text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-2.5 py-1 rounded-full font-mono">
          共 {bullets.length} 条严谨事实实证
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {bullets.map((bullet, idx) => (
          <div
            key={bullet.id}
            className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all shadow-md hover:shadow-indigo-500/5 group"
          >
            {/* Top row: Badge, Category, Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-indigo-600/20 text-indigo-400 font-mono text-xs font-bold border border-indigo-500/30">
                  {idx + 1}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {bullet.category}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-indigo-950/70 text-indigo-300 border border-indigo-800/60 font-mono">
                  #{bullet.tag}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-2.5 py-0.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>证据级别: {bullet.evidenceLevel}</span>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-base font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors mt-1 mb-2 font-sans flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>{bullet.title}</span>
            </h4>

            {/* Content paragraph */}
            <p className="text-sm text-slate-300 leading-relaxed pl-6 font-sans">
              {bullet.content}
            </p>

            {/* Core Metrics Cards Bar */}
            {bullet.coreMetrics && bullet.coreMetrics.length > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pl-6">
                {bullet.coreMetrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-slate-950/60 border border-slate-800 rounded-lg p-2.5 flex items-center justify-between"
                  >
                    <span className="text-xs text-slate-400">{metric.label}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold font-mono text-emerald-400">{metric.value}</span>
                      {metric.trend === 'up' && <TrendingUp className="w-3 h-3 text-emerald-400" />}
                      {metric.trend === 'down' && <TrendingDown className="w-3 h-3 text-rose-400" />}
                      {metric.trend === 'neutral' && <Minus className="w-3 h-3 text-slate-400" />}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
