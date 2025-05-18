'use client';
import { FC } from 'react';

import { useEditor, EditorContent, UseEditorOptions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';

import TaskList from '@tiptap/extension-task-list';
import TableHeader from '@tiptap/extension-table-header';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import ImageResize from 'tiptap-extension-resize-image';

import TipTapImage from '@tiptap/extension-image';
import { useEditorStore } from '@/lib/stores/editorStore';
import { observer } from 'mobx-react-lite';
import { Toolbar } from '@/components/Editor/Toolbar';

interface EditorProps {
  className?: string;
  options?: UseEditorOptions;
}

export const Editor: FC<EditorProps> = observer((props: EditorProps) => {
  const editorStore = useEditorStore();

  const editor = useEditor({
    ...props.options,
    onCreate: (editor) => editorStore.init(editor.editor),
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TipTapImage,
      ImageResize,
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        style: 'padding-left: 56px; padding-right: 56px;',
        class:
          'focus:outline-none print:border-0 bg-white border-2 flex flex-col min-h-[1054px] p-4 w-full cursor-text',
      },
    },
  });

  return (
    <div
      className={
        'bg-accent size-full overflow-x-auto px-4 print:overflow-visible print:bg-white print:p-0'
      }
    >
      <Toolbar />
      <div
        className={
          'mx-auto w-[816px] min-w-max justify-center py-4 print:w-full print:min-w-0 print:py-0'
        }
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
});
