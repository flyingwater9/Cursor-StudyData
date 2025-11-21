import React, { useMemo } from 'react';
import { CalendarHeatmapData } from '../types';
import { MODULES } from '../data/mockData';
import { format, subDays, eachDayOfInterval } from 'date-fns';

interface CalendarHeatmapProps {
  data: CalendarHeatmapData[];
}

export const CalendarHeatmap: React.FC<CalendarHeatmapProps> = ({ data }) => {
  // 生成过去一年的日期
  const today = new Date();
  const oneYearAgo = subDays(today, 365);
  const allDates = eachDayOfInterval({ start: oneYearAgo, end: today });
  
  // 创建数据映射
  const dataMap = useMemo(() => {
    const map = new Map<string, CalendarHeatmapData>();
    data.forEach(item => map.set(item.date, item));
    return map;
  }, [data]);

  // 获取颜色
  const getColor = (level: number): string => {
    const colors = [
      '#ebedf0', // 0 - 无数据
      '#c6e48b', // 1 - 少量
      '#7bc96f', // 2 - 中等
      '#239a3b', // 3 - 较多
      '#196127', // 4 - 很多
    ];
    return colors[level] || colors[0];
  };

  // 按周分组（从一年的第一天开始，补齐第一周）
  const weeks: CalendarHeatmapData[][] = [];
  let currentWeek: CalendarHeatmapData[] = [];
  
  // 获取第一天的星期几（0=周日，1=周一...）
  const firstDayOfWeek = allDates[0].getDay();
  
  // 补齐第一周前面的空白
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push({ date: '', count: 0, modules: [], level: 0 });
  }
  
  allDates.forEach((date, index) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const dayOfWeek = date.getDay();
    const item = dataMap.get(dateStr) || { date: dateStr, count: 0, modules: [], level: 0 };
    
    currentWeek.push(item);
    
    // 如果是周六（一周的最后一天），开始新的一周
    if (dayOfWeek === 6) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
    
    // 最后一天，如果还没完成一周，也要添加
    if (index === allDates.length - 1 && currentWeek.length > 0) {
      // 补齐最后一周后面的空白
      while (currentWeek.length < 7) {
        currentWeek.push({ date: '', count: 0, modules: [], level: 0 });
      }
      weeks.push(currentWeek);
    }
  });

  // 获取模块颜色提示
  const moduleColors = Object.values(MODULES).map(m => ({
    name: m.name,
    color: m.color,
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">学习日历</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((item, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="w-3 h-3 rounded-sm cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all"
                  style={{ backgroundColor: getColor(item.level) }}
                  title={`${item.date}: ${item.count}次学习活动`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span>少</span>
          <div className="inline-flex gap-1 ml-2">
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: getColor(level) }}
              />
            ))}
          </div>
          <span className="ml-2">多</span>
        </div>
        <div className="flex gap-4 text-sm">
          {moduleColors.map(module => (
            <div key={module.name} className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: module.color }}
              />
              <span className="text-gray-600">{module.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

