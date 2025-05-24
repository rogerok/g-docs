'use client';

import { observer } from 'mobx-react-lite';
import { useEditorStore } from '@/lib/stores/editorStore';
import { FC, ReactNode } from 'react';
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideUndo,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  SpellCheck,
  UnderlineIcon,
} from 'lucide-react';
import { ToolbarButton } from '@/components/Editor/ToolbarButton';

interface ToolbarProps {
  className?: string;
}

interface ToolbarConfig {
  icon: ReactNode;
  onClick: () => void;
  label: string;
  isActive?: boolean;
}

export const Toolbar: FC<ToolbarProps> = observer(() => {
  const editor = useEditorStore();

  const config: ToolbarConfig[][] = [
    [
      {
        label: 'Undo',
        icon: <LucideUndo />,
        onClick: editor.undo,
      },
      {
        label: 'Redo',
        icon: <Redo2Icon />,
        onClick: editor.redo,
      },
      {
        label: 'Print',
        icon: <PrinterIcon />,
        onClick: () => {
          if (window) {
            window.print();
          }
        },
      },
      {
        label: 'Spell Check',
        icon: <SpellCheck />,
        onClick: editor.spellCheck,
      },
    ],
    [
      {
        label: 'Bold',
        icon: <BoldIcon />,
        onClick: editor.toggleBold,
        isActive: editor.isActive('bold'),
      },
      {
        label: 'Italic',
        icon: <ItalicIcon />,
        onClick: editor.toggleItalic,
        isActive: editor.isActive('italic'),
      },
      {
        label: 'Underline',
        icon: <UnderlineIcon />,
        onClick: editor.toggleUnderline,
        isActive: editor.isActive('underline'),
      },
    ],
    [
      {
        label: 'Comment',
        icon: <MessageSquarePlusIcon />,
        onClick: () => console.log('TODO'),
        isActive: false,
      },
      {
        label: 'List Todo',
        icon: <ListTodoIcon />,
        onClick: editor.toggleTaskList,
        isActive: false,
      },
    ],
  ];

  return (
    <div
      className={
        'flex min-h-[40px] gap-1 rounded-3xl border-2 bg-gray-300 px-2.5 py-0.5'
      }
    >
      {config[0].map((action) => (
        <ToolbarButton
          icon={action.icon}
          key={action.label}
          onClick={action.onClick}
          label={action.label}
          isActive={action.isActive}
        />
      ))}
      {config[1].map((action) => (
        <ToolbarButton
          icon={action.icon}
          key={action.label}
          onClick={action.onClick}
          label={action.label}
          isActive={editor.editor?.isActive('italic')}
        />
      ))}
      {config[2].map((action) => (
        <ToolbarButton
          icon={action.icon}
          key={action.label}
          onClick={action.onClick}
          label={action.label}
          isActive={editor.editor?.isActive('italic')}
        />
      ))}
    </div>
  );
});
