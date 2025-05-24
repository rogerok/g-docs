'use client';

import { FC, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { observer } from 'mobx-react-lite';

interface ToolbarButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  isActive?: boolean;
  icon: ReactNode;
}

export const ToolbarButton: FC<ToolbarButtonProps> = observer((props) => {
  return (
    <Button
      className={cn(props.className, props.isActive && 'bg-gray-500')}
      onClick={props.onClick}
    >
      {props.icon}
    </Button>
  );
});
