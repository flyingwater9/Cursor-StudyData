import React from 'react';
import { FilterConditions, UserScope, TimeRange, ProductLine, Module } from '../types';
import { PRODUCT_LINES, MODULES } from '../data/mockData';

interface FilterBarProps {
  filters: FilterConditions;
  onFiltersChange: (filters: FilterConditions) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, onFiltersChange }) => {
  const handleUserScopeChange = (scope: UserScope) => {
    onFiltersChange({ ...filters, userScope: scope });
  };

  const handleTimeRangeChange = (range: TimeRange) => {
    onFiltersChange({ ...filters, timeRange: range });
  };

  const handleProductLineToggle = (productLine: ProductLine) => {
    const current = filters.productLines || [];
    const newList = current.includes(productLine)
      ? current.filter(p => p !== productLine)
      : [...current, productLine];
    onFiltersChange({ ...filters, productLines: newList.length > 0 ? newList : undefined });
  };

  const handleModuleToggle = (module: Module) => {
    const current = filters.modules || [];
    const newList = current.includes(module)
      ? current.filter(m => m !== module)
      : [...current, module];
    onFiltersChange({ ...filters, modules: newList.length > 0 ? newList : undefined });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 用户维度 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">用户维度</label>
          <select
            value={filters.userScope}
            onChange={(e) => handleUserScopeChange(e.target.value as UserScope)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="single">单个用户</option>
            <option value="class">班级</option>
            <option value="school">学校</option>
            <option value="region">地区</option>
            <option value="custom">自定义分群</option>
          </select>
        </div>

        {/* 时间维度 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">时间维度</label>
          <select
            value={filters.timeRange}
            onChange={(e) => handleTimeRangeChange(e.target.value as TimeRange)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="today">当天</option>
            <option value="week">近一周</option>
            <option value="month">近一月</option>
            <option value="year">近一年</option>
            <option value="custom">自定义范围</option>
          </select>
        </div>

        {/* 产品线 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">产品线</label>
          <div className="flex flex-wrap gap-2">
            {Object.values(PRODUCT_LINES).map(product => (
              <label key={product.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.productLines?.includes(product.id) ?? true}
                  onChange={() => handleProductLineToggle(product.id)}
                  className="mr-1"
                />
                <span className="text-sm">{product.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 模块 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">模块</label>
          <div className="flex flex-wrap gap-2">
            {Object.values(MODULES).map(module => (
              <label key={module.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.modules?.includes(module.id) ?? true}
                  onChange={() => handleModuleToggle(module.id)}
                  className="mr-1"
                />
                <span className="text-sm">{module.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

