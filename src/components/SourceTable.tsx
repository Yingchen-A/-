import React, { useState } from 'react';
import { SourceMappingItem } from '../types/research';
import { Search, CheckCircle2, AlertTriangle, ShieldCheck, ExternalLink, HelpCircle, FileText } from 'lucide-react';

interface Props {
  sources: SourceMappingItem[];
  moduleName: string;
}

export const SourceTable: React.FC<Props> = ({ sources, moduleName }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  const filtered = sources.filter(item => {
    const matchesSearch = item.conclusionPoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.primarySource.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.evidenceLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.criticalNotes.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || item.primarySourceType === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-xl my-6">
      {/* Header & Filter Controls */}
      <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="text-base font-semibold text-slate-100">{moduleName} —— 查询来源对应表（优先可信源审计）</h4>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            执行标准：上市公司法定财报 &gt; 平台一手官方指南 &gt; 行业权威原报告(DataEye) &gt; 自采一手实证样本。排除自媒体二手张冠李戴。
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜索源头、页码或指标..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-slate-200 px-2.5 py-1.5 focus:outline-none focus:border-indigo-500"
          >
            <option value="all">全部来源类别</option>
            <option value="一手公司财报">一手公司财报</option>
            <option value="行业权威原报告(DataEye)">行业权威原报告(DataEye)</option>
            <option value="一手官方平台说明">一手官方平台说明</option>
            <option value="一手团队自采样本">一手团队自采样本</option>
          </select>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950/80 text-slate-400 font-medium uppercase tracking-wider border-b border-slate-800">
            <tr>
              <th className="py-3 px-4 w-1/4">核心结论点</th>
              <th className="py-3 px-4 w-1/4">优先源头（一手/权威）</th>
              <th className="py-3 px-4 w-1/6">原报告定位 / 法律出处</th>
              <th className="py-3 px-4 w-1/6">转引/二手辅助对比</th>
              <th className="py-3 px-4 w-1/6">可信度与核查状态</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
            {filtered.map((item) => (
              <React.Fragment key={item.id}>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-sans font-medium text-slate-200">
                    <div className="leading-relaxed">{item.conclusionPoint}</div>
                    <button
                      onClick={() => setExpandedNoteId(expandedNoteId === item.id ? null : item.id)}
                      className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 mt-1 cursor-pointer font-sans"
                    >
                      <HelpCircle className="w-3 h-3" />
                      {expandedNoteId === item.id ? '收起批判性核查说明' : '查看批判性核查说明与分母澄清'}
                    </button>
                  </td>

                  <td className="py-3 px-4 font-sans">
                    <div className="text-slate-100 font-medium">{item.primarySource}</div>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                      {item.primarySourceType}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-emerald-400 flex flex-col gap-1">
                    <div className="flex items-center gap-1 font-semibold">
                      <FileText className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item.evidenceLocation}</span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-slate-400 font-sans">
                    <div className="italic text-[11px] text-slate-400">{item.secondarySource}</div>
                    <span className="inline-block mt-1 text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
                      仅作辅助印证
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <div className="font-semibold text-amber-400">{item.credibilityRating}</div>
                    <div className="mt-1 flex items-center gap-1 text-slate-200">
                      {item.verificationStatus === '已修正旧数据误差' ? (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-amber-950 text-amber-300 border border-amber-800/50">
                          <AlertTriangle className="w-3 h-3 text-amber-400" />
                          {item.verificationStatus}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          {item.verificationStatus}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>

                {/* Critical Note Accordion Row */}
                {expandedNoteId === item.id && (
                  <tr className="bg-slate-950/70 border-b border-slate-800 font-sans">
                    <td colSpan={5} className="py-2.5 px-4 text-xs">
                      <div className="flex items-start gap-2 bg-indigo-950/30 border border-indigo-900/40 p-3 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-indigo-300">批判性信息素养核查备忘：</span>
                          <span className="text-slate-300 ml-1 leading-relaxed">{item.criticalNotes}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      
      {filtered.length === 0 && (
        <div className="p-8 text-center text-slate-500 text-xs font-sans">
          未检索到符合条件的来源记录
        </div>
      )}
    </div>
  );
};
