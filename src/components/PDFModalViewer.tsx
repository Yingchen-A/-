import React, { useState } from 'react';
import { FileText, ExternalLink, X, ChevronRight, CheckCircle2, Bookmark } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const PDFModalViewer: React.FC<Props> = ({ isOpen, onClose, initialPage = 6 }) => {
  const [selectedPage, setSelectedPage] = useState<number>(initialPage);

  if (!isOpen) return null;

  const keyReportPages = [
    { page: 3, title: '海外微短剧产业规模预估', summary: '2026年海外市场规模超60亿美元，其中AI剧漫剧超40亿美元（占大盘近70%）。' },
    { page: 6, title: 'APP内购收入走势 (12.7亿美元)', summary: '上半年双端内购约12.7亿美元，同比增13%；5-6月AI剧放量带动持续创新高。' },
    { page: 7, title: 'APP下载量走势 (14.41亿次)', summary: '双端总下载量14.41亿次，同比增79%，增长主力由真人实拍转向AI短剧。' },
    { page: 8, title: '内购收入国家分布 (美国占34%)', summary: '美日加包揽前三（超44%），成熟市场超60%；巴西、泰国进入TOP10。' },
    { page: 9, title: '下载量国家分布 (印度印尼占43%)', summary: '印度23%、印尼20%、巴西9%包揽前三，新兴市场贡献超七成下载量。' },
    { page: 10, title: '收入榜TOP20与集中度 (关键纠偏页)', summary: 'TOP20内购破10亿美元（占79.2%）；前五大合计7.15亿美元（占56.3%）；中国厂商占16席。' },
    { page: 11, title: '下载榜TOP20 (FreeReels登顶)', summary: '昆仑万维FreeReels以2.18亿次登顶；TOP20总下载超12亿次（占84%）。' },
    { page: 12, title: '中国出海厂商收入占比 (93%)', summary: '中国厂商内购11.82亿美元，占93%；海外本土微短剧APP占7%（7000万美元）。' },
    { page: 13, title: '中国出海厂商下载占比 (85%)', summary: '中国出海厂商下载量12.21亿次，占85%；海外本土占15%（2.17亿次）。' },
    { page: 17, title: 'TikTok微短剧分账 (8200万美元)', summary: '上半年累计分账8200万美元（超5.5亿元）；6月单月分成突破2200万美元。' },
    { page: 18, title: '平台真人&AI剧用户画像对比', summary: '短剧40%消费时长在AI；AI剧女性占优、以18-35岁年轻群体为主；真人剧覆盖25-55岁。' },
    { page: 19, title: 'TikTok 6月热播剧与多账号分发', summary: 'TOP20播放增量26.85亿；海马人AI剧《孕夫的華麗復仇》以多账号矩阵霸榜TOP2。' },
    { page: 21, title: 'TikTok短剧解说与国别关注度', summary: '解说受众≥35岁占61.6%；巴西以600.22万关注度断崖领跑。' },
    { page: 23, title: '每月投流素材量 (暴涨324%)', summary: '上半年累计1961万组素材，同比暴涨324%，半年超2025全年总和。' },
    { page: 26, title: '变现类型与免费模式 (IAA+150%)', summary: '仅内购+混变占超8成；IAA纯免费产品上半年涨幅150%，AI拉低供给边际成本。' },
    { page: 27, title: '月度上新数 (6月达38,722部)', summary: '6月上新38,722部创历史峰值，较2025年6月超5000部增长超6倍。' },
    { page: 28, title: '本土剧与译制剧分布 (46% vs 54%)', summary: '本土剧份额由27%攀升至46%（超10万部），译制剧从73%回落至54%。' },
    { page: 30, title: '热值总榜TOP20 (本土剧占19部)', summary: 'TOP20中本土剧19部，译制剧仅1部上榜；女频情感都市占90%以上。' },
    { page: 31, title: '海外AI剧漫剧热值榜 (麦芽/昆仑霸榜)', summary: 'NetShort与DramaWave包揽TOP20；西幻逆袭《One Move God Mode》登顶。' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-sans">
                DataEye《2026上半年海外短剧AI剧数据报告》权威原件核验索引
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                /public/assets/aistudio/2026_________AI______797b6ff4.pdf (共32页全量原件)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/2026_________AI______797b6ff4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>新标签页打开PDF</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body: Left Index + Right Embed / Detail */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Page Index */}
          <div className="w-full md:w-80 bg-slate-950/70 border-r border-slate-800 p-3 overflow-y-auto space-y-1.5 font-sans">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider px-2 py-1">
              核心实证关键页码导航（点击切换）
            </div>
            {keyReportPages.map((item) => (
              <button
                key={item.page}
                onClick={() => setSelectedPage(item.page)}
                className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-start gap-2 ${
                  selectedPage === item.page
                    ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-md'
                    : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                  selectedPage === item.page ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {item.page}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{item.title}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-normal">
                    {item.summary}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Preview / PDF Embed */}
          <div className="flex-1 bg-slate-900 p-4 flex flex-col overflow-hidden">
            {/* Top Info Banner for selected page */}
            {(() => {
              const cur = keyReportPages.find(p => p.page === selectedPage) || { page: selectedPage, title: `第 ${selectedPage} 页`, summary: '原件页面' };
              return (
                <div className="mb-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start justify-between gap-3 shrink-0">
                  <div>
                    <div className="flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold text-white text-sm font-sans">{cur.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                        Page {cur.page}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {cur.summary}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded shrink-0">
                    DataEye研究院独家发布
                  </span>
                </div>
              );
            })()}

            {/* Embedded Iframe directly pointing to the local PDF file */}
            <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden relative">
              <iframe
                src={`/assets/aistudio/2026_________AI______797b6ff4.pdf#page=${selectedPage}`}
                title={`DataEye 2026H1 Report Page ${selectedPage}`}
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
