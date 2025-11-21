import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TimeTrendData, ModuleComparisonData } from '../types';
import { MODULES } from '../data/mockData';
import { format } from 'date-fns';

interface ModuleChartsProps {
  timeTrendData: TimeTrendData[];
  moduleComparisonData: ModuleComparisonData[];
}

export const ModuleCharts: React.FC<ModuleChartsProps> = ({
  timeTrendData,
  moduleComparisonData,
}) => {
  // 格式化时间趋势数据
  const formattedTimeTrend = timeTrendData.map(item => ({
    date: format(new Date(item.date), 'MM/dd'),
    duration: item.duration,
    exercises: item.exercises,
    correctRate: Number(item.correctRate.toFixed(1)),
  }));

  // 格式化模块对比数据
  const formattedModuleComparison = moduleComparisonData.map(item => ({
    name: MODULES[item.module].name,
    count: item.count,
    duration: item.duration,
    avgScore: Number(item.avgScore.toFixed(1)),
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* 时间趋势图 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">学习趋势</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={formattedTimeTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="duration"
              stroke="#3b82f6"
              name="学习时长(分钟)"
              strokeWidth={2}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="exercises"
              stroke="#10b981"
              name="练习数"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="correctRate"
              stroke="#f59e0b"
              name="正确率(%)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 模块对比图 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">模块对比</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={formattedModuleComparison}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="count" fill="#3b82f6" name="活动次数" />
            <Bar yAxisId="right" dataKey="avgScore" fill="#10b981" name="平均分" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

