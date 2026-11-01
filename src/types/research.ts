export interface BulletPoint {
  id: string;
  category: string;
  title: string;
  content: string;
  coreMetrics: { label: string; value: string; trend?: 'up' | 'down' | 'neutral' }[];
  tag: '工业化底座' | 'AI降本' | '人机兜底' | '题材分布' | '转码机制' | '推荐算法' | '受众画像' | '曝光认同背离' | '冷启动' | '市场大盘' | '集中度核实' | '销售费用' | '投流成本' | '分账长尾';
  evidenceLevel: '一手财报/官方' | '一手公司财报' | '一手官方平台说明' | '行业权威原报告(DataEye)' | '行业研究报告(DataEye)' | '自采一手样本' | '从业者访谈与行业估算';
}

export interface SourceMappingItem {
  id: string;
  conclusionPoint: string;
  primarySource: string;
  primarySourceType: '一手公司财报' | '一手官方平台说明' | '一手团队自采样本' | '行业权威原报告(DataEye)' | '学术文献库(LeapSpace/DOI)';
  secondarySource: string;
  evidenceLocation: string; // e.g., "DataEye报告 第10页", "掌阅2025年报 第48页"
  credibilityRating: '★★★★★ (绝对可信)' | '★★★★☆ (行业权威测算)' | '★★★☆☆ (行业测算/媒体转引口径)';
  verificationStatus: '已逐页原件核实' | '已修正旧数据误差' | '已标注口径差异';
  criticalNotes: string; // 批判性核查说明，如“分母核算澄清”、“区分YouTube频道与App用户”等
}

export interface ChartDatasetItem {
  name: string;
  value: number;
  secondaryValue?: number;
  percentage?: string;
  color?: string;
  category?: string;
  note?: string;
}

export interface FactCheckDiff {
  subject: string;
  erroneousRumor: string;
  rumorSource: string;
  verifiedData: string;
  verifiedSource: string;
  correctionReason: string;
  impactOnConclusion: string;
}
