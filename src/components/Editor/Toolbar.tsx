'use client';
import { Button } from '@/components/ui/button';
import { observer } from 'mobx-react-lite';
import { useEditorStore } from '@/lib/stores/editorStore';
import { ReactNode } from 'react';
import { LucideUndo } from 'lucide-react';

interface ToolbarProps {
  className?: string;
}

interface ToolbarConfig {
  icon: ReactNode;
  onClick: () => void;
  label: string;
  isActive?: boolean;
}

export const Toolbar = observer((props: ToolbarProps) => {
  const editor = useEditorStore();

  const config: ToolbarConfig[] = [
    {
      label: 'Undo',
      icon: <LucideUndo />,
      onClick: editor.undo,
    },
  ];

  return (
    <div className={'flex border-2'}>
      {config.map((action) => (
        <Button key={action.label} onClick={action.onClick}>
          {action.icon}
        </Button>
      ))}
    </div>
  );
});
