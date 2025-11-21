import React, { useState } from 'react';
import { LearningRecord } from '../types';
import { PRODUCT_LINES, MODULES } from '../data/mockData';
import { format } from 'date-fns';

interface DetailListProps {
  records: LearningRecord[];
}

export const DetailList: React.FC<DetailListProps> = ({ records }) => {
  const [expandedRecords, setExpandedRecords] = useState<Set<string>>(new Set());

  const toggleExpand = (recordId: string) => {
    const newExpanded = new Set(expandedRecords);
    if (newExpanded.has(recordId)) {
      newExpanded.delete(recordId);
    } else {
      newExpanded.add(recordId);
    }
    setExpandedRecords(newExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">详细学习记录</h2>
      <div className="space-y-3">
        {records.slice(0, 50).map(record => {
          const productInfo = PRODUCT_LINES[record.productLine];
          const moduleInfo = MODULES[record.module];
          const isExpanded = expandedRecords.has(record.id);
          
          return (
            <div
              key={record.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(record.id)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: moduleInfo.color }}
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {productInfo.name} - {moduleInfo.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {format(new Date(record.date), 'yyyy年MM月dd日')} · 学习时长: {record.duration}分钟
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {record.exercises && (
                    <span className="text-sm text-gray-600">
                      练习: {record.exercises.length}题
                    </span>
                  )}
                  {record.words && (
                    <span className="text-sm text-gray-600">
                      单词: {record.words.length}个
                    </span>
                  )}
                  <span className="text-gray-400">
                    {isExpanded ? '▼' : '▶'}
                  </span>
                </div>
              </div>
              
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {/* 练习记录 */}
                  {record.exercises && record.exercises.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">练习详情</h4>
                      <div className="space-y-2">
                        {record.exercises.map(exercise => (
                          <div
                            key={exercise.id}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <span className="text-sm text-gray-700">{exercise.question}</span>
                            <div className="flex items-center gap-3">
                              <span
                                className={`text-sm font-medium ${
                                  exercise.isCorrect ? 'text-green-600' : 'text-red-600'
                                }`}
                              >
                                {exercise.isCorrect ? '✓' : '✗'}
                              </span>
                              <span className="text-sm text-gray-600">得分: {exercise.score}</span>
                              <span className="text-sm text-gray-500">用时: {exercise.timeSpent}秒</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* 单词记录 */}
                  {record.words && record.words.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">单词跟读详情</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {record.words.map(word => (
                          <div
                            key={word.id}
                            className="p-2 bg-gray-50 rounded flex items-center justify-between"
                          >
                            <span className="text-sm text-gray-700">{word.word}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">评分: {word.score}</span>
                              <span className="text-xs text-gray-500">({word.attempts}次)</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {records.length > 50 && (
        <p className="text-center text-sm text-gray-500 mt-4">
          仅显示最近50条记录，共{records.length}条
        </p>
      )}
    </div>
  );
};

