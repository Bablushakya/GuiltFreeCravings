import type { ReactNode } from 'react';
import { Button } from '../ui';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-cream-tan bg-white px-6 py-16 text-center">
      {icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cream-peach text-primary">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      {description && (
        <p className="mt-2 max-w-md text-sm text-slate-600">{description}</p>
      )}

      {actionLabel && onAction && (
        <div className="mt-6">
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

export default EmptyState;
