import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
}

function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  const variantStyles = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    neutral: 'badge-neutral',
  };

  return (
    <span className={`${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
