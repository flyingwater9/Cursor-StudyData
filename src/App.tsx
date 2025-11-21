import { useState, useMemo } from 'react';
import { FilterBar } from './components/FilterBar';
import { OverviewCards } from './components/OverviewCards';
import { CalendarHeatmap } from './components/CalendarHeatmap';
import { ProductProgress } from './components/ProductProgress';
import { ModuleCharts } from './components/ModuleCharts';
import { DetailList } from './components/DetailList';
import {
  FilterConditions,
} from './types';
import {
  generateLearningRecords,
  generateProductProgress,
  generateCalendarHeatmapData,
  generateTimeTrendData,
  generateModuleComparisonData,
  generateStatistics,
} from './data/mockData';

function App() {
  const [filters, setFilters] = useState<FilterConditions>({
    userScope: 'single',
    timeRange: 'month',
  });

  // 生成所有Mock数据
  const allRecords = useMemo(() => generateLearningRecords(365), []);
  const allProgress = useMemo(() => generateProductProgress(), []);

  // 根据筛选条件过滤数据
  const filteredRecords = useMemo(() => {
    let filtered = [...allRecords];

    // 时间筛选
    const today = new Date();
    let startDate: Date;
    switch (filters.timeRange) {
      case 'today':
        startDate = today;
        break;
      case 'week':
        startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case 'year':
        startDate = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = filters.startDate ? new Date(filters.startDate) : new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    }
    const endDate = filters.endDate ? new Date(filters.endDate) : today;

    filtered = filtered.filter(record => {
      const recordDate = new Date(record.date);
      return recordDate >= startDate && recordDate <= endDate;
    });

    // 产品线筛选
    if (filters.productLines && filters.productLines.length > 0) {
      filtered = filtered.filter(record => filters.productLines!.includes(record.productLine));
    }

    // 模块筛选
    if (filters.modules && filters.modules.length > 0) {
      filtered = filtered.filter(record => filters.modules!.includes(record.module));
    }

    return filtered;
  }, [allRecords, filters]);

  // 生成各种统计数据
  const statistics = useMemo(() => generateStatistics(filteredRecords), [filteredRecords]);
  const calendarData = useMemo(() => generateCalendarHeatmapData(filteredRecords), [filteredRecords]);
  const timeTrendData = useMemo(() => {
    const days = filters.timeRange === 'year' ? 365 : filters.timeRange === 'month' ? 30 : filters.timeRange === 'week' ? 7 : 1;
    return generateTimeTrendData(filteredRecords, days);
  }, [filteredRecords, filters.timeRange]);
  const moduleComparisonData = useMemo(() => generateModuleComparisonData(filteredRecords), [filteredRecords]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-800">英语学习学情数据看板</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar filters={filters} onFiltersChange={setFilters} />
        <OverviewCards statistics={statistics} />
        <CalendarHeatmap data={calendarData} />
        <ProductProgress progress={allProgress} />
        <ModuleCharts
          timeTrendData={timeTrendData}
          moduleComparisonData={moduleComparisonData}
        />
        <DetailList records={filteredRecords} />
      </main>
    </div>
  );
}

export default App;

