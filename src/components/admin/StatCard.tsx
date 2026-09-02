import type { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

function StatCard({ label, value, change, changeLabel, icon, trend = 'neutral' }: StatCardProps) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-slate-600',
  };

  const trendIcons = {
    up: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
    down: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
    neutral: null,
  };

  return (
    <div className="card group transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600">{label}</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">
            {typeof value === 'number' ? value.toLocaleString('en-IN') : value}
          </p>
          
          {(change !== undefined || changeLabel) && (
            <div className="mt-3 flex items-center gap-2">
              {change !== undefined && (
                <span className={`flex items-center gap-1 text-sm font-semibold ${trendColors[trend]}`}>
                  {trendIcons[trend]}
                  {change > 0 ? '+' : ''}{change}%
                </span>
              )}
              {changeLabel && (
                <span className="text-xs text-slate-500">{changeLabel}</span>
              )}
            </div>
          )}
        </div>

        {icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;
