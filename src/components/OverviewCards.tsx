import React from 'react';
import { Statistics } from '../types';

interface OverviewCardsProps {
  statistics: Statistics;
}

export const OverviewCards: React.FC<OverviewCardsProps> = ({ statistics }) => {
  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}小时${mins}分钟`;
    }
    return `${mins}分钟`;
  };

  const cards = [
    {
      title: '总学习时长',
      value: formatDuration(statistics.totalDuration),
      icon: '⏱️',
      color: 'bg-blue-500',
    },
    {
      title: '总练习数',
      value: statistics.totalExercises.toLocaleString(),
      icon: '📝',
      color: 'bg-green-500',
    },
    {
      title: '平均正确率',
      value: `${statistics.correctRate.toFixed(1)}%`,
      icon: '✅',
      color: 'bg-yellow-500',
    },
    {
      title: '完成度',
      value: `${statistics.completionRate.toFixed(1)}%`,
      icon: '📊',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{card.title}</p>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            </div>
            <div className={`${card.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

