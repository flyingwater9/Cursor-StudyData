// 用户维度类型
export type UserScope = 'single' | 'class' | 'school' | 'region' | 'custom';

// 时间维度类型
export type TimeRange = 'today' | 'week' | 'month' | 'year' | 'custom';

// 产品线类型
export type ProductLine = 'school-sync' | 'new-concept' | 'homework' | 'word-zone';

// 模块类型
export type Module = 'word-reading' | 'dubbing' | 'point-reading' | 'practice' | 'homework' | 'word-zone';

// 产品线信息
export interface ProductLineInfo {
  id: ProductLine;
  name: string;
  modules: Module[];
}

// 模块信息
export interface ModuleInfo {
  id: Module;
  name: string;
  color: string;
}

// 学习记录
export interface LearningRecord {
  id: string;
  date: string; // YYYY-MM-DD
  productLine: ProductLine;
  module: Module;
  duration: number; // 学习时长（分钟）
  exercises?: ExerciseRecord[]; // 练习记录
  words?: WordRecord[]; // 单词记录
}

// 练习记录
export interface ExerciseRecord {
  id: string;
  question: string;
  answer: string;
  isCorrect: boolean;
  score: number; // 0-100
  timeSpent: number; // 秒
}

// 单词记录
export interface WordRecord {
  id: string;
  word: string;
  score: number; // 0-100 跟读评分
  attempts: number; // 尝试次数
}

// 产品线进度
export interface ProductProgress {
  productLine: ProductLine;
  totalUnits: number;
  completedUnits: number;
  units: UnitProgress[];
}

// 单元进度
export interface UnitProgress {
  unitId: string;
  unitName: string;
  progress: number; // 0-100
  completed: boolean;
}

// 统计数据
export interface Statistics {
  totalDuration: number; // 总学习时长（分钟）
  totalExercises: number; // 总练习数
  correctRate: number; // 平均正确率 0-100
  completionRate: number; // 完成度 0-100
}

// 日历热力图数据
export interface CalendarHeatmapData {
  date: string;
  count: number;
  modules: Module[];
  level: number; // 0-4 用于颜色深浅
}

// 时间趋势数据
export interface TimeTrendData {
  date: string;
  duration: number;
  exercises: number;
  correctRate: number;
}

// 模块对比数据
export interface ModuleComparisonData {
  module: Module;
  count: number;
  duration: number;
  avgScore: number;
}

// 筛选条件
export interface FilterConditions {
  userScope: UserScope;
  userIds?: string[];
  timeRange: TimeRange;
  startDate?: string;
  endDate?: string;
  productLines?: ProductLine[];
  modules?: Module[];
}

