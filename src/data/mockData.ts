import { 
  LearningRecord, 
  ProductProgress, 
  CalendarHeatmapData,
  TimeTrendData,
  ModuleComparisonData,
  ProductLine,
  Module,
  Statistics
} from '../types';
import { subDays, format, eachDayOfInterval } from 'date-fns';

// 产品线配置
export const PRODUCT_LINES = {
  'school-sync': { id: 'school-sync' as ProductLine, name: '校内同步', modules: ['word-reading', 'dubbing', 'point-reading', 'practice'] as Module[] },
  'new-concept': { id: 'new-concept' as ProductLine, name: '新概念英语', modules: ['word-reading', 'dubbing', 'practice'] as Module[] },
  'homework': { id: 'homework' as ProductLine, name: '作业', modules: ['homework'] as Module[] },
  'word-zone': { id: 'word-zone' as ProductLine, name: '单词专区', modules: ['word-zone'] as Module[] },
};

// 模块配置
export const MODULES = {
  'word-reading': { id: 'word-reading' as Module, name: '单词跟读', color: '#3b82f6' },
  'dubbing': { id: 'dubbing' as Module, name: '配音', color: '#10b981' },
  'point-reading': { id: 'point-reading' as Module, name: '点读', color: '#f59e0b' },
  'practice': { id: 'practice' as Module, name: '练习', color: '#ef4444' },
  'homework': { id: 'homework' as Module, name: '作业', color: '#8b5cf6' },
  'word-zone': { id: 'word-zone' as Module, name: '单词专区', color: '#06b6d4' },
};

// 生成随机整数
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 生成学习记录
export function generateLearningRecords(days: number = 365): LearningRecord[] {
  const records: LearningRecord[] = [];
  const today = new Date();
  
  for (let i = 0; i < days; i++) {
    const date = subDays(today, i);
    const dateStr = format(date, 'yyyy-MM-dd');
    
    // 每天可能有0-3次学习活动
    const activityCount = randomInt(0, 3);
    
    for (let j = 0; j < activityCount; j++) {
      const productLineKeys = Object.keys(PRODUCT_LINES) as ProductLine[];
      const productLine = productLineKeys[randomInt(0, productLineKeys.length - 1)];
      const productInfo = PRODUCT_LINES[productLine];
      const module = productInfo.modules[randomInt(0, productInfo.modules.length - 1)];
      
      const record: LearningRecord = {
        id: `${dateStr}-${j}`,
        date: dateStr,
        productLine,
        module,
        duration: randomInt(5, 60),
      };
      
      // 如果是练习模块，添加练习记录
      if (module === 'practice' || module === 'homework') {
        const exerciseCount = randomInt(3, 15);
        record.exercises = Array.from({ length: exerciseCount }, (_, idx) => ({
          id: `${record.id}-ex-${idx}`,
          question: `题目 ${idx + 1}`,
          answer: '答案',
          isCorrect: Math.random() > 0.3,
          score: randomInt(60, 100),
          timeSpent: randomInt(10, 120),
        }));
      }
      
      // 如果是单词跟读模块，添加单词记录
      if (module === 'word-reading' || module === 'word-zone') {
        const wordCount = randomInt(3, 10);
        record.words = Array.from({ length: wordCount }, (_, idx) => ({
          id: `${record.id}-word-${idx}`,
          word: `word${idx + 1}`,
          score: randomInt(70, 100),
          attempts: randomInt(1, 3),
        }));
      }
      
      records.push(record);
    }
  }
  
  return records.sort((a, b) => b.date.localeCompare(a.date));
}

// 生成产品线进度
export function generateProductProgress(): ProductProgress[] {
  const progress: ProductProgress[] = [];
  
  Object.values(PRODUCT_LINES).forEach(product => {
    const totalUnits = randomInt(5, 10);
    const completedUnits = randomInt(0, totalUnits);
    const units: ProductProgress['units'] = [];
    
    for (let i = 1; i <= totalUnits; i++) {
      const progressValue = i <= completedUnits ? 100 : randomInt(0, 90);
      units.push({
        unitId: `unit-${i}`,
        unitName: `第${i}单元`,
        progress: progressValue,
        completed: progressValue === 100,
      });
    }
    
    progress.push({
      productLine: product.id,
      totalUnits,
      completedUnits,
      units,
    });
  });
  
  return progress;
}

// 生成日历热力图数据
export function generateCalendarHeatmapData(records: LearningRecord[]): CalendarHeatmapData[] {
  const dataMap = new Map<string, CalendarHeatmapData>();
  
  records.forEach(record => {
    const existing = dataMap.get(record.date);
    if (existing) {
      existing.count += 1;
      if (!existing.modules.includes(record.module)) {
        existing.modules.push(record.module);
      }
    } else {
      dataMap.set(record.date, {
        date: record.date,
        count: 1,
        modules: [record.module],
        level: 0,
      });
    }
  });
  
  const data = Array.from(dataMap.values());
  const maxCount = Math.max(...data.map(d => d.count), 1);
  
  // 计算level（0-4）
  data.forEach(item => {
    item.level = Math.floor((item.count / maxCount) * 4);
  });
  
  return data;
}

// 生成时间趋势数据
export function generateTimeTrendData(records: LearningRecord[], days: number = 30): TimeTrendData[] {
  const dataMap = new Map<string, { duration: number; exercises: number; correct: number; total: number }>();
  
  records.forEach(record => {
    const existing = dataMap.get(record.date) || { duration: 0, exercises: 0, correct: 0, total: 0 };
    existing.duration += record.duration;
    
    if (record.exercises) {
      existing.exercises += record.exercises.length;
      record.exercises.forEach(ex => {
        existing.total += 1;
        if (ex.isCorrect) existing.correct += 1;
      });
    }
    
    dataMap.set(record.date, existing);
  });
  
  const today = new Date();
  const dates = eachDayOfInterval({ start: subDays(today, days - 1), end: today });
  
  return dates.map(date => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const data = dataMap.get(dateStr) || { duration: 0, exercises: 0, correct: 0, total: 0 };
    return {
      date: dateStr,
      duration: data.duration,
      exercises: data.exercises,
      correctRate: data.total > 0 ? (data.correct / data.total) * 100 : 0,
    };
  });
}

// 生成模块对比数据
export function generateModuleComparisonData(records: LearningRecord[]): ModuleComparisonData[] {
  const moduleMap = new Map<Module, { count: number; duration: number; scores: number[] }>();
  
  records.forEach(record => {
    const existing = moduleMap.get(record.module) || { count: 0, duration: 0, scores: [] };
    existing.count += 1;
    existing.duration += record.duration;
    
    if (record.exercises) {
      record.exercises.forEach(ex => existing.scores.push(ex.score));
    }
    if (record.words) {
      record.words.forEach(word => existing.scores.push(word.score));
    }
    
    moduleMap.set(record.module, existing);
  });
  
  return Array.from(moduleMap.entries()).map(([module, data]) => ({
    module,
    count: data.count,
    duration: data.duration,
    avgScore: data.scores.length > 0 
      ? data.scores.reduce((a, b) => a + b, 0) / data.scores.length 
      : 0,
  }));
}

// 生成统计数据
export function generateStatistics(records: LearningRecord[]): Statistics {
  let totalDuration = 0;
  let totalExercises = 0;
  let correctExercises = 0;
  let totalUnits = 0;
  let completedUnits = 0;
  
  records.forEach(record => {
    totalDuration += record.duration;
    if (record.exercises) {
      totalExercises += record.exercises.length;
      record.exercises.forEach(ex => {
        if (ex.isCorrect) correctExercises += 1;
      });
    }
  });
  
  const progress = generateProductProgress();
  progress.forEach(p => {
    totalUnits += p.totalUnits;
    completedUnits += p.completedUnits;
  });
  
  return {
    totalDuration,
    totalExercises,
    correctRate: totalExercises > 0 ? (correctExercises / totalExercises) * 100 : 0,
    completionRate: totalUnits > 0 ? (completedUnits / totalUnits) * 100 : 0,
  };
}

