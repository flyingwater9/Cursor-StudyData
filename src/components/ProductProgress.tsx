import React from 'react';
import { ProductProgress as ProductProgressType } from '../types';
import { PRODUCT_LINES } from '../data/mockData';

interface ProductProgressProps {
  progress: ProductProgressType[];
}

export const ProductProgress: React.FC<ProductProgressProps> = ({ progress }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">产品线进度</h2>
      <div className="space-y-6">
        {progress.map(product => {
          const productInfo = PRODUCT_LINES[product.productLine];
          const overallProgress = (product.completedUnits / product.totalUnits) * 100;
          
          return (
            <div key={product.productLine} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-700">{productInfo.name}</h3>
                <span className="text-sm text-gray-600">
                  {product.completedUnits} / {product.totalUnits} 单元
                </span>
              </div>
              
              {/* 总体进度条 */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">总体进度: {overallProgress.toFixed(1)}%</p>
              </div>
              
              {/* 单元详情 */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {product.units.map(unit => (
                  <div key={unit.unitId} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{unit.unitName}</span>
                      {unit.completed && (
                        <span className="text-green-500 text-xs">✓</span>
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full transition-all ${
                          unit.completed ? 'bg-green-500' : 'bg-primary-400'
                        }`}
                        style={{ width: `${unit.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{unit.progress}%</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

